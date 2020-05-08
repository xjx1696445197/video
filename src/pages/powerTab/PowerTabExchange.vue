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
                <div class="PRODUCT_ITEM NOARR COMPLETE"
                     v-for="(item, index) in list"
                     :key="item.id"
                >
                    <div class="PRODUCT_ITEM_TOP">
                        <p class="PRODUCT_ITEM_TXT1">{{$t('halePower.halePower_convertible')}}</p>
                        <p class="PRODUCT_ITEM_TXT2">+{{(item.hale || '----') | tofixed4}} HALE</p>
                    </div>
                    <div class="PRODUCT_ITEM_SUB">
                        <p class="PRODUCT_ITEM_TXT3">{{$t('halePower.halePower_exchange')}}：{{item.time | dataFormat('yyyy-MM-dd hh:mm')}}</p>
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
        name: "PowerTabExchange",
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
                return this.$http.get('js/hexchangeLog/exchangeLog', {
                    userId: this.userId,
                    type: 2,
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
            }
        }
    }
</script>

<style scoped>
    .PRODUCT_ITEM_TXT1{
        color: #e4811d;
    }
</style>