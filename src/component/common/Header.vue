<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="logo">
          <img src="/src/assets/images/logo.png" alt="">
        </div>
      </el-col>
      <el-col :span="12">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="0"><router-link :to="{path:'/'}">首页</router-link></el-menu-item>
          <el-menu-item index="1"><router-link :to="{path:'/message'}">我的粉丝</router-link></el-menu-item>
          <el-menu-item index="2"><router-link :to="{path:'/comment'}">我的关注</router-link></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <div class="link">
          <el-button type="text">登录</el-button>
          <el-button type="text">注册</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
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
</style>