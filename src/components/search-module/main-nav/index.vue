<template>
  <div class="main-nav">
    <ul>
      <li v-for="(item,index) of main_nav.nav_list" :key="index" :class="{frist_nav:index==0}">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "main-nav",
  props: {
    main_nav: {
      type: Object,
      defalut: {}
    }
  },
  date() {
    return {};
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.main-nav {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  margin: 8px 0;
  padding: 10px 15px;
}
/* 取消scrollbar */
.main-nav::-webkit-scrollbar {
  display: none;
}
ul {
  display: flex;
}
span {
  color: #222;
  font-weight: 400;
  margin: 0 20px 0 0;
}
.frist_nav span {
  color: #ff6022;
  font-weight: 700;
  position: relative;
}
.frist_nav span::after {
  content: "";
  width: calc(100% - 9px);
  height: 2px;
  background-color: #ff6022;
  position: absolute;
  display: inline-block;
  bottom: -6px;
  left: 4px;
}
</style>
