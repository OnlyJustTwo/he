<template>
  <div>
    <div class="banner">
      <img :src="banner" alt="" />
    </div>
    <div class="mid">
      <div class="form">
        <div class="formMain">
          <div class="formTitle">思贝肯</div>
          <div class="pic">
              <img :src="require('@/assets/about.jpg')" alt="">
          </div>
          <div class="formDes">
            一家依托国内外尖端技术和前沿产品销售及技术服务为一体的多元化公司，以工业自动化产品为主，可独立承担工业自动化系统的设计、集成、安装、调试、维护，耗电节能改造方案的编制与实施。作为美国Honeywell特约经销商，主要经营Honeywell压力变送器、温度变送器、无线变送器、流量仪表、气体检测仪表、分析仪表、数字控制器、DCS系统等系列产品。同时我司作为浙江长江搅拌设备西南办事处，能提供更多的适用苛刻环境的搅拌解决方案。
            公司主要承接石油、化工、冶金、电力、轻工等行业重点工程，成套提供了众多的优质产品及完善的解决方案；产品被广泛应用到攀钢集团、攀成钢、达钢集团、重钢集团、龙蟒集团、天化院、川天华、川化、泸天化、川润化工、川维厂、乐山新光多晶硅、瑞能多晶硅、东汽多晶硅、泸州电厂、江油电厂、珞璜电厂、万盛电厂、万源电厂、双槐电厂、中国成达工程公司、九院等企事业单位；同时部分产品已配套出口到马来西亚、印度、印尼等中东地区和中石油西南油气田分公司川中油气矿龙岗气田建设项目，中石油西南油气田分公司川西北气矿甲醇厂，天然气净化，采气作区等生产建设项目并积极参与了中石油四川石化80万吨/年乙烯1000万吨/炼油重点工程项目的投标，以优异的性价比与热情完善的服务使公司赢得业界的充分肯定与好评，树立了公司的良好形象。
            公司具备专业的技术团队，丰富的现场服务经验以及完善的售后服务体系。以创品牌战略为核心、以争取市场份额为目的、遵守市场规律、尊重财务合理性，服务大众为公司的运营宗旨。
            我们致力于为各业界用户的生产建设提供技术先进，科技含量高，品质好的产品和技术服务；我们用热忱之心赢得您的信任，用专业的技术带给您良好效益；用真诚的售后服务让您始终如一地感受质量第一，用户至上的理念.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner_url from "@/assets/homePage/banner.png";
import { WOW } from "wowjs";
export default {
  name: "invite",
  data() {
    return {
      banner: banner_url,
      form: {
        content: "",
        qq: "",
        email: "",
      },
    };
  },
  mounted() {
    //new WOW().init();  直接引用，默认配置，如果需要修改配置用下面的一段代码
    let wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.banner {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  img {
    width: 100%;
  }
}
.mid {
  width: 1400px;
  margin: auto;
}
.title {
  margin-top: 400px;
  margin-bottom: 50px;
  font-size: 48px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 32px;
}
.des {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 32px;
}
.form {
  overflow: hidden;
  margin-top: 500px;
  width: 100%;
  background: rgba(255, 255, 251, 1);
  box-shadow: 0px 0px 16px 0px rgba(7, 20, 20, 0.42);
  border-radius: 8px;
  padding-bottom: 50px;
  .formMain {
    width: 700px;
    height: 100%;
    margin: auto;
  }
  .formTitle {
    margin-top: 50px;
    text-align: center;
    font-size: 52px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: rgba(40, 40, 40, 1);
    line-height: 32px;
    margin-bottom: 50px;
  }
  .pic{
      width: 100%;
      text-align: center;
  }
  .formDes {
    text-indent: 36px;
    margin-top: 20px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    padding: 20px;
    color: rgba(101, 101, 101, 1);
    line-height: 32px;
  }
  .formContentTitle {
    margin-top: 15px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(40, 40, 40, 1);
    line-height: 32px;
  }
  .input {
    margin-top: 10px;
  }
  .submit {
    margin: 100px auto;
    text-align: center;
    width: 411px;
    height: 110px;
    line-height: 110px;
    background: rgba(255, 234, 91, 1);
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(114, 147, 255, 1);
  }
}
@media screen and (max-width: 1366px) {
  .mid {
    width: 90%;
    text-align: center;
  }
  .title {
    color: #000;
  }
  .des {
    color: #000;
  }
  .form {
    .formMain {
      width: 100%;
    }
  }
}
</style>
