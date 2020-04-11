
<template>
  <div class="overall">
    <vip-search></vip-search>
    <menu-bar :menubar="menubar"></menu-bar>
    <vip-photo :photo="photo_list"></vip-photo>
    <banner></banner>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import VipSearch from "../../components/VIP-module/vip-search";
import MenuBar from "../../components/VIP-module/menu-bar";
import VipPhoto from "../../components/VIP-module/vip-photo";
import Banner from "../../components/VIP-module/banner";
import AJAX from "../../config/ajax";

export default {
  components: {
    swiper,
    swiperSlide,
    VipSearch,
    MenuBar,
    VipPhoto,
    Banner
  },
  data() {
    return {
      menubar: {
        first_list: [
          "电视剧",
          "电影",
          "动漫",
          "综艺",
          "少儿",
          "纪录片",
          "音乐",
          "知识"
        ],
        second_list: ["最热", "最新", "好评"],
        third_list: [
          "全部",
          "独播",
          "院线",
          "动作",
          "冒险",
          "戏剧",
          "爱情",
          "战争",
          "恐怖",
          "犯罪",
          "悬疑",
          "惊悚",
          "科幻",
          "武侠",
          "音乐",
          "歌舞",
          "动画",
          "家庭",
          "剧情",
          "伦理",
          "记录",
          "历史"
        ],
        fourth_list: [
          "全部",
          "2020",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008",
          "2007",
          "2006"
        ],
        fifth_list: ["全部", "欧美", "华语", "日韩", "泰国", "印度", "其他"],
        sixth_list: ["全部", "奥斯卡", "高分小众", "电影节", "系列"]
      },

      photo_list: []
    };
  },
  mounted() {
    AJAX.getVIP({
      callback: res => {
        console.log(res)
        this.photo_list = res.data.data;
        
      }
    });
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>