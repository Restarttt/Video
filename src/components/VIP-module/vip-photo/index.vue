<template>
  <!-- 电影图片 -->
  <div class="vip-photo">
    <div class="photo_list" v-for="(item,index) of photo" :key="index" >
      <a :href="item.url">
        <div class="photo_icon" v-if="item.type > 0  && item.imgv" @click="go(index)">
          <img :src="item.imgv" />
          <i class="vip_icon">
            <img src="https://i.gtimg.cn/qqlive/images/20190528/VIP.png" v-if="item.vip == 10" />
            <img
              src="https://i.gtimg.cn/qqlive/images/20160715/only@2x.png"
              v-else-if="item.vip == 0"
            />
          </i>
          <p>{{item.name}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "vip-photo",
  props: {
    photo: {
      type: Array,
      defalut: []
    }
  },
  data() {
    return {};
  },
  methods: {
    go(a) {
      console.log(a);
      return a;
    }
  }
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.vip_icon {
  width: 37px;
  position: absolute;
  right: 1px;
}
// 持平
</style>
