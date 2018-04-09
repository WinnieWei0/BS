<template>
  <div id="app">
    <div class="down" @click="changeBackground">
      <img src="../src/assets/images/down.png" alt="">
    </div>
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
div#app{
  background:#eee url('/src/assets/images/background1.jpg') no-repeat fixed center center;
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
