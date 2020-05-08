import "@babel/polyfill"

import Vue from 'vue'
import FastClick from 'fastclick'
import App from '@/App.vue'
import 'mint-ui/lib/style.css'


window.Vue = Vue



import router from '@/router/index'
import store from '@/store/index'
import i18n from '@/lang/index'
import plugins from 'plugins/index'
import validate from 'plugins/validate/plugin'

Vue.use(plugins)
Vue.use(validate)

import { dataFormat,tofixed4,tofixed2,addressFormat,idCardFormat } from 'static/js/untils'

Vue.filter('dataFormat', dataFormat)
Vue.filter('tofixed2', tofixed2)
Vue.filter('tofixed4', tofixed4)
Vue.filter('addressFormat', addressFormat)
Vue.filter('idCardFormat', idCardFormat)

// validate fix
import 'static/js/adaptive'
import 'static/js/gVerify'
import 'static/css/bem.css'
import 'static/css/common.css'
import 'static/css/until.css'
import 'static/css/layer.css'



// 解决移动设备点击300秒延迟
if ('addEventListener' in document && 'ontouchstart' in window) {
  	FastClick.prototype.focus = function (targetElement) {
    	targetElement.focus()
  	}
  	document.addEventListener('DOMContentLoaded', function () {
    	FastClick.attach(document.body)
  	}, false)
}


// 安卓设备物理返回
if( process.env.NODE_ENV === 'production' ){
    window.IsSureQuit = false

    const plusReady = () => {
        plus.key.addEventListener('backbutton', function () {
            const currentWebview = plus.webview.currentWebview()

            currentWebview.canBack((evt) => {
                if (evt.canBack) {
                    Vue.prototype.$back()
                } else {
                    if ( window.IsSureQuit ) {
                        plus.runtime.quit()
                    } else {
                        Vue.prototype.$toast({
                            content: '再按一次退出程序',
                            clsName: 'ANIMATITE_BOTTOM_TO_TOP BACKTIPS',
                            autoClose: 2000,
                            zIndex: 10000
                        }).open()
                        window.IsSureQuit = true
                        setTimeout(() => {
                            window.IsSureQuit = false
                        }, 2000)
                    }
                }
            })
        }, false)
    }

    if (window.plus) {
        plusReady()
    } else {
        document.addEventListener('plusready', plusReady, false)
    }
}

// 判断是否有新版本
store.dispatch('setNeedUpdate')

// 浏览器回退
window.addEventListener("popstate", () => {
    store.commit('SET_ROUTEACTION', 'pop')
}, false)



window['adaptive'].init(
    function(){
        window.APP = new Vue({
            el: '#app',
            i18n,
            render: (h) => h(App),
            router,
            store
        })
    }
)




