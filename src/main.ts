import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './style.scss'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
