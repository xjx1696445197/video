<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">提币</p>
            <!--<div class="HEADER_RIGHT scan" @click="toScan"></div>-->
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="content_title">
                    <p class="content_txt1">可用 CHMC</p>
                    <p class="content_txt2">{{detail.amount}}</p>
                </div>
                <div class="inputBox">
                    <div class="inputBox_top INPUT2_scan">
                        <p class="inputBox_label">{{$t('currencyDetail.currencyDetail_address1')}}</p>
                        <div class="inputBox_scan" @click="toScan"></div>
                    </div>
                    <div class="inputBox_sub">
                        <input
                                type="text"
                                class="INPUT2"
                                :placeholder="showAddress"
                                v-model="address"
                        >

                    </div>
                </div>
                <div class="inputBox">
                    <div class="inputBox_top">
                        <p class="inputBox_label">{{$t('currencyDetail.currencyDetail_num1')}}</p>
                    </div>
                    <div class="inputBox_sub INPUT2_all">
                        <input
                                @blur.prevent="search"
                                type="text"
                                class="INPUT2"
                                :placeholder="$t('currencyDetail.currencyDetail_fillNum')"
                                v-model="inputAmount"
                        >
                        <div class="all" @click="allTransfer">全部提出</div>
                        <div class="inputBox_view">
                            <!--<div class="inputBox_view_top">
                                <div class="inputBox_l">
                                    <p class="inputBox_usable inputBox_txt1">{{$t('currencyDetail.currencyDetail_use')}} {{usableAmount | tofixed4}} {{currencyName}}</p>
                                </div>
                                <div class="inputBox_r">
                                    <p class="inputBox_txt2" @click="allTransfer">{{$t('currencyDetail.currencyDetail_allUse')}}</p>
                                </div>
                            </div>-->
                            <div class="inputBox_view_sub">
                                <p class="inputBox_txt3">{{$t('currencyDetail.currencyDetail_fee')}} {{realFee | tofixed4}} {{currencyName}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inputBox" style="margin-top: 0.15rem;">
                    <div class="inputBox_top">
                        <p class="inputBox_label">{{$t('currencyDetail.currencyDetail_received')}}</p>
                        <p class="inputBox_label">{{accountAmount | tofixed4}} {{currencyName}}</p>
                    </div>
                </div>

                <div class="bottom">
                    <div class="LONGBTN" @click="validateData">确认提币</div>
                    <div class="tips">
                        <p class="tips_txt1">
                            <!--{{currencyTips}}-->
                            提示:<br>
                            1.每笔最低提币{{detail.min}}CHMC；
                            <br>
                            2.每笔最高提币上限{{detail.withdrawMoney}}CHMC；
                            <br>
                            3.每日最大提币上限{{detail.max}}CHMC；
<!--                            <br>-->
<!--                            4.每笔提币收取{{detail.fee*100}}%CHMC手续费；-->
                        </p>
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
                <div class='DIALOG_CONTENT' >
                    {{$t('layerdate.layerdate_setPwd')}}
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closeNoPassword'
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
                            :class="[isCheckPassword ? 'active' : '']"
                            @click='checkPassword'
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>
    </div>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex'
    import Nlayer from '@/components/Nlayer'
    import { tofixed4 } from "static/js/untils"

    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';


    export default {
        name: "CurrencyTransfer",
        components: {
            Nlayer
        },
        data(){
            return {
                detail: {},
                tips: '',
                tipsVisible: false,
                address: '',
                inputAmount: '',
                passwordDigVisible: false,
                noPasswordDigVisible: false,
                password: '',
                isCheckPassword:false,
                realFee:0,
            }
        },
        mounted(){
            this.address = this.getScanData()
//          this.getDetail()
            //
            this.getWithDraw()
        },
        computed: {
            currencyName(){
                return this.$route.query.currencyName
            },

            currencyTips(){
                const withDrawMoney = this.detail.max

                if( withDrawMoney == 0 ){
                    // 提币无上线
                    return this.$t('currencyDetail.currencyDetail_minTransfer')+this.detail.min +this.currencyName+this.$t('currencyDetail.currencyDetail_tip2')
                }else if( withDrawMoney > 0 ){
                    // 有限制
                    return this.$t('currencyDetail.currencyDetail_minTransfer')+ this.detail.min + this.currencyName+ this.$t('currencyDetail.currencyDetail_maxTransfer') + withDrawMoney +  this.currencyName+this.$t('currencyDetail.currencyDetail_tip2')
                }else{
                    // 禁止转账
                    return this.$t('currencyDetail.currencyDetail_tip1')
                }
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
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
                return usableAmount
            },
            accountAmount(){
                const value = this.inputAmount - this.realFee
                return value > 0 ? value : 0
            },
            showAddress(){
                return this.$t('currencyDetail.currencyDetail_please')+this.currencyName+this.$t('currencyDetail.currencyDetail_addresstxt')
            }

        },
        watch: {
            inputAmount(newVal){
                this.realFee = this.inputAmount*this.detail.fee
                const value = Number(newVal)
                const valueArr = newVal.split('.')
                const floatValue = valueArr[1] ? valueArr[1].length : 0
                const maxAmount = Number(this.maxAmount)
                const reg = /^0$|^[1-9]\d{0,15}$|^[1-9]\d{0,15}\.{1}\d{1,4}$|^0\.{1}\d{1,4}$/g

                if( isNaN(value) ){
                    this.inputAmount = ''
                } else if (this.inputAmount >Number(this.detail.withdrawMoney)){
                    this.inputAmount=this.detail.withdrawMoney
                    this.showTips("每笔最高提币上限"+this.detail.withdrawMoney+"CHMC")
                } else if( !reg.test(value) || floatValue > 4 ){
                    this.inputAmount = tofixed4(value)
                    this.realFee =  this.inputAmount*this.detail.fee
                } else if( value > maxAmount){
                    this.inputAmount = this.maxAmount
                    this.realFee = this.maxAmount*this.detail.fee
                }
            }
        },
        destroyed(){
            this.setScanData('')
        },
        methods: {
            ...mapMutations({
                'setScanData': 'SET_SCANDATA'
            }),
            ...mapGetters(['getUserinfo', 'getScanData']),
            search(){
            if (this.inputAmount <this.detail.min)
                {
                    this.showTips("每笔最低提币"+this.detail.min+"CHMC")
                }
            },
            // 去扫码
            toScan(){
                this.$push({
                    path: '/scan'
                })
            },
            checkUSDT(value){
                const usdtRule = /^(1|3)[a-zA-Z\d]{24,33}$/
                const haleRule = /^(0x)?[0-9a-fA-F]{40}$/
                const btcRule = /^[^0OlI]{25,34}$/
                if( !usdtRule.test(value) && !haleRule.test(value) && !btcRule.test(value) ){
                    return this.$t('currencyDetail.currencyDetail_rightAddress')
                }
            },
            checkHALE(value){
                const haleRule = /^(0x)?[0-9a-fA-F]{40}$/
                if( !haleRule.test(value) ){
                    return this.$t('currencyDetail.currencyDetail_rightAddress')
                }
            },
            // 监测数据是否符合格式
            validateData(){
                let msg = ''
                // 检测地址
                if( this.currencyName === 'HALE' ){
                    if(this.address == ''){
                        this.showTips(this.$t('currencyDetail.currencyDetail_correspondingAddress'))
                        return
                    }
                    msg = this.checkHALE(this.address)
                } else {
                    if(this.address == ''){
                        this.showTips(this.$t('currencyDetail.currencyDetail_correspondingAddress'))
                        return
                    }
                    msg = this.checkUSDT(this.address)
                }

                if( msg ){
                    this.showTips(msg)
                    return
                }

                // 检测转账数量
                if( !this.inputAmount ){
                    this.showTips(this.$t('currencyDetail.currencyDetail_transferNum'))
                    return
                } else if( this.inputAmount <= this.detail.fee ){
                    this.showTips(this.$t('currencyDetail.currencyDetail_tip3'))
                    return
                } else if( this.inputAmount < this.detail.perTransferMoney ){
                    this.showTips(this.$t('currencyDetail.currencyDetail_tip4'))
                    return
                }

                // 检测是否有支付密码
                if(localStorage.getItem('transPass')=="true"){
                    // 有交易密码

                    if (this.inputAmount>=Number(this.detail.min)&&this.inputAmount<=Number(this.detail.max)){
                        this.openPasswordDig()
                        return
                    }else if(this.inputAmount>Number(this.detail.max)){
                        this.showTips("最大提币"+this.detail.max+"CHMC")
                        return
                    }else {
                        this.showTips("最小提币"+this.detail.min+"CHMC")
                    }

                } else {
                    // 无交易密码
                    this.openNoPasswordDig()
                }
            },
            // 请求转账
            postTransfer(){
                console.log(this.password)
                // return
                    var that=this;
                jsonAjax.post(urlUtil.getApiUrl("withDrawMoney"), {
                    transPwd: that.password,
                    amount: that.inputAmount,
                    destination: that.address,
                    currency: that.currencyName,
                    userId: that.userId
                }, function (res) {
//                     console.log(result)
// //	                	return
//                     if( result.returnCode == 1 ){
//                         that.closeNoPassword()
//                         that.postTransfer()
//                         that.password = ''
//                     }else{
//                         that.isCheckPassword = false
//                         that.showTips(res.message)
//                     }
                    that.isCheckPassword = false
                    that.closeAll()
                    if( res.returnCode ){
                        that.showTips(res.message)
                        setTimeout(() => {
                            that.$back()
                        }, 1000)
                    }else{
                        that.showTips(res.message)
                    }
                })
                // this.$http.post('app/wallet/userWallet/withDrawMoney', {
                //
                // }).then((res) => {
                //     this.isCheckPassword = false
                //     this.closeAll()
                //     if( res.success ){
                //         this.showTips(res.message)
                //         setTimeout(() => {
                //             this.$back()
                //         }, 2000)
                //     }else{
                //         this.showTips(res.message)
                //     }
                // })
            },
            // 全部转出
            allTransfer(){
                if (this.maxAmount>this.detail.withdrawMoney){
                    this.inputAmount =this.detail.withdrawMoney
                } else {
                    this.inputAmount =this.maxAmount

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
            // 获取币详情
            getDetail(){
                this.$http.get('js/userWallet/getUserWalletByUserId', {
                    userId: this.userId,
                    currency: this.currencyName
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.detail = res.result
                    }else{

                    }
                })
            },
            // 获取提币页面参数
            getWithDraw(){
                var that = this
                jsonAjax.post(urlUtil.getApiUrl("with_draw"), {
                    userId: that.userId,
                    currency: 'CHMC'
                }, function (result) {
                    console.log(result)
//              	return
                    if( result.success ){
                        that.detail = {
                            ...result.result.data,
                            tip: result.result.tip,
                            fee:result.result.fee,
                            max:result.result.max,
                            min:result.result.min,
                            withdrawMoney:result.result.withdrawMoney
                        }



                        console.log(that.detail)
                        that.initCopyer(that.detail.address)
                        if( refresh ){
                            that.showTips(that.shareTip11)
                        }
                    }else{
                        that.showTips(result.message)
                        // 跳转到我的页面
                        setTimeout(()=>{
                            that.$router.replace({
                                path: '/my'
                            })
                        },2000)

                    }
                })
            },
            // 关闭全部layer
            closeAll(){
                this.closeNoPassword()
                this.closePasswordDig()
            },
            // 检测交易密码是否正确
            checkPassword(){
                var that=this;
                if(!this.isCheckPassword){
                    this.isCheckPassword = true
                    jsonAjax.post(urlUtil.getApiUrl("transPass_isTrue"), {
                        userId:that.userId,
                        transPass:that.password
                    }, function (result) {
                        console.log(result)
//	                	return
                        if( result.returnCode == 1 ){
                            that.closeNoPassword()
                            that.postTransfer()
                            that.password = ''
                        }else{
                            that.isCheckPassword = false
                            that.showTips(result.message)
                        }

                    })
                    // this.$http.post('app/users/isCorrectTransPass',{
                    //     userId: this.userId,
                    //     transPass: this.password
                    // }).then((res) => {
                    //     if( res.success ){
                    //         this.closePasswordDig()
                    //         this.postTransfer()
                    //         this.password = ''
                    //
                    //     } else {
                    //         this.isCheckPassword = false
                    //         this.showTips(res.message)
                    //     }
                    // })
                }
            },
            // 关闭密码弹窗
            closePasswordDig(){
                this.passwordDigVisible = false
                this.password=''
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
            closeNoPassword(){
                this.noPasswordDigVisible = false;
            },
            // 关闭无密码提示弹窗
            closeNoPasswordDig(){
                this.noPasswordDigVisible = false;
                this.$push({
                    path: '/Transaction'
                })
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
    .page{
        overflow: scroll;
        background: #fff;
    }
    .content{
        /*padding: 0.2rem 0.3rem;*/
    }
    .inputBox{
        padding: 0 .3rem;
    }
    .inputBox+.inputBox{
        margin-top: 0.1rem;
    }
    .inputBox_sub{
        /*height: 1rem;*/
    }
    .INPUT2{
        height: 1rem;
        border-radius: 0;
        font-size: 0.26rem;
    }
    .inputBox_top{
        height: 0.99rem;
        display: flex; justify-content: space-between;
        align-items: center;
    }
    .inputBox_label{
        font-size: .26rem;
        color: #333;
        line-height: .9rem;
    }
    .inputBox_view{
        margin-top: 0.05rem;
    }
    .inputBox_view_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .75rem;

    }
    .inputBox_txt1{
        font-size: .2rem;
        color: #666;
    }
    .inputBox_txt2{
        font-size: .2rem;
        color: #e4811d;
    }
    .inputBox_view_sub{
        margin-top: 0.05rem;
    }
    .inputBox_txt3{
        font-size: .2rem;
        color: #666;
        line-height: 0.8rem;
    }
    .bottom{
        /*margin-top: .75rem;*/
        padding: 0 .35rem;
    }
    .tips{
        background: #fafafa;
        border: 1px solid #eee;
        padding: .1rem .2rem;
        border-radius: .1rem;
        margin: .5rem 0;
    }
    .tips_txt1{
        font-size: .22rem;
        color: #666;
        line-height: .45rem;
    }
    .scan{
        background: url("../static/images/icon/scan_icon.png") no-repeat center center / cover;
    }
    .DIALOG_BTN.active{
        color: #999;
    }
    .content_title{
        background: #fff;
        padding: 0.3rem 0 0.5rem;
        border-bottom: 0.2rem solid #f5f5f5;
    }
    .content_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.7rem;
        text-align: center;
    }
    .content_txt2{
        font-size: 0.4rem;
        color: #203395;
        line-height: 0.5rem;
        text-align: center;
    }

    .INPUT2_scan{
        position: relative;
        /*height: 2rem;*/
    }
    /*.INPUT2_scan:after{

    	width: 0.5rem;
    	height: 0.5rem;

    	content: '';
    	background: url('../static/images/video_icon/icon_scan.png')no-repeat center center / cover;
    }*/
    .inputBox_scan{
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        top: 0.25rem;
        right: 0rem;
        background: url('../static/images/video_icon/icon_scan.png')no-repeat center center / cover;
    }
    .INPUT2_all{
        position: relative;
    }
    .all{
        position: absolute;
        /*width: 1.2rem;*/
        height: 0.3rem;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.3rem;
        border-left: 1px solid #203395;
        top: 0.35rem;
        right: 0;
        padding: 0 .3rem;
    }
    .LONGBTN{
        width: 6.9rem;
    }
</style>
