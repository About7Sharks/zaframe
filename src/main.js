import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('aframe');
require('aframe-htmlembed-component');
require('aframe-event-set-component');
require('aframe-particle-system-component')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
