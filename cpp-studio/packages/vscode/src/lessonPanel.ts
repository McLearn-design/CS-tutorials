import * as vscode from 'vscode';
import { CheckReport, StepView } from '@cpp-studio/engine';

/** Messages the webview sends back to the extension. */
export type PanelMessage =
  | { type: 'check' }
  | { type: 'answer'; index: number }
  | { type: 'hint' }
  | { type: 'reset' }
  | { type: 'solution' }
  | { type: 'next' }
  | { type: 'prev' }
  | { type: 'debug' }
  | { type: 'terminal'; command?: string }
  | { type: 'open'; path: string };

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]!));
}

async function md(text: string): Promise<string> {
  // VS Code's own Markdown renderer: same look as the built-in preview, no extra dependencies.
  return (await vscode.commands.executeCommand<string>('markdown.api.render', text)) ?? `<pre>${esc(text)}</pre>`;
}

/**
 * The lesson panel. It only renders state and forwards button presses;
 * all lesson logic lives in the engine.
 */
export class LessonPanel {
  private panel: vscode.WebviewPanel | undefined;
  private lastReport: CheckReport | undefined;
  private busy = false;

  constructor(private readonly onMessage: (m: PanelMessage) => void) {}

  get visible(): boolean {
    return !!this.panel;
  }

  private ensure(): vscode.WebviewPanel {
    if (this.panel) return this.panel;
    this.panel = vscode.window.createWebviewPanel('cppStudio.lesson', 'Lesson', { viewColumn: vscode.ViewColumn.Beside, preserveFocus: true }, {
      enableScripts: true,
      retainContextWhenHidden: true,
    });
    this.panel.onDidDispose(() => { this.panel = undefined; });
    this.panel.webview.onDidReceiveMessage((m: PanelMessage) => this.onMessage(m));
    return this.panel;
  }

  setBusy(busy: boolean): void {
    this.busy = busy;
    void this.panel?.webview.postMessage({ type: 'busy', busy });
  }

  async show(view: StepView, report?: CheckReport): Promise<void> {
    const panel = this.ensure();
    if (report !== undefined || this.lastReport?.stepId !== view.step.id) this.lastReport = report;
    panel.title = `${view.stepIndex + 1}/${view.stepCount} · ${view.step.title}`;
    panel.webview.html = await this.html(panel.webview, view, this.lastReport);
    panel.reveal(undefined, true);
  }

  private async html(webview: vscode.Webview, v: StepView, report?: CheckReport): Promise<string> {
    const nonce = Math.random().toString(36).slice(2);
    const body = await md(v.markdown);
    const step = v.step;

    const progress = Array.from({ length: v.stepCount }, (_, i) =>
      `<span class="pip ${i < v.stepIndex ? 'done' : i === v.stepIndex ? 'here' : ''}"></span>`).join('');

    let quiz = '';
    if (step.quiz) {
      const chosen = report?.stepId === step.id ? report : undefined;
      quiz = `<section class="quiz"><h3>${await md(step.quiz.question)}</h3>${step.quiz.options.map((o, i) =>
        `<button class="option" data-answer="${i}">${String.fromCharCode(65 + i)}. ${esc(o).replace(/`([^`]+)`/g, '<code>$1</code>')}</button>`).join('')}</section>`;
      if (chosen?.quizFeedback) {
        quiz += `<div class="feedback ${chosen.passed ? 'ok' : 'bad'}">${await md(chosen.quizFeedback)}</div>`;
      }
    }

    const commands = (step.commands ?? []).map((c) =>
      `<div class="cmd"><code>${esc(c)}</code><button class="link" data-run="${esc(c)}" title="Run in the project terminal">▶ Run</button></div>`).join('');

    const hints = v.hintsRevealed.length
      ? `<section class="hints">${(await Promise.all(v.hintsRevealed.map(async (h, i) => `<div class="hint"><b>Hint ${i + 1}</b>${await md(h)}</div>`))).join('')}</section>`
      : '';

    let results = '';
    if (report && report.stepId === step.id && !step.quiz) {
      const items = await Promise.all(report.results.map(async (r) => {
        const icon = r.skipped ? '–' : r.passed ? '✓' : '✗';
        const cls = r.skipped ? 'skip' : r.passed ? 'ok' : 'bad';
        const coaching = (await Promise.all((r.coaching ?? []).map(async (co) => `<div class="coach"><b>${esc(co.title)}</b>${await md(co.explanation)}</div>`))).join('');
        return `<li class="${cls}"><span class="icon">${icon}</span><div><div>${esc(r.label)}</div>` +
          (r.message && !r.passed && !r.skipped ? `<div class="msg">${esc(r.message)}</div>` : '') +
          (r.details && !r.passed ? `<pre>${esc(r.details)}</pre>` : '') + coaching + '</div></li>';
      }));
      results = `<section class="results"><h3>${report.passed ? 'All checks passed' : 'Checks'}</h3><ul>${items.join('')}</ul></section>`;
    }

    const files = (step.open ?? []).map((f) => `<button class="link" data-open="${esc(f)}">${esc(f)}</button>`).join(' ');
    const isLast = v.stepIndex === v.stepCount - 1;
    const doneBanner = v.completed
      ? `<div class="banner ok">${isLast ? '🎉 Lesson complete!' : 'Step complete — continue when you are ready.'}</div>` : '';

    return `<!DOCTYPE html><html><head><meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} https: data:;">
<style>
  body { font-family: var(--vscode-font-family); font-size: var(--vscode-font-size); color: var(--vscode-foreground); padding: 0 16px 48px; line-height: 1.55; max-width: 860px; }
  header { position: sticky; top: 0; background: var(--vscode-editor-background); padding: 10px 0 8px; border-bottom: 1px solid var(--vscode-panel-border); z-index: 1; }
  .crumbs { opacity: .75; font-size: .9em; }
  .pips { display: flex; gap: 4px; margin: 6px 0 8px; }
  .pip { flex: 1; height: 4px; border-radius: 2px; background: var(--vscode-progressBar-background); opacity: .2; }
  .pip.done { opacity: .7; } .pip.here { opacity: 1; }
  .toolbar { display: flex; flex-wrap: wrap; gap: 6px; }
  button { font: inherit; color: var(--vscode-button-secondaryForeground); background: var(--vscode-button-secondaryBackground); border: none; padding: 4px 10px; border-radius: 3px; cursor: pointer; }
  button:hover { background: var(--vscode-button-secondaryHoverBackground); }
  button.primary { color: var(--vscode-button-foreground); background: var(--vscode-button-background); }
  button.primary:hover { background: var(--vscode-button-hoverBackground); }
  button:disabled { opacity: .5; cursor: default; }
  button.link { background: none; color: var(--vscode-textLink-foreground); padding: 0 4px; }
  pre, code { font-family: var(--vscode-editor-font-family); }
  pre { background: var(--vscode-textCodeBlock-background); padding: 8px 10px; border-radius: 4px; overflow-x: auto; white-space: pre-wrap; }
  table { border-collapse: collapse; } td, th { border: 1px solid var(--vscode-panel-border); padding: 3px 8px; text-align: left; }
  blockquote { margin: 0; padding: 4px 12px; border-left: 3px solid var(--vscode-textBlockQuote-border); background: var(--vscode-textBlockQuote-background); }
  .files { margin: 6px 0; font-size: .9em; opacity: .9; }
  .cmd { display: flex; align-items: center; gap: 8px; margin: 4px 0; } .cmd code { flex: 1; background: var(--vscode-textCodeBlock-background); padding: 4px 8px; border-radius: 3px; }
  .quiz .option { display: block; width: 100%; text-align: left; margin: 6px 0; padding: 8px 12px; }
  .feedback, .banner { padding: 8px 12px; border-radius: 4px; margin: 10px 0; }
  .ok.feedback, .banner.ok { border-left: 4px solid var(--vscode-testing-iconPassed); background: var(--vscode-diffEditor-insertedTextBackground); }
  .bad.feedback { border-left: 4px solid var(--vscode-testing-iconFailed); background: var(--vscode-diffEditor-removedTextBackground); }
  .results ul { list-style: none; padding: 0; } .results li { display: flex; gap: 8px; margin: 6px 0; }
  .results .icon { width: 1.2em; font-weight: bold; } .results .ok .icon { color: var(--vscode-testing-iconPassed); }
  .results .bad .icon { color: var(--vscode-testing-iconFailed); } .results .skip { opacity: .5; }
  .msg { margin-top: 2px; } .coach { margin-top: 6px; padding: 6px 10px; border-left: 3px solid var(--vscode-charts-yellow); }
  .coach p { margin: 4px 0; }
  .hint { padding: 6px 10px; margin: 8px 0; border-left: 3px solid var(--vscode-charts-blue); }
  .busy { opacity: .6; pointer-events: none; }
</style></head>
<body>
<header>
  <div class="crumbs">${esc(v.lesson.title)} · step ${v.stepIndex + 1} of ${v.stepCount} · <i>${esc(step.kind)}</i></div>
  <div class="pips">${progress}</div>
  <div class="toolbar">
    <button data-msg="prev" ${v.stepIndex === 0 ? 'disabled' : ''}>◀</button>
    ${step.quiz ? '' : '<button class="primary" data-msg="check">Check</button>'}
    <button data-msg="hint" ${v.hintsRemaining === 0 ? 'disabled' : ''}>Hint${v.hintsRemaining ? ` (${v.hintsRemaining})` : ''}</button>
    <button data-msg="terminal">Terminal</button>
    ${v.lesson.build ? '<button data-msg="debug">Debug</button>' : ''}
    <button data-msg="reset" title="Restore the project to how it was when this step began">Reset step</button>
    ${step.solution ? '<button data-msg="solution">Solution</button>' : ''}
    <button class="${v.completed ? 'primary' : ''}" data-msg="next" ${v.completed && !isLast ? '' : 'disabled'}>Next ▶</button>
  </div>
  ${files ? `<div class="files">Files: ${files}</div>` : ''}
</header>
${doneBanner}
<main>${body}</main>
${commands ? `<section><h3>Commands</h3>${commands}</section>` : ''}
${quiz}
${hints}
${results}
<script nonce="${nonce}">
  const vscode = acquireVsCodeApi();
  document.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    if (b.dataset.msg) vscode.postMessage({ type: b.dataset.msg });
    else if (b.dataset.answer) vscode.postMessage({ type: 'answer', index: Number(b.dataset.answer) });
    else if (b.dataset.run) vscode.postMessage({ type: 'terminal', command: b.dataset.run });
    else if (b.dataset.open) vscode.postMessage({ type: 'open', path: b.dataset.open });
  });
  window.addEventListener('message', (e) => {
    if (e.data.type === 'busy') document.body.classList.toggle('busy', e.data.busy);
  });
  ${this.busy ? "document.body.classList.add('busy');" : ''}
</script>
</body></html>`;
  }

  dispose(): void {
    this.panel?.dispose();
  }
}
