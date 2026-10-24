/**
 * Vite Pre-render Script
 *
 * Runs after `vite build` to generate static HTML for every route.
 * This is critical for SEO — without it, Googlebot sees an empty <div id="root"></div>.
 *
 * How it works:
 * 1. Builds an SSR bundle from entry-server.jsx
 * 2. Loads the SSR bundle in Node.js
 * 3. For each route, calls render(url) to get the full HTML string
 * 4. Injects the rendered HTML + helmet head tags into the index.html template
 * 5. Writes individual HTML files for each route (e.g., dist/pricing/index.html)
 * 6. Writes dist/404.html (Vercel serves it with a real 404 status for unknown URLs)
 *
 * IMPORTANT: blog URLs are generated from src/data/data.js (slug field),
 * so adding a post there automatically adds its page here and in the sitemap.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';
import { allBlogPosts } from './src/data/data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Static public routes to pre-render (all lowercase).
// Old mixed-case URLs are NOT pre-rendered: they are 301-redirected in vercel.json.
const staticRoutes = [
  '/',
  '/courses',
  '/courses/tajweed',
  '/courses/reading',
  '/courses/recitation',
  '/courses/memorization',
  '/courses/arabic',
  '/courses/memorizing-juz-amma',
  '/courses/arabic-kids',
  '/courses/islamic-studies',
  '/pricing',
  '/about',
  '/blog',
  '/contact',
  '/faqs',
  '/policy',
  '/applyForJop', // blocked in robots.txt; keep it noindex in the page itself
];

// Blog detail pages come from the data file (descriptive slugs)
const blogRoutes = allBlogPosts.map((post) => `/blog/${post.slug}`);

const routes = [...staticRoutes, ...blogRoutes];

// ---- Safety checks (fail the build instead of shipping broken pages) ----
const missingSlug = allBlogPosts.filter((p) => !p.slug);
if (missingSlug.length) {
  throw new Error('Blog posts without slug: ids ' + missingSlug.map((p) => p.id).join(', '));
}
const slugs = allBlogPosts.map((p) => p.slug);
if (new Set(slugs).size !== slugs.length) {
  throw new Error('Duplicate blog slugs found');
}
// /applyForJop keeps its original casing on purpose (existing route); everything else must be lowercase.
const badCase = routes.filter((r) => r !== '/applyForJop' && r !== r.toLowerCase());
if (badCase.length) {
  throw new Error('Uppercase routes are not allowed: ' + badCase.join(', '));
}

// Patterns for head-level elements React 19 hoists into the body string
const HEAD_TAG_PATTERNS = [
  /<title[^>]*>.*?<\/title>/gi,
  /<meta\s[^>]*?\/?>/gi,
  /<link\s[^>]*?\/?>/gi,
  /<script\s+type="application\/ld\+json"[^>]*>.*?<\/script>/gi,
];

/**
 * Turn the SSR output of one route into a complete HTML document.
 */
function buildPage(template, rawHtml) {
  const extractedHeadTags = [];
  let bodyHtml = rawHtml;

  for (const pattern of HEAD_TAG_PATTERNS) {
    bodyHtml = bodyHtml.replace(pattern, (match) => {
      extractedHeadTags.push(match);
      return '';
    });
  }

  let finalHtml = template;

  // Replace the default <title> with the page-specific one
  const titleTag = extractedHeadTags.find((t) => t.startsWith('<title'));
  if (titleTag) {
    finalHtml = finalHtml.replace(/<title>.*?<\/title>/, titleTag);
  }

  // Replace the default meta description with the page-specific one
  const descTag = extractedHeadTags.find((t) => /name="description"/.test(t));
  if (descTag) {
    finalHtml = finalHtml.replace(/<meta\s+name="description"[^>]*\/?>/, descTag);
  }

  // Collect remaining head tags (skip the title and description we already placed)
  const additionalHeadTags = extractedHeadTags.filter((t) => t !== titleTag && t !== descTag);

  // Don't inject <link rel="preload"> tags that duplicate ones already in the template
  const filteredHeadTags = additionalHeadTags.filter((tag) => {
    if (/rel="preload"/.test(tag) && /href="\/images\/hero\/quran-holder\.webp"/.test(tag)) {
      return false;
    }
    return true;
  });

  if (filteredHeadTags.length > 0) {
    finalHtml = finalHtml.replace(
      '</head>',
      `    ${filteredHeadTags.join('\n    ')}\n  </head>`
    );
  }

  // Inject the body HTML into the root div
  finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  return finalHtml;
}

async function prerender() {
  console.log('\n🔨 Building SSR bundle...');

  await build({
    build: {
      ssr: true,
      outDir: 'dist-ssr',
      rollupOptions: {
        input: 'src/entry-server.jsx',
      },
    },
  });

  console.log('✅ SSR bundle built.\n');

  const ssrModulePath = pathToFileURL(path.resolve(__dirname, 'dist-ssr/entry-server.js')).href;
  const { render } = await import(ssrModulePath);

  const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');

  console.log(`📄 Pre-rendering ${routes.length} routes...\n`);

  const failures = [];

  // Guard: remember the title of the 404 page. If a real route renders with the
  // same title, it means the route did not match in entry-server.jsx and the
  // build would silently publish a 404 page at a real URL.
  const notFoundTitle = (() => {
    const { html } = render('/__not-found__');
    const m = buildPage(template, html).match(/<title>(.*?)<\/title>/);
    return m ? m[1] : null;
  })();

  for (const route of routes) {
    try {
      const { html: rawHtml } = render(route);
      const finalHtml = buildPage(template, rawHtml);

      const pageTitle = (finalHtml.match(/<title>(.*?)<\/title>/) || [])[1];
      if (notFoundTitle && pageTitle === notFoundTitle) {
        throw new Error('rendered the 404 page instead of real content (route missing in entry-server.jsx?)');
      }

      const filePath =
        route === '/'
          ? path.resolve(__dirname, 'dist/index.html')
          : path.resolve(__dirname, `dist${route}/index.html`);

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, finalHtml);
      console.log(`  ✅ ${route} → ${path.relative(path.resolve(__dirname, 'dist'), filePath)}`);
    } catch (err) {
      failures.push(route);
      console.error(`  ❌ ${route} — ${err.message}`);
      console.error(`     ${err.stack?.split('\n')[1]?.trim() || ''}`);
    }
  }

  // ---- Custom 404 page (served by Vercel with HTTP 404 for unknown URLs) ----
  // The "*" route in App.jsx renders <NotFound />. Make sure NotFound adds
  // <meta name="robots" content="noindex"> through the SEO component.
  try {
    const { html: notFoundHtml } = render('/__not-found__');
    const notFoundPage = buildPage(template, notFoundHtml);
    fs.writeFileSync(path.resolve(__dirname, 'dist/404.html'), notFoundPage);
    console.log('  ✅ 404 → 404.html');
  } catch (err) {
    failures.push('404.html');
    console.error(`  ❌ 404.html — ${err.message}`);
  }

  // Clean up SSR build
  fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true, force: true });

  if (failures.length) {
    console.error(`\n❌ Pre-render FAILED for ${failures.length} route(s): ${failures.join(', ')}\n`);
    process.exit(1); // stop the deploy instead of publishing broken pages
  }

  console.log('\n🎉 Pre-rendering complete!\n');
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});