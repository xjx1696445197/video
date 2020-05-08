import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})

export default store

if(!localStorage.getItem("placeOrder"))
{
    localStorage.setItem("placeOrder",JSON.stringify({data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false}))
}
if(!localStorage.getItem("placeCoupon")){
    localStorage.setItem("placeCoupon",JSON.stringify([]))
}
if(localStorage.getItem("loginInfo"))
{
    state.loginInfo=JSON.parse(localStorage.getItem("loginInfo"));
}
