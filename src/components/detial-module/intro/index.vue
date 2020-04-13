<template>
  <div class="intro">
    <div class="intro-top">
      <p>绿皮书</p>
      <span>9.2分 ·</span>
      <span>VIP</span>
      <span>· 8886.3万次播放</span>
    </div>
    <div class="intro-bottom">
      <div class="blue-ray"></div>
      <div class="service"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "intro",
  props: {
    list: {
      type: String,
      defalut: []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.intro {
  width: 100%;
  padding: 0 20px;
  position: relative;
}
.intro::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 16px;
  width: calc(100% - 16px);
  height: 1px;
  transform: scaleY(0.5);
  transform-origin: 0 0;
  background: #848494;
  content: "";
  opacity: 0.1;
}
.intro-top p {
  font-size: 18px;
  color: #000028;
  font-weight: 600;
  margin-bottom: 10px;
}
span {
  font-size: 13px;
  font-weight: 400;
  color: #848494;
}
span:nth-child(3) {
  color: #ff7b00;
}
</style>
