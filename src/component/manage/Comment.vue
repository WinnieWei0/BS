<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane label="我的评论">
				<div class="myItem get" v-for="item in comment.toHe" :key="item.id">
					<div class="myMsg">
						<div class="myText">{{item.content}}</div>
						<div class="myTime">{{item.create}}</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="给我的评论">
				<div class="myItem" v-for="item in comment.toMe" :key="item.id">
					<div class="myMsg">
						<div class="myText">{{item.content}}</div>
						<div class="myTime">{{item.create}}</div>
					</div>
					<div class="from">
						<div class="fromName">{{item.from}}</div>
						<el-button type="text" @click="showReply=true">回复</el-button>
					</div>
					<div class="reply" v-if="showReply">
						<el-input v-model="input" type="textarea" autosize placeholder="回复："></el-input>
						<el-button type="primary" class="commitComment" @click="commitComment">确定</el-button>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				showReply:false,
				input : '',
				comment:{
					toMe:[],
					toHe:[]
				}
			}
		},
		methods:{
			commitComment(){
				this.showReply=false
			},
			getCommentList(){
				this.$axios.get('http://localhost:3000/comment').then(res=>{
					this.comment=res.data
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