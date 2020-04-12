    <!-- nav部分 -->
<template>
  <div class="topnav">
    <ul>
      <li
        v-for="(item, index) of arr "
        :key="index"
        :class="{subnav :active === item.type}"
        @click="go(item.type)"
      >
        <span>{{item.name }}</span>
      </li>
    </ul>
  </div>
</template>
    
<script>
import AJAX from "../../../config/ajax";
export default {
  name: "top-nav",
  props: {
    arr: {
      type: Array,
      default: [],
      
    }
  },
  data() {
    return {
      active: -1
    };
  },
  methods: {
    go(type) {
      this.active = type;
      console.log(type);
      if (type === 0) {
        return this.$router.push("/VIP");
      }
      AJAX.getHome({
        callback: res => {
          console.log(res);
          this.all = res.data.data;
          console.log(all);
        },
        params: {
          type: type,
        }
      });
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
  height: 39.6px;
}
// 取消滚动框
.topnav ul::-webkit-scrollbar {
  display: none;
}
.topnav ul li {
  display: inline-block;
  margin-right: 20px;
}
.subnav span {
  color: #ff6002;
  position: relative;
}
.subnav span::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 2px;
  background-color: #ff6002;
  top: 26px;
  left: 8px;
}
ul li span {
  color: #272727;
  font-size: 17px;
  font-weight: 600;
}
</style>