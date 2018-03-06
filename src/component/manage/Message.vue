<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane label="我的留言">
				<div class="myItem get">
					<div class="myMsg">
						<div class="myText">这是我的留言</div>
						<div class="myTime">2017-02-01</div>
					</div>
				</div>
				<div class="myItem get">
					<div class="myMsg">
						<div class="myText">这是我的留言</div>
						<div class="myTime">2017-02-01</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="给我的留言">
				<div class="myItem">
					<div class="myMsg">
						<div class="myText">这是给我的留言</div>
						<div class="myTime">2017-02-01</div>
					</div>
					<div class="from">
						<div class="fromName">老吴</div>
						<el-button type="text" @click="showReply=true">回复</el-button>
					</div>
					<div class="reply" v-if="showReply">
						<el-input v-model="input" type="textarea" autosize placeholder="回复："></el-input>
						<el-button type="primary" class="commitComment" @click="commitComment">确定</el-button>
					</div>
				</div>
				<div class="myItem">
					<div class="myMsg">
						<div class="myText">这是给我的留言</div>
						<div class="myTime">2017-02-01</div>
					</div>
					<div class="from">
						<div class="fromName">老吴</div>
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
				input : ''
			}
		},
		methods:{
			commitComment(){
				this.showReply=false
			}
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