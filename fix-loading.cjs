const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/components/LoadingPage.tsx');
let content = fs.readFileSync(p, 'utf8');

const oldEffect = `  useEffect(() => {
    if (progress >= 100 && !isCompleted) {
      setIsCompleted(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [progress, isCompleted, onComplete]);`;

const newEffect = `  useEffect(() => {
    if (progress >= 100) {
      setIsCompleted(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);`;

content = content.replace(oldEffect, newEffect);
fs.writeFileSync(p, content, 'utf8');
console.log('Fixed LoadingPage.tsx');
