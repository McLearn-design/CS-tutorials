import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { BuildResult, CheckReport, detectToolchain, Studio, StudioError, Workspace } from '@cpp-studio/engine';
import { CurriculumTree } from './curriculumTree';
import { LessonPanel, PanelMessage } from './lessonPanel';

let studio: Studio | undefined;
let tree: CurriculumTree;
let panel: LessonPanel;
let diagnostics: vscode.DiagnosticCollection;
let output: vscode.OutputChannel;
let status: vscode.StatusBarItem;
let extensionPath: string;
const terminals = new Map<string, vscode.Terminal>();

function workspaceRoot(): string | undefined {
  return vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
}

function curriculumRoot(): string {
  const configured = vscode.workspace.getConfiguration('cppStudio').get<string>('curriculumPath');
  if (configured) return configured;
  const bundled = path.join(extensionPath, 'curriculum');
  // During development the extension runs from packages/vscode; use the repository's curriculum.
  return fs.existsSync(path.join(bundled, 'curriculum.json')) ? bundled : path.resolve(extensionPath, '../../curriculum');
}

async function load(): Promise<void> {
  const root = workspaceRoot();
  studio = undefined;
  if (root && Workspace.isWorkspace(root)) {
    try {
      studio = await Studio.open({
        workspaceRoot: root,
        curriculumRoot: curriculumRoot(),
        allowLocked: vscode.workspace.getConfiguration('cppStudio').get<boolean>('allowLockedLessons'),
      });
    } catch (e) {
      void vscode.window.showErrorMessage(`C++ Studio: ${(e as Error).message}`);
    }
  }
  await vscode.commands.executeCommand('setContext', 'cppStudio.active', !!studio);
  tree.refresh();
  updateStatus();
}

function updateStatus(): void {
  const v = studio?.current();
  if (!v) { status.hide(); return; }
  status.text = `$(mortar-board) ${v.lesson.title} · ${v.stepIndex + 1}/${v.stepCount}`;
  status.tooltip = `${v.step.title} — click to show the lesson`;
  status.command = 'cppStudio.continue';
  status.show();
}

function requireStudio(): Studio {
  if (!studio) throw new StudioError('Open a C++ Studio workspace first (C++ Studio: Initialize Workspace Here).');
  return studio;
}

async function openStepFiles(): Promise<void> {
  const v = studio?.current();
  if (!v) return;
  for (const [i, rel] of (v.step.open ?? []).entries()) {
    const file = path.join(v.projectDir, rel);
    if (!fs.existsSync(file)) continue;
    const doc = await vscode.workspace.openTextDocument(file);
    await vscode.window.showTextDocument(doc, { viewColumn: vscode.ViewColumn.One, preview: false, preserveFocus: i > 0 });
  }
}

async function render(report?: CheckReport): Promise<void> {
  const v = studio?.current();
  if (!v) return;
  await panel.show(v, report);
  tree.refresh();
  updateStatus();
}

/** Put compiler diagnostics where an IDE user expects them: the Problems panel and squiggles. */
function publishDiagnostics(builds: BuildResult[], projectDir: string): void {
  diagnostics.clear();
  const byFile = new Map<string, vscode.Diagnostic[]>();
  for (const b of builds) {
    output.appendLine(b.log);
    for (const d of b.diagnostics) {
      const file = d.file ? path.resolve(projectDir, d.file) : path.join(projectDir, 'CMakeLists.txt');
      if (!fs.existsSync(file)) continue;
      const line = Math.max(0, d.line - 1);
      const col = Math.max(0, d.column - 1);
      const sev = d.severity === 'error' ? vscode.DiagnosticSeverity.Error
        : d.severity === 'warning' ? vscode.DiagnosticSeverity.Warning : vscode.DiagnosticSeverity.Information;
      const diag = new vscode.Diagnostic(new vscode.Range(line, col, line, col + 1), d.message, sev);
      diag.source = d.phase === 'linker' ? 'linker' : 'compiler';
      if (d.code) diag.code = d.code;
      byFile.set(file, [...(byFile.get(file) ?? []), diag]);
    }
  }
  for (const [file, diags] of byFile) diagnostics.set(vscode.Uri.file(file), diags);
}

async function openLesson(id: string): Promise<void> {
  const s = requireStudio();
  try {
    s.startLesson(id);
  } catch (e) {
    if (!(e instanceof StudioError) || !/needs these lessons first/.test(e.message)) throw e;
    const choice = await vscode.window.showWarningMessage(e.message, { modal: true }, 'Open Anyway');
    if (choice !== 'Open Anyway') return;
    s.startLesson(id, { force: true });
  }
  diagnostics.clear();
  await openStepFiles();
  await render();
}

async function check(answer?: number): Promise<void> {
  const s = requireStudio();
  const v = s.current();
  if (!v) return;
  await vscode.workspace.saveAll(false);
  panel.setBusy(true);
  try {
    const report = await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Window, title: 'C++ Studio: building and checking…' },
      () => s.check({ answer }),
    );
    publishDiagnostics(report.builds, v.projectDir);
    if (report.passed && report.lessonCompleted && v.stepIndex === v.stepCount - 1) {
      const next = s.recommended();
      void vscode.window.showInformationMessage(`🎉 Lesson complete: ${v.lesson.title}`, ...(next ? [`Start: ${next.title}`] : []))
        .then((pick) => { if (pick && next) void openLesson(next.id); });
    }
    await render(report);
  } finally {
    panel.setBusy(false);
  }
}

async function move(fn: () => unknown): Promise<void> {
  fn();
  diagnostics.clear();
  await openStepFiles();
  await render();
}

async function showSolution(): Promise<void> {
  const s = requireStudio();
  const pick = await vscode.window.showWarningMessage(
    'Looking at the solution is fine — but you will learn more if you try to understand it and then type it yourself.',
    { modal: true }, 'View Solution', 'Copy Into My Project');
  if (pick === 'View Solution') {
    for (const f of s.solutionFiles()) {
      const doc = await vscode.workspace.openTextDocument({ content: `// Reference solution: ${f.path}\n\n${f.content}`, language: /\.(cpp|h|hpp)$/.test(f.path) ? 'cpp' : 'plaintext' });
      await vscode.window.showTextDocument(doc, { viewColumn: vscode.ViewColumn.One, preview: false });
    }
  } else if (pick === 'Copy Into My Project') {
    const files = s.applySolution();
    void vscode.window.showInformationMessage(`Copied: ${files.join(', ')}`);
  }
}

async function resetStep(): Promise<void> {
  const s = requireStudio();
  const pick = await vscode.window.showWarningMessage('Restore the project files to how they were when this step began? New files are moved to .cpp-studio/trash.', { modal: true }, 'Reset');
  if (pick !== 'Reset') return;
  const r = s.resetStep();
  diagnostics.clear();
  void vscode.window.showInformationMessage(`Restored ${r.restored.length} file(s).${r.trashed.length ? ` Moved to trash: ${r.trashed.join(', ')}` : ''}`);
  await render();
}

function terminal(command?: string): void {
  const v = requireStudio().current();
  if (!v) return;
  let t = terminals.get(v.lesson.project);
  if (!t || t.exitStatus) {
    t = vscode.window.createTerminal({ name: `C++ Studio: ${v.lesson.project}`, cwd: v.projectDir });
    terminals.set(v.lesson.project, t);
  }
  t.show();
  if (command) t.sendText(command, true);
}

async function debug(): Promise<void> {
  const s = requireStudio();
  await vscode.workspace.saveAll(false);
  const prep = await s.prepareDebug();
  output.appendLine(prep.log);
  if (!prep.ok || !prep.program) {
    void vscode.window.showErrorMessage('The program does not build yet — press Check to see why.');
    return;
  }
  const cpptools = vscode.extensions.getExtension('ms-vscode.cpptools');
  const codelldb = vscode.extensions.getExtension('vadimcn.vscode-lldb');
  const usesMsvc = s.toolchain.compiler?.kind === 'msvc';
  let config: vscode.DebugConfiguration;
  if (cpptools) {
    config = usesMsvc
      ? { type: 'cppvsdbg', request: 'launch', name: 'C++ Studio', program: prep.program, cwd: prep.cwd, console: 'integratedTerminal' }
      : {
        type: 'cppdbg', request: 'launch', name: 'C++ Studio', program: prep.program, cwd: prep.cwd, args: [],
        MIMode: process.platform === 'darwin' ? 'lldb' : 'gdb', externalConsole: false, stopAtEntry: false,
      };
  } else if (codelldb) {
    config = { type: 'lldb', request: 'launch', name: 'C++ Studio', program: prep.program, cwd: prep.cwd, terminal: 'integrated' };
  } else {
    const pick = await vscode.window.showWarningMessage(
      'Debugging needs a C++ debugger extension: Microsoft C/C++ (ms-vscode.cpptools) or CodeLLDB. You can also use gdb/lldb in the terminal.',
      'Install C/C++ Extension', 'Use Terminal');
    if (pick === 'Install C/C++ Extension') await vscode.commands.executeCommand('workbench.extensions.installExtension', 'ms-vscode.cpptools');
    else if (pick === 'Use Terminal') terminal(`${s.toolchain.debugger?.kind ?? 'gdb'} ${JSON.stringify(path.relative(prep.cwd, prep.program))}`);
    return;
  }
  await vscode.debug.startDebugging(vscode.workspace.workspaceFolders?.[0], config);
}

async function doctor(): Promise<void> {
  const tc = studio?.toolchain ?? (await detectToolchain());
  output.clear();
  output.appendLine('C++ Studio toolchain check');
  output.appendLine(`compiler: ${tc.compiler ? `${tc.compiler.kind} ${tc.compiler.path}\n          ${tc.compiler.version}` : 'NOT FOUND — install g++, clang++ or Visual Studio Build Tools'}`);
  output.appendLine(`cmake:    ${tc.cmake ? tc.cmake.version : 'NOT FOUND — install CMake 3.20+'}`);
  output.appendLine(`debugger: ${tc.debugger ? `${tc.debugger.kind} ${tc.debugger.path}` : 'not found (needed from the debugger lesson on)'}`);
  output.appendLine(`git:      ${tc.git ? tc.git.path : 'not found'}`);
  output.show();
}

function guard(fn: (...args: any[]) => unknown) {
  return async (...args: any[]) => {
    try {
      await fn(...args);
    } catch (e) {
      void vscode.window.showErrorMessage(e instanceof StudioError ? e.message : `C++ Studio: ${(e as Error).message}`);
    }
  };
}

async function onPanelMessage(m: PanelMessage): Promise<void> {
  const s = requireStudio();
  switch (m.type) {
    case 'check': return check();
    case 'answer': return check(m.index);
    case 'hint': {
      if (!s.hint()) void vscode.window.showInformationMessage('No more hints for this step.');
      return render();
    }
    case 'reset': return resetStep();
    case 'solution': return showSolution();
    case 'next': return move(() => s.next());
    case 'prev': return move(() => s.previous());
    case 'debug': return debug();
    case 'terminal': return terminal(m.command);
    case 'open': {
      const v = s.current();
      if (v) await vscode.window.showTextDocument(vscode.Uri.file(path.join(v.projectDir, m.path)), { viewColumn: vscode.ViewColumn.One });
    }
  }
}

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  extensionPath = context.extensionPath;
  output = vscode.window.createOutputChannel('C++ Studio');
  diagnostics = vscode.languages.createDiagnosticCollection('cpp-studio');
  status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 50);
  tree = new CurriculumTree(() => studio);
  panel = new LessonPanel((m) => void guard(onPanelMessage)(m));

  context.subscriptions.push(
    output, diagnostics, status,
    vscode.window.registerTreeDataProvider('cppStudio.curriculum', tree),
    vscode.commands.registerCommand('cppStudio.initWorkspace', guard(async () => {
      const root = workspaceRoot();
      if (!root) { await vscode.commands.executeCommand('vscode.openFolder'); return; }
      Workspace.init(root);
      await load();
      const first = studio?.recommended();
      if (first) await openLesson(first.id);
    })),
    vscode.commands.registerCommand('cppStudio.openLesson', guard((id: string) => openLesson(id))),
    vscode.commands.registerCommand('cppStudio.continue', guard(async () => {
      const s = requireStudio();
      const id = s.activeLessonId ?? s.recommended()?.id;
      if (id) await openLesson(id);
    })),
    vscode.commands.registerCommand('cppStudio.check', guard(() => {
      const v = studio?.current();
      if (v?.step.quiz) return render(); // quizzes are answered in the panel
      return check();
    })),
    vscode.commands.registerCommand('cppStudio.hint', guard(() => onPanelMessage({ type: 'hint' }))),
    vscode.commands.registerCommand('cppStudio.resetStep', guard(resetStep)),
    vscode.commands.registerCommand('cppStudio.debug', guard(debug)),
    vscode.commands.registerCommand('cppStudio.openTerminal', guard(() => terminal())),
    vscode.commands.registerCommand('cppStudio.doctor', guard(doctor)),
    vscode.commands.registerCommand('cppStudio.refresh', guard(async () => { studio?.reload(); tree.refresh(); updateStatus(); })),
    vscode.workspace.onDidChangeWorkspaceFolders(() => void load()),
    vscode.workspace.onDidChangeConfiguration((e) => { if (e.affectsConfiguration('cppStudio')) void load(); }),
    vscode.window.onDidCloseTerminal((t) => { for (const [k, v] of terminals) if (v === t) terminals.delete(k); }),
    { dispose: () => panel.dispose() },
  );

  await load();
  // Pick up exactly where the learner left off.
  if (studio?.current()) await render();
}

export function deactivate(): void {
  /* nothing to clean up beyond subscriptions */
}
