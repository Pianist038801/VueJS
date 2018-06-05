import Vue from 'vue'

import App from './app'
import router from './router' 


Vue.config.productionTip = false

let app

if (!app) {
  app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
}
