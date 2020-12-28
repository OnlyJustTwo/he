<template>
  <div>
      <div class="banner">
          <img :src="banner" alt="">
      </div>
      <div class="title">
          <div class="lgTitle">
              <img :src="require('@/assets/invite/honeywell_logo.png')" alt="">
          </div>
      </div>
      <div class="nineBox">
          <el-row>
              <el-col :md="8" v-for="(nine, index) in honeywell" :key="index">
                  <div class="nineList wow flipInX" @click="goDetail()">
                      <div class="nineImg">
                          <el-image :src="require('@/assets/invite/honeywell_logo.png')" fit="contain"></el-image>
                      </div>
                      <div class="nineDes">
                          <div>{{nine.lgTitle}}</div>
                          <div>{{nine.smTitle}}</div>
                      </div>
                  </div>
              </el-col>
          </el-row>
      </div>
      <div class="title lastTitle">
          <div class="lgTitle">产品展示</div>
      </div>
      <div class="nineBox">
          <el-row>
              <el-col :md="8" v-for="(nine, index) in rosemount" :key="index">
                  <div class="nineList wow flipInX">
                      <div class="nineImg">
                          <img :src="require('@/assets/invite/rosemount_logo.jpg')" alt="">
                      </div>
                      <div class="nineDes">
                          <div>{{nine.lgTitle}}</div>
                          <div>{{nine.smTitle}}</div>
                      </div>
                  </div>
              </el-col>
          </el-row>
      </div>
  </div>
</template>

<script>
import banner_url from '@/assets/homePage/banner.png'
import nineOne_url from '@/assets/invite/nineOne.png'
import nineTwo_url from '@/assets/invite/nineTwo.png'
import nineThree_url from '@/assets/invite/nineThree.png'
import nineFour_url from '@/assets/invite/nineFour.png'
import nineFive_url from '@/assets/invite/nineFive.png'
import nineSix_url from '@/assets/invite/nineSix.png'
import nineSeven_url from '@/assets/invite/nineSeven.png'
import nineEight_url from '@/assets/invite/nineEight.png'
import nineNine_url from '@/assets/invite/nineNine.png'
import {WOW} from 'wowjs';
export default {
  name: 'invite',
  data () {
      return {
          banner: banner_url,
          nineOne: nineOne_url,
          nineTwo: nineTwo_url,
          nineThree: nineThree_url,
          nineFour: nineFour_url,
          nineFive: nineFive_url,
          nineSix: nineSix_url,
          nineSeven: nineSeven_url,
          nineEight: nineEight_url,
          nineNine: nineNine_url,
          honeywell: [
              {
                  img: nineOne_url,
                  lgTitle: 'Honeywell',
                  smTitle: '变送器'
              },{
                  img: nineTwo_url,
                  lgTitle: 'Honeywell',
                  smTitle: '流量计'
              },{
                  img: nineThree_url,
                  lgTitle: 'Honeywell',
                  smTitle: '分析仪'
              },{
                  img: nineFour_url,
                  lgTitle: 'Honeywell',
                  smTitle: '系统'
              },{
                  img: nineFive_url,
                  lgTitle: 'Honeywell',
                  smTitle: '记录仪'
              },{
                  img: nineSix_url,
                  lgTitle: 'Honeywell',
                  smTitle: '回路控制器'
              },{
                  img: nineSeven_url,
                  lgTitle: 'Honeywell',
                  smTitle: '电动执行器'
              },{
                  img: nineEight_url,
                  lgTitle: 'Honeywell',
                  smTitle: '气体检测仪'
              },{
                  img: nineNine_url,
                  lgTitle: 'Honeywell',
                  smTitle: '雷达液位计'
              }
          ],
          rosemount: [
              {
                  img: nineOne_url,
                  lgTitle: 'ROSEMOUNT',
                  smTitle: '变送器'
              },{
                  img: nineTwo_url,
                  lgTitle: 'ROSEMOUNT',
                  smTitle: '流量计'
              },{
                  img: nineThree_url,
                  lgTitle: 'ROSEMOUNT',
                  smTitle: '分析仪'
              },{
                  img: nineFour_url,
                  lgTitle: 'ROSEMOUNT',
                  smTitle: '系统'
              },{
                  img: nineFive_url,
                  lgTitle: 'ROSEMOUNT',
                  smTitle: '记录仪'
              },{
                  img: nineSix_url,
                  lgTitle: 'Honeywell',
                  smTitle: '回路控制器'
              },{
                  img: nineSeven_url,
                  lgTitle: 'ROSEMOUNT',
                  smTitle: '电动执行器'
              },{
                  img: nineEight_url,
                  lgTitle: 'ROSEMOUNT',
                  smTitle: '气体检测仪'
              },{
                  img: nineNine_url,
                  lgTitle: 'ROSEMOUNT',
                  smTitle: '雷达液位计'
              }
          ]
      }
  },
  mounted(){
	//new WOW().init();  直接引用，默认配置，如果需要修改配置用下面的一段代码
	  let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      });
	    wow.init();
  },
  methods: {
      goDetail() {
          this.$router.push('/productDetail')
      }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0
}
.banner{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    img{
        width: 100%;
    }
}
.title{
    width: 100%;
    text-align: center;
    margin-top: 700px;
    .lgTitle{
        font-size:48px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        line-height:56px;
    }
    .smTitle{
        font-size:28px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:50px;
        text-shadow:0px 2px 1px rgba(0,2,10,1);
        .fontYellow{
            color: #FFFF00
        }
    }
    .smOne{
        margin-top: 50px
    }
}
.lastTitle{
    margin-top: 100px;
    .lgTitle{
        color: #333333;
    }
}
.nineBox{
    width: 1600px;
    background-color: #fff;
    margin: auto;
    margin-top: 150px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 10px 0px rgba(137,126,255,0.33);
    .nineList{
        width: 400px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:70px auto;
    }
    .nineImg{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 10px;
        box-sizing: border-box;
        margin-right: 10px;
        img{
            width: 100%;
        }
    }
    .nineDes{
        flex: 1;
        >div:first-child{
            font-size:24px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(40,40,40,1);
        }
        >div:last-child{
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(152,152,152,1);
        }
    }
}
.Bgblue{
    background-color: #F1F5FF;
}
.textBoxTitle{
    text-align: left;
    >div:first-child{
        width: 60px;
        height: 4px;
        background-color: #598CFF
    }
    >div:last-child{
        margin-top: 5px;
        font-size:34px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(89,140,255,1);
    }
}
.textBox{
    margin: 50px auto;
}
.textBoxList{
    margin-left: 100px;
}
.threeOneImg{
    width: 700px;
}
.lastThree{
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:last-child{
        margin-left: 30px;
    }
}
.textBoxDes{
    margin-top: 100px;
    width: 300px;
    .textBoxDesTop{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        >div:first-child{
            width: 10px;
            height: 10px;
            border-radius: 100%;
            border:5px solid #7293FF
        };
        >div:last-child{
            font-size:28px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(40,40,40,1);
            margin-left: 10px
        }
    }
    .textBoxDesBtm{
        margin-top: 10px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(116,119,140,1);
        line-height:24px;
        text-align: left;
        margin-left: 25px;
    }
}
@media screen and (max-width: 1366px) {
    .title{
      margin-top: 400px;
      color: #282828;
        .smTitle{
            font-size: 16px
        }
    }
    .nineBox{
        width: 100%;
    }
    .threeBox{
        .threeRow{
            width: 100%;
        }
    }
}
</style>
