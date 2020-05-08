export default (minxin) => {
    const layer = (options) => {
        return new layer.prototype._create(options)
    }

    layer.prototype = {
        ...minxin,
        defaultOptions(){
            return {}
        },
        temlate(setting){
            return setting.content
        }
    }

    layer.prototype._create.prototype = layer.prototype

    return layer
}
