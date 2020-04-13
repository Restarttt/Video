<template>
  <!-- 详情页 -->
  <div class="detail">
    <banner></banner>
    <video-info></video-info>
    <div class="detail-bottom">
    <roll-pic :roll="roll_pic"></roll-pic>
    <intro></intro>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/detial-module/banner";
import Intro from "../../components/detial-module/intro";
import VideoInfo from "../../components/detial-module/video-info";
import RollPic from "../../components/detial-module/roll-pic";
// import AJAX from "../../config/ajax";

export default {
  name: "detail",
  components: {
    Banner,
    Intro,
    VideoInfo,
    RollPic
  },

  data() {
    return {
      roll_pic: [
        {
          img: "https://i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg",
          title: "看高清完整版"
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
      ]
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>

</style>
