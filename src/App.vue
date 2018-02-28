<template>
  <div id="app">
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container class="main">
        <router-view></router-view>
      </el-container>
      <el-footer>
        <app-footer></app-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>      
import headerComponent from "./component/common/Header";
import footerComponent from "./component/common/Footer";
export default {
  components: {
    appHeader: headerComponent,
    appFooter: footerComponent
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #cbd0d8;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-footer{
  height: 100px !important;
  line-height: 100px;
}
.main{
  width: 1300px;
  margin: 10px auto;
}
</style>
