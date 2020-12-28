<template>
  <div>
      <div class="banner">
          <img :src="banner" alt="">
      </div>
      <div class="mid">
        <div class="title">招纳贤士</div>
        <div class="des">
          <div>发送您的求职简历到公司邮箱</div>
          <div>使用名称加职位命名简历</div>
        </div>
        <div class="form">
          <div class="formMain">
            <div class="formTitle">用心服务 不断完善</div>
            <div class="formDes">每一条求职信息，我们都会查看，我们会尽快与您联系。</div>
            <div class="input">
                邮箱: yjq_sbk88@163.com
            </div>
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
  margin-top: 600px;
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
  margin-top: 200px;
  width:100%;
  background:rgba(255,255,251,1);
  box-shadow:0px 0px 16px 0px rgba(7,20,20,0.42);
  border-radius:8px;
  .formMain{
    width: 700px;
    height: 100%;
    margin: 50px auto;
  }
  .formTitle{
    margin-top: 50px;
    text-align: center;
    font-size:52px;
    font-family:Microsoft YaHei;
    font-weight:300;
    color:rgba(40,40,40,1);
    line-height:32px;
  }
  .formDes{
    margin-top: 70px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(101,101,101,1);
    line-height:32px;
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
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
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
      .formMain{
        width: 100%;
      }
    }
}
</style>
