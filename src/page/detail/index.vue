<template>
  <!-- 详情页 -->
  <div class="detail">
    <banner></banner>
    <player></player>
    <video-info :list="vip_list"></video-info>
    <advent></advent>
  </div>
</template>

<script>
import Banner from "../../components/detial-module/banner";
import Player from "../../components/detial-module/player";
import VideoInfo from "../../components/detial-module/video-info";
import Advent from "../../components/detial-module/advert";
import AJAX from "../../config/ajax";

export default {
  name: "detail",
  components: {
    Banner,
    Player,
    VideoInfo,
    Advent
  },

  data() {
    return {
      vip_list: []
    };
  },
  mounted() {
    AJAX.getVIP({
      callback: res => {
        console.log(res);
        this.vip_list = res.data.data;
      }
    });
  },

  methods: {}
};
</script>

<style less="lang" scoped>
</style>
