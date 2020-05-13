
<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{titleName}}</p>
            <div
                    class="HEADER_RIGHT share"
                    @click="downloadPic('share')"
            ></div>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="main">
                    <div class="detail_top tcenter"
                         :class="[querys.dealResState == 1 ? 'state1' : 'state2']"
                    >
                        <div class="detail_icon mauto radius-round"></div>
                        <p class="detail_txt1">{{dealFlag}}{{(detail.amount - detail.fee) | tofixed4}}</p>
                        <p class="detail_txt2">{{`${querys.currencyName} ${dealName} ${dealStateTxt}`}}</p>
                    </div>

                    <div class="detail_list">
                        <div class="detail_item">
                            <p class="detail_item_txt1">{{$t('currencyDetail.currencyDetail_sendAddress')}}</p>
                            <p class="detail_item_txt2">{{detail.sendAddress || '------'}}</p>
                        </div>
                        <div class="detail_item">
                            <p class="detail_item_txt1">{{$t('currencyDetail.currencyDetail_receiveAddress')}}</p>
                            <p class="detail_item_txt2">{{detail.receiveAddress || '------'}}</p>
                        </div>
                        <div class="detail_item">
                            <p class="detail_item_txt1">{{$t('currencyDetail.currencyDetail_fee')}}</p>
                            <p class="detail_item_txt2">{{String(detail.fee) || '------'}} {{querys.currencyName}}</p>
                        </div>
                        <div class="detail_item">
                            <p class="detail_item_txt1">{{$t('currencyDetail.currencyDetail_block')}}</p>
                            <p class="detail_item_txt2">{{detail.height || '------'}}</p>
                        </div>
                        <div class="detail_item">
                            <p class="detail_item_txt1">{{$t('currencyDetail.currencyDetail_Transaction_time')}}</p>
                            <p class="detail_item_txt2">{{(detail.time || '------') | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                        </div>
                        <div class="detail_item">
                            <p class="detail_item_txt1">{{$t('currencyDetail.currencyDetail_Transaction_ID')}}</p>
                            <p class="detail_item_txt2">{{detail.transactionId || '------'}}</p>
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
    // <!--// id 详情id-->
    // <!--// newsId 已读设置-->
    // <!--// currencyName 币名称-->
    // <!--// dealName 交易类型-->
    // <!--// dealResState 交易结果类型-->

    import icon001 from 'static/images/action_icon001.png'
    import icon002 from 'static/images/action_icon002.png'

    import { mapGetters, mapActions } from 'vuex'

    import { sourceUrl } from '@/config'

    import Nlayer from '@/components/Nlayer'

    export default {
        name: "CurrencyDealDetail",
        components: {
            Nlayer
        },
        data(){
            return {
                detail: {},
                sourceUrl,
                actionSheetVisible: false,
                tips: '',
                tipsVisible: false,
                dtask: '',
                FILENAME: '',
                shareWX: null,

            }
        },
        computed: {
            userinfo() {
                return this.getUserinfo()
            },
            userId() {
                return this.userinfo.customerId
            },
            customerToken() {
                return this.userinfo.customerToken
            },
            querys() {
                return this.$route.query
            },
            receiveTip() {
                return this.$t('currencyDetail.currencyDetail_receivablesTitle')
            },
            transferTip() {
                return this.$t('currencyDetail.currencyDetail_transferAccountsTitle')
            },
            isFinish() {
                return this.$t('statustest.status_transfer')
            },
            Finished(){
                return this.$t('statustest.status_transter_finished')
            },
            titleName(){
                if( this.querys.currencyName == 'HALE' ){
                    return '充币详情'
                }else{
                    return '提币详情'
                }
            },
            dealName(){
                if( this.querys.dealName == 1 ){
                    return '充币'
                } else if( this.querys.dealName == 2 ) {
                    return '提币'
                } else {
                    return ''
                }
            },
            dealFlag(){
                if( this.querys.dealName == 2 ){
                    return '-'
                }  else {
                    return '+'
                }
            },
            dealStateTxt(){
                if( this.querys.dealResState == 1 ){
                    return this.Finished
                } else {
                    return '进行中'
                }
            },
            downloadUrl(){
                return this.detail.halleInSuccess
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
            this.getDetail()
        },
        methods: {
            ...mapActions(['setUserNoticeState']),
            ...mapGetters(['getUserinfo']),
            // 获取详情
            getDetail(){
                this.$http.get('app/wallet/userWalletTransfer/getTransferInfoByOrderId', {
                    orderId: this.querys.id,
                    currency: this.querys.currencyName,
                    customerToken: this.customerToken
                }).then((res) => {
                    console.log(res)
                    if (res.returnCode) {
                        this.detail = res.resultData
                    }
                })

                if( this.querys.newsId ){
                    this.markRead()
                }
            },
            // 标记已读 ?
            markRead(){
                this.$http.get('app/message/markReadMsg', {
                    userId: this.userId,
                    id: this.querys.newsId,
                    customerToken: this.customerToken
                }).then((res) => {
                    if( res.returnCode == 1 ){
                    	this.setUserNoticeState()
//
                    }
                })
            },
            // 下载分享图片
            downloadPic(flag){
                console.log(this.detail)
                if(this.detail.halleInSuccess == '-'){
                    this.showTips(this.shareTip4)
                    return
                }

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
                    this.showTips(this.shareTip7 + e.message)
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
    .wrapper{
        background: #fff;
        overflow-y: scroll;
        overflow-x: hidden;
        overflow-scrolling: touch;
    }
    .share{ width: 0.6rem;
        height: 0.6rem;background: url("../static/images/icon/share_icon.png") no-repeat center center / cover;
    }
    .content{
        /*padding: 0.3rem;*/
    }
    .main{
        /*box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);*/
        /*border-radius: 0.2rem;*/
        padding: .65rem .3rem;
    }
    .detail_top.state1 .detail_icon{
        background: url("../static/images/video_icon/icon_success.png") no-repeat center center / cover;
    }
    .detail_top.state2 .detail_icon{
        background: url("../static/images/icon/ongoing_icon.png") no-repeat center center / cover;
    }
    .detail_top.state2 .detail_txt2{
        color: #ccc;
    }
    .detail_icon{
        width: 1.2rem;
        height: 1.2rem;
    }
    .detail_txt1{
        font-size: .3rem;
        color: #203395;
        line-height: .6rem;
        margin-top: 0.15rem;
    }
    .detail_txt2{
        /*margin-top: 0.15rem;*/
        font-size: .22rem;
        color: #333;
        line-height: .45rem;
    }
    .detail_list{
        margin-top: 0.5rem;
    }
    .detail_item{
        padding: .24rem 0 .18rem;
    }
    .detail_item {
        border-bottom: 1px solid #eee;
    }
    .detail_item_txt1{
        font-size: .26rem;
        color: #333;
        line-height: .45rem;
    }
    .detail_item_txt2{
        font-size: .2rem;
        color: #666;
        line-height: .3rem;
        word-wrap: break-word;
    }
</style>
