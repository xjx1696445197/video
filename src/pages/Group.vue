<template>
    <div class="page">
        <div class="PRODUCT_FRONT" v-if="!opened">
            <div class="PRODUCT_POSTER">
                <div class="PRODUCT_POSTER_WRAPPER">
                    <img src="../static/images/bg/halePublic_icon.png">
                </div>
            </div>
            <div class="PRODUCT_FRONT_BTN LONGBTN" @click="openService">{{$t('halePublic.halePublic_openLocking')}}</div>
        </div>
        <div class="PRODUCT_REVERSESIDE" v-if="opened">
            <div class="PRODUCT_TOP">
                <div class="group_top tcenter">
                    <p class="group_top_txt1">{{( detail.usdtCumulativeProfit || '----' ) | integer}}</p>
                    <p class="group_top_txt2">{{$t('halePublic.halePublic_accumulatedIncome')}}</p>
                </div>
                <div class="PRODUCT_METAS tcenter">
                    <div class="PRODUCT_META">
                        <p class="PRODUCT_META_TXT1">{{$t('halePublic.halePublic_oneCommunity')}}</p>
                        <div class="group_metas">
                            <div class="group_meta">
                                <p class="group_meta_txt1">{{$t('halePublic.halePublic_all')}}</p>
                                <p class="group_meta_txt2">{{( detail.firstOrderNum || '----' ) | integer}}</p>
                            </div>
                            <div class="group_meta">
                                <p class="group_meta_txt1">{{$t('halePublic.halePublic_open')}}</p>
                                <p class="group_meta_txt2">{{( detail.firstOrderOpen || '----' ) | integer}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="PRODUCT_META">
                        <p class="PRODUCT_META_TXT1">{{$t('halePublic.halePublic_twoCommunity')}}</p>
                        <div class="group_metas">
                            <div class="group_meta">
                                <p class="group_meta_txt1">{{$t('halePublic.halePublic_all')}}</p>
                                <p class="group_meta_txt2">{{( detail.twoOrderNum || '----' ) | integer}}</p>
                            </div>
                            <div class="group_meta">
                                <p class="group_meta_txt1">{{$t('halePublic.halePublic_open')}}</p>
                                <p class="group_meta_txt2">{{( detail.twoOrderOpen || '----' ) | integer}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="PRODUCT_SUB">
                <p class="PRODUCT_TITLE">{{$t('halePublic.halePublic_incomePublic')}}</p>
                <div class="PRODUCT_SUB_POS">
                    <div class="PRODUCT_SUB_CONTENT">


                        <md-scroll-view
                                ref="scrollView"
                                :scrolling-x="false"
                                :auto-reflow="true"
                                :manual-init="true"
                                :immediate-check-end-reaching="true"
                                @refreshing="$_onRefresh"
                                @end-reached="$_onEndReached"

                        >
                            <md-scroll-view-refresh
                                    slot="refresh"
                                    slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
                                    :scroll-top="scrollTop"
                                    :is-refreshing="isRefreshing"
                                    :is-refresh-active="isRefreshActive"
                                    :refreshText="$t('statustest.status_refresh')"
                                    :refreshActiveText="$t('statustest.status_refreshed')"
                                    :refreshingText="$t('statustest.status_refreshing')"
                            ></md-scroll-view-refresh>

                            <div class="PRODUCT_LIST">
                                <div class="PRODUCT_ITEM COMPLETE NOARR"
                                     v-for="(item, index) in list"
                                     :key="item.id"
                                >
                                    <div class="PRODUCT_ITEM_TOP">
                                        <div class="group_identity">
                                            <p class="PRODUCT_ITEM_TXT1">{{$t('halePublic.halePublic_name')}}：{{item.userName}}</p>
                                            <div class="group_level_pic"
                                                 v-if="item.starLevel != 0"
                                                :class="{
                                                    'group_level_pic001': item.starLevel == 1,
                                                    'group_level_pic002': item.starLevel == 2,
                                                    'group_level_pic003': item.starLevel == 3,
                                                    'group_level_pic004': item.starLevel == 4,
                                                    'group_level_pic005': item.starLevel == 5
                                                }"
                                            >
                                            </div>
                                        </div>

                                        <p class="PRODUCT_ITEM_TXT2">{{$t('statustest.status_finish')}}</p>
                                    </div>
                                    <div class="PRODUCT_ITEM_SUB">
                                        <p class="PRODUCT_ITEM_TXT3">{{$t('halePublic.halePublic_getTime')}}：{{item.addTime | dataFormat('yyyy-MM-dd')}}</p>
                                        <p class="PRODUCT_ITEM_TXT4">+{{item.amount | integer}} USDT</p>
                                    </div>
                                </div>
                            </div>

                            <md-scroll-view-more
                                    slot="more"
                                    :is-finished="isFinished"
                                    :finishedText="$t('statustest.status_All_loaded')"
                                    :loadingText="$t('statustest.status_loading')"
                            >
                            </md-scroll-view-more>
                        </md-scroll-view>


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
                        {{$t('halePublic.halePublic_activationLoking')}}
                    </div>
                </div>
                <div class='DIALOG_CONTENT'>
                    <input type="text"
                       class="product_input"
                       :value="num"
                       disabled="disabled"
                    >
                    <div class="product_tips">
                        <p class="product_tips_txt1">{{$t('halePublic.halePublic_tip1')}}{{num}}{{$t('halePublic.halePublic_tip2')}}</p>
                    </div>
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                        class='DIALOG_BTN CONFIRM'
                        @click='vlidateLockData'
                    ><div class="lockBtn BUTTON_BG BUTTON_SHADOW">{{$t('halePublic.halePublic_activation')}}</div></div>
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

    import Nlayer from 'components/Nlayer'
    import ScrollView from 'mand-mobile/lib/scroll-view'
    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'
    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'


    const PAGENO = 1

    export default {
        name: "Group",
        components: {
            Nlayer,
            [ScrollView.name]: ScrollView,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
            [ScrollViewMore.name]: ScrollViewMore
        },
        filters: {
            integer(value){
                const nValue = parseInt(value)
                return isNaN(nValue) ? value : nValue
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            opened(){
                if( this.userinfo && this.userinfo.publicPlatoon ){
                    return true
                }

                return false
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            haleLockTips(){
                return this.$t('halePower.halePower_lockPositionNoOpen')
            },
        },
        data(){
            return {
                detail: {},
                password: '',
                serviceDigVisible: false,
                passwordDigVisible: false,
                noPasswordDigVisible: false,
                tips: '',
                tipsVisible: false,
                pageNo: PAGENO,
                pageSize: 8,
                list: [],
                isFinished: false,
                num:'',
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
                    this.getNum()
                    this.getDetail()
                    this.initScrollView()
                }
            },
            // 初始化scrollview
            initScrollView(){
                this.$refs.scrollView.init()
            },
            // 加载数据
            getData(refresh=false){
                return this.$http.get('js/hPublicPlatoonLog/findProfitLog', {
                    userId: this.userId,
                    pageSize: this.pageSize,
                    pageNo: this.pageNo
                }).then((res) => {
                    if( res.success ){
                        if( refresh ){
                            this.list = res.result
                        } else {
                            this.list.push(...res.result)
                        }

                        this.$refs.scrollView.finishRefresh()
                        this.$refs.scrollView.finishLoadMore()
                        this.pageNo += 1

                        if( res.result.length < this.pageSize ){
                            this.isFinished = true
                            this.$refs.scrollView.loadend()
                        }
                    }
                })
            },
            // 滚动触底事件 此时要加载数据
            $_onEndReached() {
                if (this.isFinished) {
                    return
                }

                this.getData()
            },
            // 刷新中事件 此时要刷新数据
            $_onRefresh() {
                this.isFinished = false
                this.pageNo = PAGENO

                this.getData(true)
            },
            // 获取社区USDT
            getNum(){
                this.$http.get('js/hsysSettings/consumeUsdtNum').then((res) => {
                    if( res.resultVo.success ){
                        this.num = res.resultVo.message
                    }
                })
            },
            // 获取详情
            getDetail(){
                this.$http.get('js/hPublicPlatoonLog/findPublicPlatoonNews', {
                    userId: this.userId
                }).then((res) => {
                    if( res.success ){
                        this.detail = res.result
                    }
                })
            },
            // 开启服务 社区
            openService(){
                if( !this.userinfo ){
                    this.showTips(this.loginTip)
                } else if( this.userinfo && !this.userinfo.lockPosition ){
                    this.showTips(this.haleLockTips)
                } else if( this.userinfo && !this.userinfo.publicPlatoon ){
                    this.openServiceDig()
                }
            },
            // 验证格式
            vlidateLockData(){

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
                            this.openCommunity()
                            this.password = ''
                        } else {
                            this.isCheckPassword = false
                            this.showTips(res.message)
                        }
                    })
                }

            },
            // 开启社区
            openCommunity(){
                this.$http.post('js/hPublicPlatoonLog/activationUsdt',{
                    userId: this.userId,
                    transPass: this.password
                }).then((res) => {
                    this.isCheckPassword = false
                    this.closeAll()
                    if( res.success ){
                        this.showTips(res.message)
                        this.refresh()
                    } else {
                        this.showTips(res.message)
                    }
                })
            },
            // 开启社区后刷新
            refresh(){
                if( this.opened ){
                    this.getDetail()
                    this.$refs.scrollView.triggerRefresh()
                } else {
                    // 设置最新的用户信息
                    this.setUserinfo({
                        ...this.userinfo,
                        publicPlatoon: 1
                    })

                    setTimeout(() => {
                        this.init()
                        this.$refs.scrollView.triggerRefresh()
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
            // 打开社区弹窗
            openServiceDig(){
                this.serviceDigVisible = true
            },
            // 关闭社区弹窗
            closeServiceDig(){
                this.serviceDigVisible = false
            },
            // 监听关闭社区弹窗事件
            serviceDigClose(){
                this.serviceDigVisible = false
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
            }
        }
    }
</script>

<style scoped>
    .group_identity{
        display: flex; align-items: center;
    }
    .group_level_pic{
        height: 0.18rem; margin-left: 0.1rem;
    }
    .group_level_pic001{
        width: 0.18rem;
        background: url("../static/images/icon/node_star001.png") no-repeat center center / cover;
    }
    .group_level_pic002{
        width: 0.42rem;
        background: url("../static/images/icon/node_star002.png") no-repeat center center / cover;
    }
    .group_level_pic003{
        width: 0.66rem;
        background: url("../static/images/icon/node_star003.png") no-repeat center center / cover;
    }
    .group_level_pic004{
        width: 0.9rem;
        background: url("../static/images/icon/node_star004.png") no-repeat center center / cover;
    }
    .group_level_pic005{
        width: 0.18rem;
        background: url("../static/images/icon/node_star005.png") no-repeat center center / cover;
    }
    .group_top{
        padding: .25rem 0 .35rem;
    }
    .group_top_txt1{
        font-size: .52rem;
        color: #333;
        line-height: .7rem;
        margin-top: 0.55rem;
    }
    .group_top_txt2{
        font-size: .26rem;
        color: #333;
        line-height: .6rem;
        margin-top: 0.24rem;
        font-weight: bold;
    }
    .PRODUCT_META_TXT2{
        color: #333;
        font-weight: bold;
    }
    .product_input{
        background: #fafafa;
        font-size: .26rem;
        height: 0.7rem;
        border-radius: .1rem;
        border: 1px solid #bfbfbf;
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0 .2rem;
        color: #333;
        text-align: left;
        position: relative;
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
    .group_metas{
        display: flex;
        margin-top: 0.24rem;
        text-align: center;
    }
    .group_meta{
        flex: 1;
    }
    .group_meta+.group_meta{
        border-left: 1px solid #ccc;
    }
    .group_meta_txt1{
        font-size: .2rem;
        color: #333;
        line-height: .4rem;
    }
    .group_meta_txt2{
        font-size: .2rem;
        color: #333;
        line-height: .3rem;
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
