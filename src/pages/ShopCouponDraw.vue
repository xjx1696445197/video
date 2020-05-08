<template>
    <div id="couponDraw" class="content_box" style="background: #f5f5f5">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">领取优惠券</p>
        </div>

        <div class='pad_20 txt_center' v-if="coupList.length<1" style="margin-top: 0.88rem">
            <span class='inblock'>暂无相关信息~</span>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" style="margin-top: 0.5rem;padding-bottom: 0.3rem;">
            <div class='pad_20 clear all'>
                <div class='pl10 all' v-for="(item,index) in coupList">
                    <div class="newCoupon">
                        <div class="newCoupon_wrapper clearfix"
                             :class="[item.isGet == 1 ? 'active' : '' ]"
                             v-on:click='receiveCoupon(index)'
                        >
                            <div class="fl">
                                <div class="newCoupon_txt1">{{item.useType == 1 ?'全场优惠券':item.level1Name+item.sortName+'优惠券'}}<span class="newCoupon_txt2">（{{item.type == 1 ? '积分':'现金'}}）</span></div>
                                <div class="newCoupon_txt3 mt20">秒杀、团购、促销等活动商品不可用</div>
                                <div class="newCoupon_txt4 mt40">{{item.beginTime | dataFormat('yyyy-MM-dd hh:mm')}} - {{item.expirationTime | dataFormat('yyyy-MM-dd hh:mm')}}</div>
                            </div>
                            <div class="fr" style="width: 1.8rem">
                                <div class="newCoupon_txt5 tcenter"
                                     v-if="item.type == 1"
                                >{{item.discountCouponAmount}}<span class="newCoupon_txt6 pl10" style="font-size:0.26rem">积分</span></div>
                                <div class="newCoupon_txt6 tcenter"
                                     v-if="item.type == 0"
                                     style="font-size:0.26rem;"
                                >￥<span class="newCoupon_txt5 pl10">{{item.discountCouponAmount}}</span></div>
                                <div class="newCoupon_txt7 tcenter">满{{item.discountCouponLowAmount}}{{item.type == 1 ? '积分':'现金'}}可用</div>
                                <div class="newCoupon_txt8 mt30 tcenter mauto">{{item.isGet == 1 ? '已领取':'点击领取'}}</div>
                            </div>
                        </div>
                    </div>
                    <!--<div :class="tabColor(index)" v-on:click='receiveCoupon(index)'>-->
                        <!--<div class='table'>-->
                            <!--<div class='td pad_20'>-->
                                <!--<div class='mar_b10 f32'>-->
                                    <!--￥<span class='f44'>{{item.discountCouponAmount}}</span>-->
                                <!--</div>-->
                                <!--<div class='f22 pad_b5' v-if="item.discountCouponLowAmount!=null">满{{item.discountCouponLowAmount}}元可用</div>-->
                                <!--<div class='f22' v-if="item.discountCouponLowAmount==null">无门槛使用</div>-->
                                <!--<div class='f22' v-if="item.useType==1">全场通用</div>-->
                                <!--<div class='f22' v-if="item.useType==2">店铺优惠劵</div>-->
                            <!--</div>-->
                            <!--<div class='td txt_center pad_20 col4 lq_yhq'>-->
                                <!--<div class='mar_b10 f28'>优惠券</div>-->
                                <!--<div class='inblock f20 lq_btn'-->
                                    <!--:class="[item.type == 1 ? 'active' : '' ]"-->
                                <!--&gt;{{item.type == 1 ? '已领取':'点击领取'}}</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
            <!--<div class="pad_20 txt_center">{{loadTxt}}</div>-->
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import { Button,Toast,InfiniteScroll} from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.use(InfiniteScroll);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        inject:["reload"],
        data () {
            return {
                coupList:[],
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading:false,
                loadTag:false,//是否翻页标志
                loadTxt:"",
                shop_yhq_color:['shop_yhq_0','shop_yhq_1','shop_yhq_2','shop_yhq_3','shop_yhq_4','shop_yhq_5'],
                curPage:1,//当前页码,
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
            tabColor:function (index) {
                var classname=index%6
                return this.shop_yhq_color[classname];
            },
            receiveCoupon:function (index) {
                //优惠券领取

                // this.doQuery();
                var that = this;
                var list = that.coupList;
                that.curPage = 1
                var param = { page: that.curPage,customerId: that.$store.state.userinfo.userId };

                jsonAjax.post(urlUtil.getApiUrl("coup_lqoprate"), { discountCouponId: list[index].discountCouponId,customerId: that.$store.state.loginInfo.customerId }, function (result) {
                    if (result.returnCode == 1) {
                        console.log(result)
                        Toast("领取成功")
                    //  设置按钮变颜色
                    //    更新接口
                        list[index].isGet = 1
                        console.log(list)
                    //     that.coupList = that.coupList.map((item)=>{
                    //         if( item.useType == 1 )
                    //     });
                    //     vm.$forceUpdate();

                        // that.reload()
                    }
                    else {
                        Toast(result.message)
                    }
                });
            },
            doQuery:function () {
                var that = this;
                var param = { page: that.curPage,customerId: that.$store.state.userinfo.userId };
                console.log(param)
                jsonAjax.get(urlUtil.getApiUrl("coup_lqlist"), param, function (result) {
                    console.log(result)
                    // return
                    if (result.returnCode == 1) {
                        if (result.resultData) {
                            var allProducts = [];
                            allProducts = allProducts.concat(that.coupList, result.resultData);
                            console.log(JSON.stringify(allProducts))
                            that.coupList=allProducts;

                            that.curPage++;
                            that.loading = false;
                            that.loadTag=true;
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
            loadMore() {
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
        padding-bottom: 0.3rem;

    }
    .newCoupon_wrapper{
        background: url('../static/images/shop/select_icon.png')no-repeat center center / cover;
        width: 6.9rem;
        height: 2.5rem;
        padding: 0.3rem 0.1rem 0.3rem 0.3rem;
    }
    .newCoupon_wrapper.active{
        background: url('../static/images/shop/give_icon.png')no-repeat center center / cover;
        width: 6.9rem;
        height: 2.5rem;
    }
    .newCoupon_wrapper.active .newCoupon_txt5{
        color: #aaa;
    }
    .newCoupon_wrapper.active .newCoupon_txt6{
        color: #aaa;
    }
    .newCoupon_wrapper.active .newCoupon_txt7{
        color: #aaa;
    }
    .newCoupon_wrapper.active .newCoupon_txt8{
        background: none;
        color: #aaa;
        border-radius: 50rem;
        border: 1px solid #ccc;
    }

    .newCoupon_txt1{
        font-size: 0.3rem;
        line-height: 0.5rem;
        color: #e4811d;
    }
    .newCoupon_txt2{
        font-size: 0.22rem;
        line-height: 0.5rem;
        color: #e4811d;
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
    }

    .top_tab {
        position: fixed;
        height: 2rem;
        background: #fff;
        left: 0;
        top: 0.88rem;
        right: 0;
    }

    .top_tab .border_b2 {
        border-bottom: 0.04rem solid transparent;
    }

    .top_tab .border_b2.cur {
        border-bottom-color: #E4811D;
        color: #E4811D;
    }

    .top_tabh {
        height: 2.4rem;
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
        width: 1.92rem;
        height: 1.92rem;
        z-index: 2;
    }

    .couplist.old .icon .img {
        width: 100%;
        height: 100%;
    }

    .shop_yhq_0 {
        background: #ffaa80;
        border: 1px solid #ffaa80;
        color: #fff;
    }
    .shop_yhq_1 {
        background: #80bfff;
        border: 1px solid #80bfff;
        color: #fff;
    }
    .shop_yhq_2 {
        background: #80ff80;
        border: 1px solid #80ff80;
        color: #fff;
    }
    .shop_yhq_3 {
        background: #ff9980;
        border: 1px solid #ff9980;
        color: #fff;
    }
    .shop_yhq_4 {
        background: #ff80b3;
        border: 1px solid #ff80b3;
        color: #fff;
    }
    .shop_yhq_5 {
        background: #df9fbf;
        border: 1px solid #df9fbf;
        color: #fff;
    }
    .lq_yhq {
        background: #fff;
        color: #E4811D;
    }

    .lq_btn {
        border-radius: 0.2rem;
        background: #E4811D;
        color: #fff;
        padding: 0.06rem 0.16rem 0.08rem;
    }
    .active{
        background: #ccc;
    }

</style>
