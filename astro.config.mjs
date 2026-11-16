import { defineConfig } from 'astro/config';

// Static output. No integrations — the site builds with Astro and nothing else.
export default defineConfig({
  site: 'https://atexturedword.com',
  output: 'static',
  build: {
    // The whole stylesheet is under 7KB gzipped, so it rides inside each page
    // rather than costing a render-blocking request (about 450ms of LCP on a
    // throttled phone in Lighthouse).
    inlineStylesheets: 'always',
  },
});
