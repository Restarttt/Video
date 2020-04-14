<template>
  <!-- 评论区 -->
  <div class="comment">
    <p>{{comment_data.title}}</p>
    <div class="comment-user" v-for="(item,index) of comment_data.list" :key="index">
      <div class="user">
        <img :src="item.img" />
        <span>{{item.name}}</span>
        <div class="vip-grade"></div>
      </div>
      <p>{{item.summary}}</p>
    </div>
    <div class="client">
      <div class="client-img"></div>
      <span>打开腾讯视频，参与17029条热评大讨论</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: {
    comment_data: {
      type: Object,
      defalut: {}
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style less="lang" scoped>
p {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.comment {
  width: 100%;
  margin: 15px 0;
}

.user {
  display: flex;
  margin: 10px 0;
  align-items: center;
}
.comment-user {
  margin: 20px 0;
}
.comment-user span {
  margin: 0 10px;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.comment-user p {
  font-size: 13px;
  margin: 15px 0;
  font-weight: 400;
}
/* 打开客户端 */
.client {
  width: 100%;
  display: inline-block;
  text-align: center;
}
.client-img{
    display: inline-block;
    width: 25px;
    height: 100%;
    background: url(https://puui.qpic.cn/vupload/0/common_logo_square.png/0)  no-repeat;
}
.client span {
  color: #222;
  font-size: 15px;
  border: 1px solid #e6e6e6;
  padding: 8px 15px;
  border-radius: 5px;
}
</style>