import { defineNuxtConfig } from 'nuxt/config';

const themeStorageKey = 'lix-photography-theme';
const themeInitScript = `(() => {
  const root = document.documentElement;
  let storedTheme = null;
  try {
    const value = document.cookie.split('; ').find(item => item.startsWith('lix-cookie-consent='))?.split('=').slice(1).join('=');
    const consent = value ? JSON.parse(decodeURIComponent(value)) : null;
    if (consent?.version === 1 && consent.preferences === true) {
      storedTheme = window.localStorage.getItem('${themeStorageKey}');
    }
  } catch {}
  const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light';

  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.style.colorScheme = theme;
})();`;

export default defineNuxtConfig({
  workspaceDir: '../../',
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/styles.css'],
  devServer: { host: 'localhost', port: 4210 },
  ui: { fonts: false, colorMode: false },
  compatibilityDate: '2026-03-23',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'light',
      },
      meta: [
        {
          name: 'theme-color',
          content: '#f8f5f0',
        },
      ],
      script: [
        {
          id: 'lix-theme-init',
          tagPosition: 'head',
          innerHTML: themeInitScript,
        },
      ],
    },
  },
});
