// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css'
import './assets/css/ie9-compatible.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(elementUI)

// 兼容ie9，promise的polyfill
require('es6-promise').polyfill()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
