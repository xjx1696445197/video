<template>
    <div class="page">
        <div class="content">
            <div class="content_title clearfix">
                <p class="buy_txt1 fl fweight">{{$t('otc_buy.available')}}{{available_Hale | tofixed2}}CHMC</p>
                <p class="buy_txt1 fr fweight">{{$t('otc_buy.available')}}{{available_Usdt | tofixed2}}USDT</p>
            </div>
            <div class="main">
                <div class="scroll">

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

                        <div class="buy_list">
                            <div class="buy_item"
                                 v-for="(item,index) in buyList"
                                 :key="index"
                            >
                                <div class="buy_item_top clearfix">
                                    <div class="buy_headImg fl"></div>
                                    <div class="buy_top_mid fl">
                                        <p class="buy_txt2 fweight" style="margin-top: 0.05rem;">{{item.nickName}}</p>
                                        <div class="buy_num clearfix">
                                            <p class="buy_txt3 fl">{{$t('otc_buy.transactionSheet')}}{{item.transactionNum}}</p>
                                            <p class="buy_txt3 fl">{{$t('otc_buy.turnoverRate')}}{{item.transactionRate*100 | tofixed2}}%</p>
                                        </div>
                                    </div>
                                    <div class="buy_top_right fr" style="margin-top: 0.05rem;">
                                        <p class="buy_txt3 tright">{{$t('otc_buy.unitPrice')}}</p>
                                        <p class="buy_txt2 fweight">${{item.amount | tofixed2}}</p>
                                    </div>
                                </div>
                                <div class="buy_item_bottom clearfix">
                                    <div class="buy_bottom_left fl">
                                        <p class="buy_txt4">{{$t('otc_buy.num')}} {{item.sellNum | tofixed2}} CHMC</p>
                                        <p class="buy_txt4">{{$t('otc_buy.quota')}} {{item.singleMin}}-{{item.singleMax}}  USDT</p>
                                    </div>
                                    <div class="buy_bottom_btn fr"
                                         @click="toBuyHale"
                                         :data-id="item.orderId"
                                         :data-price="item.amount"
                                    >{{$t('otc_buy.purchase')}} CHMC
                                    </div>
                                </div>
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
</template>
<script>
    import TabBar from 'mand-mobile/lib/tab-bar'
    import ScrollView from 'mand-mobile/lib/scroll-view'
    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'
    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'

    import { mapGetters, mapActions } from 'vuex'

    const PAGENO = 1

    export default {
        name: "Buy",
        components: {
            [TabBar.name]: TabBar,
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore
        },
        data(){
            return {
                pageNo: PAGENO,
                pageSize: 10,
                isFinished: false,
                available_Hale:'0',
                available_Usdt:'0',
                buyList:[],
                locked: false,
            }
        },
        mounted(){
            // 初始化列表
            this.initScrollView()
            // 获取可用余额
            this.getAvailableAmount()
            // 判断是否登录
            this.isLogin()
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            userName(){
                return this.userinfo.userName
            },
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 初始化scrollview
            initScrollView(){
                this.$refs.scrollView.init()
            },
            // 检测用户是否登录
            isLogin(){
                // if( this.userinfo ){
                //     // 获取登录时的购买列表
                //     this.getLoginBuyList()
                // } else {
                //     // 获取未登录的购买列表
                //     this.getLoginBuyList()
                // }
            },
            // 获取可用余额
            getAvailableAmount() {
                this.$http.get('app/otcList/getStaticParam', {
                    userId: 3,
                }).then((res) => {
                    console.log(res)
                    if (res.success) {
                        if (this.userinfo) {
                            this.available_Hale = res.result.haleAmount
                            this.available_Usdt = res.result.usdtAmount
                        }
                    }
                })
            },
            // 获取登录时的购买列表
            getLoginBuyList(refresh=false) {
                this.$http.get('app/otcList/getOtcList', {
                    userId: 3,
                    type: 1,
                    pageNo: this.pageNo,
                    pageSize: this.pageSize
                }).then((res) => {
                    console.log(res)
                    if (res.returnCode) {
                        if (refresh) {
                            this.buyList = res.resultData
                        } else {
                            this.buyList.push(...res.resultData)
                        }

                        this.$refs.scrollView.finishRefresh()
                        this.$refs.scrollView.finishLoadMore()
                        this.pageNo += 1
                        this.locked = false

                        if( res.result.length < this.pageSize ){
                            this.isFinished = true
                            this.$refs.scrollView.loadend()
                        }
                    }
                })
            },
            // 滚动触底事件 此时要加载数据
            $_onEndReached() {

                if (this.isFinished || this.locked) {
                    return
                }

                this.locked = true

                this.getLoginBuyList()
            },
            // 刷新中事件 此时要刷新数据
            $_onRefresh() {
                if( this.locked ){
                    return
                }

                this.isFinished = false
                this.pageNo = PAGENO
                this.locked = true

                this.getLoginBuyList(true)
            },
            // 去购买hale页面
            toBuyHale(event){
                const { id,price } = event.target.dataset
                this.$push({
                    path: '/buyHale',
                    query: {
                        orderId: id,
                        price:price
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .content{
        height:100%;
    }
    .content_title{
        padding: 0 0.6rem;
        background: #fff;
        position: relative;
    }
    .content_title:before{
        position: absolute;
        content: '';
        width: 1px;
        height: 0.5rem;
        background: #eee;
        left: 50%;
        transform: translateY(-50%);
        margin-top: 0.4rem;
    }
    .main{
        /*flex: 1;*/
        /*position: absolute;*/
        /*top: 0.8rem;*/
        /*left: 0;*/
        position: absolute;
        top: 0.8rem;
        left: 0;
        bottom: 0rem;
        width: 100%;
        margin-bottom: 3.05rem;
    }
    .scroll{
        height: 100%;
        width: 100%;
    }
    .buy_txt1{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.8rem;
    }
    .buy_list{
        padding: 0 0.3rem;
    }
    .buy_item{
        margin-top: 0.2rem;
        background: #fff;
        border-radius: 0.2rem;
        padding: 0.2rem 0.25rem 0.1rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
    }
    .buy_headImg{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        /*background: #E18221;*/
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .buy_txt2{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.4rem;
        padding: 0 0.15rem;
    }
    .buy_txt3{
        font-size: 0.18rem;
        color: #aaa;
        line-height: 0.3rem;
        padding: 0 0.15rem;
    }
    .buy_item_bottom{
        margin-top: 0.1rem;
    }
    .buy_txt4{
        font-size: 0.2rem;
        color: #333;
        line-height: 0.35rem;
    }
    .buy_bottom_btn{
        width: 1.5rem;
        height: 0.5rem;
        background: #21B369;
        border-radius: 0.05rem;
        font-size: 0.2rem;
        color: #fff;
        line-height: 0.5rem;
        text-align: center;
        margin-top: 0.1rem;
    }
    .page{
        margin-top: 2.88rem;

    }
</style>