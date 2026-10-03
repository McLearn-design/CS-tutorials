import * as fs from 'fs';
import * as path from 'path';
import { CheckContext, defaultLabel, runCheck } from './checks';
import { LoadedCurriculum, loadCurriculum, readLessonFile } from './curriculum';
import { LessonProgress, Progress, ProgressStore } from './progress';
import { Builder, detectToolchain, Toolchain } from './toolchain';
import { CheckReport, Lesson, Step, Track } from './types';
import { Workspace } from './workspace';

export type LessonStatus = 'locked' | 'available' | 'in-progress' | 'completed';

export interface LessonSummary {
  lesson: Lesson;
  track: Track;
  status: LessonStatus;
  missingPrerequisites: string[];
  stepIndex: number;
  completedSteps: number;
}

export interface StepView {
  lesson: Lesson;
  step: Step;
  stepIndex: number;
  stepCount: number;
  completed: boolean;
  /** Markdown for the step. On the first step, the lesson intro is prepended. */
  markdown: string;
  projectDir: string;
  hintsRevealed: string[];
  hintsRemaining: number;
  /** Files written into the project when the step was entered. */
  newFiles: string[];
}

export interface StudioOptions {
  workspaceRoot: string;
  curriculumRoot: string;
  /** Let learners open lessons whose prerequisites are not complete. */
  allowLocked?: boolean;
  toolchain?: Toolchain;
}

export class StudioError extends Error {}

/**
 * The learning engine's public face. Every front end (CLI, VS Code, a future
 * standalone desktop app) drives the same Studio; none of them contain lesson logic.
 */
export class Studio {
  readonly curriculum: LoadedCurriculum;
  readonly workspace: Workspace;
  readonly toolchain: Toolchain;
  private readonly store: ProgressStore;
  private progress: Progress;
  private readonly builder: Builder;
  private readonly allowLocked: boolean;

  private constructor(opts: StudioOptions, curriculum: LoadedCurriculum, toolchain: Toolchain) {
    this.curriculum = curriculum;
    this.workspace = Workspace.init(opts.workspaceRoot);
    this.toolchain = toolchain;
    this.builder = new Builder(toolchain);
    this.store = new ProgressStore(this.workspace.stateDir);
    this.progress = this.store.load();
    this.allowLocked = !!opts.allowLocked;
  }

  static async open(opts: StudioOptions): Promise<Studio> {
    const curriculum = loadCurriculum(opts.curriculumRoot);
    const toolchain = opts.toolchain ?? (await detectToolchain());
    return new Studio(opts, curriculum, toolchain);
  }

  /** Re-read progress from disk (e.g. after another front end changed it). */
  reload(): void {
    this.progress = this.store.load();
  }

  // ---------------------------------------------------------------- queries

  lesson(id: string): Lesson {
    const l = this.curriculum.lessons.get(id);
    if (!l) throw new StudioError(`No lesson with id '${id}'. Run 'list' to see lessons.`);
    return l;
  }

  track(id: string): Track {
    return this.curriculum.tracks.find((t) => t.id === id)!;
  }

  lessonProgress(id: string): LessonProgress | undefined {
    return this.progress.lessons[id];
  }

  get activeLessonId(): string | undefined {
    return this.progress.activeLesson;
  }

  summaries(): LessonSummary[] {
    return this.curriculum.order.map((id) => this.summary(id));
  }

  summary(id: string): LessonSummary {
    const lesson = this.lesson(id);
    const p = this.progress.lessons[id];
    const missing = lesson.prerequisites.filter((pre) => this.progress.lessons[pre]?.status !== 'completed');
    const status: LessonStatus = p?.status === 'completed' ? 'completed'
      : p ? 'in-progress'
      : missing.length ? 'locked' : 'available';
    return {
      lesson, track: this.track(lesson.trackId), status, missingPrerequisites: missing,
      stepIndex: p?.stepIndex ?? 0, completedSteps: p?.completedSteps.length ?? 0,
    };
  }

  /** The next lesson the learner should do. */
  recommended(): Lesson | undefined {
    const active = this.progress.activeLesson;
    if (active && this.progress.lessons[active]?.status === 'in-progress') return this.lesson(active);
    return this.summaries().find((s) => s.status === 'in-progress' || s.status === 'available')?.lesson;
  }

  projectDir(lessonOrId: Lesson | string): string {
    const l = typeof lessonOrId === 'string' ? this.lesson(lessonOrId) : lessonOrId;
    return this.workspace.projectDir(l.project);
  }

  // ---------------------------------------------------------------- lesson flow

  /** Start (or resume) a lesson. Resuming lands exactly where the learner left off. */
  startLesson(id: string, opts: { force?: boolean } = {}): StepView {
    const lesson = this.lesson(id);
    const s = this.summary(id);
    if (s.status === 'locked' && !opts.force && !this.allowLocked) {
      throw new StudioError(`'${lesson.title}' needs these lessons first: ${s.missingPrerequisites.map((p) => this.lesson(p).title).join(', ')}.`);
    }
    let p = this.progress.lessons[id];
    const newFiles: string[] = [];
    if (!p) {
      const now = new Date().toISOString();
      p = {
        status: 'in-progress', stepIndex: 0, completedSteps: [], enteredSteps: [],
        hintsRevealed: {}, attempts: {}, quizAnswers: {}, solutionsViewed: [], startedAt: now, updatedAt: now,
      };
      this.progress.lessons[id] = p;
      fs.mkdirSync(this.projectDir(lesson), { recursive: true });
      newFiles.push(...this.workspace.applyFiles(this.curriculum.root, lesson.dir, lesson.project, lesson.files ?? []));
    }
    this.progress.activeLesson = id;
    newFiles.push(...this.enterStep(lesson, p, p.stepIndex));
    this.save();
    return this.view(lesson, p, newFiles);
  }

  /** Apply a step's starting state the first time it is entered, then snapshot it for reset. */
  private enterStep(lesson: Lesson, p: LessonProgress, index: number): string[] {
    const step = lesson.steps[index];
    if (p.enteredSteps.includes(step.id) && this.workspace.hasSnapshot(lesson.id, step.id)) return [];
    const written = this.workspace.applyFiles(this.curriculum.root, lesson.dir, lesson.project, step.files ?? []);
    this.workspace.snapshot(lesson.id, step.id, lesson.project);
    if (!p.enteredSteps.includes(step.id)) p.enteredSteps.push(step.id);
    return written;
  }

  private active(): { lesson: Lesson; p: LessonProgress } {
    const id = this.progress.activeLesson;
    if (!id || !this.progress.lessons[id]) throw new StudioError('No lesson is active. Start one first.');
    return { lesson: this.lesson(id), p: this.progress.lessons[id] };
  }

  current(): StepView | undefined {
    const id = this.progress.activeLesson;
    if (!id || !this.progress.lessons[id]) return undefined;
    return this.view(this.lesson(id), this.progress.lessons[id], []);
  }

  private view(lesson: Lesson, p: LessonProgress, newFiles: string[]): StepView {
    const step = lesson.steps[p.stepIndex];
    let markdown = readLessonFile(lesson, step.content);
    if (p.stepIndex === 0 && lesson.intro) markdown = readLessonFile(lesson, lesson.intro) + '\n\n---\n\n' + markdown;
    const revealed = p.hintsRevealed[step.id] ?? 0;
    const hints = step.hints ?? [];
    return {
      lesson, step, stepIndex: p.stepIndex, stepCount: lesson.steps.length,
      completed: p.completedSteps.includes(step.id), markdown,
      projectDir: this.projectDir(lesson),
      hintsRevealed: hints.slice(0, revealed), hintsRemaining: Math.max(0, hints.length - revealed),
      newFiles,
    };
  }

  /** Validate the current step. For quiz steps pass the chosen option index. */
  async check(opts: { answer?: number } = {}): Promise<CheckReport> {
    const { lesson, p } = this.active();
    const step = lesson.steps[p.stepIndex];
    p.attempts[step.id] = (p.attempts[step.id] ?? 0) + 1;
    const report: CheckReport = { lessonId: lesson.id, stepId: step.id, passed: false, results: [], lessonCompleted: false, builds: [] };

    let passed = true;
    if (step.quiz) {
      if (opts.answer === undefined) {
        throw new StudioError('This step is a question. Choose an answer (0-based option index).');
      }
      const q = step.quiz;
      const correct = opts.answer === q.answer;
      p.quizAnswers[step.id] = opts.answer;
      report.quizFeedback = q.explanations?.[opts.answer] ?? (correct ? 'Correct.' : 'Not quite — think about it again.');
      report.results.push({ label: 'Answer', passed: correct, message: correct ? 'Correct!' : 'Not quite.' });
      passed = correct;
    }

    if (passed && step.checks?.length) {
      const ctx = new CheckContext(lesson, this.projectDir(lesson), this.builder, this.curriculum.root);
      // One thing at a time: after the first failure, later checks are reported as skipped.
      for (const c of step.checks) {
        if (!passed) {
          report.results.push({ label: c.label ?? defaultLabel(c), passed: false, skipped: true });
          continue;
        }
        const r = await runCheck(c, ctx);
        report.results.push(r);
        if (!r.passed) passed = false;
      }
      report.builds = await ctx.allBuilds();
    }

    report.passed = passed;
    if (passed && !p.completedSteps.includes(step.id)) p.completedSteps.push(step.id);
    if (passed && lesson.steps.every((s) => p.completedSteps.includes(s.id)) && p.status !== 'completed') {
      p.status = 'completed';
      p.completedAt = new Date().toISOString();
    }
    report.lessonCompleted = p.status === 'completed';
    this.save();
    return report;
  }

  /** Move to the next step. Only allowed once the current step is complete. */
  next(): StepView {
    const { lesson, p } = this.active();
    const step = lesson.steps[p.stepIndex];
    if (!p.completedSteps.includes(step.id)) throw new StudioError('Complete this step first (run Check).');
    if (p.stepIndex >= lesson.steps.length - 1) throw new StudioError('This is the last step of the lesson.');
    return this.goTo(p.stepIndex + 1);
  }

  previous(): StepView {
    const { p } = this.active();
    if (p.stepIndex === 0) throw new StudioError('Already at the first step.');
    return this.goTo(p.stepIndex - 1);
  }

  /** Jump to any step up to (and including) the first incomplete one. */
  goTo(index: number): StepView {
    const { lesson, p } = this.active();
    if (index < 0 || index >= lesson.steps.length) throw new StudioError(`Step ${index + 1} does not exist.`);
    const firstIncomplete = lesson.steps.findIndex((s) => !p.completedSteps.includes(s.id));
    const limit = firstIncomplete === -1 ? lesson.steps.length - 1 : firstIncomplete;
    if (index > limit) throw new StudioError('You can only move to steps you have reached.');
    p.stepIndex = index;
    const newFiles = this.enterStep(lesson, p, index);
    this.save();
    return this.view(lesson, p, newFiles);
  }

  /** Reveal the next hint for the current step. */
  hint(): { hint: string; index: number; total: number } | undefined {
    const { lesson, p } = this.active();
    const step = lesson.steps[p.stepIndex];
    const hints = step.hints ?? [];
    const n = p.hintsRevealed[step.id] ?? 0;
    if (n >= hints.length) return undefined;
    p.hintsRevealed[step.id] = n + 1;
    this.save();
    return { hint: hints[n], index: n, total: hints.length };
  }

  /** Put the project back to how it was when the current step started. */
  resetStep(): { restored: string[]; trashed: string[] } {
    const { lesson, p } = this.active();
    const step = lesson.steps[p.stepIndex];
    if (!this.workspace.hasSnapshot(lesson.id, step.id)) throw new StudioError('No snapshot exists for this step.');
    const r = this.workspace.restore(lesson.id, step.id, lesson.project);
    p.completedSteps = p.completedSteps.filter((s) => s !== step.id);
    if (p.status === 'completed') { p.status = 'in-progress'; delete p.completedAt; }
    this.save();
    return r;
  }

  /** The reference solution's files for the current step (does not modify the project). */
  solutionFiles(): { path: string; content: string }[] {
    const { lesson, p } = this.active();
    const step = lesson.steps[p.stepIndex];
    if (!step.solution) return [];
    const dir = path.join(lesson.dir, step.solution);
    if (!p.solutionsViewed.includes(step.id)) { p.solutionsViewed.push(step.id); this.save(); }
    return listTree(dir).map((rel) => ({ path: rel, content: fs.readFileSync(path.join(dir, rel), 'utf8') }));
  }

  /** Overwrite project files with the reference solution for the current step. */
  applySolution(): string[] {
    const { lesson, p } = this.active();
    const step = lesson.steps[p.stepIndex];
    if (!step.solution) throw new StudioError('This step has no reference solution.');
    if (!p.solutionsViewed.includes(step.id)) p.solutionsViewed.push(step.id);
    this.save();
    return this.workspace.copyTree(path.join(lesson.dir, step.solution), lesson.project);
  }

  /** Build the lesson program with debug info and report where the executable is, for a debugger to launch. */
  async prepareDebug(target?: string): Promise<{ ok: boolean; program?: string; cwd: string; log: string }> {
    const { lesson } = this.active();
    const build = lesson.build;
    const dir = this.projectDir(lesson);
    if (!build) return { ok: false, cwd: dir, log: 'This lesson has no program to debug.' };
    const name = target ?? build.default ?? Object.keys(build.targets)[0];
    const ctx = new CheckContext(lesson, dir, this.builder, this.curriculum.root);
    const r = await ctx.build(name);
    return { ok: r.ok, program: r.executable, cwd: dir, log: r.log };
  }

  getNote(lessonId: string): string {
    return this.progress.notes[lessonId] ?? '';
  }

  setNote(lessonId: string, text: string): void {
    this.progress.notes[lessonId] = text;
    this.save();
  }

  private save(): void {
    const id = this.progress.activeLesson;
    if (id && this.progress.lessons[id]) this.progress.lessons[id].updatedAt = new Date().toISOString();
    this.store.save(this.progress);
  }
}

function listTree(dir: string): string[] {
  const out: string[] = [];
  const walk = (abs: string, rel: string) => {
    for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) walk(path.join(abs, e.name), r);
      else out.push(r);
    }
  };
  if (fs.existsSync(dir)) walk(dir, '');
  return out.sort();
}
