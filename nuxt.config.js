import webpack from 'webpack'
const PRODUCTION_BASE_PATH = '/dicra/'

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/dicra/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/static-mixin.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/vuetify',
      {
        /* module options */
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/dotenv',
    'nuxt-material-design-icons',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    fullTextSearchFields: ['title', 'summary', 'slug'],
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.markdown = document.text
      }
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isDev }) {
      config.plugins.push(
        new webpack.DefinePlugin({
          STATIC_PATH: JSON.stringify(isDev ? '' : PRODUCTION_BASE_PATH),
        })
      )
    },
  },
  router: {
    base: process.env.NODE_ENV === 'production' ? PRODUCTION_BASE_PATH : '/',
  },
}
