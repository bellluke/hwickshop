import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  site: 'https://hwick.shop',
  integrations: [react(), sitemap()],
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
