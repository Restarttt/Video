<template>
  <div class="search">
    <!-- 搜索框 -->
    <div class="search_submit">
      <input type="submit" value="龙岭迷窟" />
      <span class="search-icon"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "vip-search",
  props: {},
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 47.8px;
  background-color: #efefef;
  line-height: 47.8px;
  text-align: center;
}
.search_submit {
  display: inline-block;
  position: relative;
  width: 93%;
  height: 28.8px;
  line-height: 50%;
}
input {
  width: 100%;
  // border: 0px;
  height: 28.8px;
  border-radius: 4px;
  text-align: left;
  padding-left: 38px;
  color: #979797;
  font-weight: 500;
  background-color: #ffffff;
}
.search-icon {
  position: absolute;
  width: 22px;
  height: 22px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAASdAAAEnQB3mYfeAAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDQvMTcvMThd5WsJAAACjUlEQVRYhe2Y33XaMBSHv/T0nXSCeIOwQdwFbukEJRuQDZwN6AT1CEQTmAlKNiAb4Anog65jIST/T+Ehv3M4lrCQPq50r650czweuWZ9uTRAmz4Bx+rrmB8bY+ZACtx6rw7ATkSKMf0D3PR1EmNMAmTAApi1NC+BDZAPhe0MaIy5BdbArxagGPQWWIrIfnJAY8wCyL3Bt1jrbPxB1cop1so/nFclsBKRfDJAY8wS+OOBZV2nTGHXHuiziGSjAQNwTyKy7tJxpK819Sx06isKqB761/nqp4hshsB5fRYOZGufTXEwd8qPY+EARGSHXZvvY6jzRRUE1Om41+rvPou6TQr5rNUZsGpqH7Ngps/SKU8mdZA3ra6arHgGqCHlTqtrETlMDajK9DnDhqOgQhZMnfIgj+0iXTalVgcBbj/QepUKb8wzhQAr5ygC76bWTp+z2Dq8dLpVOOV5qMEJoG5LV6UTwL6Zxv/Qpac4dcr7UIMQ4Gvgxx+lpCrEZi8EWHnWQ9s+OYGq+LeNNQgBuklBNICOle73VVYTTUTOADVrqSJ89oFWrJKEktPM6UQxJ6m2uDtaso0hMsasqDeEvGnHakpY99RJw/cpjpDar5u0lkDSBNgUZpZOeaMdTwkH9pTXuN9HAdVij1qdAYUu7KFwCw/ujQ77/ZBT3Qv26LjvCJZgc7/QefoVSAetwQCkeyKrQHOg8AdQz0+xYcoHe8Iun8pJGiH73CwkCvQQeF1SB/g54duFLdbyO/0DRRfIIXczKdYCTVcgrl6wR4fC66cTZG9Ab5AF1mIJ9b6618+OwPT3hRwFOIXaIC+dbqEgKXUWdY8Tfi5uwUoBS34TkcPVAMI75Ap7O7uBK7JgTP8App4sqAYgRewAAAAASUVORK5CYII=);
  background-size: 21px;
  left: 3%;
  top: 15%;
}
</style>