<template>
    <div class="page">
        <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-2">
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
                ></md-scroll-view-refresh>
                <div
                        v-for="i in list"
                        :key="i"
                        class="scroll-view-list"
                >
                    <p class="scroll-view-item">{{i}}</p>
                </div>
                <md-scroll-view-more
                        slot="more"
                        :is-finished="isFinished"
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

    export default {
        name: 'scroll-view-demo-0',
        components: {
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore
        },
        data() {
            return {
                list: 5,
                isFinished: false
            }
        },
        mounted() {

        },
        methods: {
            // 滚动触底事件 此时要加载数据
            $_onEndReached() {
                if (this.isFinished) {
                    return
                }
                // async data
                setTimeout(() => {
                    this.list += 5
                    if (this.list >= 20) {
                        this.isFinished = true
                    }


                    this.$refs.scrollView.finishLoadMore()
                }, 1000)
            },

            // 刷新中事件 此时要刷新数据
            $_onRefresh() {
                // async data
                setTimeout(() => {
                    this.list += 5
                    this.$refs.scrollView.finishRefresh()
                }, 2000)
            }
        },
    }

</script>

<style scoped>
    .md-example-child-scroll-view-2{
        height: 100%;
        background: #FFF;
    }

    .scroll-view-item{
        padding: 30px 0;
        text-align: center;
        font-size: 28px;
        font-family: DINAlternate-Bold;
        border-bottom: .5px solid #efefef;
    }

</style>



