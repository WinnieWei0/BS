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
            <el-upload :ref="img" action="http://127.0.0.1:3000/uploadimg" list-type="picture-card" :on-change="imgChange" :on-remove="imgRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="addCode">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" multiple :limit="1" :file-list="fileList">
              <el-button size="small" type="primary">上传源码</el-button>
            </el-upload>
          </div>
        </el-col>
      </el-row>
      <div id="editor" class="editor" style="z-index: 0;position: relative;"></div>
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
      imgList: [],
      img: [],
      file: []
    };
  },
  methods: {
    btnAddWork() {
      console.log(this.imgList);
      console.log(this.fileList);
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
    },
//     inputupload(param){
// console.log(param)
//     },
    imgRemove(file, fileList) {
      this.imgList = fileList;
    },
    imgChange(file, fileList) {
      this.imgList = fileList;
    },
    fileChange(file, fileList) {
      this.fileList = fileList;
    },
    uploadImg(param) {
      // console.log(param)
      console.log(param.file);
      var url = "http://127.0.0.1:3000/uploadimg";
        // var formData=new FormData();
        // formData.append('img',param.file);
        // formData.append('last',$('#img').attr('last'));
        var xhr = new XMLHttpRequest();
      xhr.open("post", url);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      // xhr.send(JSON.stringify(param.file));
      xhr.send(param.file);
      // xhr.send(formData)
      xhr.onload = function(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log(xhr.responseText);
        }
      };
      // var url = "/uploadimg";
      // // var formData=new FormData();
      // // formData.append('img',param.file);
      // // console.log(formData);
      // // formData.append('last',$('#img').attr('last'));
      // var xhr = new XMLHttpRequest();
      // xhr.open("post", url);
      // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      // xhr.send(param.file);
      // // xhr.send(formData)
      // xhr.onload = function(e) {
      //   console.log(e);
      //   if (xhr.readyState == 4 && xhr.status == 200) {
      //     console.log(xhr.responseText);
      //   }
      //   // callback(JSON.parse(e.target.responseText));
      // };
    },
    handlePreview() {}
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
</style>