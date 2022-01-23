export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog-frontend',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog By Kacper Dobrowolski' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
    ]
  },

  server: {
    port: 4000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss',
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css'
    // ...
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/nuxt-quill-plugin', ssr: false },
    '~/plugins/VueAwesomeSwiper',
    { src: '~/plugins/intervalToken', ssr: false },
    '~/plugins/axios',
    '~plugins/filters.js'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
  ],

  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss',
    ]
  },
  ssr: true,
  target: 'server',
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    credentials: true,
  },

  proxy: {
    '/api': {
      target: `${process.env.API_URL}/api`,
      changeOrigin: true,
      pathRewrite: { '^/api': '/' }
    },
    '/public': {
      target: `${process.env.API_URL}/public`,
      changeOrigin: true,
      pathRewrite: { '^/public': '/' }
    }
  },

  bootstrapVue: {
    components: ['BPagination'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  }
}
