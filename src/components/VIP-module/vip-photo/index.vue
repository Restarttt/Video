<template>
  <!-- 电影图片 -->
  <div class="vip-photo">
    <div class="photo_list" v-for="(item,index) of photo.photo_list" :key="index">
      <div class="photo_icon">
        <img :src="item.img" />
        <!-- <i>
          <img
            src="https://i.gtimg.cn/qqlive/images/20160715/only@2x.png"
            v-if="item.suspend == vip "
          />
        </i>
        <i>
          <img
            src="https://puui.qpic.cn/vcover_vt_pic/0/mzc00200a7ghbkc1584601367734/220"
            v-if="item.suspend == only"
          />
        </i> -->
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vip-photo",
  props: {
    photo: Object,
    defalut: {}
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.vip-photo {
  width: 100%;
  padding: 10px 3px;
  background-color: #efefef;
}
.photo_list {
  display: inline-block;
  width: calc(33% - 7px);
  position: relative;
  margin: 0 4px 8px;
}
// img::after {
//   content: "";
//   color: ;
// }
p {
  text-align: center;
  color: #222222;
}
</style>
