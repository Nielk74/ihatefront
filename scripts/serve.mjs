import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 4173);

const types = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml']
]);

function resolvePath(url) {
  const parsed = new URL(url, `http://localhost:${port}`);
  const clean = decodeURIComponent(parsed.pathname).replace(/^\/+/, '');
  const target = clean === '' ? 'docs/index.html' : clean;
  const resolved = path.resolve(root, target);
  if (!resolved.startsWith(root)) {
    return null;
  }
  if (existsSync(resolved) && statSync(resolved).isDirectory()) {
    return path.join(resolved, 'index.html');
  }
  return resolved;
}

createServer((req, res) => {
  const filePath = resolvePath(req.url || '/');
  if (!filePath || !existsSync(filePath)) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  res.writeHead(200, { 'content-type': types.get(path.extname(filePath)) || 'text/plain; charset=utf-8' });
  createReadStream(filePath).pipe(res);
}).listen(port, () => {
  console.log(`ihatefront docs: http://localhost:${port}`);
});
