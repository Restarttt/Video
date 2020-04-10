<template>
	<div class="banner">
    <div class="load"></div>
    <div class="home"></div>
  </div>
</template>

<script>
export default {
  date(){
    return{}
  },
  methods:{}

}
</script>

<style less="lang" scoped>
.banner{
  width: 100%;
  height: 44px;
  background-color: #363636;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  bottom: 0;
}
.load {
  width: 25px;
  height: 25px;
  background: url(https://vm.gtimg.cn/tencentvideo/vstyle/mobile/vip/style/app_v2/img/common/g_menubar_btn.png)  -48px 0 no-repeat;
  background-size: cover;
}
.home{
    width: 25px;
  height: 25px;
  background: url(https://vm.gtimg.cn/tencentvideo/vstyle/mobile/vip/style/app_v2/img/common/g_menubar_btn.png) -74px 0 no-repeat;
  background-size: cover;

}
  	
</style>
