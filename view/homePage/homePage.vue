<template>
  <div class="main">
      <img class="banner" :src="banner" alt="">
      <el-row>
        <el-col :md="{offset:2,span:6}" :xs="{span:18,offset:3}" :sm="{span:24,offset:3}">
          <div class="desBox wow slideInLeft">
            <div class="des">
              <div class="desTitle">
                <p>四川思贝肯自控工程有限公司</p>
              </div>
              <!-- <div class="litDes">
                四川思贝肯自控工程有限公司简介
              </div> -->
              <div class="desContent">
                　一家依托国内外尖端技术和前沿产品销售及技术服务为一体的多元化公司，以工业自动化产品为主，可独立承担工业自动化系统的设计、集成、安装、调试、维护，耗电节能改造方案的编制与实施。作为美国Honeywell特约经销商，主要经营Honeywell压力变送器、温度变送器、无线变送器、流量仪表、气体检测仪表、分析仪表、数字控制器、DCS系统等系列产品。同时我司作为浙江长江搅拌设备西南办事处，能提供更多的适用苛刻环境的搅拌解决方案。
              </div>
              <!-- <div class="button" @click="goto('buildStation')">
                <div>
                  <div>一键建站</div>
                  <div class="buttonImg">
                    <img :src="right" alt="">
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="listThree">
        <el-col :md="8">
          <div class="threeBox wow bounceInDown">
            <div class="three threeLR">
              <img :src="set" alt="">
              <p class="threeTitle">主要业务</p>
              <!-- <p class="threeDes">瞬息万变，一键让您拥有无数站点。</p> -->
              <p class="threeContent">
                公司主要承接石油、化工、冶金、电力、轻工等行业重点工程，成套提供了众多的优质产品及完善的解决方案；产品被广泛应用到攀钢集团、攀成钢、达钢集团、重钢集团、龙蟒集团、天化院、川天华、川化、泸天化、川润化工、川维厂、乐山新光多晶硅、瑞能多晶硅、东汽多晶硅、泸州电厂、江油电厂、珞璜电厂、万盛电厂、万源电厂、双槐电厂、中国成达工程公司、九院等企事业单位。
              </p>
              <!-- <div class="threeBtn">
                <div>自动生成</div>
                <div>模板任选</div>
              </div>  -->
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="threeBox wow bounceInUp">
            <div class="three">
              <img :src="push" alt="">
              <p class="threeTitle">出口地区</p>
              <!-- <p class="threeDes">瞬息万变，一键让您拥有无数站点。</p> -->
              <p class="threeContent">
                  部分产品已配套出口到马来西亚、印度、印尼等中东地区和中石油西南油气田分公司川中油气矿龙岗气田建设项目，中石油西南油气田分公司川西北气矿甲醇厂，天然气净化，采气作区等生产建设项目并积极参与了中石油四川石化80万吨/年乙烯1000万吨/炼油重点工程项目的投标，以优异的性价比与热情完善的服务使公司赢得业界的充分肯定与好评，树立了公司的良好形象。 
              </p>
              <!-- <div class="threeBtn">
                <div>自动生成</div>
                <div>模板任选</div>
              </div>  -->
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="threeBox wow bounceInDown">
            <div class="three threeLR">
              <img :src="free" alt="">
              <p class="threeTitle">团队理念</p>
              <!-- <p class="threeDes">瞬息万变，一键让您拥有无数站点。</p> -->
              <p class="threeContent">
                  公司具备专业的技术团队，丰富的现场服务经验以及完善的售后服务体系。以创品牌战略为核心、以争取市场份额为目的、遵守市场规律、尊重财务合理性，服务大众为公司的运营宗旨。 我们致力于为各业界用户的生产建设提供技术先进，科技含量高，品质好的产品和技术服务；我们用热忱之心赢得您的信任，用专业的技术带给您良好效益；用真诚的售后服务让您始终如一地感受质量第一，用户至上的理念。
              </p>
              <!-- <div class="threeBtn">
                <div>自动生成</div>
                <div>模板任选</div>
              </div>  -->
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="hidden-md-and-down swiper">
        <el-col :md="{offset:1,span:22}">
          <el-carousel :interval="4000" type="card" height="444px">
            <el-carousel-item v-for="item in threeImg" :key="item" class="swiperShadow">
              <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <el-row class="hidden-md-and-up swiper">
        <el-col :span="22" :offset="1">
          <el-carousel :interval="4000" type="card" height="230px">
            <el-carousel-item v-for="item in threeImg" :key="item" class="swiperShadow">
              <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>

      <div class="sysDesTitle wow tada">
        <div class="sysDesTitleTop">
          <img :src="title" alt="">
          <p>推荐产品展示</p>
        </div>
        <div class="sysLitDesOne">
          <p>部分产品推荐</p>
        </div>
        <div class="sysLitDesTwo">
          <p>查看更多</p>
        </div>
      </div>

      <el-row :gutter="20" class="sixTop">
        <el-col :md="8">
          <div class="sixBox wow slideInLeft">
            <div class="sixImg">
              <img :src="sixOne" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>变送器</div>
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="sixBox wow slideInDown">
            <div class="sixImg">
              <img :src="sixTwo" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>分析仪</div>
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="sixBox wow slideInRight">
            <div class="sixImg">
              <img :src="sixThree" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>记录仪</div>
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="sixBox wow slideInLeft">
            <div class="sixImg">
              <img :src="sixFour" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>电动执行器</div>
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="sixBox wow slideInUp">
            <div class="sixImg">
              <img :src="sixFive" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>雷达液位计</div>
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="sixBox wow slideInRight">
            <div class="sixImg">
              <img :src="sixSix" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>流量计</div>
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="sixBox wow slideInLeft">
            <div class="sixImg">
              <img :src="sixSeven" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>系统</div>
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="sixBox wow slideInUp">
            <div class="sixImg">
              <img :src="sixEight" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>回路控制器</div>
            </div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="sixBox wow slideInRight">
            <div class="sixImg">
              <img :src="sixNine" alt="">
            </div>
            <div class="sixDes">
              <div>Honeywell</div>
              <div>气体检测仪</div>
            </div>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import banner_url from '@/assets/homePage/banner.png'
import right_url from '@/assets/homePage/right.png'
import set_url from '@/assets/homePage/set.png'
import push_url from '@/assets/homePage/push.png'
import free_url from '@/assets/homePage/free.png'
import swiper_url from '@/assets/homePage/swiper.png'
import swiperPhone_url from '@/assets/homePage/swiperPhone.png'
import title_url from '@/assets/homePage/title.png'
import sixOne_url from '@/assets/homePage/sixOne.jpg'
import sixTwo_url from '@/assets/homePage/sixTwo.jpg'
import sixThree_url from '@/assets/homePage/sixThree.jpg'
import sixFour_url from '@/assets/homePage/sixFour.jpg'
import sixFive_url from '@/assets/homePage/sixFive.jpg'
import sixSix_url from '@/assets/homePage/sixSix.jpg'
import sixSeven_url from '@/assets/homePage/sixSeven.jpg'
import sixEight_url from '@/assets/homePage/sixEight.jpg'
import sixNine_url from '@/assets/homePage/sixNine.jpg'
import threeOne from '@/assets/homePage/threeOne.jpg'
import threeTwo from '@/assets/homePage/threeTwo.jpg'
import threeThree from '@/assets/homePage/threeThree.jpg'
import {WOW} from 'wowjs';
export default {
  name: 'homePage',
  data () {
      return {
          banner: banner_url,
          right: right_url,
          set: set_url,
          push: push_url,
          free: free_url,
          swiper: swiper_url,
          swiperPhone: swiperPhone_url,
          title: title_url,
          sixOne: sixOne_url,
          sixTwo: sixTwo_url,
          sixThree: sixThree_url,
          sixFour: sixFour_url,
          sixFive: sixFive_url,
          sixSix: sixSix_url,
          sixSeven: sixSeven_url,
          sixEight: sixEight_url,
          sixNine: sixNine_url,
          threeImg: [
            threeOne,
            threeTwo,
            threeThree
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
    goto(url){
      this.$router.push({name: url})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
.main{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.banner{
    width: 100%;
    position: absolute;
    z-index: -1;
}
.desBox{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.des{
  width: 500px;
  height: 450px;
  margin-top: 240px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  .desTitle{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-size: 36px;
      font-weight: 600
    }
  }
  .litDes{
    font-size: 5px;
  }
  .desContent{
    background-color: rgba(0,0,0,0.5);
    padding:10px 20px 40px 10px;
    font-size: 15px;
    line-height: 32px;
  }
  .button{
    width:260px;
    height:48px;
    background:rgba(255,234,91,1);
    color: #3B69FF;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &>div{
      width: 160px;
      height: 48px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .buttonImg{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 38px;
        height: 10px;
      }
    }
  }
}
// .listThree{
//   margin-top: 20px;
// }
.threeBox{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img{
    width: 60px;
    height: 60px;
  }
}
.three{
  width: 380px;
  min-height: 460px;
  padding-left: 20px;
  padding-top:20px;
  background-color: #7293FF;
  color: #fff;
  box-shadow:0px 0px 10px 0px rgba(137,126,255,0.33);
  .threeTitle{
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    margin-top: 20px;
  }
  .threeDes{
    margin-top: 10px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
  }
  .threeContent{
    margin-top: 20px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    line-height: 24px;
  }
  .threeBtn{
    margin-top: 40px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div{
      width:103px;
      height:37px;
      line-height: 37px;
      text-align: center;
      background:#AEC1FF;
      border-radius:8px;
      font-size:14px;
    }
  }
}
.threeLR{
  margin-top: 50px;
  background-color: #fff;
  color: #7293FF;
  box-shadow:0px 0px 10px 0px rgba(137,126,255,0.33);
  .threeTitle{
    color:rgba(89,140,255,1);
  }
  .threeDes{
    color:rgba(89,140,255,1);
  }
  .threeContent{
    color:rgba(116,119,140,1);
  }
  .threeBtn{
    >div{
      background:rgba(247,237,255,1);
      color: #CA85FF;
    }
  }
}
.swiper{
  margin-top: 100px;
  img{
    width: 100%;
  }
}
.sysDesTitle{
  margin-top: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .sysDesTitleTop{
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size:24px;
    font-family:  Microsoft YaHei;
    font-weight:bold;
    color:#ee3124;
    img{
      height: 46px;
    }
  }
  .sysLitDesOne{
    margin-top: 30px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:#282828;
    line-height:30px;
    text-align: center
  }
  .sysLitDesTwo{
    margin-top: 15px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(152,152,152,1);
    line-height:30px;
    text-align: center
  }
}
.sixTop{
  margin-top: 30px
}
.sixBox{
  margin: auto;
  width: 400px;
  height: 140px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  img{
    width: 140px;
    height: 140px;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
}
.sixDes{
  height: 60%;
  margin-left: 20px;
  font-size:18px;
  font-family:Microsoft YaHei;
  font-weight:400;
  line-height:24px;
  color: #74778C;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  >div:first-child{
    color: #ee3124
  }
}
@media screen and (max-width: 1366px) {
    .des{
      margin-top: 100px;
      height: 800px;
      width: 500px;
      .desContent{
        line-height: 35px;
      }
    }
    .listThree{
      margin-top: 40px;
    }
    .three{
      width: 500px;
      .threeContent{
        line-height: 30px;
      }
    }
    .threeLR{
      margin-top: 0;
    }
    .sixDes{
      height: 100%;
    }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
