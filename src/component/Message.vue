<template>
  <div>
    <el-aside width="350px">aside</el-aside>
    <el-main>main</el-main>
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