import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/element.js'
import config from './config/index'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

Vue.prototype.config = config
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
