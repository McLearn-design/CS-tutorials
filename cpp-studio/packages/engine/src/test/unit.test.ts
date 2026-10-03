import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { test } from 'node:test';
import { Workspace } from '../workspace';
import { compareVersions, GitHubRelease, pickUpdate } from '../updates';
import { coachDiagnostics, parseDiagnostics } from '../diagnostics';
import { stripSource } from '../source';
import { parseTestOutput } from '../testing';

test('parses gcc and clang diagnostics', () => {
  const out = [
    "greet.cpp:6:34: error: expected ';' before '}' token",
    "greet.cpp:12:18: error: 'greting' was not declared in this scope; did you mean 'greeting'?",
    "count.cpp:8:23: warning: comparison of integer expressions of different signedness: 'int' and 'size_type' [-Wsign-compare]",
    '/proj/src/a.cpp:3:1: note: candidate: void f(int)',
  ].join('\n');
  const d = parseDiagnostics(out, '/proj');
  assert.equal(d.length, 4);
  assert.deepEqual([d[0].file, d[0].line, d[0].column, d[0].severity], ['greet.cpp', 6, 34, 'error']);
  assert.equal(d[2].severity, 'warning');
  assert.equal(d[2].code, '-Wsign-compare');
  assert.ok(!d[2].message.includes('[-W'));
  assert.equal(d[3].file, 'src/a.cpp');
  const titles = coachDiagnostics(d).map((c) => c.title);
  assert.deepEqual(titles, ['Missing semicolon', 'Name not declared', 'Signed/unsigned comparison']);
});

test('parses MSVC diagnostics', () => {
  const d = parseDiagnostics("C:\\proj\\main.cpp(12,5): error C2143: syntax error: missing ';' before 'return'\nmain.obj : error LNK2019: unresolved external symbol \"double __cdecl area(double)\"");
  assert.equal(d.length, 2);
  assert.equal(d[0].line, 12);
  assert.equal(d[0].code, 'C2143');
  assert.equal(d[1].phase, 'linker');
  assert.equal(coachDiagnostics(d)[0].title, 'Missing semicolon');
});

test('parses GNU ld and Apple ld linker errors', () => {
  const gnu = parseDiagnostics("/usr/bin/ld: shapes.o: in function `main':\nshapes.cpp:(.text+0xc7): undefined reference to `circle_area(double)'\ncollect2: error: ld returned 1 exit status");
  assert.equal(gnu.length, 1);
  assert.equal(gnu[0].phase, 'linker');
  assert.match(gnu[0].message, /circle_area\(double\)/);
  assert.equal(coachDiagnostics(gnu)[0].title, 'Linker error: declared but never defined');
  const apple = parseDiagnostics('Undefined symbols for architecture arm64:\n  "circle_area(double)", referenced from:\n      _main in shapes.o');
  assert.equal(apple.filter((x) => x.phase === 'linker').length >= 1, true);
});

test('stripSource removes comments but keeps line numbers', () => {
  const src = 'int a; // int main()\n/* int main() {\n} */\nconst char* s = "// not a comment";\n';
  const out = stripSource(src);
  assert.ok(!/main/.test(out));
  assert.equal(out.split('\n').length, src.split('\n').length);
  assert.ok(out.includes('"// not a comment"'));
  assert.ok(!stripSource(src, { strings: true }).includes('not a comment'));
});

test('parses test output', () => {
  const s = parseTestOutput([
    '[==========] Running 3 tests',
    '[ RUN      ] a', '[       OK ] a',
    '[ RUN      ] b', 'x.cpp:3: CHECK_EQ(1, 2) failed', '    left:  1', '[  FAILED  ] b',
    '[ RUN      ] c', '[       OK ] c (0 ms)',
    '[  FAILED  ] b',
  ].join('\n'));
  assert.equal(s.total, 3);
  assert.equal(s.passed, 2);
  assert.deepEqual(s.passedNames, ['a', 'c']);
  assert.equal(s.failures[0].name, 'b');
  assert.match(s.failures[0].details, /CHECK_EQ/);
});

test('files copied into a project get a fresh modification time (macOS keeps the old one)', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cpp-studio-mtime-'));
  const lessonDir = path.join(tmp, 'lesson');
  fs.mkdirSync(lessonDir);
  const src = path.join(lessonDir, 'main.cpp');
  fs.writeFileSync(src, 'int main() {}\n');
  const old = new Date('2001-01-01T00:00:00Z');
  fs.utimesSync(src, old, old);
  const ws = Workspace.init(path.join(tmp, 'ws'));
  ws.applyFiles(tmp, lessonDir, 'p', [{ path: 'main.cpp', from: 'main.cpp' }]);
  const copied = fs.statSync(path.join(ws.projectDir('p'), 'main.cpp')).mtimeMs;
  assert.ok(Date.now() - copied < 60_000, 'copied file kept its old timestamp');
  fs.rmSync(tmp, { recursive: true, force: true });
});

test('picks the newest newer release with a matching asset', () => {
  const rel = (tag: string, extra: Partial<GitHubRelease> = {}): GitHubRelease => ({
    tag_name: tag, html_url: `https://x/${tag}`, draft: false, prerelease: false,
    assets: [{ name: `cpp-studio-${tag.replace('cpp-studio-v', '')}.vsix`, browser_download_url: `https://dl/${tag}.vsix` }], ...extra,
  });
  const releases = [rel('cpp-studio-v0.2.0'), rel('cpp-studio-v0.10.0'), rel('cpp-studio-v0.11.0', { draft: true }),
    rel('cpp-studio-v0.12.0-beta.1', { prerelease: true }), rel('other-v9.0.0')];
  assert.equal(pickUpdate(releases, '0.2.0', { assetPattern: /\.vsix$/ })?.version, '0.10.0');
  assert.equal(pickUpdate(releases, '0.10.0', { assetPattern: /\.vsix$/ }), undefined);
  assert.equal(pickUpdate(releases, '0.10.0', { assetPattern: /\.vsix$/, includePrereleases: true })?.version, '0.12.0-beta.1');
  assert.equal(pickUpdate(releases, '0.1.0', { assetPattern: /\.vsix$/ })?.assetUrl, 'https://dl/cpp-studio-v0.10.0.vsix');
  assert.equal(compareVersions('1.0.0-rc.1', '1.0.0'), -1);
  assert.equal(compareVersions('v0.9.9', '0.10'), -1);
});
