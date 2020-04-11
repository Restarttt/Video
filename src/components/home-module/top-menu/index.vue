 <!-- 内容部分main -->
<template>
  <div class="submenu">
    <h5 @click="getrandom">
      {{bomb.title}}:
      <span>{{b}}</span>
    </h5>

    <div class="content">
      <div class="content-1" v-for="(item,index) of bomb.list" :key="index">
        <div class="img-suspend">
          <img v-bind:src="item.img" />
          <div class="update">
            <!-- 右下角 -->
            <span>{{item.name}}</span>
          </div>
          <div class="member-center" v-if="item.vip ==10">
            <div class="triangle"></div>
            <span>{{item.member}}</span>
          </div>
        </div>

        <p class="big-title">{{item.name}}</p>
        <p class="small-title">{{item.summary}}</p>
      </div>
      <div class="change">
        <span>换一换</span>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "top-menu",
  props: {
    bomb: {
      type: Object,
      default: {}
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
//  内容主体
.submenu {
  width: 100%;
  margin-top: 20px;
}
h5 {
  margin: 10px 0;
  font-weight: 600;
  color: #000;
}
// 图片内容
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0 30px 0;
}

// 图片信息
img {
  height: 94.28px;
}

// 标题文字信息
.big-title {
  width: 100%;
  color: #000028;
  font-size: 14px;
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.small-title {
  color: #a2a2b6;
  font-size: 12px;
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
// 右下角文字
.img-suspend {
  position: relative;
  width: 100%;
}
.update {
  position: absolute;
  bottom: 9px;
  right: 6px;
}

.update span {
  background-color: rgba(162, 162, 182, 0.5);
  font-size: 10px;
  color: #fff;
  font-weight: 400;
  padding: 1px 4px;
}

// // 左上角的图标
.member-center {
  width: 32px;
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
}

// 换一换
.change {
  width: 100%;
  text-align: center;
}
span {
  font-size: 12px;
  color: #a2a2b6;
}
</style>