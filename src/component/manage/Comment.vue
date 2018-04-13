<template>
	<div>
		<div class="myItem" v-for="item in comment" :key="item.c_id">
			<div class="myMsg">
				<div class="myText">{{item.cmDetail}}</div>
				<div class="userName"><router-link :to="{path:'/userList',query:{id:item.user_id}}">{{item.userName}}</router-link></div>
			</div>
			<div class="from">
				<div class="fromName"><router-link :to="{path:'/workdetail',query:{id:item.w_id}}">{{item.workName}}</router-link></div>
				<!-- <div class="myText">{{item.cmDetail}}</div> -->
				<el-button type="text" @click="btnReply(item.c_id)">回复</el-button>
			</div>
			<div class="reply" v-if="item.show">
				<el-input v-model="item.content" type="textarea" :autosize="{minRows:3}" placeholder="回复:"></el-input>
				<el-button type="primary" class="commitComment" @click="commitComment(item.c_id)">确定</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				comment:[]
			}
		},
		methods:{
			btnReply(id){
				this.comment.map(v=>{
					if(v.c_id===id){
						v.show=true
					}
				})
			},
			commitComment(id){
					this.comment.map(v=>{
					if(v.c_id===id){
						if(!v.content){
							return
						}
						this.$axios.get('/comment/reply',{
							params:{
								login_id:JSON.parse(sessionStorage.getItem('user')).user_id,
								user_id:v.user_id,
								cmDetail:v.content,
								w_id:v.w_id,
                isShow:0
							}
						}).then(res=>{
							console.log(res.data)
							if(res.data.code===200){
								v.show=false
								this.getCommentList()
							}else{
								this.$message.error(res.data)
							}
						})
					}
				})
			},
			getCommentList(){
				this.$axios.get('/comment').then(res=>{
					console.log(res.data)
					this.comment=res.data
					this.comment.map(v=>{
						v.content=''
						this.$set(v,'show',false)
						if(!v.isShow.data[0]){
							v.cmDetail='回复('+v.userName+'): '+v.cmDetail
						}
					})
				})
			}
		},
		created(){
			this.getCommentList()
		}
	}
</script>

<style scoped lang='less'>
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
		.userName{
			float: right;
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