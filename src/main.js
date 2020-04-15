import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router'
import store from './store/'
import './style/common'
import './config/rem'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

// Vue.use(VueRouter)
// const router = new VueRouter({
//     routes
// })
Vue.use(VueAwesomeSwiper)
new Vue({
    router,
    store,
}).$mount('#web')