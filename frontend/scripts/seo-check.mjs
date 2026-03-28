#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const APP_DIR = path.join(SRC_DIR, 'app');
const PUBLIC_DIR = path.join(ROOT, 'public');

const failures = [];
const warnings = [];

function walk(dir, predicate = () => true) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath, predicate));
    } else if (predicate(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function hasMetadata(content) {
  return (
    content.includes('export const metadata') ||
    content.includes('export async function generateMetadata') ||
    content.includes('export function generateMetadata')
  );
}

function extractHrefLiterals(content) {
  const hrefs = [];
  const regex = /href\s*=\s*["'`]([^"'`]+)["'`]/g;
  let match = regex.exec(content);

  while (match) {
    hrefs.push(match[1]);
    match = regex.exec(content);
  }

  return hrefs;
}

function checkMetadata() {
  const layoutPath = path.join(APP_DIR, '[locale]', 'layout.tsx');
  const pagePath = path.join(APP_DIR, '[locale]', 'page.tsx');

  if (!fs.existsSync(layoutPath) || !hasMetadata(read(layoutPath))) {
    failures.push('Missing metadata in src/app/[locale]/layout.tsx');
  }

  if (!fs.existsSync(pagePath) || !hasMetadata(read(pagePath))) {
    failures.push('Missing page-level metadata in src/app/[locale]/page.tsx');
  }
}

function checkRobotsAndSitemap() {
  if (!fs.existsSync(path.join(APP_DIR, 'robots.ts'))) {
    failures.push('Missing src/app/robots.ts');
  }
  if (!fs.existsSync(path.join(APP_DIR, 'sitemap.ts'))) {
    failures.push('Missing src/app/sitemap.ts');
  }
}

function checkHeadings() {
  const tsxFiles = walk(SRC_DIR, (f) => f.endsWith('.tsx'));
  let h1Count = 0;

  for (const file of tsxFiles) {
    const content = read(file);
    const literalH1 = (content.match(/<h1[\s>]/g) || []).length;
    const muiH1 = (content.match(/component\s*=\s*["']h1["']/g) || []).length;
    h1Count += literalH1 + muiH1;
  }

  if (h1Count === 0) {
    failures.push('No H1 heading found in TSX files.');
  } else if (h1Count > 1) {
    warnings.push(`Multiple H1 headings found (${h1Count}).`);
  }
}

function checkImageAlt() {
  const tsxFiles = walk(SRC_DIR, (f) => f.endsWith('.tsx'));

  for (const file of tsxFiles) {
    const content = read(file);
    const jsxImgTags = content.match(/<img[\s\S]*?>/g) || [];
    const muiImgTags = content.match(/<[^>]*component\s*=\s*["']img["'][\s\S]*?>/g) || [];
    const allTags = [...jsxImgTags, ...muiImgTags];

    allTags.forEach((tag) => {
      if (!/alt\s*=/.test(tag)) {
        failures.push(`Missing alt attribute in ${rel(file)}`);
      }
    });
  }
}

function checkInternalLinks() {
  const tsxFiles = walk(SRC_DIR, (f) => f.endsWith('.tsx'));

  for (const file of tsxFiles) {
    const content = read(file);
    const hrefs = extractHrefLiterals(content);

    hrefs.forEach((href) => {
      if (!href.startsWith('/')) {
        return;
      }

      if (href.startsWith('//')) {
        return;
      }

      if (href.includes('?')) {
        failures.push(`Query parameter in internal URL: ${href} (${rel(file)})`);
      }

      if (href.includes('#')) {
        return;
      }

      const maybePublicFile = path.join(PUBLIC_DIR, href.replace(/^\//, ''));
      const hasExtension = /\.[a-zA-Z0-9]+$/.test(href);
      if (hasExtension && !fs.existsSync(maybePublicFile)) {
        failures.push(`Broken static link: ${href} (${rel(file)})`);
      }
    });
  }
}

function run() {
  checkMetadata();
  checkRobotsAndSitemap();
  checkHeadings();
  checkImageAlt();
  checkInternalLinks();

  console.log('\nSEO Check Report');
  console.log('----------------');

  if (warnings.length) {
    console.log('\nWarnings:');
    warnings.forEach((warning) => console.log(`- ${warning}`));
  }

  if (failures.length) {
    console.log('\nFailures:');
    failures.forEach((failure) => console.log(`- ${failure}`));
    process.exit(1);
  }

  console.log('\nNo failures found.');
}

run();
