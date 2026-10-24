/**
 * Auto-generates sitemap.xml at build time.
 * Only includes canonical, indexable URLs with accurate lastmod dates.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://www.nebrasacadmy.com';
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// All canonical, indexable routes
const routes = [
  '/',
  '/courses',
  '/courses/tajweed',
  '/courses/reading',
  '/courses/recitation',
  '/courses/memorization',
  '/courses/arabic',
  '/courses/ArabicKids',
  '/courses/Islamic',
  '/courses/MemorizingJuzAmma',
  '/pricing',
  '/about',
  '/blog',
  '/contact',
  '/faqs',
  '/policy',
  // Blog posts
  '/blog/1',
  '/blog/2',
  '/blog/3',
  '/blog/4',
  '/blog/5',
  '/blog/6',
  '/blog/7',
  '/blog/8',
  '/blog/9',
  '/blog/10',
  '/blog/11',
  '/blog/12',
];

function generateSitemap() {
  const urls = routes.map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const distPath = path.resolve(__dirname, 'dist/sitemap.xml');
  const publicPath = path.resolve(__dirname, 'public/sitemap.xml');
  
  fs.writeFileSync(distPath, sitemap);
  fs.writeFileSync(publicPath, sitemap);
  
  console.log(`✅ Sitemap generated with ${routes.length} URLs → dist/sitemap.xml`);
}

generateSitemap();

