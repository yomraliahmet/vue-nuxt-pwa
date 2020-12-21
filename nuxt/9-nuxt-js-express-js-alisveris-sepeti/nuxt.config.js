const pkg = require("./package");
const bodyParser = require("body-parser");

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sepet | Express.js Session Kullanımı',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  mode: 'universal',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/bootstrap.min.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  axios: {
    baseUrl : "http://localhost:3000/api"
  },

  serverMiddleware : [
    bodyParser.json(),
    "~/api"
  ],

}
