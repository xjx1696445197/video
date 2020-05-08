<template>
    <div id="myCouponlist" class="content_box">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">我的优惠券</p>
        </div>


        <div class='top_tab border_b pad_l20 pad_r20'>
            <div class='table h100 txt_center all'>
                <div class='td border_b2 f28' :class='tabIndex==0?"cur":""' v-on:click='tabClick(0)'>未使用</div>
                <!-- <div class='td border_b2'>已使用</div> -->
                <div class='td border_b2 f28' :class='tabIndex==1?"cur":""' v-on:click='tabClick(1)'>已过期</div>
                <div class='td border_b2 f28' :class='tabIndex==2?"cur":""' v-on:click='tabClick(2)'>已使用</div>
            </div>
        </div>
        <div class='top_tabh'></div>
        <div class='pad_20 txt_center' v-if="coupList.length<1">
            <span class='inblock f28'>暂无相关信息~</span>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class='pad_20' style="padding-bottom: 0">
                <div class='couplist' :class='tabIndex!=0?"old":""' v-for="(item,index) in coupList">
                    <div class="newCoupon">
                        <div class="newCoupon_wrapper clearfix"
                             :class="[(useStatus == 1 && status==1) || (useStatus == 0 && status==2) ? 'active' : '' ]"
                             v-on:click='receiveCoupon(index)'
                        >
                            <div class="fl">
                                <div class="newCoupon_txt1">{{item.useType == 1 ? '全场优惠券' :item.level1Name+item.sortName+'优惠券' }}<span class="newCoupon_txt2">（{{item.type == 1 ? '积分':'现金'}}）</span></div>
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
                                <div class="newCoupon_txt8 tcenter mt50" v-if="useStatus == 0 && status==2">已过期</div>
                                <div class="newCoupon_txt8 tcenter mt50" v-if="useStatus == 1 && status==1">已使用</div>
                            </div>
                        </div>
                    </div>
                    <!--<div class='onetop pad_20 table all'>-->
                        <!--<div class='td cfff f28'  v-if="item.type==1">积分优惠券</div>-->
                        <!--<div class='td cfff f28' v-else>现金优惠券</div>-->

                        <!--<div class='td cfff txt_right'>-->
                            <!--<span class='f28'>{{item.discountCouponAmount}}元</span>-->
                            <!--<span class='f24 pad_l10'>优惠券</span>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class='twotop pad_20 c666 f24'>-->
                        <!--<div class='mar_b10' v-if="item.discountCouponLowAmount!=null">1、满<span class="man_text">{{item.discountCouponLowAmount}}</span>减<span class="jian_text">{{item.discountCouponAmount}}</span></div>-->
                        <!--<div class='mar_b10' v-if="item.discountCouponLowAmount==null">1、无门槛使用</div>-->
                        <!--<div class='mar_b10'>2、有效期至：{{item.yxtime}}</div>-->
                    <!--</div>-->
                    <!--<div class='icon f0' v-if="tabIndex==1">-->
                        <!--<img src='../static/images/shop/ygq_03.png' class='img'>-->
                    <!--</div>-->
                    <!--<div class='icon f0' v-if="tabIndex==2">-->
                        <!--<img src='../static/images/shop/ysy.png' class='img'>-->
                    <!--</div>-->
                </div>
                <div v-if="tabIndex==1" class='couplist old' v-for="(item,index) in oldCouplist">
                    <div class='onetop pad_20 table all'>
                        <div class='td cfff f28' v-if="item.type==1">积分优惠券</div>
                        <div class='td cfff f28' v-else>现金优惠券</div>
                        <div class='td cfff txt_right'>
                            <span class='f28'>{{item.discountCouponAmount}}元</span>
                            <span class='f24 pad_l10'>优惠券</span>
                        </div>
                    </div>
                    <div class='twotop pad_20 c666 f24'>
                        <div class='mar_b10' v-if="item.discountCouponLowAmount!=null">1、满<span>{{item.discountCouponLowAmount}}</span>减<span>{{item.discountCouponAmount}}</span></div>
                        <div class='mar_b10' v-if="item.discountCouponLowAmount==null">1、无门槛使用</div>
                        <div class='mar_b10'>2、有效期至：{{item.yxtime}}</div>
                    </div>
                    <div class='icon f0'>
                        <img src='../static/images/shop/ygq_03.png' class='img'>
                    </div>
                </div>

            </div>
            <div class="pad_20 txt_center" style="padding-top: 0">{{loadTxt}}</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,InfiniteScroll} from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.use(InfiniteScroll);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        data () {
            return {
                tabIndex:0,
                coupList:[],
                oldCouplist:[],
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading:false,
                loadTag:false,//是否翻页标志
                loadTxt:"",
                curPage:1,//当前页码
                useStatus:0,
                status:1
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            that.doQuery();

        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            tabClick:function (index) {
                if(index!=this.tab_index){
                    this.tabIndex=index;
                    this.curPage=1;
                    this.loadTag=false;
                    this.coupList=[];
                    this.loadTxt="";
                    this.doQuery();
                }

            },
            doQuery:function () {
                var that = this;
                var param=null;
                if (that.tabIndex == 0) {
                    that.useStatus = 0
                    that.status = 1
                    param = { useStatus: 0, status: 1 };
                } else if (that.tabIndex == 1) {
                    that.useStatus = 0
                    that.status = 2
                    param = { useStatus: 0, status: 2 };
                } else if (that.tabIndex == 2) {
                    that.useStatus = 1
                    that.status = 1
                    param = { useStatus: 1, status: 1 };
                }
                param.CurrentPage = that.curPage;
                param.customerId=that.$store.state.loginInfo.customerId;
                jsonAjax.post(urlUtil.getApiUrl("coup_lista"), param, function (result) {
                    // console.log(result)
                    if (result.returnCode == 1) {
                        if (result.resultData) {

                            var lista = result.resultData;
                            for (var i = 0; i < lista.length; i++) {
                                var startt = urlUtil.exchange_time(lista[i].beginTime);
                                var endt = urlUtil.exchange_time(lista[i].expirationTime);
                                // lista[i].yxtime = startt.riqi + "-" + endt.riqi;
                                lista[i].yxtime = endt.riqi;
                            }

                            var allProducts = [];
                            allProducts = allProducts.concat(that.coupList, lista);
                            that.coupList=allProducts;
                            that.curPage++;
                            that.loading = false;
                            that.loadTag=true;
                            // console.log(that.cionList)
                        }
                        else {
                            if(that.curPage==1)
                            {
                                that.loadTxt="";
                            }
                            else{
                                that.loadTxt="加载完成！";
                            }
                            that.loadTag=false;
                        }
                    }
                    else {
                        if(that.curPage==1)
                        {
                            that.loadTxt="";
                        }
                        else{
                            that.loadTxt="加载完成！";
                        }
                        that.loadTag=false;
                    }
                });
            },
            loadMore:function () {
                if(this.loadTag)
                {
                    this.loadTxt="正在加载...";
                    this.loading = true;
                    this.doQuery();
                }
            }


        }

    }
</script>

<style scoped>
    .newCoupon{
        /*padding: 0 0.3rem;*/
        padding-bottom: 0.2rem;

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
    .content_box{
        background: #f5f5f5;
    }
    .top_tab {
        position: fixed;
        height: 0.8rem;
        background: #fff;
        left: 0;
        top: 0.88rem;
        right: 0;
        z-index: 10;
    }

    .top_tab .border_b2 {
        border-bottom: 0.04rem solid transparent;
    }

    .top_tab .border_b2.cur {
        border-bottom-color: #E4811D;
        color: #E4811D;
    }

    .top_tabh {
        height: 1.2rem;
    }

    .couplist {
        border-radius: 0.08rem;
        overflow: hidden;
    }

    .couplist .onetop {
        background: #E4811D;
    }

    .couplist .twotop {
        background: #fff;
    }

    .couplist.old {
        position: relative;
    }

    .couplist.old .onetop {
        background: #a7a7a7;
    }

    .couplist.old .icon {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0.92rem;
        height: 0.92rem;
        z-index: 2;
    }

    .couplist.old .icon .img {
        width: 100%;
        height: 100%;
    }

    .man_text{
        color: #00cc00;
        font-size: 0.24rem;
        font-weight: bolder;
    }

    .jian_text{
        color: #E4811D;
        font-size: 0.4rem;
        font-weight: bolder;
    }

</style>
