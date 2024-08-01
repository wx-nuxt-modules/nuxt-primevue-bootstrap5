import { fileURLToPath } from 'node:url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/bootstrap-docs.min.css' }
      ]
    }
  },
  css: ['primeicons/primeicons.css'],
  compatibilityDate: '2024-08-01'
});
