import _ from 'lodash'

let storage = {
    toObject(json){
        try {
            return JSON.parse(json)
        } catch (e) {
            return json
        }
    },
    getItem(key){
        const value = localStorage.getItem(key)

        if( value ) {
           return storage.toObject(value)
        }
        return undefined
    },
    getItemProp(key, prop){
        const value = storage.getItem(key)

        if( value && _.isObject(value) ){
            return _.get(value, prop, undefined)
        }
        return undefined
    },
    getItemProps(data=[]){
        return _.map(data, (item) => {
            const {
                key,
                prop
            } = item

            return storage.getItemProp(key, prop)
        })
    },
    setItem(key, value){
        localStorage.setItem(key, JSON.stringify(value))
    },
    setItemProp(key, prop='', value=''){
        let target = storage.getItem(key)

        if( target && _.isObject(target) ) {
            _.set(target, prop, value)
            storage.setItem(key, target)
        }
    },
    setItemProps(data=[]){
        _.each(data, (item) => {
            const {
                key,
                prop,
                value
            } = item

            storage.setItemProp(key, prop, value)
        })
    },
    removeItem(key){
        localStorage.removeItem(key)
    },
    removeItemProp(key, prop){
        let target = storage.getItem(key)
        if( target && _.isObject(target) ) {
            if( _.unset(target, prop) ){
                storage.setItem(key, target)
            }
        }
    },
    removeItemProps(data){
        _.each(data, (item) => {
            const {
                key,
                prop
            } = item

            storage.removeItemProp(key, prop)
        })
    },
    setList(data={}){
        _.each(data, (item, key) => {
            storage.setItem(key, item)
        })
    },
    removeList(data=[]){
        _.each(data, (item) => {
            storage.removeItem(item)
        })
    },
    clear(){
        localStorage.clear()
    }
}

export default storage
