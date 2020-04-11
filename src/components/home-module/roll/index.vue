  <!-- swiper -->
<template>
  <div class="roll">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,Index) in swiper_data.list" :key="Index" >
        <div class="big-pic" @click="go(item.type)">
          <div class="img-suspend">
            <img :src="item.img" class="full-card" />
            <div class="member-center" v-if="item.vip == 10">
              <div class="triangle"></div>
              <span>VIP</span>
            </div>
          </div>

          <div class="swiper-title">
            <span>{{item.summary}}</span>
          </div>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
    
<script>
export default {
  name: "roll",
  props: {
    swiper_data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      message: "1",
      message2: "5",

      swiperOption: {
        speed: 300,
        autoplay: true,
        spaceBetween: 1,
        // Effects: fade,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      }
    };
  },
  methods: {
     go(a) {
      console.log(a);
      if (a == 1) {
        return this.$router.push("/detail");
      }
    }
  }
};
</script>
<style lang="less" scoped>
//轮播图
.roll {
  width: 100%;
  position: relative;
  background-image: -webkit-linear-gradient(90deg, #f2f4f5, #fff 59%);
}
.big-pic {
  display: inline-block;
}
.big-pic img {
  margin-top: 3%;
  height: 193.11px;
}
.swiper-title span {
  display: inline-block;
  width: 84%;
  font-size: 14px;
  color: #000028;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.swiper-pagination {
  width: 12%;
  font-size: 14px;
  color: #000028;
  position: absolute;
  left: 88%;
  bottom: 5px;
  background-color: #f2f4f5;
  font-weight: 600;
}
// // 左上角的图标
.img-suspend {
  position: relative;
  // height: 94.28px;
}
.member-center {
  display: flex;
  align-items: center;
  position: absolute;
  top: 15px;
}
.triangle {
  width: 0;
  height: 0;
  border: 6px solid #ff6002;
  border-right: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-top: 6px solid transparent;
}

.member-center span {
  font-size: 10px;
  color: #fff;
  text-shadow: 0 1px 2px #555;
  font-weight: 400;
  position: relative;
  left: -3px;
}
</style>