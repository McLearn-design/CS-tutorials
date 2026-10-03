import { Toolchain } from './toolchain';

/** Platform-specific instructions for installing what's missing, as Markdown. */
export function toolchainGuide(tc: Toolchain, platform: NodeJS.Platform = process.platform): string {
  const row = (ok: boolean, name: string, detail: string) => `| ${ok ? '✅' : '❌'} | ${name} | ${detail} |`;
  const lines = [
    '# C++ Studio — your toolchain',
    '',
    'C++ Studio uses the real tools installed on your computer. Here is what it found:',
    '',
    '| | Tool | Found |',
    '|---|---|---|',
    row(!!tc.compiler, 'C++ compiler', tc.compiler ? `${tc.compiler.kind} — \`${tc.compiler.path}\`<br>${tc.compiler.version}` : 'not found — **required**'),
    row(!!tc.cmake, 'CMake', tc.cmake ? tc.cmake.version : 'not found — **required** from the CMake lesson on'),
    row(!!tc.debugger, 'Debugger', tc.debugger ? `${tc.debugger.kind} — \`${tc.debugger.path}\`` : 'not found — needed for debugging lessons'),
    row(!!tc.git, 'Git', tc.git ? `\`${tc.git.path}\`` : 'not found — optional for now'),
    '',
  ];
  if (tc.compiler && tc.cmake && tc.debugger) {
    lines.push('Everything you need is installed. 🎉', '');
  } else {
    lines.push('## How to install the missing tools', '');
    if (platform === 'darwin') {
      lines.push(
        '**Compiler, debugger and Git** — Apple\'s Command Line Tools include clang, lldb and git. In Terminal:',
        '', '```sh', 'xcode-select --install', '```', '',
        '**CMake** — with [Homebrew](https://brew.sh):', '', '```sh', 'brew install cmake', '```', '',
        'or download the macOS installer from <https://cmake.org/download/> and run *Tools → How to Install For Command Line Use*.',
      );
    } else if (platform === 'win32') {
      lines.push(
        'Choose **one** of these:',
        '',
        '**Option A — Visual Studio Build Tools (MSVC):** install "Build Tools for Visual Studio" from',
        '<https://visualstudio.microsoft.com/downloads/> and select the **Desktop development with C++** workload',
        '(it includes CMake). Then start VS Code from the **Developer PowerShell for VS** so `cl` and `cmake` are on PATH.',
        '',
        '**Option B — LLVM/Clang + CMake with winget** (in PowerShell):',
        '', '```powershell', 'winget install LLVM.LLVM Kitware.CMake Git.Git', '```', '',
        'Restart VS Code afterwards so it sees the new PATH. Lessons show GCC/Clang commands; the MSVC equivalents are noted where they differ.',
      );
    } else {
      lines.push(
        '**Debian / Ubuntu:**', '', '```sh', 'sudo apt update', 'sudo apt install build-essential cmake gdb git', '```', '',
        '**Fedora:**', '', '```sh', 'sudo dnf install gcc-c++ cmake gdb git libasan libubsan', '```', '',
        '**Arch:**', '', '```sh', 'sudo pacman -S base-devel cmake gdb git', '```',
      );
    }
    lines.push('', 'When you\'re done, run the toolchain check again.');
  }
  lines.push('', '## Debugging in VS Code', '',
    'To use breakpoints in the editor, install the **C/C++** extension (`ms-vscode.cpptools`) or **CodeLLDB** (`vadimcn.vscode-lldb`, a good choice on macOS).');
  return lines.join('\n') + '\n';
}
