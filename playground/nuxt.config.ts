import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  modules: ['../src/module'],
  telemetry: false,
  devtools: {
    enabled: false
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: '/css/bootstrap-docs.min.css' }]
    }
  },
  css: ['primeicons/primeicons.css', '../assets/scss/app.scss'],
  imports: {
    autoImport: true
  },
  compatibilityDate: '2024-08-01'
});
