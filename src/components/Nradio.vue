<template>
    <nlayer
        :visible="mvisible"
        @close="close"
        class="ANIMATITE_BOTTOM_TO_TOP"
        width="100%"
        :zIndex="zIndex"
    >
        <div class="nradio">
            <slot name="header"></slot>
            <div class="nradio_list">
                <div class="nradio_item"
                     v-for="(item, index) in mlist"
                     :key="item.id"
                     :data-index="index"
                     @click="select"
                >
                    <div class="nradio_item_dot radius-round"
                         :class="{
                            'active': item.active
                        }"
                    ></div>
                    <div class="nradio_item_content">{{item.title}}</div>
                </div>
            </div>
            <slot name="footer"></slot>
        </div>
    </nlayer>

</template>

<script>
    import Nlayer from 'components/Nlayer'

    export default {
        name: "Nradio",
        components: {
            Nlayer
        },
        data(){
            return {
                mlist: [],
                mvisible: this.visible
            }
        },
        props: {
            clsName: {
                type: String,
                default: ''
            },
            list: {
                type: Array,
                default: [],
                required: true
            },
            defaultActive: {
                type: Number,
                required: true
            },
            visible: {
                type: Boolean,
                default: false
            },
            zIndex: {
                type: Number,
                default: 999
            }
        },
        watch: {
            visible(show){
                this.mvisible = show
            },
            list(now){
                const propList = now.slice(0)

                this.mlist = this.defaultActive != -1 ? this.map(propList, this.defaultActive) : this.map(propList)
            }
        },
        methods: {
            close(){
                const current = this.mlist.filter((item) => {
                    return item.active == true
                })[0]
                this.$emit('close', current)
            },
            map(list, index="none"){
                const nowList = list.map((item, i) => {
                    if( index == i ){
                        return {
                            ...item,
                            active: true
                        }
                    }

                    return {
                        ...item,
                        active: false
                    }
                })

                return nowList
            },
            select(e){
                const { index } = e.currentTarget.dataset
                const nowList = this.map(this.mlist, index)

                this.mlist = nowList

                const current = this.mlist[index]

                this.$emit('select', current)
            }
        }
    }
</script>

<style scoped>
    .nradio{
        background: #fff;
        width: 100%;
    }
    .nradio_item{
        padding: 0.15rem 0.2rem;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        min-height: 0.6rem;
    }
    .nradio_item_dot{
        margin-right: .2rem;
        width: .44rem;
        height: .44rem;
        box-sizing: border-box;
        border: 2px solid #f3f3f3;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nradio_item_dot:after,
    .nradio_item_dot:before{
        position: absolute;
        content: '';
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        display: none;
    }
    .nradio_item_dot:after{
        width: 100%;
        height: 100%;
        background: #e4811d;
    }
    .nradio_item_dot:before{
        width: 50%;
        height: 50%;
        background: #fff;
        z-index: 1;
    }
    .nradio_item_dot.active:after,
    .nradio_item_dot.active:before{
        display: block;
    }
    .nradio_item_content{
        flex: 1;
        font-size: .3rem;
        color: #666;
        line-height: .45rem;
        word-break: break-word;
    }
</style>
