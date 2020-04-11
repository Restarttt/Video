<template>
  <!-- 轮播图-->
  <div class="roll-pic">
    <swiper>
      <swiper-slide>
        <div class="roll">
          <div class="roll-left">
            <div class="roll-img"></div>
            <span></span>
          </div>
          <div class="roll-right"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "roll-pic",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.roll-pic {
  width: 100%;
  height: 70px;
}
.roll{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>
