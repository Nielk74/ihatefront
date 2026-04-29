import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

function banner(kind) {
  return `/*! ihatefront v0.1.0 | MIT License | ${kind} */\n`;
}

function minifyCss(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

function minifyJs(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\n\s*/g, '\n')
    .trim();
}

await mkdir(dist, { recursive: true });

const css = await readFile(path.join(root, 'src/css/ihatefront.css'), 'utf8');
await writeFile(path.join(dist, 'ihatefront.css'), banner('css') + css);
await writeFile(path.join(dist, 'ihatefront.min.css'), banner('css') + minifyCss(css) + '\n');

const js = await readFile(path.join(root, 'src/js/ihatefront.js'), 'utf8');
await writeFile(path.join(dist, 'ihatefront.js'), banner('js') + js);
await writeFile(path.join(dist, 'ihatefront.min.js'), banner('js') + minifyJs(js) + '\n');

console.log('Built dist/ihatefront.css and dist/ihatefront.js');
