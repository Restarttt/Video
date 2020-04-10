<template>
  <div class="overall">
    <top-seach></top-seach>
    <main-nav :main_nav="main_nav"></main-nav>
    <key-words :key_words="key_words"></key-words>
    <banner></banner>
  </div>
</template>

<script>
import TopSeach from "../../components/search-module/top-search";
import MainNav from "../../components/search-module/main-nav";
import KeyWords from "../../components/search-module/key-words";
import Banner from "../../components/search-module/banner";

export default {
  components: {
    TopSeach,
    MainNav,
    KeyWords,
    Banner
  },
  data() {
    return {
      main_nav: {
        nav_list: [
          "热搜",
          "电视剧",
          "少儿",
          "综艺",
          "电影",
          "动漫",
          "明星",
          "游戏",
          "音乐",
          "热点",
          "实时"
        ]
      },
      key_words: {
        key_list: [
          {
            num: 1,
            title: "王牌对王牌  第五季",
            icon: ""
          },
          {
            num: 2,
            title: "我是余欢水",
            icon: ""
          },
          {
            num: 3,
            title: "龙岭迷窟",
            icon: ""
          },
          {
            num: 4,
            title: "安家",
            icon: ""
          },
          {
            num: 5,
            title: "如懿传",
            icon: ""
          },
          {
            num: 6,
            title: "冰糖炖雪梨",
            icon: ""
          },
          {
            num: 7,
            title: "大鱼",
            icon: ""
          },
          {
            num: 8,
            title: "小猪佩奇 第一季",
            icon: ""
          },
          {
            num: 9,
            title: "极限挑战 第二季",
            icon: ""
          },
          {
            num: 10,
            title: "三生三世枕上书",
            icon: ""
          },
            {
            num: 10,
            title: "三生三世枕上书",
            icon: ""
          },
            {
            num: 10,
            title: "三生三世枕上书",
            icon: ""
          },
                {
            num: 10,
            title: "三生三世枕上书",
            icon: ""
          },
                {
            num: 10,
            title: "三生三世枕上书",
            icon: ""
          },
                {
            num: 10,
            title: "三生三世枕上书",
            icon: ""
          },
                {
            num: 10,
            title: "三生三世枕上书",
            icon: ""
          },
                {
            num: 10,
            title: "三生三世枕上书",
            icon: ""
          },
        ]
      }
    };
  },
  method: {}
};
</script>

<style lang="less" scoped>
.overall {
  width: 100%;

}
</style>
