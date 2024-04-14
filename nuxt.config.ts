import { fileURLToPath } from 'node:url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/bootstrap-docs.min.css' }
      ]
    }
  },
  css: ['primeicons/primeicons.css'],
  primevue: {
    options: {
      unstyled: true,
      ripple: false
    },
    components: {
      prefix: 'P',
      include: '*'
    },
    importPT: { from: fileURLToPath(new URL('primevue/bootstrap5/passthrough', import.meta.url)) }
  }
});
