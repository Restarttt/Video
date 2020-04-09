<template>
  <!-- 菜单栏 -->
  <div class="menu-bar">
    <swiper :option="swiperOption">
      <swiper-slide class="first_swiper" v-for="(item,index) of menubar.first_list" :key="index">
        <span :class="{first_title:index == 0}">{{item}}</span>
      </swiper-slide>
    </swiper>
    <div class="swiper-scrollbar"></div>
    <div class="list">
      <ul>
        <li
          v-for="(item,index) of menubar.second_list"
          :key="index"
          :class="{first_title:index == 0}"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
        <div class="list">
      <ul>
        <li
          v-for="(item,index) of menubar.third_list"
          :key="index"
          :class="{first_title:index == 0}"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
        <div class="list">
      <ul>
        <li
          v-for="(item,index) of menubar.fourth_list"
          :key="index"
          :class="{first_title:index == 0}"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
        <div class="list">
      <ul>
        <li
          v-for="(item,index) of menubar.fifth_list"
          :key="index"
          :class="{first_title:index == 0}"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
        <div class="list">
      <ul>
        <li
          v-for="(item,index) of menubar.sixth_list"
          :key="index"
          :class="{first_title:index == 0}"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-bar",
  props: {
    menubar: {
      type: Object,
      defalut: {}
    }
  },
  data() {
    return {
      swiperOption: {
        speed: 300,
        autoplay: true,
        scrollbar: ".swiper-srollbar",
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 6
        // centeredSlides: true
      }
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
swiper {
  width: 100%;
}
.first_swiper {
  width: 10%;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  height: 48px;
}
span {
  // margin: 0 10px 0 0;
  // display: inli;
  white-space: nowrap;
  color: #222222;
  font-weight: 500;
}
.first_title {
  border: 1px solid #ff6a00;
  color: #ff6a00;
  border-radius: 18px;
  padding: 5px 14px;
}
.first_title span {
  color: #ff6a00;
}
// 列表
.list {
  width: 100%;
  border-bottom: 1px solid #ccc;
  height: 48px;
  display: flex;
  overflow: hidden;
  overflow-x: auto;
}
ul {
  display: flex;
  align-items: center;
  padding-left: 10px;
}
ul li {
  margin: 0 22px 0 0;
}
</style>
