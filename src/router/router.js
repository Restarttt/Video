import Vue from "vue";
import VueRouter from "vue-router"
import index from "../page/home/index.vue" //引入路径
import VIP from "../page/VIP/VIP.vue"
import search from "../page/search/index.vue"
import detail from "../page/detail/index.vue"
Vue.use(VueRouter); //安装  

const routes = [{
        path: "/", //路径名（主页面）
        component: index //引入的组件
    },
    {
        path: "/VIP",
        component: VIP
    },
    {
        path: "/search",
        component: search
    },
    {
        path: '/detail',
        component: detail

    }
]

const router = new VueRouter({
    mode: "history", //历史模式
    base: process.env.BASE_URL,
    routes,

}); //创建
export default router; //导出了才能被其他地方导入