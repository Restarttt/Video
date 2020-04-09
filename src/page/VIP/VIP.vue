
<template>
  <div class="overall">
    <vip-search></vip-search>
    <menu-bar :menubar="menubar"></menu-bar>
    <vip-photo :photo="vip_photo"></vip-photo>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import VipSearch from "../../components/VIP-module/vip-search";
import MenuBar from "../../components/VIP-module/menu-bar";
import VipPhoto from "../../components/VIP-module/vip-photo";

export default {
  components: {
    swiper,
    swiperSlide,
    VipSearch,
    MenuBar,
    VipPhoto
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
      vip_photo: {
        photo_list: [
          {
            title: "龙岭迷窟",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200q06w7zx1585705974472/220",
            suspend: "VIP"
          },
          {
            title: "奇门遁甲",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200a7ghbkc1584601367734/220",
            suspend: "only"
          },
          {
            title: "悍战",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200i3gpva41580455616/220",
            suspend: "VIP"
          },
          {
            title: "我是山姆",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/vox06nwx47wuy5t1523599562/220",
            suspend: "VIP"
          },
          {
            title: "冰雪奇缘",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/bv8m91i5jj1w1ww1574426519/220",
            suspend: "VIP"
          },
          {
            title: "傲慢与偏见",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/dchep5ox42l26i91567664795/220",
            suspend: "VIP"
          },
          {
            title: "肖生克的救赎",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/1o29ui77e85grdr1567129471/220",
            suspend: "VIP"
          },
          {
            title: "绿皮书",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/r9umzdo0yjelfg11567422437/220",
            suspend: "VIP"
          },
          {
            title: "泰坦尼克号",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/t5jqhgw8pix81mw1567138555/220",
            suspend: "VIP"
          },
          {
            title: "穿普拉达的女王",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/5g96116jj92ww6i1567483330/220",
            suspend: "VIP"
          },
          {
            title: "阿甘正传",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/r6hc2kqgvnmiejn1567396046/220",
            suspend: "VIP"
          },
          {
            title: "心灵捕手",
            img:
              "https://puui.qpic.cn/vcover_vt_pic/0/mhl665xf8ina3t21567580702/220",
            suspend: "VIP"
          },
          {
            title: "低俗小说",
            img:"https://puui.qpic.cn/vcover_vt_pic/0/k2zh09k7oid23o0t1444896126.jpg/220",
            suspend: "VIP"
          },
          {
            title: "中国机长",
            img:"https://puui.qpic.cn/vcover_vt_pic/0/rj8uc45tm8a17wm1575030295/220",
            suspend: "VIP"
          },
          {
            title: "少年的你",
            img: "https://puui.qpic.cn/vcover_vt_pic/0/714pdmcrnqdlmdx1574668477/220",
            suspend: "VIP"
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>