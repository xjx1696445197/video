<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('share.share_inviteGoodFriends')}}</p>
        </div>
        <div class="wrapper">
            <div
                class="content"
                :class="pageType"
            >
                <div :class="[curLang ? 'bg_topper' : 'bg_topper_EN']"></div>
                <div :class="[curLang ? 'bg_content' : 'bg_content_EN']">
                    <div class="share_qrcode">
                        <img :src="detail.userCodeImg">
                    </div>
                    <p class="share_txt1" style="color: #203395;margin-top: .1rem">{{$t('share.share_Scan')}}</p>
                    <p class="share_txt2">{{$t('share.share_MyInvitationCode')}}</p>
                    <p class="share_txt3">{{detail.userCode}}</p>
                    <div class="share_btns tcenter mauto">
                        <div class="share_btn radius-half" @click="downloadPic('share')">{{$t('share.share_share')}}</div>
                        <div class="share_btn radius-half" @click="downloadPic('save')">{{$t('share.share_saveAlbum')}}</div>
                    </div>
                </div>

            </div>

        </div>




        <nlayer
                :maskCancel="true"
                maskBackgroundColor="rgba(0,0,0,0.3)"
                :visible="loadingVisible"
                class="NLOADING"
                :zIndex="1000"
        >
            <div class="LOADING">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve" width="0.8rem" height="0.8rem">
                    <path opacity="0.1" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                    <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
                <p class="LOADING_TXT">加载中</p>
            </div>
        </nlayer>

        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1200"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>

        <nlayer
                :maskCancel="true"
                maskBackgroundColor="rgba(0,0,0,0.4)"
                :visible="actionSheetVisible"
                @close="actionSheetClosed"
                class="ANIMATITE_BOTTOM_TO_TOP"
                width="100%"
        >
            <div class="actionSheet">
                <div class="actionSheet_container">
                    <div class="actionSheet_list">
                        <div class="actionSheet_item"
                            v-for="(item, index) in buttons"
                             @click="selectActionSheet(index)"
                        >
                            <div class="actionSheet_item_icon"
                                :style="{'background':`url(${item.icon}) no-repeat center center / cover`}"
                            ></div>
                            <p class="actionSheet_item_txt1">{{item.title}}</p>
                        </div>


                    </div>
                </div>
                <div class="actionSheet_button" @click="closeActionSheet">取消</div>
            </div>
        </nlayer>
    </div>
</template>

<script>
    const type1Scale = '0.6125'
    const type2Scale = '0.69'

    import icon001 from 'static/images/action_icon001.png'
    import icon002 from 'static/images/action_icon002.png'
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import { mapGetters } from 'vuex'
    import Nlayer from '@/components/Nlayer'

    export default {
        name: "Share",
        components: {
            Nlayer
        },
        data(){
            return {
                type1Scale,
                type2Scale,
                loadingVisible: true,
                actionSheetVisible: false,
                tips: '',
                tipsVisible: false,
                detail: {},
                dtask: '',
                FILENAME: '',
                shareWX: null,
                userId:JSON.parse(localStorage.getItem('userinfo')),
                // buttons: [
                //     {
                //         title: '微信好友',
                //         extra: {
                //             scene: 'WXSceneSession'
                //         },
                //         icon: icon001
                //     },
                //     {
                //         title:'朋友圈',
                //         extra:{
                //             scene:'WXSceneTimeline'
                //         },
                //         icon: icon002
                //     }
                // ]
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            scale(){
                return document.body.clientWidth / document.body.clientHeight
            },
            pageType(){
                if( this.scale >= type2Scale ){
                    return 'type2'
                } else if( this.scale >= type1Scale ){
                    return 'type1'
                }
            },
            downloadUrl(){
                return this.detail.userShareCodeImg
            },
            curLang(){
                return this.getLang() == 'zh-CN' ? true : false
            },
            shareTip1(){
                return this.$t('share.share_tips1')
            },
            shareTip2(){
                return this.$t('share.share_tips2')
            },
            shareTip3(){
                return this.$t('share.share_tips3')
            },
            shareTip4(){
                return this.$t('share.share_tips4')
            },
            shareTip5(){
                return this.$t('share.share_tips5')
            },
            shareTip6(){
                return this.$t('share.share_tips6')
            },
            shareTip7(){
                return this.$t('share.share_tips7')
            },
            shareTip8(){
                return this.$t('share.share_tips8')
            },
            shareTip9(){
                return this.$t('share.share_tips9')
            },
            shareTip10(){
                return this.$t('share.share_tips10')
            },
            shareTip11(){
                return this.$t('share.share_tips11')
            },
            buttons(){
                const buttons = [
                    {
                        title: this.shareTip2,
                        extra: {
                            scene: 'WXSceneSession'
                        },
                        icon: icon001
                    },
                    {
                        title:this.shareTip3,
                        extra:{
                            scene:'WXSceneTimeline'
                        },
                        icon: icon002
                    }
                ]
                return buttons
            },

        },
        mounted(){
            this.getCode()
        },
        methods: {
            ...mapGetters(['getUserinfo','getLang']),
            // 获取邀请码和邀请二维码
            getCode(){
                var that=this;
                jsonAjax.get(urlUtil.getApiUrl("findUserShareimg"), {userId:that.userId.customerId}, function (res) {
                    that.closeLoading()
                    if (res.returnCode) {
                        that.detail = res.resultData
                    } else {
                        that.showTips(res.message)
                        // 跳转到登录页面
                        setTimeout(function () {
                            that.$router.replace({
                                path: '/login'
                            })
                        }, 1000)
                    }
                })
                //
                // this.$http.get('js/users/getUserCodeImg', {
                //     userId: this.userId
                // }).then((res) => {
                //     this.closeLoading()
                //     if( res.success ){
                //         this.detail = res.result
                //     } else {
                //         this.showTips(res.message)
                //     }
                // })
            },
            // 下载分享图片
            downloadPic(flag){
                if (!window.plus) {
                    return
                }

                const callback = () => {
                    if( flag == 'save' ){
                        this.saveToGallery()
                    } else if( flag = 'share' ){
                        this.shareToWX()
                    }
                }

                if( this.FILENAME ){
                    // 下载过了
                    callback(this.FILENAME)
                    return
                }

                const options = {}
                this.dtask = plus.downloader.createDownload(this.downloadUrl, options, (file) => {
                    this.FILENAME = file.filename
                    callback()
                })

                this.dtask.start()
            },
            // 保存到相册
            saveToGallery(){
                plus.gallery.save(this.FILENAME, () => {
                    this.showTips(this.shareTip5)
                }, (error) => {
                    plus.nativeUI.alert(this.shareTip6)
                })
            },
            // 分享到微信
            shareToWX(){
                // 先去获取微信分享服务
                this.getWXSerivce()
            },
            // 获取分享服务
            getWXSerivce(){
                plus.share.getServices((services) => {
                    let sharesList = {}
                    for(let i in services){
                        const service = services[i]
                        sharesList[service.id] = service
                    }

                    this.shareWX = sharesList['weixin']

                    // 唤起actionSheet
                    this.actionSheet()
                }, (e) => {
                    this.showTips(this.shareTip7+ e.message)
                })
            },
            // 唤起actionSheet
            actionSheet(){


                if( this.shareWX ){
                    // 如果有微信服务就唤起actionSheet
                    this.showActionSheet()
                } else {
                    // 没有微信服务
                    this.showTips(this.shareTip8)
                }
            },
            // 检测是否授权
            validShareAuth(params, button){
                if( !this.shareWX ){
                    this.showTips(this.shareTip9)
                    return
                }

                if( button ){
                    params.extra = button.extra
                }

                if( this.shareWX.authenticated ){
                    // 已授权
                    this.goToShare(params)
                } else {
                    // 未授权
                    this.shareWX.authorize(() => {
                        this.goToShare(this.shareWX, params)
                    }, (e) => {
                        // 取消授权
                        plus.nativeUI.alert(e.message.split(',')[0])
                    })
                }
            },
            // 真正的去分享
            goToShare(params){
                this.shareWX.send(params, () => {
                    this.closeActionSheet()
                }, (e) => {
                    plus.nativeUI.alert(this.shareTip10)
                })
            },
            // 选择ActionSheet
            selectActionSheet(index){
                const params = { type:'image', pictures: [this.FILENAME] }
                this.validShareAuth(params, this.buttons[index])
            },
            // 监听actionSheet关闭
            actionSheetClosed(){
                this.actionSheetVisible = false
            },
            // 打开actionSheet
            showActionSheet(){
                this.actionSheetVisible = true
            },
            // 关闭actionSheet
            closeActionSheet(){
                this.actionSheetVisible = false
            },
            // 打开消息提示
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            // 打开加载
            showLoading(){
                this.loadingVisible = true
            },
            // 关闭加载层
            closeLoading(){
                this.loadingVisible = false
            }
        }
    }
</script>

<style scoped>
    .actionSheet{
        background: #fff;
    }
    .actionSheet_container{
        width: 100%;
        overflow-y: hidden;
        overflow-x: auto;
        overflow-scrolling: touch;
    }
    .actionSheet_list{
        display: flex;
        padding: 0 0.2rem;
    }
    .actionSheet_item{
        display: flex;
        padding: 0.5rem 0.25rem;
        flex-direction: column;
        align-items: center;
    }
    .actionSheet_item_icon{
        width: 0.8rem;
        height: 0.8rem;
        background: #000;
        border-radius: 100%;
    }
    .actionSheet_item_txt1{
        font-size: 0.24rem;
        color: #333; line-height: 0.4rem;
        margin-top: 0.2rem;
        white-space: nowrap;
    }
    .actionSheet_button{
        font-size: 0.32rem;
        color: #333; line-height: 0.9rem;
        border-top: 1px solid #f3f3f3;
        text-align: center;
    }
    .HEADER{
    }
    .page{
        background: #fff;
    }
    .wrapper{
        background: url("../static/images/share_bg.jpg") repeat-x center / auto 100%;
    }
    .content{
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bg_topper{
        background: url("../static/images/share/share_topBg.png") no-repeat center center / cover;
        height: 4.35rem;
        width: 100%;
        background-size:50% 50%;
    }
    .bg_topper_EN{
        background: url("../static/images/share/share_topBg_EN.png") no-repeat center center / cover;
        height: 4.35rem;
        width: 100%;
    }
    .bg_content{
        background: url("../static/images/share_content.png") no-repeat center center / cover;
        width: 80%;
        background-size:100% 100%;
        height: 6.9rem;
        margin-top: -0.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bg_content_EN{
        background: url("../static/images/share_content_EN.png") no-repeat center center / cover;
        width: 80%;
        height: 6.9rem;
        margin-top: -0.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .share_qrcode{
        width: 2.3rem;
        height: 2.3rem;
        background: #fafafa;
        margin-top: .83rem;
        border: 1px solid #203395;
    }
    .share_qrcode img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .share_txt1{
        font-size: .26rem;
        color: #555;
        line-height: .4rem;
    }
    .share_txt2{
        font-size: .26rem;
        color: #555;
        line-height: .4rem;
        margin-top: 0.6rem;
    }
    .share_txt3{
        font-size: .45rem;
        font-weight: bold;
        background: linear-gradient(to bottom, rgb(32, 51, 149), rgb(32, 51, 152));
        background-clip: text;
        color: transparent;
        line-height: .9rem;
    }
    .share_btns{
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 0.3rem;
    }
    .share_btn{
        line-height: .75rem;
        font-size: .28rem;
        text-align: center;
        cursor: pointer;
        color: #fff;
        background: #203395;
        width: 2.3rem;
        font-weight: bold;
    }


    .content.type1 .bg_content{
        margin-top: -2rem;
    }
    .content.type2{
        justify-content: center;
    }
    .content.type2 .bg_topper{
        display: none;
    }
    .content.type2 .bg_content{
        margin-top: 0;
    }
</style>
