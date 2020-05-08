// 设置同步、单一状态改变方法
import types from './mutation-types'


const mutations = {
    [types.SET_ROUTEACTION](state, payload){
        state.routeAction = payload
    },
    [types.SET_LANG](state, payload){
        state.lang = payload
    },
    [types.SET_USERINFO](state, payload){
        state.userinfo = payload
    },
    [types.SET_ADDRESSINFO](state, payload){
        state.addressInfo = payload
    },
    [types.SET_TRANSFERNOTICE](state, payload){
        state.hasTransferNotice = payload
    },
    [types.SET_SYSTEMNOTICE](state, payload){
        state.hasSystemNotice = payload
    },
    [types.SET_SCANDATA](state, payload){
        state.scanData = payload
    },
    [types.SET_DEFAULTCATEID](state, payload){
        state.defaultCateId = payload
    },
    [types.SET_CODE](state, payload){
        state.code = payload
    },
    [types.SET_NEEDUPDATE](state, payload){
        state.needUpdate = payload
    },
    [types.SET_UPDATEDETAIL](state, payload){
        state.updateDetail = payload
    },
    [types.SET_USERS](state, payload){
        const index = state.users.indexOf(payload)
        if( index == -1 ){
            if( state.users.length >= 10 ){
                state.users.splice(0, 1)
            }
        } else {
            state.users.splice(index, 1)

        }
        state.users.push(payload)
    },
    [types.SET_SIDEBARS](state, payload){
        const index = state.sidebars.indexOf(payload)
        if( index == -1 ){
            if( state.sidebars.length >= 20 ){
                state.sidebars.splice(0, 1)
            }
        } else {
            state.sidebars.splice(index, 1)

        }
        state.sidebars.push(payload)
    },
    loginInfo(state,loginInfo){
        state.loginInfo = loginInfo;
    },
    selected_page(state,selected_page){
        state.selected = selected_page;
    }
}

export default mutations
