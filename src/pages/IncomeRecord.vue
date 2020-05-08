<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{title}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <md-scroll-view
                        ref="scrollView"
                        :scrolling-x="false"
                        :auto-reflow="true"
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

                    <div class="detail_list">
                        <div class="detail_item"
                            v-for="(item, index) in list"
                             :key="item.id"
                        >
                            <div v-if="type == 0">
                                <div class="detail_item_top">
                                    <p class="detail_item_txt1">{{$t('haleLock.haleLock_profit')}}</p>
                                    <p class="detail_item_txt2"
                                        :class="[state ? 'active' : '']"
                                    >{{item.amount | tofixed4}} HALE</p>
                                </div>
                                <div class="detail_item_sub">
                                    <p class="detail_item_txt3">{{item.time | dataFormat('yyyy-MM-dd')}}</p>
                                </div>
                            </div>
                            <div v-else>
                                <div class="detail_item_top">
                                    <p class="detail_item_txt1">{{$t('haleLock.haleLock_obtained')}}</p>
                                    <p class="detail_item_txt2 active">{{item.amount | tofixed4}} {{$t('haleLock.haleLock_power')}}</p>
                                </div>
                                <div class="detail_item_sub">
                                    <p class="detail_item_txt3">{{item.time | dataFormat('yyyy-MM-dd')}}</p>
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
</template>

<script>
    import { mapGetters } from 'vuex'

    import ScrollView from 'mand-mobile/lib/scroll-view'
    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'
    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'


    const PAGENO = 1

    export default {
        name: "IncomeRecord",
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
            },
            querys(){
                return this.$route.query
            },
            state(){
                return this.querys.state == 1
            },
            type(){
                return this.querys.type
            },
            title1(){
                return this.$t('haleLock.haleLock_title1')
            },
            title2(){
                return this.$t('haleLock.haleLock_title2')
            },
            title3(){
                return this.$t('haleLock.haleLock_title3')
            },
            title4(){
                return this.$t('haleLock.haleLock_title4')
            },
            title5(){
                return this.$t('haleLock.haleLock_title5')
            },
            title(){
                const {
                    state,
                    type
                } = this

                if( state && type == '0' ){
                    return this.title1
                } else if ( !state && type == '0' ){
                    return this.title2
                } else if( state && type == '1' ){
                    return this.title3
                } else if( state && type == '2' ){
                    return this.title4
                } else if( state && type == '3' ){
                    return this.title5
                }
            },
            url(){
                return this.type == '0' ? 'js/hLockHale/findLockInterestlog' : 'js/hlocks/findInvestLog'
            },
            params(){
                if( this.type == '0' ){
                    return {
                        lockId: this.querys.id
                    }
                } else {
                    return {
                        id: this.querys.id,
                        type: this.querys.type
                    }
                }
            }
        },
        data(){
            return {
                pageNo: PAGENO,
                pageSize: 10,
                list: [],
                isFinished: false
            }
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 加载数据
            getData(refresh=false){
                return this.$http.get(this.url, {
                    ...this.params,
                    pageSize: this.pageSize,
                    pageNo: this.pageNo
                }).then((res) => {
                    let result
                    if( this.type == 0 ){
                        result = res
                    } else {
                        result = res.resultVo
                    }

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
    .wrapper{
        background: #fafafa;
        position: relative;
    }
    .content{
        background: #fff;
        top: 1.12rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
    }
    .detail_list{
        padding: 0 0.3rem;
    }
    .detail_item{
        padding: .2rem 0;
        border-bottom: 1px solid #ccc;
    }
    .detail_item_top{
        display: flex;
        justify-content: space-between;
    }
    .detail_item_txt1{
        font-size: .3rem;
        color: #333;
        line-height: .55rem;
    }
    .detail_item_txt2{
        font-size: .3rem;
        color: #aaa;
        line-height: .55rem;
    }
    .detail_item_txt2.active{
        color: #333;
    }
    .detail_item_txt3{
        font-size: .2rem;
        color: #aaa;
        line-height: .4rem;
    }

</style>