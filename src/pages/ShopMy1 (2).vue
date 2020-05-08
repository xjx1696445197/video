<template>
    <div id="my" class="content_box f28">
        <!--商城头部 header中的fixed一定要删除掉-->
        <div class="HEADER_SHOP">
            <p class="HEADER_SHOP_TITLE">个人中心</p>
        </div>
        <div class="headerimg_name">
            <div class="img_box pada">
                <div class="img_cnt f0">
                </div>
                <router-link :to="{name:''}" class='head_img'>
                    <div class="img_box img_big1">
                        <div class="img_cnt f0 head_img_div_radius">
                            <!-- 用户头像，默认为微信头像，如果微信用户头像为空，则展示商城中用户的头像 -->
                            <img :onerror="errorUserPhoto" src='../static/images/default/default_headImg.png' class="img head_img_radius"
                            >
                        </div>
                    </div>
                </router-link>

            </div>
            <div class="pad_b5 bgfff border_b">
                <div class='pad_b5  yh_name'>{{nickName}}</div>
                <div class='pad_b5 yh_word'>账号： {{userName}}</div>
            </div>
            <div>

            </div>
        </div>

        <router-link :to="{name:'ShopOrderList',params:{type:1,index:0}}" class='bgfff pad_30 border_b table all'>
            <div class='title_view td f0'>
                <img class='title_image' src="../static/images/shop/icon_dd.png" style="vertical-align: middle;">
                <span class='title_text inblock f28 ver_mid'>我的订单</span>
            </div>
            <div class='td txt_right pad_l5 col4 pad_r10 f28 c999'>查看全部订单</div>
            <div class='p_iconb td f0' style="text-align: right">
                <img src='../static/images/shop/rigth.png'>
            </div>
        </router-link>
        <div class='pad_10 bgfff mar_b30'>
            <div class='table  jx_height'>
                <router-link :to="{name:'ShopOrderList',params:{type:2}}" class='td txt_center'>
                    <div class='p_icon orderNumBox'>
                        <img src='../static/images/shop/icon_dfk.png'>
                        <div class="orderNum" v-if="orderNum.pendingPaymentCount!=0">{{orderNum.pendingPaymentCount}}
                        </div>
                    </div>
                    <div class='mar_t8'>待付款</div>
                </router-link>
                <router-link :to="{name:'ShopOrderList',params:{type:3}}" class='td txt_center'>
                    <div class='p_icon orderNumBox'>
                        <img src='../static/images/shop/icon_dfh.png'>
                        <div class="orderNum" v-if="orderNum.shipmentPendingCount!=0">
                            {{orderNum.shipmentPendingCount}}
                        </div>
                    </div>
                    <div class='mar_t8'>待发货</div>
                </router-link>
                <router-link :to="{name:'ShopOrderList',params:{type:4}}" class='td txt_center'>
                    <div class='p_icon orderNumBox'>
                        <img src='../static/images/shop/icon_dsh.png'>
                        <div class="orderNum" v-if="orderNum.waitReceivingCount!=0">{{orderNum.waitReceivingCount}}
                        </div>
                    </div>
                    <div class='mar_t8'>待收货</div>

                </router-link>
                <router-link :to="{name:'Shoplistvaluate',params:{type:'5',index:1}}" class='td txt_center'>
                    <div class='p_icon orderNumBox'>
                        <img src='../static/images/shop/icon_pj.png'>
                        <div class="orderNum" v-if="orderNum.receivedCount!=0">{{orderNum.receivedCount}}</div>
                    </div>
                    <div class='mar_t8'>待评价</div>
                </router-link>
                <router-link :to="{name:'ShoporderListrefund',params:{type:'5'}}" class='td txt_center'>
                    <div class='p_icon orderNumBox'>
                        <img src='../static/images/shop/icon_sh.png'>
                        <div class="orderNum" v-if="orderNum.returnsCount!=0">{{orderNum.returnsCount}}</div>
                    </div>
                    <div class='mar_t8'>退换货</div>

                </router-link>
            </div>
        </div>

        <router-link :to="{name:'Shopwallet'}" class='bgfff border_b table all pad_30 '>
            <div class='title_view td f0'>
                <img class='title_image' src="../static/images/shop/icon_qb.png" style="vertical-align: middle;">
                <span class='title_text inblock f28 ver_mid'>我的钱包</span>
            </div>
            <div class='td txt_right pad_l5 col4 pad_r10 f28 c999'></div>
            <div class='p_iconb td f0' style="text-align: right">
                <img src='../static/images/shop/rigth.png'>
            </div>
            <!--<div class='bgfff  table padte all'>-->
                <!--<div class='title_view pad_10 f0' style="padding-left: 0;padding-right: 0">-->
                    <!--<img class='title_image' style="vertical-align: middle;">-->
                    <!--<span class='title_text inblock f28 ver_mid'></span>-->
                <!--</div>-->
                <!--<div class='p_iconb td f0'>-->
                    <!--<img src='../static/images/shop/rigth.png'>-->
                <!--</div>-->
            <!--</div>-->
        </router-link>
        <div class='pad_10 bgfff mar_b30'>
            <div class='table left_m jx_height'>
                <router-link :to="{name:'ShopIntegralrecord'}" class='td txt_center'>
                    <div>{{userData.credits|numFilter}}</div>
                    <div class='mar_t10'>积分</div>
                </router-link>
                <router-link :to="{name:'ShopCurrencybalance',params:{type:'1'}}" class='td txt_center'>
                    <div>{{userData.usdt}}</div>
                    <div class='mar_t10'>USDT</div>
                </router-link>
                <router-link :to="{name:'ShopCurrencybalance',params:{type:'2'}}" class='td txt_center'>
                    <div>{{userData.hale}}</div>
                    <div class='mar_t10'>HALE</div>
                </router-link>
            </div>
        </div>

        <!--我的优惠券-->
        <router-link :to="{name:'ShopMyCouponlist',params:{type:1}}" class='bgfff pad_30 table all' style="height: 1rem">
            <div class='title_view td f0'>
                <img class='title_image' src="../static/images/shop/coupon_icon.png" style="vertical-align: middle;">
                <span class='title_text inblock f28 ver_mid'>我的优惠券</span>
            </div>
            <div class='td txt_right pad_l5 col4 pad_r10 f28 c999'></div>
            <div class='p_iconb td f0' style="text-align: right">
                <img src='../static/images/shop/rigth.png'>
            </div>
        </router-link>


        <div class='pad_10 bgfff all txt_center clear txt_centertwo' style="margin-top: 0.3rem">
            <router-link :to="{name:'Shopmycollect',params:{type:1}}" class='pad_10 all L col4 mar_b5'>
                <div class='p_icon'>
                    <img src='../static/images/shop/shop_other_icon001.png'>
                </div>
                <div class='mar_t8 mar_15'>我的收藏</div>
            </router-link>
            <!--      <router-link :to="{name:'myCollect',params:{type:2}}" class='pad_10 all L col4 mar_b5'>-->
            <!--        <div class='p_icon'>-->
            <!--          <img src='../../assets/shopcollect.png'>-->
            <!--        </div>-->
            <!--        <div class='mar_t8'>店铺关注</div>-->
            <!--      </router-link>-->
            <router-link :to="{name:'ShopmyHistory'}" class='pad_10 all L col4 mar_b5'>
                <div class='p_icon'>
                    <img src='../static/images/shop/shop_other_icon002.png'>
                </div>
                <div class='mar_t8 mar_15'>我的足迹</div>
            </router-link>
            <router-link :to="{name:'ShopAddressList',params:{aId:'addlist'}}" class='pad_10 all L col4 mar_b5'>
                <div class='p_icon'>
                    <img src='../static/images/shop/shop_other_icon003.png'>
                </div>
                <div class='mar_t8 mar_15'>收货地址</div>
            </router-link>
            <router-link :to="{name:'ShopinvoiceTab',params:{type:3}}" class='pad_10 all L col4 mar_b5'>
                <div class='p_icon'>
                    <img src='../static/images/shop/shop_other_icon004.png'>
                </div>
                <div class='mar_t8 mar_15'>发票信息</div>
            </router-link>

        </div>

        <div class="go_fh"  @click="halehome">
            返回到 HALE TOKEN
        </div>
        <!--    <div class="Return_halle" @click="Returnhalle">返回halle</div>-->
    </div>

</template>

<script>
    import { mapGetters } from 'vuex'
    import Vue from 'vue'
    import {InfiniteScroll} from 'mint-ui'

    Vue.use(InfiniteScroll)
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import userPhoto from '@/static/images/shop/mrbj.png'

    export default {
        data() {
            return {
                errorUserPhoto: 'this.src="' + userPhoto + '"',
                userData: {},//用户信息
                productList: [],//商品推荐
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading: false,
                loadTag: false,//是否翻页标志
                loadTxt: '',
                orderNum: {
                    waitReceivingCount: 0,
                    shipmentPendingCount: 0,
                    pendingPaymentCount: 0,
                    returnsCount: 0,
                    receivedCount: 0
                },
                curPage: 1,//当前页码
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {

            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this
            that.isLogin()
            //获取订单数量orderNum
            var param = {
                customerId:  that.$store.state.userinfo.userId,
                customerToken:that.$store.state.userinfo.token,
                type: 0
            }
            jsonAjax.post(urlUtil.getApiUrl('orderNum'), param, function (result) {
                if (result.returnCode == 1) {
                    that.orderNum = result.resultData
                }
            })
            jsonAjax.get(urlUtil.getApiUrl('my_wallet'), {userId: that.$store.state.userinfo.userId}, function (result) {
                that.userData = result.result
            })
            that.doQuery()


        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            userName(){
                return this.userinfo.userName
            },
            nickName(){
                return this.userinfo.nickName
            }
        },
        filters: {
            numFilter (value) {
                let realVal = ''
                if (value) {
                    // 截取当前数据到小数点后2位
                    let tempVal = parseFloat(value).toFixed(3)
                    realVal = tempVal.substring(0, tempVal.length - 1)
                } else {
                    realVal = '0'
                }
                return realVal
            }
        },

        methods: {
            ...mapGetters(['getUserinfo']),
            // Returnhalle:function () {
            //   console.log(1)
            //   sessionStorage.setItem("ShoppingMall", "0");
            // },
            // 检测用户是否登录
            isLogin(){
                if( this.userinfo ){
                    // 获取登录时的资产列表
                    this.getAccountList()

                } else {
                    console.log('123')
                    // 没有登陆跳转到hale主页面
                    this.$router.replace({
                        path: '/asset'
                    })
                    return

                }
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
            doQuery: function () {
                var that = this
                var param = {currentPage: "1",
                    customerId: that.$store.state.userinfo.userId
                }
                jsonAjax.post(urlUtil.getApiUrl('user_center'), param, function (result) {
                    if (result.returnCode == 1) {
                        if (that.curPage == 1) {
                            // that.userData = result.resultData.list
                            //获取微信登录用户头像
                            var headImgUrl = localStorage.getItem('headImgUrl')
                            if (headImgUrl) {
                                that.userData.headImgUrl = headImgUrl
                            }
                        }
                        if (result.resultData.list.recommendProductlist) {
                            var allProducts = []
                            allProducts = allProducts.concat(that.productList, result.resultData.list.recommendProductlist)
                            that.productList = allProducts
                            that.curPage++
                            that.loading = false
                            that.loadTag = true
                        } else {
                            if (that.curPage == 1) {
                                that.loadTxt = ''
                            } else {
                                that.loadTxt = '加载完成！'
                            }
                            that.loadTag = false
                        }
                    }
                })

            },
            halehome:function(){
                this.$router.replace({
                    path: '/asset'
                })
            },
            loadMore() {
                if (this.loadTag) {
                    this.loadTxt = '正在加载...'
                    this.loading = true
                    this.doQuery()
                }
            },


        }

    }
</script>

<style scoped>
    .orderNumBox{
        position: relative;
    }
    .orderNum{
        font-size: 0.24rem;
        position: absolute;
        right: -.2rem;
        top: -.1rem;
        color: white!important;
        background: #e4811d;
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        text-align: center;
        line-height: .4rem;
    }
    .mar_15{
        margin-top: 12px!important;
    }
    .head_top {
        width: 100%;
        height: 270px;
        position: relative;
    }
    .pada{ padding-bottom: 25%}
    .head_top .img {
        width: 100%;
        height: 100%;
    }

    .head_img {
        position: absolute;
        width:85%;
        /*border-radius: 85px;*/
        overflow: hidden;
        left:15%;
        top: 15%;
    }

    .head_img_div_radius{
        border-radius: 50%;
        overflow: hidden;
        background: #fff;
        /*border: 1px solid #dcdcdc;*/
    }

    .head_img_radius{
        border-radius: 50%;
    }

    .head_name{  position: absolute; left: 0; bottom: 0px; right: 0}

    .p_icon {
        line-height: 32px;
        width: 32px;
        height: 32px;
        margin: 0 auto;
        font-size: 0;
    }

    .p_icon img {
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
    }

    .p_icona {
        width: 66px;
    }

    .p_icona img {
        width: 66px;
        height: 66px;
    }

    .p_iconb {
        width: 28px;
    }

    .p_iconb img {
        width:18px;
        height: 18px;
    }

    .btn_exit {
        background: #6abc3c;
        padding: 8px 15px;
        border-radius: 40px;
        color: #fff;
    }

    .btn_exit img {
        width: 40px;
        height: 40px;
    }

    .title_view{
        background: #ffffff;
        /*height: 80px;*/
    }
    .title_image{
        width: 20px;
    }
    .title_text{
        position: relative;
        margin-left: 10px;
    }
    .mar_t8{ margin-top: 8px;}
    .orderNumBox .orderNum{
        color: #e4811d;
        /*border-color: #fff;*/
        border:1px solid #fff;
    }
    .headerimg_name{
        margin-top: .88rem;
        display: flex;
        justify-content: space-between;
        background: white;
        border-bottom: .3rem solid #F5F5F5;
    }
    .headerimg_name>div{
        width: 28%;
    }
    .headerimg_name>div:nth-of-type(3){
        text-align: right;
        padding-right: 10px;
    }
    .headerimg_name>div:nth-of-type(2){
        width: 40%;
    }
    .headerimg_name>div:nth-of-type(3) img{
        width: .4rem;
        margin-top: .8rem;
    }
    .headerimg_name>div:nth-of-type(1){
        width: 20%;
    }
    .yh_name{
        font-weight: bold;
        font-size: .4rem;
        margin-top: .4rem;
        white-space: nowrap;
    }
    .yh_word{
        color: #AAAAAA;
        font-size: .26rem;
        white-space: nowrap;
    }

    .txt_centertwo {
        display: flex;
        height: 1.8rem;
    }
    .txt_centertwo img{
        margin-top: .2rem;
    }
    .go_fh {
        margin-top: .4rem;
        width: 90%;
        background: #E4811D;
        color: white;
        height: .8rem;
        margin-left: 5%;
        text-align: center;
        line-height: .8rem;
        border-radius: .1rem;
        margin-bottom: 0.5rem;
    }

    .mar_t8{
        font-size: .26rem;
    }
    audio, canvas, video, img{
        display: inline-block;
    }
    .jx_height{
        height: 1.8rem;
    }
</style>
