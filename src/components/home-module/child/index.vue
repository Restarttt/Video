    <!-- 少儿精选剧场 -->
<template>
  <div class="swiper-child">
    <h5 @click="getrandom">
      {{children_data.title}}:
      <span>{{b}}</span>
    </h5>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of children_data.list" :key="index">
        <a :href="item.url">
          <span class="cartoon">
            <div class="img-suspend">
              <img :src="item.img" @click="getsubscript(index, item.name)" />
              <div class="update">
                <!-- 右下角 -->
                <span v-if="item.max">全{{item.max}}集</span>
                <span v-if="item.time">{{item.time}}</span>
              </div>
            </div>  
            <p class="big-title">{{item.name}}</p>
            <p class="small-title" @click=" getnum">{{item.title}}</p>
          </span>
        </a>
      </swiper-slide>

      <!-- <div slot="pagination" class="swiper-pagination"></div> -->
    </swiper>
  </div>
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
        spaceBetween: 15,
        freeMode: true,
        slidesPerView: 2.5
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
.swiper-child{
  margin:  25px 0;

}
// 图片内容
.cartoon {
  display: inline-block;
  margin: 10px 0;
  width: 100%;
  height: 136px;
  position: relative;
}
// 图片信息
img {
  // height: 94.28px;
  margin: 0 0 3px 0;
  border-radius: 5px;
}

// 标题文字信息
.big-title {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  color: #000028;
  margin-bottom: 5px;
  font-weight: 500;
}
.small-title {
  color: #a2a2b6;
  font-size: 12px;
  margin-bottom: 10px;
}
.child-1 {
  margin-bottom: 20px;
}
// 右下角文字
.img-suspend {
  position: relative;
  width: 100%;
}
.update {
  position: absolute;
  bottom: 11px;
  right: 6px;
}

.update span {
  background-color: rgba(162, 162, 182, 0.5);
  font-size: 10px;
  color: #fff;
  font-weight: 400;
  padding: 1px 4px;
}

</style>