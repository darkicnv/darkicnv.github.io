window.addEventListener('error', (e) => {
  document.body.innerHTML += `<div style="color:red; z-index:9999; position:absolute; top:0;">Error: ${e.message}</div>`;
});
window.addEventListener('unhandledrejection', (e) => {
  document.body.innerHTML += `<div style="color:red; z-index:9999; position:absolute; top:20px;">Unhandled Rejection: ${e.reason}</div>`;
});
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
