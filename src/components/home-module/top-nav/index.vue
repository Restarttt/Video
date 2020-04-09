    <!-- nav部分 -->
<template>
  <div class="topnav">
    <ul>
      <li
        v-for="(item, index) of arr "
        :key="index"
        :class="{subnav :index == 0}"
        @click="go(item.type)"
      >
        <a href>{{item.name }}</a>
      </li>
    </ul>
  </div>
</template>
    
<script>
export default {
  name: "top-nav",
  props: {
    arr: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    go(a) {
      console.log(a);
      if (a == 1) {
        return this.$router.push("/VIP");
      }
    }
  }
};
</script>
<style lang="less" scoped>
// nav部分
.topnav {
  height: 39.6px;
}
.topnav ul {
  overflow-x: auto;
  white-space: nowrap;
}
// 取消滚动框
.topnav ul::-webkit-scrollbar {
  display: none;
}
.topnav ul li {
  display: inline-block;
  margin-right: 20px;
}
.subnav a {
  color: #ff6002;
  position: relative;
}
.subnav a:after {
  position: absolute;
  width: 10%;
  height: 2px;
  background-color: #ff6002;
  top: 28px;
  left: 9px;
}
ul li a {
  color: #272727;
  font-size: 17px;
  font-weight: 600;
}
</style>