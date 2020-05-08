<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('otc_orderDetail.title')}}</p>
        </div>
        <div class="wrapper">
            <div class="orderDetail_top">
                <div class="mauto"
                     :class="[success?'orderDetail_icon_success':'orderDetail_icon']"
                ></div>
                <p class="orderDetail_txt1 tcenter fweight">{{success?$t('otc_orderDetail.status1'):$t('otc_orderDetail.status1')}}</p>
                <div class="orderDetail_num clearfix" v-if="userId != detail.userId">
                    <p class="orderDetail_txt2 fl"
                       :class="type==2?'orderDetail_colorRed':'orderDetail_colorGreen'"
                    >{{type==1?'+':'-'}}{{detail.allAmount | tofixed2}} HALE</p>
                    <p class="orderDetail_txt3 fl"
                       :class="type==1?'orderDetail_colorRed':'orderDetail_colorGreen'"
                    >{{type==1?'-':'+'}}{{(detail.allAmount*detail.amount) | tofixed2}} {{detail.transactionCurrency}}</p>

                </div>
                <div class="orderDetail_num clearfix" v-if="userId == detail.userId">
                    <p class="orderDetail_txt2 fl"
                       :class="detail.type==1?'orderDetail_colorRed':'orderDetail_colorGreen'"
                    >{{detail.type==1?'-':'+'}}{{(detail.allAmount*detail.amount) | tofixed2}} {{detail.transactionCurrency}}</p>
                    <p class="orderDetail_txt3 fl"
                       :class="detail.type==2?'orderDetail_colorRed':'orderDetail_colorGreen'"
                    >{{detail.type==1?'+':'-'}}{{detail.allAmount | tofixed2}} HALE</p>
                </div>
                <p class="orderDetail_txt4 tcenter"
                   v-if="!success"
                >{{$t('otc_orderDetail.tips')}}</p>
            </div>
            <div class="orderDetail_mid">
                <div class="orderDetail_list">
                    <div class="orderDetail_item clearfix">
                        <p class="orderDetail_txt5 fl">{{$t('otc_orderDetail.transferNum')}}</p>
                        <p class="orderDetail_txt5 fr orderDetail_item_copy" data-initcopyer="true">{{detail.orderId}}</p>
                    </div>
                    <div class="orderDetail_item clearfix">
                        <p class="orderDetail_txt5 fl">{{type==1?$t('otc_orderDetail.purchase'):$t('otc_orderDetail.sell')}}{{$t('otc_orderDetail.price')}}</p>
                        <p class="orderDetail_txt5 fr">{{detail.amount | tofixed2}} USDT</p>
                    </div>
                    <div class="orderDetail_item clearfix">
                        <p class="orderDetail_txt5 fl">{{type==1?$t('otc_orderDetail.purchase'):$t('otc_orderDetail.sell')}}{{$t('otc_orderDetail.num')}}</p>
                        <p class="orderDetail_txt5 fr">{{detail.allAmount | tofixed2}} HALE</p>
                    </div>
                    <div class="orderDetail_item clearfix"
                         v-if="type==1"
                    >
                        <p class="orderDetail_txt5 fl">{{$t('otc_orderDetail.buyFee')}}</p>
                        <p class="orderDetail_txt5 fr">{{(detail.allAmount*detail.amount) | tofixed2}} USDT</p>
                    </div>
                    <div class="orderDetail_item clearfix"
                         v-if="type==2"
                    >
                        <p class="orderDetail_txt5 fl">{{$t('otc_orderDetail.earned')}}</p>
                        <p class="orderDetail_txt5 fr">{{(detail.allAmount*detail.amount) | tofixed2}} USDT</p>
                    </div>
                    <div class="orderDetail_item clearfix"
                         v-if="detail.type==2 && userId == detail.userId"
                    >
                        <p class="orderDetail_txt5 fl">{{$t('otc_orderDetail.fee')}}</p>
                        <p class="orderDetail_txt5 fr">{{detail.fee}} USDT</p>
                    </div>
                    <div class="orderDetail_item clearfix">
                        <p class="orderDetail_txt5 fl">{{$t('otc_orderDetail.transferTime')}}</p>
                        <p class="orderDetail_txt5 fr">{{detail.transactionTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                    </div>
                    <div class="orderDetail_item clearfix" v-if="userId != detail.userId">
                        <p class="orderDetail_txt5 fl">{{type==2?$t('otc_orderDetail.buyPeople'):$t('otc_orderDetail.sellPeople')}}</p>
                        <p class="orderDetail_txt5 fr">{{userDetail.nickName}}</p>
                    </div>
                </div>
            </div>
            <div class="orderDetail_bottom" v-if="userId == detail.userId">
                <!--<div class="sellHale_mid" >-->
                <!--<div class="sellHale_mid_top">-->
                <!--<div class="sellHale_mid_base clearfix">-->
                <!--<div class="sellHale_headImg fl"></div>-->
                <!--<div class="sellHale_baseNum fl">-->
                <!--<p class="sellHale_txt2 fweight" style="line-height: 0.8rem">{{userDetail.nickName}}</p>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <div class="sellHale_mid">
                    <div class="sellHale_mid_top">
                        <div class="sellHale_mid_base clearfix">
                            <div class="sellHale_headImg fl"></div>
                            <div class="sellHale_baseNum fl">
                                <p class="sellHale_txt2 fweight">{{userDetail.nickName}}</p>
                                <p class="sellHale_txt3">{{$t('otc_orderDetail.transactionSheet')}}{{userDetail.transactionNum}}
                                    <span style="margin-left: 0.2rem;">{{$t('otc_orderDetail.turnoverRate')}}{{userDetail.transactionRate*100 | tofixed2}}%</span></p>
                            </div>
                        </div>
                        <div class="sellHale_subNum clearfix">
                            <p class="sellHale_txt4 fl">{{$t('otc_orderDetail.num')}} {{userDetail.allAmount}}  HALE</p>
                            <p class="sellHale_txt4 fl">{{$t('otc_orderDetail.quota')}} {{userDetail.singleMin}}-{{userDetail.singleMax}}  USDT</p>
                        </div>
                    </div>
                    <div class="sellHale_mid_bottom clearfix">
                        <p class="sellHale_txt5 fl">{{$t('otc_orderDetail.remarks')}}</p>
                        <p class="sellHale_txt6 fl">{{userDetail.remarks}}</p>
                    </div>
                </div>
            </div>
        </div>

        <!--普通提示-->
        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1200"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>
</template>
<script>
    import ClipboardJS from '_clipboard@2.0.4@clipboard'
    import Nlayer from '@/components/Nlayer'
    // import { mapGetters } from '_vuex@3.1.2@vuex/types'

    export default {
        name: "OrderDetail",
        components: {
            Nlayer
        },
        data(){
            return {
                success:true,
                copyer: null,
                tipsVisible:false,
                tips: '',
                detail:{},
                userDetail:{}
            }
        },
        // computed: {
        //     userinfo(){
        //         return this.getUserinfo()
        //     },
        //     userId(){
        //         return this.userinfo.userId
        //     },
        //     orderId(){
        //         return this.$route.query.orderId
        //     },
        //     type(){
        //         return this.$route.query.type
        //     }
        // },
        mounted(){
            this.getDetail()
        },
        destroyed(){
            this.copyer.destroy()
        },
        methods:{
            // ...mapGetters(['getUserinfo']),
            // 打开消息提示
            showTips(msg, refresh=true){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            // 初始化复制器
            initCopyer(value){
                this.copyer = new ClipboardJS('[data-initcopyer]', {
                    text (){
                        return value
                    }
                }).on('success', () => {
                    this.showTips('复制成功')
                })

            },
            // 获取订单详情
            getDetail(){
                // type 1 购买 2 出售
                // var data = {
                //     address:'1234567879912345678799',
                //     type:2,
                //     price:'$ 10.86',
                //     num:'2000 HALE',
                //     uNum:'200 USDT',
                //     fee:'200 USDT',
                //     time:'2020-02-26 17:45:26'
                // }
                // this.detail = data
                // this.initCopyer(data.address)
                // return
                this.$http.get('js/hOtcTransaction/findOrderDetail', {
                    id: this.orderId,
                    userId:this.userId
                }).then((res) => {
                    console.log(res)
                    // return
                    if( res.success ){
                        this.userDetail = res.result
                        this.detail = res.result.otcOrderDetail
                        this.initCopyer(res.result.otcOrderDetail.orderId)
                    }
                })
            },
        }
    }
</script>
<style scoped>
    .page{
        background: #fff;
    }
    .orderDetail_top{
        padding: 0.4rem 0;
    }
    .orderDetail_icon{
        width: 1.2rem;
        height: 1.2rem;
        background: url("../static/images/icon/waiting_icon.png")no-repeat center center / cover;
    }
    .orderDetail_icon_success{
        width: 1.2rem;
        height: 1.2rem;
        background: url("../static/images/video_icon/icon_success.png")no-repeat center center / cover;
    }
    .orderDetail_txt1{
        font-size: 0.3rem;
        color: #333;
        line-height: 1rem;
    }
    /*.orderDetail_num{*/
    /*padding: 0 1.2rem;*/
    /*}*/
    .orderDetail_txt2{
        font-size: 0.3rem;
        line-height: 0.5rem;
        width: 50%;
        padding-right: 0.25rem;
        text-align: right;
    }
    .orderDetail_txt3{
        font-size: 0.3rem;
        line-height: 0.5rem;
        width: 50%;
        padding-left: 0.25rem;
    }
    .orderDetail_colorRed{
        color: #ED472C;
    }
    .orderDetail_colorGreen{
        color: #21B369;
    }
    .orderDetail_txt4{
        font-size: 0.22rem;
        color: #aaa;
        line-height: 0.5rem;
        margin-top: 0.15rem;
    }
    .orderDetail_mid{
        background: #f5f5f5;
        padding-top: 0.2rem;
    }
    .orderDetail_list{
        background: #fff;
        padding: 0.3rem;
    }
    .orderDetail_txt5{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.7rem;
    }
    .orderDetail_item_copy{
        position:relative;
        padding-right: 0.4rem;
    }
    .orderDetail_item_copy:after{
        position: absolute;
        content: '';
        width: 0.3rem;
        height: 0.3rem;
        background: url("../static/images/icon/detail_copy_icon.png")no-repeat center center / cover;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }
    /*底部公用样式开始*/
    .orderDetail_bottom{
        background: #f5f5f5;
        padding-top: 0.2rem;
    }
    .sellHale_mid{
        background: #fff;
        padding: 0 0.3rem;
    }
    .sellHale_mid_top{
        padding-top: 0.2rem;
    }
    .sellHale_headImg{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        /*background: #E18221;*/
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .sellHale_txt7{
        line-height: 0.8rem;
    }
    .sellHale_baseNum{
        padding-left: 0.15rem;
        padding-top: 0.05rem;
    }
    .sellHale_txt2{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.4rem;
    }
    .sellHale_txt3{
        font-size: 0.18rem;
        color: #aaa;
        line-height: 0.3rem;
    }
    .sellHale_subNum{
        border-bottom: 1px solid #eee;
    }
    .sellHale_txt4{
        font-size: 0.2rem;
        color: #333;
        line-height: 0.75rem;
        width: 50%;
    }
    .sellHale_txt5{
        font-size: 0.2rem;
        color: #333;
        line-height: 0.35rem;
    }
    .sellHale_txt6{
        font-size: 0.2rem;
        color: #aaa;
        line-height: 0.35rem;
        width: 90%;
    }
    .sellHale_mid_bottom{
        padding: 0.2rem 0;
    }
    /*底部公用样式结束*/
</style>