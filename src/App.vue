<template>
    <div id="entry">

            <transition :name="$store.state.routeAction">
                <router-view v-if="isRouterAlive"></router-view>
            </transition>

            <!--<router-view  v-if="isRouterAlive"/>-->

    </div>
    <!--<div id="entry">-->
        <!--<transition :name="$store.state.routeAction">-->
            <!--<keep-alive :include="includeName">-->
                <!--<router-view></router-view>-->
            <!--</keep-alive>-->
        <!--</transition>-->

    <!--</div>-->
</template>

<script>


    export default {
        provide :function() {
            return {
                reload:this.reload
            }
        },
        data:function(){
            return {
                isRouterAlive:true
            }
        },
        methods:{
            reload:function(){
                this.isRouterAlive=false;
                this.$nextTick(function(){
                    this.isRouterAlive=true
                })
            }
        }
        // data(){
        //     return {
        //         includeName: ''
        //     }
        // },
        // watch: {
        //     $route() {
        //         if( this.$route.meta.keepAlive ){
        //             let target = this.$route.matched.filter((item) => {
        //                 return item.name != ''
        //             })[0]
        //
        //             this.includeName = (target && target.name) || ''
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    *{
        font: 14px/1.5 "PingFang SC", "Lantinghei SC", "Microsoft Yahei", "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif;
    }
    #entry {
        width: 100%;
        height: 100%;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .wrapper{

    }
    [v-cloak] {
        display: none !important;
    }
    .push-enter-active,
    .pop-enter-active{
        transition: all 400ms ease;
    }

    .push-leave-active,
    .pop-leave-active{
        transition: all 450ms ease;
    }
    .push-leave-to{
        transform: translate3d(-50%, 0, 0);
    }
    .push-enter {
        transform: translate3d(100%, 0, 0);
    }
    .push-enter-active {
        z-index: 10;
    }
    .push-leave-active {
        z-index: 0;
    }
    .pop-leave-active {
        transform: translate3d(100%, 0, 0);
        z-index: 11;
    }
    .pop-enter{
        transform: translate3d(-50%, 0, 0);
    }

</style>

