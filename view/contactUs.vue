<template>
  <div>
      <div class="banner">
          <img :src="banner" alt="">
      </div>
      <div class="mid">
        <div class="form">
          <div class="formMain">
            <div class="formTitle">四川思贝肯自控工程有限公司</div>
            <div class="formDes"><p class="title">销售热线：</p>400-028-7771 028-61894077 028-61894277</div>
            <div class="formDes"><p class="title">公司传真：</p>028-61894477</div>
            <div class="formDes"><p class="title">E-mail：</p>yjq_sbk88@163.com</div>
            <div class="formDes"><p class="title">公司主页：</p>www.cdrunda.com.cn</div>
            <div class="formDes"><p class="title">销售中心：</p>2660476399(袁小姐) 1710211479(何小姐)</div>
            <div class="formDes"><p class="title">销售电话：</p>18030650455、13608188140 （袁小姐） 18030650445 （何小姐）</div>
            <div class="formDes"><p class="title">售后服务QQ：</p>645962715</div>
            <div class="formDes"><p class="title">公司地址：</p>成都市金牛区金府路嘉宇天琢城三单元27F</div>
            <iframe class="iframe" src="https://map.baidu.com/search/%E6%88%90%E9%83%BD%E5%B8%82%E9%87%91%E7%89%9B%E5%8C%BA%E9%87%91%E5%BA%9C%E8%B7%AF%E5%98%89%E5%AE%87%E5%A4%A9%E7%90%A2%E5%9F%8E%E4%B8%89%E5%8D%95%E5%85%8327f/@11580982.595,3573580.97,19z?querytype=s&da_src=shareurl&wd=%E6%88%90%E9%83%BD%E5%B8%82%E9%87%91%E7%89%9B%E5%8C%BA%E9%87%91%E5%BA%9C%E8%B7%AF%E5%98%89%E5%AE%87%E5%A4%A9%E7%90%A2%E5%9F%8E%E4%B8%89%E5%8D%95%E5%85%8327F&c=75&src=0&pn=0&sug=0&l=12&b=(11536128.82,3531779.48;11634432.82,3580035.48)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=10" frameborder="0"></iframe>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import banner_url from '@/assets/homePage/banner.png'
import {WOW} from 'wowjs';
export default {
  name: 'invite',
  data () {
      return {
          banner: banner_url,
          form: {
            content: '',
            qq: '',
            email: ''
          }
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
.mid{
  width: 1400px;
  margin: auto;
}
.title{
  margin-top: 400px;
  margin-bottom: 50px;
  font-size:48px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:32px;
}
.des{
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:32px;
}
.form{
  overflow: hidden;
  margin-top: 500px;
  width:100%;
  background:rgba(255,255,251,1);
  box-shadow:0px 0px 16px 0px rgba(7,20,20,0.42);
  border-radius:8px;
  padding-bottom: 50px;
  .formMain{
    width: 800px;
    height: 100%;
    margin: auto;
    .iframe{
        width: 100%;
        height: 700px;
        overflow: hidden;
        margin: 10px auto;
    }
  }
  .formTitle{
    margin-top: 50px;
    text-align: center;
    font-size:52px;
    font-family:Microsoft YaHei;
    font-weight:300;
    color:rgba(40,40,40,1);
    line-height:32px;
    margin-bottom: 50px;
  }
  .formDes{
    margin-top: 20px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(101,101,101,1);
    line-height:32px;
    p{
        display: inline-block;
        width: 200px;
        color: #333333;
        font-size: 18px;
        margin: 10px 0;
    }
  }
  .formContentTitle{
    margin-top: 15px;
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(40,40,40,1);
    line-height:32px;
  }
  .input{
    margin-top: 10px
  }
  .submit{
    margin: 100px auto;
    text-align: center;
    width:411px;
    height:110px;
    line-height: 110px;
    background:rgba(255,234,91,1);
    font-size:28px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(114,147,255,1);
  }
}
@media screen and (max-width: 1366px) {
    .mid{
      width: 90%;
      text-align: center;
    }
    .title{
      color: #000;
    }
    .des{
      color: #000;
    }
    .form{
      .formTitle{
        font-size: 40px;
      }
      .formMain{
        width: 100%;
      }
      .iframe{
          display: none;
      }
      .formDes{
        padding: 0 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        .title{
          width: 300px;
          text-align: left;
        }
      }
    }
}
</style>
