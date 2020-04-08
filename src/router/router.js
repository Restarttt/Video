import Vue from "vue";
import VueRouter from "vue-router" //引入
import index from "../page/home/index.vue"
import jump from "../page/jump/jump.vue"
Vue.use(VueRouter); //安装  

const routes = [{
    path: "/",
    component: index
}, {
    path: "/jump",
    component: jump
}]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,

});
export default router;