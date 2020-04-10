<template>
  <!-- 腾讯app安装 -->
  <div class="banner">
    <div class="banner-left">
      <div class="fork">
        <div class="fork-1"></div>
      </div>
      <div class="guild">
        <div class="guild-img"></div>
        <div class="guild_title">
          <p class="title-top">安装腾讯视频客户端</p>
          <p class="title-bottom">流行视频一网打尽</p>
        </div>
      </div>
    </div>
    <div class="download">
      <span>安装</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  date() {
    return {};
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.banner {
  width: 100%;
  height: 70px;
  background-color: rgba(33, 35, 36, 0.85);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: fixed;
  bottom: 0;
}
.banner-left {
  display: flex;
}
.fork {
  position: relative;
  width: 22px;
  height: 55px;
}
.fork-1 {
  position: absolute;
  left: 50%;
  top: 33%;
}
.fork-1::before {
  position: absolute;
  display: inline-block;
  content: "";
  width: 1px;
  height: 18px;
  background-color: #fff;
  transform: rotate(45deg);
}
.fork-1::after {
  display: inline-block;
  content: "";
  width: 1px;
  height: 18px;
  background-color: #fff;
  transform: rotate(-45deg);
}
.guild {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.guild-img {
  display: inline-block;
  width: 55px;
  height: 55px;
  background: url(https://vm.gtimg.cn/tencentvideo/vstyle/mobile/v2/style/img/common/app_icon_video.png)
    0 0 no-repeat;
  background-size: cover;
}
.guild_title {
  padding-left: 10px;
}
.title-top {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.title-bottom {
  color: #9f9f9f;
}
.download {
  width: 74px;
  height: 34px;
  border-radius: 15px;
  border: 1px solid #ff6022;
  text-align: center;
  line-height: 34px;
  box-shadow: 0 1px 3px 0 rgba(230, 230, 230, 0.1);
}
span {
  font-size: 16px;
  color: #ff6022;
  text-shadow: 0 1px 2px rgba(230, 230, 230, 0.1);
}
</style>