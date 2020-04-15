<template>
  <!-- 最上方广告 -->
  <div class="banner">
    <div class="logo" @click="go()"></div>
    <div class="client">
      <span class="login">登录</span>
      <div class="app">
        <span>看完整版</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: {},
  date() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("./");
    }
  }
};
</script>

<style less="lang" scoped>
.banner {
  width: 100%;
  height: 55px;
  background-color: #2d2d2e;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  z-index: 1000;
}
.logo {
  width: 122px;
  height: 27px;
  background: url(https://puui.qpic.cn/vupload/0/1576120792392_9vgklt9cjvk.png/0)
    0 0 no-repeat;
  background-size: 100%;
}
span {
  color: #fff;
}
.login {
  position: relative;
  padding: 0 12px;
}
.login::before {
  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;
  background: url(../../../images/glass.png) 0 0 no-repeat;
  position: absolute;
  left: -34%;
  top: 9%;
}
.app {
  display: inline-block;
  border: 1px solid #ff6022;
  padding: 5px 10px;
  border-radius: 6px;
  background-color: #ff6022;
}

</style>
