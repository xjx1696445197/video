<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('otc_buy_hale.title')}}</p>
        </div>
        <div class="wrapper">
            <div class="buyHale_title clearfix">
                <p class="buyHale_txt1 fl fweight">{{$t('otc_buy.available')}}{{available_Hale | tofixed2}}HALE</p>
                <p class="buyHale_txt1 fr fweight">{{$t('otc_buy.available')}}{{available_Usdt | tofixed2}}USDT</p>
            </div>
            <div class="buyHale_mid_wrapper">
                <div class="buyHale_mid">
                    <div class="buyHale_mid_top">
                        <div class="buyHale_mid_base clearfix">
                            <div class="buyHale_headImg fl"></div>
                            <div class="buyHale_baseNum fl">
                                <p class="buyHale_txt2 fweight">{{detail.nickName}}</p>
                                <p class="buyHale_txt3">{{$t('otc_buy.transactionSheet')}}{{detail.transactionNum}}
                                    <span style="margin-left: 0.2rem">{{$t('otc_buy.turnoverRate')}}{{detail.transactionRate*100}}%</span>
                                </p>
                            </div>
                        </div>
                        <div class="buyHale_subNum clearfix">
                            <p class="buyHale_txt4 fl">{{$t('otc_buy.num')}} {{detail.sellNum | tofixed2}}  HALE</p>
                            <p class="buyHale_txt4 fl">{{$t('otc_buy.quota')}} {{detail.singleMin}}-{{detail.singleMax}}  USDT</p>
                        </div>
                    </div>
                    <div class="buyHale_mid_bottom clearfix">
                        <p class="buyHale_txt5 fl">{{$t('otc_orderDetail.remarks')}}</p>
                        <p class="buyHale_txt6 fl">{{detail.remarks}}</p>
                    </div>
                </div>
            </div>
            <div class="buyHale_bottom_wrapper">
                <div class="buyHale_bottom">
                    <div class="buyHale_item clearfix border_eee">
                        <p class="buyHale_txt7 fl">{{$t('otc_buy_hale.price')}}（USDT）</p>
                        <p class="buyHale_txt8 fl">{{price}}</p>
                    </div>
                    <div class="buyHale_item">
                        <p class="buyHale_txt9">{{$t('otc_buy_hale.buyNum')}}（HALE）</p>
                    </div>
                    <div class="buyHale_item buyHale_item1">
                        <input type="text" class="buyHale_item_input"
                               :placeholder="$t('otc_buy_hale.availableBuy')+(detail.sellNum)"
                               v-model="inputAmount"
                        >
                        <div class="buyHale_item_all tcenter"
                             @click="allBuy"
                        >{{$t('otc_buy_hale.all')}}</div>
                    </div>
                    <div class="buyHale_item clearfix">
                        <p class="buyHale_txt9 fl">{{$t('otc_buy_hale.pay')}}（USDT）</p>
                        <input type="text" class="buyHale_item_input1 fl"
                               :placeholder="detail.singleMin+'-'+detail.singleMax"
                               v-model="inputUsdtAmount"
                        >
                    </div>
                    <div class="buyHale_btn tcenter BUTTON_SHADOW mauto"
                         :class="[inputAmount!=''&& inputUsdtAmount!=''&&inputAmount!=0? 'LONGBTN':'backgroundCCC']"
                         @click="toSureBuy"
                    >{{$t('otc_buy.purchase')}}</div>

                </div>
            </div>

        </div>



        <!--交易提醒充值样式-->
        <nlayer
                :visible="noReminder"
                @close="noReminderClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class="DIALOG_WRAPPER">
                    <div class='DIALOG_REMINDER'>
                        {{$t('otc_reminder.title')}}
                    </div>
                    <div class="DIALOG_REMINDER_CLOSE"
                         @click='noReminderClose'
                    ></div>
                </div>

                <div class='DIALOG_CONTENT_REMINDER'>
                    {{$t('otc_reminder.fail1')}}
                </div>
                <div class='DIALOG_BTNS'>
                    <div
                            class='DIALOG_BTN_REMINDER REMINDER'
                            @click='toRecharge'
                    >{{$t('otc_reminder.btn')}}</div>
                </div>
            </div>
        </nlayer>

        <!--交易提醒样式-->
        <nlayer
                :visible="noFailReminder"
                @close="noFailReminderClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class="DIALOG_WRAPPER">
                    <div class='DIALOG_REMINDER'>
                        {{$t('otc_reminder.title')}}
                    </div>
                    <div class="DIALOG_REMINDER_CLOSE"
                         @click='noFailReminderClose'
                    ></div>
                </div>

                <div class='DIALOG_CONTENT_REMINDER'
                     style="padding-bottom: 0.5rem;padding-top: 0.5rem;"
                >
                    {{$t('otc_reminder.fail2')}}
                </div>
            </div>
        </nlayer>

        <!--交易密码样式-->
        <nlayer
                :visible="passwordDigVisible"
                @close="passwordDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_enterTransactionPwd')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    <input type="password"
                           class="PASSWORD_INPUT"
                           :placeholder="$t('layerdate.layerdate_enterTransactionPwd')"
                           v-model="password"
                    >
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closePasswordDig'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='checkPassword'
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>

        <!--无密码去设置-->
        <nlayer
                :visible="noPasswordDigVisible"
                @close="noPasswordDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_tips')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    {{$t('layerdate.layerdate_setPwd')}}
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closeNoPasswordDig'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='toSetDealPassword'
                    >{{$t('layerdate.layerdate_set')}}</div>
                </div>
            </div>
        </nlayer>

        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1200"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
                :zIndex="1000"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import { tofixed2 } from "static/js/untils"
    import Nlayer from 'components/Nlayer'

    export default {
        name: "BuyHale",
        components: {
            Nlayer
        },
        data(){
            return {
                maxNum:'1000.56',
                section:'100-10000',
                available_Hale:'0.00',
                available_Usdt:'0.00',
                detail:{},
                inputAmount: '',
                inputUsdtAmount:'',
                passwordDigVisible:false,
                tipsVisible:false,
                password:'',
                noReminder:false,
                noFailReminder:false,
                tips:'',
                noPasswordDigVisible: false,

            }
        },
        mounted(){
            // 判断是否登录
            this.isLogin()
        },
        watch: {
            inputAmount(newVal){
                const value = Number(newVal)
                const valueArr = newVal.split('.')
                const floatValue = valueArr[1] ? valueArr[1].length : 0
                const maxAmount = Number(this.maxAmount)
                const reg = /^0$|^[1-9]\d{0,15}$|^[1-9]\d{0,15}\.{1}\d{1,4}$|^0\.{1}\d{1,4}$/g
                this.inputUsdtAmount = this.inputAmount*this.price

                if( isNaN(value) ){
                    this.inputAmount = ''
                    this.inputUsdtAmount = ''
                } else if( !reg.test(value) || floatValue > 2 ){
                    this.inputAmount = tofixed2(value)
                    this.inputUsdtAmount = this.inputAmount*this.price
                } else if( value > maxAmount){
                    this.inputAmount = this.maxAmount
                    this.inputUsdtAmount = this.maxAmount*this.price
                }
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            orderId(){
                return this.$route.query.orderId
            },
            price(){
                return this.$route.query.price
            },
            maxAmount(){
                return tofixed2(this.detail.sellNum)
            },
        },
        methods:{
            ...mapGetters(['getUserinfo']),
            // 检测用户是否登录
            isLogin(){
                if( this.userinfo ){
                    // 获取登录时的列表
                    this.getOrderDetail()
                    // 获取可用余额
                    this.getAvailableAmount()
                }
            },
            // 获取可用余额
            getAvailableAmount(){
                this.$http.get('js/hOtcListTransaction/getStaticParam', {
                    userId:this.userinfo?this.userId:null,
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
            //    获取订单信息
            getOrderDetail(){
                this.$http.get('js/hOtcListTransaction/getOtcInfoByOrderId', {
                    orderId:this.orderId
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.detail = res.result
                    }
                })
            },
            // 检测交易密码是否正确
            checkPassword(){
                if(!this.isCheckPassword){
                    this.isCheckPassword = true
                    this.$http.post('js/users/isCorrectTransPass',{
                        userId: this.userId,
                        transPass: this.password
                    }).then((res) => {
                        if( res.success ){
                            this.surebuy()
                            // 关闭密码弹窗
                            this.closePasswordDig()
                            this.password = ''
                        } else {
                            this.password = ''
                            this.isCheckPassword = false
                            this.showTips(res.message)
                        }
                    })
                }

            },
            // 请求购买接口
            surebuy(){
                this.$http.post('js/hOtcTransaction/submitTransaction',{
                    type:1,
                    userId: this.userId,
                    amount:this.inputAmount,
                    transPass: this.password,
                    receiveAmount:this.inputUsdtAmount,
                    orderId:this.orderId
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.showTips(res.message)
                        // 跳转到订单页面
                        setTimeout(() => {
                            this.$replace({
                                name: 'Order'
                            })
                        }, 2000)
                    } else {
                        this.showTips(res.message)
                    }
                })
            },
            // 点击购买
            toSureBuy(){
                console.log('点击了购买')
                console.log(this.inputAmount,this.inputUsdtAmount)
                if(this.inputUsdtAmount<this.detail.singleMin){
                    this.showTips('小于最小限额,请增加HALE数量重试')
                    return
                }
                if(this.inputUsdtAmount>this.detail.singleMax){
                    this.showTips('大于最大限额,请减少HALE数量重试')
                    return
                }
                if(this.inputUsdtAmount>this.available_Usdt){
                    this.openReminder()
                    return
                }
                //    检查交易密码是否正确
                if( this.userinfo.transPwd ){
                    // 有交易密码
                    this.openPasswordDig()
                } else {
                    // 无交易密码
                    this.openNoPasswordDig()
                }

            },
            // 去充值
            toRecharge(){
                this.$push({
                    path: '/currencyCollect',
                    query: {
                        currencyName: 'USDT'
                    }
                })
            },
            // 全部购买
            allBuy(){
                this.inputAmount = this.maxAmount
            },
            // 去设置交易密码
            toSetDealPassword(){
                this.$push({
                    path: '/setPassword'
                })
            },
            // 关闭密码弹窗
            closePasswordDig(){
                this.passwordDigVisible = false
                this.password = ''
            },
            // 打开密码弹窗
            openPasswordDig(){
                this.passwordDigVisible = true
            },
            // 监听关闭密码弹窗事件
            passwordDigClose(){
                this.passwordDigVisible = false
                this.password = ''
            },
            // 打开消息提示
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            //    打开充值弹窗
            openReminder(){
                this.noReminder = true
            },
            //    关闭充值弹窗
            noReminderClose(){
                this.noReminder = false
            },
            //    打开错误提示
            openFailReminder(){
                this.noFailReminder = true
            },
            //    关闭错误提示
            noFailReminderClose(){
                this.noFailReminder = false
            },
            // 关闭无密码提示弹窗
            closeNoPasswordDig(){
                this.noPasswordDigVisible = false
            },
            // 打开无密码提示弹窗
            openNoPasswordDig(){
                this.noPasswordDigVisible = true
            },
            // 监听关闭无密码弹窗事件
            noPasswordDigClose(){
                this.noPasswordDigVisible = false
            },


        }
    }
</script>
<style scoped>
    .page{
        background: #fff;
    }
    .buyHale_title{
        background: #fff;
        padding: 0 0.6rem;
    }
    .buyHale_txt1{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.8rem;
    }
    .buyHale_mid_wrapper{
        background: #f5f5f5;
        padding-top: 0.2rem;
    }
    .buyHale_mid{
        background: #fff;
        padding: 0 0.3rem;
    }
    .buyHale_mid_top{
        padding-top: 0.2rem;
    }
    .buyHale_headImg{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        /*background: #203395;*/
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .buyHale_baseNum{
        padding-left: 0.15rem;
        padding-top: 0.05rem;
    }
    .buyHale_txt2{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.4rem;
    }
    .buyHale_txt3{
        font-size: 0.18rem;
        color: #aaa;
        line-height: 0.3rem;
    }
    .buyHale_subNum{
        border-bottom: 1px solid #eee;
    }
    .buyHale_txt4{
        font-size: 0.2rem;
        color: #333;
        line-height: 0.75rem;
        width: 50%;
    }
    .buyHale_mid_bottom{
        padding: 0.2rem 0;
    }
    .buyHale_txt5{
        font-size: 0.2rem;
        color: #333;
        line-height: 0.35rem;
    }
    .buyHale_txt6{
        font-size: 0.2rem;
        color: #aaa;
        line-height: 0.35rem;
        width: 90%;
    }
    .buyHale_bottom_wrapper{
        background: #f5f5f5;
        padding-top: 0.2rem;
    }
    .buyHale_bottom{
        background: #fff;
        padding: 0 0.3rem;
    }
    .buyHale_txt7{
        font-size: 0.26rem;
        color: #aaa;
        line-height: 1rem;
    }
    .buyHale_txt8{
        font-size: 0.3rem;
        color: #333;
        line-height: 1rem;
        padding-left: 0.35rem;
    }
    .border_eee{
        border-bottom: 1px solid #eee;
    }
    .buyHale_txt9{
        font-size: 0.26rem;
        color: #333;
        line-height: 1rem;
    }
    .buyHale_item_input{
        height: 0.9rem;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.9rem;
        padding-left: 0.15rem;
        padding-right: 1.5rem;
        width: 100%;
        border-radius: 0.1rem;
    }
    .buyHale_item_input:after{
        position: relative;
        content: '';
        top: 0.3rem;
        right: 1.2rem;
        width: 1px;
        height: 0.3rem;
        background: #203395;
    }
    .buyHale_item_input1{
        height: 1rem;
        border: none;
        color: #203395;
    }
    .buyHale_btn{
        /*position: absolute;*/
        /*left: 50%;*/
        /*transform: translateX(-50%);*/
        /*bottom: 0.8rem;*/
        width: 6.9rem;
        height: 1rem;
        font-size: 0.3rem;
        color: #fff;
        line-height: 1rem;
        margin-top:2.7rem;
        margin-bottom: .2rem;
    }
    .backgroundCCC{
        background: #ccc;
    }
    .buyHale_item1{
        position: relative;
    }
    .buyHale_item1:after{
        position: absolute;
        content: '';
        width: 1px;
        height: 0.3rem;
        background: #203395;
        top: 0.3rem;
        right: 1.2rem;
    }
    .buyHale_item_all{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.9rem;
        width: 1.3rem;
        height: 0.9rem;
    }
    input::-webkit-input-placeholder {
        color: #ccc;
    }

</style>