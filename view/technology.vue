<template>
  <div>
      <div class="banner">
          <img :src="banner" alt="">
      </div>
      <div class="mid">
        <div class="form">
          <div class="formMain">
            <div class="formTitle">质量第一 用户至上</div>
            <div class="formDes">1、“质量第一，用户至上”是我公司的服务宗旨。我公司在仪器仪表成套和自动化仪表安装工程中严格执行ISO9001质量管理体系，以用户的需求为目标，以用户的满意为追求。</div>
            <div class="formDes">2、 本公司按招标文件技术规格书提供的产品均为全新合格产品，如发现有破损、短缺及不符合技术要求的产品，本公司将及时免费更换。</div>
            <div class="formDes">3、 本公司提供产品的同时，一并提供产品的有关技术资料和相关技术文件。</div>
            <div class="formDes">4、本公司所提供和安装的产品，其质保期为12个月。在质保期内，对于非甲方（用户）责任引起的质量问题和仪表故障，本公司保证免费对故障部件进行更换和维修。在质保期外，产品发生的质量问题，本公司亦进行维修，收取适当成本费用。</div>
            <div class="formDes">5、 本公司提供的产品，保证以成本价长期有偿提供所供仪表的各种备品备件。</div>
            <div class="formDes">6、 本公司不定期地对用户进行回访和技术交流，以便用户不断提高使用水平和发挥所购产品的作用</div>
            <div class="formDes">7、本公司售后服务将全方位满足用户的要求。当设备出现故障或不能满足用户要求时，在接到用户通知后12小时内做出响应，如果用户需要，本公司将派人在48小时内赶赴现场，按用户要求排除故障，直到业主满意为止。当设备需要维修或更换部件时，在用户的要求下，本公司将派有经验的工程师到现场进行技术支持。</div>
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
  padding: 20px;
  width:100%;
  background:rgba(255,255,251,1);
  box-shadow:0px 0px 16px 0px rgba(7,20,20,0.42);
  border-radius:8px;
  padding-bottom: 50px;
  box-sizing: border-box;
  .formMain{
    width: 700px;
    height: 100%;
    margin: auto;
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
    text-indent:36px;
    margin-top: 20px;
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
      .formMain{
        width: 100%;
      }
    }
}
</style>
