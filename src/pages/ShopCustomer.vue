<template>
    <div id="orderDetail" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">订单详情</p>
        </div>

        <!--订单状态  -->
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==4&orderData.settlementStatus==1&orderData.isReturn==0">
            <div class='czt mar_b5'>待收货</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==0&orderData.settlementStatus==0&orderData.isReturn==0">
            <div class='czt mar_b5'>待付款</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState<4&orderData.settlementStatus==1&orderData.isReturn==0">
            <div class='czt mar_b5'>待发货</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==6&orderData.settlementStatus==0&orderData.isReturn==0">
            <div class='czt mar_b5'>已取消</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==5&orderData.settlementStatus==1&orderData.isReturn==0">
            <div class='czt mar_b5'>待评价</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==9&orderData.settlementStatus==1&orderData.isReturn==0">
            <div class='czt mar_b5'>已完成</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==4&orderData.settlementStatus==1&orderData.isReturn==1">
            <div class='czt mar_b5'>已售后</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==0&orderData.settlementStatus==0&orderData.isReturn==1">
            <div class='czt mar_b5'>已售后</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState<4&orderData.settlementStatus==1&orderData.isReturn==1">
            <div class='czt mar_b5'>已售后</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==6&orderData.settlementStatus==0&orderData.isReturn==1">
            <div class='czt mar_b5'>已售后</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==5&orderData.settlementStatus==1&orderData.isReturn==1">
            <div class='czt mar_b5'>已售后</div>
        </div>
        <div class='bgfff m_t pad_10 border_b' v-if="orderData.ordersState==9&orderData.settlementStatus==1&orderData.isReturn==1">
            <div class='czt mar_b5'>已售后</div>
        </div>
        <!--收货地址  -->
        <div class='border_b pad_10 all table bgfff mar_b10'>
            <div class='addr_w1 f0 td'>
                <img class='img' src='../static/images/shop/order_confirm_04.png'></img>
            </div>
            <div class='pad_l10 pad_r10 td'>
                <div class='clearfix mar_b5'>
                    <div class='L f28'>{{orderData.consignee}}</div>
                    <div class='L c666 f28' style='margin-left:15px'>{{orderData.mobilePhone}}</div>
                </div>
                <div class='c999'>{{orderData.regionLocationName}}{{orderData.cityName}}{{orderData.areaCountyName}}{{orderData.address}}</div>
            </div>
        </div>
        <!--购买的商品  -->
        <!--<router-link to="" class='pad_10 block bgfff border_b'>-->
        <!--<img class='shop_img ver_mid' src='../static/images/shop/shop.png'>-->
        <!--<span class='inblock mar_l5'>{{orderData.shopName}}</span>-->
        <!--</router-link>-->
        <div class='bgfff' v-for="(item,index) in orderData.productList">
            <div class='pad_10 table all'>
                <div class='td p_img_view'>
                    <div class='p_img'>
                        <img class='img' :onerror="errorUserPhoto" :src='sourceUrlShop+item.logoImage'>
                    </div>
                </div>
                <div class='td pad_l10'>
                    <router-link :to="{name:'ShopProductDetail',params:{pId:item.productId,shopId:item.shopInfoId}}" class='txt_two h1'>{{item.productFullName}}</router-link>
                    <div class='c999 f28'>规格：{{item.specificationNames}}</div>
                    <div class='clear'>
                        <div class='L czt pad_t5 f28'><span class="pr10">￥{{item.salesPrice}}</span> | <span class="pl10">{{item.salesCredits}}</span> 积分</div>
                        <div class='R f28'>x{{item.count}}</div>
                    </div>
                </div>
            </div>
        </div>

        <!--订单信息  -->
        <div class='mar_t10 bgfff pad_5 f28 border_b'>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>商品总价</div>
                <div class='td txt_right'><span class="pr10">￥{{orderData.totalAmount}}</span> | <span class="pl10">{{orderData.totalCredits}}</span> 积分</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>运费</div>
                <div class='td txt_right'><span class="pr10">￥{{orderData.freight}}</span> | <span class="pl10">{{orderData.creditsFreight}}</span> 积分</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>优惠券抵扣</div>
                <div class='td txt_right' v-if="orderData.orderCouponAmount!=null">{{orderData.payMode == 11 ? '-'+orderData.orderCouponAmount+' 积分' :'-￥'+orderData.orderCouponAmount}}</div>

                <div class='td txt_right' v-if="orderData.orderCouponAmount==null">-￥0</div>
            </div>
            <!--<div class='table pad_5 all c999'>-->
            <!--<div class='td wrem7'>积分抵扣</div>-->
            <!--<div class='td txt_right'>-{{orderData.userCoin}}</div>-->
            <!--</div>-->
        </div>
        <div class='bgfff pad_10 table all mar_b10'>
            <div class='td wrem7'>订单总价</div>
            <div class='td txt_right czt'><span class="pr10">￥{{orderData.finalAmount}}</span> | <span class="pl10">{{orderData.finalCredits}}</span> 积分</div>
        </div>

        <div class='pad_5 bgfff f28 c666 mar_b10'>
            <div class='table pad_5 all c999' v-if="orderData.settlementStatus">
                <div class='td wrem7'>支付方式</div>
                <div class='td txt_right'>{{orderData.payMode == 11 ? '积分支付' :'现金支付'}}</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>订单编号</div>
                <div class='td txt_right' style="width: 3rem">{{orderData.ordersNo}}</div>
                <span class="copy-btn" v-clipboard:copy="orderData.ordersNo" v-clipboard:success="onCopy" v-clipboard:error="onError" style="color:#e4811d;display: inline-block;width: 3rem;text-align: right;">复制去咨询</span>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>创建时间</div>
                <div class='td txt_right'>{{orderData.createTime}}</div>
            </div>
            <div class='table pad_5 all c999' v-if="orderData.settlementStatus">
                <div class='td wrem7'>支付时间</div>
                <div class='td txt_right'>{{orderData.operatorTime}}</div>
            </div>
            <div class='table pad_5 all c999' v-if="orderData.createDate!==null">
                <div class='td wrem7'>发货时间</div>
                <div class='td txt_right'>{{orderData.createDate|formatDate}}</div>
            </div>
        </div>

        <div class='pad_5 bgfff f28 c666 mar_b10' v-if="orderData.invoiceType==2">
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>发票抬头</div>
                <div class='td txt_right'>{{orderData.companyNameForInvoice}}</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>统一社会信用代码</div>
                <div class='td txt_right'>{{orderData.taxpayerNumber}}</div>
            </div>
        </div>

        <div class='pad_5 bgfff f28 c666 mar_b10' v-if="orderData.invoiceType==3">
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>发票抬头</div>
                <div class='td txt_right'>{{orderData.companyNameForInvoice}}</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>统一社会信用代码</div>
                <div class='td txt_right'>{{orderData.taxpayerNumber}}</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>地址</div>
                <div class='td txt_right'>{{orderData.addressForInvoice}}</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>电话</div>
                <div class='td txt_right'>{{orderData.phoneForInvoice}}</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>开户行</div>
                <div class='td txt_right'>{{orderData.openingBank}}</div>
            </div>
            <div class='table pad_5 all c999'>
                <div class='td wrem7'>账号</div>
                <div class='td txt_right'>{{orderData.bankAccountNumber}}</div>
            </div>
        </div>
        <!--订单其他信息  -->
        <div class='bot_h'></div>

        <!--总结  -->
        <div class='oprate_bottom bgfff border_b f28 txt_right' v-if="orderData.ordersState!=6">
            <div class='table h100 pad_r10 pad_l10 all'>
                <div class='td'>
                    <router-link :to="{name:'ShoporderLogistics',params:{orderId:orderData.ordersId}}" class='com_obtn white inblock mar_l5' v-if="orderData.ordersState>3&orderData.settlementStatus==1">查看物流</router-link>
                    <div class='com_obtn white inblock mar_l5' v-if="orderData.ordersState==0&orderData.settlementStatus==0" v-on:click='orderCancel'>取消订单</div>
                    <!-- <div class='com_btn2 mar_l5' v-if="orderData.ordersState==6&orderData.settlementStatus==1" v-on:click='delete_order'>删除订单</div>  -->
                    <div class='com_obtn mar_l5 inblock' v-if="orderData.ordersState==4&orderData.settlementStatus==1&orderData.isReturn==0" v-on:click='orderReceive'>确认收货</div>
                    <div class='com_obtn mar_l5 inblock' v-if="orderData.ordersState==0&orderData.settlementStatus==0&orderData.isReturn==0" v-on:click="orderPay(orderData)">去支付</div>
                    <!--<router-link :to="{name:'customerOrderPay',query:{orderId:orderData.ordersId,orderSn:orderData.ordersNo,orderType:2}}" class='com_obtn mar_l5 inblock' v-if="orderData.ordersState==0&orderData.settlementStatus==0">去支付</router-link>-->
                    <router-link :to="{name:'ShoporderEvaluate',params:{orderId:orderData.ordersId,type:1}}" class='com_obtn mar_l5 inblock' v-if="orderData.ordersState==5&orderData.settlementStatus==1&orderData.isReturn==0">去评价</router-link>

                </div>
            </div>
        </div>
        <a href='javascript:;'
           @mousedown="down" @touchstart="down"
           @mousemove="move" @touchmove="move"
           @mouseup="end" @touchend="end"
           id="Customerservice" onclick='easemobim.bind({configId: "086dd8df-005d-40b2-8411-dde5091d1ef9"})' style="position:fixed;z-index: 999999;bottom: 1.3rem;right: .1rem;border-radius: 50%;width: 1.2rem;height: 1.2rem;touch-action: none;">
            <img style="width: 1.2rem" src="../static/images/shop/icon_kftwo.png">
        </a>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,MessageBox,Toast } from 'mint-ui';
    Vue.component(Button.name, Button,Toast);
    import { sourceUrlShop } from "@/config";
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import { mapGetters } from 'vuex'
    import userPhoto from '@/static/images/shop/mrbj.png';




    export default {
        components:{},
        data () {
            return {
                flags: false,
                tabsIndex:this.$route.params.tabxIndex,
                position: { x: 0, y: 0 },
                nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {

        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userName(){
                return this.userinfo.userName
            },
            token(){
                return this.userinfo.token
            }
        },
        mounted() {
            var that=this
            console.log(this.userName)
            window.easemobim = window.easemobim || {};
            easemobim.config = {
                configId: '086dd8df-005d-40b2-8411-dde5091d1ef9',
                buttonText: '联系客服',
                dialogWidth: '460px',
                dialogHeight: '550px',
                dialogPosition: { x: '10px', y: '10px' },
                user: {
                    username:this.userName,
                    password: '123',

                },
                visitor: {
                    trueName: this.userName,
                    userNickname: this.userName
                }
            }
        },

        methods: {

            ...mapGetters(['getUserinfo']),


        }
    }
</script>

<style scoped>

</style>
