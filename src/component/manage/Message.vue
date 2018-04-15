<template>
	<div>
		<div class="myItem" v-for="item in message" :key="item.m_id">
			<div class="myMsg">
				<div class="myText">{{item.mDetail}}</div>
				<div class="myTime"><router-link :to="{path:'/userList',query:{id:item.user_id}}">{{item.userName}}</router-link></div>
			</div>
			<div class="from">
				<el-button type="text" @click.native="btnReply(item.m_id)">回复</el-button>
			</div>
			<div class="reply" v-if="item.show">
				<el-input v-model="item.content" type="textarea" :autosize="{minRows:3}" placeholder="回复："></el-input>
				<el-button type="primary" class="commitComment" @click="commitComment(item.m_id)">确定</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      message: []
			// show:false
    };
  },
  methods: {
		btnReply(id){
			this.message.map(v=>{
				if(v.m_id===id){
					v.show=true
				}
			})
		},
    commitComment(id) {
      this.message.map(v=>{
				if(v.m_id===id){
					if(!v.content){
						return
					}
					this.$axios.get('/message/reply',{
						params:{
							login_id:JSON.parse(sessionStorage.getItem('user')).user_id,
							user_id:v.user_id,
							mDetail:v.content
						}
					}).then(res=>{
						if(res.data.code===200){
							v.show=false
							this.getMessageList()
						}else{
							this.$message.error(res.data)
						}
					})
				}
			})
    },
    getMessageList() {
      this.$axios.get("/message",{
				params:{
					id:JSON.parse(sessionStorage.getItem('user')).user_id
					// id:{
					// 	login:JSON.parse(sessionStorage.getItem('user')).user_id,
					// 	user:this.$route.query.id
					// }
				}
			}).then(res => {
        this.message = res.data;
				this.message.map(v=>{
					v.content=''
					this.$set(v,'show',false)
					if(!v.isShow.data[0]){
						v.mDetail='回复('+v.userName+'): '+v.mDetail
					}
				})
      });
    }
  },
  created() {
    this.getMessageList();
  }
};
</script>

<style scoped lang='less'>
.myItem{
	border: 1px solid #cccccc;
	padding: 10px;
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
.reply{
	padding-bottom: 10px;
	clear: both;
	overflow: hidden;
}
.commitComment{
	float: right;
	margin-top: 10px;
}
</style>