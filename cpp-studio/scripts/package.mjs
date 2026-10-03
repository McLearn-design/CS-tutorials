// Produces installable artifacts in release/:
//   cpp-studio-<version>.vsix      → code --install-extension cpp-studio-<version>.vsix
//   cpp-studio-cli-<version>.tgz   → npm install -g cpp-studio-cli-<version>.tgz
// Each is self-contained: the engine is bundled in and the curriculum ships alongside.
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'release');
const version = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version;
const repository = { type: 'git', url: 'https://github.com/McLearn-design/CS-tutorials.git', directory: 'cpp-studio' };
const bin = (name) => path.join(root, 'node_modules', '.bin', process.platform === 'win32' ? `${name}.cmd` : name);
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, stdio: 'inherit', shell: process.platform === 'win32' });

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

function stage(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  fs.cpSync(path.join(root, 'curriculum'), path.join(dir, 'curriculum'), { recursive: true });
  return dir;
}

const bundle = (entry, outfile, extra = {}) => build({
  entryPoints: [path.join(root, entry)], outfile, bundle: true, platform: 'node', target: 'node18',
  format: 'cjs', sourcemap: false, minify: false, logLevel: 'warning', ...extra,
});

// ---------------------------------------------------------------- VS Code extension
{
  const dir = stage(path.join(out, 'stage-vscode'));
  const src = JSON.parse(fs.readFileSync(path.join(root, 'packages/vscode/package.json'), 'utf8'));
  await bundle('packages/vscode/src/extension.ts', path.join(dir, 'dist/extension.js'), { external: ['vscode'] });
  fs.cpSync(path.join(root, 'packages/vscode/media'), path.join(dir, 'media'), { recursive: true });
  const { scripts, dependencies, devDependencies, ...manifest } = src;
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ ...manifest, version, repository }, null, 2));
  fs.copyFileSync(path.join(root, 'README.md'), path.join(dir, 'README.md'));
  fs.writeFileSync(path.join(dir, '.vscodeignore'), '');
  const vsix = path.join(out, `cpp-studio-${version}.vsix`);
  run(bin('vsce'), ['package', '--no-dependencies', '--skip-license', '--allow-missing-repository', '--out', vsix], dir);
}

// ---------------------------------------------------------------- CLI
{
  const dir = stage(path.join(out, 'stage-cli'));
  await bundle('packages/cli/src/main.ts', path.join(dir, 'cli.js'));
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({
    name: 'cpp-studio-cli', version, description: 'Learn C++ by building real software with real tools — terminal edition.',
    bin: { 'cpp-studio': 'cli.js' }, files: ['cli.js', 'curriculum'], engines: { node: '>=18' }, repository, license: 'MIT',
  }, null, 2));
  run('npm', ['pack', '--pack-destination', out], dir);
}

for (const d of ['stage-vscode', 'stage-cli']) fs.rmSync(path.join(out, d), { recursive: true, force: true });
console.log('\nRelease artifacts:');
for (const f of fs.readdirSync(out)) console.log(`  release/${f}  (${(fs.statSync(path.join(out, f)).size / 1024).toFixed(0)} KB)`);
