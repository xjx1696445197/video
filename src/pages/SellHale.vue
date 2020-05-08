<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('otc_sell_hale.title')}}</p>
        </div>
        <div class="wrapper">
            <div class="sellHale_title clearfix">
                <p class="sellHale_txt1 fl fweight">{{$t('otc_sell.available')}}{{available_Hale | tofixed2}}HALE</p>
                <p class="sellHale_txt1 fr fweight">{{$t('otc_sell.available')}}{{available_Usdt | tofixed2}}USDT</p>
            </div>
            <div class="sellHale_mid_wrapper">
                <div class="sellHale_mid">
                    <div class="sellHale_mid_top">
                        <div class="sellHale_mid_base clearfix">
                            <div class="sellHale_headImg fl"></div>
                            <div class="sellHale_baseNum fl">
                                <p class="sellHale_txt2 fweight">{{detail.nickName}}</p>
                                <p class="sellHale_txt3">{{$t('otc_sell.transactionSheet')}}{{detail.transactionNum}}
                                    <span style="margin-left: 0.2rem;">{{$t('otc_sell.turnoverRate')}}{{detail.transactionRate*100}}%</span></p>
                            </div>
                        </div>
                        <div class="sellHale_subNum clearfix">
                            <p class="sellHale_txt4 fl">{{$t('otc_sell.num')}} {{detail.sellNum | tofixed2}}  HALE</p>
                            <p class="sellHale_txt4 fl">{{$t('otc_sell.quota')}} {{detail.singleMin}}-{{detail.singleMax}}  USDT</p>
                        </div>
                    </div>
                    <div class="sellHale_mid_bottom clearfix">
                        <p class="sellHale_txt5 fl">{{$t('otc_orderDetail.remarks')}}</p>
                        <p class="sellHale_txt6 fl">{{detail.remarks}}</p>
                    </div>
                </div>
            </div>
            <div class="sellHale_bottom_wrapper">
                <div class="sellHale_bottom">
                    <div class="sellHale_item clearfix border_eee">
                        <p class="sellHale_txt7 fl">{{$t('otc_sell_hale.price')}} （USDT）</p>
                        <p class="sellHale_txt8 fl">{{price}}</p>
                    </div>
                    <div class="sellHale_item">
                        <p class="sellHale_txt9">{{$t('otc_sell_hale.sellNum')}}（HALE）</p>
                    </div>
                    <div class="sellHale_item sellHale_item1">
                        <input type="text" class="sellHale_item_input"
                               :placeholder="$t('otc_sell_hale.availableSell')+(detail.sellNum)"
                               v-model="inputAmount"
                        >
                        <div class="sellHale_item_all tcenter"
                             @click="allSell"
                        >{{$t('otc_sell_hale.all')}}</div>
                    </div>
                    <div class="sellHale_item clearfix" style="margin-top: 0.2rem">
                        <p class="sellHale_txt9 fl">{{$t('otc_sell_hale.earned')}}（USDT）</p>
                        <input type="text" class="sellHale_item_input1 fl"
                               :placeholder="(detail.singleMin)+'-'+(detail.singleMax)"
                               v-model="inputUsdtAmount"
                        >
                    </div>
                    <div class="sellHale_item_fee">
                        <p class="sellHale_txt10">{{$t('otc_sell_hale.fee')}} {{trueFee}} USDT</p>
                    </div>
                    <div class="LONGBTN tcenter BUTTON_SHADOW sellHale_btn mauto"
                         :class="[inputAmount!=''&& inputUsdtAmount!=''&&inputAmount!=0? 'LONGBTN':'backgroundCCC']"
                         @click="toSureBuy"
                    >{{$t('otc_sell.sell')}}</div>

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

                <div class='DIALOG_CONTENT_REMINDER'
                     v-if="reminderMsg=='USDT'"
                >
                    {{$t('otc_reminder.fail1')}}
                </div>
                <div class='DIALOG_CONTENT_REMINDER'
                     v-if="reminderMsg=='HALE'"
                >
                    {{$t('otc_reminder.fail3')}}
                </div>
                <div class='DIALOG_BTNS'>
                    <div
                            class='DIALOG_BTN_REMINDER REMINDER'
                            @click='toRecharge(reminderMsg)'
                    >{{$t('otc_reminder.btn')}}</div>
                </div>
            </div>
        </nlayer>

        <!--交易提醒样式-->
        <nlayer
                :visible="noFailReminder"
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

        <!--无交易密码样式-->
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
        name: "SellHale",
        components: {
            Nlayer
        },
        data(){
            return {
                noReminder:false,
                noFailReminder:false,
                passwordDigVisible:false,
                available_Hale:'0.00',
                available_Usdt:'0.00',
                password:'',
                inputAmount:'',
                inputUsdtAmount:'',
                detail:{},
                tipsVisible:false,
                tips:'',
                reminderMsg:'',
                fee:null,
                trueFee:0,
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
                this.inputUsdtAmount = tofixed2(this.inputAmount*this.price)
                this.trueFee = parseFloat(this.fee*this.inputUsdtAmount).toFixed(2)

                if( isNaN(value) ){
                    this.inputAmount = ''
                    this.inputUsdtAmount = ''
                } else if( !reg.test(value) || floatValue > 2 ){
                    this.inputAmount = tofixed2(value)
                    this.inputUsdtAmount = tofixed2(this.inputAmount*this.price)
                } else if( value > maxAmount){
                    this.inputAmount = this.maxAmount
                    this.inputUsdtAmount = tofixed2(this.maxAmount*this.price)
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
                    console.log('123')
                    // 获取登录时的购买列表
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
                            this.fee = res.result.fee
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
                            this.sureSell()
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
            //    出售
            sureSell(){
                this.$http.post('js/hOtcTransaction/submitTransaction',{
                    type:2,
                    userId: this.userId,
                    amount:this.inputAmount,
                    transPass: this.password,
                    receiveAmount:this.inputUsdtAmount,
                    orderId:this.orderId
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.showTips(res.message)
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
                //    1.检测HALE与USDT数量是否正确
                //    2.检测是否在限额范围内
                //    3.检测交易密码是否正确
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
                if(this.inputAmount > this.available_Hale){
                    this.openReminder('HALE')
                    return
                }
                if(this.inputUsdtAmount > this.available_Usdt - this.detail.fee){
                    this.openReminder('USDT')
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
            toRecharge(toRecharge){
                this.$push({
                    path: '/currencyCollect',
                    query: {
                        currencyName: toRecharge
                    }
                })
            },
            // 全部出售
            allSell(){
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
            openReminder(msg){
                this.reminderMsg = msg
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
    .sellHale_title{
        background: #fff;
        padding: 0 0.6rem;
    }

    .sellHale_txt1{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.8rem;
    }
    .sellHale_mid_wrapper{
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
        /*background: #203395;*/
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
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
    .sellHale_mid_bottom{
        padding: 0.2rem 0;
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
    .sellHale_bottom_wrapper{
        background: #f5f5f5;
        padding-top: 0.2rem;
    }
    .sellHale_bottom{
        background: #fff;
        padding: 0 0.3rem;
    }
    .sellHale_txt7{
        font-size: 0.26rem;
        color: #aaa;
        line-height: 1rem;
    }
    .sellHale_txt8{
        font-size: 0.3rem;
        color: #333;
        line-height: 1rem;
        padding-left: 0.35rem;
    }
    .border_eee{
        border-bottom: 1px solid #eee;
    }
    .sellHale_txt9{
        font-size: 0.26rem;
        color: #333;
        line-height: 1rem;
    }
    .sellHale_item_input{
        height: 0.9rem;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.9rem;
        padding-left: 0.15rem;
        padding-right: 1.5rem;
        width: 100%;
        border-radius: 0.1rem;
    }
    .sellHale_item_input:after{
        position: relative;
        content: '';
        top: 0.3rem;
        right: 1.2rem;
        width: 1px;
        height: 0.3rem;
        background: #203395;
    }
    .sellHale_item_input1{
        height: 1rem;
        border: none;
        color: #203395;
    }
    .sellHale_btn{
        /*position: fixed;*/
        /*left: 50%;*/
        /*transform: translateX(-50%);*/
        /*bottom: 0.8rem;*/
        width:6.9rem;
        height:1rem;
        font-size: 0.3rem;
        color: #fff;
        line-height: 1rem;
        margin-top: 2.1rem;
        margin-bottom: .2rem;
        /*background: #ccc;*/
    }
    .backgroundCCC{
        background: #ccc;
    }
    .sellHale_item1{
        position: relative;
    }
    .sellHale_item1:after{
        position: absolute;
        content: '';
        width: 1px;
        height: 0.3rem;
        background: #203395;
        top: 0.3rem;
        right: 1.2rem;
    }
    .sellHale_item_all{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.9rem;
        width: 1.3rem;
        height: 0.9rem;
    }
    .sellHale_txt10{
        font-size: 0.22rem;
        color: #666;
        line-height: 0.3rem;
    }
    input::-webkit-input-placeholder {
        color: #ccc;
    }
</style>