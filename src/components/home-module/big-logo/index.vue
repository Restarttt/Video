  <!-- logo部分 -->
<template>
  <div class="biglogo">
    <div class="logo-left">
      <a href="https://m.v.qq.com/index.html">
        <img
          class="logo"
          src="//puui.qpic.cn/vupload/0/1570516378024_vr59hnsql8.png/0"
          height="24px"
        />
      </a>
    </div>
    <div class="serach">
      <input type="text" value="九州天空城2" @click="go" />
      <i></i>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "big-logo",
  props: {},
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/search");
    }
  }
};
</script>
<style lang="less" scoped>
.biglogo {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-left {
  height: 24px;
}
.serach input {
  width: 213%;
  height: 30px;
  border-radius: 5px;
  background-color: #f6f5f7;
  color: #b3b3b3;
  position: relative;
  left: -82px;
  padding-left: 15px;
}
.logo {
  width: 40%;
}
</style>