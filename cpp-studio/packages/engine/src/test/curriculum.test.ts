// Walks every lesson end to end with the real toolchain:
// for each step, the checks must FAIL on the starting state and PASS on the reference
// solution. This keeps lessons honest: no check passes by accident, no solution rots.
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { test } from 'node:test';
import { loadCurriculum } from '../curriculum';
import { Studio } from '../studio';
import { CheckReport } from '../types';

const curriculumRoot = path.resolve(__dirname, '../../../../curriculum');

function explain(r: CheckReport): string {
  return r.results.map((x) => `${x.passed ? '✓' : x.skipped ? '-' : '✗'} ${x.label}${x.message ? `: ${x.message}` : ''}${x.details ? `\n${x.details}` : ''}`).join('\n');
}

test('curriculum manifest and lessons are valid', () => {
  const c = loadCurriculum(curriculumRoot);
  assert.ok(c.order.length >= 7);
});

test('every lesson can be completed with its reference solutions', { timeout: 15 * 60_000 }, async (t) => {
  const ws = fs.mkdtempSync(path.join(os.tmpdir(), 'cpp-studio-test-'));
  let studio = await Studio.open({ workspaceRoot: ws, curriculumRoot });
  assert.ok(studio.toolchain.compiler, 'a C++ compiler is required to run curriculum tests');

  for (const id of studio.curriculum.order) {
    await t.test(id, async () => {
      assert.equal(studio.summary(id).status, 'available', `${id} should be unlocked by the lessons before it`);
      let view = studio.startLesson(id);
      for (;;) {
        const step = view.step;
        const where = `${id}/${step.id}`;
        if (step.quiz) {
          const wrong = (step.quiz.answer + 1) % step.quiz.options.length;
          assert.equal((await studio.check({ answer: wrong })).passed, false, `${where}: wrong answer accepted`);
          const r = await studio.check({ answer: step.quiz.answer });
          assert.ok(r.passed, `${where}: right answer rejected\n${explain(r)}`);
        } else {
          const before = await studio.check();
          assert.equal(before.passed, false, `${where}: checks pass before the learner did anything\n${explain(before)}`);
          if (step.solution) {
            studio.applySolution();
          } else if (step.kind === 'terminal') {
            for (const cmd of step.commands ?? []) {
              if (/^(\.\/|gdb|lldb)/.test(cmd)) continue;
              execSync(cmd, { cwd: view.projectDir, stdio: 'pipe' });
            }
          } else {
            assert.fail(`${where}: step has no solution`);
          }
          const after = await studio.check();
          assert.ok(after.passed, `${where}: reference solution does not pass\n${explain(after)}`);
        }
        if (view.stepIndex === view.stepCount - 1) break;
        view = studio.next();
      }
      assert.equal(studio.summary(id).status, 'completed');
    });
  }

  await t.test('progress survives closing and reopening', async () => {
    studio = await Studio.open({ workspaceRoot: ws, curriculumRoot, toolchain: studio.toolchain });
    assert.ok(studio.summaries().every((s) => s.status === 'completed'));
    assert.equal(studio.current()?.lesson.id, studio.curriculum.order.at(-1));
  });

  await t.test('reset restores the step snapshot and keeps removed files in trash', async () => {
    studio.startLesson('found-gcd');
    studio.goTo(1);
    const proj = studio.projectDir('found-gcd');
    fs.writeFileSync(path.join(proj, 'calc.cpp'), '// oops\n');
    fs.writeFileSync(path.join(proj, 'scratch.cpp'), 'int x;\n');
    const r = studio.resetStep();
    assert.ok(r.trashed.includes('scratch.cpp'));
    assert.match(fs.readFileSync(path.join(proj, 'calc.cpp'), 'utf8'), /gcd/);
    assert.equal(studio.summary('found-gcd').status, 'in-progress');
  });

  fs.rmSync(ws, { recursive: true, force: true });
});

test('hints are revealed one at a time and remembered', async () => {
  const ws = fs.mkdtempSync(path.join(os.tmpdir(), 'cpp-studio-test-'));
  const studio = await Studio.open({ workspaceRoot: ws, curriculumRoot });
  studio.startLesson('env-first-program');
  const total = studio.current()!.step.hints!.length;
  assert.equal(studio.hint()!.index, 0);
  assert.equal(studio.current()!.hintsRevealed.length, 1);
  for (let i = 1; i < total; i++) studio.hint();
  assert.equal(studio.hint(), undefined);
  assert.throws(() => studio.startLesson('found-gcd'), /needs these lessons first/);
  fs.rmSync(ws, { recursive: true, force: true });
});
