import fs from 'node:fs';

const h = fs.readFileSync('dist/index.html', 'utf8');
const urls = [...h.matchAll(/https:\/\/[^"'\s<>]*nebrasacadmy\.com[^"'\s<>]*/g)].map(m => m[0]);
const unique = [...new Set(urls)];
console.log('All nebrasacadmy.com URLs in dist/index.html:');
unique.forEach(u => console.log(' ', u));

// Check for any without www
const noWww = unique.filter(u => !u.includes('www.'));
if (noWww.length > 0) {
  console.log('\n❌ URLs missing www:');
  noWww.forEach(u => console.log(' ', u));
} else {
  console.log('\n✅ All URLs use www correctly');
}
