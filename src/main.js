import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '../src/assets/font-awesome-4.7.0/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './assets/css/base.css'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from './router'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.$axios = axios;

router.beforeEach(function (to, from, next) {
  const nextRoute = ['message', 'friends', 'add'];
  // const auth = store.state.auth;
  //跳转至上述3个页面  
  if (nextRoute.indexOf(to.name) >= 0) {
    //未登录  
    if (!sessionStorage.getItem('user')) {
      router.push({ name: 'login' })
    }
  }
  //已登录的情况再去登录页，跳转至首页  
  if (to.name === 'login') {
    if (sessionStorage.getItem('user')) {
      router.push({ name: 'home' });
    }
  }
  next();
});  

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
