import axios from 'axios'
import store from '@/store/index'
import router from '@/router/index'

import {
    baseURL
} from '@/config'


const CONFIG = {
    baseURL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
}


// 实例化
const service = axios.create(CONFIG)


// 发送前的拦截器
service.interceptors.request.use((config) => {
    // language
//	config.headers.lang = store.state.lang
    // token
    const token = store.state.userinfo && store.state.userinfo.token
    if( token ){
        config.headers.token = token
    }

    // post 参数序列化
    if (config.method === 'post') {
        config.params = JSON.stringify(config.data)
    }

    return config
}, (error) => {
    // return Promise.error(error)
})


// 响应后的拦截器
service.interceptors.response.use((response) => {


        if( response.data.code == -1 ){
            setTimeout(() => {
                store.dispatch('removeUserinfo')
                store.commit('SET_ROUTEACTION', 'push')
                window.Vue.prototype.$toast({
                    content: response.data.msg,
                    autoClose: 2000,
                    zIndex: 10000
                }).open()

                setTimeout(() => {
                    router.push({
                        path: '/login'
                    })
                }, 2000)
            })

        }


        const params = response.config.params
        const afterData = typeof params === 'string' ? JSON.parse(params) : params

        const headersAuth = (afterData && afterData.__HEADERSAUTH) || false
        const { data } = response

        if( headersAuth ){
            return {
                data,
                headers: response.headers
            }
        } else {
            return data
        }

    }, (error) => {
        // return Promise.error(error)
    }
)


class http {
    static async get(url, params) {
        return await service.get(url, {params})
    }
    static async post(url, params, config=CONFIG) {
        return await service.post(url, params, config)
    }
}

// const data = {
//     userName: 'dmy00001',
//     userPass: '6666666q',
//     __HEADERSAUTH: true
// }


// http.get("js/users/getById", {
//     userId : 422
// }).then((res) => {
//     console.log(res)
// })
//
// http.post("js/usersLogin/login", data).then((res) => {
//     const userinfo = res.data.result
//     const token = res.headers.token
//
//     store.dispatch('setUserinfo', {
//         userinfo,
//         token
//     })
//
// })


export default http

