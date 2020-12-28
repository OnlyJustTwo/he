<template>
  <div class="footer">
    <div class="footerLeft">
      <div class="footerLeftMain">
        <div class="footTitle">四川思贝肯自控工程有限公司</div>
        <div class="footDes">
          Copyright © 2010 www.scsbk.com All Rights Reserved 版权所有<br />
          四川思贝肯自控工程有限公司<br />
          Sichuan Sibeiken Automation Control Engineering CO.,Ltd
        </div>
      </div>
    </div>
    <div class="footerRight">
      <div>友情链接</div>
      <div class="linktop">
        <div class="list" @click="open">霍尼韦尔中国公司</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myfooter",
  methods: {
    open() {
      window.open('http://www.honeywell.com.cn')
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.footer {
  width: 100%;
  height: 100%;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #242629;
  color: #5d6063;
  > div {
    flex: 1;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footerRight {
    width: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    > div:first-child {
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(142, 147, 152, 1);
    }
  }
}
.footerLeftMain {
  width: 350px;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  .footTitle {
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
.linktop,
.linkbtm {
  width: 550px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.linktop {
  margin-top: 25px;
  .list{
    cursor: pointer;
  }
}
@media screen and (max-width: 1366px) {
  .footerLeftMain {
    width: 500px;
    height: 200px;
  }
  .footer {
    .footerRight {
      width: 90%;
      align-items: center;
    }
  }
  .linktop,
  .linkbtm {
    justify-content: center;
    width: 700px;
  }
}
</style>
