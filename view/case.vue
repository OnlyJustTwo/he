<template>
  <div>
    <div class="threeBox">
      <el-row class="threeRow">
        <el-col :md="12" class="threeCol">
          <div class="wow slideInLeft">
            <div class="textBox">
              <div class="textBoxTitle">
                <div></div>
                <div>中石油四川石化公司</div>
              </div>
              <div class="textBoxList">
                <div class="textBoxDes">
                  <div class="textBoxDesTop">
                    <div></div>
                    <div>350万吨/年</div>
                  </div>
                  <div class="textBoxDesBtm">
                    柴油加氢精制装置
                  </div>
                </div>
                <div class="textBoxDes">
                  <div class="textBoxDesTop">
                    <div></div>
                    <div>压力/差压变送器</div>
                  </div>
                  <!-- <div class="textBoxDesBtm">
                    提供你宝贵意见将终身免费使用程序！
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :md="12">
          <img :src="threeOne" alt="" class="threeOneImg wow slideInRight" />
        </el-col>
      </el-row>
    </div>
    <div class="threeBox Bgblue">
      <el-row class="threeRow">
        <el-col :md="12">
          <img :src="threeTwo" alt="" class="threeOneImg wow slideInLeft" />
        </el-col>
        <el-col :md="12" class="threeCol">
          <div class="wow slideInRight">
            <div class="textBox">
              <div class="textBoxTitle">
                <div></div>
                <div>四川奥光硅业</div>
              </div>
              <div class="textBoxList">
                <div class="textBoxDes">
                  <div class="textBoxDesTop">
                    <div></div>
                    <div>3000吨/年</div>
                  </div>
                  <div class="textBoxDesBtm">
                    多晶硅项目
                  </div>
                </div>
                <div class="textBoxDes">
                  <div class="textBoxDesTop">
                    <div></div>
                    <div>压力/差压变送器</div>
                  </div>
                  <!-- <div class="textBoxDesBtm">
                    一目了然展示站点分析解决0收录！
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="threeBox">
      <el-row class="threeRow">
        <el-col :md="12" class="threeCol">
          <div class="wow slideInLeft">
            <div class="textBox">
              <div class="textBoxTitle">
                <div></div>
                <div>智能系统 一键操作</div>
              </div>
              <div class="lastThree">
                <div class="textBoxList">
                  <div class="textBoxDes">
                    <div class="textBoxDesTop">
                      <div></div>
                      <div>一键建站</div>
                    </div>
                    <div class="textBoxDesBtm">
                      一键批量拥有数万网站，简单便捷！
                    </div>
                  </div>
                  <div class="textBoxDes">
                    <div class="textBoxDesTop">
                      <div></div>
                      <div>一键发布</div>
                    </div>
                    <div class="textBoxDesBtm">
                      自动发布行业相关内容，精准发布！
                    </div>
                  </div>
                </div>
                <div class="textBoxList">
                  <div class="textBoxDes">
                    <div class="textBoxDesTop">
                      <div></div>
                      <div>一键分类</div>
                    </div>
                    <div class="textBoxDesBtm">
                      一键分配站点属性，无需频繁操作！
                    </div>
                  </div>
                  <div class="textBoxDes">
                    <div class="textBoxDesTop">
                      <div></div>
                      <div>一键管理</div>
                    </div>
                    <div class="textBoxDesBtm">
                      智能化管理，站点再多也简单明了！
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :md="12">
          <img :src="threeThree" alt="" class="threeOneImg wow slideInRight" />
        </el-col>
      </el-row>
    </div> -->
  </div>
</template>

<script>
import threeOne_url from "@/assets/invite/threeOne.png";
import threeTwo_url from "@/assets/invite/threeTwo.png";
import threeThree_url from "@/assets/invite/threeThree.png";
import { WOW } from "wowjs";
export default {
  name: "case",
  data() {
    return {
      threeOne: threeOne_url,
      threeTwo: threeTwo_url,
      threeThree: threeThree_url,
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
.Bgblue {
  background-color: #f1f5ff;
}
.threeBox {
  margin-top: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100%;
  text-align: center;
  overflow: hidden;
  .threeRow {
    width: 80%;
    margin: auto;
  }
  .threeCol {
    height: 100%;
    overflow: hidden;
    .slideInLeft {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.textBoxTitle {
  text-align: left;
  > div:first-child {
    width: 60px;
    height: 4px;
    background-color: #598cff;
  }
  > div:last-child {
    margin-top: 5px;
    font-size: 34px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(89, 140, 255, 1);
  }
}
.textBox {
  margin: 50px auto;
}
.textBoxList {
  margin-left: 100px;
}
.threeOneImg {
  width: 700px;
}
.lastThree {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:last-child {
    margin-left: 30px;
  }
}
.textBoxDes {
  margin-top: 100px;
  width: 300px;
  .textBoxDesTop {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > div:first-child {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      border: 5px solid #7293ff;
    }
    > div:last-child {
      font-size: 28px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(40, 40, 40, 1);
      margin-left: 10px;
    }
  }
  .textBoxDesBtm {
    margin-top: 10px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(116, 119, 140, 1);
    line-height: 24px;
    text-align: left;
    margin-left: 25px;
  }
}
@media screen and (max-width: 1366px) {
  .title {
    margin-top: 400px;
    color: #282828;
    .smTitle {
      font-size: 16px;
    }
  }
  .nineBox {
    width: 100%;
  }
  .threeBox {
    overflow: hidden;
    .threeRow {
      width: 100%;
    }
  }
}
</style>
