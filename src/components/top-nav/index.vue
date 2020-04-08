    <!-- nav部分 -->
<template>
  <div class="topnav">
    <ul>
      <li>
        
        <a href class="subnav"  @click= "go">
          精选
          <i class="subnav_first"></i>
        </a>
      </li>
      <li v-for="(item, index) of arr " :key="index">
        <a href>{{item}}</a>
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
    go(){
      return this.$router.push('/VIP')
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
.topnav .subnav {
  color: #ff6002;
  position: relative;
}
.subnav_first {
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