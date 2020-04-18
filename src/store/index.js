import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
    // num: 0,
    data: [],
    name: '',
    page: []
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})