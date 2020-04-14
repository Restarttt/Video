<template>
  <!-- 轮播图-->
  <div class="roll-pic">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of roll" :key="index">
        <div class="roll">
          <div class="roll-left">
            <div class="roll-img">
              <img :src="item.img" :class="{'frist':item.type === 0}" />
            </div>
            <span>{{item.title}}</span>
          </div>
          <div class="roll-right">
            <span class="open">打开</span>
          </div>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
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
        speed: 300,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.swiper-container .swiper-pagination {
  position: absolute;
  bottom: 1px;
}
.roll-pic {
  width: 100%;
  position: relative;
  margin: 15px 0;
}
.roll-pic::after {
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
.roll {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.roll-left {
  width: 73%;
  height: 70px;
  display: flex;
  align-items: center;
}
.roll-img {
  width: 85px;
  height: 48px;
}
.roll-img img {
  width: 85px;
  height: 48px;
  border: 1px solid rgba(0, 0, 40, 0.1);
  border-radius: 5px;
}
.roll-img img.frist {
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 40, 0.1);
  border-radius: 5px;
}
.roll-left span {
  width: 100%;
  line-height: 24px;
  display: inline-block;
  height: 48px;
  color: #030303;
  font-size: 15px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  font-weight: 500;
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
