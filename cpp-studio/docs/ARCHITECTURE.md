# Architecture

## Principle: the curriculum is not coupled to the UI

The expensive and differentiating asset is the curriculum and the engine that validates learner work. The UI is
replaceable. Today it's VS Code plus a CLI. Tomorrow it might be a standalone Electron + Monaco desktop app. So
everything that knows about lessons lives in `@cpp-studio/engine`, and front ends only:

- render a `StepView` (Markdown, quiz, hints, files to open, suggested commands),
- forward learner actions (`check`, `hint`, `next`, `reset`, `applySolution`, `prepareDebug`, …),
- render a `CheckReport` (results, diagnostics, coaching).

If a feature can't be built that way, the engine API is missing something. Add it to the engine, not to a front end.

## Engine modules

| Module | Responsibility |
|--------|----------------|
| `types.ts` | The data model: curriculum, tracks, lessons, steps, checks, results |
| `curriculum.ts` | Load and **validate** `curriculum.json` + `lesson.json` files (missing files, bad regexes, unknown targets) |
| `studio.ts` | `Studio`: the public API. Lesson flow, unlocking, steps, hints, reset, solutions, debug preparation |
| `workspace.ts` | The learner's workspace on disk: persistent projects, starting-state files, step snapshots, trash |
| `progress.ts` | Progress persistence (`.cpp-studio/progress.json`, written atomically) |
| `checks.ts` | Validators. One `CheckContext` per Check press caches builds, so several checks share one compile |
| `toolchain.ts` | Detect the compiler, CMake, debugger and Git. Run direct and CMake builds, then run programs with stdin and timeouts |
| `diagnostics.ts` | Parse gcc/clang/MSVC/ld output into structured diagnostics. **Coaching** rules explain common errors. Crash descriptions |
| `testing.ts` | Parse GoogleTest-format output (used by `studio_test.hpp` and later by real GoogleTest) |
| `source.ts` | Strip comments and strings so concept checks can't be fooled by commented-out code |

## The learner's workspace

```text
<workspace>/
├── README.md
├── projects/
│   ├── hello/          ← Track 0 lessons 1 and 3 both build this project
│   ├── diagnostics/
│   ├── debugger/
│   └── calculator/     ← every Track 1 lesson grows this project
└── .cpp-studio/
    ├── workspace.json
    ├── progress.json   ← active lesson, step index, completed steps, hints, attempts, quiz answers, notes
    ├── snapshots/<lesson>/<step>/   ← project sources as they were when the step began (for Reset)
    └── trash/          ← files moved aside by Reset; nothing is ever deleted
```

Projects are **persistent**: lessons that share a project build on the learner's own code. Lesson-provided files are
only written if they don't exist yet (unless a step explicitly sets `overwrite`), so a learner's work is never overwritten.
When a learner skips ahead (with `--force` or "Open Anyway"), the lesson's `files` give them a working starting point.

Learners can build their projects outside the studio as normal C++ projects. The studio's own CMake builds go into
`build/studio/` and direct compiles into `build/direct/`, so the learner's own `build/` directory belongs to them alone.

## Validation model

Checks run in order. **After the first failure, later checks are reported as skipped.** The learner fixes one thing
at a time, the same way you'd work through compiler errors.

| Check | Validates |
|-------|-----------|
| `fileExists` | A file (or executable, `.exe`-aware) exists |
| `source` | A regex matches (or, negated, doesn't match) the source with comments stripped. Use it **sparingly**, only when the lesson is specifically about a construct |
| `compiles` | The target builds, optionally with zero warnings |
| `diagnostics` | A specific diagnostic is gone, even if the build still fails for other reasons. Used for "fix one error at a time" steps |
| `output` | Program output for given stdin/args: `equals`, `contains`, `containsAll` (ordered), `matches` (regex), plus the exit code. Crashes and timeouts are diagnosed |
| `tests` | A test target builds and passes, with optional `minTests` and `requireTests` names |

Behavioural checks (`output`, `tests`) are preferred over textual ones, so any correct solution passes. Hidden
acceptance tests are just a `tests` check on a direct-build target whose sources use the `lesson:` prefix. They live in
the lesson directory and never in the learner's project.

## Mistakes as curriculum

`diagnostics.ts` maps common compiler and linker messages (gcc, clang and MSVC wording) to short explanations:
missing semicolon, undeclared name, missing include, no matching function, undefined reference, multiple definition,
signed/unsigned comparison, and others. Front ends show these next to the raw diagnostic. The raw text is always shown,
because the goal is to learn to read it. Crashes (SIGSEGV, SIGFPE, SIGABRT and the Windows equivalents) and timeouts get
the same treatment.

## Front ends

**VS Code extension** (`packages/vscode`)

- Activity-bar **Curriculum** tree: tracks → lessons with status icons, lock reasons in the tooltips, planned tracks with their projects.
- **Lesson panel** (webview): Markdown rendered by VS Code's own renderer, quiz buttons, hints, check results with coaching, and runnable command snippets.
- Compiler diagnostics go to the **Problems** panel and appear as squiggles in the editor.
- **Debug** builds the lesson program and launches `cppdbg` (gdb/lldb), `cppvsdbg` (MSVC) or CodeLLDB.
- **Terminal** opens a real terminal in the project folder.
- A status bar item shows the current lesson and step. Reopening the folder resumes the lesson.

**CLI** (`packages/cli`): the same flow in a terminal. This shows the engine is genuinely UI-agnostic, and it's
handy for learners who don't use VS Code and for curriculum authors.

## Next architectural steps

- **Bundle the extension** with esbuild and copy the curriculum into the VSIX (`npm run bundle-curriculum` in `packages/vscode`).
- **Learning Inspector**: a debug-adapter tracker in the extension that reads frames and variables during debug sessions and draws stack/heap/object views for the memory track.
- **AST-level concept checks** via `clang -Xclang -ast-dump=json` or libclang, for lessons that need to verify, for example, that a parameter is a reference.
- **Standalone shell**: Electron + Monaco + xterm.js, reusing the engine unchanged.
