<template>
  <div class="overall">
    <big-logo></big-logo>
    <top-nav :arr="arr"></top-nav>
    <roll :swiper_data="swiper_data"></roll>
    <top-menu :bomb="bomb"></top-menu>
    <top-menu :bomb="bomb"></top-menu>
    <child :children_data="children"></child>
    <middle-menu :sync_data="sync_data"></middle-menu>
    <top-menu :bomb="bomb"></top-menu>
    <middle-menu :sync_data="hot"></middle-menu>
  </div>
</template>
<script>
import BigLogo from "../../components/home-module/big-logo";
import TopNav from "../../components/home-module/top-nav";
import TopMenu from "../../components/home-module/top-menu";
import Child from "../../components/home-module/child";
import MiddleMenu from "../../components/home-module/middle-menu";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Roll from "../../components/home-module/roll";
import AJAX from "../../config/ajax";

export default {
  components: {
    BigLogo,
    TopNav,
    TopMenu,
    Child,
    MiddleMenu,
    swiper,
    swiperSlide,
    Roll
  },

  data() {
    return {
      swiper_data: {},
      bomb: { menmber: "自制", vipp: "vip", status: 1 },
      sync_data: {},
      hot: {},
      children: {},
      arr: [
        {
          name: "精选",
          type: -1
        },
        {
          name: "电视剧",
          type: 0
        },
        {
          name: "VIP",
          type: 1
        },
        {
          name: "电影",
          type: 2
        },
        {
          name: "综艺",
          type: 3
        },
        {
          name: "动漫",
          type: 4
        },
        {
          name: "少儿",
          type: 5
        },
        {
          name: "娱乐",
          type: 6
        },
        {
          name: "潮音",
          type: 7
        },
        {
          name: "游戏",
          type: 8
        },
        {
          name: "纪录片",
          type: 9
        }
      ]
    };
  },
  mounted() {
    AJAX.getHome({
      callback: res => {
        console.log(res);
        this.swiper_data = res.data.data[0];
        this.children = res.data.data[1];
        this.bomb = res.data.data[2];
        console.log(this.bomb)
        this.sync_data = res.data.data[3];
        this.hot = res.data.data[4];
      }
    });
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.overall {
  padding: 5px 15px;
}

// // 左上角的图标
.member-center {
  width: 32px;
  height: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 4px;
}
.triangle {
  width: 0;
  height: 0;
  border: 6px solid #ff6002;
  border-right: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-top: 6px solid transparent;
}

.member-center span {
  font-size: 10px;
  color: #fff;
  text-shadow: 0 1px 2px #555;
  font-weight: 400;
  position: relative;
  left: -3px;
}
</style>  

