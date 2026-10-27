/**
 * Auto-generates sitemap.xml at build time.
 * Only canonical, indexable, lowercase URLs on https://www.nebrasacadmy.com.
 * <lastmod> is the real last-modified date of each page (NOT the build date).
 *
 * HOW TO MAINTAIN:
 *  - When you edit a static page, update its `lastmod` below.
 *  - For blog posts, update `dateModified` in src/data/data.js.
 *  - A page with an unknown date can omit `lastmod` (better than a fake date).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allBlogPosts } from './src/data/data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://www.nebrasacadmy.com';

// TODO (owner): set the real last-modified date of each page.
const staticPages = [
  { path: '/',                            lastmod: '2026-10-24' },
  { path: '/courses',                     lastmod: '2026-10-24' },
  { path: '/courses/tajweed',             lastmod: '2026-10-24' },
  { path: '/courses/reading',             lastmod: '2026-10-24' },
  { path: '/courses/recitation',          lastmod: '2026-10-24' },
  { path: '/courses/memorization',        lastmod: '2026-10-24' },
  { path: '/courses/arabic',              lastmod: '2026-10-24' },
  { path: '/courses/arabic-kids',         lastmod: '2026-10-24' },
  { path: '/courses/islamic-studies',     lastmod: '2026-10-24' },
  { path: '/courses/memorizing-juz-amma', lastmod: '2026-10-24' },
  { path: '/pricing',                     lastmod: '2026-10-24' },
  { path: '/about',                       lastmod: '2026-10-24' },
  { path: '/teachers',                    lastmod: '2026-10-27' },
  { path: '/trial',                       lastmod: '2026-10-27' },
  { path: '/blog',                        lastmod: '2026-10-24' },
  { path: '/contact',                     lastmod: '2026-10-24' },
  { path: '/faqs',                        lastmod: '2026-10-24' },
  { path: '/policy',                      lastmod: '2026-10-24' },
];

const blogPages = allBlogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  lastmod: post.dateModified || post.datePublished,
}));

const pages = [...staticPages, ...blogPages];

// Safety checks: fail the build on bad URLs.
const uppercase = pages.filter((p) => p.path !== p.path.toLowerCase());
if (uppercase.length) {
  throw new Error('Uppercase URLs are not allowed: ' + uppercase.map((p) => p.path).join(', '));
}
const missingSlug = allBlogPosts.filter((p) => !p.slug);
if (missingSlug.length) {
  throw new Error('Blog posts without slug: ids ' + missingSlug.map((p) => p.id).join(', '));
}
const slugs = allBlogPosts.map((p) => p.slug);
if (new Set(slugs).size !== slugs.length) {
  throw new Error('Duplicate blog slugs found');
}

function generateSitemap() {
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${SITE_URL}${p.path}</loc>${
          p.lastmod ? `\n    <lastmod>${p.lastmod}</lastmod>` : ''
        }\n  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemap);

  const distDir = path.resolve(__dirname, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  }

  console.log(`Sitemap generated with ${pages.length} URLs`);
}

generateSitemap();