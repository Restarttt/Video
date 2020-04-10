<template>
<!-- 关键字之类的 -->
  <div class="key-words">
    <div class="key_list" v-for="(item,index) of key_words.key_list" :key="index">
      <a>
        <div class="list">
          <span
            :class="{'hot_frist':index===0,'number':index > 2,'hot_second':index === 1,'hot_three' :index ===2}"
          >{{item.num}}</span>
          <span class="list_title">{{item.title}}</span>
        </div>
        <!-- <i v-if="item.status == 0" class="line"></i>
        <i v-if="item.status == 1" class="go-up"></i>
        <i v-if="item.status == 2" class="decline"></i> -->
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
.key-words {
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
.hot_frist {
  display: inline-block;
  width: 17px;
  height: 18px;
  background-color: #e42418;
  text-align: center;
  border-radius: 2px;
  color: #fff;
  font-weight: 500;
}
.hot_second {
  display: inline-block;
  width: 17px;
  height: 18px;
  background-color: #ff7100;
  text-align: center;
  border-radius: 2px;
  color: #fff;
  font-weight: 500;
}
.hot_three {
  display: inline-block;
  width: 17px;
  height: 18px;
  background-color: #ffb900;
  text-align: center;
  border-radius: 2px;
  color: #fff;
  font-weight: 500;
}
.number {
  font-size: 12px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #e6e6e6;
  color: #878787;
  text-align: center;
  border-radius: 4px;
}
.list_title {
  padding-left: 5px;
  font-weight: 500;
}

/* 持平 */
.line{
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url('../../../images/down.png');
}
/* 上升 */
/* 下降 */
</style>
