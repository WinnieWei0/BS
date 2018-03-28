<template>
  <div>
    <div class="item" v-for="item in dataList" :key="item.w_id">
      <div class="listTop">
        <div class="listName"><router-link :to="{path:'/workdetail',query:{id:item.w_id}}">{{item.workName}}</router-link></div>
        <div class="listDetail">{{item.workDetail}}</div>
      </div>
      <el-button class="btnDel" type="text" @click="delwork(item.w_id)">删除</el-button>
      <div class="listBottom">
        <span class="createTime">{{item.createTime}}</span>&nbsp;&nbsp;
        <span class="praise">点赞(<i>{{item.count}}</i>)</span>&nbsp;&nbsp;
        <span class="comment">评论(<i>{{item.commentCount}}</i>)</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        dataList:[]
      }
    },
    methods:{
      getDataList(){
        this.$axios.get('/userlist',{
          params:{
            id:this.$route.query.id
          }
        }).then(res=>{
          this.dataList=res.data
          this.dataList.map(v=>{
            v.createTime=v.createTime.split('.')[0].replace('T',' ')
          })
        })
      },
      delwork(id){
        this.dataList=this.dataList.filter(v=>v.w_id!=id)
        this.$axios.get('/del',{
          params:{
            id
          }
        }).then(res=>{
          if(res.data.code!==200){
            this.$message.error('删除失败')
          }
        })
      }
    },
    created(){
      this.getDataList()
    }
  }
</script>

<style scoped lang="less">
.main>div{
  width: 1100px;
  margin: 0 auto;
}
.item{
  border-bottom: 1px dashed #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
  position: relative;
  .listTop{
    padding-right: 60px;
  }
  .btnDel{
    position: absolute;
    top: 0;
    right: 15px;
  }
  .listName{
    font-size: 18px;
    height: 26px;
  }
  .listDetail{
    color: #666;
    font-size: 14px;
    text-indent: 2em;
  }
  .listBottom{
    margin-top: 5px;
    text-align: right;
    font-size: 14px;
    .createTime{}
    .praise{
      color: #ff652c;
      i{
        color: #888;
      }
    }
    .comment{
      color: #ff652c;
      i{
        color: #888;
      }
    }
  }
}
</style>