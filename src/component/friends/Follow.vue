<template>
	<div>
		<div class="myItem" v-for="item in follow" :key="item.id">
			<div class="myMsg">
				<div class="myText">{{item.userName}}</div>
				<div class="myTime" v-if="item.status.data[0]">
					<el-button type="text" @click="updateFollow(item.follow_id)">取消关注</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				follow:[]
			}
		},
		methods:{
			getFollowList(){
				this.$nextTick(()=>{
					this.$axios.get('/follow',{
						params:{
							id:JSON.parse(sessionStorage.getItem('user')).user_id
						}
					}).then(res=>{
							console.log(res.data)
						this.follow=res.data
					})
				})
			},
			updateFollow(id){
				this.follow.map(v=>{
					if(v.follow_id===id){
						this.$axios.get('/follow/update',{
							params:{
								id
							}
						}).then(res=>{
							this.$message({type:'success',message:res.data.msg})
							this.getFollowList()
						})
					}
				})
			}
		},
		created(){
			this.getFollowList()
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