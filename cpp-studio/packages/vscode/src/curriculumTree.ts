import * as vscode from 'vscode';
import { LessonStatus, Studio, Track } from '@cpp-studio/engine';

type Node =
  | { kind: 'track'; track: Track }
  | { kind: 'lesson'; id: string }
  | { kind: 'planned'; text: string };

const ICONS: Record<LessonStatus, vscode.ThemeIcon> = {
  completed: new vscode.ThemeIcon('pass-filled', new vscode.ThemeColor('testing.iconPassed')),
  'in-progress': new vscode.ThemeIcon('circle-large-filled', new vscode.ThemeColor('charts.yellow')),
  available: new vscode.ThemeIcon('circle-large-outline'),
  locked: new vscode.ThemeIcon('lock'),
};

/** The curriculum as a graph of tracks → lessons, with the learner's status on each. */
export class CurriculumTree implements vscode.TreeDataProvider<Node> {
  private readonly changed = new vscode.EventEmitter<void>();
  readonly onDidChangeTreeData = this.changed.event;

  constructor(private studio: () => Studio | undefined) {}

  refresh(): void {
    this.changed.fire();
  }

  getChildren(node?: Node): Node[] {
    const studio = this.studio();
    if (!studio) return [];
    if (!node) return studio.curriculum.tracks.map((track) => ({ kind: 'track', track }));
    if (node.kind === 'track') {
      if (node.track.status === 'planned') {
        return [node.track.description, ...(node.track.projects ?? []).map((p) => `Project: ${p}`)]
          .map((text) => ({ kind: 'planned', text }));
      }
      return node.track.lessons.map((id) => ({ kind: 'lesson', id }));
    }
    return [];
  }

  getTreeItem(node: Node): vscode.TreeItem {
    const studio = this.studio()!;
    if (node.kind === 'track') {
      const planned = node.track.status === 'planned';
      const item = new vscode.TreeItem(node.track.title, planned ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.Expanded);
      item.description = planned ? 'planned' : undefined;
      item.tooltip = node.track.description;
      item.iconPath = new vscode.ThemeIcon(planned ? 'milestone' : 'book');
      return item;
    }
    if (node.kind === 'planned') {
      const item = new vscode.TreeItem(node.text);
      item.tooltip = node.text;
      return item;
    }
    const s = studio.summary(node.id);
    const item = new vscode.TreeItem(s.lesson.title);
    item.iconPath = ICONS[s.status];
    item.description = s.status === 'in-progress' ? `${s.completedSteps}/${s.lesson.steps.length}` : s.lesson.mode;
    const md = new vscode.MarkdownString(`**${s.lesson.title}**\n\n${s.lesson.summary}\n\n*Concepts:* ${s.lesson.concepts.join(', ')}`);
    if (s.status === 'locked') md.appendMarkdown(`\n\n🔒 Needs: ${s.missingPrerequisites.map((p) => studio.lesson(p).title).join(', ')}`);
    item.tooltip = md;
    item.command = { command: 'cppStudio.openLesson', title: 'Open Lesson', arguments: [node.id] };
    return item;
  }
}
