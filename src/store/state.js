import storage from 'static/js/storage'
import { code } from '@/config'

export default {
    routeAction: 'push',
    lang: storage.getItem('lang') || 'zh-CN',
    userinfo: storage.getItem('userinfo'),
    users: storage.getItem('users') || [],
    sidebars:storage.getItem('sidebars') || [],
    scanData: '',
    defaultCateId:'',
    addressInfo:storage.getItem('addressInfo') || [],
    hasTransferNotice: false,
    hasSystemNotice: false,
    code,
    needUpdate: -1,
    updateDetail: {},
    loginInfo:{},
    placeOrder:{data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false},
    placeCoupon:[],
}
