<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="logo">
          <img src="/src/assets/images/logo1.png" alt="">
        </div>
      </el-col>
      <el-col :span="12">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="0"><router-link :to="{path:'/'}">首页</router-link></el-menu-item>
          <el-menu-item index="1"><router-link :to="{path:'/add'}">上传作品</router-link></el-menu-item>
          <el-menu-item index="2"><router-link :to="{path:'/admini'}">管理中心</router-link></el-menu-item>
          <el-menu-item index="3"><router-link :to="{path:'/friends'}">我的好友</router-link></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <div class="link" v-if="!showUser">
          <router-link :to="{path:'/user/login'}"><el-button type="text">登录</el-button></router-link>
          <router-link :to="{path:'/user/register'}"><el-button type="text">注册</el-button></router-link>
        </div>
        <el-dropdown v-if="showUser">
          <span class="el-dropdown-link">
            {{user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link :to="{path:'/userList'}">个人中心</router-link></el-dropdown-item>
            <el-dropdown-item><router-link :to="{path:'/modifyPwd'}">修改密码</router-link></el-dropdown-item>
            <el-dropdown-item @click.native="signOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeIndex:'0',
      user:{
        name:sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')).userName:''
      },
      showUser:sessionStorage.getItem('user')
    }
  },
  methods:{
    signOut(){
      sessionStorage.removeItem('user')
      this.$router.push('/')
      this.$router.go(0)
    }
  }
};
</script>

<style scoped lang='less'>
.link{
  height: 60px;
  line-height: 60px;
  .el-button{
    font-size: 18px;
    color: black;
  }
}
.el-menu-item{
  font-size: 16px;
}
.el-dropdown {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
</style>