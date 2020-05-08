<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{currencyNameTitle}}{{$t('currencyDetail.currencyDetail_exchangeTitle')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="currency">
                    <div class="currency_avatar radius-round"></div>
                    <div class="currency_detail">
                        <p class="currency_name">HALE/{{currencyNameTitle}}</p>
                        <p class="currency_amount">{{scale}}</p>
                    </div>
                </div>
                <div class="calculate">
                    <div class="calculate_top">
                        <div class="calculate_entry calculate_area">
                            <p class="calculate_txt1">{{currencyNameTitle}}</p>
                            <input type="text"
                                   class="calculate_input active"
                                   :placeholder="$t('currencyDetail.currencyDetail_fillNum')"
                                   v-model="inputAmount"
                            >
                        </div>
                        <p class="calculate_txt2">=</p>
                        <div class="calculate_output calculate_area">
                            <div class="calculate_input disabled">{{accountAmount}}</div>
                            <p class="calculate_txt1">HALE</p>
                        </div>
                    </div>
                    <div class="calculate_sub">
                        <p class="calculate_amount">{{$t('currencyDetail.currencyDetail_use')}}{{currencyNameTitle}}:{{usableAmount}}</p>
                        <p class="calculate_allExchange" @click="allExchange">{{$t('currencyDetail.currencyDetail_allExchange')}}</p>
                    </div>
                    <p class="calculate_amount" v-if="currencyName == '算力'">{{$t('currencyDetail.currencyDetail_Calculation')}}：{{detail.investMaintenanceFee * 100}}%HALE</p>
                </div>
                <div class="bottom">
                    <div class="confirm_btn LONGBTN" @click="validateData">{{$t('currencyDetail.currencyDetail_sureExchange')}}</div>
                    <div class="tips mauto">
                        <p class="tips_txt1">{{$t('currencyDetail.currencyDetail_tips')}}：</p>
                        <p class="tips_txt1">{{currencyTips}}</p>
                        <p class="tips_txt1">2.{{$t('currencyDetail.currencyDetail_tipOne')}}</p>
                    </div>
                </div>

            </div>
        </div>



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
                            @click='closeNoPasswordDig'
                    >{{$t('layerdate.layerdate_set')}}</div>
                </div>
            </div>
        </nlayer>

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
                            :class="[isCheckPassword ? 'active' : '']"
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Nlayer from '@/components/Nlayer'
    import { tofixed4 } from "static/js/untils"

    export default {
        name: "CurrencyExchange",
        components: {
            Nlayer
        },
        data(){
            return {
                detail: {},
                inputAmount: '',
                tips: '',
                tipsVisible: false,
                passwordDigVisible: false,
                noPasswordDigVisible: false,
                password: '',
                isCheckPassword:false
            }
        },
        mounted(){
            this.getDetail()
        },
        watch: {
            inputAmount(newVal){
                const value = Number(newVal)
                const valueArr = newVal.split('.')
                const floatValue = valueArr[1] ? valueArr[1].length : 0
                const maxAmount = Number(this.maxAmount)
                const reg = /^0$|^[1-9]\d{0,15}$|^[1-9]\d{0,15}\.{1}\d{1,4}$|^0\.{1}\d{1,4}$/g


                if( isNaN(value) ){
                    this.inputAmount = ''
                } else if( !reg.test(value) || floatValue > 4 ){
                    this.inputAmount = tofixed4(value)
                } else if( value > maxAmount){
                    this.inputAmount = this.maxAmount
                }
            }
        },
        computed: {
            currencyName(){
                return this.$route.query.currencyName
            },
            currencyNameTitle(){
                return this.$route.query.currencyName == '算力' ? this.$t('product.hale_calculationPower') : this.$route.query.currencyName
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            scale(){
                return this.currencyName == 'USDT' ? tofixed4(this.detail.usdtExchangeHale) : tofixed4(this.detail.investExchangeHale)
            },
            maxAmount(){
                return tofixed4(this.detail.amount)
            },
            usableAmount(){
                let usableAmount = this.maxAmount - this.inputAmount
                if( usableAmount <= 0 ){
                    usableAmount = 0
                }
                if( isNaN(usableAmount) ){
                    usableAmount = this.maxAmount
                }
                return tofixed4(usableAmount)
            },
            currencyTips(){
                const target = this.currencyName == 'USDT' ? this.detail.minUsdtExchangeHale : this.detail.minInvestExchangeHale
                return  this.currencyName == 'USDT' ? this.$t('currencyDetail.currencyDetail_exchangeTip1')+target+this.$t('currencyDetail.currencyDetail_exchangeTip2') : this.$t('currencyDetail.currencyDetail_exchangeTip3')+target+this.$t('currencyDetail.currencyDetail_exchangeTip4')
            },
            accountAmount(){
                const value = this.inputAmount / this.scale
                return value > 0 ? tofixed4(value) : 0
            },
            type(){
                return this.currencyName == 'USDT' ? 1 : 2
            }
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 获取兑换详情
            getDetail(){
                const url = this.currencyName == 'USDT' ? 'js/hsysSettings/usdtExchangeHaleNews' : 'js/hsysSettings/investExchangeHaleNews'

                this.$http.get(url, {
                    userId: this.userId
                }).then((res) => {
                    console.log(res)
                    const data = res.resultVo
                    if( data.success ){
                        this.detail = data.result
                    }
                })
            },
            // 全部转出
            allExchange(){
                this.inputAmount = this.maxAmount
            },
            // 请求兑换
            postExchange(){
                this.$http.post('js/hexchangeLog/usdtExchangeHale', {
                    transPass: this.password,
                    amount: this.inputAmount,
                    type: this.type,
                    userId: this.userId
                }).then((res) => {
                    const data = res.resultVo
                    this.isCheckPassword = false
                    this.closeAll()
                    this.inputAmount = ''
                    this.showTips(data.message)
                    if(res.resultVo.success){
                        setTimeout(() => {
                            this.$back()
                        }, 2000)
                    }


                })
            },
            // 监测数据是否符合格式
            validateData(){
                // 检测转账数量
                if( !this.inputAmount ){
                    this.showTips(this.$t('currencyDetail.currencyDetail_exchangeTip5'))
                    return
                }


                if( parseFloat(this.inputAmount) < parseFloat(this.detail.minInvestExchangeHale) && this.currencyName != 'USDT'){
                    console.log(this.inputAmount,this.detail.minInvestExchangeHale)
                    this.showTips(this.$t('currencyDetail.currencyDetail_exchangeTip6'))
                    return
                }


                if( parseFloat(this.inputAmount) < parseFloat(this.detail.minUsdtExchangeHale) && this.currencyName != '算力'){
                    console.log(this.inputAmount,this.detail.minInvestExchangeHale)
                    this.showTips(this.$t('currencyDetail.currencyDetail_exchangeTip6'))
                    return
                }


                // if(this.inputAmount < this.detail.minInvestExchangeHale && this.currencyName != 'USDT')


                // 检测是否有支付密码
                if( this.userinfo.transPwd ){
                    // 有交易密码
                    this.openPasswordDig()
                } else {
                    // 无交易密码
                    this.openNoPasswordDig()
                }
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
            // 关闭全部layer
            closeAll(){
                this.closeNoPasswordDig()
                this.closePasswordDig()
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
                            this.closePasswordDig()
                            this.postExchange()
                            this.password = ''
                        } else {
                            this.showTips(res.message)
                            this.isCheckPassword = false
                        }
                    })
                }

            },
            // 关闭密码弹窗
            closePasswordDig(){
                this.passwordDigVisible = false

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
            }
        }
    }
</script>

<style scoped>
    .content{
        padding: .5rem .3rem;
    }
    .currency{
        height: 1.2rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
    }
    .currency_avatar{
        width: .7rem;
        height: .7rem;
        background: url("../static/images/icon/hale_currency.png") no-repeat center center / cover;
    }
    .currency_detail{
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    .currency_name{
        font-size: .26rem;
        color: #333;
        line-height: .5rem;
        padding: 0 0.2rem;
    }
    .currency_amount{
        font-size: .26rem;
        color: #333;
        line-height: .5rem;
    }
    .calculate{
        margin-top: 0.6rem;
    }
    .calculate_top{
        display: flex;
    }
    .calculate_area{
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    .calculate_txt1{
        font-size: .3rem;
        color: #333;
        line-height: .6rem;
    }
    .calculate_input{
        width: 2.2rem;
        height: .6rem;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        border-radius: .1rem;
        font-size: .26rem;
        color: #203395;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .calculate_input.active{
        border: 1px solid #203395;
    }
    .calculate_txt2{
        font-size: .3rem;
        color: #333;
        line-height: .6rem;
        font-weight: 700;
        width: 0.4rem;
        text-align: center;
    }
    .calculate_sub{
        display: flex;
        justify-content: space-between;
        margin-top: 0.4rem;
    }
    .calculate_amount{
        font-size: .22rem;
        color: #666;
        line-height: .48rem;
    }
    .calculate_allExchange{
        font-size: .2rem;
        color: #203395;
        line-height: .5rem;
    }
    .bottom{
        margin-top: 1rem;
        padding: 0 .7rem;
    }
    .tips{
        background: #fafafa;
        border: 1px solid #eee;
        padding: .1rem .2rem;
        border-radius: .1rem;
        margin-top: .5rem;
    }
    .tips_txt1{
        font-size: .22rem;
        color: #666;
        line-height: .48rem;
    }
    .DIALOG_BTN.active{
        color: #999;
    }
</style>
