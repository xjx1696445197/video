<template>
    <div id="orderListrefund" class="content_box" style="background: #f5f5f5;">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="goshopMy"></div>
            <p class="HEADER_SHOP_TITLE">售后服务</p>
        </div>

        <div class='top_tab bgfff txt_center border_b'>
            <div class='table h100 f28 '>
                <div class='td' :class='tabIndex==5?"cur":""' v-on:click='tabSelect(5)'>售后申请</div>
                <div class='td' :class='tabIndex==6?"cur":""' v-on:click='tabSelect(6)'>申请记录</div>
            </div>
        </div>
        <div class='top_h'></div>
        <div class='pad_20 txt_center' v-if="orderList.length<1&tabIndex==5||orderrList.length<1&tabIndex==6"  style="font-size:.28rem;margin-top: 1rem;">
            <span class='inblock'>暂无相关订单，</span>
            <router-link :to="{name:'ShopIndex'}" class='inblock czt'>去逛逛~</router-link>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class='pad_l20 pad_r20 bgfff mar_b20' v-for="(item,index) in orderList">
                <div v-for="(itema,indexa) in item.orderInfoList">
                    <router-link :to="{name:'ShoporderDetail',params:{orderId:itema.ordersId}}" class='pad_20 block f28  c999 border_b' style="margin-left: -10px; margin-right: -10px;" v-if="indexa==0">
                        订单编号：{{itema.ordersNo}}
                    </router-link>
                    <router-link :to="{name:'ShopProductDetail',params:{pId:itema.productId}}" class='pad_t10 table'>
                        <div class='td p_img_view'>
                            <div class='p_img'>
                                <img class='img' :onerror="errorUserPhoto" :src='sourceUrlShop+itema.logoImage'>
                            </div>
                        </div>
                        <div class='td pad_l20 pad_b5'>
                            <div class='txt_two h1'>{{itema.productFullName}}</div>
                            <div class='c999 f28 mar_b20 opctiy'>规格：</div>
                            <div class='clear'>
                                <div class='L cred f28'>￥{{itema.memberPrice}}  | {{itema.memberCredits}} 积分</div>
                                <div class='R c666 f28' v-if="itema.returnableQuantity>0">x{{itema.returnableQuantity}}</div>
                                <div class='R c666 f28' v-if="itema.returnableQuantity==0">售后中</div>
                            </div>
                        </div>
                    </router-link>
                    <div class='pad_t10 pad_b10 txt_right f28  border_b' v-if="itema.returnableQuantity>0">
                        <router-link :to="{name:'ShoporderRefund',params:{pId:itema.productId,orderId:itema.ordersId,canNum:itema.returnableQuantity,refundId:0,type:tabIndex}}"  class='inblock mar_l10 com_obtn'>申请售后</router-link>
                    </div>
                </div>
            </div>

            <div class='pad_l20 pad_r20 bgfff mar_b20' v-for="(item,index) in orderrList">
                <div>
                    <div class='pad_20 border_b f28  clearfix' style="margin-left: -10px; margin-right: -10px;">
                        <div class='L c999 f28'>售后单号：{{item.returnsApplyNo}}</div>
                        <div class='R'>
                            <span v-if="item.applyState==1&item.returnsState==0">待处理</span>
                            <span v-if="item.applyState==2&item.returnsState<2">退货中</span>
                            <span v-if="(item.applyState==2&item.returnsState==3)||(item.applyState==2&item.returnsState==2)">退款中</span>
                            <span v-if="item.applyState==2&item.returnsState==4">已完成</span>
                            <span v-if="item.returnsState==5">已取消</span>
                            <span v-if="item.applyState==3&item.returnsState!=5">已拒绝</span>
                        </div>
                    </div>
                    <router-link :to="{name:'ShoporderDetail',params:{orderId:item.ordersId}}" class='pad_t10 pad_b10 f28  block c999'>
                        订单编号：{{item.ordersNo}}
                    </router-link>
                    <router-link :to="{name:'ShopProductDetail',params:{pId:item.productId}}" class='pad_t10 table'>
                        <div class='td p_img_view'>
                            <div class='p_img'>
                                <img class='img' :onerror="errorUserPhoto" :src='sourceUrlShop+item.logoImg'>
                            </div>
                        </div>
                        <div class='td pad_l20 pad_b5'>
                            <div class='txt_two h1'>{{item.productName}}</div>
                            <div class='c999 f28  mar_b20 opctiy'>规格：</div>
                            <div class='clear'>
                                <div class='L cred f28'>￥{{item.salesPrice}} | {{item.salesCredits}} 积分</div>
                                <div class='R c666 f28'>x{{item.count}}</div>
                            </div>
                        </div>
                    </router-link>
                    <div class='pad_t10 pad_b10 txt_right f28  border_b'>
                        <router-link :to="{name:'ShoporderCheckrefund',params:{refundId:item.returnsApplyId}}" class='inblock mar_l10 com_obtn white'>申请进度</router-link>
                        <div class='inblock mar_l10 com_obtn white' v-on:click='cancelApply(index,item.returnsApplyId)' v-if="item.returnsState!=5&item.applyState!=3&item.returnsState!=4">取消申请</div>
                        <router-link :to="{name:'ShoporderRefund',params:{pId:item.productId,orderId:0,canNum:0,refundId:item.returnsApplyId}}" class='inblock mar_l10 com_obtn white'  v-if="item.returnsState!=5&item.applyState!=3&item.returnsState!=4">修改申请</router-link>
                    </div>
                </div>
            </div>
            <div class="pad_20 txt_center" style="padding-top: 0">{{loadTxt}}</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,InfiniteScroll,MessageBox} from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.use(InfiniteScroll);
    import {sourceUrlShop} from "@/config";
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/shop/mrbj.png';

    export default {
        components:{},
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                orderrList:[],
                orderList:[],
                tabIndex:this.$route.params.type,
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading:false,
                loadTag:false,//是否翻页标志
                loadTxt:"",
                curPage:1//当前页码
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            if (this.tabIndex==undefined){
                this.tabIndex=localStorage.getItem("refundtabindex")
            }else {
                localStorage.setItem("refundtabindex",5)
            }
            this.doQuery();
        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.push({name:"my"});
//        this.$router.back(-1);
            },
            cancelApply:function (index,refundid) {
                //取消申请
                var that=this;
                MessageBox.confirm('确认取消?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("order_cancelapply"), {returnsApplyId: refundid,
                        customerId: that.$store.state.userinfo.userId,
                        customerToken:that.$store.state.userinfo.token}, function (result) {
                        if (result.returnCode == 1) {
                            that.orderrList[index].returnsState=5;
                        }
                    })
                })
            },
            tabSelect:function (index) {
                localStorage.setItem("refundtabindex",index)
                //tab切换
                if(index!=this.tabIndex)
                {
                    this.tabIndex=index;
                    this.curPage=1;
                    this.loadTag=false;
                    this.orderList=[];
                    this.orderrList=[];
                    this.loadTxt="";
                    this.doQuery();
                    this.$router.push({name:'ShoporderListrefund',params:{type:index}});
                }
            },
            doQuery:function () {
                var that = this;
                var param = null;
                if(that.tabIndex==5)
                {
                    param = { page: that.curPage,
                        customerId:that.$store.state.userinfo.userId,
                        customerToken:that.$store.state.userinfo.token};
                    jsonAjax.post(urlUtil.getApiUrl("order_canapplaylist"), param, function (result) {
                        // console.log(result)
                        if (result.returnCode == 1) {

                            if (result.resultData.ordersList.length > 0) {

                                var allProducts = [];
                                allProducts = allProducts.concat(that.orderList, result.resultData.ordersList);
                                that.orderList = allProducts;
                                that.curPage++;
                                that.loading = false;
                                that.loadTag = true;
                            }
                            else {
                                if (that.curPage == 1) {
                                    that.loadTxt = "";
                                }
                                else {
                                    that.loadTxt = "加载完成！";
                                }
                                that.loadTag = false;
                            }
                        }else{
                            // 找不到token自动去登陆
                            if(result.message == '未找到当前的用户token，请重新登录'){
                                that.$push({
                                    path: '/login'
                                })
                            }
                        }

                    });
                }
                else{
                    param = {CurrentPage: that.curPage,
                        customerId:that.$store.state.userinfo.userId,
                        customerToken:that.$store.state.userinfo.token};
                    jsonAjax.post(urlUtil.getApiUrl("order_applaylist"), param, function (result) {
                        // console.log(result)
                        if (result.returnCode == 1) {

                            if (result.resultData.returnslist) {

                                var allProducts = [];
                                allProducts = allProducts.concat(that.orderrList, result.resultData.returnslist);
                                that.orderrList = allProducts;
                                that.curPage++;
                                that.loading = false;
                                that.loadTag = true;
                            }
                            else {
                                if (that.curPage == 1) {
                                    that.loadTxt = "";
                                }
                                else {
                                    that.loadTxt = "加载完成！";
                                }
                                that.loadTag = false;
                            }
                        }

                    });
                }


            },
            loadMore:function () {
                if(this.loadTag)
                {
                    this.loadTxt="正在加载...";
                    this.loading = true;
                    this.doQuery(this.eventType,this.keyword_txt,this.cId,this.queryType);
                }
            },
            goshopMy:function () {
                // this.$router.back(-2);
                this.$router.push({name:'ShopMy',params:{type:'6'}});
            }


        }

    }
</script>

<style>
    .mint-msgbox-confirm{
        color: #E4811D;
    }
    .mint-msgbox-confirm{
        line-height: 0.7rem;
        font-size: 0.28rem;
    }
</style>

<style scoped>
    .top_tab {
        position: fixed;
        left: 0;
        right: 0;
        top: 0.88rem;
        z-index: 100;
        height: 0.8rem;
    }

    .top_tab  .td {
        border-bottom: 2px solid transparent;
    }

    .top_tab  .td.cur {
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
    .opctiy{opacity: 0}
    .com_obtn{
        width: 1.5rem;
        border-radius: .4rem;
    }
    .com_obtn.white{
        color: #e4811d;
        border: 1px solid #e4811d;
    }
</style>
