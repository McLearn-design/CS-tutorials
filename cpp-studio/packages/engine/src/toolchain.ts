import { spawn } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { describeCrash, describeSanitizerReport, parseDiagnostics } from './diagnostics';
import { BuildResult, BuildTarget, CommandResult, RunResult } from './types';

export type CompilerKind = 'gcc' | 'clang' | 'msvc' | 'unknown';

export interface Compiler {
  path: string;
  kind: CompilerKind;
  version: string;
}

export interface Toolchain {
  compiler?: Compiler;
  cmake?: { path: string; version: string };
  debugger?: { path: string; kind: 'gdb' | 'lldb' };
  git?: { path: string };
}

const isWindows = process.platform === 'win32';
export const exeSuffix = isWindows ? '.exe' : '';
/** Build tree used when the studio itself runs CMake (relative to the project). */
export const STUDIO_CMAKE_DIR = 'build/studio';

export function findOnPath(name: string): string | undefined {
  if (path.isAbsolute(name)) return fs.existsSync(name) ? name : undefined;
  const exts = isWindows ? (process.env.PATHEXT ?? '.EXE;.CMD;.BAT').split(';').concat(['']) : [''];
  for (const dir of (process.env.PATH ?? '').split(path.delimiter)) {
    if (!dir) continue;
    for (const ext of exts) {
      const candidate = path.join(dir, name + ext.toLowerCase());
      const candidateUpper = path.join(dir, name + ext);
      for (const c of [candidate, candidateUpper]) {
        try {
          if (fs.statSync(c).isFile()) return c;
        } catch { /* not here */ }
      }
    }
  }
  return undefined;
}

export interface RunOptions {
  cwd: string;
  stdin?: string;
  timeoutMs?: number;
  env?: NodeJS.ProcessEnv;
}

export function runCommand(command: string, args: string[], opts: RunOptions): Promise<CommandResult> {
  const start = Date.now();
  return new Promise((resolve) => {
    let stdout = '';
    let stderr = '';
    let timedOut = false;
    let settled = false;
    const finish = (exitCode: number | null, signal: string | null) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ command, args, cwd: opts.cwd, exitCode, signal, stdout, stderr, timedOut, durationMs: Date.now() - start });
    };
    let child;
    try {
      child = spawn(command, args, { cwd: opts.cwd, env: opts.env ?? process.env, windowsHide: true });
    } catch (e) {
      stderr = String(e);
      finish(null, null);
      return;
    }
    const limit = 2 * 1024 * 1024;
    child.stdout.on('data', (d: Buffer) => { if (stdout.length < limit) stdout += d.toString(); });
    child.stderr.on('data', (d: Buffer) => { if (stderr.length < limit) stderr += d.toString(); });
    child.on('error', (e) => { stderr += String(e); finish(null, null); });
    child.on('close', (code, signal) => finish(code, signal));
    const timer = setTimeout(() => { timedOut = true; child.kill('SIGKILL'); }, opts.timeoutMs ?? 60_000);
    child.stdin.on('error', () => { /* program exited before reading stdin */ });
    if (opts.stdin !== undefined) child.stdin.write(opts.stdin);
    child.stdin.end();
  });
}

async function versionText(cmd: string, args: string[]): Promise<string> {
  const r = await runCommand(cmd, args, { cwd: process.cwd(), timeoutMs: 10_000 });
  return r.stdout || r.stderr;
}

async function versionOf(cmd: string, args: string[]): Promise<string> {
  return (await versionText(cmd, args)).split(/\r?\n/).find((l) => l.trim()) ?? '';
}

/** Find the real tools on this machine. Respects $CXX like CMake does. */
export async function detectToolchain(): Promise<Toolchain> {
  const tc: Toolchain = {};
  const candidates = [process.env.CXX, ...(isWindows ? ['cl', 'clang++', 'g++'] : ['c++', 'g++', 'clang++'])]
    .filter((c): c is string => !!c);
  for (const c of candidates) {
    const p = findOnPath(c);
    if (!p) continue;
    if (/(^|[\\/])cl(\.exe)?$/i.test(p)) {
      tc.compiler = { path: p, kind: 'msvc', version: await versionOf(p, []) };
    } else {
      const text = await versionText(p, ['--version']);
      const kind = /clang/i.test(text) ? 'clang' : /g\+\+|gcc|GCC|Free Software Foundation/.test(text) ? 'gcc' : 'unknown';
      tc.compiler = { path: p, kind, version: text.split(/\r?\n/)[0] ?? '' };
    }
    break;
  }
  const cmake = findOnPath('cmake');
  if (cmake) tc.cmake = { path: cmake, version: await versionOf(cmake, ['--version']) };
  const gdb = findOnPath('gdb');
  const lldb = findOnPath('lldb');
  if (process.platform === 'darwin' && lldb) tc.debugger = { path: lldb, kind: 'lldb' };
  else if (gdb) tc.debugger = { path: gdb, kind: 'gdb' };
  else if (lldb) tc.debugger = { path: lldb, kind: 'lldb' };
  const git = findOnPath('git');
  if (git) tc.git = { path: git };
  return tc;
}

function formatCommand(r: CommandResult): string {
  const quoted = r.args.map((a) => (/\s/.test(a) ? `"${a}"` : a));
  return `$ ${path.basename(r.command)} ${quoted.join(' ')}`;
}

function buildLog(results: CommandResult[]): string {
  return results.map((r) => [formatCommand(r), r.stdout, r.stderr].filter(Boolean).join('\n')).join('\n');
}

/** Where a CMake target's executable ends up (single- and multi-config generators). */
export function findCMakeExecutable(buildDir: string, target: string): string | undefined {
  const names = [target + exeSuffix];
  const dirs = ['', 'Debug', 'RelWithDebInfo', 'Release'];
  for (const d of dirs) {
    for (const n of names) {
      const p = path.join(buildDir, d, n);
      if (fs.existsSync(p)) return p;
    }
  }
  return undefined;
}

export class Builder {
  private sanitizerProbe = new Map<string, Promise<boolean>>();

  constructor(private readonly tc: Toolchain) {}

  /** Can this compiler build *and run* a program with the given sanitizers? Probed once per set. */
  sanitizersAvailable(kinds: string[]): Promise<boolean> {
    const cc = this.tc.compiler;
    const key = kinds.join(',');
    if (!cc) return Promise.resolve(false);
    let p = this.sanitizerProbe.get(key);
    if (!p) {
      p = (async () => {
        const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cpp-studio-san-'));
        try {
          const src = path.join(dir, 'probe.cpp');
          fs.writeFileSync(src, 'int main() { int* p = new int(1); int v = *p; delete p; return v - 1; }\n');
          const exe = path.join(dir, 'probe' + exeSuffix);
          const args = cc.kind === 'msvc'
            ? (kinds.includes('address') && kinds.length === 1 ? ['/nologo', '/fsanitize=address', '/Zi', src, `/Fe:${exe}`] : null)
            : [`-fsanitize=${key}`, '-g', src, '-o', exe];
          if (!args) return false;
          const b = await runCommand(cc.path, args, { cwd: dir, timeoutMs: 60_000 });
          if (b.exitCode !== 0) return false;
          const r = await runCommand(exe, [], { cwd: dir, timeoutMs: 20_000, env: sanitizerEnv() });
          return r.exitCode === 0;
        } finally {
          fs.rmSync(dir, { recursive: true, force: true });
        }
      })();
      this.sanitizerProbe.set(key, p);
    }
    return p;
  }

  async build(name: string, target: BuildTarget, projectDir: string): Promise<BuildResult> {
    return target.system === 'cmake' ? this.buildCMake(name, target, projectDir) : this.buildDirect(name, target, projectDir);
  }

  private fail(name: string, message: string): BuildResult {
    return {
      target: name, ok: false, commands: [], log: message,
      diagnostics: [{ file: '', line: 0, column: 0, severity: 'error', message, phase: 'compiler' }],
    };
  }

  private async buildDirect(name: string, t: BuildTarget, projectDir: string): Promise<BuildResult> {
    const cc = this.tc.compiler;
    if (!cc) return this.fail(name, 'No C++ compiler found. Install g++, clang++ or MSVC (see `cpp-studio doctor`).');
    const missing = (t.sources ?? []).filter((s) => !fs.existsSync(path.resolve(projectDir, s)));
    if (missing.length) {
      return this.fail(name, `Cannot build: ${missing.join(', ')} ${missing.length === 1 ? 'does' : 'do'} not exist yet.`);
    }
    const outDir = path.join(projectDir, 'build', 'direct');
    fs.mkdirSync(outDir, { recursive: true });
    const exe = path.join(outDir, t.output + exeSuffix);
    const std = t.standard ?? 'c++20';
    let note: string | undefined;
    let sanitize: string[] = [];
    if (t.sanitize?.length) {
      if (await this.sanitizersAvailable(t.sanitize)) {
        sanitize = cc.kind === 'msvc' ? ['/fsanitize=address'] : [`-fsanitize=${t.sanitize.join(',')}`, '-fno-omit-frame-pointer'];
      } else {
        note = `Your compiler could not build with ${t.sanitize.join(' + ')} sanitizer support, so this was checked without it. ` +
          'Memory bugs may go unnoticed. On Linux install the sanitizer runtime (`libasan` + `libubsan` for GCC, `libclang-rt-dev` for clang); ' +
          'Apple clang and recent MSVC include AddressSanitizer.';
      }
    }
    let args: string[];
    if (cc.kind === 'msvc') {
      args = [`/std:${std}`, '/EHsc', '/W4', '/Zi', '/nologo', ...sanitize,
        ...(t.includeDirs ?? []).map((d) => `/I${d}`), ...(t.sources ?? []), `/Fe:${exe}`, `/Fo:${outDir}${path.sep}`];
    } else {
      args = [`-std=${std}`, '-Wall', '-Wextra', '-g', '-fdiagnostics-color=never', ...sanitize,
        ...(t.includeDirs ?? []).map((d) => `-I${d}`), ...(t.flags ?? []), ...(t.sources ?? []), '-o', exe];
    }
    // Remove a stale executable so a failed build can never run old code.
    try { fs.rmSync(exe, { force: true }); } catch { /* ignore */ }
    const r = await runCommand(cc.path, args, { cwd: projectDir, timeoutMs: 120_000 });
    const diagnostics = parseDiagnostics(r.stdout + '\n' + r.stderr, projectDir);
    const ok = r.exitCode === 0 && fs.existsSync(exe);
    if (!ok && !diagnostics.some((d) => d.severity === 'error')) {
      diagnostics.push({ file: '', line: 0, column: 0, severity: 'error', message: (r.stderr || r.stdout || 'Build failed').trim().split('\n').slice(-3).join(' '), phase: 'compiler' });
    }
    return { target: name, ok, note, executable: ok ? exe : undefined, diagnostics, commands: [r], log: buildLog([r]) };
  }

  private async buildCMake(name: string, t: BuildTarget, projectDir: string): Promise<BuildResult> {
    const cmake = this.tc.cmake;
    if (!cmake) return this.fail(name, 'CMake was not found on PATH. Install CMake 3.20+ (see `cpp-studio doctor`).');
    if (!fs.existsSync(path.join(projectDir, 'CMakeLists.txt'))) {
      return this.fail(name, 'There is no CMakeLists.txt in the project yet, so CMake has nothing to build.');
    }
    // The studio uses its own build tree so the learner's `build/` stays entirely theirs.
    const buildDir = path.join(projectDir, STUDIO_CMAKE_DIR);
    const commands: CommandResult[] = [];
    // Always (re)configure: it is cheap once cached, and a target that was just added to
    // CMakeLists.txt is unknown to the old build system until CMake regenerates it.
    {
      const args = fs.existsSync(path.join(buildDir, 'CMakeCache.txt'))
        ? ['-S', '.', '-B', STUDIO_CMAKE_DIR]
        : ['-S', '.', '-B', STUDIO_CMAKE_DIR, '-DCMAKE_BUILD_TYPE=Debug', '-DCMAKE_EXPORT_COMPILE_COMMANDS=ON'];
      const conf = await runCommand(cmake.path, args, { cwd: projectDir, timeoutMs: 180_000 });
      commands.push(conf);
      if (conf.exitCode !== 0) {
        const msg = (conf.stderr || conf.stdout).trim();
        return {
          target: name, ok: false, commands, log: buildLog(commands),
          diagnostics: [{ file: 'CMakeLists.txt', line: cmakeErrorLine(msg), column: 1, severity: 'error', message: firstCMakeError(msg), phase: 'compiler' }],
        };
      }
    }
    const stale = findCMakeExecutable(buildDir, t.output);
    if (stale) { try { fs.rmSync(stale, { force: true }); } catch { /* ignore */ } }
    const b = await runCommand(cmake.path, ['--build', STUDIO_CMAKE_DIR, '--target', t.output, '--config', 'Debug'], { cwd: projectDir, timeoutMs: 300_000 });
    commands.push(b);
    const text = b.stdout + '\n' + b.stderr;
    const diagnostics = parseDiagnostics(text, projectDir);
    const exe = findCMakeExecutable(buildDir, t.output);
    const ok = b.exitCode === 0 && !!exe;
    if (!ok && !diagnostics.some((d) => d.severity === 'error')) {
      const cmakeMsg = /CMake Error[^\n]*\n?([^\n]*)/.exec(text);
      const unknownTarget = /No rule to make target '([^']+)'|unknown target '([^']+)'|MSB1009/.exec(text);
      const message = unknownTarget
        ? `CMake does not know a target named '${t.output}'. Did you add it with add_executable(${t.output} ...)?`
        : cmakeMsg ? firstCMakeError(cmakeMsg[0]) : (b.stderr || b.stdout || 'Build failed').trim().split('\n').slice(-3).join(' ');
      diagnostics.push({ file: unknownTarget ? 'CMakeLists.txt' : '', line: 0, column: 0, severity: 'error', message, phase: 'compiler' });
    }
    return { target: name, ok, executable: ok ? exe : undefined, diagnostics, commands, log: buildLog(commands) };
  }
}

function firstCMakeError(text: string): string {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const i = lines.findIndex((l) => l.startsWith('CMake Error'));
  if (i === -1) return lines.slice(0, 3).join(' ');
  return [lines[i], lines[i + 1] ?? ''].join(' ').trim();
}

function cmakeErrorLine(text: string): number {
  const m = /CMakeLists\.txt:(\d+)/.exec(text);
  return m ? +m[1] : 0;
}

/** Make sanitizer reports deterministic and fatal, so a memory bug is always a visible failure. */
export function sanitizerEnv(): NodeJS.ProcessEnv {
  return {
    ...process.env,
    ASAN_OPTIONS: `abort_on_error=0:halt_on_error=1:detect_leaks=${process.platform === 'linux' ? 1 : 0}:symbolize=1`,
    UBSAN_OPTIONS: 'halt_on_error=1:print_stacktrace=1',
  };
}

export async function runExecutable(exe: string, opts: RunOptions & { args?: string[] }): Promise<RunResult> {
  const r = await runCommand(exe, opts.args ?? [], { env: sanitizerEnv(), ...opts, timeoutMs: opts.timeoutMs ?? 10_000 });
  const crashDescription = r.timedOut
    ? 'The program did not finish within the time limit. Is it waiting for input, or stuck in an infinite loop?'
    : describeSanitizerReport(r.stderr) ?? describeCrash(r.signal, r.exitCode);
  return { ...r, crashed: r.timedOut || !!crashDescription, crashDescription };
}
