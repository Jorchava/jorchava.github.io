// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxtjs/sitemap', '@nuxt/icon', '@nuxt/image'],

  css: ['~/styles/main.scss'],

  compatibilityDate: '2025-07-15',

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  alias: {
    '@styles': '/styles',
    '@components': '/components',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@styles/abstracts/_mixins.scss" as *;
            @use "@styles/abstracts/_variables.scss" as *;
            @use "@styles/abstracts/_breakpoints.scss" as *;
          `,
        },
      },
    },
  },
  site: {
    url: 'https://jorchava.github.io',
  },
})