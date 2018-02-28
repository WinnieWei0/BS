import VueRouter from 'vue-router'
import homeComponent from '../component/Home.vue'
import loginComponent from '../component/user/Login.vue'
import registerComponent from '../component/user/Register.vue'
import commentComponent from '../component/Comment.vue'
import messageComponent from '../component/Message.vue'

export default new VueRouter({
  routes: [
    { path: '/', component: homeComponent },
    { name: 'login', path: '/user/login', component: loginComponent },
    { name: 'register', path: '/user/register', component: registerComponent },
    { name: 'msg', path: '/message', component: messageComponent },
    { name: 'comment', path: '/comment', component: commentComponent }
  ]
})