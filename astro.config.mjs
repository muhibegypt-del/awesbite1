import { defineConfig } from 'astro/config';

// Static output. No integrations — the site builds with Astro and nothing else.
export default defineConfig({
  site: 'https://atexturedword.com',
  output: 'static',
  build: {
    // One stylesheet rather than per-page <style> blocks: the token layer and
    // the global layer are needed on every page anyway.
    inlineStylesheets: 'never',
  },
});
