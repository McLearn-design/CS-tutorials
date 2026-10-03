#!/usr/bin/env node
// A terminal front end for the learning engine. It contains no lesson logic:
// everything goes through Studio, exactly as the VS Code extension does.
import * as path from 'path';
import { CheckReport, LessonStatus, StepView, Studio, StudioError } from '@cpp-studio/engine';

const color = process.stdout.isTTY && !process.env.NO_COLOR;
const c = (code: string) => (s: string) => (color ? `\x1b[${code}m${s}\x1b[0m` : s);
const bold = c('1');
const dim = c('2');
const green = c('32');
const red = c('31');
const yellow = c('33');
const cyan = c('36');

const USAGE = `C++ Studio — learn C++ by building real software with real tools.

Usage: cpp-studio [--workspace DIR] [--curriculum DIR] <command> [args]

Commands
  doctor              Check that a compiler, CMake and a debugger are installed
  map                 Show the curriculum: tracks, lessons and your progress
  start <lesson>      Start or resume a lesson (--force to ignore prerequisites)
  continue            Resume where you left off
  show                Show the current step
  check [n]           Validate the current step (for questions: your answer number)
  hint                Reveal the next hint
  next | prev         Move between steps
  goto <n>            Jump to step n (any step you have reached)
  reset               Restore the project to how it was when this step began
  solution [--apply]  Show the reference solution (or copy it into your project)
  note [text]         Show or set your notes for the current lesson

The workspace defaults to $CPP_STUDIO_WORKSPACE or the current directory.`;

interface Args { workspace: string; curriculum: string; command: string; rest: string[]; flags: Set<string> }

function parseArgs(argv: string[]): Args {
  let workspace = process.env.CPP_STUDIO_WORKSPACE ?? process.cwd();
  let curriculum = process.env.CPP_STUDIO_CURRICULUM ?? path.resolve(__dirname, '../../../curriculum');
  const rest: string[] = [];
  const flags = new Set<string>();
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--workspace' || a === '-w') workspace = path.resolve(argv[++i]);
    else if (a === '--curriculum') curriculum = path.resolve(argv[++i]);
    else if (a.startsWith('--')) flags.add(a.slice(2));
    else rest.push(a);
  }
  return { workspace, curriculum, command: rest.shift() ?? 'help', rest, flags };
}

const STATUS_ICON: Record<LessonStatus, string> = {
  completed: green('✓'),
  'in-progress': yellow('●'),
  available: '○',
  locked: dim('🔒'),
};

/** Very small Markdown → terminal renderer: headings, code blocks and quotes. */
function renderMarkdown(md: string): string {
  let inCode = false;
  return md.split('\n').map((line) => {
    if (line.startsWith('```')) { inCode = !inCode; return dim(line); }
    if (inCode) return cyan(line);
    if (/^#{1,6} /.test(line)) return bold(line.replace(/^#+ /, ''));
    if (line.startsWith('> ')) return dim('│ ') + line.slice(2);
    return line.replace(/\*\*(.+?)\*\*/g, (_, t) => bold(t)).replace(/(^|\W)\*([^*\s][^*]*)\*/g, '$1$2').replace(/`([^`]+)`/g, (_, t) => cyan(t));
  }).join('\n');
}

function printStep(studio: Studio, v: StepView): void {
  const rel = path.relative(process.cwd(), v.projectDir) || '.';
  console.log(dim(`${v.lesson.title} — step ${v.stepIndex + 1}/${v.stepCount} (${v.step.kind})${v.completed ? '  ✓ done' : ''}`));
  console.log(dim(`project: ${rel}`));
  if (v.newFiles.length) console.log(green(`New files in your project: ${v.newFiles.join(', ')}`));
  console.log();
  console.log(renderMarkdown(v.markdown));
  if (v.step.quiz) {
    console.log();
    console.log(bold(v.step.quiz.question));
    v.step.quiz.options.forEach((o, i) => console.log(`  ${i + 1}. ${o}`));
    console.log(dim(`\nAnswer with: cpp-studio check <number>`));
  } else {
    console.log(dim(`\nWhen ready: cpp-studio check   ·   stuck? cpp-studio hint`));
  }
  if (v.hintsRevealed.length) {
    console.log();
    v.hintsRevealed.forEach((h, i) => console.log(yellow(`Hint ${i + 1}: `) + renderMarkdown(h)));
  }
  void studio;
}

function printReport(studio: Studio, r: CheckReport): void {
  for (const res of r.results) {
    const icon = res.skipped ? dim('-') : res.passed ? green('✓') : red('✗');
    console.log(`${icon} ${res.skipped ? dim(res.label) : res.label}`);
    if (!res.passed && !res.skipped) {
      if (res.message) console.log(`  ${res.message}`);
      if (res.details) console.log(res.details.split('\n').map((l) => dim('  │ ') + l).join('\n'));
      for (const co of res.coaching ?? []) {
        console.log(yellow(`  ▸ ${co.title}`));
        console.log(`    ${renderMarkdown(co.explanation)}`);
      }
    }
  }
  if (r.quizFeedback) console.log('\n' + renderMarkdown(r.quizFeedback));
  console.log();
  const v = studio.current()!;
  if (r.lessonCompleted && v.stepIndex === v.stepCount - 1 && r.passed) {
    console.log(green(bold(`🎉 Lesson complete: ${v.lesson.title}`)));
    const next = studio.recommended();
    if (next && next.id !== v.lesson.id) console.log(`Next up: ${bold(next.title)}  →  cpp-studio start ${next.id}`);
  } else if (r.passed) {
    console.log(green('Step complete.') + ` Continue with: cpp-studio next`);
  } else {
    console.log(dim('Not yet. Fix the first ✗ above and check again.'));
  }
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (args.command === 'help' || args.flags.has('help')) { console.log(USAGE); return 0; }

  const studio = await Studio.open({ workspaceRoot: args.workspace, curriculumRoot: args.curriculum });

  switch (args.command) {
    case 'doctor': {
      const tc = studio.toolchain;
      const row = (name: string, ok: boolean, detail: string, fix: string) =>
        console.log(`${ok ? green('✓') : red('✗')} ${name.padEnd(10)} ${ok ? detail : red(fix)}`);
      row('compiler', !!tc.compiler, `${tc.compiler?.kind} — ${tc.compiler?.path}\n             ${dim(tc.compiler?.version ?? '')}`,
        'not found: install g++ (Linux), Xcode Command Line Tools (macOS), or Visual Studio Build Tools / LLVM (Windows)');
      row('cmake', !!tc.cmake, `${tc.cmake?.version}`, 'not found: install CMake 3.20+ from cmake.org or your package manager');
      row('debugger', !!tc.debugger, `${tc.debugger?.kind} — ${tc.debugger?.path}`, 'not found: install gdb or lldb (needed from the debugger lesson on)');
      row('git', !!tc.git, `${tc.git?.path}`, 'not found: install Git (needed in the software-engineering track)');
      console.log(dim(`\nworkspace:  ${studio.workspace.root}\ncurriculum: ${studio.curriculum.root}`));
      return tc.compiler && tc.cmake ? 0 : 1;
    }

    case 'map':
    case 'list': {
      console.log(bold(studio.curriculum.title) + '\n');
      for (const track of studio.curriculum.tracks) {
        const planned = track.status === 'planned';
        console.log((planned ? dim : bold)(track.title) + (planned ? dim('  (planned)') : ''));
        if (planned) {
          console.log(dim(`   ${track.description}`));
          if (track.projects?.length) console.log(dim(`   Projects: ${track.projects.join(' · ')}`));
        }
        for (const id of track.lessons) {
          const s = studio.summary(id);
          const progress = s.status === 'in-progress' ? dim(` (${s.completedSteps}/${s.lesson.steps.length} steps)`) : '';
          console.log(`   ${STATUS_ICON[s.status]} ${s.lesson.title}${progress}  ${dim(id)}`);
        }
        console.log();
      }
      const rec = studio.recommended();
      if (rec) console.log(`Next: cpp-studio start ${rec.id}`);
      return 0;
    }

    case 'start': {
      const id = args.rest[0] ?? studio.recommended()?.id;
      if (!id) throw new StudioError('Which lesson? Run `cpp-studio map`.');
      printStep(studio, studio.startLesson(id, { force: args.flags.has('force') }));
      return 0;
    }

    case 'continue': {
      const id = studio.activeLessonId ?? studio.recommended()?.id;
      if (!id) throw new StudioError('Nothing to continue. Run `cpp-studio map`.');
      printStep(studio, studio.startLesson(id));
      return 0;
    }

    case 'show':
    case 'status': {
      const v = studio.current();
      if (!v) { console.log('No active lesson. Start with: cpp-studio start'); return 0; }
      printStep(studio, v);
      return 0;
    }

    case 'check': {
      const v = studio.current();
      if (!v) throw new StudioError('No active lesson.');
      let answer: number | undefined;
      if (v.step.quiz) {
        const n = Number(args.rest[0]);
        if (!Number.isInteger(n) || n < 1 || n > v.step.quiz.options.length) {
          throw new StudioError(`Answer with a number from 1 to ${v.step.quiz.options.length}: cpp-studio check <number>`);
        }
        answer = n - 1;
      } else {
        console.log(dim('Building and checking…'));
      }
      const r = await studio.check({ answer });
      printReport(studio, r);
      return r.passed ? 0 : 1;
    }

    case 'hint': {
      const h = studio.hint();
      if (!h) console.log('No more hints for this step. You can look at the reference solution: cpp-studio solution');
      else console.log(yellow(`Hint ${h.index + 1}/${h.total}: `) + renderMarkdown(h.hint));
      return 0;
    }

    case 'next': printStep(studio, studio.next()); return 0;
    case 'prev': printStep(studio, studio.previous()); return 0;
    case 'goto': printStep(studio, studio.goTo(Number(args.rest[0]) - 1)); return 0;

    case 'reset': {
      const r = studio.resetStep();
      console.log(`Restored ${r.restored.length} file(s) to the start of this step.`);
      if (r.trashed.length) console.log(dim(`Moved new files to .cpp-studio/trash/: ${r.trashed.join(', ')}`));
      return 0;
    }

    case 'solution': {
      if (args.flags.has('apply')) {
        const files = studio.applySolution();
        console.log(`Copied the reference solution into your project: ${files.join(', ')}`);
        return 0;
      }
      const files = studio.solutionFiles();
      if (!files.length) { console.log('This step has no reference solution file.'); return 0; }
      console.log(dim('Reference solution — one correct answer, not the only one. Try to understand it, then type it yourself.\n'));
      for (const f of files) console.log(bold(`── ${f.path}`) + '\n' + cyan(f.content));
      return 0;
    }

    case 'note': {
      const v = studio.current();
      if (!v) throw new StudioError('No active lesson.');
      if (args.rest.length) { studio.setNote(v.lesson.id, args.rest.join(' ')); console.log('Saved.'); }
      else console.log(studio.getNote(v.lesson.id) || dim('(no notes yet)'));
      return 0;
    }

    default:
      console.error(`Unknown command '${args.command}'.\n`);
      console.log(USAGE);
      return 2;
  }
}

main().then((code) => { process.exitCode = code; }, (e) => {
  if (e instanceof StudioError || e?.name === 'CurriculumError') console.error(red(e.message));
  else console.error(e);
  process.exitCode = 1;
});
