import * as fs from 'fs';
import * as path from 'path';
import { coachDiagnostics } from './diagnostics';
import { stripSource } from './source';
import { parseTestOutput } from './testing';
import { Builder, exeSuffix, runExecutable } from './toolchain';
import { resolveSource } from './curriculum';
import { BuildResult, BuildTarget, Check, CheckResult, Diagnostic, Lesson, OutputExpectation } from './types';

/** Shared state for one "Check" press: builds are cached so several checks reuse one compile. */
export class CheckContext {
  private builds = new Map<string, Promise<BuildResult>>();

  constructor(
    readonly lesson: Lesson,
    readonly projectDir: string,
    private readonly builder: Builder,
    private readonly curriculumRoot: string,
  ) {}

  /** Resolve `lesson:` and `shared:` prefixes in a target's paths to absolute paths. */
  private resolveTarget(t: BuildTarget): BuildTarget {
    const fix = (p: string) => p.startsWith('lesson:') || p.startsWith('shared:')
      ? resolveSource(this.curriculumRoot, this.lesson.dir, p.startsWith('lesson:') ? p.slice('lesson:'.length) : p)
      : p;
    return { ...t, sources: t.sources?.map(fix), includeDirs: t.includeDirs?.map(fix) };
  }

  targetName(name?: string): string {
    const b = this.lesson.build;
    if (!b) throw new Error(`Lesson ${this.lesson.id} has no build configuration`);
    return name ?? b.default ?? Object.keys(b.targets)[0];
  }

  build(name?: string): Promise<BuildResult> {
    const t = this.targetName(name);
    let p = this.builds.get(t);
    if (!p) {
      p = this.builder.build(t, this.resolveTarget(this.lesson.build!.targets[t]), this.projectDir);
      this.builds.set(t, p);
    }
    return p;
  }

  async allBuilds(): Promise<BuildResult[]> {
    return Promise.all(this.builds.values());
  }
}

export function defaultLabel(c: Check): string {
  switch (c.type) {
    case 'fileExists': return `${c.path} exists`;
    case 'source': return c.negate ? `${c.path} no longer matches /${c.pattern}/` : `${c.path} uses the required code`;
    case 'compiles': return c.noWarnings ? 'Builds with no errors or warnings' : 'Builds successfully';
    case 'diagnostics': return `Compiler no longer reports /${c.absent}/`;
    case 'output': return c.stdin !== undefined ? `Correct output for input ${JSON.stringify(c.stdin.trim())}` : 'Program output is correct';
    case 'tests': return c.minTests ? `At least ${c.minTests} tests pass` : 'All tests pass';
  }
}

function formatDiag(d: Diagnostic): string {
  const loc = d.file ? `${d.file}${d.line ? `:${d.line}:${d.column}` : ''}: ` : '';
  return `${loc}${d.severity}: ${d.message}`;
}

function buildFailure(label: string, b: BuildResult, failMessage?: string): CheckResult {
  const errors = b.diagnostics.filter((d) => d.severity === 'error');
  const linker = errors.length > 0 && errors.every((d) => d.phase === 'linker');
  return {
    label, passed: false,
    message: failMessage ?? (linker ? 'Compiling succeeded, but linking failed.' : `The build failed with ${errors.length || 'an'} error${errors.length === 1 ? '' : 's'}.`),
    details: errors.slice(0, 8).map(formatDiag).join('\n'),
    diagnostics: b.diagnostics,
    coaching: coachDiagnostics(b.diagnostics),
  };
}

function normalise(s: string, trim: boolean): string {
  const t = s.replace(/\r\n/g, '\n');
  return trim ? t.split('\n').map((l) => l.replace(/\s+$/, '')).join('\n').replace(/\s+$/, '') : t;
}

function matchOutput(actual: string, e: OutputExpectation, trim: boolean): { ok: boolean; expected: string } {
  const a = normalise(actual, trim);
  if ('equals' in e) return { ok: a === normalise(e.equals, trim), expected: e.equals };
  if ('contains' in e) return { ok: a.includes(e.contains), expected: `…${e.contains}…` };
  if ('containsAll' in e) {
    // In order: each expected fragment must appear after the previous one.
    let pos = 0;
    for (const part of e.containsAll) {
      const i = a.indexOf(part, pos);
      if (i === -1) return { ok: false, expected: e.containsAll.join('\n') };
      pos = i + part.length;
    }
    return { ok: true, expected: e.containsAll.join('\n') };
  }
  return { ok: new RegExp(e.matches, e.flags).test(a), expected: `/${e.matches}/` };
}

function lessonPrefix(ctx: CheckContext): string {
  return ctx.lesson.dir + path.sep;
}

function indent(s: string): string {
  return s.split('\n').map((l) => `    ${l}`).join('\n');
}

export async function runCheck(check: Check, ctx: CheckContext): Promise<CheckResult> {
  const label = check.label ?? defaultLabel(check);
  const fail = (message: string, extra: Partial<CheckResult> = {}): CheckResult =>
    ({ label, passed: false, message: check.failMessage ?? message, ...extra });

  switch (check.type) {
    case 'fileExists': {
      const p = path.join(ctx.projectDir, check.path);
      const ok = fs.existsSync(p) || (!!check.executable && fs.existsSync(p + exeSuffix));
      return ok ? { label, passed: true } : fail(`Expected to find ${check.path} in the project.`);
    }

    case 'source': {
      const p = path.join(ctx.projectDir, check.path);
      if (!fs.existsSync(p)) return fail(`${check.path} does not exist.`);
      const text = stripSource(fs.readFileSync(p, 'utf8'), { comments: check.stripComments ?? true, strings: check.stripStrings ?? false });
      const found = new RegExp(check.pattern, check.flags ?? 'm').test(text);
      return found !== !!check.negate ? { label, passed: true } : fail(check.negate ? `${check.path} still contains code this step asks you to change.` : `${check.path} does not contain the code this step asks for yet.`);
    }

    case 'compiles': {
      const b = await ctx.build(check.target);
      if (!b.ok) return buildFailure(label, b, check.failMessage);
      const warnings = b.diagnostics.filter((d) => d.severity === 'warning');
      if (check.noWarnings && warnings.length) {
        return {
          label, passed: false,
          message: check.failMessage ?? `It builds, but the compiler reported ${warnings.length} warning${warnings.length === 1 ? '' : 's'}. Treat warnings as bugs waiting to happen.`,
          details: warnings.map(formatDiag).join('\n'), diagnostics: b.diagnostics, coaching: coachDiagnostics(warnings),
        };
      }
      return { label, passed: true, diagnostics: b.diagnostics };
    }

    case 'diagnostics': {
      const b = await ctx.build(check.target);
      const re = new RegExp(check.absent);
      const hits = b.diagnostics.filter((d) => re.test(d.message));
      return hits.length === 0 ? { label, passed: true, diagnostics: b.diagnostics }
        : fail('The compiler still reports this problem.', { details: hits.map(formatDiag).join('\n'), diagnostics: b.diagnostics, coaching: coachDiagnostics(hits) });
    }

    case 'output': {
      const b = await ctx.build(check.target);
      if (!b.ok || !b.executable) return buildFailure(label, b);
      const r = await runExecutable(b.executable, { cwd: ctx.projectDir, args: check.args, stdin: check.stdin, timeoutMs: check.timeoutMs });
      const out = r.stdout;
      if (r.crashed) {
        return fail('The program crashed before producing the expected output.', {
          details: `${r.crashDescription}\n\nOutput before the crash:\n${indent(out || '(nothing)')}` +
            (out ? '' : '\n(Output printed just before a crash can be lost: when stdout is not a terminal it is buffered, ' +
              'and a crashing program never flushes its buffer. Run it in a terminal to see more.)'),
        });
      }
      const { ok, expected } = matchOutput(out, check.expect, check.trim ?? true);
      const wantCode = check.exitCode ?? 0;
      if (ok && r.exitCode === wantCode) return { label, passed: true };
      if (ok) return fail(`The output is right, but the program exited with code ${r.exitCode} (expected ${wantCode}).`);
      return fail('The program ran, but its output is not what was expected.', {
        details: `${check.stdin !== undefined ? `Input:\n${indent(check.stdin)}\n` : ''}Expected:\n${indent(expected)}\nActual:\n${indent(normalise(out, true) || '(no output)')}` +
          (r.stderr ? `\nstderr:\n${indent(r.stderr.trim())}` : ''),
      });
    }

    case 'tests': {
      const b = await ctx.build(check.target);
      if (!b.ok || !b.executable) return buildFailure(label, b);
      const r = await runExecutable(b.executable, { cwd: ctx.projectDir, timeoutMs: 30_000 });
      const s = parseTestOutput(r.stdout + '\n' + r.stderr);
      if (r.crashed) return fail('The test program crashed.', { details: `${r.crashDescription}\n\n${r.stdout}` });
      if (s.failed > 0) {
        return fail(`${s.failed} of ${s.total} test${s.total === 1 ? '' : 's'} failed.`, {
          details: s.failures.map((f) => `✗ ${f.name}\n${indent(f.details)}`).join('\n')
            .split(lessonPrefix(ctx)).join('(lesson)/'),
        });
      }
      if (r.exitCode !== 0) return fail(`The test program exited with code ${r.exitCode}.`, { details: r.stdout + r.stderr });
      const missing = (check.requireTests ?? []).filter((name) => !s.passedNames.includes(name));
      if (missing.length) {
        return fail(`These required tests did not run: ${missing.join(', ')}. Is every test file part of the test target?`);
      }
      if (check.minTests && s.passed < check.minTests) {
        return fail(`All ${s.passed} test${s.passed === 1 ? '' : 's'} pass, but this step needs at least ${check.minTests}.`);
      }
      return { label: `${label} (${s.passed} passed)`, passed: true };
    }
  }
}
