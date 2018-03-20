<template>
	<div>
		<div class="myItem" v-for="item in funs" :key="item.id">
			<div class="myMsg">
				<div class="myText">{{item.userName}}</div>
				<div class="myTime" v-if="!item.status.data[0]">
					<el-button type="text" @click="updateStatus(item.funs_id)">关注他</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				funs:[]
			}
		},
		methods:{
			getFunsList(){
				this.$axios.get('/funs').then(res=>{
					// console.log(res.data)
					this.funs=res.data
				})
			},
			updateStatus(id){
				this.$axios.get('/funs/update',{
					params:{
						id
					}
				}).then(res=>{
					console.log(res.data)
					if(res.data.code===200){
						this.$message({type:'success',message:res.data.msg})
						this.$router.go(0)
					}
				})
			}
		},
		created(){
			this.getFunsList()
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