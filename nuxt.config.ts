import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/device',
    [
      '@nuxt/image',
      {
        provider: 'none',
        dir: 'public/images'
      }
    ],
    '@nuxt/devtools',
    '@vueuse/nuxt',
    [
      'nuxt-icon',
      {
        size: '24px'
      }
    ],
    '@nuxt/test-utils/module',
    'nuxt-splide'
  ],

  ssr: true,

  device: {
    refreshOnResize: true
  },

  css: [resolve('./assets/scss/app.scss')],

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
        }
      ]
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  devtools: {
    timeline: {
      enabled: true
    }
  },

  build: {
    transpile: ['tslib']
  },

  // debug: true,

  experimental: {
    asyncContext: true
  },

  devServer: {
    host: '192.168.1.15',
    port: '3000'
  },

  compatibilityDate: '2024-08-12'
})
