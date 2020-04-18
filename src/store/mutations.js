const ADD_NUM = 'ADD_NUM'
const NUM = 'NUM'
const NAME = 'NAME'

export default {
    //点击进入下一题
    // [ADD_NUM](state, num) {
    //     state.num += num;
    // },
    [NUM](state, data) {
        // state.num = Math.random()
        console.log(data)
        state.data = data
    },
    [NAME](state, name) {
        console.log(name)
        state.name = name

    }

}