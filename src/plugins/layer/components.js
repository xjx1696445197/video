import NlayerComponent from 'components/Nlayer'

export default (Vue) => {
    return {
        Layer: Vue.extend(NlayerComponent)
    }
}
