<template>
    <div class="page">
        <div class="content">
            <div class="setAllRead_wrapper">
                <div
                        class="setAllRead"
                        @click="setAllRead"
                >{{$t('notice.notice_allRead')}}</div>
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

                        <div class="notice_list">
                            <div
                                    class="notice_item"
                                    :class="{
                                    'active': !item.readStatus
                                }"
                                    v-for="(item, index) in list"
                                    :key="item.id"
                                    @click="toDetail"
                                    :data-id="item.id"
                                    :data-orderId="item.orderId"
                                    :data-type="item.type"
                                    :data-cid="item.bizId"
                                    :data-currency="item.currency"
                            >


                                <p class="notice_item_txt1 thide" v-text="item.title"></p>
                                <p
                                        class="notice_item_txt2 thide"
                                        v-if="item.type == 1"
                                >
                                    {{$t('currencyDetail.currencyDetail_receiveed')}}：{{item.origin | addressFormat}}
                                </p>
                                <p
                                        class="notice_item_txt2 thide"
                                        v-else
                                >
                                    {{$t('currencyDetail.currencyDetail_address')}}：{{item.destination | addressFormat}}
                                </p>
                                <p class="notice_item_txt3">{{item.confirmTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
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

        <nlayer
                :autoClose="1200"
                :maskCancel="false"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
                maskBackgroundColor="rgba(0,0,0,0)"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>

</template>

<script>
    import ScrollView from 'mand-mobile/lib/scroll-view'
    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'
    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'
    import Nlayer from '@/components/Nlayer'

    import { mapGetters, mapActions } from 'vuex'

    const PAGENO = 1

    export default {
        // name: "CurrencyCollect",
        name: "NoticeTabTransfer",
        components: {
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore,
            Nlayer
        },
        data(){
            return {
                pageNo: PAGENO,
                pageSize: 8,
                list: [],
                type: "1",
                isFinished: false,
                tips: '',
                tipsVisible: false,
            }
        },
        computed: {
            userinfo() {
                return this.getUserinfo()
            },
            customerToken() {
                return this.userinfo.customerToken
            },
            userId() {
                return this.userinfo.customerId
            }
        },
        mounted(){
            this.initScrollView()
        },
        methods: {
            ...mapActions(['setUserNoticeState']),
            ...mapGetters(['getUserinfo']),
            // 初始化scrollview
            initScrollView() {
                this.$refs.scrollView.init()
            },
            // 打开消息提示
            showTips(msg) {
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed() {
                this.msg = ''
                this.tipsVisible = false
            },
            // 全标已读
            setAllRead() {
                this.$http.get('app/message/markReadMsg', {
                    userId: this.userId,
                    msgType: this.type,
                    customerToken: this.customerToken
                }).then((res) => {
                    //
                    if (res.returnCode == 1) {
                        this.$refs.scrollView.triggerRefresh()
                        this.setUserNoticeState()
                    }
                })
            },
            // 加载数据
            getData(refresh=false){
                var that = this;
                return this.$http.get('app/message/getMsgPageListByUserId', {
                    userId: this.userId,
                    msgType: this.type,
                    languageType: 1,
                    pageSize: this.pageSize,
                    pageNo: this.pageNo,
                    customerToken: this.customerToken
                }).then((res) => {
                    if( res.returnCode == 1 ){
                        if( refresh ){
                            this.list = res.resultData
                        } else {
                            this.list.push(...res.resultData)
                        }

                        this.$refs.scrollView.finishRefresh()
                        this.$refs.scrollView.finishLoadMore()
                        this.pageNo += 1

                        if (res.resultData.length < this.pageSize) {
                            this.isFinished = true
                            this.$refs.scrollView.loadend()
                        }
                    } else {
                        that.showTips(res.message)
                        // 跳转到我的页面
                        setTimeout(() => {
                            that.$router.replace({
                                path: '/login'
                            })
                        }, 1000)
                    }
                })
            },
            // 滚动触底事件 此时要加载数据
            $_onEndReached() {
                if (this.isFinished) {
                    return
                }

                this.getData()
            },
            // 刷新中事件 此时要刷新数据
            $_onRefresh() {
                this.isFinished = false
                this.pageNo = PAGENO

                this.getData(true)
            },
            // 跳转到详情
            toDetail(e){
                const {
                    orderid ,
                    type,
                    id,
                    currency
                } = e.currentTarget.dataset



                this.$push({
                    path: '/currencyDealDetail',
                    query: {
                        id: orderid,
                        newsId: id,
                        currencyName: currency,
                        dealResState: 1,
                        dealName: type
                    }
                })

//              const {
//                  id,
//                  cid,
//                  type,
//                  currency
//              } = e.currentTarget.dataset

//              this.$push({
//                  path: '/currencyDealDetail',
//                  query: {
//                      id: cid,
//                      newsId: id,
//                      currencyName: currency,
//                      dealName: type,
//                      dealResState: 1
//                  }
//              })
            },
            toDetails(e){
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
                            dealResState: 1
                        }
                    })
                }

            },
        }
    }
</script>

<style scoped>
    .content{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .setAllRead_wrapper{
        padding: 0.3rem 0.3rem 0.2rem;
    }
    .setAllRead{
        font-size: .24rem;
        color: #666;
        line-height: 1.5;
        background: #fafafa;
        padding:0.05rem .15rem;
        border: 1px solid #eee;
        border-radius: .1rem;
        display: inline-block;
        box-sizing: border-box;
    }
    .main{
        flex: 1;
        position: relative;
    }
    .scroll{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .notice_list{
        padding: 0 0.4rem;
    }
    .notice_item{
        position: relative;
        border-bottom: 1px solid #ccc;
        padding: 0.2rem 0.6rem 0.2rem 0.25rem;
    }
    .notice_item:before{
        content: '';
        position: absolute;
        width: 0.12rem;
        height: 0.12rem;
        background: #e41d1d;
        border-radius: 100%;
        left: 0;
        top: 0.37rem;
        display: none;
    }
    .notice_item.active:before{
        display: block;
    }
    .notice_item.active .notice_item_txt1{
        font-weight: bold;
    }
    .notice_item:after{
        width: 0.4rem;
        height: 0.4rem;
        background: url("../../static/images/icon/notice_icon_right.png") no-repeat center center / cover;
        position: absolute;
        right: 0.05rem;
        top: 50%;
        content: '';
        transform: translateY(-50%);
    }
    .notice_item_txt1{
        font-size: .26rem;
        color: #333;
        line-height: .35rem;
    }
    .notice_item_txt2{
        font-size: .2rem;
        color: #666;
        line-height: .3rem;
    }
    .notice_item_txt3{
        font-size: .2rem;
        color: #666;
        line-height: .3rem;
        margin-top: .15rem;
    }
</style>
