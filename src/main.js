import Vue from 'vue'
import './utils/vant.config'
import router from './router'
import store from './store'
import App from './App.vue'
const Echarts = require('echarts')

Vue.config.productionTip = false
Vue.prototype.echarts = Echarts

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
