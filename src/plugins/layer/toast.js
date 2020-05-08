export default (mixin) => {
    const toast = (options) => {
        return new toast.prototype._create(options)
    }

    toast.prototype = {
        ...mixin,
        defaultOptions(){
            return {
                maskCancel: false,
                maskBackgroundColor: 'rgba(0,0,0,0)',
                autoClose: 1500,
                clsName: 'ANIMATITE_SCALE_TO_BIG NTOAST'
            }
        },
        temlate(setting){
            const h = this.instance.$createElement
            const content = h('div', {
                class: 'TOAST'
            }, setting.content)

            return content
        }
    }

    toast.prototype._create.prototype = toast.prototype

    return toast
}
