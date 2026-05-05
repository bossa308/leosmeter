import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://leosmeter.pages.dev',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    icon(),
  ],
});
