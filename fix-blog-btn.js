const fs = require('fs');
let bj = fs.readFileSync('./build.js', 'utf8');
const before = (bj.match(/See All Posts/g) || []).length;
bj = bj.split('See All Posts <i class="fa-solid fa-arrow-right"></i>').join('Coming Soon <i class="fa-solid fa-clock"></i>');
const after = (bj.match(/See All Posts/g) || []).length;
const comingSoon = (bj.match(/Coming Soon/g) || []).length;
fs.writeFileSync('./build.js', bj, 'utf8');
console.log('Replaced', before - after, 'instances. Coming Soon count:', comingSoon, '| Remaining See All Posts:', after);
