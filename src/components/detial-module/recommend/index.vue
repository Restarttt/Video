<template>
  <div class="recommend">
    <h2>{{tour.title}}</h2>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of tour.list" :key="index">
        <div class="recommend_list">
          <img :src="item.img" />
          <p>{{item.name}}</p>
          <div class="download">
            <span>下载</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    tour: {
      type: Object,
      defalut: {}
    }
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 60,
        freeMode: true,
        slidesPerView: 3
      }
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>
h2 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 15px 0;
}
.recommed{
  width:100%;
}
.recommed_list {
  width:56%;
  height: 204.8px;
  text-align: center;

}
.recommed_list img{
  display: inline-block;

}
p {
  color: #000;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-weight: 500;
  margin:  5px 0 10px 0;
}
.download {
  width: 64px;
  height: 32px;
  border: 1px solid #ebebeb;
  text-align: center;
  margin: 0 auto;
  line-height: 32px;
    border-radius: 5px;
}
span {
  display: inline-block;
  border: 1px solid #ebebeb;

  opacity: 0.5;
  text-align: center;
}
</style>