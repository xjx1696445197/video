<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">HALE 充币</p>
            <!--<div
                    class="HEADER_RIGHT share"
                    @click="downloadPic('share')"
            ></div>-->
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="main">
                    <div class="clearfix avatar_wrapper">
                        <div class="avatar radius-round fl"
                             :style="{
                                'background': `url(${sourceUrl + detail.currencyImageUrl}) no-repeat center center / cover`}"
                        >

                        </div>
                        <div class="avatar_txt fl">HALE</div>
                    </div>

                    <div class="address" data-initcopyer="true">
                        <p class="address_txt1">{{detail.address}}</p>
                    </div>
                    <div class="qrcode mauto">
                        <img :src="detail.addressImageUrl">
                    </div>
                    <!--<div class="qrcode mauto">
                        <!--<div class="bg_code"></div>
                    </div>-->
                    <div class="share_btn LONGBTN"
                         @click="downloadPic('share')"
                    >{{$t('currencyDetail.currencyDetail_share')}}</div>
                    <div class="tips_wrapper">
                        <div class="tips">
                            <p class="tips_txt1">提示： <br>{{detail.tip}}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>



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
                <div class="actionSheet_button" @click="closeActionSheet">{{$t('layerdate.layerdate_btnCancel')}}</div>
            </div>
        </nlayer>

    </div>

</template>

<script>
    import icon001 from 'static/images/action_icon001.png'
    import icon002 from 'static/images/action_icon002.png'

    import { mapGetters } from 'vuex'
    import { sourceUrl } from '@/config'

    import Nlayer from '@/components/Nlayer'
    import ClipboardJS from 'clipboard'

    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        name: "CurrencyCollect",
        components: {
            Nlayer
        },
        data(){
            return {
                sourceUrl,
                currency: '',
                detail: {},
                actionSheetVisible: false,
                tips: '',
                tipsVisible: false,
                copyer: null,
                type: null,
                dtask: '',
                FILENAME: '',
                shareWX: null,
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
            currencyName(){
                return this.$route.query.currencyName
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
            downloadUrl(){
                return this.detail.addressImageShareUrl
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
            // this.getCode()
            this.setType()
            this.getDetail()
        },
        destroyed(){
            this.copyer && this.copyer.destroy()
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 初始化复制器
            initCopyer(value){
                if( this.copyer ){
                    this.copyer.destroy()
                }

                this.copyer = new ClipboardJS('[data-initcopyer]', {
                    text (){
                        return value
                    }
                }).on('success', () => {
                    this.showTips(this.shareTip1)
                })
            },
            // 获取币详情
            getDetail(refresh=false){
                var that = this
                // currency_detail
                jsonAjax.post(urlUtil.getApiUrl("currency_detail"), {
                    userId: that.userId,
                    currency: 'HALE'
                }, function (result) {
                    console.log(result)
                    if( result.success ){
                        that.detail = {
                            ...result.result.data,
                            tip: result.result.tip
                        }
                        console.log(that.detail)
                        that.initCopyer(that.detail.address)
                        if( refresh ){
                            that.showTips(that.shareTip11)
                        }
                    }
//              	if( result.success ){
//              		that.detail = result.result
//              		that.amount = result.result.vip1Number
//              	}
                })
                return
                this.$http.post('http://39.106.90.111:8184/app/wallet/userWallet/findAmountByCurrency', {
                    userId: 2,
                    currency: 'HALE'
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.detail = {
                            ...res.result.data,
                            tip: res.result.tip
                        }

                        this.initCopyer(this.detail.address)
                        if( refresh ){
                            this.showTips(this.shareTip11)
                        }
                    }
                })
            },
            // 下载分享图片
            downloadPic(flag){
                console.log(this.FILENAME)
                console.log(flag)
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
                    console.log(this.FILENAME)
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
            // 设置初始type
            setType(){
                this.type = this.currencyName
            },
            // 切换币类型
            swtichCurrencyType(e){
                const { type } = e.currentTarget.dataset

                this.type = type
                this.FILENAME = ''
                this.getDetail(true)

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
            }
        }
    }
</script>

<style scoped>
    .page{
        background: #fff;
    }
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
    .wrapper{
        /*background: #fafafa;*/
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
    .content{
        /*padding: 0.3rem;*/
    }
    .main{
        /*box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);*/
        /*padding: 0.3rem;*/
        /*border-radius: .2rem;*/
        /*background: #fff;*/
    }
    .txt1{
        font-size: .3rem;
        color: #333;
        line-height: .8rem;
    }
    .chain_btns{
        display: flex;
        margin-bottom: 0.5rem;
    }
    .chain_btn{
        width: 1.5rem;
        font-size: .26rem;
        color: #333;
        line-height: .6rem;
        background: #fafafa;
        border: 1px solid #eee;
        border-radius: .1rem;
    }
    .chain_btn+.chain_btn{
        margin-left: .4rem;
    }
    .chain_btn.active{
        border: 1px solid #e4811d;
        color: #e4811d;
    }
    .avatar{
        margin-left: 0.25rem;
        /*margin-top: 0.15rem;*/
        width: 0.9rem;
        height: 0.9rem;
        /*box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,.3);*/
        background: #203395;
    }
    .address{
        /*margin-top: 0.3rem;*/
        /*padding: .1rem;*/
        padding-right: 0.6rem;
        padding-left: 0.6rem;
        word-break: break-all;
        word-wrap: break-word;
        text-align: center;
        /*background: #fafafa;*/
        /*border-radius: .1rem;*/
        /*border: 1px solid #eee;*/
        border-bottom: 0.2rem solid #F5F5F5;
        padding-bottom: 0.2rem;
        position: relative;
    }
    .address:after{
        position: absolute;
        right: 0.64rem;
        top: 40%;
        transform: translateY(-50%);
        content: '';
        width: 0.36rem;
        height: 0.36rem;
        background: url("../static/images/video_icon/detail_copy_icon_black.png") no-repeat center center / cover;
    }
    .share{ width: 0.6rem;
        height: 0.6rem;background: url("../static/images/icon/share_icon.png") no-repeat center center / cover; }
    .address_txt1{
        font-size: .26rem;
        color: #333;
        line-height: 1.5;
        width: 95%;
        margin-bottom: 0.25rem;
    }
    .qrcode{
        margin-top: 1.07rem;
        width: 4.2rem;
        height: 4.2rem;
        background: #203395;
    }
    .qrcode img{
        display: block;
        width: 100%;
        height: auto;
    }
    .share_btn{
        margin-top: .9rem;
    }
    .tips{
        background: #fafafa;
        /*border: 1px solid #eee;*/
        padding: .1rem .2rem;
        /*border-radius: .1rem;*/
        margin-top: .5rem;
    }
    .tips_txt1{
        font-size: .22rem;
        color: #aaa;
        line-height: .5rem;
    }

    .bg_code{
        width: 3.3rem;
        height: 3.3rem;
        background: #203395;
    }
    .avatar_txt{
        margin-left: 0.3rem;
        font-size: 0.3rem;
        color:#203395 ;
        line-height: 0.9rem;
        /*margin-top: 0.15rem;*/
    }
    .avatar_wrapper{
        padding: 0.44rem 0.55rem 0.3rem;
    }
    .tips_wrapper{
        padding: 0 0.3rem;
    }
    .LONGBTN{
        width: 6.9rem;
    }
</style>
