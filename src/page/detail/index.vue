<template>
  <!-- 详情页 -->
  <div class="detail">
    <banner></banner>
    <video-info></video-info>
    <div class="detail-bottom">
      <roll-pic :roll="roll_pic"></roll-pic>
      <intro></intro>
      <album-list :album_list="album_list"></album-list>
      <top-menu :bomb="recommend"></top-menu>
      <child  :children_data=' teaser'></child>
      
    </div>
  </div>
</template>

<script>
import Banner from "../../components/detial-module/banner";
import Intro from "../../components/detial-module/intro";
import VideoInfo from "../../components/detial-module/video-info";
import RollPic from "../../components/detial-module/roll-pic";
import AlbumList from "../../components/detial-module/album-list";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import TopMenu from "../../components/home-module/top-menu";
import Child from "../../components/home-module/child";
// import AJAX from "../../config/ajax";

export default {
  name: "detail",
  components: {
    Banner,
    Intro,
    VideoInfo,
    RollPic,
    AlbumList,
    swiper,
    swiperSlide,
    TopMenu,
    Child
  },

  data() {
    return {
      roll_pic: [
        {
          img: "https://i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg",
          title: "看高清完整版",
          type: 0
        },
        {
          img: "https://puui.qpic.cn/vpic/0/y0843xla02v_160_90_3.jpg/0",
          title: "盘点《绿皮书》那些发人深省的经典台词，每一句都可当做人生哲理"
        },
        {
          img: "https://puui.qpic.cn/vpic/0/f0861jc7x5a_160_90_3.jpg/0",
          title: "《绿皮书》：世界上最好的炸鸡广告，奥斯卡大奖拿到手软！"
        },
        {
          img: "https://puui.qpic.cn/vpic/0/d3041i212vc_160_90_3.jpg/0",
          title: "有望最快连获奥斯卡的神人！马赫沙拉·阿里，为绿皮书狂练肖邦"
        },
        {
          img: "https://puui.qpic.cn/vpic/0/f0861jc7x5a_160_90_3.jpg/0",
          title: "绿皮书：谢利的一句台词走红网络，观众纷纷落泪，不愧是高票房！"
        }
      ],
      album_list: {
        album_title: "专辑列表",
        list: [
          {
            title: "绿皮书(原声版)",
            vip: 10
          },
          {
            title: "绿皮书(普通话版)",
            vip: 10
          },
          {
            title:
              "《绿皮书》初次见面看呆了！富丽堂皇的屋子里，穿着长袍的黑人坐在王座上",
            vip: 0
          },
          {
            title: "《绿皮书》好听哭了！雪莉博士酒吧演奏，托尼变迷弟狂打Call！",
            vip: 10
          },
          {
            title: "《绿皮书》糙汉子在钢琴家指导下，第一次给妻子写情书，感人！",
            vip: 10
          },
          {
            title: "《绿皮书》精致的钢琴家在糙汉子怂恿下第一次吃炸鸡，真香！",
            vip: 0
          }
        ]
      },
      recommend: {
        title: "为你推荐",
        list: [
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/1c15yz83pu07jzu1530520276/0?max_age=7776000",
            name: "阿帕鲁萨镇",
            summary: "重现蛮荒西部",
            max: "10",
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/1c15yz83pu07jzu1530520276/0?max_age=7776000",
            name: "阿帕鲁萨镇",
            summary: "重现蛮荒西部",
            max: "10"
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/1c15yz83pu07jzu1530520276/0?max_age=7776000",
            name: "阿帕鲁萨镇",
            summary: "重现蛮荒西部",
            max: "app"
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/1c15yz83pu07jzu1530520276/0?max_age=7776000",
            name: "阿帕鲁萨镇",
            summary: "重现蛮荒西部",
            max: "app"
          }
        ]
      },
      teaser:{
        title: '片花资讯',
        list: [
          {
            img:
              "//puui.qpic.cn/vpic/0/d0030b818bi_160_90_3.jpg/0?max_age=7776000",
            name: "《绿皮书》初次见面看呆了！富丽堂皇的屋子里，穿着长袍的黑人坐在王座上",
            summary: "重现蛮荒西部",
            max: "10",
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/1c15yz83pu07jzu1530520276/0?max_age=7776000",
            name: "阿帕鲁萨镇",
            summary: "重现蛮荒西部",
            max: "10"
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/1c15yz83pu07jzu1530520276/0?max_age=7776000",
            name: "阿帕鲁萨镇",
            summary: "重现蛮荒西部",
            max: "app"
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/1c15yz83pu07jzu1530520276/0?max_age=7776000",
            name: "阿帕鲁萨镇",
            summary: "重现蛮荒西部",
            max: "app"
          }
        ]
      
      },
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.detail-bottom{
  padding:  0 15px;
}

</style>
