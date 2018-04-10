<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>   
export default{
  methods:{
    changeBackground() {
      
    }
  }
}   
</script>

<style lang="less" scope>
html,body{
  height: 100%;
  background-color: #eee;
}
.down{
  position: fixed;
  top: 0;
  right: 100px;
  >img{
    width:50px;
  }
}
</style>
