<template>
  <div>
    <div class="workDetail" v-for="item in detailList" :key="item.w_id">
      <div class="workName">
        {{item.workName}}
      </div>
      <div class="praise">
        <i class="fa fa-thumbs-o-up"></i>
        <i class="fa fa-thumbs-up set"></i>
        <i class="fa fa-trash-o"></i>
      </div>
      <div class="workDesc">
        {{item.workDetail}}
      </div>
      <div class="workCode">
        <div id="editor1" v-if="false"></div>
        <div id="editor">s</div>
      </div>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
  export default {
    data(){
      return {
        detailList:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/detail',{
          params:{
            id:this.$route.query.id
          }
        }).then(res=>{
          this.detailList=res.data
        })
      }
    },
    created(){
      this.getData()
    },
    mounted(){
      // var E = window.wangEditor
      var editor = new E('#editor1','#editor')
      editor.create()
      editor.txt.html('<p>用 JS 设置的内容</p>')
      // editor.$textElem.attr('contenteditable', false)
      // editor.txt.html(this.detailList[0].workCode)
    }
  }
</script>

<style scoped lang='less'>
.main>div{
  width: 100%;
}
.workDetail{
  background-color: #eee;
  padding: 0 10px 10px 10px;
  position: relative;
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
.praise{
  position: absolute;
  right: 30px;
  top: 30px;
  i{
    font-size: 30px;
    margin-right: 10px;
  }
  .set{
    color: orangered;
  }
}
</style>