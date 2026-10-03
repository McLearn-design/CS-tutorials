# Writing lessons

A lesson is a directory under `curriculum/lessons/<id>/`:

```text
lessons/found-functions/
├── lesson.json          metadata, build targets, steps, checks
├── intro.md             shown above step 1
├── steps/01-declare.md  one Markdown file per step
├── starter/             files placed into the learner's project
└── solution/<step-id>/  reference solution for each step (copied over the project)
```

Register it in `curriculum/curriculum.json` under a track's `lessons` array, in order.

## lesson.json

```jsonc
{
  "id": "found-functions",                  // must match the directory name
  "title": "Functions, headers and your first unit tests",
  "summary": "One or two sentences for the curriculum map.",
  "mode": "incremental",                    // guided | incremental | independent | project
  "project": "calculator",                  // projects/<name>/ — shared by lessons that build on each other
  "concepts": ["function", "header"],
  "prerequisites": ["found-values"],        // lesson ids; locks the lesson until they're complete
  "intro": "intro.md",
  "build": {
    "default": "calculator",
    "targets": {
      "calculator": { "system": "cmake", "output": "calculator" },
      "tests":      { "system": "cmake", "output": "calc_tests" },
      "hidden":     { "system": "direct",
                      "sources": ["lesson:acceptance/x_test.cpp", "shared:test_main.cpp", "calc.cpp"],
                      "includeDirs": [".", "shared:"],
                      "output": "hidden_tests" }
    }
  },
  "files": [                                 // applied when the lesson starts — only if missing
    { "path": "main.cpp", "from": "starter/main.cpp" }
  ],
  "steps": [ /* see below */ ]
}
```

`from` paths are relative to the lesson directory. `shared:` refers to `curriculum/shared/`. In build `sources` and
`includeDirs`, `lesson:` refers to the lesson directory: use it for hidden tests the learner never sees in their project.

## Steps

```jsonc
{
  "id": "first-test",
  "title": "A test program",
  "kind": "code",                // code | terminal | quiz | debug | challenge
  "content": "steps/03-first-test.md",
  "files": [ { "path": "tests/calc_test.cpp", "from": "starter/calc_test.cpp" } ],  // applied on first entry
  "open": ["tests/calc_test.cpp"],          // the UI opens these
  "commands": ["cmake --build build"],      // shown as runnable snippets
  "checks": [ /* ... */ ],
  "hints": ["first, gentle", "second, more specific", "last: nearly the answer"],
  "solution": "solution/first-test"
}
```

Quiz steps (and debug steps that end in a question) use `quiz` instead of, or as well as, `checks`:

```jsonc
"quiz": {
  "question": "…",
  "options": ["…", "…", "…"],
  "answer": 1,
  "explanations": ["why A is wrong", "why B is right", "why C is wrong"]
}
```

Write an explanation for **every** option. A wrong answer is a teaching moment.

## Checks

```jsonc
{ "type": "fileExists", "path": "hello", "executable": true }
{ "type": "source", "path": "calc.h", "pattern": "#\\s*pragma\\s+once", "label": "calc.h has #pragma once" }
{ "type": "compiles", "target": "calculator", "noWarnings": true }
{ "type": "diagnostics", "absent": "expected ';'" }
{ "type": "output", "stdin": "3 * 4\n", "expect": { "contains": "3 * 4 = 12" } }
{ "type": "output", "expect": { "equals": "line 1\nline 2" }, "exitCode": 0 }
{ "type": "output", "expect": { "containsAll": ["a", "b", "c"] } }
{ "type": "output", "expect": { "matches": "^Total: \\d+$", "flags": "m" } }
{ "type": "tests", "target": "tests", "minTests": 4, "requireTests": ["gcd_with_zero"] }
```

Every check accepts `label` (what the learner sees) and `failMessage` (a teaching message that replaces the default).

## Rules that keep lessons honest

These are enforced by `npm test`, which walks every lesson with the real toolchain:

1. **Each non-quiz step must fail before the learner acts.** If a step passes on its starting state, the checks
   aren't testing anything.
2. **Each step must pass with its reference solution.** Terminal steps without a solution are validated by running
   their `commands` (except those starting with `./`, `gdb` or `lldb`).
3. **Each quiz must reject a wrong answer and accept the right one.**
4. Prefer behavioural checks (`output`, `tests`) over `source` patterns. Use `source` only when the step is
   specifically about a construct, and make the pattern permissive about whitespace and naming.

## Style

- Explain **why** before **what**. Introduce a concept when the project needs it.
- Have the learner **type** code. Show a snippet, then ask for something slightly different.
- Invite deliberate mistakes ("delete the include and press Check"). Reading diagnostics is a core skill.
- Reduce scaffolding as the track progresses: guided → incremental → independent → project.
- Keep steps small. One idea per step, one check run to confirm it.
