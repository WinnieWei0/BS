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
      <div id="editor" class="editor" v-if="false"></div>
			<div id="editor2" class="editor2"></div>
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
    updated() {
      var editor = new E("#editor", "#editor2");
      editor.create();
      editor.txt.html(this.detailList[0].workCode)
      editor.$textElem.attr('contenteditable', false)
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
.editor {
  border: 1px solid #ccc;
}
.editor2 {
  border: 1px solid #ccc;
  min-height: 400px;
}
</style>