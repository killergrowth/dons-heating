const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, 'dist');

let missing = [];

function scan(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const full = path.join(d, f.name);
    if (f.isDirectory()) {
      scan(full);
    } else if (f.name.endsWith('.html')) {
      const html = fs.readFileSync(full, 'utf8');
      const matches = html.match(/src="([^"]+)"|src='([^']+)'/g) || [];
      for (const m of matches) {
        const src = m.replace(/^src=["']/, '').replace(/["']$/, '');
        if (src.startsWith('/') && !src.startsWith('//')) {
          const localPath = path.join(dist, src);
          if (!fs.existsSync(localPath)) {
            missing.push({ page: full.replace(dist, ''), src });
          }
        }
      }
    }
  }
}

scan(dist);
console.log('Missing images:', missing.length);
if (missing.length > 0) {
  missing.slice(0, 30).forEach(x => console.log(' ', x.page, '->', x.src));
} else {
  console.log('All good — no missing image references found.');
}
