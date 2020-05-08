export default (mixin) => {
    const dialog = (options) => {
        return new dialog.prototype._create(options)
    }

    dialog.prototype = {
        ...mixin,
        defaultOptions(){
            return {
                width: '80%',
                clsName: 'ANIMATITE_SCALE_TO_BIG NDIALOG',
                title: '标题',
                content: '内容',
                btns: [
                    {
                        clsName: 'DEFAULT',
                        content: '不用了',
                        handle(){
                        }
                    },
                    {
                        clsName: 'CONFIRM',
                        content: '确定',
                        handle(){
                        }
                    }
                ]
            }
        },
        temlate(setting){
            const h = this.instance.$createElement
            const btns = _.map(setting.btns, (item) => {
                const {
                    clsName,
                    content,
                    handle
                } = item

                return h('div', {
                    class: `DIALOG_BTN ${clsName}`,
                    on: {
                        click: handle
                    }
                }, content)
            })

            const content = h('div', {
                class: 'DIALOG'
            },[
                h('div', {class: 'DIALOG_TITLE'}, setting.title),
                h('div', {class: 'DIALOG_CONTENT'}, setting.content),
                h('div', {class: 'DIALOG_BTNS clearfix'}, btns),
            ])

            return content
        }
    }

    dialog.prototype._create.prototype = dialog.prototype

    return dialog
}

