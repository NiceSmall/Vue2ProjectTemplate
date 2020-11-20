import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ELEMENT from 'element-ui'
const Echarts = require('echarts')
Vue.config.productionTip = false
Vue.use(ELEMENT)
Vue.prototype.echarts = Echarts

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
