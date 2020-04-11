<template>
  <!-- 详情页 -->
  <div class="detail">
    <banner></banner>
    <player></player>
    <video-info ></video-info>
    <roll-pic></roll-pic>
  </div>
</template>

<script>
import Banner from "../../components/detial-module/banner";
import Player from "../../components/detial-module/player";
import VideoInfo from "../../components/detial-module/video-info";
import RollPic from "../../components/detial-module/roll-pic";
// import AJAX from "../../config/ajax";

export default {
  name: "detail",
  components: {
    Banner,
    Player,
    VideoInfo,
    RollPic 
  },

  data() {
    return {
      roll_pic:{
        roll:[
          

        ]
      }
      
    };
  },
  // mounted() {
  //   AJAX.getVIP({
  //     callback: res => {
  //       console.log(res);
  //       this.vip_list = res.data.data;
  //     }
  //   });
  // },

  methods: {}
};
</script>

<style less="lang" scoped>
</style>
