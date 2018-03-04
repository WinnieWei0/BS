<template>
  <div>
    <el-aside width="300px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        <el-menu-item index="0">
            <span slot="title">管理中心</span>
        </el-menu-item>
        <router-link :to="{path:'/admini/message'}">
          <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">留言管理</span>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/admini/comment'}">
          <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              <span slot="title">评论管理</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang='less' scoped>
.main>div{
  width: 100%;
  clear: both;
  height: 500px;
}
.el-aside{
  height: 100%;
  text-align: left;
  background-color: #d3dce6;
  color: #333;
  float: left;
}
.el-main{
  width: 940px;
  background-color: #e9eef3;
  color: #333;
  float: right;
}
</style>