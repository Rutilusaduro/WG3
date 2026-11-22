import { writeFileSync, copyFileSync, existsSync } from 'node:fs';

if (!existsSync('docs/index.html')) {
  console.error('docs/index.html missing after vite build');
  process.exit(1);
}
copyFileSync('docs/index.html', 'docs/404.html');
writeFileSync('docs/.nojekyll', '');
console.log('Stamped docs/404.html and docs/.nojekyll');
