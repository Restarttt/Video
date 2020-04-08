import Vue from "vue";
import VueRouter from "vue-router"
import index from "../page/home/index.vue" //引入路径
import VIP from "../page/VIP/VIP.vue"
Vue.use(VueRouter); //安装  

const routes = [{
        path: "/index", //路径名
        component: index //引入的组件
    },
    {
        path: "/VIP",
        component: VIP
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,

});
export default router;