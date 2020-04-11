<template>
  <div class="player">
    <div v-for="(item,index) of list " :key="index">{{item.list}}</div>
  </div>
</template>

<script>
export default {
  name:'player',
  props: {
    list: {
      type: String,
      defalut: []
    }
  },
  date() {
    return {};
  },
  methods: {}
};
</script>

<style less="lang" scoped>
</style>
