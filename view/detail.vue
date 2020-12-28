<template>
  <div class="content">
    <div class="top">
      <img
        class="logo"
        :src="require('@/assets/logo.jpg')"
        alt=""
      >
      <el-button
        type="danger"
        icon="el-icon-back"
        circle
        class="back"
        @click="goback"
      ></el-button>
    </div>
    <el-card class="card">
      <div
        slot="header"
        class="clearfix"
      >
        <h2 v-if="detailMsg.title">{{detailMsg.title}}</h2>
      </div>
      <img
        v-if="detailMsg.bigImg"
        :src="detailMsg.bigImg"
        alt=""
      >
      <p
        v-if="detailMsg.content"
        v-html="detailMsg.content"
      ></p>
      <p v-if="detailMsg.date">{{detailMsg.date}}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailMsg: {
        bigImg: null,
        title: null,
        content: null,
        date: null,
      },
    };
  },
  mounted() {
    ["bigImg", "title", "content", "date"].map((val) => {
      if (this.$route.params.hasOwnProperty(val)) {
        this.$set(this.detailMsg, val, this.$route.params[val]);
      }
    });
  },
  components: {},

  computed: {},

  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang='scss' scoped>
.content {
  width: 100%;
  overflow: hidden;
  padding: 0 10%;
  box-sizing: border-box;
}
.logo {
  width: 20%;
}
.card {
  width: 80%;
  margin: 5% auto;
  line-height: 50px;
  font-size: 20px;
  padding: 10%;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .back {
    margin-right: 10%;
  }
}
@media screen and (max-width: 1366px) {
  .logo {
    width: 40%;
  }
  .back {
    margin-right: 20%;
  }
  .card {
    width: 80%;
    margin: 5% auto;
    line-height: 50px;
    font-size: 20px;
    padding: 10%;
  }
}
</style>