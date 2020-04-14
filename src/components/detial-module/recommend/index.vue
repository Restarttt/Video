<template>
  <div class="recommend">
    <p>{{tour.title}}</p>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of tour" :key= "index">
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
        spaceBetween: 15,
        freeMode: true,
        slidesPerView: 3
      }
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>
p {
  font-size: 15px;
  font-weight: 600;
}
.recommed{
  height: 300px;
}
</style>