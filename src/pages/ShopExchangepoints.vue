<template>
    <div id="my" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">兑换CHMC</p>
        </div>
        <div class="Exchangbox">
            <div class="Exchangbox_top">
                <div class="clearfix">
                    <div class="fl exchange_txt1">币种</div>
                    <div class="fr Exchangbox_top_right exchange_txt1"
                         v-text="currency=='CHMC'? '积分':'HALE'"
                    ></div>
                </div>
                <!--兑换比例-->
                <div class="clearfix">
                    <p class="exchange_txt2 fl">CHMC价格</p>
                    <p class="exchange_txt3 fr">≈ ¥ {{detail.chmc}}</p>
                </div>
                <div class="clearfix">
                    <p class="exchange_txt4 fl"
                       v-text="currency=='CHMC'? '积分 | CHMC':'HALE | CHMC'"
                    ></p>
                    <p class="exchange_txt4 fr">1  |  {{detail.rate}}</p>
                </div>
                <!--<p><span></span> <span
                	v-text=
                	>
                	</span>
                	<img
                        src="../static/images/shop/right.png"
                        style="vertical-align: middle">
                </p>-->
                <!--<p><span>当前价格</span> <span>≈ ￥   {{proportion|numFilter}} </span></p>-->
                <!--<p><span>{{currencytwo}}/积分</span> <span>1 | {{proportion|numFilter}}</span></p>-->
            </div>
            <div>
                <!--<div>
                    <!--<div>{{currency}}</div>
                    <div>积分</div>
                </div>-->
                <div>
                    <div>
                        {{currency=='CHMC'?'积分':'HALE'}}余额： <span class="bodll">{{detail.amount}}</span></div>
                    <div class="yebodd" @click="alldh">全部兑换</div>
                </div>
                <div>
                    <div><input v-on:input="search" type="number" @keydown="handleInput2" v-model="toexchange" placeholder="请输入兑换数量"
                                class="hdahoahdo"
                                style="height: 1rem;border: 1px solid #203395;background: none;width:3rem;"
                    >
                    </div>
                    <div>=</div>
                    <div class="positior" >
                        <input v-model="sfxstwo" type="number" placeholder="可获得CHMC数量"
                               readonly="readonly"
                               style="height: 1rem;border:1px solid #ccc;background: none;width:3rem;"
                        ><span
                            v-show="sfxs" class="postioa">{{getintegral|tofixed4}}</span></div>
                </div>
                <div style="border-bottom: 1px solid #eee;">
                    <div style="font-size: 0.26rem;">
                        手续费： <span class="bodll">{{amountFee | tofixed4}} CHMC</span>
                    </div>

                </div>
                <div>
                    <div style="line-height: 0.45rem;padding-top: 0.25rem;position: relative;height: 0.9rem;width: 100%;font-size: 0.26rem;">
                        实际到账：<div class="receive_money">流通CHMC {{amount1| tofixed4}}</div>
                        <div class="receive_money1">封藏CHMC {{amount2| tofixed4}}</div>
                    </div>

                </div>
            </div>

            <!--<select style="width: 2rem" class="select_list">-->
            <!--<option v-for="item in creditsExchangeGear">{{item}}</option>-->
            <!--</select><br>-->

            <div @click="exchangepoints" >
                确认兑换

            </div>
            <div>
                <p>提示：</p>
                <p> 1.每笔最低兑换{{detail.min}}积分,且为{{detail.exchangeN}}的整数倍；</p>
<!--                <p v-if="mingetintegral!=null"> 2.每笔兑换收取{{detail.exchangeFee*100}}%CHMC手续费；</p>-->
                <p>2.每笔兑换有一定数量CHMC作为封藏CHMC；</p>
            </div>

        </div>
        <!--2.最小兑换额度为：100CHMC，上限为10000CHMC。-->

        <!--切换币种弹窗-->
        <nlayer
                :maskCancel="true"
                maskBackgroundColor="rgba(0,0,0,0.4)"
                :visible="actionSheetVisible"
                @close="actionSheetClosed"
                class="ANIMATITE_BOTTOM_TO_TOP"
                width="100%"
        >
            <div class="actionSheet">
                <div class="actionSheet_container">
                    <div class="actionSheet_title clearfix">
                        <div class="actionSheet_txt1 actionSheet_title_txt1">切换币种</div>
                        <div class="actionSheet_close" @click="actionSheetClosed"></div>
                    </div>
                    <div class="actionSheet_subTitle_list">
                        <div class="actionSheet_subTitle clearfix"
                             @click="selehale('CHMC')"
                             :class="currency=='CHMC'? 'active':''"
                        >
                            <div class="actionSheet_txt1 fl">积分</div>
                            <div
                                    class="actionSheet_select fr"
                            ></div>
                        </div>
                        <div class="actionSheet_subTitle clearfix"
                             @click="selehale('HALE')"
                             :class="currency=='HALE'? 'active':''"
                        >
                            <div class="actionSheet_txt1 fl">HALE</div>
                            <div class="actionSheet_select fr"
                            >

                            </div>
                        </div>
                    </div>

                    <!--<div class="actionSheet_list clearfix">
                    	<div class="actionSheet_item"
                    		:class="[vipNum == 'vip1' ? 'active' : '']"
                    		@click="swtichVip('vip1')"
                    	>
                    		<div class="actionSheet_item_icon actionSheet_item_icon1"></div>
                    		<div class="actionSheet_txt3" style="margin-top: 0.15rem;"></div>
                    	</div>
                    	<div class="actionSheet_item"
                    		:class="[vipNum == 'vip2' ? 'active' : '']"
                    		@click="swtichVip('vip2')"
                    	>
                    		<div class="actionSheet_item_icon actionSheet_item_icon2"></div>
                    		<div class="actionSheet_txt3" style="margin-top: 0.15rem;"></div>
                    	</div>
                    	<div class="actionSheet_item"
                    		:class="[vipNum == 'vip3' ? 'active' : '']"
                    		@click="swtichVip('vip3')"
                    	>
                    		<div class="actionSheet_item_icon actionSheet_item_icon3"></div>
                    		<div class="actionSheet_txt3" style="margin-top: 0.1rem;"></div>
                    	</div>
                        <!--<div class="actionSheet_item"
                            v-for="(item, index) in buttons"
                             @click="selectActionSheet(index)"
                        >
                            <div class="actionSheet_item_icon"
                                :style="{'background':`url(${item.icon}) no-repeat center center / cover`}"
                            ></div>
                            <p class="actionSheet_item_txt1">{{item.title}}</p>
                        </div>


                    </div>-->
                </div>
                <div class="actionSheet_wrapper">
                    <div class="actionSheet_button"
                         @click="actionSheetClosed"
                    >确认</div>
                </div>

            </div>
        </nlayer>

        <!--<div class="type_mb" v-if="disappearview">
            <div @click="disappear"></div>
            <div class="type_wrapper">
                <div class="exchange_txt1">切换币种</div>
                <div @click="seleusdt">
                    <div><img src="../static/images/shop/USDT.png"><span>USDT</span></div>
                    <div class="quan" v-show="!Pickthat"></div>
                    <img src="../static/images/shop/Success.png" v-show="Pickthat">
                </div>
                <div @click="selehale">
                    <div><img src="../static/images/shop/HALE.png"><span>HALE</span></div>
                    <div class="quan" v-show="Pickthat"></div>
                    <img src="../static/images/shop/Success.png" v-show="!Pickthat">
                </div>

            </div>
            <div @click="okcurrency">确认</div>
        </div>-->

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
                            :class="[isCheckPassword ? 'active' : '']"
                            @click='checkPassword'
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>

        <!--消息提示-->
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
                            @click='toSetDealPassword'
                    >{{$t('layerdate.layerdate_set')}}</div>
                </div>
            </div>
        </nlayer>


        <div class="mb" v-show="Paymentwindow">
            <div>
                <p>交易密码</p>
                <p><input type="password" v-model="Paymentpassword" style="background: #fff;border: 1px solid #ccc;"></p>
                <p><span @click="Cancellationpayment">取消</span><span @click="Okonpayment">确认</span></p>
            </div>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue'
    import Nlayer from '@/components/Nlayer'
    import {InfiniteScroll} from 'mint-ui'
    import {Toast} from 'mint-ui'
    import { mapGetters, mapActions } from 'vuex'

    Vue.use(InfiniteScroll)
    // import axios from 'axios'
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import userPhoto from '@/static/images/shop/mrbj.png'

    export default {
        components: {
            Nlayer
        },
        data() {

            return {

                tabIndex: '',//判断当前在那个入口进入
                tabIndextwo: this.$route.params.type,
                balance: '',//余额
                proportion: '',//兑换积分比例
                currency: this.$route.query.currencyName,//币种
                popup: '',//弹窗状态
                toexchange: '',//要兑换的币数
                getintegral: '',//兑换得到的积分
                sfxs: false,//判断
                sfxstwo: '',//判断
                Pickthat: true,//选币判断
                disappearview: false,
                currencytwo: 'USDT',//币种
                currencytype: this.$route.params.type,
                Paymentwindow: false,
                Paymentpassword: '',
                mingetintegral:null,
                maxgetintegral:null,
                actionSheetVisible: false,
                detail:{},
                passwordDigVisible: false,
                tipsVisible: false,
                isCheckPassword:false,
                amount1:0,
                amount2:0,
                amountstore1:"",
                amountstore2:"",
                amountFee:0,
                password:'',
                tips:'',
                noPasswordDigVisible:false
                // creditsExchangeGear:[]
            }
        },
        created: function () {
            var that = this
            if (that.currency == 'HALE') {
                that.Pickthat = false
                that.currencytwo = 'HALE'
                that.currencytype = 1
            } else {
                that.Pickthat = true
                that.currencytwo = 'USDT'
                that.currencytype = 2
            }
            this.tabIndex = localStorage.getItem('tabIndex')
            jsonAjax.get(urlUtil.getApiUrl('getuseramount'), {
                userId: that.$store.state.userinfo.userId,
                currency: that.tabIndextwo
            }, function (result) {
                that.balance = result.resultData.amount
                that.proportion = result.resultData.price

            })
            jsonAjax.get(urlUtil.getApiUrl('getexchangenum'), {}, function (result) {
                that.mingetintegral = result.resultData.minExchangeNum
                that.maxgetintegral = result.resultData.maxExchangeNum
                // that.creditsExchangeGear = eval("(" +  result.result.creditsExchangeGear  + ")" )

            })

            // 请求参数

        },
        mounted(){
            // 判断是否有数据
//          this.isSidebars()
            this.isLogin()

        },
        filters: {
            numFilter(value) {
                let realVal = ''
                if (value) {
                    // 截取当前数据到小数点后2位
                    let tempVal = parseFloat(value).toFixed(1)
                    realVal = tempVal.substring(0, tempVal.length - 1)
                } else {
                    realVal = ''
                }
                return realVal
            }
        },
        computed: {
            userinfo() {
                return this.getUserinfo()
            },
            customerToken() {
                return this.userinfo.customerToken
            }
            ,
            userId() {
                return this.userinfo.customerId
            }
        },
        methods: {
            ...mapActions(['setUserNoticeState', 'setNeedUpdate','setUserinfo','setUsers','removeUserinfo','setSidebars']),
            ...mapGetters(['getUserinfo', 'getSystemNotice', 'getTransferNotice', 'getNeedUpdate', 'getUpdateDetail','getSidebars']),
            handleInput2:function(e){
                e.target.value = (e.target.value.match(/^\d*(\.?\d{0,7})/g)[0]) || null
            },
            alldh: function () {
                if (this.detail.amount>0){
                    // console.log(this.detail.amount)
                    // console.log(this.detail.exchangeN)
                    // console.log(this.detail.amount/this.detail.exchangeN)
                    // console.log(parseInt(this.detail.amount/this.detail.exchangeN)*this.detail.exchangeN)
//              	return
                    //全部提现
                    // 检测是否是整数倍
                    const newAmount = parseInt(this.detail.amount/this.detail.exchangeN)*this.detail.exchangeN
//                  if( this.detail.amount % this.detail.exchangeN != 0 ){
//                  	// 不是整数倍
//                  	this.toexchange = parseInt(this.detail.amount/this.detail.exchangeN)*this.detail.exchangeN
////                  	this.detail.amount =
//                  }
//                  return
                    this.getintegral = newAmount * this.detail.rate
                    this.amountFee = this.getintegral * this.detail.exchangeFee
                    this.amount1 = (this.getintegral-this.amountFee)*this.amountstore
                    this.amount2 = (this.getintegral-this.amountFee)*this.amountstore1
                    if (this.getintegral > 0) {
                        this.toexchange = parseInt(this.detail.amount/this.detail.exchangeN)*this.detail.exchangeN
                        this.sfxstwo = this.getintegral
                        this.sfxs = true
                        Toast('操作成功')
                    } else {
                        this.toexchange = ''
                        this.sfxstwo = ''
                        this.sfxs = false
                        Toast('余额不足')
                    }
                }else {
                    Toast('余额不足')
                }

            },
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1)
            },
            search: function () {
                //输入时计算
                // 输入时计算
//              if( nowValue == ''){
//                  msg = this.haleLockTip
//              } else if ( nowValue < min ){
//                  msg = this.haleLockTip1
//              } else if ( nowValue > max ){
//                  msg = this.haleLockTip2
//              } else if ( nowValue % sale != 0 ){
//
//              }
                console.log(Number(this.toexchange))
                console.log(this.detail.exchangeN)
                if( Number(this.toexchange) % this.detail.exchangeN != 0 ){
                    this.showTips('不是'+this.detail.exchangeN+'整数倍')
//              	return
                }
                if (Number(this.toexchange) > Number(this.detail.amount)) {
                    this.toexchange = this.detail.amount
                    this.getintegral = this.toexchange * this.detail.rate
                    this.amountFee = this.getintegral * this.detail.exchangeFee
                    this.amount1 = (this.getintegral-this.amountFee)*this.amountstore
                    this.amount2 = (this.getintegral-this.amountFee)*this.amountstore1
                    Toast('已是最大余额')
                } else {
                    this.getintegral = this.toexchange * this.detail.rate
                    this.amountFee = this.getintegral * this.detail.exchangeFee
                    this.amount1 = (this.getintegral-this.amountFee)*this.amountstore
                    this.amount2 = (this.getintegral-this.amountFee)*this.amountstore1
                    if (this.getintegral > 0) {
                        this.sfxstwo = this.getintegral
                        this.sfxs = true
                    } else {
                        this.toexchange = ''
                        this.sfxstwo = ''
                        this.sfxs = false
                    }
                }
            },
            seleusdt: function () {
                this.Pickthat = true
                this.currencytwo = 'USDT'//币种
            },
            selehale: function (currency) {
//          	console.log(event)
                // 选择之后
//          	const { currency } = event.target.dataset
                this.currency = currency
                // 请求数据
                if( this.currency == 'CHMC'){
                    this.getExchangeData('CREDITS')
                }else{
                    this.getExchangeData(this.currency)
                }
//          	this.getExchangeData(currency)
//              this.Pickthat = false
//              this.currencytwo = 'HALE'//币种
            },
            okcurrency: function () {
                var that = this
                jsonAjax.get(urlUtil.getApiUrl('getuseramount'), {
                    userId: that.$store.state.userinfo.userId,
                    currency: that.currencytwo
                }, function (result) {
                    that.balance = result.resultData.amount
                    that.proportion = result.resultData.price
                })
                this.balance = this.balancetwo//余额
                this.proportion = this.proportiontwo//兑换积分比例
                this.currency = this.currencytwo//币种
                this.toexchange = ''//要兑换的币数
                this.getintegral = ''//兑换得到的积分
                if (this.currency == 'HALE') {
                    that.currencytype = 1
                } else {
                    that.currencytype = 2
                }
                this.disappear()
            },
            // 点击确认兑换按钮
            exchangepoints: function () {

                var that = this
                if(Number(that.detail.min)>that.toexchange){
                    Toast('最小兑换额'+that.detail.min)
                    return
                }
                if(that.toexchange>Number(that.detail.max)){
                    console.log(that.getintegral,that.detail.max)
                    Toast('54321·额'+that.max)
                    return
                }
                if( Number(this.toexchange) % this.detail.exchangeN != 0 ){
                    this.showTips('不是'+this.detail.exchangeN+'整数倍')
                    return
                }
                // 检测是否设置过交易密码
                if( !JSON.parse(localStorage.getItem('transPass')) ){
                    // 无交易密码
                    this.openNoPasswordDig()
                    return
                }
                // 检测是否是10的整数倍
                if (this.toexchange !== '') {
                    // 打开密码弹窗
                    that.openPasswordDig()
//                  that.Paymentwindow = true
                } else {
                    Toast('请您输入数量')
                }

            },
            Cancellationpayment: function () {
                var that = this
                that.Paymentwindow = false
                that.Paymentpassword=""
            },
            Okonpayment: function () {
                var that = this
                var userinfo=JSON.parse(localStorage.getItem("userinfo"))
                if(userinfo.transPwd){

                    if (that.Paymentpassword !== '') {
                        that.Paymentwindow = false
                        var data = {
                            "amount": that.toexchange,
                            "currency": that.currency,
                            "transPass": that.Paymentpassword,
                            "type": that.currencytype,
                            "userId": that.$store.state.userinfo.userId
                        }

                        jsonAjax.post(urlUtil.getApiUrl('userexchangecredits'), data, function (result) {
                            Toast(result.message)
                            that.Paymentpassword= ''
                            jsonAjax.get(urlUtil.getApiUrl('getuseramount'), {
                                userId: that.$store.state.userinfo.userId,
                                currency: that.currencytwo
                            }, function (result) {
                                that.balance = result.resultData.amount
                                that.proportion = result.resultData.price
                                that.toexchange = ''
                                that.getintegral = ''
                                that.sfxstwo = ''

                            })
                        })
                    } else {
                        Toast('密码不可为空')
                    }
                }else {
                    Toast('未设置交易密码')
                }



            },
            // 检测用户是否登录
            isLogin(){
                if( this.userinfo ){
                    //
                    if( this.currency == 'CHMC'){
                        this.getExchangeData('CREDITS')
                    }else{
                        this.getExchangeData(this.currency)
                    }
                    // 请求页面数据

                } else {
                    // 跳转到登录页面
                    this.$router.replace({
                        path: '/login'
                    })

                }
            },
            // 请求兑换页面的数据
            getExchangeData(currency){
                // currency_exchange_detail
                var that= this
                jsonAjax.post(urlUtil.getApiUrl("currency_exchange_detail"), {
                    userId:that.userId,
                    currency:currency
                }, function (result) {
                    console.log(result)
//              	return
                    if (result.returnCode) {
                        that.detail = result.resultData
                        that.amountstore = result.resultData.circulationRate
                        that.amountstore1 = 1 - result.resultData.circulationRate

//              		that.amount = result.result.vip1Number
                    } else {
                        that.showTips(result.message)
                        // 跳转到我的页面
                        setTimeout(() => {
                            that.$router.replace({
                                path: '/login'
                            })
                        }, 1000)
                    }
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
            // 检测交易密码是否正确
            checkPassword(){
                var that = this
                if(!this.isCheckPassword){
                    this.isCheckPassword = true
                    // 检测交易密码是否正确
                    // 请求是否有交易密码接口  /app/users/isCorrectTransPass transPass_isTrue
                    jsonAjax.post(urlUtil.getApiUrl("transPass_isTrue"), {
                        userId:this.userId,
                        transPass:that.password
                    }, function (result) {
                        console.log(result)
//	                	return
                        if( result.returnCode == 1 ){
                            that.showTips(result.message)
                            // 去请求兑换的接口
                            that.sureExchange()
//	                		that.password = ''
                            // 关闭弹窗
                            that.closePasswordDig()
                        }else{
                            console.log('12345')
                            that.showTips(result.message)
                            // 清空密码
                            that.password = ''
                            that.isCheckPassword = false
                        }

                    })

                }

            },
            // 请求兑换
            sureExchange(){
                // 请求兑换接口 exchange_chmc
                this.$http.post('app/wallet/userWallet/exchangeToChmc', {
                    userId: this.userId,
                    amount: parseInt(this.toexchange),
                    transPass: this.password,
                    type: this.currency == "HALE" ? 1 : 2,
                    exchangeNum: this.getintegral,
                    customerToken: this.customerToken
                }).then((res) => {
                    console.log(res)
                    this.showTips(res.message)
//          	return
//              const data = res.resultVo
                    this.isCheckPassword = false
//              this.closeAll()
                    this.inputAmount = ''

                    if(res.success){
                        setTimeout(() => {
                            // 成功之后去兑换详情页
                            this.$push({
                                path: '/exchangeDealDetail',
                                query: {
                                    id: res.result,
                                    currencyName: this.currency,
                                    dealResState: 1,
                                    dealName: 1
                                }
                            })
//                      this.$back()
                        }, 2000)
                    }


                })
                return
                var that = this
                jsonAjax.post(urlUtil.getApiUrl("exchange_chmc"), {
                    userId:this.userId,
                    amount:100,
                    transPass:'88888888',
                    type:1,
                    exchangeNum:200
                }, function (result) {
                    console.log(result)
                    return
//	                	return
                    if( result.returnCode == 1 ){
                        that.showTips(result.message)
                        // 去请求兑换的接口
                        that.sureExchange()
//	                		that.password = ''
                        // 关闭弹窗
                        that.closePasswordDig()
                    }else{
                        console.log('12345')
                        that.showTips(result.message)
                        // 清空密码
                        that.password = ''
                        that.isCheckPassword = false
                    }

                })
            },
            disappear: function () {
                this.disappearview = false
            },
            // 开启选择币种弹窗   @click="showview"
            showview: function () {
//          this.disappearview = true
                this.showActionSheet()
            },
            // 去设置交易密码
            toSetDealPassword(){
                this.$push({
                    path: '/Transaction'
                })
            },
            // 监听actionSheet关闭
            actionSheetClosed(){
                this.actionSheetVisible = false
            },
            // 打开actionSheet
            showActionSheet(){
                this.actionSheetVisible = true
            },
            // 关闭actionSheet
            closeActionSheet(){
                this.actionSheetVisible = false
            },
            // 打开消息提示
            showTips(msg){
                console.log(msg)
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
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
    .mb {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
    }


    .mb > div {
        color: #333;
        width: 5rem;
        background: #eee;
        height: 2.5rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -1.25rem;
        margin-left: -2.5rem;
        border-radius: .1rem;
        text-align: center;
    }

    .mb > div > p:nth-of-type(1) {
        line-height: .7rem;
        font-weight: bold;
    }

    .mb > div > p:nth-of-type(2) {
        line-height: 1rem;
        border-bottom: 1px solid #CDCED2;
    }

    .mb > div > p:nth-of-type(3) span {
        display: inline-block;
        width: 50%;
        height: .8rem;
        line-height: .8rem;
        color: #e4811d;
    }

    .mb > div > p:nth-of-type(3) span:nth-of-type(1) {
        border-right: 1px solid #CDCED2;
    }
    .select_list {
        /*border: solid 2px #96cffd;*/
        font-size: 30px;
        padding-left: 20px;
        /*很关键：将默认的select选择框样式清除*/
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        /*在选择框的最右侧中间显示小箭头图片*/
        background-position-x: 330px;
        /*border: 1px solid #333;*/
        border: none;
        border-radius: 0.15rem;
        background: #f5f5f5;
    }
    option:hover{
        background: #E4811D!important;
    }

    .content_box {
        background: white;
        height: 100%;
        z-index: 2;
    }

    .Exchangbox {
        color: #333;
        margin-top: 1rem;
    }

    .Exchangbox > div:nth-of-type(1) {
        border-bottom: .2rem solid #f5f5f5;
        height: 2.4rem;
        background: white;
    }

    .Exchangbox > div:nth-of-type(1) img {
        width: 20%;
        margin-top: -0.08rem;
    }

    .Exchangbox div:nth-of-type(1) p {
        /*padding: 10px 20px;*/
        display: flex;
        justify-content: space-between;
        background: white;
    }

    .Exchangbox > div:nth-of-type(1) p span:nth-of-type(2) {
        text-align: right;
    }

    .Exchangbox > div:nth-of-type(1) p:nth-of-type(1) span:nth-of-type(2) {
        font-weight: bold;
    }

    .Exchangbox > div:nth-of-type(1) p:nth-of-type(2) {
        height: .5rem;
    }

    .Exchangbox > div:nth-of-type(1) p:nth-of-type(2) span:nth-of-type(1) {
        font-size: .32rem;
    }

    .Exchangbox > div:nth-of-type(1) p:nth-of-type(3) {
    }

    .Exchangbox > div:nth-of-type(1) p:nth-of-type(3) span:nth-of-type(1) {
        font-size: .24rem;
    }

    .Exchangbox > div:nth-of-type(2) {
        line-height: 1rem;
        /*padding: 10px 20px;*/
        padding: 0 0.3rem;
    }

    .Exchangbox > div:nth-of-type(2) > div {
        display: flex;
        justify-content: space-between;

    }

    .Exchangbox > div:nth-of-type(2) > div:nth-of-type(1) > div {
        /*width: 50%;*/
        /*text-align: center;*/
        /*font-weight: bold;*/
        font-size: 0.26rem;
    }

    .Exchangbox > div:nth-of-type(2) > div:nth-of-type(2) input {
        width: 100%;
        background: #F5F5F5;
        text-align: center;
        color: #F5F5F5;

    }

    .bodll {
        font-weight: bold;
        color: #203395;
    }

    .yebodd {
        font-weight: bold;
        /*color: #E4811D;*/
        color: #203395;
    }

    .Exchangbox > div:nth-of-type(3) {
        margin-top: 1.5rem;
        margin-left: 0.3rem;
        /*width: 90%;*/
        width: 6.9rem;
        padding: 15px;
        /*border-radius: .1rem;*/
        /*background: #E4811D;*/
        background: #203395;
        color: white;
        text-align: center;
    }

    .hdahoahdo {
        color: #333 !important;
    }

    .Exchangbox > div:nth-of-type(4) {
        margin-top: .6rem;
        margin-left: 0.3rem;
        width: 6.9rem;
        padding: 0.2rem 0.3rem;
        /*border-radius: .1rem;*/
        background: #F5F5F5;
        font-size: 0.22rem;
        margin-bottom: 0.3rem;
        color: #aaa;
        line-height: 0.45rem;
    }

    .positior {
        position: relative;
    }

    .postioa {
        text-align: center;
        display: inline-block;
        width: 2rem;
        height: .8rem;
        line-height: .8rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -1rem;
        margin-top: -.4rem;
    }

    .type_mb {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-top: 1rem;
    }

    /*.type_mb > div:nth-of-type(1) {
        height: 55%;
        width: 100%;
    }

    .type_mb > div:nth-of-type(2) {
        padding: 20px;
        color: #333;
        height: 45%;
        background: white;
    }*/

    .type_mb > div:nth-of-type(2) > div:nth-of-type(1) {
        border-bottom: 1px solid #f5f5f5;
        display: block;
        text-align: center;
        font-size: .32rem;
        font-weight: bold;
        line-height: .4rem;
        height: 1rem;
    }

    .type_mb > div:nth-of-type(2) > div {
        border-bottom: 1px solid #f5f5f5;
        line-height: 1.2rem;
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
    }

    .type_mb > div:nth-of-type(2) > div span {
        margin-left: .2rem;
    }

    .type_mb > div:nth-of-type(2) > div > div > img {
        margin-top: .2rem;
        width: .7rem;
        height: .7rem;
        display: flex;
    }

    .type_mb > div:nth-of-type(2) > div > div {
        display: flex;

    }

    .type_mb > div:nth-of-type(2) > div > img {
        margin-top: .3rem;
        width: .5rem;
        height: .5rem;
    }

    .quan {
        border: 1px solid #666666;
        border-radius: 50%;
        width: .5rem;
        height: .5rem;
        margin-top: .3rem;
    }

    .type_mb > div:nth-of-type(3) {
        position: absolute;
        bottom: .5rem;
        left: 0;
        width: 100%;
        line-height: 1rem;
        height: 1rem;
        border-top: .4rem solid #f5f5f5;
        color: #333;
        text-align: center;
    }

    audio, canvas, video, img {
        display: inline-block;
    }


    .exchange_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 1rem;
    }
    .exchange_txt2{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.35rem;
    }
    .exchange_txt3{
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.35rem;
    }
    .exchange_txt4{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.35rem;
    }
    .type_wrapper{
        background: #fff;

    }


    /*弹窗样式*/
    .actionSheet{
        background: #fff;
    }
    .actionSheet_container{
        width: 100%;
        overflow-y: hidden;
        overflow-x: auto;
        overflow-scrolling: touch;
        border-bottom:0.2rem solid #f5f5f5;
    }
    .actionSheet_list{
        display: flex;
        padding: 0.6rem 0.3rem;
    }
    .actionSheet_item{
        display: flex;
        padding:0.25rem;
        flex-direction: column;
        align-items: center;
    }
    .actionSheet_item.active{
        border: 1px solid #203395;
    }
    /*.actionSheet_item_icon{
        width: 0.8rem;
        height: 0.8rem;
        background: #000;
        border-radius: 100%;
    }*/
    .actionSheet_item_txt1{
        font-size: 0.24rem;
        color: #333; line-height: 0.4rem;
        margin-top: 0.2rem;
        white-space: nowrap;

    }
    .actionSheet_button{
        font-size: 0.3rem;
        color: #333;
        line-height: 1rem;
        text-align: center;
        font-weight: bold;
        /*border-top: 1px solid #f3f3f3;
       background: #fff;
       color: #fff;

        width: 2.5rem;
        height: 1rem;*/
    }
    .actionSheet_title_txt1{
        font-weight: bold;
    }
    .actionSheet_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 1rem;

    }
    .actionSheet_title{
        text-align: center;
        position: relative;
        height: 1rem;
        width: 100%;
        border-bottom: 1px solid #EEEEEE;
    }
    .actionSheet_close{
        position: absolute;
        right: 0.3rem;
        top: 0.35rem;
        background: url('../static/images/video_icon/icon_close.png')no-repeat center center / cover;
        width: 0.3rem;
        height: 0.3rem;
    }
    .actionSheet_subTitle_list{
        padding: 0 0.3rem;
    }
    .actionSheet_subTitle{
        /*padding: 0 0.3rem;*/
        border-bottom:1px solid #F5F5F5;
        /*position: relative;*/
        width: 100%;
        height: 1rem;
    }
    .actionSheet_subTitle.active
    .actionSheet_txt2{
        font-size: 0.26rem;
        color: #203395;
        line-height: 1rem;
    }
    .actionSheet_item{
        width: 2.1rem;
        /*height: 1.2rem;*/
        border: 1px solid #ccc;
    }
    .actionSheet_item+.actionSheet_item{
        margin-left: 0.3rem;
    }
    .actionSheet_item_icon{
        height: 0.8rem;
    }
    .actionSheet_item_icon1{
        width: 0.67rem;
        height: 0.17rem;
        background: url('../static/images/video_icon/my_vip1.png')no-repeat center center / cover;
    }
    .actionSheet_item_icon2{
        width: 0.7rem;
        height: 0.17rem;
        background: url('../static/images/video_icon/my_vip2.png')no-repeat center center / cover;
    }
    .actionSheet_item_icon3{
        width: 0.68rem;
        height: 0.22rem;
        background: url('../static/images/video_icon/my_vip3.png')no-repeat center center / cover;
    }
    .actionSheet_wrapper{
        padding-left:0.3rem;
    }

    .actionSheet_select{
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 100%;
        border: 1px solid #ccc;
        margin-top: 0.35rem;
        position: relative;
    }
    .actionSheet_subTitle.active .actionSheet_select:after{
        display: block;
    }
    .actionSheet_select:after{
        border: 1px solid #203395;
        position: absolute;
        content: '';
        width: 0.15rem;
        height: 0.15rem;
        top: 50%;
        transform: translateY(-50%);
        /*left: 50%;*/
        /*transform: translateX(-50%);*/
        left: 0.03rem;
        /*right: 0.02rem;*/
        background: #203395;
        border-radius: 100%;
        display: none;
    }
    /*.active:after{

    }*/

    .Exchangbox_top{
        padding: 0 0.3rem;
    }
    .Exchangbox_top_right{
        position: relative;
    }
    /*.Exchangbox_top_right:after{
    	position: absolute;
    	width: 0.3rem;
    	height: 0.3rem;
    	content: '';
    	top: 0.35rem;
    	right: 0;
    	background: url(../static/images/video_icon/icon_right.png)no-repeat center center / cover;
    }*/


    .receive_money{
        position: absolute;
        top: 0.25rem;
        left: 1.4rem;
    }
    .receive_money1{
        position: absolute;
        top: 0.7rem;
        left: 1.4rem;
    }

</style>
