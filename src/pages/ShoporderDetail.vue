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
           id="Customerservice" onclick='easemobim.bind({configId: "086dd8df-005d-40b2-8411-dde5091d1ef9"})'
           style="position:fixed;z-index: 999999;bottom: 1.3rem;right: .1rem;border-radius: 50%;
           width: 1.2rem;height: 1.2rem;touch-action: none;">
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
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                orderId:this.$route.params.orderId,
                orderData:{},
                isReturn:this.$route.params.isReturn,
                uploadImgRoot: urlUtil.uploadImgRoot,
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
            // console.log(this.isReturn)
           // localStorage.setItem("tabxindex",this.tabsIndex)
            // alert(localStorage.getItem("tabxindex"))
            if (this.isReturn==undefined){
                this.isReturn=localStorage.getItem("isReturn")
            }else {
                localStorage.setItem("isReturn",this.isReturn);

            }
            var that=this;
            jsonAjax.post(urlUtil.getApiUrl("order_detail"), {ordersId:that.orderId,customerId: that.$store.state.loginInfo.customerId,type:0}, function (result) {
                if (result.returnCode == 1) {
                    var order_data = result.resultData.ordersList;
                    for (var j = 0; j < order_data.productList.length; j++) {
                        var str = "";
                        for (var key in order_data.productList[j].specificationNames) {
                            str += order_data.productList[j].specificationNames[key] + " ";
                        }
                        order_data.productList[j].specificationNames = str;
                    }
                    that.orderData=order_data;
                }

            })
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
            filters: {
            formatDate: function (value) {
                let date = new Date(value)
                let y = date.getFullYear()
                let MM = date.getMonth() + 1
                MM = MM < 10 ? ('0' + MM) : MM
                let d = date.getDate()
                d = d < 10 ? ('0' + d) : d
                let h = date.getHours()
                h = h < 10 ? ('0' + h) : h
                let m = date.getMinutes()
                m = m < 10 ? ('0' + m) : m
                let s = date.getSeconds()
                s = s < 10 ? ('0' + s) : s
                return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
            }
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            move(){
                if(this.flags){
                    var touch ;
                    if(event.touches){
                        touch = event.touches[0];
                    }else {
                        touch = event;
                    }
                    this.nx = touch.clientX - this.position.x;
                    this.ny = touch.clientY - this.position.y;
                    this.xPum = this.dx+this.nx;
                    this.yPum = this.dy+this.ny;
                    if (touch.clientX>this.width-20){

                    }else if (touch.clientX<0){

                    }else{
                        Customerservice.style.left = this.xPum+"px";
                    }
                    if (touch.clientY>this.height-30){

                    }else if (touch.clientY<0){

                    }else{
                        Customerservice.style.top = this.yPum +"px";
                    }

                    //阻止页面的滑动默认事件
                    document.addEventListener("touchmove",function(){ // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
                        // event.preventDefault();//jq 阻止冒泡事件
                        event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
                    },false);
                }
            },
//鼠标释放时候的函数
            end(){
                this.flags = false;
            },
            down(){
                this.flags = true;
                var touch;
                if(event.touches){
                    touch = event.touches[0];
                }else {
                    touch = event;
                }
                this.position.x = touch.clientX;
                this.position.y = touch.clientY;
                this.dx = Customerservice.offsetLeft;
                this.dy = Customerservice.offsetTop;
            },
            onCopy (e) {
                Toast('复制成功')
            },
            onError (e) {
                Toast("复制失败")
            },
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            orderCancel:function () {
                //订单取消
                var that = this;
                MessageBox.confirm('确认取消?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("order_cancel"), {ordersId: that.orderId,customerId: that.$store.state.loginInfo.customerId}, function (result) {
                        if (result.returnCode == 1) {
                            that.orderData.ordersState = 6;
                        }
                    })
                })
            },
            orderReceive:function () {
                //确认收货
                var that = this;
                MessageBox.confirm('确认收货?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("order_receive"), {ordersId: that.orderId,customerId: that.$store.state.loginInfo.customerId,loginName: that.$store.state.loginInfo.loginName}, function (result) {
                        if (result.returnCode == 1) {
                            that.orderData.ordersState = 9;
                        }
                    })
                })
            },
            orderPay:function (item) {
                //去支付orderPay,orderSn:
                var that=this;
                var oid=item.ordersId;
                var order_sn=item.ordersNo;
                that.$router.push({name:'ShopOrderPay',query:{orderId:oid,orderSn:order_sn,orderType:0}});
                // var order_pay_url = "/orderPay/customerOrderPay"+"?orderId="+item.ordersId+"&orderSn="+item.ordersNo+"&orderType=0";
                // window.location.href = order_pay_url ;
            }
        }
    }
</script>

<style scoped>
    .addr_w1 {
        width: 25px;
    }

    .addr_w1 .img {
        width: 25px;
        height: 25px;
    }

    .addr_w2 {
        width: 18px;
    }

    .addr_w2 .img {
        width: 18px;
        height: 18px;
    }

    .addr_h1 {
        width: 100%;
    }

    .shop_img {
        width: 25px;
        height: 25px;
    }

    .p_img_view {
        width: 82px;
    }

    .h1 {
        height: 3em;
    }

    .p_img {
        width: 80px;
        height: 80px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
    }

    .p_img .img {
        width: 100%;
        height: 100%;
    }

    .checkbox {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }

    .wrem7 {
        width: 7em;
    }

    .input1 {
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        padding: 4px 10px;
    }

    .jinbi {
        width: 56px;
    }

    .bot_h {
        height:0.9rem;
    }

    .oprate_bottom {
        height: 0.9rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        border-top: 1px solid #f2f2f2;
    }

    .oprate_bottom .w2 {
        width: 16em;
    }

    .checkbox {
        width: 46px;
        height: 46px;
    }

    .oprate_btn1 {
        background: #ff0036;
        color: #fff;
        display: inline-block;
        border-radius: 4px;
        padding: 2px 10px;
    }
.m_t{
    margin-top: .88rem;
}
    audio, canvas, video, img{
        display: inline-block;
    }
    .com_obtn{
        width: 2rem;
        border-radius: .4rem;
    }
    .com_obtn{
        background: #e4811d;
        width: 2rem;
        border-radius: .4rem;
    }
    .com_obtn.white{
        background: white;
        color: #e4811d;
        border: 1px solid #e4811d;
    }
</style>
