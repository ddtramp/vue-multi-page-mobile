import axios from 'axios'
import Qs from 'qs'

let $http = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    withCredentials: false, // TODO change true
    responseType: 'json',
    transformRequest: [function (data) {
        return Qs.stringify(data)
    }],
    baseURL: envConfig.ajaxBaseUrl
})

export default {
    install (Vue, name = '$http') {
        Object.defineProperty(Vue.prototype, name, { value: $http })
    }
}
export { $http }
