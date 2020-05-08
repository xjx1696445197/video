<template>
    <div id="orderList" class="content_box" style="background: #f5f5f5;">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="go"></div>
            <p class="HEADER_SHOP_TITLE">我的订单</p>
        </div>
        <div class='top_tab bgfff txt_center border_b'>
            <div class='table h100 f28'>
                <div class='td' :class="tabIndex==1?'cur':''" v-on:click='tabSelect(1)'>全部</div>
                <div class='td' :class="tabIndex==2?'cur':''" v-on:click='tabSelect(2)'>待付款</div>
                <div class='td' :class="tabIndex==3?'cur':''" v-on:click='tabSelect(3)'>待发货</div>
                <div class='td' :class="tabIndex==4?'cur':''" v-on:click='tabSelect(4)'>待收货</div>
            </div>
        </div>
        <div class='top_h'></div>
        <div class='pad_10 txt_center' v-if="orderList.length<1" style="font-size: .28rem;
    margin-top: 1rem;">
                     <span class='inblock'>{{loadingText}}</span>
            <router-link :to="{name:'ShopIndex'}" class='inblock czt'>{{loadingTexttwo}}</router-link>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class='pad_l20 pad_r20 bgfff mar_b20' v-for="(item,index) in orderList">
                <!-- 12.25之前 -->
                <!--<div class='pad_t10 pad_b10 table f24'>-->
                    <!--<div class='td c999 f28'>订单编号：{{item.ordersNo}}</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="item.ordersState==0&item.settlementStatus==0">等待付款</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex!==1&item.ordersState==4&item.settlementStatus==1">待收货</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex!==1&item.ordersState<4&item.settlementStatus==1">待发货</div>-->
                    <!--<div class='td wrem4 txt_right' v-if="item.ordersState==9&item.settlementStatus==1&item.isReturn==0">已完成</div>-->
                    <!--<div class='td wrem4 txt_right' v-if="item.ordersState==6&item.settlementStatus==0">已取消</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex!==1&item.ordersState==5&item.settlementStatus==1">待评价</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex!==1&item.ordersState==7&item.settlementStatus==1">已售后</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState==4&item.settlementStatus==1&item.isReturn==0">待收货</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState<4&item.settlementStatus==1&item.isReturn==0">待发货</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState==5&item.settlementStatus==1&item.isReturn==0">待评价</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState==4&item.settlementStatus==1&item.isReturn==1">已售后</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState<4&item.settlementStatus==1&item.isReturn==1">已售后</div>-->
                    <!--<div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState==5&item.settlementStatus==1&item.isReturn==1">已售后</div>-->
                    <!--<div class='td wrem4 txt_right' v-if="item.ordersState==9&item.settlementStatus==1&item.isReturn==1">已售后</div>-->
                <!--</div>-->
                <!-- 12.25修改 -->
                <div class='pad_t10 pad_b10 table f24'>
                    <div class='td c999 f28'>订单编号：{{item.ordersNo}}</div>
                    <div class='td wrem4 txt_right czt' v-if="item.ordersState==0&item.settlementStatus==0">等待付款</div>
                    <div class='td wrem4 txt_right czt' v-if="tabIndex!==1&item.ordersState==4&item.settlementStatus==1">待收货</div>
                    <div class='td wrem4 txt_right czt' v-if="tabIndex!==1&item.ordersState<4&item.settlementStatus==1">待发货</div>
                    <div class='td wrem4 txt_right czt' v-if="item.ordersState==9&item.settlementStatus==1&item.isReturn==0">已完成</div>
                    <div class='td wrem4 txt_right czt' v-if="item.ordersState==6&item.settlementStatus==0">已取消</div>
                    <div class='td wrem4 txt_right czt' v-if="tabIndex!==1&item.ordersState==5&item.settlementStatus==1">待评价</div>
                    <div class='td wrem4 txt_right' v-if="tabIndex!==1&item.ordersState==7&item.settlementStatus==1">已售后</div>
                    <div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState==4&item.settlementStatus==1&item.isReturn==0">待收货</div>
                    <div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState<4&item.settlementStatus==1&item.isReturn==0">待发货</div>
                    <div class='td wrem4 txt_right czt' v-if="tabIndex==1&item.ordersState==5&item.settlementStatus==1&item.isReturn==0">待评价</div>
                    <div class='td wrem4 txt_right' v-if="tabIndex==1&item.ordersState==4&item.settlementStatus==1&item.isReturn==1">已售后</div>
                    <div class='td wrem4 txt_right' v-if="tabIndex==1&item.ordersState<4&item.settlementStatus==1&item.isReturn==1">已售后</div>
                    <div class='td wrem4 txt_right' v-if="tabIndex==1&item.ordersState==5&item.settlementStatus==1&item.isReturn==1">已售后</div>
                    <div class='td wrem4 txt_right' v-if="item.ordersState==9&item.settlementStatus==1&item.isReturn==1">已售后</div>
                </div>
                <div v-for="(itema,indexa) in item.productList">
                    <router-link :to="{name:'ShoporderDetail',params:{orderId:item.ordersId,type:0,isReturn:item.isReturn,tabxIndex:tabIndex}}"
                                 class='pad_t10 pad_b10 table border_b'>
                        <div class='td p_img_view'>
                            <div class='p_img'>
                                <img class='img' :onerror="errorUserPhoto" :src='sourceUrlShop+itema.logoImage'>
                            </div>
                        </div>
                        <div class='td pad_l20'>
                            <div class='txt_two h1'>{{itema.productFullName}}</div>
                            <div class='c999 f24 mar_b20' :class='itema.specificationNames==""?"opctiy":""'>
                                规格：{{itema.specificationNames}}
                            </div>
                            <div class='clear'>
                                <div class='L cred f28'><span class="pr10">￥{{itema.salesPrice}}</span> | <span class="pl10">{{itema.salesCredits}} </span>积分</div>
                                <div class='R c666 f28'>x{{itema.count}}</div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class='pad_t10 pad_b10 txt_right f24 border_b'>
                    <span>共{{item.numbers}}件商品，合计：</span>
                    <span class='czt1 f28'>￥{{item.finalAmount}} | {{item.finalCredits}} 积分</span>
                    <span class='c999'> (含运费￥{{item.freight}} | {{item.creditsFreight}}积分)</span>
                </div>
                <div class='pad_t10 pad_b10 txt_right f28' v-if="tabIndex==3"
                     :class="tabIndex==3 ? 'border_b' :''"
                >
                    <div class='inblock mar_l10 com_obtn white'
                         v-on:click='tips(index)'
                    >提醒发货
                    </div>
                </div>
                <div class='pad_t10 pad_b10 txt_right f28' v-if="tabIndex!=3"
                     :class="tabIndex!=3 ? 'border_b' :''"
                >
                    <router-link :to="{name:'ShoporderLogistics',params:{orderId:item.ordersId}}"
                                 class='inblock mar_l10 com_obtn white'

                                 v-if="item.ordersState>3&item.settlementStatus==1">查看物流
                    </router-link>
                    <div class='inblock mar_l10 com_obtn white'
                         v-if="item.ordersState==0&item.settlementStatus==0"
                         v-on:click='orderCancel(index)'
                    >取消订单
                    </div>


                    <!-- <div class='inblock mar_l10 com_obtn gray' v-if="item.ordersState==6&item.settlementStatus==1" v-on:click='orderDelete(index)'>删除订单</div> -->
                    <div class='inblock mar_l10 com_obtn' v-if="tabIndex==4&item.ordersState==4&item.settlementStatus==1"
                              v-on:click='orderReceive(index)'
                >确认收货
                </div>
                    <div class='pad_t10 pad_b10 txt_right f28' v-if="tabIndex==1&item.ordersState<4&item.settlementStatus==1"
                         :class="tabIndex==3 ? 'border_b' :''"
                    >
                        <div class='inblock mar_l10 com_obtn white'
                             v-on:click='tips(index)'
                        >提醒发货
                        </div>
                    </div>
                    <div class='inblock mar_l10 com_obtn' v-if="tabIndex==1&item.ordersState==4&item.settlementStatus==1&item.isReturn==0"
                         v-on:click='orderReceive(index)'
                    >确认收货
                    </div>
                    <div class='inblock mar_l10 com_obtn' v-if="item.ordersState==6&item.settlementStatus==0"
                         v-on:click='orderReceivetwo(index)'
                    >删除订单
                    </div>
                    <div class='inblock mar_l10 com_obtn' v-if="item.ordersState==0&item.settlementStatus==0"
                         v-on:click="orderPay(item)"
                    >去支付
                    </div>
                    <!--<router-link :to="{name:'customerOrderPay',query:{orderId:item.ordersId,orderSn:item.ordersNo,orderType:2}}" class='inblock mar_l10 com_obtn' v-if="item.ordersState==0&item.settlementStatus==0">去支付</router-link>-->
                    <!--<a :href="'../settlement/orderPay?orderId='+item.ordersId+'&orderSn='+item.ordersNo+'&orderType=2'" class='inblock mar_l10 com_obtn' v-if="item.ordersState==0&item.settlementStatus==0">去支付</a>-->

                    <router-link :to="{name:'ShoporderEvaluate',params:{orderId:item.ordersId,type:1}}"
                                 class='inblock mar_l10 com_obtn' v-if="item.ordersState==5&item.settlementStatus==1&item.isReturn==0"
                    >
                        去评价
                    </router-link>

                </div>

            </div>
            <div class="pad_20 txt_center" style="padding-top: 0">{{loadTxt}}</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Button, InfiniteScroll, MessageBox,Toast} from 'mint-ui';
    import { sourceUrlShop } from "@/config";

    Vue.component(Button.name, Button);
    Vue.use(InfiniteScroll);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/shop/mrbj.png';


    export default {
        components: {},
        data() {

            return {
			   loadingText:'正在加载中...',
                loadingTexttwo:'',
                sourceUrlShop,
                errorUserPhoto: 'this.src="' + userPhoto + '"',
                tabIndex: this.$route.params.type,//1全部，2待付款，3待发货，4待收货
                index: this.$route.params.index || 0,
                orderList: [],//订单列表
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading: false,
                loadTag: false,//是否翻页标志
                loadTxt: "",
                curPage: 1//当前页码
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            if (this.tabIndex==undefined){
                this.tabIndex=Number(localStorage.getItem("tabxindex"))
            }
            this.doQuery();
        },
        methods: {
            //
            go(){
                this.$router.push({name: "ShopMy"})
            },
            //返回用户中心路由
            routerBack: function () {
                this.$router.push({name: "my"});
        //        this.$router.back(-1);
            },
            tabSelect: function (index) {
                localStorage.setItem("tabxindex",index)
                if (index != this.tabIndex) {
                    this.tabIndex = index;
                    this.curPage = 1;
                    this.loadTag = false;
                    this.orderList = [];
                    this.loadTxt = "";
                    this.doQuery();
                    this.$router.push({name: 'ShopOrderList', params: {type: index,index:0}});
                }


//        this.$route.path.type,//1全部，2待付款，3待发货，4待收货


            },
            orderCancel: function (index) {
                //取消订单
                var that = this;
                var order_id = that.orderList[index].ordersId;
                MessageBox.confirm('确认取消?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("order_cancel"), {
                        ordersId: order_id,
                        customerId: that.$store.state.userinfo.userId,
                        customerToken: that.$store.state.userinfo.token
                    }, function (result) {
                        if (result.returnCode == 1) {
//                that.orderList[index].ordersState = 6;
                            that.refreshData();
                        }
                    })
                })
            },
            // 提醒发货
            tips(){
                Toast("提醒成功")
            },
            // 订单确认收货里的loginName
            orderReceive: function (index) {
                //确认收货
                var that = this;
                var order_id = that.orderList[index].ordersId;
                MessageBox.confirm('确认收货?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("order_receive"), {
                        ordersId: order_id,
                        customerId: that.$store.state.userinfo.userId,
                        loginName: that.$store.state.userinfo.userName
                    }, function (result) {
                        if (result.returnCode == 1) {
//              that.orderList[index].ordersState = 9;

                            that.refreshData();
                        }
                    })
                })
            },
            orderReceivetwo: function (index) {
                //确认收货
                var that = this;
                var order_id = that.orderList[index].ordersId;
                MessageBox.confirm('确认删除订单?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("order_delete"), {
                        ordersId: order_id,
                    }, function (result) {
                        if (result.returnCode == 1) {
//              that.orderList[index].ordersState = 9;

                            that.refreshData();
                        }
                    })
                })
            },
            orderPay: function (item) {
                //去支付orderPay,orderSn:
                var that=this;
                var oid=item.ordersId;
                var order_sn=item.ordersNo;
                that.$router.push({name:'ShopOrderPay',query:{orderId:oid,orderSn:order_sn,orderType:0}});
                // var order_pay_url = "/orderPay/customerOrderPay" + "?orderId=" + item.ordersId + "&orderSn=" + item.ordersNo + "&orderType=0";
                // window.location.href = order_pay_url;
            },
            doQuery: function () {
                var that = this;
				    that.loadingText='正在加载中...'
					that.loadingTexttwo=''
                var param = null;
                param = {
                    type: that.tabIndex,
                    page: that.curPage,
                    customerId: that.$store.state.userinfo.userId,
                    customerToken: that.$store.state.userinfo.token,
                    index:that.index
                };
                jsonAjax.post(urlUtil.getApiUrl("order_list"), param, function (result) {
                    // console.log(result)
					     if (result.resultData.ordersList.length==0){
                        that.loadingText='暂无相关订单，'
                        that.loadingTexttwo='去逛逛 ~'
                    }
                    if (result.returnCode == 1) {

                        if (result.resultData.ordersList.length > 0) {

                            var data_list = result.resultData.ordersList;
                            for (var i = 0; i < data_list.length; i++) {
                                for (var j = 0; j < data_list[i].productList.length; j++) {
                                    var str = "";
                                    for (var key in data_list[i].productList[j].specificationNames) {
                                        str += data_list[i].productList[j].specificationNames[key] + " ";
                                    }
                                    data_list[i].productList[j].specificationNames = str;
                                }
                            }
                            var allProducts = [];
                            allProducts = allProducts.concat(that.orderList, data_list);
                            that.orderList = allProducts;
                            that.curPage++;
                            that.loading = false;
                            that.loadTag = true;
                        } else {
                            if (that.curPage == 1) {
                                that.loadTxt = "";
                            } else {
                                that.loadTxt = "加载完成！";
                            }
                            that.loadTag = false;
                        }
                    }

                });

            },
            refreshData: function () {
                this.curPage = 1;
                this.loadTag = false;
                this.orderList = [];
                this.loadTxt = "";
                this.doQuery();
            },
            loadMore: function () {
                console.log(this.orderList)
                if (this.loadTag) {
                    this.loadTxt = "正在加载...";
                    this.loading = true;
                    this.doQuery(this.eventType, this.keyword_txt, this.cId, this.queryType);
                }
            }

        }
    }
</script>

<style scoped>
    .top_tab {
        position: fixed;
        left: 0;
        right: 0;
        top: 0.88rem;
        z-index: 100;
        height: 0.8rem;
    }

    .top_tab .td {
        border-bottom: 3px solid transparent;
    }

    .top_tab .td.cur {
        color: #e4811d;
        border-color: #e4811d;
    }

    .top_h {
        height: 1.68rem;
    }

    .p_img_view {
        width: 82px;
    }

    .h1 {
        height: 3em;
        line-height: 1.5;
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
        border-radius: 4px;
    }

    .opctiy {
        opacity: 0
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
