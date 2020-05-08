// 设置获取状态方法
export default {
    getRouteAction(state){
        return state.routeAction
    },
    getLang(state){
        return state.lang
    },
    getUserinfo(state){
        return state.userinfo
    },
    getSystemNotice(state){
        return state.hasSystemNotice
    },
    getTransferNotice(state){
        return state.hasTransferNotice
    },
    getScanData(state){
        return state.scanData
    },
    getDefaultCateId(state){
        return state.defaultCateId
    },
    getNeedUpdate(state){
        return state.needUpdate
    },
    getUpdateDetail(state){
        return state.updateDetail
    },
    getUsers(state){
        return state.users
    },
    getAddressInfo(state){
        return state.addressInfo
    },
    getSidebars(state){
        return state.sidebars
    }
}
