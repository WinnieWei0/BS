<template>
  <div>
    <el-aside width="350px">
      <div class="Title">最新作品</div>
      <div class="totalItem">
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
        <div class="newItem">
          <div class="newTitle">贪吃蛇</div>
          <div class="userMSG">
            <img src="../assets/images/logo.png" alt="">
            <span class="userName">winnie</span>
            <span class="publicationTime">2017-1-2</span>
          </div>
        </div>
      </div>
    </el-aside>
    <el-main>
      <el-carousel trigger="click" height="250px">
      <el-carousel-item v-for="item in swipperList" :key="item">
        <img :src="item.src" :alt="item.alt">
        <!-- <img src="../assets/images/swipper1.jpg" alt=""> -->
      </el-carousel-item>
      </el-carousel>
      <div class="goodList">
        <div class="recommendOpus">
          <div class="Title">推荐作品</div>
          <!-- <div class="recommendTotal">
            <div class="recommendItem">
              <div class="userCMD">
                <img src="../assets/images/logo.png" alt="">
                <span class="userName">winnie</span>
              </div>
              <div class="recommendTitle">贪吃蛇</div>
              <div class="recommenddetail">这是一款贪吃蛇游戏</div>
            </div>
          </div> -->
          <div class="recommendTotal">
            <div class="newItem">
              <div class="newTitle">贪吃蛇</div>
              <div class="recommendDetail">这是一款贪吃蛇游戏</div>
              <div class="totalItem">
                <div class="userMSG">
                  <img src="../assets/images/logo.png" alt="">
                  <span class="userName">winnie</span>
                </div>
              </div>
            </div>
            <div class="newItem">
              <div class="newTitle">贪吃蛇</div>
              <div class="recommendDetail">这是一款贪吃蛇游戏</div>
              <div class="totalItem">
                <div class="userMSG">
                  <img src="../assets/images/logo.png" alt="">
                  <span class="userName">winnie</span>
                </div>
              </div>
            </div>
            <div class="newItem">
              <div class="newTitle">贪吃蛇</div>
              <div class="recommendDetail">这是一款贪吃蛇游戏</div>
              <div class="totalItem">
                <div class="userMSG">
                  <img src="../assets/images/logo.png" alt="">
                  <span class="userName">winnie</span>
                </div>
              </div>
            </div>
            <div class="newItem">
              <div class="newTitle">贪吃蛇</div>
              <div class="recommendDetail">这是一款贪吃蛇游戏</div>
              <div class="totalItem">
                <div class="userMSG">
                  <img src="../assets/images/logo.png" alt="">
                  <span class="userName">winnie</span>
                </div>
              </div>
            </div>
            <div class="newItem">
              <div class="newTitle">贪吃蛇</div>
              <div class="recommendDetail">这是一款贪吃蛇游戏</div>
              <div class="totalItem">
                <div class="userMSG">
                  <img src="../assets/images/logo.png" alt="">
                  <span class="userName">winnie</span>
                </div>
              </div>
            </div>
            <div class="newItem">
              <div class="newTitle">贪吃蛇</div>
              <div class="recommendDetail">这是一款贪吃蛇游戏</div>
              <div class="totalItem">
                <div class="userMSG">
                  <img src="../assets/images/logo.png" alt="">
                  <span class="userName">winnie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recommendAuth">
          <div class="Title">优秀作者推荐</div>
          <div class="recommendTotal">
            <div class="newItem">
              <span class="ranking">1</span>
              <img src="../assets/images/logo.png" alt="">
              <div class="newTitle">贪吃蛇</div>
            </div>
            <div class="newItem">
              <span class="ranking">2</span>
              <img src="../assets/images/logo.png" alt="">
              <div class="newTitle">贪吃蛇</div>
            </div>
            <div class="newItem">
              <span class="ranking">3</span>
              <img src="../assets/images/logo.png" alt="">
              <div class="newTitle">贪吃蛇</div>
            </div>
            <div class="newItem">
              <span class="ranking">4</span>
              <img src="../assets/images/logo.png" alt="">
              <div class="newTitle">贪吃蛇</div>
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
        ]
      }
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