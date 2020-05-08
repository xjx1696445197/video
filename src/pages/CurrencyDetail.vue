<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE" v-text="currencyName"></p>
        </div>

        <div class="wrapper">
            <div class="">
                <div
                        :class="currencyName == 'HALE' ? 'wrapper_top_HALE' : 'wrapper_top_CHMC'"
                >
                    <div class="wrapper_upper">
                        <div class="upper clearfix">
                            <div
                                    class="wrapper_pic fl"
                                    :style="{
                                'background': `url(${sourceUrl + detail.currencyImageUrl}) no-repeat center center / cover`
                            }"
                            ></div>
                            <p class="upper_txt1 fl wrapper_left" v-text="currencyName"></p>
                            <p class="upper_txt1 fr wrapper_right" v-if="currencyName == 'HALE'">{{detail.amount}}</p>
                            <div class="fr wrapper_right" v-if="currencyName == 'CHMC'">
                                <p class="upper_txt2">{{detail.amount}}</p>
                                <p class="upper_txt3">{{detail.lockAmount}}  封藏</p>
                            </div>

                        </div>
                        <div
                                :class="currencyName == 'HALE' ? '' : 'currency_address_display'"
                                class="currency_address"
                                data-initcopyer="true"
                        >
                            <p class="currency_address_txt">{{(detail.address || '0xF465D12A56F16S5D1F56S1D56F1S64F5S')}}</p>
                        </div>

                    </div>
                    <div class="wrapper_btns" v-if="currencyName!='HALE'">
                        <div class="upper_btn BUTTON_SHADOW clearfix">
                            <p class="fl upper_btn_withDraw" @click="toCurrencyCollect" v-if="currencyName=='HALE'">充币</p>
                            <p class="fl upper_btn_withDraw" @click="toCurrencyTransfer" v-if="currencyName=='CHMC'">提币</p>
<!--                            <p class="fl upper_btn_exchange" @click="toCurrencyExchange">兑换</p>-->
                        </div>
                    </div>
                    <div class="wrapper_btns" v-if="currencyName=='HALE'">
                        <div class="upper_btn BUTTON_SHADOW">
                            <p class="" @click="toCurrencyCollect">充币</p>

                        </div>
                    </div>
                </div>
                <!--<div class="main">
                    <div class="top">
                        <div
                            class="avatar radius-round"
                            :style="{
                                'background': `url(${sourceUrl + detail.currencyImageUrl}) no-repeat center center / cover`
                            }"
                        ></div>
                        <div class="top_main">
                            <p class="currency_name" v-text="currencyName"></p>
                            <p class="currency_count">{{detail.amount | tofixed4}}</p>
                        </div>
                    </div>
                    <div class="currency_address" data-initcopyer="true">
                        <p class="currency_address_txt">{{(detail.address || '------') | addressFormat('11')}}</p>
                    </div>

                    <div class="btns" v-if="currencyName == 'USDT'">
                        <div
                            class="btn BUTTON_BG radius-half"
                            @click="toCurrencyCollect"
                        >{{$t('currencyDetail.currencyDetail_receivables')}}</div>
                        <div
                            class="btn BUTTON_BG radius-half"
                            @click="toCurrencyTransfer"
                        >{{$t('currencyDetail.currencyDetail_transferAccounts')}}</div>
                        <!--<div-->
                <!--class="btn BUTTON_BG radius-half"-->
                <!--@click="toCurrencyExchange"-->
                <!--&gt;{{$t('currencyDetail.currencyDetail_exchange')}}</div>
            </div>

            <div class="btns" v-else>
                <div
                    class="btn BUTTON_BG radius-half"
                    @click="toCurrencyCollect"
                >{{$t('currencyDetail.currencyDetail_receivables')}}</div>
                <div
                    class="btn BUTTON_BG radius-half"
                    @click="toCurrencyTransfer"
                >{{$t('currencyDetail.currencyDetail_transferAccounts')}}</div>
            </div>
        </div>-->
            </div>
            <div class="content">
                <div class="content_pos">
                    <md-tab-bar
                            :items="currencyName == 'CHMC'? tabs:tabss"
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
                                         :data-state="item.confirmStatus"
                                         :data-type="item.transferType"
                                         :data-orderId="item.orderId"
                                    >


                                        <!--<div-->
                                        <!--class="item type1"-->
                                        <!--v-if="item.transferType == 14 || item.transferType == 14"-->
                                        <!--&gt;-->
                                        <!--&lt;!&ndash;<div class="item_icon"></div>&ndash;&gt;-->
                                        <!--<div class="item_icon1" v-if="currencyName == 'HALE'"></div>-->
                                        <!--<div class="item_icon" v-if="currencyName != 'HALE'"></div>-->
                                        <!--<div class="item_arr"></div>-->
                                        <!--<div class="item_top">-->
                                        <!--<p class="item_txt1">{{item.origin | addressFormat}}</p>-->
                                        <!--<p class="item_txt2">{{'+'}}{{ item.amount | tofixed4}}{{` ${currencyName}`}}</p>-->
                                        <!--</div>-->
                                        <!--<div class="item_sub">-->
                                        <!--<p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>-->
                                        <!--<p class="item_txt4">-->
                                        <!--{{item.confirmStatus == 1 ? $t('currencyDetail.currencyDetail_complete') : $t('currencyDetail.currencyDetail_haveInHand')}}-->
                                        <!--</p>-->
                                        <!--</div>-->
                                        <!--</div>-->

                                        <!--哈雷兑换-->
                                        <div
                                                class="item type3"
                                                v-if="item.transferType == 14"
                                        >
                                            <div class="item_icon"></div>
                                            <div class="item_arr"></div>
                                            <div class="item_top">
                                                <p class="item_txt1">{{'+'}}{{ item.hash | tofixed4}}{{' CHMC'}}</p>
                                                <p class="item_txt2"></p>
                                                <p class="item_txt2">{{'-'}}{{ item.amount | tofixed4}}{{' hale'}}</p>
                                            </div>
                                            <div class="item_sub">
                                                <p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                                                <p class="item_txt3">完成</p>
                                            </div>
                                        </div>
                                        <!--哈雷充币-->
                                        <div
                                                class="item type10"
                                                v-if="item.transferType == 1"
                                        >
                                            <div class="item_icon"></div>
                                            <div class="item_arr"></div>
                                            <div class="item_top">
                                                <p class="item_txt1" style="color: #333">{{ item.hash | addressFormat}}</p>
                                                <p class="item_txt2"></p>
                                                <p class="item_txt2" style="color: #203395">{{'+'}}{{ item.amount | tofixed4}}{{' HALE'}}</p>
                                            </div>
                                            <div class="item_sub">
                                                <p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                                                <p class="item_txt3">完成</p>
                                            </div>
                                        </div>
                                        <!--积分兑换-->
                                        <div
                                                class="item type3"
                                                v-if="item.transferType == 15"
                                        >
                                            <div class="item_icon"></div>
                                            <div class="item_arr"></div>
                                            <div class="item_top">
                                                <p class="item_txt1">{{'+'}}{{ item.hash | tofixed4}}{{' CHMC'}}</p>
                                                <p class="item_txt2">{{'-'}}{{ item.amount | tofixed4}}{{' 积分'}}</p>
                                            </div>
                                            <div class="item_sub">
                                                <p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                                                <p class="item_txt3">完成</p>
                                            </div>
                                        </div>

                                        <!--提币-->
                                        <div
                                                class="item type2"
                                                v-if="item.transferType == 2"
                                        >
                                            <div class="item_icon"></div>
                                            <div class="item_arr"></div>
                                            <div class="item_top">
                                                <p class="item_txt1">{{item.destination | addressFormat}}</p>
                                                <p class="item_txt2">{{'-'}}{{ item.amount | tofixed4}}{{` ${currencyName}`}}</p>
                                            </div>
                                            <div class="item_sub">
                                                <p class="item_txt3">{{item.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                                                <p class="item_txt4">
                                                    {{item.confirmStatus == 1 ? $t('currencyDetail.currencyDetail_complete') : $t('currencyDetail.currencyDetail_haveInHand')}}
                                                </p>
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
        name: "CurrencyDetail",
        components: {
            [TabBar.name]: TabBar,
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore,
            Nlayer
        },
        data(){
            return {
                sourceUrl,
                noRealAuthenDig:false,
                pageNo: PAGENO,
                pageSize: 10,
                list: [],
                type: 2,
                isFinished: true,
                locked: false,
                detail: {},
                tips: '',
                tipsVisible: false,
                copyer: null
            }
        },
        computed: {
            currencyName(){
                return this.$route.query.currencyName
            },
            allTip(){
                return this.$t('currencyDetail.currencyDetail_all')
            },
            receiveTip(){
                return this.currencyName == 'CHMC'? '提币':'充币'
            },
            transferTip(){
                return '兑换'
            },
            exchangeTip(){
                return this.$t('currencyDetail.currencyDetail_exchange')
            },
            shareTip1(){
                return this.$t('share.share_tips1')
            },
            tabs(){
                const original = [
                    // {name: 0, label: this.allTip, type: '0'},
                    // {},
                    {name: 1, label: this.receiveTip, type: '2'},
                    // {}
                    // {name: 2, label: this.transferTip, type: '3'},
                    // {name: 3, label: this.exchangeTip, type: '4'}
                ]

                return original
            },
            tabss(){
                const original = [
                    // {name: 0, label: this.allTip, type: '0'},
                    {name: 1, label: this.receiveTip, type: '1'},
//                  {name: 2, label: this.transferTip, type: '3'},
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
        created(){
            if (this.currencyName=="CHMC") {
                this.type=2
            }else {
                this.type=1
            }
            this.getData()
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
                var that = this
                jsonAjax.post(urlUtil.getApiUrl("currency_detail"), {
                    userId:that.userId,
                    currency:this.currencyName
                }, function (result) {
                    console.log(result)
//              	return
                    if( result.success ){
                        that.detail = result.result.data
                        console.log(result.result.data.address)
                        that.initCopyer(result.result.data.address)
//              		that.amount = result.result.vip1Number
                    }
                })
                return
                this.$http.get('js/userWallet/getUserWalletDetail', {
                    userId: this.userId,
                    currency: this.currencyName
                }).then((res) => {
                    if( res.success ){
                        this.detail = res.result
                        this.initCopyer(res.result.address)
                    }
                })
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
                // / js/userWallet/getUserWalletTransfer
                this.$http.get('app/wallet/userWalletTransfer/getUserTransfer', {
                    userId: this.userId,
                    type: this.type,
                    currency: this.currencyName,
                    pageSize: this.pageSize,
                    pageNo: this.pageNo,
                    stater:1
                }).then((res) => {
                    console.log(res)
                    if( res.returnCode == 1 ){

//                  	console.log('是否进入这个区间')
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
                    // this.$refs.scrollView.finishLoadMore()
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

                // this.isFinished = false
                this.pageNo = PAGENO
                this.locked = true

                this.getData(true)
            },
            // 去详情
            toDetail(e){
                const {
                    orderid ,
                    type,
                    id,
                    state
                } = e.currentTarget.dataset
                var that=this

                if (type==1 || type==2){
                    that.$push({
                        path: '/currencyDealDetail',
                        query: {
                            id: orderid,
                            currencyName: that.currencyName,
                            dealResState: state,
                            dealName: type
                        }
                    })

                } else {

                    that.$push({
                        path: '/ExchangeDealDetail',
                        query: {
                            id: orderid,
                            dealResState:1
                        }
                    })
                }

            },
            // 去币收款 去币充值
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
                if(!JSON.parse(localStorage.getItem('certification'))){
                    this.openNoRealAuthenDig()
                }else{
                    this.$push({
                        path: '/currencyTransfer',
                        query: {
                            currencyName: this.currencyName
                        }
                    })
                }
            },
            // 去币充值
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
                        currencyName: this.currencyName
                    }
                })}
            },
        }
    }
</script>

<style scoped>
    .page{
        background: #fff;
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
    .content{
        flex: 1; background: #fff; position: relative;

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



    .item.type1 .item_icon{
        background: url("../static/images/video_icon/icon_withDraw.png") no-repeat center center / cover;
    }
    .item.type1 .item_icon1{
        background: url("../static/images/video_icon/icon_exchange.png") no-repeat center center / cover;
    }
    .item.type1 .item_txt2{
        /*color: #21b369;*/
        color: #F12B2B;
    }
    .item.type2 .item_icon{
        background: url("../static/images/video_icon/icon_withDraw.png") no-repeat center center / cover;
    }
    .item.type2 .item_txt1{
        color: #333;
    }
    .item.type2 .item_txt2{
        color: #e41d1d;
    }
    .item.type3 .item_icon{
        background: url("../static/images/video_icon/icon_exchange.png") no-repeat center center / cover;
    }
    .item.type3 .item_txt2{
        /*color: #1d92e4;*/
        color: #F12B2B;
    }
    .item.type3 .item_arr{
        display: block;
    }
    .type10 .item_icon{
        background: url("../static/images/video_icon/icon_invest.png") no-repeat center center / cover;
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
    .item_icon1{
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
        color: #203395;
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


    .wrapper_top_HALE{
        /*margin-top: 0.88rem;*/
        position: relative;
        width:100%;
        height: 3.04rem;
        background: url("../static/images/video_icon/hale_icon_bg.png") no-repeat center center /cover;
    }
    .wrapper_top_CHMC{
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
        width: 100%;
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
    .COMMON_TABS{
        border: none!important;
    }
    .COMMON_TABS >>> .md-tab-bar-ink{
        background: #ccc;
        height: .01rem;
    }
</style>
