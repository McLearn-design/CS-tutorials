import * as fs from 'fs';
import * as path from 'path';

export interface LessonProgress {
  status: 'in-progress' | 'completed';
  /** Index of the step the learner is currently on. */
  stepIndex: number;
  /** Steps whose checks have passed. */
  completedSteps: string[];
  /** Steps whose starting state has been applied (and snapshotted). */
  enteredSteps: string[];
  hintsRevealed: Record<string, number>;
  attempts: Record<string, number>;
  quizAnswers: Record<string, number>;
  solutionsViewed: string[];
  startedAt: string;
  updatedAt: string;
  completedAt?: string;
}

export interface Progress {
  version: 1;
  activeLesson?: string;
  lessons: Record<string, LessonProgress>;
  /** Free-form learner notes, keyed by lesson id. */
  notes: Record<string, string>;
}

export function emptyProgress(): Progress {
  return { version: 1, lessons: {}, notes: {} };
}

/** Progress lives inside the learner's workspace, so it travels with their projects. */
export class ProgressStore {
  readonly file: string;

  constructor(stateDir: string) {
    this.file = path.join(stateDir, 'progress.json');
  }

  load(): Progress {
    try {
      const p = JSON.parse(fs.readFileSync(this.file, 'utf8')) as Progress;
      p.notes ??= {};
      return p;
    } catch {
      return emptyProgress();
    }
  }

  save(p: Progress): void {
    fs.mkdirSync(path.dirname(this.file), { recursive: true });
    // Write atomically: a crash mid-write must never lose a learner's progress.
    const tmp = this.file + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(p, null, 2) + '\n');
    fs.renameSync(tmp, this.file);
  }
}
