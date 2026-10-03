import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { AvailableUpdate, DEFAULT_UPDATE_REPOSITORY, fetchReleases, pickUpdate } from '@cpp-studio/engine';

const LAST_CHECK_KEY = 'cppStudio.updates.lastCheck';
const SKIPPED_KEY = 'cppStudio.updates.skippedVersion';
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Self-updating without a marketplace: look at the GitHub Releases of the repository the
 * extension is built from, and offer to download and install a newer .vsix.
 */
export class Updater {
  constructor(private readonly context: vscode.ExtensionContext, private readonly output: vscode.OutputChannel) {}

  private get currentVersion(): string {
    return this.context.extension.packageJSON.version as string;
  }

  private config() {
    const c = vscode.workspace.getConfiguration('cppStudio.updates');
    return {
      enabled: c.get<boolean>('checkAutomatically', true),
      repository: c.get<string>('repository') || DEFAULT_UPDATE_REPOSITORY,
      prereleases: c.get<boolean>('includePrereleases', false),
    };
  }

  /** Called on startup: at most once a day, silently unless there's something new. */
  async checkInBackground(): Promise<void> {
    const cfg = this.config();
    if (!cfg.enabled) return;
    const last = this.context.globalState.get<number>(LAST_CHECK_KEY, 0);
    if (Date.now() - last < DAY_MS) return;
    await this.context.globalState.update(LAST_CHECK_KEY, Date.now());
    try {
      const update = await this.find();
      if (update && this.context.globalState.get<string>(SKIPPED_KEY) !== update.version) await this.offer(update, true);
    } catch (e) {
      this.output.appendLine(`Update check failed: ${(e as Error).message}`);
    }
  }

  /** The "Check for Updates" command: always reports a result. */
  async checkNow(): Promise<void> {
    let update: AvailableUpdate | undefined;
    try {
      update = await vscode.window.withProgress(
        { location: vscode.ProgressLocation.Notification, title: 'C++ Studio: checking for updates…' },
        () => this.find(),
      );
    } catch (e) {
      void vscode.window.showErrorMessage(`C++ Studio could not check for updates: ${(e as Error).message}`);
      return;
    }
    await this.context.globalState.update(LAST_CHECK_KEY, Date.now());
    if (!update) {
      void vscode.window.showInformationMessage(`C++ Studio ${this.currentVersion} is the latest version.`);
      return;
    }
    await this.offer(update, false);
  }

  private async find(): Promise<AvailableUpdate | undefined> {
    const cfg = this.config();
    // Reuse a GitHub sign-in the user already has in VS Code (raises the API rate limit); never prompt for one.
    let token: string | undefined;
    try {
      token = (await vscode.authentication.getSession('github', [], { silent: true }))?.accessToken;
    } catch { /* no GitHub auth provider */ }
    const releases = await fetchReleases(cfg.repository, token);
    return pickUpdate(releases, this.currentVersion, { assetPattern: /^cpp-studio-\d[\w.-]*\.vsix$/, includePrereleases: cfg.prereleases });
  }

  private async offer(update: AvailableUpdate, background: boolean): Promise<void> {
    const actions = update.assetUrl ? ['Update Now', 'Release Notes'] : ['Release Notes'];
    if (background) actions.push('Skip This Version');
    const pick = await vscode.window.showInformationMessage(
      `C++ Studio ${update.version} is available (you have ${this.currentVersion}). Your progress and projects are kept when you update.`,
      ...actions,
    );
    if (pick === 'Release Notes') await vscode.env.openExternal(vscode.Uri.parse(update.notesUrl));
    else if (pick === 'Skip This Version') await this.context.globalState.update(SKIPPED_KEY, update.version);
    else if (pick === 'Update Now') await this.install(update);
  }

  private async install(update: AvailableUpdate): Promise<void> {
    const dir = this.context.globalStorageUri.fsPath;
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, update.assetName ?? `cpp-studio-${update.version}.vsix`);
    try {
      await vscode.window.withProgress(
        { location: vscode.ProgressLocation.Notification, title: `Downloading C++ Studio ${update.version}…` },
        async () => {
          const res = await fetch(update.assetUrl!, { headers: { 'User-Agent': 'cpp-studio' } });
          if (!res.ok) throw new Error(`download failed (${res.status})`);
          fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
          await vscode.commands.executeCommand('workbench.extensions.installExtension', vscode.Uri.file(file));
        },
      );
    } catch (e) {
      const pick = await vscode.window.showErrorMessage(`Updating C++ Studio failed: ${(e as Error).message}`, 'Open Release Page');
      if (pick) await vscode.env.openExternal(vscode.Uri.parse(update.notesUrl));
      return;
    }
    const pick = await vscode.window.showInformationMessage(`C++ Studio ${update.version} is installed. Reload the window to start using it.`, 'Reload Window');
    if (pick) await vscode.commands.executeCommand('workbench.action.reloadWindow');
  }
}
