// 设置异步、多种状态改变方法
import types from './mutation-types'
import storage from 'static/js/storage'


export default {
    // 设置用户名
    setUsers({commit, state}, user){
        commit(types.SET_USERS, user)
        storage.setItem('users', state.users)
    },
    // 设置侧边栏信息
    setSidebars({commit, state}, sidebars){
        commit(types.SET_SIDEBARS, sidebars)
        storage.setItem('sidebars', state.sidebars)
    },
    // 设置地址簿个人信息
    setAddressInfo({commit, state}, addressInfo){
        commit(types.SET_ADDRESSINFO, addressInfo)
        storage.setItem('addressInfo', state.addressInfo)
    },
    // 删除地址簿信息
    removeAddressInfo({commit, state}){
        commit(types.SET_ADDRESSINFO, undefined)
        storage.removeItem('addressInfo')
    },
    // 设置用户信息
    setUserinfo({commit, state}, userinfo){
        commit(types.SET_USERINFO, userinfo)
        storage.setItem('userinfo', userinfo)
    },
    // 设置记住的
    setDefaultCateId({commit, state}, cateId){
        commit(types.SET_DEFAULTCATEID, cateId)
        storage.setItem('cateId', cateId)
    },
    // 删除用户信息
    removeUserinfo({commit, state}){
        commit(types.SET_USERINFO, undefined)
        storage.removeItem('userinfo')
    },
    // 设置用户消息状态
    setUserNoticeState({commit, state}){
        const http = this._vm.$http
        const { userinfo } = state
		// app/message/getUnreadMsgByUserId js/message/getUnreadMsg
        if( userinfo ){
            http.get(`app/message/getUnreadMsgByUserId`,{
                userId: userinfo.customerId
            }).then((res) => {
                if( res.returnCode == 1 ){
                    const {
                        transfer,
                        system
                    } = res.resultData

                    commit(types.SET_TRANSFERNOTICE, transfer)
                    commit(types.SET_SYSTEMNOTICE, system)
                }
            })
        } else {
            commit(types.SET_TRANSFERNOTICE, false)
            commit(types.SET_SYSTEMNOTICE, false)
        }
    },
    setNeedUpdate({commit, state}){
        const http = this._vm.$http
        const { needUpdate, code } = state

        if( needUpdate === -1 ){
            http.get('app/appEdition/findNewEdition', {
                code
            }).then((res) => {
                if( res.success ){
                    if( res.result.isNewRecord ){
                        commit(types.SET_NEEDUPDATE, true)
                        commit(types.SET_UPDATEDETAIL, res.result)
                    } else {
                        commit(types.SET_NEEDUPDATE, false)
                    }
                }
            })
        }
    }
}
