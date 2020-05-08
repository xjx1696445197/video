<template>
    <div id="productList" class="content_box">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">{{topTitle}}</p>
        </div>



        <!--搜索  -->
        <div class='search_top'>
            <div class='bgfff pad_l20 pad_r20 table all'>
                <div class='td f28'>
                    <!--<router-link :to="{name:'ShopSearch'}">-->
                        <!--<div class='keyword c999 all'>-->
                            <!--<img src='../static/images/shop/serach.png'-->
                                 <!--style='width:0.5rem; height:0.5rem;display: inline-block' class='ver_mid' />-->
                            <!--<div class='inblock mar_l5 f28'>{{keyword_txt}}</div>-->
                        <!--</div>-->
                    <!--</router-link>-->
                    <!-- 重新定义搜索 将之前的关闭 -->
                    <div v-on:click='toSearch()'>
                        <div class='keyword c999 all'>
                            <img src='../static/images/shop/serach.png'
                                 style='width:0.5rem; height:0.5rem;display: inline-block' class='ver_mid' />
                            <div class='inblock mar_l5 f28'>{{keyword_txt}}</div>
                        </div>
                    </div>
                </div>
                <div class='td button-box txt_right f0'>
                    <img class="btn_img ver_mid inblock" v-if="imgBtnType==1"
                         v-on:click='changeImg(2)' style='width:0.5rem; height:0.5rem;'
                         src="../static/images/shop/list.png" />
                    <img class="btn_img ver_mid inblock" v-else v-on:click='changeImg(1)' style='width:0.5rem; height:0.5rem;' src="../static/images/shop/gongge.png" />
                </div>
            </div>

        </div>
        <!--条件排序  -->
        <!--条件排序  -->
        <div class='sort_view f28 bgfff'>
            <div class='table txt_center'>
                <div class="td" :class="'syntheticalItem' == selectItem ? 'czt':''" v-on:click="sortBy('syntheticalItem')">综合</div>
                <div class="td" :class="'saleNumItem' == selectItem ? 'czt':''"  v-on:click="sortBy('saleNumItem')">销量</div>
                <div class="td" :class="'timeItem' == selectItem ? 'czt':''"  v-on:click="sortBy('timeItem')">新品</div>
                <div class="td" :class="'priceItem' == selectItem ? 'czt':''"  v-on:click="sortBy('priceItem')">
                    <span class="inblock">价格</span>
                    <div class='inblock f0'>
                        <img v-if="selectItem!='priceItem'" class='price_img' src="../static/images/shop/down.png"/>
                        <img v-if="queryType==2" class='price_img' src="../static/images/shop/up_down.png"/>
                        <img v-if="queryType==3" class='price_img' src="../static/images/shop/up.png"/>
                    </div>
                </div>
            </div>
        </div>
        <!--列表  -->
        <div class="top_h"></div>
        <div class='pad_20 txt_center f28' v-if="productList.length<1">{{loadingText}}</div>

        <div class='pro_list all f28'>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <!--第一种-->
                <div class='clearfix all' v-if="imgBtnType==1">
                    <template v-for="(product,subIndexValue) in productList">
                        <router-link :to="{name:'ShopProductDetail',params:{pId:product.productId}}">
                            <div class='L all pad_1 col6'>
                                <div class='img_div f0 img_box img_big1 bgfff'>
                                    <div class='img_cnt'>
                                        <img :onerror="errorUserPhoto" class='img' :src="sourceUrlShop+product.logoImg">
                                    </div>
                                </div>
                                <div class='txt_center txt_one bgfff all pad_5 f28'>{{product.productFullName | strFilter}}</div>
                                <div class='bgfff txt_center czt all pad_5 f28'><span class="pr10">￥{{product.salesPrice}} </span>| <span class="pl10">{{product.credits}}</span> 积分</div>
                            </div>
                        </router-link>
                    </template>
                </div>
                <!--第二种  -->
                <div v-else>
                    <template  v-for="(product,subIndexValue) in productList">
                        <router-link :to="{name:'ShopProductDetail',params:{pId:product.productId}}">
                            <div class='all pad_20 border_b bgfff table'>
                                <div class='w1 td'>
                                    <div class='img_div f0 img_box img_big1 bgfff' style="width:2rem;height: 2rem">
                                        <div class='img_cnt'>
                                            <img :onerror="errorUserPhoto" class='img' :src="sourceUrlShop+product.logoImg">
                                        </div>
                                    </div>
                                </div>
                                <div class='td'>
                                    <div class='txt_one pad_l20 mar_b100 f28'>{{product.productFullName | strFilter}}</div>
                                    <div class='czt pad_l20 f28'><span class="pr10">￥{{product.salesPrice}} </span>| <span class="pl10">{{product.credits}}</span> 积分</div>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>

            </div>
            <div class="pad_20 txt_center">{{loadTxt}}</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,InfiniteScroll } from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.use(InfiniteScroll);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/mrbj.png';
    import {sourceUrlShop} from "@/config";


    export default {
        data () {
            return {
                loadingText:'正在加载中...',
                sourceUrlShop,
                topTitle:"商品列表",
                errorUserPhoto:'this.src="' + userPhoto + '"',
                eventType: '', //查询类型
                eventVal: '',//查询参数
                queryType: '',//1：销量排序 倒序,2：价格升序，3：价格降序，4：时间，为空则默认
                priceImgType: 2,
                selectItem:'syntheticalItem',
                keyword_txt:this.$route.params.keyword,//搜索词
                eventType:"byKeyword",//来源，搜索页，else-分类页
                cId:this.$route.params.name,
                cName:this.$route.params.cName,
                imgBtnType: 1,//列表样式标志
                productList:[],
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
            if(this.keyword_txt==0)
            {
                this.keyword_txt="请输入搜索内容";
                this.eventType="byId";
            }
            else{
                this.topTitle=this.keyword_txt;
            }
            if(this.cId!=0)
            {
                this.topTitle=this.cName;
            }
            this.doQuery(that.eventType,that.keyword_txt,that.cId,that.queryType);

        },
        // 字符串截取
        filters: {
            strFilter (value) {
                console.log(value)
                let subString = value.slice(value.indexOf(' ') + 1)
                let subsString = subString.replace(/\[.*?\]/g,'')
                console.log(subsString)

                return subsString;
            }
        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            sortBy:function (str) {
                var that=this;
                if(str!='priceItem')
                {
                    if(that.selectItem!=str)
                    {
                        that.curPage=1;
                        that.productList=[];
                        that.loadTxt="";
                        that.selectItem=str;
                        if(str=='syntheticalItem')
                        {
                            that.queryType='';
                        }else if(str=='saleNumItem'){
                            that.queryType=1;
                        }else if(str=='timeItem'){
                            that.queryType=4;
                        }

                        this.doQuery(that.eventType,that.keyword_txt,that.cId,that.queryType);
                    }
                }else{
                    that.curPage=1;
                    that.productList=[];
                    that.loadTxt="";
                    that.selectItem=str;
                    if(that.queryType!=2)
                    {
                        that.queryType=2;
                    }else{
                        that.queryType=3;
                    }
                    this.doQuery(that.eventType,that.keyword_txt,that.cId,that.queryType);

                }

            },
            // 跳转搜索页面
            toSearch(){
                this.$router.replace({
                    path: '/ShopSearch'
                })
            },
            changeImg:function (index) {
                this.imgBtnType=index;
            },
            doQuery: function (eventType, eventTxt,eventId, queryType) {
                var that = this;
                var param = null;
                if (eventType == "byKeyword") {
                    param = { productName: eventTxt, page: that.curPage, type: queryType };
                } else {
                    param = { productTypeId: eventId, page: that.curPage, type: queryType };
                }
                jsonAjax.post(urlUtil.getApiUrl("category_products"), param, function (result) {
                    if (result.resultData.productInfolist && result.resultData.productInfolist.length==0){
                        that.loadingText='暂无相关商品~'
                    }else {
                        that.loadingText=''
                    }
                    if (result.returnCode == 1) {
                        console.log('123')
                        if (result.resultData.productInfolist) {
                            var allProducts = [];
                            allProducts = allProducts.concat(that.productList, result.resultData.productInfolist);
                            that.productList=allProducts;
                            //
                            that.curPage++;
                            that.loading = false;
                            that.loadTag=true;
                        }
                        else {
                            console.log('1234')
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
    .search_top {
        position: fixed;
        left: 0;
        top: 1.68rem;
        right: 0;
        height: 1rem;
        border-bottom: 1px solid #f2f2f2;
        z-index: 10;
    }

    .search_top .table {
        height: 100%;
    }

    .keyword {
        padding: 0.08rem 0.2rem;
        border: 1px solid #efefef;
        width: 100%;
        line-height: 1;
        border-radius: 0.4rem;
    }

    .button-box {
        width: 1.44rem;
    }

    .button-box .btn_img {
        width: 1.04rem;
        height: 1.04rem;
    }

    /*筛选  */

    .sort_view {
        z-index: 10;
        position: fixed;
        left: 0;
        top: 0.88rem;
        right: 0;
        height: 0.8rem;
        border-bottom: 1px solid #f2f2f2;
    }

    .sort_view .table {
        height: 100%;
    }

    .price_img {
        width: 0.48rem;
        height: 0.48rem;
        padding: 0.16rem;
    }
    .top_h{ height: 2.2rem}
    /*列表  */


    .pro_list .border_b {
        border-bottom: 1px solid #f2f2f2;
    }

    .pro_list .w1 {
        width: 2rem;
        /*border: 1px solid #f2f2f2;*/
    }

    .pro_list .mar_b100 {
        margin-bottom: 40px;
    }

    /* 宫格样式 */

    .product_gongge {
        width: 100%;
        height: auto;
        background: #f2f2f2;
        position: absolute;
        top: 189px;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .product_navigator {
        height: 100%;
        text-align: center;
    }

    .product_wrap {
        width: 7.3rem;
        height: 9.32rem;
        background: #fff;
        margin: 0px 0px 0.18rem 0.18rem;
        float: left;
    }

    .product_img_info {
        width: 7.3rem;
        height: 7.3rem;
        text-align: center;
    }

    .product_title {
        padding-top: 0.06rem;
        font-size: 0.28rem;
    }

    .product_price {
        font-size: 0.5rem;
        padding-top: 0.2rem;
        color: #f00;
    }

    .product_navigator {
        text-align: center;
    }

    .noMore {
        font-size: 0.28rem;
        text-align: center;
        margin: 0.4rem;
    }

    /* 列表样式 */

    .product_list {
        position: absolute;
        top: 3.74rem;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .card-layout-list {
        background-color: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 3.6rem;
        width: 7.4rem;
        border-bottom: 1px solid #f2f2f2;
        padding: 0.32rem 0.4rem;
    }

    .card-layout-list .image-box-list {
        height: 3.52rem;
        width: 3.52rem;
    }

    .card-layout-list .text-box-list {
        margin-left: 0.4rem;
        margin-right: 0.4rem;
        height: 3.48rem;
        width: 5.6rem;
        flex-grow: 1;
        font-size: 0.28rem;
    }

    .text-box-list .title-list {
        padding-bottom: 0.44rem;
        height: 2.2rem;
    }

    .text-box-list .price-list {
        padding-bottom: 0.16rem;
        color: red;
        font-weight: bold;
        margin-right: 0.4rem;
    }

    /* 返回顶部 */

    .widget-goTop {
        position: fixed;
        bottom: 0.6rem;
        right: 0.1rem;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        overflow: hidden;
        z-index: 500;
        opacity: 0.6;
    }

    .widget-goTop .gotop-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 0.8rem;
        height: 0.8rem;
        font-size: 0.24rem;
        color: #fff;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.8);
        background-size: 1rem auto;
    }

</style>
