<template>
  <!-- VIT特权 -->
  <div class="vip-privilege">
    <h5>{{privilege_data.title}}</h5>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of privilege_data.list" :key="index">
        <div class="download" :class="{'frist_download':index == 0} ">
          <div class="download-1" :class="{'frist_down':index == 0} ">
            <img :src="item.img" v-if="item.img" />
            <span>{{item.name}}</span>
            <div class="frist">
              <p>{{item.Intro}}</p>
              <span class="today_text">{{item.txt}}</span>
            </div>
          </div>
          <div class="today">
            <p>{{item.summary}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "vip-privilege",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    privilege_data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      swiperOption: {
        // spaceBetween: ,
        freeMode: true,
        slidesPerView: 2,
        slidesPerColumn: 2
      }
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.vip-privilege {
  margin: 15px 0 20px 15px;
}
h5 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 15px 0;
}
/* 第一个大图 */
.frist_download {
  height: 80px;
  background-color: #ffedbf;
}
.frist_download .frist_down span {
  color: #cc9629;
}
.frist {
  height: 40px;
  display: inline-block;
  text-align: center;
}
.frist p {
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
}
.download-1 .frist span {
  text-align: left;
  color: #979797;
  font-size: 12px;
}

/* 正常模块 */
.download {
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  margin: 0 auto;
}

.download-1 {
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.download-1 img {
  /* width: 50px;
  height: 50px; */
  width: 27%;
  height: 47%;
}
.download-1 span {
  display: inline-block;
  margin-left: 10px;
  color: #f2ca5b;
  font-size: 13px;
  text-align: center;
}
.today {
  text-align: center;
}
.today p {
  color: #979797;
  font-size: 12px;
  margin-bottom: 10px;
}
</style>