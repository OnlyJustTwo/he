<template>
  <div class="main">
    <el-row>
      <el-col :md="12">
        <div class="loginLeft">
          <el-image
          :src="loginImg"
          :fit="fit">
          </el-image>
          <div class="webLogo hidden-md-and-down">
            <img :src="logoFont" alt="">
          </div>
          <div class="phoneLogo hidden-md-and-up">
            <img :src="logoFont" alt="">
          </div>
        </div>
      </el-col>
      <el-col :md="12">
        <div class="loginBox" v-if="!fogetPass">
          <div class="login">
            <div  class="loginTab">
              <el-row>
                <el-col :span="12" :class="current == 0 ? 'active' : ''">
                  <div @click="current=0">
                    登录
                  </div>
                </el-col>
                <el-col :span="12" :class="current == 1 ? 'active' : ''">
                  <div @click="current=1">
                    注册
                  </div>
                </el-col>
              </el-row>
              <div class="borderBot">
                <div :class="current == 0 ? 'activeLogin' : 'activeRegister'"></div>
              </div>
            </div>
            <div>
              <transition-group name="slide-fade" mode="out-in">
                <div v-if="current == 0" class="tabLogin" :key="0">
                  <!-- 登录 -->
                  <div :class="loginMsg.focus == 0 ? 'inputBox user inputActive':'inputBox user'">
                    <div class="inputBoxImg">
                      <img :src="username2Img" alt="" v-if="loginMsg.focus == 0">
                      <img :src="usernameImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="loginMsg.username" type="text" placeholder="请输入账号" @focus="loginMsg.focus = 0">
                    </div>
                  </div>
                  <div :class="loginMsg.focus == 1 ? 'inputBox pass inputActive':'inputBox pass'">
                    <div class="inputBoxImg">
                      <img :src="password2Img" alt="" v-if="loginMsg.focus == 1">
                      <img :src="passwordImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="loginMsg.password" :type="loginMsg.showpass ? 'text' : 'password' " placeholder="请输入密码" @focus="loginMsg.focus = 1">
                    </div>
                    <div class="inputBoxImg"  @click="loginMsg.showpass = !loginMsg.showpass">
                      <img :src="eyeImg" alt="" v-if="!loginMsg.showpass">
                      <img :src="eye2Img" alt="" v-else>
                    </div>
                  </div>
                  <div class="submit" @click="login()">
                    登录
                  </div>
                  <p class="findPass">不记得密码了,<span @click="fogetPass=true">找回密码>></span></p>
                </div>
                <div v-else class="tabRegister" :key="1">
                  <!-- 注册 -->
                  <div :class="registerMsg.focus == 0 ? 'inputBox user inputActive':'inputBox user'">
                    <div class="inputBoxImg">
                      <img :src="username2Img" alt="" v-if="registerMsg.focus == 0">
                      <img :src="usernameImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="registerMsg.username" type="text" placeholder="请输入账号" @focus="registerMsg.focus = 0">
                    </div>
                  </div>
                  <div :class="registerMsg.focus == 1 ? 'inputBox pass inputActive':'inputBox pass'">
                    <div class="inputBoxImg">
                      <img :src="password2Img" alt="" v-if="registerMsg.focus == 1">
                      <img :src="passwordImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="registerMsg.password" :type="registerMsg.showpass ? 'text' : 'password' " placeholder="请输入密码" @focus="registerMsg.focus = 1">
                    </div>
                    <div class="inputBoxImg"  @click="registerMsg.showpass = !registerMsg.showpass">
                      <img :src="eyeImg" alt="" v-if="!registerMsg.showpass">
                      <img :src="eye2Img" alt="" v-else>
                    </div>
                  </div>
                  <div :class="registerMsg.focus == 2 ? 'inputBox pass inputActive':'inputBox pass'">
                    <div class="inputBoxImg">
                      <img :src="qq2Img" alt="" v-if="registerMsg.focus == 2">
                      <img :src="qqImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="registerMsg.qq" type="text" placeholder="请输入QQ号码" @focus="registerMsg.focus = 2">
                    </div>
                  </div>
                  <div :class="registerMsg.focus == 3 ? 'inputBox pass inputActive':'inputBox pass'">
                    <div class="inputBoxImg">
                      <img :src="email2Img" alt="" v-if="registerMsg.focus == 3">
                      <img :src="emailImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="registerMsg.email" type="text" placeholder="请输入邮箱" @focus="registerMsg.focus = 3">
                    </div>
                  </div>
                  <div :class="registerMsg.focus == 4 ? 'inputBox pass inputActive':'inputBox pass'">
                    <div class="inputBoxImg">
                      <img :src="code2Img" alt="" v-if="registerMsg.focus == 4">
                      <img :src="codeImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="registerMsg.code" type="text" placeholder="请输入验证码" @focus="registerMsg.focus = 4">
                    </div>
                    <div class="inputBoxCode">
                      <div>获取验证码</div>
                    </div>
                  </div>
                  <div class="submit" @click="register()">
                    注册
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
        <div class="loginBox" v-if="fogetPass">
          <div class="login">
            <div  class="loginTab">
              <el-row>
                <el-col :span="24" class="active">
                  <div>
                    找回密码
                  </div>
                </el-col>
              </el-row>
              <div class="borderBot"></div>
            </div>
            <div>
                <div class="tabRegister">
                  <!-- 注册 -->
                  <div :class="forgetMsg.focus == 0 ? 'inputBox user inputActive':'inputBox user'">
                    <div class="inputBoxImg">
                      <img :src="username2Img" alt="" v-if="forgetMsg.focus == 0">
                      <img :src="usernameImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="forgetMsg.username" type="text" placeholder="请输入账号" @focus="forgetMsg.focus = 0">
                    </div>
                  </div>
                  <div :class="forgetMsg.focus == 1 ? 'inputBox pass inputActive':'inputBox pass'">
                    <div class="inputBoxImg">
                      <img :src="email2Img" alt="" v-if="forgetMsg.focus == 1">
                      <img :src="emailImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="forgetMsg.email" type="text" placeholder="请输入邮箱" @focus="forgetMsg.focus = 1">
                    </div>
                  </div>
                  <div :class="forgetMsg.focus == 2 ? 'inputBox pass inputActive':'inputBox pass'">
                    <div class="inputBoxImg">
                      <img :src="code2Img" alt="" v-if="forgetMsg.focus == 2">
                      <img :src="codeImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="forgetMsg.code" type="text" placeholder="请输入验证码" @focus="forgetMsg.focus = 2">
                    </div>
                    <div class="inputBoxCode">
                      <div>获取验证码</div>
                    </div>
                  </div>
                  <div :class="forgetMsg.focus == 3 ? 'inputBox pass inputActive':'inputBox pass'">
                    <div class="inputBoxImg">
                      <img :src="password2Img" alt="" v-if="forgetMsg.focus == 3">
                      <img :src="passwordImg" alt="" v-else>
                    </div>
                    <div class="inputBoxText">
                      <input v-model="forgetMsg.password" :type="forgetMsg.showpass ? 'text' : 'password' " placeholder="请输入密码" @focus="forgetMsg.focus = 3">
                    </div>
                    <div class="inputBoxImg"  @click="forgetMsg.showpass = !forgetMsg.showpass">
                      <img :src="eyeImg" alt="" v-if="!forgetMsg.showpass">
                      <img :src="eye2Img" alt="" v-else>
                    </div>
                  </div>
                  <div class="submit" @click="forget()">
                    确认
                  </div>
                  <p class="findPass"><span @click="fogetPass=false">去登录>></span></p>
                </div>
            </div>
          </div>
        </div>
        <p class="company">© 2019 中兴通讯股份有限公司  版权所有 粤ICP备11108162号</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import login_path from '@/assets/login/login.png'
import username_path from '@/assets/login/username.png'
import username2_path from '@/assets/login/username2.png'
import password_path from '@/assets/login/password.png'
import password2_path from '@/assets/login/password2.png'
import eye_path from '@/assets/login/eye.png'
import eye2_path from '@/assets/login/eye2.png'
import qq_path from '@/assets/login/qq.png'
import qq2_path from '@/assets/login/qq2.png'
import email_path from '@/assets/login/email.png'
import email2_path from '@/assets/login/email2.png'
import code_path from '@/assets/login/code.png'
import code2_path from '@/assets/login/code2.png'
import logoFont_path from '@/assets/login/logoFont.png'
export default {
  name: 'login',
  data () {
    return {
      loginImg: login_path,
      usernameImg: username_path,
      username2Img: username2_path,
      passwordImg: password_path,
      password2Img: password2_path,
      eyeImg: eye_path,
      eye2Img: eye2_path,
      qqImg: qq_path,
      qq2Img: qq2_path,
      codeImg: code_path,
      code2Img: code2_path,
      emailImg: email_path,
      email2Img: email2_path,
      logoFont: logoFont_path,
      fogetPass: false,
      fit: 'contain',
      current: 0,
      loginMsg: {
        username: '',
        password: '',
        showpass: false,
        focus: ''
      },
      registerMsg: {
        username: '',
        password: '',
        showpass: false,
        qq: '',
        email: '',
        code: '',
        focus: ''
      },
      forgetMsg: {
        username: '',
        password: '',
        showpass: false,
        email: '',
        code: '',
        focus: ''
      }
    }
  },
  methods:{
    login(){
      console.log(this.loginMsg)
    },
    register(){
      console.log(this.registerMsg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/css">
.main{
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #282828
}
.company{
  color: #989898;
  font-size: 14px;
  width: 100%;
  text-align: center;
}
.loginLeft{
  width: 100%;
  height: 100%;
  position: relative;
  .webLogo{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: left;
    img{
      width: 330px;
      height: 80px;
      margin: 50px;
    }
  }
  .phoneLogo{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 330px;
      height: 80px;
      margin: 50px;
    }
  }
}
.loginImg{
  width: 20rem;
}
.loginBox{
  overflow: hidden;
  width: 100%;
  height: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  .findPass{
    width: 100%;
    text-align: right;
    font-size: 14px;
    margin-top: 10px;
    font-weight: 500;
    span{
      color: #7293FF;
      cursor: pointer;
    }
  }
  .loginTab div{
    cursor: pointer;
  }
  .login{
    width: 510px;
    height: 600px;
    margin-top: 200px;
    // border: 1px solid red;
    text-align: center;
    font-size: 28px;
    font-weight:600;
    color: #989898
  }
  .active{
    color: #282828
  }
  .borderBot{
    width: 100%;
    height: 2px;
    margin-top: 24px;
    border-bottom: 1px solid #DDDDDD;
    .activeLogin{
      width: 20%;
      height: 2px;
      background-color: #FFC000;
      margin-left: 15%;
      transition: all linear .5s
    }
    .activeRegister{
      width: 20%;
      height: 2px;
      background-color: #FFC000;
      margin-left: 65%;
      transition: all linear .5s
    }
  }
  .tabLogin{
    width: 100%;
    height: 500px;
    // background-color: #FFC000;
    overflow: hidden;
  }
  .tabRegister{
    width: 100%;
    height: 1000px;
    overflow: hidden;
  }
  .inputBox{
    width: 500px;
    height: 75px;
    margin: auto;
    border-radius: 4px;
    border: 1px solid #74778C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .inputBoxImg{
      width: 75px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 32px;
        height: 32px;
      }
    }
    .inputBoxText{
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      input{
        border:none;
        outline: none;
        width: 95%;
        height: 60%;
        font-size: 18px;
      }
      input:focus{
        border:none;
        outline: none;
        width: 95%;
        height: 60%;
        font-size: 18px;
      }
    }
    .inputBoxCode{
      width: 150px;
      height: 75px;
      color: #7293FF;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      div{
        height: 35px;
        line-height: 35px;
        margin-top: 20px;
        border-left: 1px solid #dddddd;
        cursor: pointer;
      }
    }
  }
    .inputActive{
      border: 1px solid #7293FF;
      color: #7293FF !important;
    }
    .user{
      margin-top: 100px;
    }
    .pass{
      margin-top: 50px;
    }
    .submit{
      width: 500px;
      height: 75px;
      margin: auto;
      margin-top: 75px;
      border-radius: 4px;
      background-color: #7293FF;
      color: #FFFFFF;
      text-align: center;
      line-height: 75px;
      font-weight: 500;
      font-size: 18px
    }
}
.slide-fade-enter-active {
  transition: all .3s ease .8s;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 1366px) {
    .loginBox{
      .login{
        margin-top: 20px;
      }
    }
}
</style>
