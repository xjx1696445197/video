<template>
    <div class="page">
        <div class="content">
            <div class="content_title clearfix">
                <p class="sell_txt1 fl fweight">{{$t('otc_sell.available')}}{{available_Hale | tofixed2}}CHMC</p>
                <p class="sell_txt1 fr fweight">{{$t('otc_sell.available')}}{{available_Usdt | tofixed2}}USDT</p>
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

                        <div class="sell_list">
                            <div class="sell_item"
                                 v-for="(item,index) in sellList"
                                 :key="index"
                            >
                                <div class="sell_item_top clearfix">
                                    <div class="sell_headImg fl"></div>
                                    <div class="sell_top_mid fl">
                                        <p class="sell_txt2 fweight" style="margin-top: 0.05rem;">{{item.nickName}}</p>
                                        <div class="sell_num clearfix">
                                            <p class="sell_txt3 fl">{{$t('otc_sell.transactionSheet')}}{{item.transactionNum}}</p>
                                            <p class="sell_txt3 fl">{{$t('otc_sell.turnoverRate')}}{{item.transactionRate*100 | tofixed2}}%</p>
                                        </div>
                                    </div>
                                    <div class="sell_top_right fr" style="margin-top: 0.05rem;">
                                        <p class="sell_txt3 tright">{{$t('otc_sell.unitPrice')}}</p>
                                        <p class="sell_txt2 fweight">${{item.amount | tofixed2}}</p>
                                    </div>
                                </div>
                                <div class="sell_item_bottom clearfix">
                                    <div class="sell_bottom_left fl">
                                        <p class="sell_txt4">{{$t('otc_sell.num')}} {{item.sellNum | tofixed2}} CHMC</p>
                                        <p class="sell_txt4">{{$t('otc_sell.quota')}} {{item.singleMin}}-{{item.singleMax}}  USDT</p>
                                    </div>
                                    <div class="sell_bottom_btn fr"
                                         :data-id="item.orderId"
                                         :data-price="item.amount"
                                         @click="toSellHale"
                                    >{{$t('otc_sell.sell')}} CHMC
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
    import ScrollView from 'mand-mobile/lib/scroll-view'
    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'
    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'

    import { mapGetters, mapActions } from 'vuex'

    const PAGENO = 1

    export default {
        name: "Sell",
        components: {
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore
        },
        data(){
            return {
                pageNo: PAGENO,
                pageSize: 10,
                isFinished: false,
                available_Hale:'0.00',
                available_Usdt:'0.00',
                sellList:[]
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
                //     // 获取用户登录时的出售列表
                //     this.getLoginSellList()
                // } else {
                //     // 获取没有登录时的出售列表
                //     this.getSellList()
                // }
            },
            getAvailableAmount(){
                this.$http.get('app/otcList/getStaticParam', {
                    userId: this.userinfo ? this.userId : null,
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        if(this.userinfo){
                            this.available_Hale = res.result.haleAmount
                            this.available_Usdt = res.result.usdtAmount
                        }
                    }
                })
            },
            // 获取用户登录时的出售列表
            getLoginSellList(refresh=false){
                this.$http.get('app/otcList/getOtcList', {
                    userId: this.userinfo ? this.userId : null,
                    type: 2,
                    pageNo: this.pageNo,
                    pageSize: this.pageSize
                }).then((res) => {
                    console.log(res)
                    if (res.returnCode) {
                        if (refresh) {
                            this.sellList = res.resultData
                        } else {
                            this.sellList.push(...res.resultData)
                        }

                        this.$refs.scrollView.finishRefresh()
                        this.$refs.scrollView.finishLoadMore()
                        this.pageNo += 1

                        if( res.result.length < this.pageSize ){
                            this.isFinished = true
                            this.$refs.scrollView.loadend()
                        }
                    }
                })
            },
            // 滚动触底事件 此时要加载数据
            $_onEndReached() {
                if (this.isFinished) {
                    return
                }
                this.getLoginSellList()
            },
            // 刷新中事件 此时要刷新数据
            $_onRefresh() {
                this.isFinished = false
                this.pageNo = PAGENO

                this.getLoginSellList(true)
            },
            // 去出售hale页面
            toSellHale(event){
                const { id,price } = event.target.dataset
                // return
                this.$push({
                    path: '/sellHale',
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
    .sell_txt1{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.8rem;
    }
    .sell_list{
        padding: 0 0.3rem;
    }
    .sell_item{
        margin-top: 0.2rem;
        background: #fff;
        border-radius: 0.2rem;
        padding: 0.2rem 0.25rem 0.1rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
    }
    .sell_headImg{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        /*background: #E18221;*/
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .sell_txt2{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.4rem;
        padding: 0 0.15rem;
    }
    .sell_txt3{
        font-size: 0.18rem;
        color: #aaa;
        line-height: 0.3rem;
        padding: 0 0.15rem;
    }
    .sell_item_bottom{
        margin-top: 0.1rem;
    }
    .sell_txt4{
        font-size: 0.2rem;
        color: #333;
        line-height: 0.35rem;
    }
    .sell_bottom_btn{
        width: 1.5rem;
        height: 0.5rem;
        background: #ED472C;
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