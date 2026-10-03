# C++ Studio

**A C++ development environment that teaches through itself.**

Learners don't work in a simulated IDE. They build real software in a real workspace, with the real compiler,
CMake, unit tests and debugger installed on their machine, and the lessons guide them along the way. The goal is to
take someone who has edited one Python script to the point where they can design, debug, test, build, profile and
ship a serious C++ application.

This directory has the first implementation: a UI-agnostic **learning engine**, two front ends that share it (a
**VS Code extension** and a **CLI**), and **13 lessons**. Each lesson is checked against real compilers in CI.

```text
┌───────────────────────────┐   ┌──────────────────────┐
│ VS Code extension         │   │ CLI (cpp-studio)     │   ← front ends: render state, forward actions
└─────────────┬─────────────┘   └──────────┬───────────┘
              └──────────────┬─────────────┘
                             ▼
┌─────────────────────────────────────────────────────────┐
│ @cpp-studio/engine                                      │   ← lesson state, validation, progress,
│ curriculum · steps · checks · hints · snapshots · progress │     diagnostics coaching
└────────────────────────────┬────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────┐
│ Real tools: g++ / clang++ / MSVC · CMake · gdb / lldb   │
└─────────────────────────────────────────────────────────┘
```

## Install (no clone needed)

Download the files from the latest **cpp-studio-v…** release on GitHub (or from the *cpp-studio-installers*
artifact of any `cpp-studio-release` workflow run):

| What | Install | Update |
|------|---------|--------|
| VS Code extension | `code --install-extension cpp-studio-<version>.vsix` (or Extensions view → `…` → *Install from VSIX…*) | **Built in:** once a day the extension checks this repository's GitHub Releases and offers to install a newer version in one click (*C++ Studio: Check for Updates* to check now) |
| Command-line app | `npm install -g cpp-studio-cli-<version>.tgz`, then run `cpp-studio` | `cpp-studio update` tells you if there's a newer version and prints the install command |

After installing the extension, a **Get Started with C++ Studio** walkthrough opens. It checks your tools, creates
`~/CppStudio` for your projects and progress, and starts lesson one. See [TESTING.md](TESTING.md) for a guided tour.

You still need a C++ compiler and CMake on the machine. Run `cpp-studio doctor` or *C++ Studio: Check Toolchain* to see
what's missing. The lessons ship inside both packages, and your progress lives in your workspace folder, so updating
never loses your work.

### Making a release

```sh
git tag cpp-studio-v0.2.0 && git push origin cpp-studio-v0.2.0
```

The `cpp-studio-release` workflow tests everything, builds both installers, and attaches them to a GitHub Release.
If the repository has `VSCE_PAT`, `OVSX_PAT` or `NPM_TOKEN` secrets, it also publishes to the VS Code Marketplace,
Open VSX or npm. Once it's published there, installed copies update themselves.

To build the installers locally: `npm run package`. The files land in `release/`.

## Develop from source

Prerequisites: Node 20+, a C++ compiler (g++, clang++ or MSVC), CMake 3.20+, and optionally gdb/lldb.

```sh
cd cpp-studio
npm install
npm run build

# Learn in the terminal
mkdir ~/cpp-workspace && cd ~/cpp-workspace
node /path/to/cpp-studio/packages/cli/dist/main.js doctor   # are the tools installed?
node /path/to/cpp-studio/packages/cli/dist/main.js map      # the curriculum
node /path/to/cpp-studio/packages/cli/dist/main.js start    # begin / resume
node /path/to/cpp-studio/packages/cli/dist/main.js check    # validate your work
```

**In VS Code:** open `cpp-studio/` and run the **Run C++ Studio extension** launch configuration (F5). A second
VS Code window opens on `cpp-studio/workspace/`. Click the C++ Studio icon in the activity bar, then
**Initialize Workspace Here**. For the debugger lesson, install the Microsoft C/C++ extension or CodeLLDB.

## What the first milestone covers

A learner can:

1. open Lesson 1 and create a real C++ file in a real project folder,
2. type every line of a real program, then compile it with their own compiler,
3. get compiler and linker diagnostics with a plain-language explanation of what each one means,
4. run the preprocessor, compiler and linker by hand in a real terminal,
5. build with CMake, then write and run unit tests and use a failing test to drive a change,
6. make a mistake, crash the program, and find the cause with the debugger,
7. finish a challenge with no scaffolding, checked by hidden acceptance tests,
8. close the app, reopen it, and continue from the exact step where they stopped.

## Curriculum so far

| Track | Lesson | Mode | Project |
|-------|--------|------|---------|
| 0 · Environment | From a text file to a running program | guided | `hello` |
| | Reading what the compiler tells you | guided | `diagnostics` |
| | Building with CMake | guided | `hello` (continued) |
| | Your first crash, and the debugger | guided | `debugger` |
| 1 · Foundations | Values, types and a first calculator | incremental | `calculator` |
| | Functions, headers and your first unit tests | incremental | `calculator` (continued) |
| | Independent work: GCD and LCM | independent | `calculator` (continued) |
| | Loops: summarising a stream of numbers | incremental | `stats` |
| | Text: building a word counter | incremental | `words` |
| | std::vector and algorithms: a grade book | incremental | `gradebook` |
| | Structs, references and const: an inventory | incremental | `inventory` |
| 2 · Memory | Object lifetime: the stack, the heap, and who cleans up | guided | `lifetime` |
| | Build your own dynamic array | incremental | `dynarray` |

Track 2 lessons build with AddressSanitizer and UndefinedBehaviorSanitizer where the toolchain supports them.
Tracks 3–10 (the language, STL & DSA, software engineering, systems/OS, networking, graphics/Vulkan, game engine,
advanced C++) appear on the curriculum map as *planned*. See [docs/ROADMAP.md](docs/ROADMAP.md).

## Repository layout

```text
cpp-studio/
├── packages/
│   ├── engine/      UI-agnostic learning engine (TypeScript, no runtime dependencies)
│   ├── cli/         terminal front end
│   └── vscode/      VS Code extension front end
├── curriculum/
│   ├── curriculum.json      tracks → lessons (a graph via prerequisites)
│   ├── shared/              files used by many lessons (studio_test.hpp)
│   └── lessons/<id>/        lesson.json, Markdown steps, starter files, reference solutions
└── docs/
    ├── ARCHITECTURE.md
    ├── LESSON_FORMAT.md     how to write lessons
    └── ROADMAP.md
```

## Testing

```sh
npm test
```

This builds every package, runs the engine's unit tests, and then **walks every lesson** with the real toolchain.
For every step, the checks must *fail* on the starting state and *pass* on the reference solution. So no check passes
by accident, and no solution goes stale. Set `CXX=clang++` to run the walk with a different compiler.
