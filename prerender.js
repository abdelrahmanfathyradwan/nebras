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
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All public routes to pre-render
const routes = [
  '/',
  '/courses',
  '/courses/tajweed',
  '/courses/reading',
  '/courses/recitation',
  '/courses/memorization',
  '/courses/arabic',
  '/courses/MemorizingJuzAmma',
  '/courses/ArabicKids',
  '/courses/Islamic',
  '/pricing',
  '/about',
  '/blog',
  '/contact',
  '/faqs',
  '/policy',
  '/applyForJop',
  // Blog detail pages (IDs 1-12)
  '/blog/1', '/blog/2', '/blog/3', '/blog/4', '/blog/5', '/blog/6',
  '/blog/7', '/blog/8', '/blog/9', '/blog/10', '/blog/11', '/blog/12',
];

async function prerender() {
  console.log('\n🔨 Building SSR bundle...');
  
  // Build the SSR version
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

  // Load the SSR module
  const ssrModulePath = pathToFileURL(path.resolve(__dirname, 'dist-ssr/entry-server.js')).href;
  const { render } = await import(ssrModulePath);

  // Read the client build's index.html as template
  const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');

  console.log('📄 Pre-rendering routes...\n');

  /**
   * React 19 + react-helmet-async v3:
   * HelmetProvider is a no-op Fragment in React 19, so helmetContext.helmet
   * is always undefined. Instead, React 19 renders <title>, <meta>, <link>,
   * and <script> tags inline in the renderToString() output.
   *
   * Strategy: parse them out of the HTML string, move them into <head>,
   * and leave only the body markup inside <div id="root">.
   */

  // Patterns for head-level elements React 19 hoists into the body string
  const HEAD_TAG_PATTERNS = [
    /<title[^>]*>.*?<\/title>/gi,
    /<meta\s[^>]*?\/?>/gi,
    /<link\s[^>]*?\/?>/gi,
    /<script\s+type="application\/ld\+json"[^>]*>.*?<\/script>/gi,
  ];

  for (const route of routes) {
    try {
      const { html: rawHtml } = render(route);

      // --- Extract head tags from rendered HTML ---
      const extractedHeadTags = [];
      let bodyHtml = rawHtml;

      for (const pattern of HEAD_TAG_PATTERNS) {
        bodyHtml = bodyHtml.replace(pattern, (match) => {
          extractedHeadTags.push(match);
          return '';
        });
      }

      // --- Build the final HTML from the template ---
      let finalHtml = template;

      // Replace the default <title> with the page-specific one
      const titleTag = extractedHeadTags.find(t => t.startsWith('<title'));
      if (titleTag) {
        finalHtml = finalHtml.replace(/<title>.*?<\/title>/, titleTag);
      }

      // Replace the default meta description with the page-specific one
      const descTag = extractedHeadTags.find(t => /name="description"/.test(t));
      if (descTag) {
        finalHtml = finalHtml.replace(
          /<meta\s+name="description"[^>]*\/?>/,
          descTag
        );
      }

      // Collect remaining head tags (skip the title and description we already placed)
      const additionalHeadTags = extractedHeadTags.filter(
        t => t !== titleTag && t !== descTag
      );

      // Don't inject <link rel="preload"> tags that duplicate ones already in the template
      const filteredHeadTags = additionalHeadTags.filter(tag => {
        // Skip preload links for resources already preloaded in the template
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
      finalHtml = finalHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${bodyHtml}</div>`
      );

      // --- Write the file ---
      const filePath = route === '/'
        ? path.resolve(__dirname, 'dist/index.html')
        : path.resolve(__dirname, `dist${route}/index.html`);

      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, finalHtml);
      console.log(`  ✅ ${route} → ${path.relative(path.resolve(__dirname, 'dist'), filePath)}`);
    } catch (err) {
      console.error(`  ❌ ${route} — ${err.message}`);
      console.error(`     ${err.stack?.split('\n')[1]?.trim() || ''}`);
    }
  }

  // Clean up SSR build
  fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true, force: true });
  
  console.log('\n🎉 Pre-rendering complete!\n');
}

prerender().catch(console.error);
