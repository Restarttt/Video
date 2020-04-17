<template>
  <div class="overall">
    {{getdata}}
    <big-logo></big-logo>
    <top-nav :arr="arr"></top-nav>
    <div class="all" v-for="(item, index) of all" :key="index">
      <roll :swiper_data="item" v-if="item.type == 1"></roll>
      <top-menu :bomb="item" v-if="item.type == 3"></top-menu>
      <child :children_data="item" v-if="item.type == 2"></child>
      <middle-menu :sync_data="item" v-if="item.type == 4"></middle-menu>
      <top-menu :bomb="item" v-if="item.type == 5"></top-menu>
    </div>
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
      all: [],
      arr: [
        {
          name: "精选",
          type: 5
        },
        {
          name: "电视剧",
          type: 2
        },
        {
          name: "VIP",
          type: 0
        },
        {
          name: "电影",
          type: 1
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
          type: ""
        },
        {
          name: "娱乐",
          type: 5
        },
        {
          name: "潮音",
          type: ""
        },
        {
          name: "游戏",
          type: ""
        },
        {
          name: "纪录片",
          type: ""
        }
      ]
    };
  },
  computed: {
    getdata() {
      this.all = this.$store.state.data;
      console.log(this.all);
    }
  },
  mounted() {
    AJAX.getHome({
      callback: res => {
        console.log(res);
        this.all = res.data.data;
      }
      // params: {
      //   type: 2
      // }
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

