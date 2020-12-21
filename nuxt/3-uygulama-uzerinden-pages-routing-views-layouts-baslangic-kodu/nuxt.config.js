const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Köşe Yazısı Uygulaması',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://bootswatch.com/4/sketchy/bootstrap.min.css' }
    ],
    script: [
     // {src: '' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#666',
    height: '3px',
    //failedColor: 'orange' 
  },
  //loading: false,

  // mode: "spa" olduğu zaman loadingIndicator kullanılıyor.
  /*
  loadingIndicator : {
    name: "circle",
    color: "orange"
  },
*/

  //dev : false,

  env : {
    baseUrl : "https://kose-yazilari-2325d-default-rtdb.firebaseio.com"
  },

  //generate : {},
  //rootDir : "/my-app", // node-modules klasörü dahil projenin çalıştığı klasörü belirler.
  //srcDir : "/client", // node-modules dışında projenin belli bir bölümünü bir klasörde toplamaya yarar.

  // Mevcut route yapısına eklemeler yapar.
  router : {
    extendRoutes(routes, resolve){
      routes.push({
        path : '/custom-route',
        component: resolve(__dirname, "pages/test.vue")
      });
    }
  },

  transition : {
    name : "layout",
    mode : "out-in",
  },

  /*
  ** Global CSS
  */
  css: [
   // "~/assets/style/bootstrap.min.css",
   "~/assets/style/transition.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/Components.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // proxy: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
