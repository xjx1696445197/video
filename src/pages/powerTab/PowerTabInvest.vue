<template>
    <div class="page">

        <md-scroll-view
                ref="scrollView"
                :scrolling-x="false"
                :auto-reflow="true"
                :manual-init="true"
                :immediate-check-end-reaching="true"
                @refreshing="$_onRefresh"
                @end-reached="$_onEndReached"
                style="background: #fff"
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

            <div class="PRODUCT_LIST">
                <div class="PRODUCT_ITEM"
                     v-for="(item, index) in list"
                     :key="item.id"
                     :class="{
                        'COMPLETE': item.newsType == 1
                     }"
                     :data-id="item.id"
                     :data-state="item.newsType"
                     @click="toDetail"
                >
                    <div class="PRODUCT_ITEM_TOP">
                        <p class="PRODUCT_ITEM_TXT1">{{$t('halePower.halePower_investmentTime')}}：{{item.startTime | dataFormat('yyyy-MM-dd')}}</p>
                        <p class="PRODUCT_ITEM_TXT2">{{ item.newsType == 1 ? $t('statustest.status_finish') : $t('statustest.status_haveHand') }}</p>
                    </div>
                    <div class="PRODUCT_ITEM_SUB">
                        <p class="PRODUCT_ITEM_TXT3">{{$t('halePower.halePower_investmentweek')}}：{{item.lockTime}}{{$t('haleLock.haleLock_day')}}</p>
                        <p class="PRODUCT_ITEM_TXT4" v-if="item.newsType == 1">+{{item.interest | tofixed4}} {{$t('product.hale_calculationPower')}}</p>
                        <p class="PRODUCT_ITEM_TXT4" v-else>-{{item.amount | tofixed4}} USDT</p>
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
</template>

<script>
    import { mapGetters } from 'vuex'

    import ScrollView from 'mand-mobile/lib/scroll-view'
    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'
    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'

    const PAGENO = 1
    export default {
        name: "PowerTabInvest",
        components: {
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            }
        },
        data(){
            return {
                pageNo: PAGENO,
                pageSize: 8,
                list: [],
                isFinished: false
            }
        },
        mounted(){
            this.init()
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 根据用户状态初始化
            init(){
                if( this.userinfo ){
                    this.initScrollView()
                }
            },
            // 初始化scrollview
            initScrollView(){
                this.$refs.scrollView.init()
            },
            // 加载数据
            getData(refresh=false){
                return this.$http.get('js/hlocks/findInvestmentLog', {
                    userId: this.userId,
                    pageSize: this.pageSize,
                    pageNo: this.pageNo
                }).then((res) => {
                    const result = res.resultVo
                    console.log(result)
                    if( result.success ){
                        if( refresh ){
                            this.list = result.result
                        } else {
                            this.list.push(...result.result)
                        }

                        this.$refs.scrollView.finishRefresh()
                        this.$refs.scrollView.finishLoadMore()
                        this.pageNo += 1

                        if( result.result.length < this.pageSize ){
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

                this.getData()
            },
            // 刷新中事件 此时要刷新数据
            $_onRefresh() {
                this.isFinished = false
                this.pageNo = PAGENO

                this.getData(true)
            },
            toDetail(e){
                const {
                    id,
                    state
                } = e.currentTarget.dataset

                this.$push({
                    path: '/PowerTabInvestDetail',
                    query: {
                        id, state
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .PRODUCT_ITEM_TXT4{
        color: #333;
    }
</style>