<template>
  <div class="top-search">
    <div class="pic"></div>
    <div class="search_box">
      <input type="text" value="龙岭迷窟" />
    </div>
    <span @click="go">返回</span>
  </div>
</template>

<script>
export default {
  name: "top-search",
  props: {},
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/");
    }
  }
};
</script>

<style less="lang" scoped>
.top-search {
  width: 100%;
  height: 55.3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}
.pic {
  width: 76px;
  height: 29px;
  background: url(https://vm.gtimg.cn/tencentvideo/vstyle/mobile/v2/style/img/common/search_logo.png)
    0 0 no-repeat;
  background-size: cover;
}
.search_box {
  width: 60%;
  height: 33.3px;
  border-radius: 15px;
  background-color: rgba(#5dcf0c, #2dbe8f, #03b0ff);
}
input {
  width: 100%;
  height: 33.3px;
  border: 1px solid #ccc;
  padding-left: 10px;
  background-color: #fff;
}
span {
  color: #383838;
  font-weight: 500;
}
</style>
