import _ from 'lodash'

const _options = {
    zIndex: 100,
    maskCancel: true,
    autoClose: 0,
    scroll: false,
    mask: true,
    maskBackgroundColor: 'rgba(0,0,0,0.5)',
    width: '',
    height: '',
    content: '',
    clsName: 'ANIMATITE_SCALE_TO_BIG'
}

const getMixin = (Layer) => {
    const mixin = {
        instance: null,
        _create(options){
            const setting = _.merge({}, _options, this.defaultOptions(), options)

            this.instance = new Layer({
                el: document.createElement('div'),
                propsData: setting
            })


            this.instance.$slots.default = this.temlate(setting)
            this.instance.$on('close', () => {
                this.close()
            })

            document.querySelector('body').appendChild(this.instance.$el)

            return this
        },
        open(){
            setTimeout(() => {
                this.instance.visible = true
            }, 16)
        },
        close(){
            this.instance.visible = false
            this.instance.$el.addEventListener('transitionend', (e) => {
                this.instance.$el.remove()
                this.instance.$destroy()
            }, false)
        }
    }

    return mixin
}



export default getMixin
