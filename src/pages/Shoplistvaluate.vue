<template>
    <div id="orderListevaluate" class="content_box" style="background: #f5f5f5;">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="go"></div>
            <p class="HEADER_SHOP_TITLE">订单评价</p>
        </div>


        <div class='top_tab bgfff txt_center border_b'>
            <div class='table h100 f28'>
                <div class='td' :class='tabIndex==5?"cur":""' v-on:click='tabSelect(5)'>待评价</div>
                <div class='td' :class='tabIndex==6?"cur":""' v-on:click='tabSelect(6)'>已评价</div>
            </div>
        </div>
        <div class='top_h'></div>
        <div class='pad_20 txt_center' v-if="orderList.length<1"  style="font-size: .28rem;
    margin-top: 1rem;">
            <span class='inblock'>暂无相关订单，</span>
            <router-link :to="{name:'ShopIndex'}" class='inblock czt'>去逛逛~</router-link>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class='pad_l20 pad_r20 bgfff mar_b20 item_color_line' v-for="(item,index) in orderList">
                <div class='pad_t20 pad_b20 table f12'>
                    <div class='td c999 f28'>订单编号：{{item.ordersNo}}</div>
                    <div class='td wrem4 txt_right czt f24' v-if="tabIndex==5">待评价</div>
                    <div class='td wrem4 txt_right f24' v-if="tabIndex==6">已评价</div>
                </div>
                <div v-for="(itema,indexa) in item.productList">
                    <router-link :to="{name:'ShopProductDetail',params:{pId:itema.productId}}" class='pad_t20 pad_b20 table border_b'>
                        <div class='td p_img_view'>
                            <div class='p_img'>
                                <img class='img' :onerror="errorUserPhoto" :src='sourceUrlShop+itema.logoImage'>
                            </div>
                        </div>
                        <div class='td pad_l20'>
                            <div class='txt_two h1 f28'>{{itema.productFullName}}</div>
                            <div class='c999 f24 mar_b20' :class='itema.specificationNames==""?"opctiy":""'>规格：{{itema.specificationNames}}</div>
                            <div class='clear'>
                                <div class='L cred f28'>￥{{itema.salesPrice}} | {{itema.salesCredits}} 积分</div>
                                <div class='R c666 f28'>x{{itema.count}}</div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class='pad_t20 pad_b20 txt_right f28' v-if="tabIndex==5">
                    <router-link :to="{name:'ShoporderEvaluate',params:{orderId:item.ordersId,type:1}}" class='inblock mar_l10 com_obtn' v-if="item.ordersState==5&item.settlementStatus==1">去评价</router-link>
                </div>
                <div class='pad_t20 pad_b20 txt_right f28' v-else>
                    <router-link :to="{name:'ShoporderCheckevaluate',params:{orderId:item.ordersId}}" class='inblock mar_l10 com_obtn white'>查看评价</router-link>
                </div>
                <div class="line" style="width: 100%;height: 0.02rem;background: #f5f5f5;"></div>
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
                tabIndex:this.$route.params.type,//5待评价，6已评价
                index:this.$route.params.index,
                orderList:[],//订单列表
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
            if (this.tabIndex==undefined){
                this.tabIndex=localStorage.getItem("valuatetabindex")
            }else {
                localStorage.setItem("valuatetabindex",5)
            }
            this.doQuery();

        },
        methods: {
            go(){
                this.$router.push({name:"ShopMy"});
            },
            routerBack: function () {
                //返回上一个路由
                this.$router.push({name:"my"});
//        this.$router.back(-1);
            },
            tabSelect:function (index) {
                //tab切换
                localStorage.setItem("valuatetabindex",index)
                if(index!=this.tabIndex)
                {
                    this.tabIndex=index;
                    this.curPage=1;
                    this.loadTag=false;
                    this.orderList=[];
                    this.loadTxt="";
                    this.doQuery();
                    this.$router.push({name:'Shoplistvaluate',params:{type:index}});
                }
            },
            doQuery:function () {
                var that = this;
                var param = null;
                param = { type: that.tabIndex, page: that.curPage,
                    customerId: that.$store.state.userinfo.userId,
                    customerToken: that.$store.state.userinfo.token,
                    index:that.index || 1
                };
                jsonAjax.post(urlUtil.getApiUrl("order_list"), param, function (result) {
                    // console.log(result)
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

            },
            loadMore:function ()  {
                if(this.loadTag)
                {
                    this.loadTxt="正在加载...";
                    this.loading = true;
                    this.doQuery(this.eventType,this.keyword_txt,this.cId,this.queryType);
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
    .item_color_line+.item_color_line{
        margin-top: 0.2rem;
    }

</style>

