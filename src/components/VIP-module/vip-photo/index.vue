<template>
  <!-- 电影图片 -->
  <div class="vip-photo">
    <div class="photo_list" v-for="(item,index) of photo.photo_list" :key="index">
      <div class="photo_icon" v-if="item.type ==1">
        <img :src="item.img" />
        <i class="vip_icon">
          <img src="https://i.gtimg.cn/qqlive/images/20190528/VIP.png" />
        </i>
        <p>{{item.title}}</p>
      </div>
      <div class="photo_icon" v-else-if="item.type ==2">
        <img :src="item.img" />
        <i class="vip_icon">
          <img src="https://i.gtimg.cn/qqlive/images/20160715/only@2x.png" />
        </i>
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
.photo_icon {
  position: relative;
}
p {
  text-align: center;
  color: #222222;
}
.vip_icon {
  width: 37px;
  position: absolute;
  right: 1px;
}
// 持平

</style>
