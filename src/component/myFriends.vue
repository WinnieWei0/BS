<template>
  <div>
    <el-aside width="300px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        <el-menu-item index="0">
            <span slot="title">我的好友</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="myItem" v-for="item in funs" :key="item.id">
        <div class="myMsg">
          <div class="myText">{{item.userName}}</div>
          <div class="myTime">
            <el-button v-if="!item.status.data[0]" type="text" @click="updateStatus(item.funs_id)">关注他</el-button>
            <el-button v-if="item.status.data[0]" type="text" @click="updateStatus(item.funs_id)">取消关注</el-button>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
  export default {
    data(){
			return {
        funs:[],
        flag:true
			}
		},
		methods:{
			getFunsList(){
				this.$axios.get('/funs',{
					params:{
						id:JSON.parse(sessionStorage.getItem('user')).user_id
					}
				}).then(res=>{
          this.funs=res.data
				})
			},
			updateStatus(id){
        this.funs.map(v=>{
          if(v.funs_id===id){
            this.$axios.get('/funs/update',{
              params:{
                id,
                status:v.status.data[0]?0:1
              }
            }).then(res=>{
              if(res.data.code===200){
                this.$message({type:'success',message:'修改成功'})
                this.getFunsList()
              }
            })
          }
        })
				
			}
		},
		created(){
			this.getFunsList()
		}
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
  background-color: #fff;
  color: #333;
  float: left;
}
.el-menu{
  height: 100%;
}
.el-main{
  width: 940px;
  background-color: white;
  color: #333;
  float: left;
  margin-left: 10px;
  min-height: 650px;
  padding: 20px;
}
.myItem{
	border: 1px solid #cccccc;
	padding: 10px 10px 0;
	margin-bottom: 10px;
	.myMsg{
		clear: both;
		overflow: hidden;
		.myText{
			font-size: 17px;
			float: left;
		}
		.myTime{
			float: right;
		}
	}
	.from{
		clear: both;
		overflow: hidden;
		.fromName{
			font-size: 14px;
			color: #888;
			float: left;
			padding: 13px 0;
		}
		.el-button{
			float: right;
		}
	}
}
.get{
  padding-bottom: 10px;
}
</style>