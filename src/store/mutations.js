const ADD_NUM = 'ADD_NUM'
const NUM = 'NUM'
const DATA = 'DATA'

export default {
    //点击进入下一题
    [ADD_NUM](state, num) {
        state.num += num;
    },
    [NUM](state) {
        state.num = Math.random()

    },
    // [DATA](state) {
    //     state.num = type
    // }


}