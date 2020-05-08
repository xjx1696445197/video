<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <p class="HEADER_TITLE">我的</p>
            <div
                    class="HEADER_RIGHT_SET set"
                    @click="setup"
            ></div>
            <div
                   class="HEADER_RIGHT news"
                   :class="{'active': hasNoReadNotice}"
                   @click="toNotice"
          	></div>

        </div>
        <div class="wrapper">
            <div class="shop_myTop">
                <div class="shop_myTop_wrapper clearfix">
                    <div class="headImg fl" @click="toLogin">
                        <img src="../static/images/default_headImg.png" alt="">
                    </div>
                    <div class="shop_myTop_content fl clearfix">
                        <div class="clearfix">
                            <p class="shop_txt1 fweight fl"  @click="toLogin">{{namesss}}</p>
                            <div class="agentIcon agentIcon1 fl"
                                 v-if="agentLevel==1"
                            ></div>
                            <div class="agentIcon agentIcon2 fl"
                                 v-if="agentLevel==2"
                            ></div>
                            <div class="agentIcon agentIcon3 fl"
                                 v-if="agentLevel==3"
                            ></div>
                            <div class="agentIcon agentIcon4 fl"
                                 v-if="agentLevel==4"
                            ></div>
                            <div class="agentIcon agentIcon5 fl"
                                 v-if="agentLevel==5"
                            ></div>
                            <div class="agentIcon agentIcon6 fl"
                                 v-if="agentLevel==6"
                            ></div>
                            <div class="agentIcon agentIcon7 fl"
                                 v-if="agentLevel==7"
                            ></div>


                            <div class="vipIcon fl"
                                 v-if="vipLevel==1"
                                 @click='toOpenVip'
                            ></div>
                            <div class="vipIcon2 fl"
                                 v-if="vipLevel==2"
                                 @click='toOpenVip'
                            ></div>
                            <div class="vipIcon3 fl"
                                 v-if="vipLevel==3"
                                 @click='toOpenVip'
                            ></div>
                            <div class="vipOpenIcon fl" @click='toOpenVip'
                                 v-if="!vipLevel"
                            ></div>
                            <!--                            <p class="shop_txt7 fl">VIP1</p>-->
                        </div>
                        <div class="clearfix"
                             style="margin-top:0.1rem;"
                             v-if="starLevel==0 && !vipLevel"
                        >
                            <p class="shop_txt2 fl">普通会员</p>
                        </div>
                        <!--<div class="clearfix"
                            style="margin-top:0.1rem;"
                            v-if="starLevel==0 && vipLevel"
                        >
                            <p class="shop_txt2 fl">普通团队</p>
                        </div>-->
                        <div class="clearfix"
                             style="margin-top:0.1rem;"
                             v-if="starLevel==1"
                        >
                            <div class="my_star fl"></div>
                            <p class="shop_txt2 fl">一星团队</p >
                        </div>
                        <div class="clearfix"
                             style="margin-top:0.1rem;"
                             v-if="starLevel==2"
                        >
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <p class="shop_txt2 fl">二星团队</p >
                        </div>
                        <div class="clearfix"
                             style="margin-top:0.1rem;"
                             v-if="starLevel==3"
                        >
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <p class="shop_txt2 fl">三星团队</p >
                        </div>
                        <div class="clearfix"
                             style="margin-top:0.1rem;"
                             v-if="starLevel==4"
                        >
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <p class="shop_txt2 fl">四星团队</p >
                        </div>
                        <div class="clearfix"
                             style="margin-top:0.1rem;"
                             v-if="starLevel==5"
                        >
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <div class="my_star fl"></div>
                            <p class="shop_txt2 fl">五星团队</p >
                        </div>
                    </div>
                    <img class="actives" v-if="personAdNum==1" src="../static/images/video_icon/active.png">
                    <img class="actives" v-if="personAdNum==0" src="../static/images/video_icon/Inactive.png">
                    <div class="my_top_icon fr" @click="toLogin"></div>
                </div>
            </div>

            <!--推送消息开始-->
	        <div class="noReadList">
	            <div class="noReadItem clearfix"
	                 v-for="(item, index) in dataNoRead"
	                 :key="index"
	            >
	                <div class="noReadIcon fl"></div>
	                <p class="fl noReadtxt">重要通知：<span style="color: #333;font-size: 0.2rem">{{item.title}}</span></p>
	                <div class="noReadClose fr"
	                     :data-id="item.id"
	                     @click="toCloseNotice"
	                ></div>
	                <div class="noReadButton fr"
	                     :data-id="item.id"
	                     @click="toNoticeDetail"
	                >详情</div>
	            </div>
	        </div>
	        <!--推送消息结束-->

            <!--我的订单-->
            <!--<div class="shop_order">
                <div class="shop_orderTop clearfix">
                    <div class="shop_orderIcon fl"></div>
                    <p class="shop_txt3 fl">我的订单</p>
                    <div class="right_icon fr shop_myTop_mt30"></div>
                    <p class="shop_txt3 fr">查看全部订单</p>
                </div>
                <div class="shop_orderBottom">
                    <div class="shop_list clearfix tcenter">
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon1 mauto"></div>
                            <p class="shop_txt4">待付款</p>
                        </div>
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon2 mauto"></div>
                            <p class="shop_txt4">待发货</p>
                        </div>
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon3 mauto"></div>
                            <p class="shop_txt4">待收货</p>
                        </div>
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon4 mauto"></div>
                            <p class="shop_txt4">评价</p>
                        </div>
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon5 mauto"></div>
                            <p class="shop_txt4">售后</p>
                        </div>
                    </div>
                </div>
            </div>-->

            <!--我的资产-->
            <div class="shop_order1">
                <div class="shop_orderTop clearfix" @click="goMyAsset">
                    <div class="shop_walletIcon fl"></div>
                    <p class="shop_txt3 fl">我的资产</p>
                    <!--<div class="right_icon fr shop_myTop_mt35"></div>-->
                    <p class="fr shop_txt8">查看全部资产</p>
                </div>
                <div class="shop_orderBottom_wallet">
                    <div class="shop_list clearfix tcenter">
                        <div class="shop_item_wallet fl">
                            <p class="shop_txt4 fweight">{{parseFloat(assetDetail.CHMC) || 0}}</p>
                            <p class="shop_txt5">流通CHMC</p>
                        </div>
                        <div class="shop_item_wallet fl">
                            <p class="shop_txt4 fweight">{{parseFloat(assetDetail.CHMC_LOCK) || 0}}</p>
                            <p class="shop_txt5">封藏CHMC</p>
                        </div>
                        <div class="shop_item_wallet fl">
                            <p class="shop_txt4 fweight">{{parseFloat(assetDetail.HALE)}}</p>
                            <p class="shop_txt5">HALE</p>
                        </div>
                        <div class="shop_item_wallet fl">
                            <p class="shop_txt4 fweight">{{parseFloat(assetDetail.CREDITS)}}</p>
                            <p class="shop_txt5">积分</p>
                        </div>
                    </div>
                </div>
            </div>

            <!--奖励明细-->
            <div class="shop_order2" @click="Incomedetails">
                <div class="shop_orderTop clearfix">
                    <div class="shop_receivedIcon fl"></div>
                    <p class="shop_txt3 fl">奖励明细</p>
                    <div class="right_icon fr shop_myTop_mt35"></div>
                </div>
            </div>

            <!--我的分享-->
            <div class="shop_order2" @click="share">
                <div class="shop_orderTop clearfix">
                    <div class="shop_shareIcon fl"></div>
                    <p class="shop_txt3 fl">我的分享</p>
                    <div class="right_icon fr shop_myTop_mt35"></div>
                </div>
            </div>

            <!--我的粉丝-->
            <div class="shop_order2" @click="Myteam">
                <div class="shop_orderTop clearfix">
                    <div class="shop_teamIcon fl"></div>
                    <p class="shop_txt3 fl">我的粉丝</p>
                    <div class="right_icon fr shop_myTop_mt35"></div>
                </div>
            </div>
            <!--代理查询-->
            <div class="shop_order2" @click="mapdl">
                <div class="shop_orderTop clearfix">
                    <div class="shop_mapIcon fl"></div>
                    <p class="shop_txt3 fl">代理查询</p>
                    <div class="right_icon fr shop_myTop_mt35"></div>
                </div>
            </div>
            <!--问题反馈-->
            <div class="shop_order2" @click="feedback">
                <div class="shop_orderTop clearfix">
                    <div class="shop_feedIcon fl"></div>
                    <p class="shop_txt3 fl">问题反馈</p>
                    <div class="right_icon fr shop_myTop_mt35"></div>
                </div>
            </div>

        </div>

        <nlayer
                :maskCancel="true"
                maskBackgroundColor="rgba(0,0,0,0.4)"
                :visible="actionSheetVisible"
                @close="actionSheetClosed"
                class="ANIMATITE_BOTTOM_TO_TOP"
                width="100%"
                :zIndex="998"
        >
            <div class="actionSheet" >
                <div class="actionSheet_container">
                    <div class="actionSheet_title clearfix">
                        <div class="actionSheet_txt1">开通VIP</div>
                        <div class="actionSheet_close" @click="actionSheetClosed"></div>
                    </div>
                    <div class="actionSheet_subTitle clearfix" @click='toCurrencyCollect'>
                        <div class="actionSheet_txt1 fl">HALE余额：{{detail.haleAmount}}</div>
                        <div class="actionSheet_txt2 fr">充值HALE</div>
                    </div>
                    <div class="actionSheet_list clearfix">
                        <!--<div class="actionSheet_item"
                            v-for="(item, index) in realVipList"
                               :class="{'disable':item.disable}"
                        >
                            <div class="actionSheet_item_icon"

                            ></div>
                            <div class="actionSheet_txt3" style="margin-top: 0.15rem;"

                            >{{item.disable}}HALE</div>
                        </div>-->
                        <div class="actionSheet_item"
                             :class="[vipNum == '1'? 'active' : '']"
                             @click="swtichVip('1')"
                        >
                            <div class="actionSheet_item_icon actionSheet_item_icon1"

                            ></div>
                            <div class="actionSheet_txt3" style="margin-top: 0.15rem;"

                            >{{detail.vip1Number}}HALE</div>
                        </div>
                        <div class="actionSheet_item"
                             :class="[vipNum == '2'? 'active' : '']"
                             @click="swtichVip('2')"
                        >
                            <div class="actionSheet_item_icon actionSheet_item_icon2"
                            ></div>
                            <div class="actionSheet_txt3" style="margin-top: 0.15rem;"
                            >{{detail.vip2Number}}HALE</div>
                        </div>
                        <div class="actionSheet_item"
                             :class="[vipNum == '3'? 'active' : '']"
                             @click="swtichVip('3')"
                        >
                            <div class="actionSheet_item_icon actionSheet_item_icon3"></div>
                            <div class="actionSheet_txt3" style="margin-top: 0.1rem;">{{detail.vip3Number}}HALE</div>
                        </div>
                        <!--<div class="actionSheet_item"
                            v-for="(item, index) in buttons"
                             @click="selectActionSheet(index)"
                        >
                            <div class="actionSheet_item_icon"
                                :style="{'background':`url(${item.icon}) no-repeat center center / cover`}"
                            ></div>
                            <p class="actionSheet_item_txt1">{{item.title}}</p>
                        </div>-->


                    </div>
                </div>
                <div class="actionSheet_wrapper clearfix">
                    <div class="actionSheet_txt1 fl">支付:{{amount}}HALE</div>
                    <div class="actionSheet_button fr" @click="toSurePay">确定支付</div>
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


        <!--检测是否有交易密码-->
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

        <!--检测是实名认证-->
<!--        <nlayer-->
<!--                :visible="noRealAuthenDig"-->
<!--                @close="noRealAuthenDigClose"-->
<!--                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"-->
<!--                width="80%"-->
<!--                :zIndex="999"-->
<!--        >-->
<!--            <div class='DIALOG'>-->
<!--                <div class='DIALOG_TITLE'>-->
<!--                    {{$t('layerdate.layerdate_tips')}}-->
<!--                </div>-->
<!--                <div class='DIALOG_CONTENT'>-->
<!--                    {{$t('layerdate.layerdate_realAuthen')}}-->
<!--                </div>-->
<!--                <div class='DIALOG_BTNS clearfix'>-->
<!--                    <div-->
<!--                            class='DIALOG_BTN DEFAULT'-->
<!--                            @click='closeNoRealAuthenDig'-->
<!--                    >{{$t('layerdate.layerdate_btnCancel')}}</div>-->
<!--                    <div-->
<!--                            class='DIALOG_BTN CONFIRM'-->
<!--                            @click='toIdCardAuthen'-->
<!--                    >{{$t('layerdate.layerdate_authen')}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nlayer>-->


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
    import Nlayer from '@/components/Nlayer'
    import { sourceUrl,sourceUrlShop } from '@/config'
    import { mapGetters, mapActions } from 'vuex'

    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        name: "My",
        components: {
            Nlayer
        },
        data(){
            return {
                sourceUrl,
                sourceUrlShop,
                accountList: [],
                updateDialog: null,
                tips: '',
                tipsVisible: false,
                actionSheetVisible: false,
                passwordDigVisible: false,
                noRealAuthenDig:false,
                vipNum:'',
                amount:0,
                nickName:'暂未昵称',
                userList:[
                    {
                        username:'dmy00001',
                        active:false
                    },
                    {
                        username:'yl000051',
                        active:false
                    },
                    {
                        username:'zhy11111',
                        active:false
                    }
                ],
                detail:{},
                assetDetail:{},
                feeTipVisible:false,
                loadingVisible: false,
                isCheckPassword:false,
                starLevel:0,
                vipLevel:0,
                agentLevel:0,
                noPasswordDigVisible: false,
                password:'',
                vipList:[
                    {
                        active:false,
                        disable:false,
                        level:1,
                        class:'vipItem001'
                    },
                    {
                        active:false,
                        disable:false,
                        level:2,
                        class:'vipItem002'
                    },
                    {
                        active:false,
                        disable:false,
                        level:3,
                        class:'vipItem002'
                    }
                ],
                namesss:"",
                transPass:false,
                userIdtwo:JSON.parse(localStorage.getItem('userinfo')),
				dataNoRead:[],
                personAdNum:''
            }
        },
        mounted(){

            // 判断是否有数据
            this.isSidebars()
            this.isLogin()

            // 判断是否要更新
            if( this.needUpdate == -1 ){
                this.setNeedUpdate()
            } else {
                if( this.needUpdate ){
                    this.createUpdateDialog()
                    this.updateDialog.open()
                }
            }
            localStorage.removeItem('incomsg');
            localStorage.removeItem('incostro');
            localStorage.removeItem('integralmsg');
        },
        computed: {
            token(){
                return this.$route.query.token
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
            realVipList(){
                console.log(this.vipLevel+'ppp')
                // 根据用户等级更新vipList
                return this.vipList.map((item)=>{
                    console.log(item)
                    if( item.level <=	 parseInt(this.vipLevel) ){
                        return {
                            disable:true,
                            ...item
                        }
                    }
                    return item
                })
            },
//          agentLevel(){
//          	return this.userinfo.agentLevel == 0 ? false : true
//          },
//          vipLevel(){
//          	return this.userinfo.vipLevel == 0 ? false : true
//          },
            hasNoReadNotice(){
                return this.getTransferNotice() || this.getSystemNotice()
            },
            needUpdate(){
                return this.getNeedUpdate()
            },
            updateDetail(){
                return this.getUpdateDetail()
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            userName(){
                return this.userinfo.userName
            },
            Sidebars(){
                return this.getSidebars()
            },
        },
        parseFloat(num){
            return parseFloat(num)
        },
        created(){
            this.transPass=JSON.parse(localStorage.getItem('transPass'))
            if(JSON.parse(localStorage.getItem('userinfo'))==undefined){
                this.$push({
                    path: '/login'
                })
            }else {

            }
            var that=this
            jsonAjax.get(urlUtil.getApiUrl("findUserNews"), {userId:that.userIdtwo.customerId}, function (result) {
                that.namesss=result.resultData.nickName
                that.personAdNum=result.resultData.personAdNum
            });
            jsonAjax.get(urlUtil.getApiUrl("tokenIsOut"), {userPhone:that.userIdtwo.phone}, function (result) {
                if(result.result){
                    that.showTips('登录超时请重新登录')
                    localStorage.removeItem('userinfo')
                    setTimeout(function() {
                            that.$router.replace({
                                path: '/login'
                            })
                        },
                        600);
                }else {

                }
            });

        },
        methods: {
            ...mapActions(['setUserNoticeState', 'setNeedUpdate','setUserinfo','setUsers','removeUserinfo','setSidebars']),
            ...mapGetters(['getUserinfo', 'getSystemNotice', 'getTransferNotice', 'getNeedUpdate', 'getUpdateDetail','getSidebars']),
            mapdl(){
                this.$push({
                    path: '/map'
                })
            },
            setup(){
                this.$push({
                    path: '/Setup'
                })
            },
            feedback(){
                this.$push({
                    path: '/feedback'
                })
            },
            Incomedetails(){
                this.$push({
                    path: '/Incomedetails'
                })
            },
            share(){
                this.$push({
                    path: '/share'
                })
            },
            Myteam(){
                this.$push({
                    path: '/Myteam'
                })
            },
            // 创建版本更新弹窗
            createUpdateDialog(){
                const h = this.$createElement
                const cons = this.updateDetail.content.replace(/(\r\n)|(\n)/g,'<br/>');
                console.log(cons)
                const content = h('div', {
                    class: 'DIALOG'
                },[
                    h('div', {class: 'DIALOG_TITLE'}, this.updateDetail.editionNum + this.$t('aboutUs.aboutUs_edition')),
                    h('div', {class: 'DIALOG_CONTENT'}, this.updateDetail.content),
                    h('div', {class: 'DIALOG_BTNS clearfix'}, [
                        h('div', {
                            class: 'DIALOG_BTN CONFIRM',
                            on: {
                                click: () => {
                                    this.openPage()
                                }
                            }
                        }, this.$t('aboutUs.aboutUs_update'))
                    ]),
                ])

                this.updateDialog = this.$layer({
                    content,
                    width: '80%',
                    maskCancel: false
                })
            },
            // 原生打开新页面
            openPage(){
                window.plus && window.plus.runtime.openURL( this.updateDetail.downloadPath )
            },
            // 检测缓存是否有数据
            isSidebars(){
                if(this.Sidebars.length > 0){
                    this.userList = this.Sidebars
                }else{
                    this.userList = []
                }
            },
            // 检测用户是否登录
            isLogin(){
                if( this.userinfo ){
                    // 赋值
                    console.log(this.userinfo)
                    this.nickName = this.userinfo.nickName
                    // 请求头部数据
                    this.getMyBase()
                    // 请求推送消息数据
                    this.getNoRead()
                    // 请求我的资产数据
                    this.getMyAsset()
                    //    是否开启弹窗
                    // 登录里加判断
                    if(!JSON.parse(localStorage.getItem('certification'))){
                        this.openNoRealAuthenDig()
                    }else{
                    	// 加入缓存信息
                    	this.getUserInfo()
                    }
                    // 获取用户是否有未读消息
                    this.setUserNoticeState()
                } else {
                    // 跳转到登录页面
                    this.$router.replace({
                        path: '/login'
                    })

                }
            },
            // 获取头部数据
            getMyBase(){
                ///app/users/findUserAgencyAuthority
                var that = this
                // my_asset
                jsonAjax.get(urlUtil.getApiUrl("my_top"), {
                    userId:that.userId
                }, function (result) {
                    console.log(result)
//              	return
                    if( result.returnCode == 1 ){
                        const { agentLevel,starLevel,vipLevel } = result.resultData
                        that.starLevel = starLevel
                        that.vipLevel = vipLevel
                        that.agentLevel = agentLevel
                        console.log(agentLevel,starLevel,vipLevel)
                    }else{
                        that.showTips('获取数据失败!')
                    }
                })
            },
            // 获取用户3天内的推送消息
            getNoRead(){
                this.$http.get('app/message/getPushMsg',{
                    userId: this.userId,
                    pageNo:1,
                    pageSize:3
                }).then((res) => {
                    console.log(res)
                    // return
                    if( res.returnCode == 1 ){
                        this.dataNoRead = res.resultData
                    }else{
                        this.dataNoRead = []
                    }
                })
            },
            // 跳转到消息详情
            toNoticeDetail(e){
                this.$push({
                    path: '/noticeDetail',
                    query: {
                        id: e.currentTarget.dataset.id
                    }
                })
            },
            // 点击关闭 标记为已读
            toCloseNotice(e){
                this.$http.get('app/message/markReadMsg',{
                    userId: this.userId,
                    id: e.currentTarget.dataset.id
                }).then((res) => {
                    if( res.returnCode == 1 ){
                        this.setUserNoticeState()
                    //    重新获取数据
                        this.getNoRead()
                    }
                })
            },
            // 获取地区信息
            getUserInfo(){
                this.$http.get('app/aip/findUserInfo', {
                    userId: this.userId
                }).then((res) => {
                    console.log(res)
                    if( res.returnCode == 1 ){
                        this.setUserinfo({
                            ...this.userinfo,
                            certification: 1,
                            showCode:res.resultData.status == null ? 1 : res.resultData.status
                        })
                    }
                })
            },
            news(){
                this.$push({
                    path: '/notice/noticeTabTransfer'
                })
            },
            getMyAsset(){
                var that = this
                // my_asset
                jsonAjax.get(urlUtil.getApiUrl("my_asset"), {
                    userId:that.userId
                }, function (result) {
                    console.log(result)
                    if( result.returnCode == 1 ){
                        that.assetDetail = result.resultData
                        console.log(parseFloat(that.assetDetail.HALE))
                    }else{
                        that.showTips('获取数据失败!')
                    }
                })
            },
            // 获取登录时的资产列表
            getAccountList(){
                this.$http.get('js/userWallet/getUserWallet', {
                    userId: this.userId
                }).then((res) => {
                    if( res.success ){
                        this.accountList = res.result.list
                    }
                })
            },
            // 获取没有登录时的资产列表
            getAccountListNoLogin(){
                this.$http.get('js/usersLogin/getUserWallet').then((res) => {
                    if( res.success ){
                        this.accountList = res.result
                    }
                })
            },
            // 开通vip
            toOpenVip(){
                // 检测用户是否设置了交易密码
                if( !this.transPass ){
                    // 打开去设置的弹窗
                    this.openNoPasswordDig()
                    return
                }
                // 检测用户是否是最高级
                if(this.vipLevel == 3){
                    this.showTips('您已是VIP3，无法提升')
                    return
                }
                var that = this
                // that.vipNum = 'vip1'

                // 请求 vip_hale
                jsonAjax.post(urlUtil.getApiUrl("vip_hale"), {
                    userId:that.userId
                }, function (result) {
                    console.log(result)
                    if( result.success ){
                        that.detail = result.result
                        // that.amount = result.result.vip1Number
                        return
                        // 根据用户等级去赋值
//                         if( this.vipLevel == 0 ){
// //		            		that.vipNum = 'vip1'
//                             that.amount = result.result.vip1Number
//                         }else if( this.vipLevel == 1 ){
// //		            		that.vipNum = 'vip2'
//                             that.amount = result.result.vip2Number
//                         }else{
// //		            		that.vipNum = 'vip3'
//                             that.amount = result.result.vip3Number
//                         }

                    }
                })
                this.showActionSheet()



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
            //
            setStatus(){
                this.userList.forEach((item, i)=>{
                    console.log(item.username,this.userName)

                    if(item.username == this.userName){

                        item.active = true
                    }else{
                        item.active = false
                    }

                })
            },
            // 跳转到我的资产
            goMyAsset(){
                this.$push({
                    path: '/Myassets'
                })
            },
            // 跳转到实名认证
            toIdCardAuthen(){
                // 检测当前用户有没有实名认证
                if(!JSON.parse(localStorage.getItem('certification'))){
                	// 4.23修改部分
                    this.$push({
                    	path: '/realNameAuthen'
//                      path: '/idCardAuthen'
                    })
                }else{
                    this.$push({
                        path: '/finishAuthen'
                    })
                }

            },
            // 跳转到币详情
            toDetail(e){
                if( !this.userinfo ){
                    this.showTips(this.loginTip)
                    return
                }
                const { name } = e.currentTarget.dataset

                this.$push({
                    path: '/currencyDetail',
                    query: {
                        currencyName: name
                    }
                })
            },
            // 跳转到消息页面
            toNotice(){
                if( !this.userinfo ){
                    this.showTips(this.loginTip)
                    return
                }
                this.$push({
                    path: '/notice'
                })
            },
            // 选择
            selectUser(e){
                const {
                    id
                } = e.currentTarget.dataset
                console.log(id)
                // 打开加载层
                this.showLoading()
                this.userList.forEach((item, i)=>{

                    if(i == id){

                        item.active = true
                    }else{
                        item.active = false
                    }

                })

                // 根据当前选择的用户名去请求切换接口
                this.$http.post('js/usersLogin/getTokenByUserId', {
                    userName: this.userList[id].username,
                    __HEADERSAUTH: true
                }).then((res) => {
                    // 关闭加载层
                    this.closeLoading()
                    console.log(res,res.headers)
                    if(res.data.success){
                        console.log(res.headers)
                        let userinfo = res.data.result
                        const { token } = res.headers
                        // this.removeUserinfo()
                        // 保存用户信息
                        this.setUserinfo({
                            ...userinfo,
                            token
                        })
                        // 保存用户名
                        this.setUsers(userinfo.userName)

                        this.loginSuccess = true

                        this.isLogin()
                        this.showTips(res.data.message, false)

                    }else{
                        this.showTips(res.data.message)
                        //    未找到该用户 然后进行删除操作
                    }

                })


                console.log(this.userList)

            },
            // 确认支付
            toSurePay(){
                // 检测hale余额
                if( this.detail.haleAmount < this.amount ){
                    this.showTips('HALE余额不足,请充值后再操作!')
                    return
                }
                if(this.amount>0){
                    this.openPasswordDig()
                }else {
                    this.showTips('选中你要开通的vip等级')

                }
                //开启密码弹窗
            },
            // 去注册
            toRegister(){
                // 关闭侧边栏
                this.feeTipDigClose()
                this.$push({
                    path: '/register',
                    query: {
                        from: 'create'
                    }
                })

            },
            // 去导入
            toImport(){
                // 关闭侧边栏
                this.feeTipDigClose()
                this.$push({
                    path: '/importWallet',
                    query: {
                        from:'/asset'
                    }

                })
            },
            toMain(){
                this.$router.replace({
                    path: '/asset'
                })
            },
            // 打开
            toOpen(){
                this.feeTipVisible = true
            },
            feeTipDigClose(){
                this.feeTipVisible = false
            },
            toClose(){
                this.feeTipVisible = false
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
            // 打开加载
            showLoading(){
                console.log('执行了')
                this.loadingVisible = true
            },
            // 关闭加载层
            closeLoading(){
                this.loadingVisible = false
            },
            // 选择vip样式
            swtichVip(vipNum){
                // 检测当前用户的vip等级

//          	if( this.vipNum == 'vip1' && this.vipLevel == 1 ){
//          		this.showTips('无法选择低于或等于自己等级的vip')
//          		this.vipNum = 'vip2'
//          		return
//          	}
//          	if( this.vipNum == 'vip2' || this.vipNum == 'vip1' && this.vipLevel == 2 ){
//          		console.log(this.detail.vip3Number)
//          		this.showTips('无法选择低于或等于自己等级的vip')
//          		this.vipNum = 'vip3'
//
//          		this.amount = this.detail.vip3Number
//          		return
//          	}

                if(this.vipLevel<vipNum){
                    if(vipNum == '1'){
                        this.amount = this.detail.vip1Number
                        this.vipNum = vipNum

                    }
                    if( vipNum == '2'){
                        this.amount = this.detail.vip2Number
                        this.vipNum = vipNum

                    }
                    if( vipNum == '3'){
                        this.amount = this.detail.vip3Number
                        this.vipNum = vipNum

                    }

                }else{
                    this.showTips('无法选择低于或等于自己等级的vip')
                }
                //     if(vipNum == '1'){
                //     this.amount = this.detail.vip1Number
                // }
                // if( vipNum == '2'){
                //     this.amount = this.detail.vip2Number
                // }
                // if( vipNum == '3'){
                //     this.amount = this.detail.vip3Number
                // }

            },
            // 去登录
            toLogin(){
                this.$push({
                    path: '/personalcenter'
                })

            },
            // 去充值
            toCurrencyCollect(){
                this.$push({
                    path: '/currencyCollect'
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
                // 检测交易密码是否正确
                // 请求是否有交易密码接口  /app/users/isCorrectTransPass transPass_isTrue
                jsonAjax.post(urlUtil.getApiUrl("transPass_isTrue"), {
                    userId:this.userId,
                    transPass:that.password
                }, function (result) {
                    console.log(result)
//	                	return
                    if( result.returnCode == 1 ){
//	                		that.showTips(result.message)
                        // 去请求开通vip的接口
                        that.sureOpenVip()
//	                		that.password = ''
                        // 关闭弹窗
                        that.closePasswordDig()
                    }else{
                        console.log('12345')
                        that.showTips(result.message)
                        // 清空密码
                        that.password = ''
                    }

                })


            },
            // 关闭未实名提示弹窗
            closeNoRealAuthenDig(){
                this.noRealAuthenDig = false
            },
            // 打开未实名提示弹窗
            openNoRealAuthenDig(){
                this.noRealAuthenDig = true
            },
            // 监听关闭无密码弹窗事件
            noRealAuthenDigClose(){
                this.noRealAuthenDig = false
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
            // 去设置交易密码
            toSetDealPassword(){
                this.$push({
                    path: '/Transaction'
                })
            },
            // 真正开通vip
            sureOpenVip(){
                var that = this
//          	return
                // 请求接口 open_vip
                jsonAjax.post(urlUtil.getApiUrl("open_vip"), {
                    userId:this.userId,
                    vipLevel:that.vipNum
                }, function (result) {
                    console.log(result)
                    if( result.success ){
                        that.showTips(result.message)
                        // 关闭开通界面并请求接口更新数据
                        that.actionSheetClosed()
                        that.amount=0
                        that.vipNum=0
                        // 更新数据
                        that.getMyBase()
                        that.getMyAsset()
                    }else{
                        that.showTips(result.message)
                    }
                    return
                    if( result.returnCode == 1 ){
                        that.showTips(result.message)
                        // 去请求开通vip的接口
                        that.sureOpenVip()
                        that.password = ''
                    }else{
                        that.showTips(result.message)
                        that.isCheckPassword = false
                    }

                })

            }
        }
    }
</script>

<style scoped>
    .page{
        position: relative;
        /*overflow: scroll;*/
    }
        .HEADER_RIGHT_SET{
            position: absolute;
            right: .85rem;
            top: .15rem;
        }
    .shop_myTop_wrapper{
        padding: 0.3rem;
        height: 1.6rem;
        box-sizing: border-box;
        background: #fff;
    }

    .headImg{
        width: 1rem;
        height: 1rem;
        /*background: #E4811D;*/
        border-radius: 50rem;
        overflow: hidden;
        /*border: 1px solid #203395;*/
    }
    .headImg img{
        width: 100%;
        height: 100%;

    }
    .my_star{
        margin-top: 0.095rem;
        margin-right: 0.1rem;
        width: 0.26rem;
        height: 0.26rem;
        background: url("../static/images/video_icon/icon_star.png") no-repeat center center /cover;
    }
    .shop_myTop_content{
        padding-top: 0.1rem;
        padding-left: 0.3rem;
    }
    .shop_txt1{
        font-size: 0.3rem;
        color: #333;
        line-height: 0.36rem;
        letter-spacing:0.05rem;
    }
    .shop_txt2{
        font-size: 0.22rem;
        color: #aaa;
        line-height: 0.45rem;
    }

    .shop_txt3{
        font-size: 0.26rem;
        color: #333;
        line-height: 1rem;
        padding: 0 0.2rem;
    }
    .shop_txt4{
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.4rem;
    }
    .shop_txt5{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.4rem;
    }
    .shop_txt6{
        font-size: 0.2rem;
        color: #E1D499;
        line-height: 0.36rem;
        padding: 0 0.18rem;
        background: #333;
        border-radius: 0.2rem;
        margin-top: 0.045rem;
        margin-left: 0.2rem;
    }
    .shop_txt7{
        background: #FFDC36;
        padding: 0 0.18rem;
        color: #333;
        font-size: 0.24rem;
        line-height: 0.36rem;
        margin: 0.045rem 0 0 0.2rem;
        border-radius: 0.2rem;
    }
    .shop_txt8{
        font-size: 0.22rem;
        color: #ccc;
        line-height: 1rem;
        position: relative;
        padding-right: 0.4rem;
    }
    .shop_txt8:after{
        position: absolute;
        background: url("../static/images/video_icon/icon_right.png") no-repeat center center /cover;
        height: 0.3rem;
        width: 0.3rem;
        content: '';
        top: 50%;
        margin-top: -0.15rem;
        /*transform: translateY(-50%);*/
        right: 0;
    }
    .shop_myTop_mt35{
        margin-top: 0.35rem;
    }
    .right_icon{
        background: url("../static/images/video_icon/icon_right.png") no-repeat center center /cover;
        height: 0.3rem;
        width: 0.3rem;

    }

    .shop_order{
        margin-top: 0.3rem;
        height: 2.5rem;
        background: #fff;
        padding: 0 0.3rem;
    }
    .shop_order1{
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        height: 2.2rem;
        background: #fff;
        padding: 0 0.3rem;
    }
    .shop_order2{
        padding: 0 0.3rem;
        background: #fff;
    }

    .shop_other{
        margin-top: 0.3rem;
        background: #fff;
        padding: 0.4rem 0.3rem 0.2rem;
    }
    .shop_orderTop{
        border-bottom: 1px solid #eee;
    }
    .shop_orderIcon{
        background: url("../static/images/shop/shop_myOrder.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.35rem;
        margin-top: 0.3rem;
    }
    .shop_walletIcon{
        background: url("../static/images/video_icon/icon_money.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.4rem;
        margin-top: 0.3rem;
    }
    .shop_receivedIcon{
        background: url("../static/images/video_icon/icon_receive.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.4rem;
        margin-top: 0.3rem;
    }
    .shop_shareIcon{
        background: url("../static/images/video_icon/icon_share.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.4rem;
        margin-top: 0.3rem;
    }
    .shop_teamIcon{
        background: url("../static/images/video_icon/icon_team.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.4rem;
        margin-top: 0.3rem;
    }
    .shop_feedIcon{
        background: url("../static/images/video_icon/icon_feed.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.4rem;
        margin-top: 0.3rem;
    }
    .shop_mapIcon{
        background: url("../static/images/video_icon/icon_dl.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.4rem;
        margin-top: 0.3rem;
    }
    .shop_orderBottom{
        padding: 0.2rem 0;
        box-sizing: border-box;
    }
    .shop_orderBottom_wallet{
        padding-top: 0.2rem;
        box-sizing: border-box;
    }
    .shop_item{
        width: 1.38rem;
    }
    .shop_item_wallet{
        width: 25%;
        position: relative;
    }
    .shop_item_wallet+.shop_item_wallet:before{
        position: absolute;content: '';
        width: 1px;height: 0.9rem;
        background: #eee;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .shop_item_icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .shop_item_icon1{
        background: url("../static/images/shop/shop_order_icon1.png") no-repeat center center /cover;
    }
    .shop_item_icon2{
        background: url("../static/images/shop/shop_order_icon2.png") no-repeat center center /cover;
    }
    .shop_item_icon3{
        background: url("../static/images/shop/shop_order_icon3.png") no-repeat center center /cover;
    }
    .shop_item_icon4{
        background: url("../static/images/shop/shop_order_icon4.png") no-repeat center center /cover;
    }
    .shop_item_icon5{
        background: url("../static/images/shop/shop_order_icon5.png") no-repeat center center /cover;
    }
    .shop_item_other{
        width: 1.725rem;
    }
    .shop_item_other_icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .shop_item_other_icon1{
        background: url("../static/images/shop/shop_other_icon001.png") no-repeat center center /cover;
    }
    .shop_item_other_icon2{
        background: url("../static/images/shop/shop_other_icon002.png") no-repeat center center /cover;
    }
    .shop_item_other_icon3{
        background: url("../static/images/shop/shop_other_icon003.png") no-repeat center center /cover;
    }
    .shop_item_other_icon4{
        background: url("../static/images/shop/shop_other_icon004.png") no-repeat center center /cover;
    }
    .agentIcon{
        /*margin-top: 0.05rem;*/
        margin-left: 0.1rem;
        height: 0.36rem;
    }
    .agentIcon1{
        width: 0.9rem;
        background: url("../static/images/video_icon/province_agent.png") no-repeat center center /cover;
    }
    .agentIcon2{
        width: 0.9rem;
        background: url("../static/images/video_icon/city_agent.png") no-repeat center center /cover;
    }
    .agentIcon3{
        width: 0.9rem;
        background: url("../static/images/video_icon/pcity_agent.png") no-repeat center center /cover;
    }
    .agentIcon4{
        width: 1rem;
        background: url("../static/images/video_icon/county_agent.png") no-repeat center center /cover;
    }
    .agentIcon5{
        width: 1.2rem;
        background: url("../static/images/video_icon/pcounty_agent.png") no-repeat center center /cover;
    }
    .agentIcon6{
        width: 1.2rem;
        background: url("../static/images/video_icon/ccounty_agent.png") no-repeat center center /cover;
    }
    .agentIcon7{
        width: 1.42rem;
        background: url("../static/images/video_icon/pccounty_agent.png") no-repeat center center /cover;
    }
    .vipIcon{
        /*margin-top: 0.05rem;*/
        margin-left: 0.2rem;
        width: 1.2rem;
        height: 0.36rem;
        background: url("../static/images/video_icon/vip1.png") no-repeat center center /cover;
    }
    .vipIcon2{
        /*margin-top: 0.05rem;*/
        margin-left: 0.2rem;
        width: 1.2rem;
        height: 0.36rem;
        background: url("../static/images/video_icon/vip2.png") no-repeat center center /cover;
    }
    .vipIcon3{
        /*margin-top: 0.05rem;*/
        margin-left: 0.2rem;
        width: 0.9rem;
        height: 0.36rem;
        background: url("../static/images/video_icon/vip3.png") no-repeat center center /cover;
    }
    .vipOpenIcon{
        /*margin-top: 0.045rem;*/
        margin-left: 0.2rem;
        width: 1.2rem;
        height: 0.36rem;
        background: url("../static/images/video_icon/open_vip.png") no-repeat center center /cover;
    }
    .DIALOG_CONTENT{
        text-align: left;
        /*padding: 0 0.4rem;*/
    }
    .DIALOG_TITLE{
        font-size: .34rem;
        color: #333;
    }
    /*.DIALOG_CONTENT{
        white-space:pre-line;
    }*/

    .back{
        margin-top: 1.2rem;
    }

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
        color: #333; line-height: 1rem;
        /*border-top: 1px solid #f3f3f3;*/
        background: #203395;
        color: #fff;
        text-align: center;
        width: 2.5rem;
        height: 1rem;
    }
    .HEADER{
        background: none;
    }
    /*.page{
        background: #fff;
    }
    .wrapper{
        background: url("../static/images/share_bg.jpg") repeat-x center / auto 100%;
    }*/
    .content{
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bg_topper{
        background: url("../static/images/share/share_topBg.png") no-repeat center center / cover;
        height: 4.35rem;
        width: 100%;
    }
    .bg_topper_EN{
        background: url("../static/images/share/share_topBg_EN.png") no-repeat center center / cover;
        height: 4.35rem;
        width: 100%;
    }
    .bg_content{
        background: url("../static/images/share_content.png") no-repeat center center / cover;
        width: 5rem;
        height: 6.25rem;
        margin-top: -0.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bg_content_EN{
        background: url("../static/images/share_content_EN.png") no-repeat center center / cover;
        width: 5rem;
        height: 6.25rem;
        margin-top: -0.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .share_qrcode{
        width: 2.3rem;
        height: 2.3rem;
        background: #fafafa;
        margin-top: 1.3rem;
    }
    .share_qrcode img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .share_txt1{
        font-size: .26rem;
        color: #555;
        line-height: .4rem;
    }
    .share_txt2{
        font-size: .26rem;
        color: #555;
        line-height: .4rem;
        margin-top: 0.6rem;
    }
    .share_txt3{
        font-size: .45rem;
        font-weight: bold;
        background: linear-gradient(to bottom, rgba(246,209,43,1), rgba(222,122,40,1));
        background-clip: text;
        color: transparent;
        line-height: .9rem;
    }
    .share_btns{
        display: flex;
        justify-content: space-between;
        width: 5rem;
        margin-top: 0.6rem;
    }
    .share_btn{
        line-height: .75rem;
        font-size: .28rem;
        text-align: center;
        cursor: pointer;
        color: #000;
        background: linear-gradient(to bottom,rgba(255,245,88,1), rgba(255,190,8,1));
        width: 2.35rem;
    }


    .content.type1 .bg_content{
        margin-top: -2rem;
    }
    .content.type2{
        justify-content: center;
    }
    .content.type2 .bg_topper{
        display: none;
    }
    .content.type2 .bg_content{
        margin-top: 0;
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
    .actionSheet_subTitle{
        padding: 0 0.3rem;
        border-bottom:1px solid #F5F5F5;
    }
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
    .actionSheet_item_icon11{
        width: 0.67rem;
        height: 0.17rem;
        background: url('../static/images/video_icon/my_vip11.png')no-repeat center center / cover;
    }
    .actionSheet_item_icon2{
        width: 0.7rem;
        height: 0.17rem;
        background: url('../static/images/video_icon/my_vip2.png')no-repeat center center / cover;
    }
    .actionSheet_item_icon22{
        width: 0.7rem;
        height: 0.17rem;
        background: url('../static/images/video_icon/my_vip22.png')no-repeat center center / cover;
    }
    .actionSheet_item_icon3{
        width: 0.68rem;
        height: 0.22rem;
        background: url('../static/images/video_icon/my_vip3.png')no-repeat center center / cover;
    }
    .actionSheet_wrapper{
        padding-left:0.3rem;
    }
    .set{
        margin-top: 0.1rem;
        width: 0.4rem;
        height: 0.4rem;
        background: url(../static/images/video_icon/icon_set.png)no-repeat center center / cover;

    }
   .news{
        margin-top: 0.1rem;
       	width: 0.4rem;
      	height: 0.4rem;
     	background: url(../static/images/video_icon/icon_notice.png)no-repeat center center / cover;
    }

    .my_top_icon{
        background: url("../static/images/video_icon/icon_right.png") no-repeat center center /cover;
        height: 0.3rem;
        width: 0.3rem;
        margin-top: 0.7rem;

    }
    .colorCCC{
        color: #ccc;
    }

    /*推送消息样式*/
    .noReadList{
        margin-top: 0.3rem;
        padding: 0 0.3rem;
    }
    .noReadItem{
        background:#FFDC36;
        padding: 0 0.2rem;
    }
    .noReadItem+.noReadItem{
        margin-top: 0.2rem;
    }
    .noReadIcon{
        margin-top: 0.2rem;
        width: 0.3rem;
        height: 0.3rem;
        background: url("../static/images/video_icon/my_notice.png")no-repeat center center / cover;
    }
    .noReadClose{
        margin-top: 0.2rem;
        width: 0.3rem;
        height: 0.3rem;
        background: url("../static/images/video_icon/my_close.png")no-repeat center center / cover;
    }
    .noReadtxt{
        font-size: 0.2rem;
        color: #203395;
        line-height: 0.7rem;
        padding-left: 0.2rem;
    }
    .noReadButton{
        width: 0.5rem;
        height: 0.36rem;
        font-size: 0.22rem;
        color: #203395;
        line-height: 0.36rem;
        text-align: center;
        margin-top: 0.14rem;
        margin-right: 0.15rem;
        border-bottom: 1px solid #203395;
    }
    .news.active:after{
        position: absolute;
        content: '';
        width: .15rem;
        height: .15rem;
        background: #e41d1d;
        border-radius: 100%;
        left: -0.05rem;
        top: -.02rem;
    }
    .actives{
        position: absolute;
        right: .2rem;
        width: .8rem;
    }
</style>




