<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">积分</p>
        </div>
        <div class="wrapper">
            <div class="wrapper_top">
                <div class="wrapper_upper">
                    <div class="upper clearfix">
                        <div class="wrapper_pic fl"
                             :style="{
                                'background': `url(${sourceUrl + detail.currencyImageUrl}) no-repeat center center / cover`
                            }"
                        ></div>
                        <p class="upper_txt1 fl wrapper_left">积分</p>
                        <p class="upper_txt1 fr wrapper_right">{{amount}}</p>
                    </div>
                    <div class="upper_btn BUTTON_SHADOW" @click="toCurrencyExchange">兑换</div>
                </div>
            </div>
            <!--全部 收益 兑换-->
            <div class="content">
                <div class="content_pos">
                    <md-tab-bar
                            :items="tabs"
                            @change="onTabChange"
                            class="COMMON_TABS"
                    ></md-tab-bar>
                    <div class="scroll_wrapper">
                        <div class="scroll_pos">
                            <md-scroll-view
                                    ref="scrollView"
                                    :scrolling-x="false"
                                    :auto-reflow="true"
                                    :manual-init="true"
                                    :immediate-check-end-reaching="true"
                                    @refreshing="$_onRefresh"
                                    @end-reached="$_onEndReached"
                            >
                                <md-scroll-view-refresh
                                        slot="refresh"
                                        slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
                                        :scroll-top="scrollTop"
                                        :is-refreshing="isRefreshing"
                                        :is-refresh-active="isRefreshActive"
                                        :refreshText="$t('statustest.status_refresh')"
                                        :refreshActiveText="$t('statustest.status_refreshed')"
                                        :refreshingText="$t('statustest.status_refreshing')"
                                ></md-scroll-view-refresh>

                                <div class="list">
                                    <div class="item_wrapper"
                                         v-for="(item, index) in list"
                                         :key="item.id"
                                         @click="toDetail"
                                         :data-id="item.id"
                                         :data-oid='item.orderId'
                                         :data-state="item.confirmStatus"
                                         :data-type="item.transferType"
                                    >
                                        <div
                                                class="item type1"
                                                v-if="type==0 && item.transferType!=15"
                                        >
                                            <div class="item_icon"></div>
                                            <!--<div class="item_arr"></div>-->
                                            <div class="item_top">
                                                <p class="item_txt1" v-if="item.transferType==16">活动视频积分奖励</p>
                                                <p class="item_txt1" v-if="item.transferType==17">直属粉丝积分奖励</p>
                                                <p class="item_txt1" v-if="item.transferType==18">星级团队积分奖励</p>
                                                <p class="item_txt1" v-if="item.transferType==19">代理积分奖励</p>
                                                <p class="item_txt2">{{'+'}}{{ item.amount | tofixed4}}{{` ${currencyName}`}}</p>
                                            </div>
                                            <div class="item_sub">
                                                <p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                                                <p class="item_txt4">
                                                    {{$t('currencyDetail.currencyDetail_complete')}}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                                class="item type2"
                                                v-if="item.transferType==15"
                                        >
                                            <div class="item_icon"></div>
                                            <div class="item_arr"></div>
                                            <div class="item_top">
                                                <p class="item_txt1">{{'+'}}{{ item.hash | tofixed4}} CHMC</p>
                                                <p class="item_txt2">{{'-'}}{{ item.amount | tofixed4}}{{` ${currencyName}`}}</p>
                                            </div>
                                            <div class="item_sub">
                                                <p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                                                <p class="item_txt4">
                                                    {{$t('currencyDetail.currencyDetail_complete')}}
                                                </p>
                                            </div>
                                        </div>


                                        <div
                                                class="item type1"
                                                v-if="type==1"
                                        >
                                            <div class="item_icon"></div>
                                            <!--<div class="item_arr"></div>-->
                                            <div class="item_top">
                                                <p class="item_txt1" v-if="item.transferType==16">活动视频积分奖励</p>
                                                <p class="item_txt1" v-if="item.transferType==17">直属粉丝积分奖励</p>
                                                <p class="item_txt1" v-if="item.transferType==18">星级团队积分奖励</p>
                                                <p class="item_txt1" v-if="item.transferType==19">代理积分奖励</p>
                                                <p class="item_txt2">{{'+'}}{{ item.amount | tofixed4}}{{` ${currencyName}`}}</p>
                                            </div>
                                            <div class="item_sub">
                                                <p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                                                <p class="item_txt4">
                                                    {{$t('currencyDetail.currencyDetail_complete')}}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                                class="item type3"
                                                v-if="item.transferType == 1"
                                        >
                                            <div class="item_icon"></div>
                                            <div class="item_arr"></div>
                                            <div class="item_top">
                                                <p class="item_txt1">{{$t('currencyDetail.currencyDetail_exchanged')}}</p>
                                                <p class="item_txt2" v-if="currencyName == 'HALE'">{{'+'}}{{ item.amount | tofixed4}}{{' HALE'}}</p>
                                                <p class="item_txt2" v-else>{{'-'}}{{ item.amount | tofixed4}}{{' USDT'}}</p>
                                            </div>
                                            <div class="item_sub">
                                                <p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                                            </div>
                                        </div>

                                        <!--<div-->
                                        <!--class="item type3"-->
                                        <!--v-if="item.transferType == 13"-->
                                        <!--&gt;-->
                                        <!--<div class="item_icon"></div>-->
                                        <!--<div class="item_arr"></div>-->
                                        <!--<div class="item_top">-->
                                        <!--<p class="item_txt1">{{$t('currencyDetail.currencyDetail_exchanged')}}</p>-->
                                        <!--<p class="item_txt2" v-if="currencyName == 'HALE'">{{'-'}}{{ item.amount | tofixed4}}{{' HALE'}}</p>-->
                                        <!--<p class="item_txt2" v-else>{{'-'}}{{ item.amount | tofixed4}}{{' USDT'}}</p>-->
                                        <!--</div>-->
                                        <!--<div class="item_sub">-->
                                        <!--<p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>-->
                                        <!--</div>-->
                                        <!--</div>-->
                                    </div>

                                </div>

                                <md-scroll-view-more
                                        slot="more"
                                        :is-finished="isFinished"
                                        :finishedText="$t('statustest.status_All_loaded')"
                                        :loadingText="$t('statustest.status_loading')"
                                >
                                </md-scroll-view-more>
                            </md-scroll-view>
                        </div>

                    </div>



                </div>

            </div>
        </div>
        <!--检测是实名认证-->
        <nlayer
                :visible="noRealAuthenDig"
                @close="noRealAuthenDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_tips')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    {{$t('layerdate.layerdate_realAuthen')}}
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closeNoRealAuthenDig'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='toIdCardAuthen'
                    >{{$t('layerdate.layerdate_authen')}}</div>
                </div>
            </div>
        </nlayer>
    </div>
</template>
<script>
    import TabBar from 'mand-mobile/lib/tab-bar'
    import ScrollView from 'mand-mobile/lib/scroll-view'
    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'
    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'
    import Nlayer from '@/components/Nlayer'

    import ClipboardJS from 'clipboard'

    import { mapGetters } from 'vuex'
    import { sourceUrl } from "@/config"
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'

    const PAGENO = 1

    export default {
        name: "IntegralDetail",
        components: {
            [TabBar.name]: TabBar,
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore,
            Nlayer
        },
        data(){
            return {
                noRealAuthenDig:false,
                sourceUrl,
                pageNo: PAGENO,
                pageSize: 10,
                list: [],
                type: null,
                isFinished: false,
                locked: false,
                detail: {},
                tips: '',
                tipsVisible: false,
                copyer: null,
                amount:null
            }
        },
        computed: {
            currencyName(){
                return '积分'
            },
            allTip(){
                return this.$t('currencyDetail.currencyDetail_all')
            },
            receiveTip(){
                return this.$t('currencyDetail.currencyDetail_receivables')
            },
            transferTip(){
                return this.$t('currencyDetail.currencyDetail_transferAccounts')
            },
            exchangeTip(){
                return this.$t('currencyDetail.currencyDetail_exchange')
            },
            shareTip1(){
                return this.$t('share.share_tips1')
            },
            tabs(){
                const original = [
                    {name: 0, label: this.allTip, type: '0'},
                    {name: 1, label: '奖励', type: '1'},
                    {name: 2, label: '兑换', type: '2'},
                    // {name: 3, label: this.exchangeTip, type: '4'}
                ]

                return original
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            }
        },
        mounted(){
            this.getDetail()
            this.setType()
            this.initScrollView()
        },
        destroyed(){
            this.copyer.destroy()
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 打开消息提示
            showTips(msg, refresh=true){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            // 初始化复制器
            initCopyer(value){
                this.copyer = new ClipboardJS('[data-initcopyer]', {
                    text (){
                        return value
                    }
                }).on('success', () => {
                    this.showTips(this.shareTip1)
                })

            },
            // 获取币详情
            getDetail(){
                // 获取币详情数据
                var that = this
                jsonAjax.post(urlUtil.getApiUrl("currency_detail"), {
                    userId:that.userId,
                    currency:'CREDITS'
                }, function (result) {
                    console.log(result)
//              	return
                    if( result.success ){
                        that.amount = result.result.data.amount
                        that.detail = result.result.data
//              		that.amount = result.result.vip1Number
                    }
                })

                return
                this.$http.post('app/wallet/userWallet/getRateByCurrency', {
                    userId: this.userId,
                    currency: 'CREDITS'
                }).then((res) => {
                    console.log(res)
                    return
                    if( res.success ){
                        this.detail = res.result
                        this.initCopyer(res.result.address)
                    }
                })
            },
            // 跳转到实名认证
            toIdCardAuthen(){
                // 检测当前用户有没有实名认证
                if(!JSON.parse(localStorage.getItem('certification'))){
                    this.$push({
                        path: '/realNameAuthen'
                    })
                }else{
                    this.$push({
                        path: '/finishAuthen'
                    })
                }

            },
            // 关闭未实名提示弹窗
            closeNoRealAuthenDig(){
                this.noRealAuthenDig = false
            },
            // 打开未实名提示弹窗
            openNoRealAuthenDig(){
                this.noRealAuthenDig = true
            },
            // 监听关闭无密码弹窗事件
            noRealAuthenDigClose(){
                this.noRealAuthenDig = false
            },
            // 设置初始type
            setType(){
                this.type = this.tabs[0].type
            },
            // 初始化scrollview
            initScrollView(){
                this.$refs.scrollView.init()
            },
            // 加载数据
            getData(refresh=false){
//              return
                this.$http.get('app/wallet/userWalletTransfer/getUserTransfer', {
                    userId: this.userId,
                    type: this.type,
                    currency: 'CREDITS',
                    pageSize: this.pageSize,
                    pageNo: this.pageNo,
                    stater:1
                }).then((res) => {
                    console.log(res)
                    if( res.returnCode == 1 ){
                        if( refresh ){
                            this.list = res.resultData
                            this.$refs.scrollView.finishRefresh()
                        } else {
                            this.$refs.scrollView.finishLoadMore()
                            this.list.push(...res.resultData)
                        }

                        this.pageNo += 1
                        this.locked = false

                        if( res.resultData.length < this.pageSize ){
                            this.isFinished = true
                            this.$refs.scrollView.loadend()
                        }
                    }
                })
            },
            // 切换tab
            onTabChange(item) {
                const {
                    type
                } = item

                this.type = type

                if( this.$refs.scrollView ){
                    this.$refs.scrollView.finishLoadMore()
                    this.$refs.scrollView.triggerRefresh()
                }
            },
            // 滚动触底事件 此时要加载数据
            $_onEndReached(index) {
                if (this.isFinished || this.locked) {
                    return
                }

                this.locked = true

                this.getData()
            },

            // 刷新中事件 此时要刷新数据
            $_onRefresh() {
                if( this.locked ){
                    return
                }

                this.isFinished = false
                this.pageNo = PAGENO
                this.locked = true

                this.getData(true)
            },
            // 去详情
            toDetail(e){
                const {
                    id,
                    oid,
                    state,
                    type
                } = e.currentTarget.dataset


                if( type != 15 ){
                    return
                }

                this.$push({
                    path: '/exchangeDealDetail',
                    query: {
                        id: oid,
                        currencyName: this.currencyName,
                        dealResState: 1,
                        dealName: 1
                    }
                })

//              this.$push({
//                  path: '/currencyDealDetail',
//                  query: {
//                      id: id,
//                      currencyName: this.currencyName,
//                      dealResState: state,
//                      dealName: type
//                  }
//              })
            },
            // 去币收款
            toCurrencyCollect(){
                this.$push({
                    path: '/currencyCollect',
                    query: {
                        currencyName: this.currencyName
                    }
                })
            },
            // 去币转账
            toCurrencyTransfer(){
                this.$push({
                    path: '/currencyTransfer',
                    query: {
                        currencyName: this.currencyName
                    }
                })
            },
            // 去币兑换
            // 去币兑换
            toCurrencyExchange(){
//              this.$push({
//                  path: '/currencyExchange',
//                  query: {
//                      currencyName: this.currencyName
//                  }
//              })
                if(!JSON.parse(localStorage.getItem('certification'))){
                 this.openNoRealAuthenDig()
                }else{
                    this.$push({
                        path: '/ShopExchangepoints',
                        query: {
                            currencyName: 'CHMC'
                        }
                    })
                }

            },
//          toCurrencyExchange(){
//              this.$push({
//                  path: '/currencyExchange',
//                  query: {
//                      currencyName: this.currencyName
//                  }
//              })
//          },
        }
    }
</script>
<style scoped>
    .page{
        background: #fff;
    }
    .COMMON_TABS{
        height: 0.85rem;
    }

    .scroll_wrapper{
        flex: 1;
        position: relative;
    }
    .content_pos{
        height: 100%;
        position: absolute;
        left: 0;
        top: 0; flex-direction: column;
        width: 100%;
        display: flex;
    }
    .scroll_pos{
        position: absolute;
        height: 100%;
        left: 0;
        top: 0.3rem;
        width: 100%;
    }
    .wrapper{
        height: 100%;
        display: flex; position: relative;
        flex-direction: column; box-sizing: border-box;
    }


    .header{
        padding: 0.3rem;
    }
    .main{
        padding: 0.5rem 0.45rem 0.45rem;
        background: #fff;
        border-radius: 0.2rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
    }
    .top{
        display: flex;
    }
    .avatar{
        width: 1rem; background: #000;
        height: 1rem;
    }
    .top_main{
        display: flex; justify-content: space-between;
        flex: 1;
        margin-left: 0.2rem;
    }
    .currency_name{
        font-size: 0.4rem;
        color: #333;
        line-height: 1rem;
    }
    .currency_count{
        font-size: 0.4rem;
        color: #333;
        line-height: 1rem;
    }
    .currency_address_display{
        display: none;
    }
    .currency_address_display .upper_btn{
        /*display: none;*/
        margin-top:0.2rem;
    }
    .currency_address{
        position: relative;
        padding: 0.3rem 0;
        margin-top: 0.15rem;
        padding-right: 0.3rem;
        word-break: break-all;
        word-wrap: break-word;
        /*white-space:nowrap;*/
        overflow: hidden;
        text-overflow:ellipsis;
        /*border-bottom: 1px solid #aaa;*/
    }
    .currency_address:after{
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.36rem;
        height: 0.36rem;
        background: url("../static/images/video_icon/detail_copy_icon.png") no-repeat center center / cover;
    }
    .currency_address_txt{
        font-size: 0.26rem;
        color: #fff;
        line-height: 0.3rem;
        padding: 0 0.2rem;
        text-align: center;
    }
    .btns{
        display: flex; justify-content: center;
        margin-top: 0.4rem;

    }
    .btn{
        width: 2.2rem;
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.65rem;
        text-align: center;
    }
    .btn+.btn{
        margin-left: 0.3rem;
    }
    .list{
        padding: 0 0.3rem;
    }
    .item{
        position: relative;
        padding: 0.3rem 0.6rem;
        border-bottom: 1px solid #aaa;
    }



    .item.type1 .item_icon{
        background: url("../static/images/video_icon/icon_invest.png") no-repeat center center / cover;
    }
    .item.type1 .item_txt2{
        color: #203395;
    }
    .item.type2 .item_icon{
        background: url("../static/images/video_icon/icon_exchange.png") no-repeat center center / cover;
    }
    .item.type2 .item_txt1{
        color: #203395;
    }
    .item.type2 .item_txt2{
        color: #e41d1d;
    }
    .item.type3 .item_icon{
        background: url("../static/images/video_icon/icon_exchange.png") no-repeat center center / cover;
    }
    .item.type3 .item_txt2{
        color: #1d92e4;
    }
    .item.type3 .item_arr{
        display: none;
    }

    .item_arr{
        position: absolute;
        right: 0;
        top: 50%;
        width: 0.4rem;
        height: 0.4rem;
        transform: translateY(-50%);
        background: url("../static/images/icon/notice_icon_right.png") no-repeat center center / cover;
    }
    .item_icon{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.4rem;
        height: 0.4rem;
    }
    .item_top{
        display: flex; justify-content: space-between;
    }
    .item_sub{
        display: flex; justify-content: space-between;
    }
    .item_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.45rem;
    }
    .item_txt2{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.45rem;
    }
    .item_txt3{
        font-size: 0.2rem;
        color: #aaa;
        line-height: 0.35rem;
    }
    .item_txt4{
        font-size: 0.2rem;
        color: #aaa;
        line-height: 0.35rem;
    }



    .wrapper_upper{
        position: absolute;
        top: 0.44rem;
        left: 0;
        padding: 0 0.55rem;
    }
    .wrapper_btns{
        position: absolute;
        bottom: -0.3rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .wrapper_pic{
        width: 0.9rem;
        height: 0.9rem;
        background: #FFF;
        border-radius: 50rem;

    }
    .upper_txt1{
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.9rem;
    }
    .upper_txt2{
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.45rem;
    }
    .upper_txt3{
        font-size: 0.22rem;
        color:rgba(255,255,255,0.5);
        line-height: 0.45rem;
    }
    .wrapper_left{
        width: 2rem;
        margin-left: 0.42rem;
    }
    .wrapper_right{
        width: 3rem;
        text-align: right;
    }
    .upper_btn{
        width: 3rem;
        height: 0.7rem;
        background: #fff;
        border-radius: 0.4rem;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.7rem;
        text-align: center;
        margin:0.1rem auto 0;
    }
    .upper_btn_withDraw{
        width: 50%;
        padding-left: 0.1rem;
    }

    .upper_btn_exchange{
        width: 50%;
        border-left: 1px solid #203395;
        padding-right: 0.1rem;
    }

    .COMMON_TABS{
        height: 0.85rem;
    }
    .scroll_wrapper{
        flex: 1;
        position: relative;
    }
    .content_pos{
        height: 100%;
        position: absolute;
        left: 0;
        top: 0; flex-direction: column;
        width: 100%;
        display: flex;
    }
    .scroll_pos{
        position: absolute;
        height: 100%;
        left: 0;
        top: 0.3rem;
        width: 100%;
    }
    .wrapper_top{
        /*margin-top: 0.88rem;*/
        background: #fff;
        position: relative;
        width:100%;
        height: 2.2rem;
        background: url("../static/images/video_icon/integral_icon_bg.png") no-repeat center center /cover;
    }
    .wrapper_upper{
        position: absolute;
        top: 0.44rem;
        left: 0;
        padding: 0 0.55rem;
    }
    .wrapper_pic{
        width: 0.9rem;
        height: 0.9rem;
        background: #FFF;
        border-radius: 50rem;

    }
    .upper_txt1{
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.9rem;
    }
    .wrapper_left{
        width: 2rem;
        margin-left: 0.42rem;
    }
    .wrapper_right{
        width: 3rem;
        text-align: right;
    }
    .upper_btn{
        width: 3rem;
        height: 0.7rem;
        background: #fff;
        border-radius: 0.4rem;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.7rem;
        text-align: center;
        margin:0.5rem auto 0;
    }

    .list{
        padding: 0 0.3rem;
    }
    .item{
        position: relative;
        padding: 0.3rem 0.6rem;
        border-bottom: 1px solid #aaa;
    }




    .item_arr{
        position: absolute;
        right: 0;
        top: 50%;
        width: 0.4rem;
        height: 0.4rem;
        transform: translateY(-50%);
        background: url("../static/images/icon/notice_icon_right.png") no-repeat center center / cover;
    }
    .item_icon{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.4rem;
        height: 0.4rem;
    }
    .item_top{
        display: flex; justify-content: space-between;
    }
    .item_sub{
        display: flex; justify-content: space-between;
    }
    .item_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.45rem;
    }
    .item_txt2{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.45rem;
    }
    .item_txt3{
        font-size: 0.2rem;
        color: #aaa;
        line-height: 0.35rem;
    }
    .item_txt4{
        font-size: 0.2rem;
        color: #aaa;
        line-height: 0.35rem;
    }

    .COMMON_TABS{
        height: 1rem;
    }
    .scroll_wrapper{
        flex: 1;
        position: relative;
    }
    .content_pos{
        height: 100%;
        position: absolute;
        left: 0;
        top: 0; flex-direction: column;
        width: 100%;
        display: flex;
    }
    .scroll_pos{
        position: absolute;
        height: 100%;
        left: 0;
        top: 0.3rem;
        width: 100%;
    }
    .wrapper{
        height: 100%;
        display: flex; position: relative;
        flex-direction: column; box-sizing: border-box;
    }


    .header{
        padding: 0.3rem;
    }
    .main{
        padding: 0.5rem 0.45rem 0.45rem;
        background: #fff;
        border-radius: 0.2rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
    }
    .top{
        display: flex;
    }
    .avatar{
        width: 1rem; background: #000;
        height: 1rem;
    }
    .top_main{
        display: flex; justify-content: space-between;
        flex: 1;
        margin-left: 0.2rem;
    }
    .currency_name{
        font-size: 0.4rem;
        color: #333;
        line-height: 1rem;
    }
    .currency_count{
        font-size: 0.4rem;
        color: #333;
        line-height: 1rem;
    }
    .currency_address_display{
        display: none;
    }
    .currency_address_display .upper_btn{
        /*display: none;*/
        margin-top:0.2rem;
    }
    .currency_address{
        position: relative;
        padding: 0.3rem 0;
        margin-top: 0.15rem;
        padding-right: 0.3rem;
        word-break: break-all;
        word-wrap: break-word;
        /*white-space:nowrap;*/
        overflow: hidden;
        text-overflow:ellipsis;
        /*border-bottom: 1px solid #aaa;*/
    }
    .currency_address:after{
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.36rem;
        height: 0.36rem;
        background: url("../static/images/video_icon/detail_copy_icon.png") no-repeat center center / cover;
    }
    .currency_address_txt{
        font-size: 0.26rem;
        color: #fff;
        line-height: 0.3rem;
        padding: 0 0.2rem;
        text-align: center;
    }
    .btns{
        display: flex; justify-content: center;
        margin-top: 0.4rem;

    }
    .btn{
        width: 2.2rem;
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.65rem;
        text-align: center;
    }
    .btn+.btn{
        margin-left: 0.3rem;
    }
    .list{
        padding: 0 0.3rem;
        /*height: 5rem;*/
    }
    .item{
        position: relative;
        padding: 0.3rem 0.6rem;
        border-bottom: 1px solid #aaa;
    }





    .item_arr{
        position: absolute;
        right: 0;
        top: 50%;
        width: 0.4rem;
        height: 0.4rem;
        transform: translateY(-50%);
        background: url("../static/images/icon/notice_icon_right.png") no-repeat center center / cover;
    }
    .item_icon{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.4rem;
        height: 0.4rem;
    }
    .item_top{
        display: flex; justify-content: space-between;
    }
    .item_sub{
        display: flex; justify-content: space-between;
    }
    .item_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.45rem;
    }
    .item_txt2{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.45rem;
    }
    .item_txt3{
        font-size: 0.2rem;
        color: #aaa;
        line-height: 0.35rem;
    }
    .item_txt4{
        font-size: 0.2rem;
        color: #aaa;
        line-height: 0.35rem;
    }



    .wrapper_upper{
        position: absolute;
        top: 0.44rem;
        left: 0;
        padding: 0 0.55rem;
    }
    .wrapper_btns{
        position: absolute;
        bottom: -0.3rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .wrapper_pic{
        width: 0.9rem;
        height: 0.9rem;
        background: #FFF;
        border-radius: 50rem;

    }
    .upper_txt1{
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.9rem;
    }
    .upper_txt2{
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.45rem;
    }
    .upper_txt3{
        font-size: 0.22rem;
        color:rgba(255,255,255,0.5);
        line-height: 0.45rem;
    }
    .wrapper_left{
        width: 2rem;
        margin-left: 0.42rem;
    }
    .wrapper_right{
        width: 3rem;
        text-align: right;
    }
    /*.upper_btn{
        width: 3rem;
        height: 0.7rem;
        background: #fff;
        border-radius: 0.4rem;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.7rem;
        text-align: center;
        margin:0.1rem auto 0;
    }*/
    .upper_btn_withDraw{
        width: 50%;
        padding-left: 0.1rem;
    }

    .upper_btn_exchange{
        width: 50%;
        border-left: 1px solid #203395;
        padding-right: 0.1rem;
    }
    .content{
        margin-top: 0.5rem;
    }

    .md-scroll-view .scroll-view-container {
        position: relative;
        height: 100%;
    }
    .content{
        flex: 1; background: #fff; position: relative;
    }
</style>