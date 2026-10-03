import * as path from 'path';
import { Coaching, Diagnostic, Severity } from './types';

// gcc / clang:   src/main.cpp:12:5: error: expected ';' before 'return'
const GCC_RE = /^(.+?):(\d+):(\d+):\s+(fatal error|error|warning|note):\s+(.*)$/;
// gcc without a column (rare, e.g. some linker-adjacent messages)
const GCC_NOCOL_RE = /^(.+?):(\d+):\s+(fatal error|error|warning|note):\s+(.*)$/;
// MSVC:          src\main.cpp(12,5): error C2143: syntax error: missing ';' before 'return'
const MSVC_RE = /^(.+?)\((\d+)(?:,(\d+))?\)\s*:\s+(fatal error|error|warning|note)\s+([A-Z]+\d+)\s*:\s+(.*)$/;
// GNU ld:        /usr/bin/ld: main.o: in function `main': main.cpp:(.text+0x9): undefined reference to `area(double)'
const LD_UNDEFINED_RE = /undefined reference to [`'](.+?)'/;
// Apple ld:      Undefined symbols for architecture arm64:  "area(double)", referenced from:
const APPLE_UNDEFINED_RE = /^\s*"(.+?)", referenced from:/;
// MSVC link:     main.obj : error LNK2019: unresolved external symbol ...
const MSVC_LINK_RE = /^(.+?)\s*:\s+(fatal error|error)\s+(LNK\d+)\s*:\s+(.*)$/;
const LD_MULTIPLE_RE = /multiple definition of [`'](.+?)'|duplicate symbol '(.+?)'/;

function severity(s: string): Severity {
  if (s.includes('error')) return 'error';
  if (s === 'warning') return 'warning';
  return 'note';
}

function relativise(file: string, projectDir?: string): string {
  if (!projectDir) return file;
  if (path.isAbsolute(file)) {
    const rel = path.relative(projectDir, file);
    if (!rel.startsWith('..')) return rel.split(path.sep).join('/');
  }
  return file.split(path.sep).join('/');
}

/** Parse compiler and linker output from gcc, clang or MSVC into structured diagnostics. */
export function parseDiagnostics(output: string, projectDir?: string): Diagnostic[] {
  const out: Diagnostic[] = [];
  const seen = new Set<string>();
  const push = (d: Diagnostic) => {
    const key = `${d.file}:${d.line}:${d.column}:${d.severity}:${d.message}`;
    if (!seen.has(key)) { seen.add(key); out.push(d); }
  };

  for (const raw of output.split(/\r?\n/)) {
    const line = raw.replace(/\x1b\[[0-9;]*m/g, '');
    let m = MSVC_LINK_RE.exec(line);
    if (m) {
      push({ file: relativise(m[1], projectDir), line: 0, column: 0, severity: 'error', message: m[4], phase: 'linker', code: m[3] });
      continue;
    }
    m = MSVC_RE.exec(line);
    if (m) {
      push({
        file: relativise(m[1], projectDir), line: +m[2], column: m[3] ? +m[3] : 1,
        severity: severity(m[4]), message: m[6], phase: 'compiler', code: m[5],
      });
      continue;
    }
    if (LD_UNDEFINED_RE.test(line) || LD_MULTIPLE_RE.test(line)) {
      // The "file:(.text+0x..)" location is an object-file offset, not a source line.
      const sym = LD_UNDEFINED_RE.exec(line);
      const msg = sym ? `undefined reference to '${sym[1]}'` : line.replace(/^.*?:\s*(?=multiple|duplicate)/, '');
      push({ file: '', line: 0, column: 0, severity: 'error', message: msg, phase: 'linker' });
      continue;
    }
    m = APPLE_UNDEFINED_RE.exec(line);
    if (m) {
      push({ file: '', line: 0, column: 0, severity: 'error', message: `undefined symbol '${m[1]}'`, phase: 'linker' });
      continue;
    }
    if (/^\S*ld(\.exe)?: |^collect2|clang(\+\+)?: error: linker command failed/.test(line)) {
      // Summary and context lines; the real cause is reported on its own line.
      if (/linker command failed|ld returned|: in function /.test(line)) continue; // summary lines; real cause reported separately
      push({ file: '', line: 0, column: 0, severity: 'error', message: line.replace(/^\S*ld(\.exe)?:\s*/, ''), phase: 'linker' });
      continue;
    }
    m = GCC_RE.exec(line);
    if (m) {
      const flag = /\[(-W[\w=-]+)\]\s*$/.exec(m[5]);
      push({
        file: relativise(m[1], projectDir), line: +m[2], column: +m[3],
        severity: severity(m[4]), message: m[5].replace(/\s*\[-W[\w=-]+\]\s*$/, ''),
        phase: 'compiler', code: flag?.[1],
      });
      continue;
    }
    m = GCC_NOCOL_RE.exec(line);
    if (m && !/^In file included from/.test(line)) {
      push({ file: relativise(m[1], projectDir), line: +m[2], column: 1, severity: severity(m[3]), message: m[4], phase: 'compiler' });
    }
  }
  return out;
}

interface CoachingRule { pattern: RegExp; title: string; explanation: string }

// Mistakes are part of the curriculum: each common diagnostic gets a short explanation
// of what the tool is actually telling you, written for someone learning to read them.
const RULES: CoachingRule[] = [
  {
    pattern: /expected ';'|expected ‘;’|missing ';'/,
    title: 'Missing semicolon',
    explanation:
      "Statements in C++ end with `;`. The compiler only notices a semicolon is missing when it reaches the *next* token, " +
      'so the reported position is just after the real mistake — sometimes on the following line. Look at the end of the statement *before* the reported position.',
  },
  {
    pattern: /'(?:cout|cin|endl|cerr)' is not a member of 'std'|no member named '(?:cout|cin|endl|cerr)' in namespace 'std'/,
    title: 'Missing #include <iostream>',
    explanation: '`std::cout` and friends are declared in the `<iostream>` header. Without `#include <iostream>` the compiler has never heard of them.',
  },
  {
    pattern: /'string' is not a member of 'std'|no (?:type|member) named 'string' in namespace 'std'/,
    title: 'Missing #include <string>',
    explanation: '`std::string` is declared in `<string>`. Include it in every file that uses it.',
  },
  {
    pattern: /was not declared in this scope|use of undeclared identifier|undeclared identifier|identifier not found/,
    title: 'Name not declared',
    explanation:
      'The compiler reads top to bottom and must have seen a declaration before you use a name. Common causes: a typo, ' +
      'a missing `#include`, a missing `std::` prefix, or using a variable outside the `{ }` block (scope) where it was declared. ' +
      'If the compiler says "did you mean …", it is usually right.',
  },
  {
    pattern: /no matching function for call|no matching (?:member )?function|cannot convert argument|too (?:many|few) arguments/,
    title: 'Arguments do not match any function',
    explanation:
      'A function with that name exists, but none of its versions accept the argument types/count you passed. ' +
      'The notes that follow ("candidate: …") list what *is* available — compare their parameter lists with your call.',
  },
  {
    pattern: /undefined reference to|undefined symbol|unresolved external symbol/,
    title: 'Linker error: declared but never defined',
    explanation:
      'This error comes from the **linker**, not the compiler. Every file compiled fine, but something was *declared* ' +
      '(the compiler was promised it exists) and no compiled file actually *defines* it. Either the definition is missing, ' +
      'its signature differs from the declaration, or the `.cpp` file that defines it is not part of the build.',
  },
  {
    pattern: /multiple definition of|duplicate symbol|already defined in/,
    title: 'Linker error: defined more than once',
    explanation:
      'The same function or variable is defined in more than one translation unit (the One Definition Rule). ' +
      'Put declarations in headers and definitions in exactly one `.cpp` file — or mark header definitions `inline`.',
  },
  {
    pattern: /No such file or directory|file not found|cannot open (?:include|source) file/,
    title: 'File not found',
    explanation:
      'The preprocessor could not find a file named in `#include`. Check the spelling, whether you used `<…>` (system/library paths) ' +
      'versus `"…"` (searches next to the current file first), and the include directories configured for the build.',
  },
  {
    pattern: /expected '}' at end of input|expected '}'|expected unqualified-id|expected declaration/,
    title: 'Unbalanced braces or stray token',
    explanation: 'Every `{` needs a matching `}`. An unmatched brace often produces an error far away from the real mistake — check the code just above the reported line.',
  },
  {
    pattern: /invalid conversion|cannot convert|no viable conversion|cannot initialize/,
    title: 'Type mismatch',
    explanation: 'C++ checks types at compile time. You are using a value of one type where a different, incompatible type is required.',
  },
  {
    pattern: /control reaches end of non-void function|non-void function does not return a value|must return a value/,
    title: 'Missing return value',
    explanation: 'A function declared to return a value has a path that reaches the closing `}` without a `return`. Calling code would receive garbage — that is undefined behaviour.',
  },
  {
    pattern: /comparison of integer expressions of different signedness|comparison of integers of different signs|signed\/unsigned mismatch/,
    title: 'Signed/unsigned comparison',
    explanation:
      '`.size()` returns an *unsigned* type (`std::size_t`). Comparing it with a signed `int` converts the int to unsigned, ' +
      'so a negative number becomes a huge positive one. Use `std::size_t` for indices, or better, a range-based `for` loop.',
  },
  {
    pattern: /unused variable|unused parameter|declared but never referenced|set but not used/,
    title: 'Unused variable',
    explanation: 'Harmless on its own, but often a sign of a typo (you meant to use this variable somewhere) or leftover code.',
  },
  {
    pattern: /does not name a type|unknown type name/,
    title: 'Unknown type',
    explanation: 'The compiler does not recognise this type name. Usually a missing `#include`, a missing `std::`, or a typo.',
  },
];

export function coachDiagnostics(diags: Diagnostic[]): Coaching[] {
  const out: Coaching[] = [];
  const used = new Set<string>();
  for (const d of diags) {
    if (d.severity === 'note') continue;
    for (const r of RULES) {
      if (r.pattern.test(d.message) && !used.has(r.title)) {
        used.add(r.title);
        out.push({ title: r.title, explanation: r.explanation });
        break;
      }
    }
  }
  return out;
}

/** Explain how a process died, in learner terms. */
export function describeCrash(signal: string | null, exitCode: number | null): string | undefined {
  const sig = signal ?? '';
  const code = exitCode ?? 0;
  if (sig === 'SIGSEGV' || code === 139 || code === -1073741819 || code === 3221225477) {
    return 'Segmentation fault: the program read or wrote memory it does not own — very often through a null or dangling pointer, ' +
      'or an out-of-bounds index. Run it in the debugger: it will stop on the exact line.';
  }
  if (sig === 'SIGFPE' || code === 136 || code === -1073741676 || code === 3221225620) {
    return 'Arithmetic exception: typically an integer division by zero.';
  }
  if (sig === 'SIGABRT' || code === 134 || code === 3221226505) {
    return 'The program aborted: usually a failed `assert`, an uncaught exception, or the C++ runtime detecting corrupted memory.';
  }
  if (sig === 'SIGBUS') return 'Bus error: an invalid memory access (often misaligned or through a bad pointer).';
  if (sig) return `The program was terminated by signal ${sig}.`;
  return undefined;
}

const SANITIZER_EXPLAIN: [RegExp, string][] = [
  [/heap-use-after-free/, 'Use after free: the program used heap memory after it was released with `delete`. Whatever pointer you used is *dangling*.'],
  [/stack-use-after-return|stack-use-after-scope/, 'Use after scope/return: the program used a local variable after its lifetime ended — usually through a pointer or reference that outlived it.'],
  [/heap-buffer-overflow/, 'Heap buffer overflow: the program read or wrote past the end (or before the start) of a block allocated with `new[]`.'],
  [/stack-buffer-overflow/, 'Stack buffer overflow: the program indexed outside a local array.'],
  [/global-buffer-overflow/, 'Global buffer overflow: the program indexed outside a global array.'],
  [/attempting double-free/, 'Double free: the same memory was released twice. Two objects probably both believe they own the same pointer.'],
  [/alloc-dealloc-mismatch/, 'Allocation/deallocation mismatch: memory from `new[]` must be released with `delete[]`, and memory from `new` with `delete`.'],
  [/detected memory leaks/, 'Memory leak: memory allocated with `new` was never released with `delete`.'],
  [/SEGV on unknown address 0x0+\b|SEGV on unknown address \(pc/, 'Null pointer dereference: the program accessed memory through a null pointer.'],
  [/SEGV/, 'Invalid memory access (segmentation fault).'],
  [/runtime error: signed integer overflow/, 'Signed integer overflow: the result did not fit in the type. In C++ this is undefined behaviour.'],
  [/runtime error: division by zero/, 'Integer division by zero (undefined behaviour).'],
  [/runtime error:/, 'The UndefinedBehaviorSanitizer detected undefined behaviour.'],
];

/**
 * Summarise an AddressSanitizer / UndefinedBehaviorSanitizer report: what kind of bug,
 * and the first stack frame in the learner's code.
 */
export function describeSanitizerReport(stderr: string): string | undefined {
  const asan = /ERROR: (AddressSanitizer|LeakSanitizer): ([^\n]*)/.exec(stderr);
  const ubsan = /^(.+?):(\d+):(\d+): runtime error: (.*)$/m.exec(stderr);
  if (!asan && !ubsan) return undefined;
  const headline = asan ? asan[0] : ubsan![0];
  const explain = SANITIZER_EXPLAIN.find(([re]) => re.test(headline))?.[1] ?? 'A sanitizer detected a memory error.';
  let where = '';
  if (asan) {
    // First frame that points at a source file outside system/library paths.
    const frames = [...stderr.matchAll(/^\s*#\d+ 0x[0-9a-f]+ in (\S+) (\S+?):(\d+)/gm)];
    const own = frames.find((f) => !/\/usr\/|libsanitizer|compiler-rt|\/Library\/|sysdeps|include\/c\+\+/.test(f[2]));
    if (own) where = `\nFirst location in your code: ${own[2].split('/').pop()}:${own[3]} (in ${own[1]})`;
  } else {
    where = `\nLocation: ${ubsan![1].split('/').pop()}:${ubsan![2]}`;
  }
  return `${explain}${where}\n\nSanitizer report: ${headline.trim()}`;
}
