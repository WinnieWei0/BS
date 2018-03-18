<template>
	<div>
		<div class="addWorkTitle">添加作品</div>
		<div class="workArea">
			<div class="addTitle">
				<el-input v-model="addTitle" placeholder="请输入标题"></el-input>
				<el-button type="warning" round @click="btnAddWork">
					<i class="el-icon-check"></i>&nbsp;&nbsp;发布作品</el-button>
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
import E from "wangeditor";
export default {
  data() {
    return {
      addTitle: "",
      addDetail: "",
      addCode: "",
      userID: parseInt(JSON.parse(sessionStorage.getItem("user")).user_id)
    };
  },
  methods: {
    btnAddWork() {
      if (!this.userID) {
        this.$message.error({ message: "请登录" });
        this.$router.push("/user/login");
      }
      let date = new Date();
      let month =
        date.getMonth() + 1 < 0
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let day = date.getDate() < 0 ? "0" + date.getDate() : date.getDate();
      let hour = date.getHours() < 0 ? "0" + date.getHours() : date.getHours();
      let minu =
        date.getMinutes() < 0 ? "0" + date.getMinutes() : date.getMinutes();
      let second =
        date.getSeconds() < 0 ? "0" + date.getSeconds() : date.getSeconds();

      if (this.addTitle === "") {
        this.$message({ message: "请填写标题", type: "warning" });
        return;
      }
      if (this.addCode === "") {
        this.$message({ message: "请添加代码", type: "warning" });
        return;
      }
      this.$axios
        .get("/add", {
          params: {
            user_id: this.userID,
            workName: this.addTitle,
            workDetail: this.addDetail,
            workCode: this.addCode.txt.html(),
            createTime:
              date.getFullYear() +
              "-" +
              month +
              "-" +
              day +
              " " +
              hour +
              ":" +
              minu +
              ":" +
              second
          }
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({ message: res.data.msg, type: "success" });
          }
        });
    }
  },
  mounted() {
    var editor = new E("#editor", "#editor2");
    editor.create();
    this.addCode = editor;
  }
};
</script>

<style scoped lang='less'>
.main > div {
  width: 100%;
}
.addWorkTitle {
  font: italic bold 20px/50px "microsoft yahei";
  color: #666;
}
.workArea {
  position: relative;
  .addTitle {
    height: 60px;
    padding-right: 160px;
    .el-button {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .addDetail {
    height: 60px;
  }
}
.editor {
  border: 1px solid #ccc;
}
.editor2 {
  border: 1px solid #ccc;
  min-height: 400px;
}
</style>