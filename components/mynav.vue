<template>
  <div class="main">
    <div class="navBox hidden-md-and-down">
      <div class="navContent">
        <div class="logo">
          <img :src="logo" alt="" />
        </div>
        <div class="navList">
          <div class="navLists" v-if="navLists">
            <div
              v-for="(nav, index) in navLists"
              :key="index"
              @click="gotoUrl(nav.route, index)"
            >
              <div>{{ nav.name }}</div>
              <div class="border" v-if="active == index"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden-md-and-up litNav">
      <img :src="litlogo" alt="" class="openNav" @click="Drawer(true)" />
      <el-drawer
        title="我是标题"
        :visible="drawer"
        :with-header="false"
        :append-to-body="true"
      >
        <div class="drawerBox">
          <div class="litlogo">
            <img :src="litlogo" alt="" />
          </div>
          <div
            class="navList"
            v-for="(nav, index) in navLists"
            :key="index"
            @click="gotoUrl(nav.route, index)"
          >
            <div>{{ nav.name }}</div>
            <div class="border" v-if="active == index"></div>
          </div>
          <div class="button" @click.stop="Drawer(false)">
            <div>
              <div class="buttonImg">
                <img :src="right" alt="" />
              </div>
              <div>返回</div>
            </div>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import logo_url from "@/assets/login/logoFont.png";
import litlogo_url from "@/assets/login/LOGO.png";
import headImg_url from "@/assets/homePage/headImg.png";
import right_url from "@/assets/homePage/right.png";
export default {
  name: "mynav",
  data() {
    return {
      logo: logo_url,
      litlogo: litlogo_url,
      headImg: headImg_url,
      right: right_url,
      active: "0",
      drawer: false,
      navLists: [
        {
          name: "首页",
          route: "homePage",
        },
        {
          name: "关于思贝肯",
          route: "buildStation",
        },
        {
          name: "最新动态",
          route: "feedback",
        },
        {
          name: "产品展示",
          route: "product",
        },
        {
          name: "工程案例",
          route: "case",
        },
        {
          name: "应用技术",
          route: "application",
        },
        {
          name: "招贤纳士",
          route: "joinUs",
        },
        {
          name: "联系我们",
          route: "contactUs",
        },
        {
          name: "工程技术",
          route: "technology",
        },
      ],
    };
  },
  created() {
    if (this.$route.name == "homePage") {
      this.active = 0;
    } else if (this.$route.name == "buildStation") {
      this.active = 1;
    } else if (this.$route.name == "feedback") {
      this.active = 2;
    } else if (this.$route.name == "product") {
      this.active = 3;
    } else if (this.$route.name == "case") {
      this.active = 4;
    } else if (this.$route.name == "application") {
      this.active = 5;
    } else if (this.$route.name == "joinUs") {
      this.active = 6;
    } else if (this.$route.name == "contactUs") {
      this.active = 7;
    } else if (this.$route.name == "technology") {
      this.active = 8;
    }
  },
  methods: {
    gotoUrl(route, num) {
      this.$nextTick(() => {
        this.active = num;
      });
      if (this.$route.name == route) {
        return;
      } else {
        this.$router.push({ name: route });
      }
      this.drawer = false;
    },
    Drawer(val) {
      this.$nextTick(() => {
        this.drawer = val;
      });
    },
  },
};
</script>

<style  lang="scss" scoped type="text/css">
@import "~@/assets/css/main.scss";
.main {
  overflow: hidden;
}
.drawerBox {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  text-align: center;
  color: $fontColor;
  img {
    width: 80%;
    margin-top: 20px;
  }
  .navList {
    margin-top: 50px;
  }
  .login {
    width: 100%;
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .button {
    width: 100%;
    height: 48px;
    background: $red;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 50px;
    & > div {
      width: 160px;
      height: 48px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .buttonImg {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        transform: rotateY(180deg);
        width: 38px;
        height: 10px;
        margin-bottom: 20px;
      }
    }
  }
}
.litNav {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  line-height: 120px;
  text-align: center;
  border-radius: 100%;
  background-color: rgba(1, 39, 86, 0.5);
  z-index: 19;
}
.openNav {
  width: 60px;
}
.navBox {
  width: 100%;
  height: 150px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #ffffff;
  color: $fontColor;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.navContent {
  width: 90%;
  height: 100%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $fontColor;
  .navList {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 22px;
    font-weight: 500;
    .navLists {
      width: 60%;
      height: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        text-align: center;
        .border {
          margin: auto;
          width: 50px;
          height: 3px;
          background-color: $red;
        }
      }
    }
  }
  // .login {
  //   cursor: pointer;
  //   width: 100px;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }
}
</style>
