const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel : "stylesheet", href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fbdd08' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  env : {
      FIREBASE_API_KEY : "AIzaSyAfcXlT2181jVeVGKoL6BIBKPWZKo9MMzY",
  }
}
