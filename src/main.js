import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './assets/css/base.css'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
