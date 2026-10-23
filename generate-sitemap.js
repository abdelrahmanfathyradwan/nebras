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

// All canonical, indexable routes with their priorities and change frequencies
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/courses', priority: '0.9', changefreq: 'weekly' },
  { path: '/courses/tajweed', priority: '0.8', changefreq: 'monthly' },
  { path: '/courses/reading', priority: '0.8', changefreq: 'monthly' },
  { path: '/courses/recitation', priority: '0.8', changefreq: 'monthly' },
  { path: '/courses/memorization', priority: '0.8', changefreq: 'monthly' },
  { path: '/courses/arabic', priority: '0.8', changefreq: 'monthly' },
  { path: '/courses/ArabicKids', priority: '0.8', changefreq: 'monthly' },
  { path: '/courses/Islamic', priority: '0.8', changefreq: 'monthly' },
  { path: '/courses/MemorizingJuzAmma', priority: '0.8', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/faqs', priority: '0.6', changefreq: 'monthly' },
  { path: '/policy', priority: '0.4', changefreq: 'yearly' },
  // Blog posts
  { path: '/blog/1', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/2', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/3', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/4', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/5', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/6', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/7', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/8', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/9', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/10', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/11', priority: '0.6', changefreq: 'yearly' },
  { path: '/blog/12', priority: '0.6', changefreq: 'yearly' },
];

function generateSitemap() {
  const urls = routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
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
