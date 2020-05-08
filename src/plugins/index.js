import getLayerComponents from './layer/components'
import getLayerMixin from './layer/common'
import getDialogConstructor from './layer/dialog'
import getToastConstructor from './layer/toast'
import getLayerConstructor from './layer/layer'
import http from '@/request/http'
import {
    push,
    go,
    back,
    replace
} from './router/index'



export default {
    install(Vue, options){
        const components = getLayerComponents(Vue)
        const {
            Layer
        } = components

        const dialog = getDialogConstructor(getLayerMixin(Layer))
        const toast = getToastConstructor(getLayerMixin(Layer))
        const layer = getLayerConstructor(getLayerMixin(Layer))







        Vue.prototype.$dialog = dialog
        Vue.prototype.$toast = toast
        Vue.prototype.$layer = layer
        Vue.prototype.$http = http
        Vue.prototype.$push = push
        Vue.prototype.$back = back
        Vue.prototype.$go = go
        Vue.prototype.$replace = replace


        let focusHandler, blurHandler

        Vue.directive('focus', {
            bind(el, binding) {
                const value = binding.value || 'focus'
                const child =  el.querySelector('input')

                focusHandler = () => {
                    el.classList.add(value)
                }

                blurHandler = () => {
                    el.classList.remove(value)
                }

                child.addEventListener('focus', focusHandler)
                child.addEventListener('blur', blurHandler)
            },
            unbind(el) {
                const child =  el.querySelector('input')

                child.removeEventListener('focus', focusHandler)
                child.removeEventListener('blur', blurHandler)
            }
        })
    }
}
