<template>
  <div class="key-words">
    <div class="key_list" v-for="(item,index) of key_words.key_list" :key="index">
      <a>
        <div class="list">
          <span :class="{hot_three:index == 0}" >{{item.num}}</span>
          <span class="list_title">{{item.title}}</span>
        </div>
        <i></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "key-words",
  props: {
    key_words: {
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
.key-words{
    padding: 0 15px;
  

}
.key_list {
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.hot_three {
  display: inline-block;
  width: 17px;
  height: 17px;
  background-color: #ff0000;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  font-weight: 500;
}
.number {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #ccc;
  text-align: center;
  border-radius: 4px;
}
.list_title {
  padding-left: 5px;
  font-weight: 500;
}
</style>
