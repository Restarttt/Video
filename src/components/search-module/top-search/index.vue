<template>
  <!-- 搜索框 -->
  <div class="top-search">
    <div class="pic"></div>
    <div class="search_box">
      <input type="text" value="龙岭迷窟" />
      <div class="delete">
        <div class="fork">
          <i></i>
        </div>
      </div>
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
/* 搜索框 */
.search_box {
  width: 60%;
  height: 33.3px;
  border-radius: 15px;
  position: relative;
  background-image: linear-gradient(90deg, #5dcf0c 0, #2dbe8f 30%, #03b0ff);
}
input {
  width: 98.555%;
  height: 29px;
  border-radius: 15px;
  padding-left: 10px;
  background-color: #fff;
  position: absolute;
  left: 1.2px;
  bottom: 2.4px;
}
/* 删除按钮 */
.delete {
  display: inline-block;
  position: absolute;
  width: 19px;
  height: 19px;
  background-color: #cdcdcd;
  border-radius: 50%;
  right: 4%;
  top: 6px;
}
.fork{
  position: relative;
  
}
i{
  position: absolute;
  left: 50%;
  top:5px;
}
i::before{
  content: '';
  display: inline-block;
  position: absolute;
  width: 1px;
  height: 9px;
  background-color: #fff;
  transform: rotate(45deg);

}
i::after{
  content: '';
  display: inline-block;
  position: absolute;
  width: 1px;
  height: 9px;
  background-color: #fff;
  transform: rotate(-45deg);

}
span {
  color: #383838;
  font-weight: 500;
}
</style>
