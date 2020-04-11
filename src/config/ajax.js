import axios from 'axios'

const apiBaseUrl = 'https://www.shuipingguo.com'
const urlMap = {
    getList: apiBaseUrl + '/list1',
    getVIP: apiBaseUrl + '/getvideo/list_vip'

}

const HttpClient = {
    getList: (options) => {
        axios
            .get(urlMap.getList, {
                params: options.params
            })
            .then(function(response) {
                options.callback && options.callback(response);
            })
            .catch(function(error) {
                options.failcallback && options.failcallback(error);
            })
            .then(function() {})
    },
    getVIP: (options) => {
        axios
            .get(urlMap.getVIP, {
                params: options.params
            })
            .then(function(response) {
                options.callback && options.callback(response);
            })
            .catch(function(error) {
                options.failcallback && options.failcallback(error);
            })
            .then(function() {})


    }
}

export default HttpClient