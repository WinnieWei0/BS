<template>
  <div>
    <div class="workDetail">
      <div class="workName">
        {{detailList.workName}}
      </div>
      <div class="praise">
        <i v-if="showThumb" class="fa fa-thumbs-o-up" @click="thumbs(detailList.count)"></i>
        <i v-if="!showThumb" class="fa fa-thumbs-up set"></i>
        <i class="fa fa-trash-o" @click="delwork(detailList.w_id)"></i>
      </div>
      <el-row>
        <el-col :span="14">
          <el-carousel trigger="click">
            <el-carousel-item v-for="item in imgList" :key="item.uid">
              <img :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="2" :offset="8">
          <a :href="fileList[0].url" :download="fileList[0].name">
            <el-button type="primary">下载源码</el-button>
          </a>
        </el-col>
      </el-row>
      <div class="workCode">
        <h4>使用说明及介绍</h4>
        <div id="editor" class="editor" v-if="false"></div>
        <div id="editor2" class="editor2"></div>
      </div>
    </div>
    <div class="comment">
      <h2>评论</h2>
      <div class="commentHandle">
        <el-input v-model="commentContent" type="textarea" :autosize="{minRows:7}" placeholder="评论:"></el-input>
        <el-button type="primary" @click="addComment">发表评论</el-button>
      </div>
      <div class="commentList">
        <div class="myItem" v-for="item in comment" :key="item.c_id">
          <div class="myMsg">
            <div class="myText">{{item.cmDetail}}</div>
            <div class="userName">
              <router-link :to="{path:'/userList',query:{id:item.user_id}}">{{item.userName}}</router-link>
            </div>
          </div>
          <div class="from">
            <el-button type="text" @click="btnReply(item.c_id)">回复</el-button>
          </div>
          <div class="reply" v-if="item.show">
            <el-input v-model="item.content" type="textarea" :autosize="{minRows:3}" placeholder="回复:"></el-input>
            <el-button type="primary" class="commitComment" @click="commitComment(item.c_id)">确定</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  data() {
    return {
      detailList: {},
      showThumb: true,
      comment: [],
      imgList:[],
      fileList:[]
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("/detail", {
          params: {
            id: this.$route.query.id
          }
        })
        .then(res => {
          // console.log(res.data)
          this.detailList = res.data[0];
          this.imgList=JSON.parse(this.detailList.imgList)
          this.fileList=JSON.parse(this.detailList.fileList)
        });
    },
    addComment() {
      if(!this.commentContent.trim()){
        return
      }
      this.$axios
        .get("/comment/reply", {
          params: {
            login_id: JSON.parse(sessionStorage.getItem("user")).user_id,
            user_id:JSON.parse(sessionStorage.getItem("user")).user_id,
            cmDetail: this.commentContent,
            w_id: this.$route.query.id,
            isShow: 1
          }
        })
        .then(res => {
            this.getCommentList();
        });
    },
    thumbs(count) {
      this.$axios
        .get("/thumbs", {
          params: {
            id: this.$route.query.id,
            count: count + 1
          }
        })
        .then(res => {
          if (res.data.code === 200) {
            this.showThumb = false;
          }
        });
    },
    delwork(id) {
      this.$axios
        .get("/del", {
          params: {
            id
          }
        })
        .then(res => {
          if (res.data.code !== 200) {
            this.$message.error("删除失败");
          } else {
            this.$message({
              type: "success",
              message: "删除成功"
            });
            this.$router.go(-1);
          }
        });
    },
    btnReply(id) {
      this.comment.map(v => {
        if (v.c_id === id) {
          v.show = true;
        }
      });
    },
    commitComment(id) {
      this.comment.map(v => {
        if (v.c_id === id) {
          if (!v.content) {
            return;
          }
          this.$axios
            .get("/comment/reply", {
              params: {
                login_id: JSON.parse(sessionStorage.getItem("user")).user_id,
                user_id: v.user_id,
                cmDetail: v.content,
                w_id: v.w_id,
                isShow: 0
              }
            })
            .then(res => {
              if (res.data.code === 200) {
                v.show = false;
                this.getCommentList();
              } else {
                this.$message.error(res.data);
              }
            });
        }
      });
    },
    getCommentList() {
      this.$axios.get("/onecomment",{
        params:{
          id:this.$route.query.id
        }
      }).then(res => {
        console.log(res.data)
        this.comment = res.data;
        this.comment.map(v => {
          v.content = "";
          this.$set(v, "show", false);
          if (!v.isShow.data[0]) {
            v.cmDetail = "回复(" + v.userName + "): " + v.cmDetail;
          }
        });
      });
    }
  },
  created() {
    this.getData();
    this.getCommentList();
  },
  updated() {
    var editor = new E("#editor", "#editor2");
    editor.create();
    editor.txt.html(this.detailList.workCode);
    editor.$textElem.attr("contenteditable", false);
  }
};
</script>

<style scoped lang='less'>
.main > div {
  width: 100%;
}
.workDetail {
  background-color: #eee;
  padding: 0 10px 10px 10px;
  position: relative;
  .workName {
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
  }
  .workDesc {
    text-indent: 2em;
    padding-bottom: 10px;
  }
  .workCode {
    background-color: white;
    padding-bottom: 10px;
    h4{
      padding: 10px;
    }
  }
}
.praise {
  position: absolute;
  right: 30px;
  top: 15px;
  i {
    font-size: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
  .set {
    color: orangered;
    cursor: none;
  }
}
.editor {
  border: 1px solid #ccc;
}
.editor2 {
  border: 1px solid #ccc;
  min-height: 400px;
}
.comment {
  margin-top: 20px;
  .myItem {
    border: 1px solid #cccccc;
    padding: 10px 10px 0;
    margin-bottom: 10px;
    .myMsg {
      clear: both;
      overflow: hidden;
      .myText {
        font-size: 17px;
        float: left;
      }
      .userName {
        float: right;
      }
      .myTime {
        float: right;
      }
    }
    .from {
      clear: both;
      overflow: hidden;
      .fromName {
        font-size: 14px;
        color: #888;
        float: left;
        padding: 13px 0;
      }
      .el-button {
        float: right;
      }
    }
  }
}
.reply {
  padding-bottom: 10px;
  clear: both;
  overflow: hidden;
}
.commitComment {
  float: right;
  margin-top: 10px;
}
.commentHandle {
  margin: 20px 0;
  clear: both;
  overflow: hidden;
  .el-button{
    float: right;
    margin-top: 10px;
  }
}
.el-carousel img{
  width: 100%;
  height: 100%;
}
.el-row{
  margin: 20px 0;
}
</style>