<template>
  <div class="big-theater">
    <h5 @click="getrandom">
      {{sync_data.title}}
      <span>{{b}}</span>
    </h5>
    <div class="content">
      <div
        class="content-1"
        v-for="(item,index) of sync_data.list"
        :key="index"
        :class=" {first_content: index === 0} "
      >
      <a :href="item.url">
        <div class="img-suspend">
          <img :src="item.img" />
          <div class="update">
            <span >{{item.score}}.0</span>
          </div>
          <div class="member-center" v-if="item.vip == 10">
            <div class="triangle"></div>
            <span>vip</span>
          </div>
        </div>
        <p class="big-title">{{item.name}}</p>
        <p class="small-title">{{item.summary}}</p>
        </a>
      </div>
   
    </div>
  </div>
</template>
<script>
export default {
  naem: "middle-menu",
  props: {
    sync_data: {
      type: Object,
      defalut: {}
    }
  },
  data() {
    return {
      b: ""
    };
  },
  methods: {
    getrandom() {
      let a = Math.random();
      this.b = a;
      console.log(a);
    }
  }
};
</script>

<style lang="less" scoped>
.big-theater {
  width: 100%;
  // height: 770px;
  margin-top: 20px;
}
h5 {
  margin: 10px 0;
  font-weight: 600;
  color: #000;
}
// 图片内容
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
}

// 图片信息
.content-1 {
  width: calc(50% - 5px);
}
img {
  height: 94.28px;
  // width: 100%;
}

// 标题文字信息
p.big-title {
  color: #000028;
  font-size: 14px;
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
p.small-title {
  color: #a2a2b6;
  font-size: 12px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// 第一个图片
.content-1.first_content {
  width: 100%;
}
.first_content img {
  width: 100%;
  height: 193.05px;
}
// 右下角文字
.img-suspend {
  position: relative;
  width: 100%;

}
.update {
  position: absolute;
  bottom: 8px;
  right: 6px;
}

.update span {
  background-color: rgba(162, 162, 182, 0.5);
  font-size: 10px;
  color: #fff;
  font-weight: 400;
  padding: 1px 4px;
}

// 左上角的图标
.member-center {
  height: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 4px;
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
  text-shadow: 0 1px 2px #555;
}
</style>

