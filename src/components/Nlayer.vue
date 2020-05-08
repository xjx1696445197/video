<template>
    <div class="nlayer"
         :class="[visible ? 'show' : 'hide', clsName]"
    >
        <div
            class="nlayer_mask"
            v-if="mask"
            :style="{'background-color': maskBackgroundColor, 'z-index': zIndex}"
            @click="close"
        ></div>
        <div class="nlayer_content"
            :style="{'width': width, 'height': height, 'z-index': zIndex+1}"
        >
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nlayer",
        props: {
            clsName: {
                type: String,
                default: ''
            },
            zIndex: {
                type: Number,
                default: 100
            },
            maskCancel: {
                type: Boolean,
                default: true
            },
            autoClose: {
                type: Number,
                default: 0
            },
            scroll: {
                type: Boolean,
                default: false
            },
            mask: {
                type: Boolean,
                default: true,
            },
            maskBackgroundColor: {
                type: String,
                default: "rgba(0,0,0,0.5)"
            },
            visible: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: ""
            },
            height: {
                type: String,
                default: ""
            }
        },
        watch: {
            visible(show){
                if( show ){
                    if( this.autoClose > 0 ){
                        setTimeout(() => {
                            this.$emit('close')
                        }, this.autoClose)
                    }
                }
            }
        },
        methods: {
            close() {
                if( this.maskCancel ){
                    this.$emit('close')
                }
            }
        }
    }
</script>

<style scoped>




    .nlayer{

    }
    .nlayer_content {
        position: fixed;
        z-index: 101;
        background-color: #fff;
        max-height: 100%;
        max-width: 100%;
        transition: all .3s ease;
        top: 0; right: 0; bottom: 0; left: 0;
        margin: auto;
        width: fit-content;
        height: fit-content;
    }
    .nlayer.hide .nlayer_content{
        visibility: hidden;
        opacity: 0;
    }
    .nlayer.show .nlayer_content{
        visibility: visible;
        opacity: 1;
    }

    .nlayer_mask {
        position: fixed; z-index: 100;
        top: 0; right: 0; bottom: 0; left: 0;
        transition: all 0.2s ease-in-out;
    }
    .nlayer.hide .nlayer_mask{
        opacity: 0; visibility: hidden;
    }
    .nlayer.show .nlayer_mask{
        opacity: 1; visibility: visible;
    }
</style>
