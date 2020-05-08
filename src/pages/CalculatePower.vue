<template>
    <div class="page">
        <div class="PRODUCT_FRONT" v-if="!opened">
            <div class="PRODUCT_POSTER">
                <div class="PRODUCT_POSTER_WRAPPER">
                    <img src="../static/images/bg/halePower_icon.png">
                </div>
            </div>
            <div class="PRODUCT_FRONT_BTN LONGBTN" @click="openService">{{$t('halePower.halePower_openPower')}}</div>
        </div>
        <div class="PRODUCT_REVERSESIDE" v-if="opened">
            <div class="PRODUCT_TOP">
                <div class="power_top">
                    <div class="power_left tcenter">
                        <p class="PRODUCT_TOP_TXT1">{{$t('halePower.halePower_powerBalance')}}</p>
                        <p class="PRODUCT_TOP_TXT2">{{(detail.amount || '----') | tofixed4}}</p>
                        <div class="power_left_metas">
                            <div class="power_left_meta">
                                <p class="PRODUCT_TOP_TXT3">{{$t('halePower.halePower_cumulativeInvestment')}}</p>
                                <p class="PRODUCT_TOP_TXT3">{{(detail.cumulativeInvestmentNum || '----') | tofixed4}}</p>
                            </div>
                            <div class="power_left_meta">
                                <p class="PRODUCT_TOP_TXT3">{{$t('halePower.halePower_cumulativeExchange')}}</p>
                                <p class="PRODUCT_TOP_TXT3">{{(detail.exchangeNum || '----') | tofixed4}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="PRODUCT_METAS tcenter">
                    <div class="PRODUCT_META">
                        <p class="PRODUCT_META_TXT1">{{$t('halePower.halePower_todayIncome')}}</p>
                        <p class="PRODUCT_META_TXT2">{{(detail.allAmount || '----') | tofixed4}}</p>
                    </div>
                    <div class="PRODUCT_META">
                        <p class="PRODUCT_META_TXT1">{{$t('halePower.halePower_todayAllIncome')}}</p>
                        <p class="PRODUCT_META_TXT2">{{(detail.investAmount || '----') | tofixed4}}</p>
                    </div>
                </div>
                <div class="power_btns">
                    <div class="PRODUCT_BTN BUTTON_SHADOW BUTTON_BG tcenter radius-half" @click="toCurrencyExchange">{{$t('halePower.halePower_powerExchange')}}</div>
                    <div class="PRODUCT_BTN BUTTON_SHADOW BUTTON_BG tcenter radius-half" @click="openServiceDig">{{$t('halePower.halePower_todayInvestment')}}</div>
                </div>
            </div>
            <div class="PRODUCT_SUB">
                <div class="power_tabs">
                    <router-link replace tag="div" class="power_tab" to="/product/calculatePower/powerTabInvest">{{$t('halePower.halePower_investmentPublic')}}</router-link>
                    <router-link replace tag="div" class="power_tab" to="/product/calculatePower/powerTabExchange">{{$t('halePower.halePower_exchangePublic')}}</router-link>
                    <router-link replace v-if="showAwardRecord" tag="div" class="power_tab" to="/product/calculatePower/powerTabAward">{{$t('halePower.halePower_award')}}</router-link>
                </div>
                <div class="power_router">
                    <div class="power_router_wrapper">
                        <router-view ref="routerView"></router-view>
                    </div>
                </div>

            </div>
        </div>




        <nlayer
                :visible="serviceDigVisible"
                @close="serviceDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL"
                width="85%"
                :zIndex="998"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    <div>
                        {{$t('halePower.halePower_powerInvestment')}}
                    </div>
                </div>
                <div class='DIALOG_CONTENT'>
                    <div
                            class="product_select"
                            @click="openPicker"
                    >{{selectedLockGear.title}}</div>
                    <input type="text"
                           class="product_input"
                           :placeholder="$t('halePower.halePower_enterInvestmentNumber')"
                           v-model="productAmount"
                    >
                    <div class="product_tips">
                        <p class="product_tips_txt1">{{$t('halePower.halePower_tips')}}：</p>
                        <p class="product_tips_txt1">{{$t('halePower.halePower_tipsOne')}}</p>
                        <p class="product_tips_txt1">{{$t('halePower.halePower_tipsTwo')}}{{multiple}}{{$t('halePower.halePower_tipsThree')}}</p>
                        <p class="product_tips_txt1">{{$t('halePower.halePower_tipsFour')}}{{maxQuota}}USDT。</p>
                    </div>
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='vlidateLockData'
                    ><div class="lockBtn BUTTON_BG BUTTON_SHADOW">{{$t('halePower.halePower_investment')}}</div></div>
                </div>
            </div>
        </nlayer>


        <nradio
                :list="lockGear"
                :defaultActive="0"
                :visible="pickerVisible"
                @close="pickerClose"
                @select="pickerSelect"
        >
            <div class="picker_title" slot="header">
                <p class="picker_title_txt1">{{$t('haleLock.haleLock_selectGear')}}</p>
            </div>
            <div class="picker_footer" slot="footer">
                <div class="picker_btn"
                     @click="pickerConfirm"
                >{{$t('haleLock.haleLock_btnOk')}}</div>
            </div>
        </nradio>

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
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    import Nradio from 'components/Nradio'
    import Nlayer from 'components/Nlayer'

    export default {
        name: "CalculatePower",
        components:{
            Nradio,
            Nlayer,
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            opened(){
                if( this.userinfo && this.userinfo.investType ){
                    return true
                }

                return false
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            haleLocks(){
                return this.$t('halePower.halePower_lockPositionNoOpen')
            },
            halePublics(){
                return this.$t('halePower.halePower_publicPlatoonNoOpen')
            },
            haleLock_publics(){
                return this.$t('halePower.halePower_lockPublic')
            },
            firstGear(){
                return this.$t('haleLock.haleLock_oneGear')
            },
            secondGear(){
                return this.$t('haleLock.haleLock_twoGear')
            },
            threesGear(){
                return this.$t('haleLock.haleLock_threeGear')
            },
            halePowerTip(){
                return this.$t('halePower.halePower_enterInvestmentNumber')
            },
            halePowerTip1(){
                return this.$t('haleLock.haleLock_position1')
            },
            halePowerTip2(){
                return this.$t('haleLock.haleLock_position2')
            },
            halePowerTip3(){
                return this.$t('haleLock.haleLock_position3')
            },
            halePowerTip4(){
                return this.$t('haleLock.haleLock_position4')
            },

        },
        data(){
            return {
                lockGear: [],
                selectedLockGear: {},
                multiple: '',
                maxQuota: '',
                detail: {},
                password: '',
                productAmount: '',
                serviceDigVisible: false,
                passwordDigVisible: false,
                noPasswordDigVisible: false,
                pickerVisible: false,
                tips: '',
                tipsVisible: false,
                showAwardRecord: false,
                isCheckPassword:false
            }
        },
        mounted(){
            this.init()
        },
        methods: {
            ...mapActions(['setUserinfo']),
            ...mapGetters(['getUserinfo']),
            init(){
                if( this.userinfo ){
                    this.getHaleLockGear()
                    this.getDetail()
                    this.isShowAwardRecord()
                }
            },
            // 是否显示奖励记录
            isShowAwardRecord(){
                this.$http.get('js/hlocks/findCalculationPower', {
                    userId: this.userId
                }).then((res) => {
                    const result = res.resultVo
                    if( result.success ){
                    //    判断当前用户是否开启奖励记录
                        if( result.result.switchDirectPush == '1' || result.result.directPushNum == '1' ){
                            this.showAwardRecord = true
                        }else{
                            this.showAwardRecord = false
                        }
                    }
                })
            },
            // 获取详情
            getDetail(){
                this.$http.get('js/hlocks/findCalculationPower', {
                    userId: this.userId
                }).then((res) => {
                    const result = res.resultVo
                    if( result.success ){
                        this.detail = result.result
                    }
                    console.log(result.result)
                })
            },
            // 开启服务 社区
            openService(){
                if( !this.userinfo ){
                    this.showTips(this.loginTip)
                } else if( this.userinfo && !this.userinfo.lockPosition && !this.userinfo.publicPlatoon){
                    this.showTips(this.haleLock_publics)
                } else if( this.userinfo && !this.userinfo.lockPosition ){
                    this.showTips(this.haleLocks)
                } else if( this.userinfo && !this.userinfo.publicPlatoon){
                    this.showTips(this.halePublics)
                } else if( this.userinfo && !this.userinfo.investType ){
                    this.openServiceDig()
                }
            },
            // 请求档位参数
            getHaleLockGear(){
                this.$http.get('js/hsysSettings/usdtInvestmentGear').then((res) => {
                    const result = res.resultVo

                    if( result.success ){
                        const rData = result.result
                        const data = [{
                            "title": this.firstGear +rData.oneGear,
                            "value": rData.oneGear,
                            "id": 0
                        }, {
                            "title": this.secondGear +rData.twoGear,
                            "value": rData.twoGear,
                            "id": 1
                        }, {
                            "title": this.threesGear +rData.threeGear,
                            "value": rData.threeGear,
                            "id": 2
                        }]

                        this.multiple = rData.multiple
                        this.maxQuota = rData.maxQuota


                        this.lockGear = data
                        this.selectedLockGear = data[0]
                    }
                })
            },
            // 验证格式
            vlidateLockData(){
                const valueArr = this.selectedLockGear.value.split('-')
                const nowValue = this.productAmount
                const sale = this.multiple
                const min = Number(valueArr[0])
                const max = Number(valueArr[1])

                let msg = ''

                if( nowValue == ''){
                    msg = this.halePowerTip
                } else if ( nowValue < min ){
                    msg = this.halePowerTip1
                } else if ( nowValue > max ){
                    msg = this.halePowerTip2
                } else if ( nowValue % sale != 0 ){
                    msg = this.halePowerTip3+ sale + this.halePowerTip4
                }

                if( msg ){
                    this.showTips(msg)
                    return
                }

                if( this.userinfo.transPwd ){
                    // 有交易密码
                    this.openPasswordDig()
                } else {
                    // 无交易密码
                    this.openNoPasswordDig()
                }
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
                            this.postHalePowerInvest()
                            this.password = ''
                        } else {
                            this.isCheckPassword = false
                            this.showTips(res.message)
                        }
                    })
                }

            },
            // 开启算力
            postHalePowerInvest(){
                this.$http.post('js/hlocks/openCalculationPower',{
                    userId: this.userId,
                    transPass: this.password,
                    amount: this.productAmount
                }).then((res) => {
                    this.isCheckPassword = false
                    this.closeAll()
                    const result = res.resultVo

                    if( result.success ){
                        this.refresh()
                    }
                    this.showTips(result.message)

                })
            },
            // 去币兑换
            toCurrencyExchange(){
                this.$push({
                    path: '/currencyExchange',
                    query: {
                        currencyName: '算力'
                    }
                })
            },
            // 开启算力后刷新
            refresh(){
                if( this.opened ){
                    this.getDetail()
                    if( this.$route.name == 'PowerTabInvest' ){
                        this.$refs.routerView.$refs.scrollView.triggerRefresh()
                    }
                } else {
                    // 设置最新的用户信息
                    this.setUserinfo({
                        ...this.userinfo,
                        investType: 1
                    })

                    setTimeout(() => {
                        this.init()
                        if( this.$route.name == 'PowerTabInvest' ){
                            this.$refs.routerView.$refs.scrollView.triggerRefresh()
                        }
                    }, 200)

                }
            },
            // 去设置交易密码
            toSetDealPassword(){
                this.$push({
                    path: '/setPassword'
                })
            },
            // 关闭全部layer
            closeAll(){
                this.closeNoPasswordDig()
                this.closePasswordDig()
                this.closeServiceDig()
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
            // 打开投资弹窗
            openServiceDig(){
                this.serviceDigVisible = true
            },
            // 关闭投资弹窗
            closeServiceDig(){
                this.serviceDigVisible = false
                this.productAmount = ''
            },
            // 监听关闭投资弹窗事件
            serviceDigClose(){
                this.serviceDigVisible = false
                this.productAmount = ''
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
            // 关闭选择档位
            closePicker(){
                this.pickerVisible = false
            },
            // 打开选择档位
            openPicker(){
                this.pickerVisible = true
            },
            // 监听档位关闭事件
            pickerClose(data){
                this.closePicker()
            },
            // 选择档位
            pickerSelect(data){
                this.selectedLockGear = data
            },
            // 确认档位
            pickerConfirm(){
                this.closePicker()
            }
        }
    }
</script>
<style scoped>



    .power_top{
        display: flex;
        padding: .25rem 0 .35rem;
    }
    .power_left{
        flex: 1;
    }
    .power_left_metas{
        display: flex;
        margin-top: 0.3rem;
    }
    .power_left_meta{
        display: flex;
        flex: 1;
        justify-content: center;
    }
    .PRODUCT_META_TXT2{
        color: #333;
    }
    .power_btns{
        padding: .1rem 0 .4rem;
        display: flex; justify-content: space-around;
    }

    .PRODUCT_SUB{
        display: flex;
        flex-direction: column;
    }

    .power_router{
        flex: 1;
        position: relative;
    }
    .power_router_wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .power_tabs{
        display: flex;
        height: 0.9rem;
    }
    .power_tab{
        padding:0 0.35rem;
        font-size: 0.3rem;
        color: #333;
        line-height: 0.9rem;
        position: relative;
    }
    .power_tab.active{
        color: #e4811d;
    }
    .power_tab.active:after{
        display: block;
    }
    .power_tab:after{
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        background: #e4811d;
        border-radius: 0.03rem;
        height: 0.05rem;
        display: none;
    }


    .product_select{
        font-size: .26rem;
        height: 0.7rem;
        border-radius: .1rem;
        border: 1px solid #eee;
        width: 100%;
        box-sizing: border-box;
        padding: 0 .2rem;
        padding-right: 0.6rem;
        color: #333;
        text-align: left;
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 0.2rem;
    }
    .product_input{

        font-size: .26rem;
        height: 0.7rem;
        border-radius: .1rem;
        border: 1px solid #eee;
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0 .2rem;
        color: #333;
        text-align: left;
        position: relative;
    }
    .product_select:after{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        right: 0.2rem;
        top: 50%;
        margin-top: -0.06rem;
        border-width: 0.12rem 0.1rem 0 .1rem;
        border-style: solid;
        border-color: #bbb transparent transparent transparent;
    }
    .product_tips{
        background: #fafafa;
        border: 1px solid #eee;
        padding: .1rem .2rem;
        border-radius: .1rem;
        margin-top: .5rem;
        text-align: left;
    }
    .product_tips_txt1{
        font-size: .22rem;
        color: #666;
        line-height: .35rem;
    }

    .lockBtn{
        color: #fff;
        width: 3rem;
        margin: 0.2rem auto;
        border-radius: 50rem;
    }
    .DIALOG_BTN.active{
        color: #999;
    }
</style>
