    <!-- 少儿精选剧场 -->
<template>
  <span class="swiper-child">
    <h5 @click="getrandom">
      {{children_data.title}}
      <span>{{b}}</span>
    </h5>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of children_data.list" :key="index">
        <a :href="item.url">
          <span class="cartoon">
            <img :src="item.img" @click="getsubscript(index, item.name)" />
            <span class="member-center" v-if="item.vip ==10">
              <div class="triangle"></div>
              <span>{{item.member}}</span>
            </span>
            <p class="big-title">{{item.name}}</p>
            <p class="small-title" @click=" getnum">{{item.title}}</p>
          </span>
        </a>
      </swiper-slide>

      <!-- <div slot="pagination" class="swiper-pagination"></div> -->
    </swiper>
  </span>
</template>
    
<script>
export default {
  name: "child",
  props: {
    children_data: {
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
      },
      b: "",
      num: ""
    };
  },
  methods: {
    getrandom() {
      let a = Math.max(10, -10, 5, -18, 100);
      this.b = ++a;
      console.log(this.b);
    },
    // 点击打印下标和name
    getsubscript(c, d) {
      console.log(c, d);
    },
    getnum(d) {
      let num = Math.round(Math.random() * 6);
      this.num = num;
      console.log(num, d);
    }
  }
};
</script>
<style lang="less" scoped>
h5 {
  margin: 10px 0;
  font-weight: 600;
  color: #000;
}

// 图片内容
.cartoon {
  display: inline-block;
  margin-top: 20px;
  width: 100%;
}
// 图片信息
img {
  height: 94.28px;
  // margin: 0 0 3px 0;
}

// 标题文字信息
.big-title {
  color: #000028;
  font-size: 14px;
  margin-bottom: 5px;
  overflow: hidden;
}
.small-title {
  color: #a2a2b6;
  font-size: 12px;
  margin-bottom: 10px;
}
.child-1 {
  margin-bottom: 20px;
}
</style>