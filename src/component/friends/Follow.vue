<template>
	<div>
		<div class="myItem">
			<div class="myMsg">
				<div class="myText">这是我的关注</div>
				<div class="myTime">
					<el-button type="text">取消关注</el-button>
				</div>
			</div>
		</div>
		<div class="myItem">
			<div class="myMsg">
				<div class="myText">这是我的关注</div>
				<div class="myTime">
					<el-button type="text">取消关注</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        
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