<template>
  <div v-for="(item,index) of list " :key="index">{{item.list}}</div>
</template>

<script>
import AJAX from "../../config/ajax";
export default {
  // components:{AJAX},
  date() {
    return {
      list: []
    };
  },
  mounted() {
    AJAX.getVIP({
      callback: res => {
        this.list = res.data.data;
      }
    });
  },
  methods: {}
};
</script>

<style less="lang" scoped>
</style>
