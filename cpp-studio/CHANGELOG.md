# Changelog

## 0.2.0

**New lessons (13 in total)**
- Track 1 — Foundations is complete: loops (statistics tool, multiplication table), strings (word counter,
  palindromes), `std::vector` and algorithms (grade book, first lambda), structs/references/const (inventory,
  `std::optional`, `enum class`).
- Track 2 — Memory has begun: object lifetime with constructors/destructors, `new`/`delete`, a use-after-free caught by
  AddressSanitizer, and `std::unique_ptr`; then build your own dynamic array (growth, rule of three, bounds checking).

**Engine**
- Memory lessons build with AddressSanitizer + UndefinedBehaviorSanitizer when your toolchain supports them, and fall
  back with an explanation when it doesn't. Sanitizer reports are summarised in plain language with the first line of
  *your* code involved.
- Fixed: on macOS, files copied in by a lesson (starter files, solutions, Reset) kept old timestamps, so the build could
  silently run the previous version of your program.

**VS Code extension**
- Getting Started walkthrough on first run.
- *Create Learning Workspace* creates `~/CppStudio` (or a folder you pick), opens it and starts lesson one.
- *Check Toolchain* shows what's installed and the exact install commands for your OS; a warning appears if a compiler
  or CMake is missing.
- Updates without a marketplace: checks GitHub Releases daily and installs a newer version in one click
  (*C++ Studio: Check for Updates*; configurable under `cppStudio.updates.*`).
- Notes such as "checked without AddressSanitizer" are shown on passing checks.

**CLI**
- `cpp-studio version` and `cpp-studio update`; `doctor` prints install instructions for anything missing.

## 0.1.0

First version: learning engine, VS Code extension, CLI, and the first 7 lessons (Track 0 and the start of Track 1).
