<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('haleLock.haleLock_lockingDetailsTitle')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="detail_top tcenter"
                     :class="[querys.state == 1 ? 'state1' : 'state2']"
                >
                    <div class="detail_icon mauto radius-round"></div>
                    <p class="detail_txt1">{{dealFlag}}{{(detail.amount || '----') | tofixed4}} HALE</p>
                    <p class="detail_txt2">{{dealStateTxt}}</p>
                </div>

                <div class="detail_list">
                    <div class="detail_item">
                        <p class="detail_item_txt1">{{$t('haleLock.haleLock_lockingNum')}}</p>
                        <p class="detail_item_txt2">{{(detail.amount || '----') | tofixed4}}</p>
                    </div>
                    <div class="detail_item">
                        <p class="detail_item_txt1">{{$t('haleLock.haleLock_release')}}</p>
                        <p class="detail_item_txt2">{{(detail.allAmount || '----') | tofixed4}}</p>
                    </div>
                    <div class="detail_item" v-if="querys.state == 0">
                        <p class="detail_item_txt1">{{$t('haleLock.haleLock_frozen')}}</p>
                        <p class="detail_item_txt2">{{(detail.surplusAmount || '----') | tofixed4}}</p>
                    </div>
                    <div class="detail_item">
                        <p class="detail_item_txt1">{{$t('haleLock.haleLock_lockingWeek')}}</p>
                        <p class="detail_item_txt2">{{detail.lockTime || '----'}}{{$t('haleLock.haleLock_day')}}</p>
                    </div>
                    <div class="detail_item" v-if="querys.state == 0">
                        <p class="detail_item_txt1">{{$t('haleLock.haleLock_UnfreeReleaseTime')}}</p>
                        <p class="detail_item_txt2">{{detail.surplusTime || '----'}}</p>
                    </div>
                    <div class="detail_item">
                        <p class="detail_item_txt1">{{$t('haleLock.haleLock_lockingTime')}}</p>
                        <p class="detail_item_txt2">{{(detail.startTime || '----') | dataFormat('yyyy-MM-dd')}}</p>
                    </div>
                    <div class="detail_item">
                        <p class="detail_item_txt1">{{$t('haleLock.haleLock_releaseTime')}}</p>
                        <p class="detail_item_txt2">{{(detail.endTime || '----') | dataFormat('yyyy-MM-dd')}}</p>
                    </div>

                </div>

                <div class="detail_btn tcenter" @click="toLockedPositionRecord">{{$t('haleLock.haleLock_recording')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LockedPositionDetail",
        data(){
            return {
                detail: {}
            }
        },
        computed: {
            finish(){
                return this.$t('statustest.status_finish')
            },
            haveIn(){
                return this.$t('statustest.status_haveHand')
            },
            querys(){
                return this.$route.query
            },
            dealFlag(){
                if( this.querys.state == 0 ){
                    return '-'
                }  else {
                    return '+'
                }
            },
            dealStateTxt(){
                if( this.querys.state == 1 ){
                    return this.finish
                } else {
                    return this.haveIn
                }
            }
        },
        mounted(){
            this.getDetail()
        },
        methods: {
            // 获取详情
            getDetail(){
                this.$http.get('js/hLockHale/findLockDetail', {
                    id: this.querys.id
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.detail = res.result
                    }
                })
            },
            // 去看锁仓收益记录
            toLockedPositionRecord(){
                this.$push({
                    path: '/IncomeRecord',
                    query: {
                        type: 0,
                        id: this.querys.id,
                        state: this.querys.state
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .content{
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
    .detail_top{
        padding-top: 0.9rem;
        padding-bottom: 0.55rem;
    }
    .detail_top.state1 .detail_icon{
        background: url("../static/images/icon/success_icon.png") no-repeat center center / cover;
    }
    .detail_top.state2 .detail_icon{
        background: url("../static/images/icon/ongoing_icon.png") no-repeat center center / cover;
    }
    .detail_top.state2 .detail_txt2{
        color: #ccc;
    }
    .detail_icon{
        width: 1.2rem;
        height: 1.2rem;
    }
    .detail_txt1{
        font-size: .44rem;
        color: #333;
        line-height: .6rem;
        margin-top: 0.15rem;
    }
    .detail_txt2{
        margin-top: 0.15rem;
        font-size: .3rem;
        color: #e4811d;
        line-height: .75rem;
    }
    .detail_list{
        margin: 0 0.3rem;
        border-top: 1px solid #ccc;
    }
    .detail_item{
        min-height: 0.9rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .detail_item_txt1{
        font-size: .3rem;
        color: #666;
        line-height: .5rem;
        width: 3.5rem;
    }
    .detail_item_txt2{
        font-size: .3rem;
        color: #666;
        line-height: .5rem;
        text-align: right;
        flex: 1;
        flex-wrap: wrap;
    }
    .detail_btn{
        font-size: .3rem;
        color: #e4811d;
        line-height: .9rem;
        border: 1px solid #e4811d;
        border-radius: 0.2rem;
        margin: .6rem .3rem 0;
    }
</style>