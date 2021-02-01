import Vue from 'vue'
import App from './App.vue'
import docs from './docs.vue'

import {store} from './store.js'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
