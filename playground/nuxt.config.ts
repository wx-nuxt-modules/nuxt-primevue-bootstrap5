import { defineNuxtConfig } from 'nuxt/config';
import DocMacroPlugin from './vite-plugins/docMacro';

export default defineNuxtConfig({
  modules: ['../src/module'],
  telemetry: false,
  devtools: {
    enabled: false
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: `${import.meta.env.NUXT_APP_BASE_URL || '/'}css/bootstrap-docs.min.css` }]
    }
  },
  css: ['primeicons/primeicons.css', '../assets/scss/app.scss'],
  imports: {
    autoImport: true
  },
  vite: {
    plugins: [DocMacroPlugin()]
  },
  compatibilityDate: '2024-08-01'
});
