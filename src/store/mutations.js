const ADD_NUM = 'ADD_NUM'
const NUM = 'NUM'
const NAME = 'NAME'
const HOME = 'HOME'

export default {
    //点击进入下一题
    // [ADD_NUM](state, num) {
    //     state.num += num;
    // },
    [NUM](state, data) {
        // state.num = Math.random()
        state.data = data
        console.log(state.data)
    },
    [NAME](state, name) {
        console.log(name)
        state.name = name

    },
    [HOME](state, page) {
        console.log(page)
        state.page = page
    }

}