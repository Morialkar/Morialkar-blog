import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  // TODO: replace with the final production domain before launch.
  site: 'https://blog.morialkar.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    expressiveCode({
      themes: ['github-light', 'dracula'],
      frames: {
        showCopyToClipboardButton: true,
      },
      styleOverrides: {
        borderRadius: '1rem',
        frames: {
          shadowColor: 'rgba(42, 10, 46, 0.16)',
        },
      },
    }),
    mdx(),
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
