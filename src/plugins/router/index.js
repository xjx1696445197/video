import store from '@/store/index'
import router from '@/router/index'

const push = (params) => {
    store.commit('SET_ROUTEACTION', 'push')

    setTimeout(() => {
        router.push(params)
    }, 16)
}

const replace = (params, type=true) => {
    if( type){
        store.commit('SET_ROUTEACTION', 'push')
    } else {
        store.commit('SET_ROUTEACTION', 'pop')
    }

    setTimeout(() => {
        router.replace(params)
    }, 16)
}

// 去某个页面
const go = (idx) => {
    const index = Number(idx)

    if( !isNaN(index) ){
        if( index > 0 ){
            store.commit('SET_ROUTEACTION', 'push')
        } else {
            store.commit('SET_ROUTEACTION', 'pop')
        }

        setTimeout(() => {
            router.go(index)
        })
    }
}

// 返回
const back = () => {
    router.go(-1)
}

export {
    push,
    go,
    back,
    replace
}
