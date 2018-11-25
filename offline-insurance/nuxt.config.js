const meta = require('./assets/meta')
const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

if (!process.env.TOKEN) {
  throw Error('Please set TOKEN for auth on development')
}

module.exports = {
  env: {
    accessToken: process.env.TOKEN
  },
  head: {
    title: 'offline-insurance',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  css: ['~/assets/style/app.styl'],
  loading: { color: '#24802e' },
  meta,
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],
  plugins: ['~/plugins/vuetify.js', '~/plugins/axios'],
  workbox: {
    // Workbox options, for PWA mode
    dev: true,
    importScripts: ['sw-sync.js']
  },
  build: {
    transpile: [/^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
