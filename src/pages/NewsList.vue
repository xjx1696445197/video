<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('news.news_newsList')}}</p>
        </div>

        <div class="wrapper">
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
                <div class="news_list">
                    <div
                        class="news_item"
                        v-for="(item, index) in list"
                        :key="item.id"
                        :data-id="item.id"
                        @click="toDetail"
                    >
                        <div
                            class="news_item_pic"
                            :style="{
                                'backgroundImage': `url(${sourceUrl + item.picture})`,
                                'backgruondRepeat': 'no-repeat',
                                'backgroundPosition': 'center',
                                'backgroundSize': 'cover'
                            }"

                        ></div>
                        <div class="news_item_main">
                            <p class="news_item_txt1 thides thides2" v-text="item.title"></p>
                            <p class="news_item_txt2" v-text="">{{item.publishTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
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
</template>

<script>
    import ScrollView from 'mand-mobile/lib/scroll-view'
    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'
    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'

    import {
        sourceUrl
    } from '@/config'

    const PAGENO = 1

    export default {
        name: "NewsList",
        components: {
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore
        },
        data() {
            return {
                pageSize: 10,
                pageNo: PAGENO,
                list: [],
                isFinished: false,
                sourceUrl
            }
        },
        methods: {
            // 加载数据
            getData(refresh = false){
                return this.$http.get('js/consultationAdministrationApp/findConsultationByConsultationId', {
                    classificationId: '1160013950140444672',
                    pageSize: this.pageSize,
                    pageNo: this.pageNo
                }).then((res) => {
                    const {
                        result,
                        success
                    } = res

                    if( success ){
                        if( refresh ){
                            this.list = result
                        } else {
                            this.list.push(...result)
                        }

                        this.pageNo += 1

                        if( result.length < this.pageSize ){
                            this.isFinished = true
                        }
                    }
                })
            },
            // 滚动触底事件 此时要加载数据
            $_onEndReached() {
                if (this.isFinished) {
                    return
                }

                this.getData().then(() => {
                    this.$refs.scrollView.finishLoadMore()
                })
            },
            // 刷新中事件 此时要刷新数据
            $_onRefresh() {
                this.isFinished = false
                this.pageNo = PAGENO

                this.getData(true).then(() => {
                    this.$refs.scrollView.finishRefresh()
                    this.$refs.scrollView.finishLoadMore()
                })

            },
            // 去详情
            toDetail(e){
                const { id } = e.currentTarget.dataset

                this.$push({
                    path: '/NewsDetail',
                    query: {
                        id
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .news_list{
        padding: 0.3rem;
    }
    .news_item{
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;
        overflow: hidden;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
        background: #FFF;
        display: flex;
    }
    .news_item+.news_item{
        margin-top: 0.24rem;
    }
    .news_item_pic{
        width: 2rem;
        height: 1.5rem;
    }
    .news_item_main{
        flex: 1;
        padding: 0.17rem 0.13rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .news_item_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.35rem;
        width: 5rem;
    }
    .news_item_txt2{
        font-size: 0.2rem;
        color: #666;
        line-height: 0.3rem;
        text-align: right;
    }
</style>
