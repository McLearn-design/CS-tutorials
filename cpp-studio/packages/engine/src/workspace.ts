import * as fs from 'fs';
import * as path from 'path';
import { resolveSource } from './curriculum';
import { FileSpec } from './types';

/**
 * Learner workspace layout:
 *
 *   <root>/
 *     projects/<project>/     real, persistent projects (the learner's portfolio)
 *     .cpp-studio/            engine state: progress, step snapshots, trash
 */
export class Workspace {
  readonly stateDir: string;

  constructor(readonly root: string) {
    this.stateDir = path.join(root, '.cpp-studio');
  }

  static init(root: string): Workspace {
    const ws = new Workspace(root);
    fs.mkdirSync(path.join(root, 'projects'), { recursive: true });
    fs.mkdirSync(ws.stateDir, { recursive: true });
    const marker = path.join(ws.stateDir, 'workspace.json');
    if (!fs.existsSync(marker)) {
      fs.writeFileSync(marker, JSON.stringify({ createdAt: new Date().toISOString(), format: 1 }, null, 2) + '\n');
    }
    const readme = path.join(root, 'README.md');
    if (!fs.existsSync(readme)) {
      fs.writeFileSync(readme,
        '# My C++ Studio workspace\n\n' +
        'Everything under `projects/` is real code you wrote. Each project is a normal C++ project:\n' +
        'you can build it with your own compiler, put it under Git, and keep working on it outside the course.\n\n' +
        '`.cpp-studio/` holds your lesson progress and step snapshots.\n');
    }
    return ws;
  }

  static isWorkspace(root: string): boolean {
    return fs.existsSync(path.join(root, '.cpp-studio', 'workspace.json'));
  }

  projectDir(project: string): string {
    return path.join(this.root, 'projects', project);
  }

  /** Copy lesson-provided files into the project. Existing learner files are kept unless overwrite is set. */
  applyFiles(curriculumRoot: string, lessonDir: string, project: string, files: FileSpec[]): string[] {
    const written: string[] = [];
    const dir = this.projectDir(project);
    for (const f of files) {
      const dest = path.join(dir, f.path);
      if (fs.existsSync(dest) && !f.overwrite) continue;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(resolveSource(curriculumRoot, lessonDir, f.from), dest);
      written.push(f.path);
    }
    return written;
  }

  /** Copy every file under `srcDir` into the project (used for reference solutions). */
  copyTree(srcDir: string, project: string): string[] {
    const out: string[] = [];
    const dest = this.projectDir(project);
    for (const rel of listFiles(srcDir)) {
      const target = path.join(dest, rel);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(path.join(srcDir, rel), target);
      out.push(rel);
    }
    return out;
  }

  private snapshotDir(lessonId: string, stepId: string): string {
    return path.join(this.stateDir, 'snapshots', lessonId, stepId);
  }

  /** Record the project's source files as they are at the start of a step. */
  snapshot(lessonId: string, stepId: string, project: string): void {
    const snap = this.snapshotDir(lessonId, stepId);
    fs.rmSync(snap, { recursive: true, force: true });
    fs.mkdirSync(snap, { recursive: true });
    const dir = this.projectDir(project);
    const files = fs.existsSync(dir) ? listFiles(dir).filter(isSnapshotted) : [];
    for (const rel of files) {
      const target = path.join(snap, 'files', rel);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(path.join(dir, rel), target);
    }
    fs.writeFileSync(path.join(snap, 'manifest.json'), JSON.stringify({ files, takenAt: new Date().toISOString() }, null, 2));
  }

  hasSnapshot(lessonId: string, stepId: string): boolean {
    return fs.existsSync(path.join(this.snapshotDir(lessonId, stepId), 'manifest.json'));
  }

  /**
   * Put the project back the way it was when the step began. Source files created since
   * then are moved to `.cpp-studio/trash/` rather than deleted, so nothing is ever lost.
   */
  restore(lessonId: string, stepId: string, project: string): { restored: string[]; trashed: string[] } {
    const snap = this.snapshotDir(lessonId, stepId);
    const manifest = JSON.parse(fs.readFileSync(path.join(snap, 'manifest.json'), 'utf8')) as { files: string[] };
    const dir = this.projectDir(project);
    const keep = new Set(manifest.files);
    const trashed: string[] = [];
    const trashRoot = path.join(this.stateDir, 'trash', new Date().toISOString().replace(/[:.]/g, '-'));
    if (fs.existsSync(dir)) {
      for (const rel of listFiles(dir).filter(isSnapshotted)) {
        if (keep.has(rel)) continue;
        const t = path.join(trashRoot, rel);
        fs.mkdirSync(path.dirname(t), { recursive: true });
        fs.renameSync(path.join(dir, rel), t);
        trashed.push(rel);
      }
    }
    for (const rel of manifest.files) {
      const target = path.join(dir, rel);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(path.join(snap, 'files', rel), target);
    }
    return { restored: manifest.files, trashed };
  }
}

const SKIP_DIRS = new Set(['build', '.git', 'node_modules', '.cache', 'out', '.vs', '.idea']);
const SOURCE_EXT = new Set(['.cpp', '.cc', '.cxx', '.c', '.h', '.hpp', '.hh', '.hxx', '.ixx', '.cppm', '.inl', '.cmake', '.txt', '.md', '.json', '.in', '.ini', '.cfg', '.toml', '.yml', '.yaml']);

function isSnapshotted(rel: string): boolean {
  const base = path.basename(rel);
  if (base === 'CMakeLists.txt' || base === '.clang-format' || base === '.clang-tidy' || base === '.gitignore') return true;
  return SOURCE_EXT.has(path.extname(rel).toLowerCase());
}

/** Relative paths (forward slashes) of all files under dir, skipping build output. */
export function listFiles(dir: string): string[] {
  const out: string[] = [];
  const walk = (abs: string, rel: string) => {
    for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (!SKIP_DIRS.has(e.name)) walk(path.join(abs, e.name), r);
      } else if (e.isFile()) {
        out.push(r);
      }
    }
  };
  if (fs.existsSync(dir)) walk(dir, '');
  return out.sort();
}
