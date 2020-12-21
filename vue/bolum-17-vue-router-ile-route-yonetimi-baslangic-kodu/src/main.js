import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes"

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode : 'history', // Tanımlanmazsa default değeri "hash" dir.

  // Div id sine scroll yapma
  scrollBehavior (to, from, savedPosition) {

    if(to.hash){
      return {
        selector : to.hash,
        behavior: 'smooth', // Animasyonlu scroll yapar.
      }
    }

    //return { x : 0, y : 800} //  Belirlenen koordinatlara scroll yapar.
  }
});

// Route a giriş çıkışı kontrol etme.

router.beforeEach((to, from, next) => {
  console.log("Global olarak kontrol..");
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
