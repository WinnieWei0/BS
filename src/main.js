import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './assets/css/base.css'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from './router'
import axios from 'axios'
// 跨域
axios.defaults.withCredentials=true
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
