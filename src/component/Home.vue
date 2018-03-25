<template>
  <div>
    <el-aside width="350px">
      <div class="Title">最新作品</div>
      <div class="totalItem">
        <div class="newItem" v-for="item in list.newWork" :key="item.w_id">
          <div class="newTitle">{{item.workName}}</div>
          <div class="userMSG">
            <!-- <img :src="item.src" alt=""> -->
            <span class="userName">{{item.userName}}</span>
            <span class="publicationTime">{{item.createTime}}</span>
          </div>
        </div>
      </div>
    </el-aside>
    <el-main>
      <el-carousel trigger="click" height="250px">
      <el-carousel-item v-for="item in swipperList" :key="item.index">
        <img :src="item.src" :alt="item.alt">
        <!-- <img src="../assets/images/swipper1.jpg" alt=""> -->
      </el-carousel-item>
      </el-carousel>
      <div class="goodList">
        <div class="recommendOpus">
          <div class="Title">推荐作品</div>
          <div class="recommendTotal">
            <div class="newItem" v-for="item in list.goodWork" :key="item.w_id">
              <div class="newTitle">{{item.workName}}</div>
              <div class="recommendDetail">{{item.workDetail}}</div>
              <div class="totalItem">
                <div class="userMSG">
                  <!-- <img :src="item.src" alt=""> -->
                  <span class="userName">{{item.userName}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recommendAuth">
          <div class="Title">优秀作者推荐</div>
          <div class="recommendTotal">
            <div class="newItem" v-for="item in list.goodAuther" :key="item.user_id">
              <span class="ranking">{{item.user_id}}</span>
              <!-- <img :src="item.src" alt=""> -->
              <div class="newTitle">{{item.userName}}</div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        swipperList:[
          {src:'/src/assets/images/swipper1.jpg',alt:'这是个图片1'},
          {src:'/src/assets/images/swipper2.jpg',alt:'这是个图片2'},
          {src:'/src/assets/images/swipper3.jpg',alt:'这是个图片3'},
          {src:'/src/assets/images/swipper4.jpg',alt:'这是个图片4'},
          {src:'/src/assets/images/swipper5.jpg',alt:'这是个图片5'},
          {src:'/src/assets/images/swipper6.jpg',alt:'这是个图片6'},
          {src:'/src/assets/images/swipper7.jpg',alt:'这是个图片7'}
        ],
        list:{
          newWork:[],
          goodWork:[],
          goodAuther:[]
        }
      }
    },
    methods:{
      getList(){
        this.$axios.get('/home').then(res=>{
          console.log(res)
          this.list.newWork=res.data.newWork
          this.list.newWork.map(v=>{
            v.createTime=v.createTime.split('.')[0].replace('T',' ')
          })
          this.list.goodWork=res.data.goodWork
          this.list.goodAuther=res.data.goodAuther
        })
      }
    },
    created(){
      this.getList()
    }
  }
</script>

<style lang='less' scoped>
.main>div{
  width: 100%;
  clear: both;
}
.el-aside{
  height: 100%;
  text-align: left;
  background-color: #d3dce6;
  color: #333;
  float: left;
}
.el-main{
  width: 940px;
  background-color: #e9eef3;
  color: #333;
  float: right;
}
.Title{
  height: 20px;
  line-height: 20px;
  padding-left: 20px;
  border-left: 2px solid orangered;
  margin: 10px;
  font-size: 18px;
}
.newItem{
    padding: 5px 20px 10px;
  .newTitle{
    font: normal normal 17px/30px 'microsoft yahei';
  }
  .recommendDetail{
    font-size: 15px;
  }
  .userMSG{
      color: #888;
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 5px;
    }
    .publicationTime{
      float: right;
    }
  }
}
.el-carousel__item img{
  width: 940px;
  height: 250px;
}
.goodList{
  clear: both;
  .recommendOpus{
    width: 700px;
    margin-top: 20px;
    // background-color: red;
    float: left;
  }
  .recommendAuth{
    width: 230px;
    float: right;
    // background-color: blueviolet;
    .newItem{
      position: relative;
      padding:5px 20px 10px 30px;
      clear: both;
      overflow: hidden;
      .ranking{
        padding: 0 5px;
        color: white;
        background-color: #999;
        position: absolute;
        top: 0;
        left: 0;
      }
        &:nth-child(1) .ranking{
          background-color: red;
        }
        &:nth-child(2) .ranking{
          background-color: #FF9800;
        }
        &:nth-child(3) .ranking{
          background-color: #cddc39;
        }
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
      }
      .newTitle{
        float: left;
      }
    }
  }
}
</style>