import assert from 'node:assert/strict';
import { test } from 'node:test';
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
