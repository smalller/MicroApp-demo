import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import microApp from '@micro-zoe/micro-app'

Vue.config.productionTip = false

microApp.start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
