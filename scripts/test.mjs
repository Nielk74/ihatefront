import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const required = [
  'dist/ihatefront.css',
  'dist/ihatefront.min.css',
  'dist/ihatefront.js',
  'dist/ihatefront.min.js',
  'docs/assets/ihatefront.css',
  'docs/assets/ihatefront.js',
  'docs/index.html',
  'skills/ihatefront/SKILL.md'
];

for (const file of required) {
  await access(path.join(root, file));
}

const docs = await readFile(path.join(root, 'docs/index.html'), 'utf8');
const css = await readFile(path.join(root, 'dist/ihatefront.css'), 'utf8');
const gitignore = await readFile(path.join(root, '.gitignore'), 'utf8');

if (!docs.includes('assets/ihatefront.css') || !docs.includes('assets/ihatefront.js')) {
  throw new Error('docs/index.html must reference GitHub Pages assets.');
}

for (const selector of ['ih-btn', 'ih-card', 'ih-modal', 'ih-tabs', 'ih-autocomplete', 'ih-status-table']) {
  if (!css.includes(selector)) {
    throw new Error(`Missing component selector: ${selector}`);
  }
}

if (!gitignore.split(/\r?\n/).includes('/index.html')) {
  throw new Error('Root example index.html must stay ignored.');
}

console.log('Repository checks passed.');
