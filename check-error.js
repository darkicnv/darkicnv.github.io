import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, 'docs', 'index.html'), 'utf-8');

const dom = new JSDOM(html, {
  url: 'http://localhost/',
  runScripts: 'dangerously',
  resources: 'usable'
});

dom.window.addEventListener('error', (event) => {
  console.error('JSDOM Error:', event.error);
});

dom.window.addEventListener('unhandledrejection', (event) => {
  console.error('JSDOM Unhandled Rejection:', event.reason);
});

setTimeout(() => {
  console.log('Finished checking');
  process.exit(0);
}, 3000);
