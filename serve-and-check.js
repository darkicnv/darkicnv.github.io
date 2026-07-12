import express from 'express';
import { JSDOM, VirtualConsole } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'docs')));

const server = app.listen(3001, () => {
  const html = fs.readFileSync(path.join(__dirname, 'docs', 'index.html'), 'utf-8');
  
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("error", () => {
    console.error("Virtual Console Error:", ...arguments);
  });
  virtualConsole.on("warn", () => {
    console.warn("Virtual Console Warn:", ...arguments);
  });
  virtualConsole.on("info", () => {
    console.info("Virtual Console Info:", ...arguments);
  });
  virtualConsole.on("dir", () => {
    console.dir("Virtual Console Dir:", ...arguments);
  });
  virtualConsole.on("log", (msg) => {
    console.log("Virtual Console Log:", msg);
  });

  const dom = new JSDOM(html, {
    url: 'http://localhost:3001/',
    runScripts: 'dangerously',
    resources: 'usable',
    virtualConsole
  });

  dom.window.addEventListener('error', (event) => {
    console.error('JSDOM Window Error:', event.error);
  });

  dom.window.addEventListener('unhandledrejection', (event) => {
    console.error('JSDOM Unhandled Rejection:', event.reason);
  });

  setTimeout(() => {
    console.log('Finished checking');
    console.log('HTML ROOT:', dom.window.document.getElementById('root').innerHTML);
    server.close();
    process.exit(0);
  }, 4000);
});
