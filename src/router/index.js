import VueRouter from 'vue-router'
import homeComponent from '../component/Home.vue'
import loginComponent from '../component/user/Login.vue'
import registerComponent from '../component/user/Register.vue'
import friendsComponent from '../component/myFriends.vue'
import adminiComponent from '../component/Administration.vue'
import addComponent from '../component/addWorks.vue'
import commentComponent from '../component/manage/Comment.vue'
import messageComponent from '../component/manage/Message.vue'
import funsComponent from '../component/friends/Funs.vue'
import followComponent from '../component/friends/Follow.vue'


export default new VueRouter({
  routes: [
    { path: '/', component: homeComponent },
    { name: 'login', path: '/user/login', component: loginComponent },
    { name: 'register', path: '/user/register', component: registerComponent },
    { name: 'add', path: '/add', component: addComponent },
    // 管理中心
    {path:'/admini',redirect:'/admini/message'},
    { name: 'admini', path: '/admini', component: adminiComponent,children:[
      {name:'comment',path:'comment',component:commentComponent},
      {name:'message',path:'message',component:messageComponent}
    ] },
    // 我的好友
    {path:'/friends',redirect:'/friends/funs'},
    { name: 'friends', path: '/friends', component: friendsComponent,children:[
      {name:'funs',path:'funs',component:funsComponent},
      {name:'follow',path:'follow',component:followComponent}
    ] },
  ]
})