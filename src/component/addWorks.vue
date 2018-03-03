<template>
	<div>
		<div class="addWorkTitle">添加作品</div>
		<div class="workArea">
			<div class="addTitle">
				<el-input v-model="addTitle" placeholder="请输入标题"></el-input>
				<el-button type="warning" round><i class="el-icon-check"></i>&nbsp;&nbsp;发布作品</el-button>
			</div>
			<div class="addDetail">
				<el-input v-model="addDetail" placeholder="请输入描述信息"></el-input>
			</div>
			<div id="editor" class="editor"></div>
			<div id="editor2" class="editor2"></div>
		</div>
	</div>
</template>

<script>
import E from 'wangeditor'
export default {
  data(){ 
		return {
			addTitle:'',
			addDetail: ''
		} 
	},
	mounted(){
		var editor = new E('#editor','#editor2')
		editor.create()
	}
};
</script>

<style scoped lang='less'>
.main>div{
	width: 100%;
}
.addWorkTitle{
	font: italic bold 20px/50px 'microsoft yahei';
	color:#666;
}
.workArea{
	position: relative;
	.addTitle{
		height: 60px;
		padding-right: 160px;
		.el-button{
			position: absolute;
			right: 0;
			top: 0;
		}
	}
	.addDetail{
		height: 60px;
	}
}
.editor{
	border: 1px solid #ccc;
}
.editor2{
border: 1px solid #ccc;
min-height: 400px;
}
</style>