<template>
    <div class="page">
        <div class="HEADER" style="z-index: 9999;">
            <div class='in_search txt_center'>
                <div
                        @click="go"
                        data-path="/shopSearch"
                        class="block">
                    <span class="f0 inblock"><img src='../static/images/shop/serach.png' style="width: 22px"></span>
                    <span class='inblock f26 caaa'>请输入搜索内容</span>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <!--<div class="" v-if="!flag">这是刚进去的页面</div>-->
            <div class="carousel">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in imgUrls_swiper" :key="item.id">
                            <router-link
                                    :to="item.url"
                            >
                                <div
                                        class="carousel_item"
                                        :style="{
                                            'backgroundImage': `url(${sourceUrlShop + item.imageUrl})`,
                                            'backgroundRepeat': 'no-repeat',
                                            'backgroundSize': 'cover',
                                            'backgroundPosition': 'center'
                                        }"
                                >
                                </div>

                            </router-link>

                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>


            <div class="btn_list clear bgfff all">
                <div class="col3 L txt_center pad_20 all" v-for="item in imgUrls_btn" v-if="item.url!=''">
                    <div
                            :data-url="JSON.stringify(item.url)"
                            class="block mauto"
                            @click="toDetail"
                    >
                        <div class="btn_img f0 mar_b5" align="center">
                            <img :onerror="errorUserPhoto" :src="sourceUrlShop+item.imageUrl" class="btn_img_info"/>
                        </div>
                        <div class="btn_text f26">{{item.title}}</div>
                    </div>
                </div>
            </div>

            <!--今日特卖-->
            <div class="product_list_2 bgfff" v-for="(category,index) in categoryList"
                 :key="index"
                 :id="category.id"
                 v-if="category.categoryType==2"
            >
                <div class="floor img_box img_t1">
                    <div class="img_cnt f0">
                        <img class="img" :onerror="errorUserPhoto" :src="sourceUrlShop+category.categoryImage"/></div>
                </div>
                <div class="pad_t10 pad_b10 clear">
                    <div class="product_scroll f0">
                        <div class="product_wrap_2"
                             v-for="categoryInfo in category.categoryInfoList"
                             :id="categoryInfo.id"
                        >
                            <router-link
                                    :to="categoryInfo.url"
                                    class="block product_navigator f0"
                            >
                                <div class="img_box img_big1 f0">
                                    <div class="img_cnt">
                                        <img :onerror="errorUserPhoto" class="img"
                                             :src="sourceUrlShop+categoryInfo.imageUrl"/>
                                    </div>
                                </div>
                                <div class="product_title_2 f24">{{categoryInfo.title}}</div>
                                <div class="product_synopsis_2 f28">{{categoryInfo.synopsis}}</div>
                            </router-link>

                        </div>
                    </div>
                </div>

            </div>


            <!--楼层-->
            <div class="clear" v-for="category in categoryList" :id="category.id" v-if="category.categoryType==3"
            >
                <div class="floor img_box img_t1">
                    <div class="img_cnt f0">
                        <img class="img" :onerror="errorUserPhoto" :src="sourceUrlShop+category.categoryImage"/></div>
                </div>
                <div
                        class="product_wrap_3"
                        v-for="(categoryInfo,index) in category.categoryInfoList"
                        :key="index"
                        :id="categoryInfo.id"
                >
                    <router-link :to="categoryInfo.url" class="block product_navigator">
                        :data-url="JSON.stringify(categoryInfo.url)"
                        @click="toDetail"
                        class="block product_navigator">
                        <div class="img_box img_big1 f0">
                            <div class="img_cnt">
                                <img :onerror="errorUserPhoto" class="img" :src="sourceUrlShop+categoryInfo.imageUrl"/>
                            </div>
                        </div>
                    </router-link>

                    <div v-if="index%2==1" class="clearFloat"></div>
                </div>
            </div>
        </div>


    </div>


</template>


<script>
    import Nlayer from '@/components/Nlayer'
    import {sourceUrl, sourceUrlShop} from '@/config'
    import {mapGetters, mapActions} from 'vuex'
    import 'static/swiper/swiper.min.js'
    import 'static/swiper/swiper.min.css'
    import 'static/css/app.css'
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    import userPhoto from '@/static/images/mrbj.png';


    export default {
        name: "ShopIndex",
        components: {
            Nlayer
        },
        data() {
            return {
                flag:false,
                errorUserPhoto: 'this.src="' + userPhoto + '"',
                uploadImgRoot: urlUtil.uploadImgRoot,
                sourceUrl,
                sourceUrlShop,
                accountList: [],
                updateDialog: null,
                tips: '',
                tipsVisible: false,
                imgUrls_swiper: [],
                imgUrls_btn: [],
                categoryList: [],
                feeTipVisible: false,
                loadingVisible: false,
                List: {
                    "11-20": [
                        {
                            name: '123'
                        }
                    ],
                    "11-28": [
                        {
                            name: '456'
                        }
                    ]
                }
            }
        },
        created() {
            var that = this;
            // console.log(jsonAjax)
            // return
            that.setDefaultCateId('')
            jsonAjax.get(urlUtil.getApiUrl('home_index'), {}, function (result) {
                console.log(result)
                if (result.returnCode === 1) {
                    /** 1、轮播图获取点击图片的超链接地址并展示图片 **/
                    var imgUrls_swiper = result.resultData.shufflingFigureList;
                    for (var k = 0; k < imgUrls_swiper.length; k++) {
                        var backurl = urlUtil.urlback(imgUrls_swiper[k].clickDetailType, imgUrls_swiper[k].clickDetailID, imgUrls_swiper[k].title);
                        imgUrls_swiper[k].url = backurl;
                    }
                    that.imgUrls_swiper = imgUrls_swiper;
                    console.log(imgUrls_swiper)
                    setTimeout(() => {
                        that.carouselSwiper = new Swiper('.carousel .swiper-container', {
                            loop: true,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: false,
                            },
                            pagination: {
                                el: '.carousel .swiper-pagination',
                                clickable: true
                            }
                        })
                    }, 30)
                    /** 2、功能按钮 **/
                    var imgUrls_btn = result.resultData.navigationModuleList;
                    for (var k = 0; k < imgUrls_btn.length; k++) {
                        var backurl = urlUtil.urlback(imgUrls_btn[k].clickDetailType, imgUrls_btn[k].clickDetailID, imgUrls_btn[k].title);
                        imgUrls_btn[k].url = backurl;
                    }
                    that.imgUrls_btn = imgUrls_btn;
                    console.log(imgUrls_btn)
//          console.log()
                    /** 3、楼层数据 **/
                    var categoryList = result.resultData.categoryList;
                    for (var k = 0; k < categoryList.length; k++) {
                        var categoryInfoList = categoryList[k].categoryInfoList;
                        if (categoryInfoList != null) {
                            for (var ka = 0; ka < categoryList[k].categoryInfoList.length; ka++) {
                                var backurl = urlUtil.urlback(categoryList[k].categoryInfoList[ka].clickDetailType, categoryList[k].categoryInfoList[ka].clickDetailID, categoryList[k].categoryInfoList[ka].title);
                                categoryList[k].categoryInfoList[ka].url = backurl;
                            }
                        }
                    }
                    that.categoryList = categoryList;
                    console.log(categoryList)
                }
            })
        },
        mounted() {

        },
        computed: {
            userinfo() {
                return this.getUserinfo()
            },
            userId() {
                return this.userinfo.userId
            },
            hasNoReadNotice() {
                return this.getTransferNotice() || this.getSystemNotice()
            },
            needUpdate() {
                return this.getNeedUpdate()
            },
            updateDetail() {
                return this.getUpdateDetail()
            },
            loginTip() {
                return this.$t('login.login_tips')
            },
            userName() {
                return this.userinfo.userName
            },
        },
        methods: {
            ...mapActions(['setUserNoticeState', 'setNeedUpdate', 'setUserinfo', 'setUsers', 'removeUserinfo', 'setSidebars','setDefaultCateId']),
            ...mapGetters(['getUserinfo', 'getSystemNotice', 'getTransferNotice', 'getNeedUpdate', 'getUpdateDetail', 'getSidebars']),
            // 初始化顶部轮播
            initCarouselSwiper() {
                this.carouselSwiper = new Swiper('.carousel .swiper-container', {
                    loop: true,
                    spaceBetween: 20,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.carousel .swiper-pagination',
                        clickable: true
                    }
                })
            },
            // 轮播详情页
            toDetail(e) {
                const {
                    url
                } = e.currentTarget.dataset
                // 转化为对象
                var path = JSON.parse(url).name
                var query = JSON.parse(url).params
                this.$push({
                    path: path,
                    query: query
                })
            },
            // 去搜索页面
            go(e) {
                const {
                    path
                } = e.currentTarget.dataset
                this.$push({
                    path: path
                })
            },
            // 打开消息提示
            showTips(msg) {
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed() {
                this.msg = ''
                this.tipsVisible = false
            },
            // 打开加载
            showLoading() {
                console.log('执行了')
                this.loadingVisible = true
            },
            // 关闭加载层
            closeLoading() {
                this.loadingVisible = false
            }
        }
    }
</script>


<style>
    .carousel .swiper-pagination .swiper-pagination-bullet {
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 100%;
        background: #fff;
        opacity: 1;
    }

    .carousel .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background: #eda22c !important;
    }

    .recommend .swiper-slide {
        width: auto;
    }
</style>

<style scoped>
    .page {
        /*background: #f3f3f3;*/
    }

    .HEADER {
        background: #fff;
    }

    .wrapper {
        position: absolute;
        bottom: 1rem;
        top: 0rem;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }

    .btn_list {
        height: auto;
    }

    .title {
        padding: 0 .3rem;
        display: flex;
        justify-content: space-between;
    }

    .title_txt {
        font-size: .3rem;
        color: #333;
        line-height: .8rem;
        font-weight: bold;
    }

    .more {
        font-size: .3rem;
        color: #333;
        line-height: .8rem;
    }

    .carousel {
        /*padding: .24rem 0;*/
    }

    .carousel .swiper-container {
        /*padding: 0 .3rem;*/
    }

    .carousel .swiper-pagination {
        bottom: 10px;
        font-size: 0;
    }


    .carousel_item {
        height: 3.6rem;
        /*-webkit-border-radius: 0.2rem;*/
        /*-moz-border-radius: 0.2rem;*/
        /*border-radius: 0.2rem;*/
    }

    .recommend .swiper-container {
        padding: 0 0.3rem;
    }

    .recommend_item {
        width: 3rem;
        height: 2.25rem;
        position: relative;
        -webkit-border-radius: 0.1rem;
        -moz-border-radius: 0.1rem;
        border-radius: 0.1rem;
        overflow: hidden;
    }

    .recommend_item_txt {
        font-size: .2rem;
        color: #fff;
        line-height: .5rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #666;
        width: 100%;
        padding: 0 .15rem;
        box-sizing: border-box;
    }

    .sub {
        flex: 1;
        position: relative;
    }

    .news {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .news_pos {
        flex: 1;
        position: relative;
    }

    .news_list {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 0.3rem 0.3rem;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }

    .news_item {
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;
        overflow: hidden;
        box-shadow: 0 0.05rem 0.15rem rgba(102, 102, 102, 0.1);
        background: #FFF;
        display: flex;
    }

    .news_item + .news_item {
        margin-top: 0.24rem;
    }

    .news_item_pic {
        width: 2rem;
        height: 1.5rem;
    }

    .news_item_main {
        flex: 1;
        padding: 0.17rem 0.13rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .news_item_txt1 {
        font-size: 0.26rem;
        color: #333;
        line-height: 0.35rem;
        width: 5rem;
    }

    .news_item_txt2 {
        font-size: 0.2rem;
        color: #666;
        line-height: 0.3rem;
        text-align: right;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .img_cnt {
        width: 100%;
        height: 100%;
    }

    /*.mt-swipe {*/
    /*height: 190px;*/
    /*}*/

    .desc {
        font-weight: 600;
        padding: 5px;
        height: 20px;
        line-height: 20px;
        width: 100%;
        color: #fff;
        position: absolute;
        bottom: 0;
    }

    .img_bigf {
        padding-bottom: 48.5%
    }

    .img_img {
        height: 100%
    }

    .img_img img {
        width: 100%;
        height: 100%
    }

    /*清楚浮动  */
    .clearFloat {
        clear: both;
    }

    /* search */
    .search_div {
        position: relative;
    }

    .in_search {
        position: absolute;
        left: 4%;
        right: 4%;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        border: 0.02rem solid #e4811d;
        border-radius: 20px;
        padding: 5px 15px;
        line-height: 1;
        z-index: 99;
    }

    .in_search image {
        width: 0.4rem;
        height: 0.4rem;
        vertical-align: middle;
        margin-right: 0.1rem;
    }

    /**功能菜单**/
    .btn_img_info {
        width: 0.9rem;
        height: 0.9rem;
        text-align: center;
    }

    /**商品列表**/

    .floor {
        width: 100%;
        height: auto;
        font-size: 0.28rem;
    }

    .lc_img {
        width: 100%;
        height: 0.8rem;
    }

    .product_list_2 {
        width: 100%;
        /*height: 200px;*/
        white-space: nowrap;
        overflow: hidden;
        /*padding-bottom: 10px;*/
    }

    .product_scroll {
        padding: 0px 5px;
        width: 100%;
        display: inline;
        white-space: nowrap;
        overflow-x: auto;
        float: left;
        overflow-y: hidden
    }

    .product_wrap_2 {
        width: 2.3rem;
        /*height: 160px;*/
        background: #fff;
        margin: 0px 3px 0px 3px;
        display: inline-block;
    }

    .product_img_info_2 {
        width: 115px;
        height: 115px;
        text-align: center;
        border: 1px solid #f5f5f5;
    }

    .product_title_2 {
        width: 2.3rem;
        padding-top: 0.04rem;
        font-size: 0.24rem;
        overflow: hidden;
        text-overflow:ellipsis;
    }

    .product_synopsis_2 {
        font-size: 0.28rem;
        padding-top: 0.06rem;
        color: #f00;
        padding-bottom: 0.1rem;
        overflow: hidden;
    }

    .product_list_3 {
        width: 100%;
        height: 408px;
        background: #f0f5f5;
        margin-bottom: 5px;
    }

    .product_wrap_3 {
        width: 48.5%;
        /*height: 181px;*/
        background: #fff;
        margin: 0px 0px 4px 4px;
        float: left;
    }

    .product_img_info_3 {
        width: 100%;
        /*height: 181px;*/
        text-align: center;
    }

    .product_navigator {
        text-align: center;
        display: block;
    }

    .img_t1 {
        padding-bottom: 10.5%
    }
</style>




