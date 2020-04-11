<template>
  <!-- 播放界面-->
  <div class="video">
    <div class="video-dim">
      <img src="https://puui.qpic.cn/qqvideo_ori/0/y0033rep29f_496_280/0" alt />
    </div>
    <div v-for="(item,index) of list" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: "video-info",
  props: {
    list: {
      type: Array,
      defalut: []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.video {
  width: 100%;
}
</style>
