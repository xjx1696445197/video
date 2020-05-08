<template>
    <div id="tuanProduct" class="content_box">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <p class="HEADER_SHOP_TITLE">团购</p>
        </div>
        <!--<div class="img_cnt gb">-->
            <!--<mt-swipe :auto="4000" class="mt-swipe">-->
                <!--<mt-swipe-item v-for="(item,index) in imgUrls_swiper" :key="index">-->
                    <!--<router-link :to="item.url" class="block f0 img_img">-->
                        <!--<img :onerror="errorUserPhoto" :src="sourceUrlShop+item.imageUrl" class="img"/>-->
                        <!--<span class="desc"></span>-->
                    <!--</router-link>-->
                <!--</mt-swipe-item>-->
            <!--</mt-swipe>-->
        <!--</div>-->
        <!--    <div class="kind_scroll bgfff all">-->
        <!--      <div class='table_x h100 f12 txt_center'>-->
        <!--        <div class='td ver_mid' :class='tabIndex==-1?"cur":""' v-on:click='tabExchange(-1)'>-->
        <!--          <div class='txt_one f14'>全部</div>-->
        <!--        </div>-->
        <!--        <div v-for="(item,index) in kindList" class='td ver_mid' :class='index==tabIndex?"cur":""' v-on:click='tabExchange(index)'>-->
        <!--          <div class='txt_one f14'>{{item.sortName}}</div>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--    </div>-->
        <!--条件排序  -->
        <div class='sort_view f28 bgfff'>
            <div class='table txt_center'>
                <div class="td" :class="'normal' == selectItem ? 'czt':''" v-on:click="sortBy('normal')">综合</div>
                <div class="td" :class="'totalSales' == selectItem ? 'czt':''" v-on:click="sortBy('totalSales')">销量</div>
                <div class="td f0" :class="'priceItem' == selectItem ? 'czt':''" v-on:click="sortBy('priceItem')">
                    <span class="inblock f28">价格</span>
                    <div class='inblock f0'>
                        <img v-if="selectItem!='priceItem'" class='price_img' src="../static/images/shop/down.png"/>
                        <img v-if="queryType==2" class='price_img' src="../static/images/shop/up_down.png"/>
                        <img v-if="queryType==3" class='price_img' src="../static/images/shop/up.png"/>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="zhjdf">-->
            <!--<p class="p_left">今日必参团 团长有优惠</p>-->
            <!--<div class="pad_t10 pad_b10 clear">-->
                <!--<div class="product_scroll f0">-->

                    <!--<div class="product_wrap_2" v-for="(item,index) in proList">-->
                        <!--<router-link :to="{name:'ShopProductsDetail',params:{type:2,pId:item.tuanId}}"-->
                                     <!--class='all pad_20 border_b bgfff table'>-->
                            <!--<img class="img" style="width: 2.6rem;height: 2.6rem"  :onerror="errorUserPhoto" :src="sourceUrlShop+item.tuanImageUrl"/>-->
                            <!--<div class="product_title_2 f24"><span class="jx_js">{{item.openGroupCount}}人团</span>{{item.title}}</div>-->
                            <!--<div class="product_synopsis_2 product_syno f24"><span>{{item.salesPrice}}积分</span><span>￥{{item.salesPrice}}</span></div>-->
                            <!--<div class="product_synopsis_2 f24"><span>{{item.openGroupCount}}人团</span><span class="go_butto">去参团</span></div>-->
                        <!--</router-link>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <div v-infinite-scroll="loadMore" class="posi" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class='pad_20 txt_center f28' v-if="proList.length<1">{{loadingText}}</div>
            <div class='pro_list'>
                <div v-for="(item,index) in proList">
                    <router-link :to="{name:'ShopProductsDetail',params:{type:2,pId:item.tuanId}}"
                                 class='all pad_20 bgfff table border_b'>
                        <div class='w1 td'>
                            <div class='img_div f0 img_box img_big1 bgfff'>
                                <div class='img_cnt'>
                                    <img  :onerror="errorUserPhoto" :src="sourceUrlShop+item.tuanImageUrl" style="width: 1.6rem;height: 1.6rem">
                                </div>
                                <!-- <view class='p_notice txt_center pad_b10 pad_t10 f12'>已抢完</view> -->
                            </div>
                        </div>
                        <div class='td'>
                            <div class='txt_two txt_h2 pad_l20 mar_b100'>{{item.title}}</div>
                            <div class=' pad_l20 table all' style="margin-top: 0.15rem">
                                <div class='td wrem5'>
                                    <div class='czt'><span class="pr10">￥{{item.price}} </span>| <span class="pl10">{{item.credits}}</span> 积分</div>
                                    <div class='c999 f20 mt10'><span style="text-decoration: line-through">￥{{item.salesPrice}}</span> <span> | </span><span class="pl10" style="text-decoration: line-through">{{item.salesCredits}} 积分</span></div>
                                </div>
                                <div class='td txt_right'>
                                    <div class='buy_btn'>去参团</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="pad_20 txt_center">{{loadTxt}}</div>
        </div>
<!--        <menu-vue v-if="$store.state.isShowNavBar"></menu-vue>-->
    </div>
</template>

<script>
	import { sourceUrl,sourceUrlShop } from '@/config'
    import {  mapActions } from 'vuex'
    import Vue from 'vue'
    import {Button, Toast, Swipe, SwipeItem,InfiniteScroll} from 'mint-ui'
    Vue.use(InfiniteScroll)
    Vue.component(Button.name, Button)
    Vue.component(Toast.name, Toast)
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import userPhoto from '@/static/images/mrbj.png'

    export default {
        components: {},

        data () {
            return {
            	sourceUrlShop,
                imgUrls_swiper: [],
                errorUserPhoto: 'this.src="' + userPhoto + '"',
                tabIndex: -1,
                kindList: [],
                selectItem: 'normal',
                selectItema: 'normal',
                queryType: '',//1：销量排序 倒序,2：价格升序，3：价格降序，4：时间，为空则默认
                proList: [],
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading: false,
                loadTag: false,//是否翻页标志
                loadTxt: '',
                curPage: 1,//当前页码
                categoryList: [],
                loadingText:'正在加载中...'
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            // this.$store.commit('isShowNavBar', true)

            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this

            that.setDefaultCateId('')
            jsonAjax.get(urlUtil.getApiUrl('tuan_kind'), {}, function (result) {
                if (result.returnCode == 1) {
                    that.kindList = result.resultData
                }
                that.doQuery()

            }),
                jsonAjax.get(urlUtil.getApiUrl('home_index'), {}, function (result) {
                    if (result.returnCode === 1) {
                        /** 1、轮播图获取点击图片的超链接地址并展示图片 **/
                        var imgUrls_swiper = result.resultData.shufflingFigureList
                        for (var k = 0; k < imgUrls_swiper.length; k++) {
                            var backurl = urlUtil.urlback(imgUrls_swiper[k].clickDetailType, imgUrls_swiper[k].clickDetailID, imgUrls_swiper[k].title)
                            imgUrls_swiper[k].url = backurl
                        }
                        that.imgUrls_swiper = imgUrls_swiper
                        /** 3、楼层数据 **/
                        var categoryList = result.resultData.categoryList
                        for (var k = 0; k < categoryList.length; k++) {
                            var categoryInfoList = categoryList[k].categoryInfoList
                            if (categoryInfoList != null) {
                                for (var ka = 0; ka < categoryList[k].categoryInfoList.length; ka++) {
                                    var backurl = urlUtil.urlback(categoryList[k].categoryInfoList[ka].clickDetailType, categoryList[k].categoryInfoList[ka].clickDetailID, categoryList[k].categoryInfoList[ka].title)
                                    categoryList[k].categoryInfoList[ka].url = backurl
                                }
                            }
                        }
                        that.categoryList = categoryList
                    }
                })

        },
        methods: {
            ...mapActions(['setDefaultCateId']),
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1)
            },
            tabExchange: function (index) {
                //分类切换
                if (index != this.tabIndex) {
                    this.tabIndex = index
                    this.curPage = 1
                    this.loadTag = false
                    this.loadTxt = ''
                    this.proList = []
                    this.selectItem = 'normal'
                    this.selectItema = 'normal'
                    this.queryType = ''
                    this.doQuery()
                }

            },
            doQuery: function () {
                var that = this
                var param = {page: that.curPage}
                if (that.tabIndex != -1) {
                    param.tuanProductTypeId = that.kindList[that.tabIndex].tuanProductTypeId
                }
                param.orderBy = that.selectItema
                jsonAjax.post(urlUtil.getApiUrl('tuan_list'), param, function (result) {
                    if(result.resultData === null){
                        that.loadingText='暂无相关商品~'
                    }else{
                        that.loadingText=''
                    }
                    // console.log(result)
                    if (result.returnCode == 1) {
                        if (result.resultData.length > 0) {
                            var allProducts = []
                            allProducts = allProducts.concat(that.proList, result.resultData)
                            that.proList = allProducts
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
                    } else {
                        if (that.curPage == 1) {
                            that.loadTxt = ''
                        } else {
                            that.loadTxt = '加载完成！'
                        }
                        that.loadTag = false
                    }
                })
            },
            sortBy: function (str) {
                var that = this
                if (str != 'priceItem') {
                    if (that.selectItem != str) {
                        that.curPage = 1
                        that.proList = []
                        that.loadTxt = ''
                        that.selectItem = str
                        that.selectItema = str
                        if (str == 'normal') {
                            that.queryType = ''
                        } else if (str == 'totalSales') {
                            that.queryType = 1
                        }

                        this.doQuery()
                    }
                } else {
                    that.curPage = 1
                    that.proList = []
                    that.loadTxt = ''
                    that.selectItem = str
                    if (that.queryType != 2) {
                        that.queryType = 2
                        that.selectItema = 'salesPriceAsc'
                    } else {
                        that.queryType = 3
                        that.selectItema = 'salesPriceDesc'
                    }
                    this.doQuery()

                }

            },
            loadMore: function () {
                if (this.loadTag) {
                    this.loadTxt = '正在加载...'
                    this.loading = true
                    this.doQuery()
                }
            }
        }

    }
</script>

<style scoped>
    .kind_scroll {
        position: fixed;
        left: 0;
        right: 0;
        height: 0.8rem;
        top:0.9rem;
        background: #fff;
        z-index: 10;
        overflow-x: auto;
    }

    .kind_scroll .td {
        /*padding: 0px 10px;*/
        min-width: 1.4rem;
        box-sizing: border-box;
        border-bottom: 1px solid transparent;
    }

    .kind_scroll .td.cur {
        border-bottom-color: #ff0036;
        color: #ff0036;
    }

    .top_h {
        height: 9rem;
    }

    .time_tag {
        margin-left: 0.1rem;
        margin-right:  0.1rem;
        padding: 0.04rem 0.1rem;
        background: #232325;
        color: #fff;
        border-radius: 0.08rem;
    }

    .pro_list .border_b {
        /*border-bottom: 1px solid #f2f2f2;*/
    }

    .pro_list .w1 {
        width: 1.62rem;
    }

    .pro_list .img_div {
        /*border: 1px solid #f2f2f2;*/
        border-radius: 0.08rem;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .pro_list .mar_b100 {
        margin-bottom: 0.04rem;
    }

    .p_notice {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
    }

    .buy_btn {
        background: #e4811d;
        color: #fff;
        padding: 0.06rem 0.1rem;
        border-radius: 0.08rem;
        display: inline-block;
        margin-right: 0.1rem;
        width: 1.5rem;
        text-align: center;
        box-sizing: border-box;
    }


    /*筛选  */

    .sort_view {
        z-index: 10;
        position: absolute;
        left: 0;
        /*top: 9.6rem;*/
        top:0.88rem;
        right: 0;
        height: 0.8rem;
        border-bottom: 1px solid #f2f2f2;
        /*border-top: 1px solid #dcdcdc;*/
    }

    .sort_view .table {
        height: 100%;
    }

    .price_img {
        width: 0.48rem;
        height: 0.48rem;
        padding: 0.16rem;
    }

    .img_cnt{
        /*margin-top: .8rem;*/
    }


    .product_scroll {
        padding: 0px 0.1rem;
        width: 100%;
        display: inline;
        white-space: nowrap;
        overflow-x: auto;
        float: left;
        overflow-y: hidden
    }

    .product_wrap_2 {
        width: 3rem;
        /*height: 160px;*/
        background: #fff;
        margin: 0 0.3rem 0 0.06rem;
        display: inline-block;
    }

    .product_title_2 {
        width: 100%;
        padding-top: 0.04rem;
        font-size: 0.24rem;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }

    .product_synopsis_2 {
        font-size: 0.24rem;
        padding-top: 0.06rem;
        color: #f00;
        padding-bottom: 0.1rem;
        overflow: hidden;
    }

    .posi {
        position: absolute;
        /*top: 10.4rem;*/
        top:1.68rem;
        width: 100%;
    }

    .zhjdf {
        position: absolute;
        top: 4.7rem;
        width: 100%;
    }

    .img_cnt {
        margin-top: 0;
    }

    .gb {
        top: .88rem;
    }

    .p_left {
        font-weight: bold;
        padding-left: .2rem;
    }

    .product_synopsis_2 {
        font-size:.24rem;
        color: black;
        display: flex;
        justify-content: space-between;
        width: 2.6rem;
    }

    .product_syno span {
        display: inline-block;
        width: 1.5rem;
        font-size: .2rem;
    }

    .product_syno span:nth-of-type(1) {
        padding-right: .1rem;
        border-right: 2px solid #e4811d;
        color: #e4811d;
        font-weight: bold;


    }
    .product_syno span:nth-of-type(2) {
        padding-left: .1rem;
        color: #e4811d;
        font-weight: bold;
    }
    .go_butto{
        width: 1rem;
        text-align: center;
        display: inline-block;
        border: 1px solid #e4811d;
        border-radius: .1rem;
        background: #e4811d;
        color: white;
        height: .5rem;
        line-height: .5rem;
        font-size: .2rem;

    }
    .img_cnt .img{
        height: 3.6rem;
    }
    .wrem5{
        width:3.5rem;
    }
    .jx_js{
        color: #e4811d;
    }
</style>
