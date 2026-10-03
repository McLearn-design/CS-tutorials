# Trying C++ Studio

A guided tour for testing the installed extension (no repository clone needed).

## 1. Install

You need a C++ compiler and CMake. If you aren't sure, install the extension first and it will tell you.

```sh
code --install-extension cpp-studio-0.2.0.vsix
```

Or in VS Code: **Extensions** view → `…` menu → **Install from VSIX…**

Optional, but needed for the debugger lesson: install the **C/C++** extension (`ms-vscode.cpptools`) or **CodeLLDB**.

## 2. First run

1. Reload VS Code. The **Get Started with C++ Studio** walkthrough opens. (If it doesn't: Command Palette →
   *C++ Studio: Getting Started*.)
2. **Check Toolchain**. This opens a page showing what was found and the install commands for anything missing.
3. **Create Learning Workspace**. Choose `~/CppStudio` (recommended). VS Code reopens on that folder and lesson one
   starts.

## 3. Things worth trying

| Try this | What should happen |
|---|---|
| Follow lesson 1 and type the code yourself | **Check** (or `Ctrl+Alt+Enter` / `Cmd+Alt+Enter`) compiles with your real compiler and runs the program |
| Delete a `;` and press Check | The error appears in the panel *and* in VS Code's Problems panel, with a plain-English explanation |
| Press **Hint** repeatedly | Hints are revealed one at a time |
| Make a mess, then **Reset step** | Files go back to how the step started. New files are moved to `.cpp-studio/trash/`, never deleted |
| Close VS Code mid-lesson and reopen the folder | You're back on the same step |
| Click a 🔒 lesson in the tree | It explains which lessons come first, and lets you open it anyway |
| Debugger lesson → **Debug** | Builds the program with debug info and starts the debugger; it stops on the crashing line |
| Memory track (open a locked lesson anyway) | Use-after-free and double-free are caught by AddressSanitizer and explained |
| *C++ Studio: Check for Updates* | "0.2.0 is the latest version" (until a newer release is published) |

Your projects are ordinary folders under `~/CppStudio/projects/`. Open a terminal there and build them by hand with
`g++` or `cmake`. They're real.

## 4. Command-line version (optional)

```sh
npm install -g cpp-studio-cli-0.2.0.tgz
mkdir ~/cpp-cli && cd ~/cpp-cli
cpp-studio doctor     # tools check
cpp-studio map        # curriculum
cpp-studio start      # begin
cpp-studio check      # validate your work
```

## 5. Getting a new version to yourself

1. Bump `version` in `cpp-studio/package.json` and add a section to `CHANGELOG.md`.
2. Push a tag: `git tag cpp-studio-v0.3.0 && git push origin cpp-studio-v0.3.0`.
3. The `cpp-studio-release` workflow tests everything and publishes a GitHub Release with the `.vsix` and `.tgz`.
4. Within a day (or right away with *Check for Updates*), the installed extension offers **Update Now**.

## Reporting problems

Useful things to include: your OS, the output of *C++ Studio: Check Toolchain*, and the **C++ Studio** output channel
(View → Output → C++ Studio), which contains the exact compiler commands that ran.
