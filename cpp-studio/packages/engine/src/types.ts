// Data model for the curriculum. Lessons are authored as JSON + Markdown on disk;
// nothing in here knows (or cares) which UI is presenting them.

/** How much scaffolding a lesson provides. The curriculum moves from top to bottom. */
export type LessonMode =
  | 'guided'        // "Build this with me."
  | 'incremental'   // "Build this; I'll explain what you need."
  | 'independent'   // "Here's the problem. Design the solution."
  | 'project';      // "Here's an existing codebase and a request. Do it."

export type StepKind =
  | 'code'       // learner edits files; validated by checks
  | 'terminal'   // learner runs real commands; validated by what they produced
  | 'quiz'       // learner answers a question (e.g. reading a diagnostic)
  | 'debug'      // learner uses the debugger, then answers / fixes
  | 'challenge'; // little or no scaffolding

export interface Curriculum {
  title: string;
  description?: string;
  tracks: Track[];
}

export interface Track {
  id: string;
  title: string;
  description: string;
  /** Planned tracks are shown on the map but have no lessons yet. */
  status: 'available' | 'planned';
  /** Track ids that should be completed (or mostly completed) first. */
  requires?: string[];
  lessons: string[];
  /** For planned tracks: the projects the track will build. */
  projects?: string[];
}

export interface FileSpec {
  /** Path relative to the project directory. */
  path: string;
  /** Path relative to the lesson directory (or `shared:` prefix for curriculum/shared). */
  from: string;
  /**
   * When false (default) the file is only created if it does not exist, so a
   * learner's existing work in a persistent project is never clobbered.
   */
  overwrite?: boolean;
}

/** A buildable thing. `direct` drives the compiler by hand; `cmake` drives CMake. */
export interface BuildTarget {
  system: 'direct' | 'cmake';
  /**
   * direct: translation units to compile, relative to the project. A `lesson:` prefix refers to the
   * lesson directory and `shared:` to curriculum/shared — used for hidden acceptance tests.
   */
  sources?: string[];
  /** direct: executable name. cmake: target name. */
  output: string;
  standard?: string;           // default c++20
  flags?: string[];            // extra flags for direct builds (gcc/clang syntax)
  includeDirs?: string[];
}

export interface BuildConfig {
  /** Name of the default target; defaults to the first key in `targets`. */
  default?: string;
  targets: Record<string, BuildTarget>;
}

export type OutputExpectation =
  | { equals: string }
  | { contains: string }
  | { containsAll: string[] }
  | { matches: string; flags?: string };

export interface CheckBase {
  /** Shown to the learner. Generated when omitted. */
  label?: string;
  /** A teaching message shown when this check fails. */
  failMessage?: string;
}

export interface FileExistsCheck extends CheckBase {
  type: 'fileExists';
  path: string;
  /** Treat `path` as an executable name: accepts `.exe` on Windows. */
  executable?: boolean;
}

export interface SourceCheck extends CheckBase {
  type: 'source';
  path: string;
  /** Regular expression searched in the file. */
  pattern: string;
  flags?: string;
  /** Pass when the pattern is NOT found. */
  negate?: boolean;
  /** Strip comments (default true) and/or string literals before matching. */
  stripComments?: boolean;
  stripStrings?: boolean;
}

export interface CompilesCheck extends CheckBase {
  type: 'compiles';
  target?: string;
  /** Fail when the build emits warnings. */
  noWarnings?: boolean;
}

export interface DiagnosticsCheck extends CheckBase {
  type: 'diagnostics';
  target?: string;
  /** Regex that must not appear in any diagnostic (the build may still fail for other reasons). */
  absent: string;
}

export interface OutputCheck extends CheckBase {
  type: 'output';
  target?: string;
  args?: string[];
  stdin?: string;
  expect: OutputExpectation;
  /** Expected exit code (default 0). */
  exitCode?: number;
  /** Trim trailing whitespace on each line and at the end before comparing (default true). */
  trim?: boolean;
  timeoutMs?: number;
}

export interface TestsCheck extends CheckBase {
  type: 'tests';
  target: string;
  /** Minimum number of tests that must exist and pass. */
  minTests?: number;
  /** Test names that must have run and passed (e.g. the lesson's provided tests). */
  requireTests?: string[];
}

export type Check =
  | FileExistsCheck
  | SourceCheck
  | CompilesCheck
  | DiagnosticsCheck
  | OutputCheck
  | TestsCheck;

export interface Quiz {
  question: string;
  options: string[];
  answer: number;
  /** Optional per-option explanation, shown after answering. */
  explanations?: string[];
}

export interface Step {
  id: string;
  title: string;
  kind: StepKind;
  /** Markdown file relative to the lesson directory. */
  content: string;
  /** Files placed in the project when this step is first entered. */
  files?: FileSpec[];
  /** Files the UI should open/focus for this step. */
  open?: string[];
  checks?: Check[];
  quiz?: Quiz;
  hints?: string[];
  /** Directory (relative to lesson) holding a reference solution for this step. */
  solution?: string;
  /** Terminal commands suggested for this step, shown as runnable snippets. */
  commands?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  mode: LessonMode;
  /** Persistent project directory name under `projects/`. Lessons sharing a project build on each other. */
  project: string;
  concepts: string[];
  prerequisites: string[];
  /** Markdown introduction, relative to the lesson directory. */
  intro?: string;
  build?: BuildConfig;
  /** Files created when the lesson starts (only if missing, unless overwrite). */
  files?: FileSpec[];
  steps: Step[];
  /** Filled in by the loader. */
  dir: string;
  trackId: string;
}

// ---------------------------------------------------------------------------
// Results

export type Severity = 'error' | 'warning' | 'note';

export interface Diagnostic {
  file: string;     // as reported (made relative to the project when possible)
  line: number;
  column: number;
  severity: Severity;
  message: string;
  /** `compiler` or `linker`. */
  phase: 'compiler' | 'linker';
  code?: string;    // MSVC style codes, gcc -W flag
}

export interface Coaching {
  title: string;
  explanation: string;
}

export interface CommandResult {
  command: string;
  args: string[];
  cwd: string;
  exitCode: number | null;
  signal: string | null;
  stdout: string;
  stderr: string;
  timedOut: boolean;
  durationMs: number;
}

export interface BuildResult {
  target: string;
  ok: boolean;
  executable?: string;
  diagnostics: Diagnostic[];
  commands: CommandResult[];
  /** Human readable combined log. */
  log: string;
}

export interface RunResult extends CommandResult {
  crashed: boolean;
  crashDescription?: string;
}

export interface CheckResult {
  label: string;
  passed: boolean;
  skipped?: boolean;
  message?: string;
  details?: string;
  diagnostics?: Diagnostic[];
  coaching?: Coaching[];
}

export interface CheckReport {
  lessonId: string;
  stepId: string;
  passed: boolean;
  results: CheckResult[];
  /** Quiz feedback, when the step is a quiz. */
  quizFeedback?: string;
  lessonCompleted: boolean;
  builds: BuildResult[];
}
