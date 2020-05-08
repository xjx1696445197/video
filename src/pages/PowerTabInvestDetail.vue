<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('halePower.halePower_investmentDetailsTitle')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="detail_top tcenter"
                     :class="[querys.state == 1 ? 'state1' : 'state2']"
                >
                    <div class="detail_icon mauto radius-round"></div>
                    <p class="detail_txt1">{{dealFlag}}{{(detail.amount || '----') | tofixed4}} {{currency}}</p>
                    <p class="detail_txt2">{{dealStateTxt}}</p>
                </div>

                <div class="detail_list">
                    <div class="detail_list_wrapper">
                        <div class="detail_item" style="border-top: 1px solid #ccc">
                            <p class="detail_item_txt1">{{$t('halePower.halePower_investmentUsdtNum')}}：</p>
                            <p class="detail_item_txt2">{{(detail.amount || '----') | tofixed4}}</p>
                        </div>
                        <div class="detail_item">
                            <p class="detail_item_txt1">{{$t('halePower.halePower_investmentAvailable')}}：</p>
                            <p class="detail_item_txt2">{{(detail.interest || '----') | tofixed4}}</p>
                        </div>
                        <div class="detail_item" v-if="querys.state == 0">
                            <p class="detail_item_txt1">{{$t('halePower.halePower_investmentTime')}}：</p>
                            <p class="detail_item_txt2">{{(detail.startTime || '----') | dataFormat('yyyy-MM-dd')}}</p>
                        </div>
                        <div class="detail_item" style="border-bottom: none;">
                            <p class="detail_item_txt1">{{$t('halePower.halePower_expireTime')}}：</p>
                            <p class="detail_item_txt2">{{(detail.endTime || '----') | dataFormat('yyyy-MM-dd')}}</p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="box_item">
                            <div class="detail_item" v-if="querys.state == 0">
                                <p class="detail_item_txt1">{{$t('halePower.halePower_investmentAcquired')}}：</p>
                                <p class="detail_item_txt2">{{(detail.alrAmount || '----') | tofixed4}}</p>
                            </div>
                        </div>

                        <div class="box_collect">
                            <div class="detail_item">
                                <p class="detail_item_txt1">{{$t('halePower.halePower_oneself')}}：</p>
                                <div class="detail_item_right">
                                    <p class="detail_item_txt2">{{(detail.oneself || '----') | tofixed4}}</p>
                                    <div class="detail_item_txt3" @click="toLockedPositionRecord" data-type="1">{{$t('halePower.halePower_incomePublic')}}</div>
                                </div>

                            </div>
                            <div class="detail_item">
                                <p class="detail_item_txt1">{{$t('halePower.halePower_team')}}：</p>
                                <div class="detail_item_right">
                                    <p class="detail_item_txt2">{{(detail.team || '----') | tofixed4}}</p>
                                    <div class="detail_item_txt3" @click="toLockedPositionRecord" data-type="2">{{$t('halePower.halePower_incomePublic')}}</div>
                                </div>
                            </div>
                            <div class="detail_item">
                                <p class="detail_item_txt1">{{$t('halePower.halePower_market')}}：</p>
                                <div class="detail_item_right">
                                    <p class="detail_item_txt2">{{(detail.market || '----') | tofixed4}}</p>
                                    <div class="detail_item_txt3" @click="toLockedPositionRecord" data-type="3">{{$t('halePower.halePower_incomePublic')}}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="detail_list_wrapper">
                        <div class="detail_item">
                            <p class="detail_item_txt1">{{$t('halePower.halePower_remaining')}}：</p>
                            <p class="detail_item_txt2">{{detail.returnTime || '----'}}</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PowerTabInvestDetail",
        data(){
            return {
                detail: {}
            }
        },
        computed: {
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
                if( this.querys.state == 0 ){
                    return this.$t('halePower.halePower_powerInvestmentIn')
                } else {
                    return this.$t('halePower.halePower_powerInvestmented')
                }
            },
            currency(){
                if( this.querys.state == 0 ){
                    return 'USDT'
                } else {
                    return this.$t('product.hale_calculationPower')
                }
            }
        },
        mounted(){
            this.getDetail()
        },
        methods: {
            // 获取详情
            getDetail(){
                this.$http.get('js/hlocks/findLockDetail', {
                    id: this.querys.id
                }).then((res) => {
                    const result = res.resultVo
                    console.log(result)
                    if( result.success ){
                        this.detail = result.result
                    }
                })
            },
            // 去看锁仓收益记录
            toLockedPositionRecord(e){
                const { type } = e.currentTarget.dataset

                this.$push({
                    path: '/IncomeRecord',
                    query: {
                        type,
                        id: this.querys.id,
                        state: 1
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
        background: #fafafa;
    }
    .detail_list_wrapper{
        background: #fff;
        padding: 0 0.3rem;
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
        width: 3rem;
    }
    .detail_item_txt2{
        font-size: .3rem;
        color: #666;
        line-height: .5rem;
        text-align: right;
        flex: 1;
        flex-wrap: wrap;
    }
    .detail_item_txt3{
        font-size: .26rem;
        color: #e4811d;
        line-height: .5rem;
        padding-left: 0.4rem;
        position: relative;
    }
    .detail_item_txt3:after{
        position: absolute;
        content: '';
        left: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 0.3rem;
        background: #e4811d;
    }

    .box{
        margin-top: 0.2rem;
    }
    .box_item{
        padding:0 0.3rem;
        background: #fff;
    }
    .box_collect{
        padding:0 0.3rem;
    }
    .box .detail_item{
        border-bottom: none;
    }


    .box_collect .detail_item_txt1{
        font-size: .26rem;


    }
    .detail_item_right{
        display: flex;
    }

    .box_collect .detail_item+.detail_item{
        border-top: 1px solid #ccc;
    }
    .detail_item_txt2{
        font-size: .26rem;
    }
</style>