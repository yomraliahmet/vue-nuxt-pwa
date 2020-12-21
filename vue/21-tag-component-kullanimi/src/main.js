import Vue from 'vue'
import App from './App.vue'
import Tags from "vuejs-learning-tag-component-example"

Vue.component("vtag", Tags);

new Vue({
  el: '#app',
  render: h => h(App)
})
