<template>
    <div id="couponListselect" class="content_box" style="background: #f5f5f5;">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">优惠券选择</p>
        </div>

        <div class='pad_20' style="margin-top: 0.4rem;margin-bottom:0.8rem;">
            <div class='couplist mar_b20' v-for="(item,index) in couponList" v-on:click='couponSelect(index)'>
                <div class="newCoupon">
                    <div class="newCoupon_wrapper clearfix"
                         :class="[(item.useStatus == 1 && item.status==1) || (item.useStatus == 0 && item.status==2) ? 'active' : '' ]"
                         v-on:click='receiveCoupon(index)'
                    >
                        <div class="fl">
                            <div class="newCoupon_txt1">{{item.useType==1?'全场优惠券':item.level1Name+item.sortName+'优惠券'}}<span class="newCoupon_txt2">（{{item.type == 1 ? '积分':'现金'}}）</span></div>
                            <div class="newCoupon_txt3">秒杀、团购、促销等活动商品不可用</div>
                            <div class="newCoupon_txt4">{{item.beginTime | dataFormat('yyyy-MM-dd hh:mm')}} - {{item.expirationTime | dataFormat('yyyy-MM-dd hh:mm')}}</div>
                            <div class="newCoupon_txt3 mt50">满 {{item.discountCouponLowAmount}}{{item.type == 1 ? '积分':'现金'}} 减 {{item.discountCouponAmount}}{{item.type == 1 ? '积分':'现金'}}</div>
                        </div>
                        <div class="fr mt20">
                            <div class="newCoupon_txt5 tcenter"
                                 v-if="item.type == 1"
                            >{{item.discountCouponAmount}}<span class="newCoupon_txt6 pl10" style="font-size:0.26rem">积分</span></div>
                            <div class="newCoupon_txt6 tcenter"
                                 v-if="item.type == 0"
                                 style="font-size:0.26rem;line-height: 0.5rem"
                            >￥<span class="newCoupon_txt5 pl10">{{item.discountCouponAmount}}</span></div>
                            <div class="newCoupon_txt7 tcenter">优惠券</div>
                            <!--<router-link :to="{name:'ShopIndex'}" class='inblock newCoupon_txt8 tcenter mt50' v-if="useStatus == 0 && status==1">去使用</router-link>-->
                            <div class="newCoupon_txt8 tcenter mt50">立即使用</div>
                            <!--<div class="newCoupon_txt8 tcenter mt50" v-if="useStatus == 1 && status==1">已使用</div>-->
                        </div>
                    </div>
                </div>
                <!--<div class='onetop pad_20 table all'>-->
                    <!--<div class='td cfff' v-if="item.type==1">积分优惠券</div>-->
                    <!--<div class='td cfff' v-else>现金优惠券</div>-->
                    <!--<div class='td cfff txt_right'>-->
                        <!--<span class='f28'>{{item.discountCouponAmount}}元</span>-->
                        <!--<span class='f24 pad_l5'>优惠券</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class='twotop pad_20 c666 f24'>-->
                    <!--<div class='mar_b10' v-if="item.discountCouponLowAmount!=null">1、满<span class="man_text">{{item.discountCouponLowAmount}}</span>减<span class="jian_text">{{item.discountCouponAmount}}</span></div>-->
                    <!--<div class='mar_b10' v-else>1、无门槛使用</div>-->
                    <!--<div class='mar_b10'>2、有效期至：{{item.yxtime}}</div>-->
                <!--</div>-->
            </div>
        </div>

        <div class="txt_center coup_div_no" v-on:click='couponSelect(-1)' style="border-top: 0.01rem solid #eee">
            <!--<img src="../../assets/checkbox_ed.png" class='ver_mid checkbox'>-->
            <span class='coup_no f28'>不使用优惠券</span>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button} from 'mint-ui';
    Vue.component(Button.name, Button);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        data () {
            return {
                couponList:[],//可用优惠券列表
                uploadImgRoot: urlUtil.uploadImgRoot,
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {

            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
//      that.couponList=that.$store.state.placeCoupon;
            that.couponList=JSON.parse(localStorage.getItem("placeCoupon"));
            let coupListTemp = that.couponList;
            for (var i = 0; i < coupListTemp.length; i++) {
                var startt = urlUtil.exchange_time(coupListTemp[i].beginTime);
                var endt = urlUtil.exchange_time(coupListTemp[i].expirationTime);
                coupListTemp[i].yxtime = endt.riqi;
            }
            that.couponList=coupListTemp;
        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            couponSelect:function (index) {
                //选择优惠券
                if(index==-1)
                {
                    this.$store.state.placeOrder.discount=false;
                    var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                    orderGlobal.discount=false;
                    localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))
                }
                else{
                    this.$store.state.placeOrder.discount=this.couponList[index];
                    var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                    orderGlobal.discount=this.couponList[index];
                    localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))
                }
                this.$router.back(-1);
            }

        }

    }
</script>

<style scoped>
    .newCoupon{
        /*padding: 0 0.3rem;*/
        /*padding-bottom: 0.3rem;*/

    }
    .newCoupon_wrapper{
        background: url('../static/images/shop/coupon_bg.png')no-repeat center center / cover;
        /*width: 6.9rem;*/
        height: 2.8rem;
        padding: 0.3rem;
    }
    /*.newCoupon_wrapper.active{*/
    /*background: url('../static/images/shop/give_icon.png')no-repeat center center / cover;*/
    /*width: 6.9rem;*/
    /*height: 2.5rem;*/
    /*}*/
    /*.newCoupon_wrapper.active .newCoupon_txt1{*/
    /*color: #aaa;*/
    /*}*/
    .newCoupon_wrapper.active .newCoupon_txt5{
        color: #aaa;
    }
    .newCoupon_wrapper.active .newCoupon_txt6{
        color: #aaa;
    }
    .newCoupon_wrapper.active .newCoupon_txt7{
        color: #aaa;
    }
    /*.newCoupon_wrapper.active .newCoupon_txt8{*/
    /*color: #aaa;*/
    /*}*/
    .newCoupon_wrapper.active .newCoupon_txt8{
        background: #eee;
        color: #aaa;
        border-radius: 50rem;
    }

    .newCoupon_txt1{
        font-size: 0.3rem;
        line-height: 0.5rem;
        color: #333;
    }
    .newCoupon_txt2{
        font-size: 0.22rem;
        line-height: 0.5rem;
        color: #333;
    }
    .newCoupon_txt3{
        font-size: 0.26rem;
        line-height: 0.45rem;
        color: #333;
    }
    .newCoupon_txt4{
        font-size: 0.2rem;
        line-height: 0.35rem;
        color: #666;
    }
    .newCoupon_txt5{
        font-size: 0.5rem;
        line-height: 0.6rem;
        color: #e4811d;
    }
    .newCoupon_txt6{
        color: #e4811d;
    }
    .newCoupon_txt7{
        font-size: 0.22rem;
        line-height: 0.4rem;
        color: #e4811d;
    }
    .newCoupon_txt8{
        font-size: 0.22rem;
        line-height: 0.5rem;
        background: #e4811d;
        color: #fff;
        border-radius: 50rem;
        width: 1.5rem;
        height: 0.5rem;
    }
    .couplist {
        border-radius: 4px;
        overflow: hidden;
    }

    .couplist .onetop {
        background: #ff6666;
    }

    .couplist .twotop {
        background: #fff;
    }

    .couplist .old {
        position: relative;
    }

    .couplist .old .onetop {
        background: #a7a7a7;
    }

    .couplist .old .icon {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 96px;
        height: 96px;
        z-index: 2;
    }

    .couplist .old .icon .img {
        width: 100%;
        height: 100%;
    }

    .checkbox {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }

    .man_text{
        color: #00cc00;
        font-size: 12px;
        font-weight: bolder;
    }

    .jian_text{
        color: #ff0036;
        font-size: 20px;
        font-weight: bolder;
    }
    .coup_div_no{
        background-color: #fff;
        height: 1rem;
        line-height: 1rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 1;
    }

    .coup_no{
        color: #E4811D;
    }

</style>
