import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enUS from './en-US'
import zhCH from './zh-CN'
import store from '@/store/index'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: store.state.lang,
    messages: {
        'en-US': enUS,
        'zh-CN': zhCH
    }
})

export default i18n
