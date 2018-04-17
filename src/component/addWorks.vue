<template>
  <div>
    <div class="addWorkTitle">
      <h1>添加作品</h1>
    </div>
    <div class="workArea">
      <div class="addTitle">
        <el-input v-model="addTitle" placeholder="请输入标题"></el-input>
        <el-button type="warning" round @click="btnAddWork">
          <i class="el-icon-check"></i>&nbsp;&nbsp;发布作品</el-button>
      </div>
      <el-row>
        <el-col :span="16">
          <div class="addImg">
            <h4>添加效果图</h4>
            <el-upload ref="imgList" action="http://127.0.0.1:3000/uploadimg" :before-upload="beforeImgUpload" list-type="picture-card" :on-change="imgChange" :on-remove="imgRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="addCode">
            <el-upload ref="fileList" class="upload-demo" action="http://127.0.0.1:3000/uploadfile" :on-change="fileChange" :limit="1">
              <el-button size="small" type="primary">上传源码</el-button>
            </el-upload>
          </div>
        </el-col>
      </el-row>
      <h4>使用说明及主要代码</h4>
      <div id="editor" class="editor"></div>
      <div id="editor2" class="editor2"></div>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import $ from 'jquery';
import { Base64 } from "js-base64";
export default {
  data() {
    return {
      addTitle: "",
      addCode: "",
      userID: parseInt(JSON.parse(sessionStorage.getItem("user")).user_id),
      // 图片上传
      fileList: [],
      imgList: []
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
      if(!this.imgList.length){
        this.$message({ message: "请上传图片", type: "warning" });
        return;
      }
      this.$axios
        .get("/add", {
          params: {
            user_id: this.userID,
            workName: this.addTitle,
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
              second,
            imgList:JSON.stringify(this.imgList),
            fileList:JSON.stringify(this.fileList)
          }
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({ message: res.data.msg, type: "success" });
            this.$router.push('/')
          }
        });
    },
    beforeImgUpload(file) {
        const type = file.type.split('/')[1];
        if(type){
          if(/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(type)){
          // if(!isJPG){
          this.$message.error('请上传图片');
          this.$refs.imgList.abort(file);
        }
        }else{
          this.$message.error('请上传图片');
          this.$refs.imgList.abort(file);
        }
    },
    imgRemove(file, fileList) {
      this.imgList = fileList;
    },
    imgChange(file, fileList) {
      this.imgList = fileList;
    },
    fileChange(file, fileList) {
      this.fileList = fileList;
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
  background-color: white;
  padding: 20px;
}
.addWorkTitle {
  font: italic bold 20px/50px "microsoft yahei";
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
}
.editor {
  border: 1px solid #ccc;
}
.editor2 {
  border: 1px solid #ccc;
  min-height: 400px;
}
.addImg {
  > div {
    margin: 10px 0;
  }
}
h4{
  padding: 10px;
}
</style>