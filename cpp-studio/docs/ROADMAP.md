# Roadmap

The strategy: **prove the learning system inside VS Code before building a custom IDE.** If the curriculum isn't
compelling in VS Code, a custom shell won't fix that.

```text
VS Code extension ─► prove the engine ─► 10–20 real lessons ─► validate with learners ─► standalone shell ─► C++ Studio
        ▲ we are here (7 lessons)
```

## Phase A — Engine and first lessons (done in this iteration)

- [x] UI-agnostic engine: curriculum graph, steps, checks, hints, reset snapshots, persistent progress
- [x] Real toolchain: gcc/clang/MSVC detection, direct and CMake builds, program runs with stdin and timeouts
- [x] Diagnostics parsing (gcc, clang, MSVC, GNU ld, Apple ld) with coaching for common mistakes
- [x] Crash diagnosis (segfault, FPE, abort, timeout)
- [x] Unit tests from the first track (`studio_test.hpp`, GoogleTest-compatible output), visible and hidden test checks
- [x] VS Code extension: curriculum tree, lesson panel, Problems integration, debugger launch, project terminal
- [x] CLI front end
- [x] Track 0 (environment) and the start of Track 1 (foundations): 7 lessons, CI-verified with real compilers

## Phase B — Complete the foundations and validate with learners

- [ ] Track 1: control flow in depth (loops, `while`/`for`), `std::string` processing, `std::vector`, structs, enums, `const`, references
- [ ] Git inside the course: each lesson's project becomes a repository, and steps end with a commit
- [ ] Track 0 extras: sanitizers (`-fsanitize=address,undefined`) as a first-class debugging tool, `clang-format`
- [ ] Learning Inspector v1: stack/heap/object view during debug sessions (debug-adapter tracker)
- [ ] AST-level concept checks with clang (e.g. "this parameter must be a reference")
- [ ] A "your projects" portfolio view, and "Create New C++ Project" outside the curriculum
- [ ] Package and publish the extension (esbuild bundle + curriculum in the VSIX)
- [ ] Sessions with real learners. Measure where people get stuck using hint and attempt counts, which are already recorded in `progress.json`

## Phase C — The big tracks

The curriculum map already shows these as planned:

| Track | Projects |
|-------|----------|
| 2 · Memory, lifetime, ownership | dynamic array from scratch, custom container |
| 3 · The C++ language | text processing tool, configuration parser |
| 4 · STL, data structures, algorithms | searchable command system (vector vs. unordered_map, *measured*), inventory app, mini database |
| 5 · Software engineering | command interpreter, file-system explorer; GoogleTest, clang-tidy, CI, packaging |
| 6 · Systems and OS | shell, job/task system, thread pool; process/pipe/thread internals on Windows, Linux and macOS |
| 7 · Networking | HTTP client, HTTP server, game server |
| 8 · Graphics → OpenGL → Vulkan | software rasteriser, renderer, Vulkan renderer with pipeline visualisation |
| 9 · Game engine and games | ECS engine, 2D game, 3D game, multiplayer; data-oriented design when 50,000 objects get slow |
| 10 · Advanced C++ | templates, concepts, allocators, object layout, coroutines, atomics and the memory model |

Scaffolding decreases through these tracks. They shift from "build this with me" to "here's an existing codebase
and a bug report" to "here's a system requirement".

## Phase D — Standalone desktop

Electron + TypeScript/React + Monaco + xterm.js + the same engine. The extension's lesson panel and tree are the
prototype for that UI. The fifth panel no ordinary IDE has, the **Learning Inspector**, becomes a first-class part of the layout.
