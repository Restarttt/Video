<template>
  <!-- 专辑列表 -->
  <div class="album-list">
    <div class="promotion">
      <span class="promotion_title">《奇门遁甲》福利加赠！VIP开宝箱 赢华为Mate30</span>
    </div>
    <div class="album">
      <p>{{album_list.album_title}}:</p>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of album_list.list" :key="index">
          <div class="ver">
            <ul class="version">
              <li class="versions">
                <span :class="{'frist_ver':index === 0}">{{item.title}}</span>
              </li>
            </ul>
            <div class="vip" v-if=" item.vip === 10">
              <img src="https://puui.qpic.cn/vupload/0/20190920_z2zuiu904a/0?max_age=7776000" alt />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "album-list",
  props: {
    album_list: {
      type: Object,
      defalut: {}
    }
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 2
      }
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.album-list {
  width: 100%;
  margin: 30px 0 15px 0;
}
.promotion span.promotion_title {
  color: #fff;
  font-size: 15px;
  padding: 10px 4px;
  white-space: nowrap;
  background-color: #e5c057;
  border-radius: 5px;
}
.album {
  margin-top: 20px;
}
p {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.ver {
  width: 100%;
  height: 80px;
  position: relative;
}
.vip {
  width: 22px;
  height: 13px;
  position: absolute;
  top: 0;
  right: 0;
}

li{
  width: 100%;
  text-align: center;
  line-height: 80px;
  background-color: #f6f8fa;
  border-radius: 3px;
}
span {
  width: 100%;
  display: inline-block;
  font-weight: 500;
}
.frist_ver {
  color: #ff6022;
}
</style>