    <!-- nav部分 -->
<template>
  <div class="topnav">
    <ul>
      <li
        v-for="(item, index) of arr "
        :key="index"
        :class="{subnav :active === item.type}"
        @click="go(item.type,item.name)"
      >
        <span>{{item.name }}</span>
      </li>
    </ul>
  </div>
</template>
    
<script>
import AJAX from "../../../config/ajax";
import axios from "axios";
export default {
  name: "top-nav",
  props: {
    arr: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    num() {},
    go(type, name) {
      this.$store.commit("NAME", name);
      this.active = type;
      console.log(type);

      if (type === -1) {
        return this.$router.push("/VIP");
      }
      AJAX.getHome({
        callback: res => {
          console.log(res);
          this.all = res.data.data;
          console.log(this.all);
          this.$store.commit("NUM", this.all);
        },
        params: {
          type: type
        }
      });
    }
  },
  mounted() {
    axios
      .get("https://www.shuipingguo.com/getvideo", { params: {} })
      .then(res => {
        this.all = res.data.data;
        this.$store.commit("NUM", this.all);
      });

    // AJAX.getHome({
    //   callback: res => {
    //     this.all = res.data.data;
    //     this.$store.commit("NUM", this.all);
    //   }
    //   // params: {
    //   //   type: 1
    //   // }
    // });
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