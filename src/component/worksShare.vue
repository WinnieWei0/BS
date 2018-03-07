<template>
  <div>
    <div class="workDetail">
      <div class="workName">
        好玩的
      </div>
      <div class="workDesc">
        好玩的游戏
      </div>
      <div class="workCode">
        这需要一串代码
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang='less'>
.main>div{
  width: 100%;
}
.workDetail{
  background-color: #eee;
  padding: 0 10px 10px 10px;
  .workName{
    font-size: 20px;
    font-weight: bold;
    height: 100px;
    line-height: 100px;
  }
  .workDesc{
    text-indent: 2em;
    padding-bottom: 10px;
  }
  .workCode{
    background-color: white;
    padding-bottom: 10px
  }
}
</style>