<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('notice.notice_notification')}}</p>
        </div>
        <div class="wrapper">
            <div class="top">
                <div class="notice_tabs">
                    <router-link
                            replace
                            tag="div"
                            class="notice_tab"
                            :class="{
                            'hasNotice': transfer != '0',
                        }"
                            to="/notice/noticeTabTransfer"
                    >
                        {{$t('notice.notice_transferNotice')}}
                    </router-link>
                    <router-link
                            replace
                            tag="div"
                            class="notice_tab"
                            :class="{
                            'hasNotice': system != '0',
                        }"
                            to="/notice/noticeTabSystem"
                    >
                        {{$t('notice.notice_systemNotice')}}
                    </router-link>
                </div>


            </div>
            <div class="content">
                <div class="content_pos">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "Notice",
        computed: {
            transfer(){
                return this.getTransferNotice()
            },
            system(){
                return this.getSystemNotice()
            }
        },
        mounted() {
            this.setUserNoticeState()
        },
        methods: {
            ...mapActions(['setUserNoticeState']),
            ...mapGetters(['getSystemNotice', 'getTransferNotice'])
        }
    }
</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
    }
    .notice_tabs{
        padding: 0 .3rem;
        background: #203395;
        display: flex;
        position: relative;
        text-align: center;
    }
    .notice_tabs:after {
        width: 1px;
        height: .4rem;
        background: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
    }
    .notice_tab{
        flex: 1;
        font-size: .3rem;
        color: #fff;
        line-height: 1rem;
        position: relative;
    }
    .notice_tab:before {
        left: 50%;
        bottom: 0;
        height: .05rem;
        background: #fff;
        width: 2rem;
        content: '';
        position: absolute;
        border-radius: 50rem;
        transform: translateX(-50%);
        display: none;
    }
    .notice_tab:after{
        left: .95rem; top: .35rem; width: .13rem; height: .13rem; background: #e41d1d;
        border-radius: 100%;
        content: '';
        position: absolute;
        display: none;
    }
    .notice_tab.hasNotice:after{
        display: block;
    }
    .notice_tab.active:before{
        display: block;
    }
    .content{
        flex: 1;
        position: relative;

    }
    .content_pos{
        position: absolute;
        left: 0; top: 0;
        width: 100%;
        height: 100%;
    }


</style>
