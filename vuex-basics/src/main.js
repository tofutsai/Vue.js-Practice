import Vue from 'vue'
import App from './App.vue'

import { store } from './store'; //es6 syntax 要加 {}

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
