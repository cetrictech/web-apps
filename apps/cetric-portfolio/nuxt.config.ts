import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  workspaceDir: '../../',
  compatibilityDate: '2026-11-02',
  modules: ['@nuxt/ui'],
  ui: { fonts: false, colorMode: false },
  css: ['~/assets/css/main.css'],
  devServer: { host: 'localhost', port: 4310 },
  app: { head: {
    htmlAttrs: { lang: 'en', class: 'light' },
    meta: [{ name: 'theme-color', content: '#f7f7f2' }],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  } },
});
