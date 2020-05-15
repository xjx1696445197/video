<template>
    <div class="page">
        <div class="index_bg"></div>
        <!--<div class="NOIMG mauto"></div>
        <div class="NOCONTENT">
            该功能暂未开放，敬请期待～～
        </div>-->
        <div class="index_button_wrapper clearfix">
            <div class="index_button clearfix fl"
                 @click="openVideo"
            >
                <div class="index_button_aicon fl"></div>
                <p class="fl">安卓下载</p>
            </div>
            <div class="index_button clearfix fr active">
<!--                 @click="iosVideo"-->

                <div class="index_button_icon fl"></div>
                <p @click="cart" class="fl">苹果调试中</p>
            </div>
        </div>



    </div>
</template>


<script>
    import Nlayer from '@/components/Nlayer'
    import { sourceUrl } from '@/config'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "Asset",
        components: {
            Nlayer
        },
        data(){
            return {
                sourceUrl,
                accountList: [],
                updateDialog: null,
                tips: '',
                tipsVisible: false,
                userList:[
                    {
                        username:'dmy00001',
                        active:false
                    },
                    {
                        username:'yl000051',
                        active:false
                    },
                    {
                        username:'zhy11111',
                        active:false
                    }
                ],
                feeTipVisible:false,
                loadingVisible: false,
            }
        },
        mounted(){
            // 判断是否要更新
            if( this.needUpdate == -1 ){
                this.setNeedUpdate()
            } else {
                if( this.needUpdate ){
                    this.createUpdateDialog()
                    this.updateDialog.open()
                }
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
            needUpdate(){
                return this.getNeedUpdate()
            },
            updateDetail(){
                return this.getUpdateDetail()
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            userName(){
                return this.userinfo.nickName
            }
        },
        methods: {
            ...mapActions(['setUserNoticeState', 'setNeedUpdate', 'setUserinfo', 'setUsers', 'removeUserinfo', 'setSidebars']),
            ...mapGetters(['getUserinfo', 'getSystemNotice', 'getTransferNotice', 'getNeedUpdate', 'getUpdateDetail', 'getSidebars']),
            // 创建版本更新弹窗
            cart() {
                this.$push({
                    path: '/cart'
                })
            },
            createUpdateDialog() {
                const h = this.$createElement
                const cons = this.updateDetail.content.replace(/(\r\n)|(\n)/g, '<br/>');
                console.log(cons)
                const content = h('div', {
                    class: 'DIALOG'
                }, [
                    h('div', {class: 'DIALOG_TITLE'}, this.updateDetail.editionNum + this.$t('aboutUs.aboutUs_edition')),
                    h('div', {class: 'DIALOG_CONTENT'}, this.updateDetail.content),
                    h('div', {class: 'DIALOG_BTNS clearfix'}, [
                        h('div', {
                            class: 'DIALOG_BTN CONFIRM',
                            on: {
                                click: () => {
                                    this.openPage()
                                }
                            }
                        }, this.$t('aboutUs.aboutUs_update'))
                    ]),
                ])

                this.updateDialog = this.$layer({
                    content,
                    width: '80%',
                    maskCancel: false
                })
            },
            // 原生打开新页面
            openPage(){
                window.plus && window.plus.runtime.openURL( this.updateDetail.downloadPath )
            },
            // 打开视频下载
            openVideo(){
                window.plus && window.plus.runtime.openURL('http://chmcqiniu.chmc.top/chmv-release-v1.1.5-7-202004173601.apk')
            },
            iosVideo(){
                window.plus && window.plus.runtime.openURL('itms-services://?action=download-manifest&url=https://app.hallechain.cn/Downloads/CHMV.plist')
            },
            // 检测用户是否登录
            isLogin(){
                if( this.userinfo ){

                } else {

                }
            },

        }
    }
</script>

<style scoped>
    .page{
        position: relative;

    }
    .index_bg{
        width: 100%; height: 100%;
        background: url(../static/images/video_icon/index_bg.png) no-repeat center center / cover;
    }
    .index_button_wrapper{
        position: absolute;
        width: 5.5rem;
        bottom: 0.7rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .index_button{
        font-size: 0.26rem;
        color: #fff;
        line-height: 0.8rem;
        background: #173488;
        width: 2.5rem;
        height: 0.8rem;
        border-radius: 50rem;
        text-align: center;
    }
    .index_button.active{
        background: #ccc;
    }
    .index_button_aicon{
        width: 0.36rem;
        height: 0.36rem;
        background: url(../static/images/video_icon/android_icon.png)no-repeat center center /cover;
        margin-top: 0.2rem;
        margin-left: 0.45rem;
        margin-right: 0.15rem;
    }
    .index_button_icon{
        width: 0.36rem;
        height: 0.36rem;
        background: url(../static/images/video_icon/ios_icon.png)no-repeat center center /cover;
        margin-top: 0.2rem;
        margin-left: 0.35rem;
        margin-right: 0.15rem;
    }
    .asset_sidebar{
        position: relative;
        /*top: 0;*/
        /*left: 0;*/
        /*right: 2.5rem;*/
        /*bottom: 0;*/
        /*width: 7.5rem;*/
        height: 100%;
        /*z-index: 999;*/
    }
    .sidebar_scroll{
        position: absolute;
        top: 0.9rem;
        left: 0;
        width: 100%;
        right: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
    .sidebar_content{
        height: 100%;
        width: 5rem;
        background: #fafafa;
    }
    .sidebar_title{
        background: #e4811d;
        width: 100%;
        height: 0.88rem;
        position: relative;
    }
    .sidebar_txt1{
        font-size: 0.32rem;
        color: #fff;
        line-height: 0.9rem;
        /*padding-top: 0.4rem;*/
        padding-left: 0.3rem;
    }
    .sidebar_icon{
        background: url("../static/images/icon/sidebar_up.png") no-repeat center center / cover;
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        right: 0.3rem;
        bottom: 0.15rem;
    }
    .sidebar_list_wrapper{
        padding-top: 0.24rem;
        background: #fafafa;
    }
    .sidebar_list_padding{
        background: #fff;
        padding: 0 0.3rem;
    }
    .sidebar_txt2{
        font-size: 0.3rem;
        color: #333;
        line-height: 0.8rem;
        padding-top: 0.2rem;
    }
    .sidebar_item{
        padding: 0.2rem;
        border-top: 1px solid #ccc;
        position: relative;
    }
    .sidebar_item.active .sidebar_active_icon{
        background: url("../static/images/icon/select_active.png") no-repeat center center / cover;
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.1rem;
    }
    .sidebar_active_icon{

    }
    .sidebar_item_pic{
        width: 0.6rem;
        height: 0.6rem;
    }
    .sidebar_item_default{
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .sidebar_item_create{
        background: url("../static/images/icon/create_wallet.png") no-repeat center center / cover;
    }
    .sidebar_item_import{
        background: url("../static/images/icon/import_wallet.png") no-repeat center center / cover;
    }
    .sidebar_txt3{
        font-size: 0.24rem;
        color: #333;
        line-height: 0.6rem;
        position: absolute;
        left: 1rem;
        top:0.2rem;
    }


    .HEADER_LEFT {
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        top: 0.15rem;
        left: 0.3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .select{
        background: url("../static/images/icon/sidebar_expand.png") no-repeat center center / cover;
    }

    .header{
        position: relative;
        height: 4.7rem;
        background: url("../static/images/bg/bg_top470.png") no-repeat center center / cover;
    }
    .notice{
        background: url("../static/images/asset_notice_icon.png") no-repeat center center / cover;
    }
    .notice.active:after{
        position: absolute;
        content: '';
        width: .12rem;
        height: .12rem;
        background: #e41d1d;
        border-radius: 100%;
        right: .36rem;
        top: .1rem;
    }
    .logo{
        position: absolute;
        width: 1.82rem;
        height: 1.82rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,.3);
        left: 50%; border-radius: 100%;
        transform: translateX(-50%);
        top: 1.2rem;
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .username{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 3.22rem;
        font-size: .4rem;
        color: #fff;
        line-height: .6rem;
        text-align: center; max-width: 3rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .list{
        margin-top: 0.24rem;
        padding: 0 .3rem;
    }
    .item{
        overflow: hidden;
        display: flex;
        position: relative;
        height: 1.3rem;
        background: #fff;
        border-radius: .2rem;
        padding: 0 0.55rem 0 0.75rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
        align-items: center;
        justify-content: space-between;
    }
    .item+.item {
        margin-top: .24rem;
    }
    .item:after{
        position: absolute;
        right: 0.15rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0.4rem;
        height: 0.4rem;
        content: '';
        background: url("../static/images/icon/notice_icon_right.png") no-repeat center center / cover;
    }
    .item_pic{
        width: 0.6rem;
        height: 0.6rem;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        overflow: hidden;
        position: absolute;
        left: 0.15rem;
    }
    .item_pic img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .item_name{
        font-size: .34rem;
        color: #333;
        padding: 0 0.15rem;
        line-height: .6rem;
    }
    .item_count{
        font-size: .34rem;
        color: #333;
        padding: 0 0.15rem;
        line-height: .6rem;
    }
    .DIALOG_CONTENT{
        text-align: left;
        /*padding: 0 0.4rem;*/
    }
    .DIALOG_TITLE{
        font-size: .34rem;
        color: #333;
    }
    .DIALOG_CONTENT{
        white-space:pre-line;
    }




</style>




