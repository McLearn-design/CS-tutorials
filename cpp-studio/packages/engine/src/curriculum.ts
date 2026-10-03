import * as fs from 'fs';
import * as path from 'path';
import { Check, Curriculum, Lesson, Step } from './types';

export class CurriculumError extends Error {}

export interface LoadedCurriculum extends Curriculum {
  root: string;
  lessons: Map<string, Lesson>;
  /** Lessons in curriculum order. */
  order: string[];
}

const CHECK_TYPES = new Set(['fileExists', 'source', 'compiles', 'diagnostics', 'output', 'tests']);

function readJson<T>(file: string): T {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8')) as T;
  } catch (e) {
    throw new CurriculumError(`Could not read ${file}: ${(e as Error).message}`);
  }
}

/** Resolve a `from` path in a FileSpec: lesson-relative, or `shared:` for curriculum/shared. */
export function resolveSource(curriculumRoot: string, lessonDir: string, from: string): string {
  return from.startsWith('shared:')
    ? path.join(curriculumRoot, 'shared', from.slice('shared:'.length))
    : path.join(lessonDir, from);
}

function validateLesson(c: { root: string }, lesson: Lesson, problems: string[]): void {
  const where = `lesson ${lesson.id}`;
  const exists = (rel: string, what: string) => {
    if (!fs.existsSync(resolveSource(c.root, lesson.dir, rel))) problems.push(`${where}: ${what} '${rel}' not found`);
  };
  if (!lesson.steps?.length) problems.push(`${where}: has no steps`);
  if (lesson.intro) exists(lesson.intro, 'intro');
  for (const f of lesson.files ?? []) exists(f.from, 'file source');
  const targets = lesson.build?.targets ?? {};
  const ids = new Set<string>();
  for (const step of lesson.steps ?? []) {
    const sw = `${where} step ${step.id}`;
    if (ids.has(step.id)) problems.push(`${sw}: duplicate step id`);
    ids.add(step.id);
    exists(step.content, 'content');
    for (const f of step.files ?? []) exists(f.from, 'file source');
    if (step.solution) exists(step.solution, 'solution');
    if (step.kind === 'quiz' || (step.kind === 'debug' && step.quiz)) {
      if (!step.quiz) problems.push(`${sw}: quiz step without quiz`);
      else if (step.quiz.answer < 0 || step.quiz.answer >= step.quiz.options.length) problems.push(`${sw}: quiz answer out of range`);
    } else if (!step.checks?.length) {
      problems.push(`${sw}: non-quiz step has no checks`);
    }
    for (const check of step.checks ?? []) {
      if (!CHECK_TYPES.has(check.type)) problems.push(`${sw}: unknown check type '${(check as Check).type}'`);
      const t = (check as { target?: string }).target;
      if ((check.type === 'compiles' || check.type === 'output' || check.type === 'tests' || check.type === 'diagnostics')) {
        if (!lesson.build) problems.push(`${sw}: ${check.type} check but lesson has no build config`);
        else if (t && !targets[t]) problems.push(`${sw}: unknown build target '${t}'`);
      }
      if (check.type === 'source') {
        try { new RegExp(check.pattern, check.flags); } catch { problems.push(`${sw}: invalid regex ${check.pattern}`); }
      }
    }
  }
}

export function loadCurriculum(root: string): LoadedCurriculum {
  const manifest = readJson<Curriculum>(path.join(root, 'curriculum.json'));
  const lessons = new Map<string, Lesson>();
  const order: string[] = [];
  const problems: string[] = [];
  for (const track of manifest.tracks) {
    track.status ??= 'available';
    for (const id of track.lessons) {
      const dir = path.join(root, 'lessons', id);
      const raw = readJson<Omit<Lesson, 'dir' | 'trackId'>>(path.join(dir, 'lesson.json'));
      if (raw.id !== id) problems.push(`lessons/${id}/lesson.json has id '${raw.id}'`);
      const lesson: Lesson = { ...raw, dir, trackId: track.id };
      if (lessons.has(id)) problems.push(`lesson ${id} listed twice`);
      lessons.set(id, lesson);
      order.push(id);
    }
  }
  const c = { ...manifest, root, lessons, order };
  for (const lesson of lessons.values()) {
    validateLesson(c, lesson, problems);
    for (const p of lesson.prerequisites) if (!lessons.has(p)) problems.push(`lesson ${lesson.id}: unknown prerequisite ${p}`);
  }
  if (problems.length) throw new CurriculumError('Invalid curriculum:\n  ' + problems.join('\n  '));
  return c;
}

export function readLessonFile(lesson: Lesson, rel: string): string {
  return fs.readFileSync(path.join(lesson.dir, rel), 'utf8');
}

export function stepIndex(lesson: Lesson, stepId: string): number {
  return lesson.steps.findIndex((s: Step) => s.id === stepId);
}
