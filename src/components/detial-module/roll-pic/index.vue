<template>
  <!-- 轮播图-->
  <div class="roll-pic">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of roll" :key="index">
        <div class="roll">
          <div class="roll-left">
            <div class="roll-img">
              <img :src="item.img" />
            </div>
            <span>{{item.title}}</span>
          </div>
          <div class="roll-right">
            <span class="open">打开</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "roll-pic",
  props: {
    roll: {
      type: Array,
      defalut: []
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        speed: 300
      }
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.roll-pic {
  width: 100%;
  height: 70px;
}
.roll {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.roll-img {
  width: calc(25% - 12px);
  display: inline-block;
}
.roll-img img {
  border: 1px solid rgba(0, 0, 40, 0.1);
  border-radius: 5px;
}
.roll-left span {
  color: #030303;
  font-size: 15px;
  margin-left: 10px;
}

.roll-right {
  background-color: #ff6022;
  padding: 8px 20px;
  border-radius: 5px;
}
.open {
  color: #fff;
}
</style>
