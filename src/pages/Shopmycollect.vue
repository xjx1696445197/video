<template>
    <div id="myCollect" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">我的收藏</p>

        </div>

        <!--<div class='top_tab border_b pad_l10 pad_r10'>-->
            <!--<div class='table h100 txt_center all'>-->
                <!--<div class='td border_b2' :class='tabIndex==1?"cur":""' v-on:click='tabClick(1)'>商品</div>-->
                <!--<div class='td border_b2' :class='tabIndex==2?"cur":""' v-on:click='tabClick(2)'>店铺</div>-->
            <!--</div>-->
        <!--</div>-->
        <div class='top_tabh'></div>
        <div class='pad_20 txt_center' v-if="list.length<1&tabIndex==1||lista.length<1&tabIndex==2"
             style="font-size: 0.28rem;margin-top: 0.5rem">
            <span class='inblock'>{{loadtexttwo}}</span>
            <router-link :to="{name:'ShopIndex'}" class='inblock czt' v-if="loadtextstore==1">去逛逛~</router-link>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div v-for="(item,index) in list"  v-if="tabIndex==1">
                <div class='pad_20 bgfff table all border_b cart'>
                    <div class='checkbox td f0' v-on:click='proCheck(index)'>
                        <img class='checkbox inblock' src='../static/images/shop/checkbox.png' v-if="!item.check">
                        <img class='checkbox inblock' src='../static/images/shop/checkbox_ed.png' v-if="item.check">
                    </div>
                    <div class='pad_l20 td w1'>
                        <router-link :to="{name:'ShopProductDetail',params:{pId:item.productId}}" class='p_img block'>
                            <img :onerror="errorUserPhoto" class='img' :src='sourceUrlShop+item.logoImg'>
                        </router-link>
                    </div>
                    <div class='td'>
                        <router-link :to="{name:'ShopProductDetail',params:{pId:item.productId}}" class='txt_two h1'>{{item.productName}}</router-link>
                        <div class='clearfix'>
                            <div class='czt pad_t5 f24'>￥{{item.salesPrice}} | {{item.salesCredits}}积分</div>
                        </div>
                    </div>
                </div>
                <div class='pad_20 table all bgfff border_b'>
                    <div class='checkbox td'> &nbsp;</div>
                    <div class='td pad_l10 c666'>
                        <div class='inblock border_333' v-on:click='cancelOne(index)'>取消关注</div>
                    </div>
                    <div class='td txt_right pad_l10'>
                        <div class='inblock imit_btn' v-on:click='addCart(index)'>加入购物车</div>
                    </div>
                </div>
                <div class='vh8'></div>
            </div>
            <div v-for="(item,index) in lista" v-if="tabIndex==2">
                <div class='pad_20 bgfff table all border_b cart'>
                    <div class='checkbox td' v-on:click='proCheck(index)'>
                        <img class='checkbox inblock' src='../static/images/shop/checkbox.png' v-if="!item.check">
                        <img class='checkbox inblock' src='../static/images/shop/checkbox_ed.png' v-if="item.check">
                    </div>
                    <div class='pad_l10 td w3'>
                        <router-link :to="{name:'shopIndex',params:{shopId:item.shopInfoId}}" class='p_imga block'>
                            <img :onerror="errorUserPhoto" class='img' :src='sourceUrlShop+item.logoUrl'>
                        </router-link>
                    </div>
                    <div class='td'>
                        <router-link :to="{name:'shopIndex',params:{shopId:item.shopInfoId}}">{{item.shopName}}</router-link>
                    </div>
                </div>
                <div class='pad_20 table all bgfff border_b'>
                    <div class='checkbox td'> </div>
                    <div class='td pad_l10 c666'>
                        <div class='inblock' v-on:click='cancelOne(index)'>取消关注</div>
                    </div>
                    <div class='td txt_right pad_l10'>
                        <router-link :to="{name:'shopIndex',params:{shopId:item.shopInfoId}}" class='inblock imit_btn'>进入店铺</router-link>
                    </div>
                </div>
                <div class='vh8'></div>
            </div>
            <div class="pad_20 txt_center" style="padding-top: 0">{{loadTxt}}</div>
        </div>

        <div class='oprate_bottomh'></div>
        <!--底部操作  -->
        <div class='oprate_bottom bgfff border_b f28' v-if="list.length>0&tabIndex==1||lista.length>0&tabIndex==2">
            <div class='table h100 all pad_l20'>
                <div class='td w1 f0'>
                    <div class='inblock checkbox' v-on:click='allCheck'>
                        <img class='checkbox' style="display: inline-block" src='../static/images/shop/checkbox.png' v-if="!allChecked">
                        <img class='checkbox' style="display: inline-block" src='../static/images/shop/checkbox_ed.png' v-if="allChecked">
                    </div>
                    <span class='inblock mar_l5 f28'>全选</span>
                </div>
                <div class='td f0'>空</div>
                <router-link :to="{name:'ShopCart'}" class='td x_num txt_center' v-if="tabIndex==0">
                    <div class='s_num'>{{cartNum}}</div>
                    <div class='f0 mar_b2'>
                        <img class='oprate_img' src='../static/images/shop/cart_black.png'></img>
                    </div>
                    <div class='f12'>购物车</div>
                </router-link>
                <div class='td oprate_btn1 txt_center wrem6' v-on:click='cancelCollect'>
                    取消关注
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,InfiniteScroll,MessageBox,Toast} from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.use(InfiniteScroll);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/mrbj.png';
    import {sourceUrlShop} from "@/config";

    export default {
        components:{},
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                tabIndex:this.$route.params.type || 1,

                allChecked:false,
                cartNum:0,
                list:[],
                lista:[],
                checkList:[],
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading:false,
                loadTag:false,//是否翻页标志
                loadTxt:"",
                curPage:1,//当前页码
                loadtexttwo:"正在加载中...",
                loadtextstore:0
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            // this.$store.commit('isShowNavBar', false);
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            //获取购物车数量
            jsonAjax.post(urlUtil.getApiUrl("cart_hqnum"), {
                customerId:that.$store.state.userinfo.userId,
                customerToken:that.$store.state.userinfo.token
            }, function (result) {
                if (result.returnCode == 1) {
                    that.cartNum=result.resultData.quantityTotal;
                }
            });
            that.doQuery();

        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.push({name:"my"});
//        this.$router.back(-1);
            },
            tabClick:function (index) {
                //切换收藏类型
                if(index!=this.tabIndex)
                {
                    this.tabIndex=index;
                    this.curPage=1;
                    this.loadTag=false;
                    this.list=[];
                    this.lista=[];
                    this.loadTxt="";
                    this.doQuery();
                    this.$router.push({name:'Shopmycollect',params:{type:index}});
                }

            },
            proCheck:function (index) {
                //单个选择
                var that = this;
                var list = [], checklist = [];
                var all_check =false;
                if (that.tabIndex == 1) {
                    list = that.list;
                }
                else {
                    list = that.lista;
                }
                list[index].check = !list[index].check;

                for (var i = 0; i < list.length; i++) {
                    if (list[i].check) {
                        checklist.push(list[i]);
                    }
                }
                if (list.length == checklist.length) {
                    all_check = true;
                }

                if (that.tabIndex == 1) {
                    that.allChecked=all_check;
                    that.list=list;
                    that.checkList= checklist;
                }
                else {
                    that.allChecked=all_check;
                    that.lista=list;
                    that.checkList= checklist;
                }
            },
            cancelOne:function (index) {
                //单个取消
                var that = this;
                var list = [], proid = "", f_list = [],checklist=[];
                if (that.tabIndex == 1) {
                    list = that.list;
                    proid = list[index].productId;
                }
                else {
                    list = that.lista;
                    proid = list[index].shopInfoId;
                }

                MessageBox.confirm('确认取消?').then(action => {
                    if(that.tabIndex==1){
                        //商品取消
                        jsonAjax.post(urlUtil.getApiUrl("pro_coolect_cancel"), { productId: proid ,customerId: that.$store.state.userinfo.userId}, function (result) {
                            if (result.returnCode == 1) {
                                for (var j = 0; j < list.length; j++) {
                                    if (j != index) {
                                        f_list.push(list[j]);

                                        if(list[j].check)
                                        {
                                            checklist.push(list[j])
                                        }

                                    }
                                }
                                that.list=f_list;
                                that.checkList=checklist;



                            }
                        })
                    }
                    else {
                        //店铺取消
                        jsonAjax.post(urlUtil.getApiUrl("shop_nocollect"), { shopInfoId: proid ,customerId: that.$store.state.userinfo.userId}, function (result) {
                            // console.log(result)
                            if (result.returnCode == 1) {
                                for (var j = 0; j < list.length; j++) {
                                    if (j != index) {
                                        f_list.push(list[j]);
                                        if(list[j].check)
                                        {
                                            checklist.push(list[j])
                                        }
                                    }
                                }
                                that.lista=f_list;
                                that.checkList=checklist;
                            }
                        })
                    }
                })
            },
            addCart:function (index) {
                //加入购物车
                var that = this;
                var cart_data = [], str;
                var jsonCartTemp = that.list[index].jsonCart;
                cart_data[0] = JSON.parse(jsonCartTemp);

                str = {
                    customerId: that.$store.state.userinfo.userId,
                    addToCartProductArray: cart_data };
                jsonAjax.post(urlUtil.getApiUrl("add_cart"), { saveShoppingCartBoJSON: JSON.stringify(str) }, function (result) {
                    if (result.returnCode == 1) {
                        Toast("已加入购物车");
                        //获取购物车数量
                        jsonAjax.post(urlUtil.getApiUrl("cart_hqnum"), {customerId: that.$store.state.userinfo.userId}, function (result) {
                            if (result.returnCode == 1) {
                                that.cartNum=result.resultData.quantityTotal;
                            }
                        });
                    }
                });
            },
            allCheck:function () {
                //全选操作

                var list = [], checklist = [];
                if (this.tabIndex == 1) {
                    list = this.list;
                }
                else {
                    list = this.lista;
                }
                this.allChecked=!this.allChecked;
                for (var i = 0; i < list.length; i++) {
                    list[i].check = this.allChecked;
                }
                if(this.allChecked){
                    checklist=list;
                }
                else {
                    checklist=[];
                }

                if (this.tabIndex == 1) {
                    this.list=list;
                    this.checkList=checklist;
                }
                else {
                    this.lista=list;
                    this.checkList=checklist;
                }
            },
            cancelCollect:function () {
                //多个取消
                var that = this;
                var list = [], check_list = [], proid = "", f_list = [];
                if (that.tabIndex == 1) {
                    list = that.list;
                }
                else {
                    list = that.lista;
                }
                check_list = that.checkList;

                if (check_list.length < 1) {
                    Toast('请先选择内容');
                    return false;
                }
                var shname = "productId";
                if (that.tabIndex == 2) {
                    shname = "shopInfoId";
                }
                for (var i = 0; i < check_list.length; i++) {
                    if (i > 0) {
                        proid += ",";
                    }
                    proid += check_list[i][shname]
                }
                MessageBox.confirm('确认取消?').then(action => {
                    if (that.tabIndex == 1) {
                        jsonAjax.post(urlUtil.getApiUrl("pro_coolect_cancel"), {productId: proid,customerId: that.$store.state.userinfo.userId}, function (result) {
                            if (result.returnCode == 1) {
                                var ka = "";
                                for (var j = 0; j < list.length; j++) {
                                    ka = "";
                                    for (var k = 0; k < check_list.length; k++) {
                                        if (list[j].productId == check_list[k].productId) {
                                            ka = 1;
                                        }
                                    }
                                    if (ka != 1) {
                                        f_list.push(list[j]);
                                    }
                                }
                                that.list=f_list;
                                that.checkList=[];
                                if(that.list.length == 0){
                                    that.loadTxt = "";
                                }
                            }
                        })
                    }
                    else {
                        jsonAjax.post(urlUtil.getApiUrl("shop_nocollect"), {shopInfoId: proid,customerId: that.$store.state.userinfo.userId}, function (result) {
                            if (result.returnCode == 1) {
                                var ka = "";
                                for (var j = 0; j < list.length; j++) {
                                    ka = "";
                                    for (var k = 0; k < check_list.length; k++) {
                                        if (list[j].shopInfoId == check_list[k].shopInfoId) {
                                            ka = 1;
                                        }
                                    }
                                    if (ka != 1) {
                                        f_list.push(list[j]);
                                    }
                                }
                                that.lista=f_list;
                                that.checkList=[];
                                if(that.list.length == 0){
                                    that.loadTxt = "";
                                }
                            }
                        })
                    }
                })
            },
            doQuery:function () {
                var that = this;
                var param = {
                    currtpage:that.curPage,
                    customerId: that.$store.state.userinfo.userId,
                    customerToken:that.$store.state.userinfo.token
                };
                var url = null;
                if (that.tabIndex == 1) {
                    url = urlUtil.getApiUrl("pro_coolect_list")
                }
                else {
                    url = urlUtil.getApiUrl("shop_collectlist")
                }
                jsonAjax.post(url, param, function (result) {
                    if (result.resultData.productList==undefined){
                        that.loadtexttwo="暂无收藏商品"
                        that.loadtextstore=1
                    }
                    if (result.returnCode == 1) {
                        if (that.tabIndex == 1) {
                            if (result.resultData.productList) {
                                for (var i = 0; i < result.resultData.productList.length; i++) {
                                    result.resultData.productList[i].check = false;
                                }
                                var allProducts = [];
                                allProducts = allProducts.concat(that.list, result.resultData.productList);
                                that.list = allProducts;
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
                        else {
                            if (result.resultData.shopList) {
                                for (var i = 0; i < result.resultData.shopList.length; i++) {
                                    result.resultData.shopList[i].check = false;
                                }
                                var allProducts = [];
                                allProducts = allProducts.concat(that.lista, result.resultData.shopList);
                                that.lista = allProducts;
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
                });


            },
            loadMore:function () {
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
        height:0.8rem;
        background: #fff;
        left: 0;
        top: 0.88rem;
        right: 0;
    }
    .border_333{
        padding: 0.06rem 0.2rem;
        border: 1px solid #999;
        border-radius: 0.12rem;
    }
    .top_tab .border_b2 {
        border-bottom: 2px solid transparent;
    }

    .top_tab .border_b2.cur {
        border-bottom-color: #e4811d;
        color: #e4811d;
    }

    .top_tabh {
        height: 0.88rem;
    }

    .oprate_bottomh {
        height: 0.9rem;
    }

    .oprate_bottom {
        height: 0.9rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        border-top: 1px solid #f2f2f2;
    }

    .oprate_bottom .w1 {
        width: 1.4rem;
    }

    .oprate_bottom .w2 {
        width: 12em;
    }

    .checkbox {
        width: 0.36rem;
        height: 0.36rem;
    }

    .oprate_btn1 {
        background: #E4811D;
        color: #fff;
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

    .cart .w1 {
        width: 100px;
    }

    .cart .h1 {
        height: 1.04rem;
    }

    .shop_img {
        width: 50px;
        height: 50px;
    }

    .shop_jt {
        width: 20px;
        height: 36px;
    }

    .vh8 {
        height: 8px;
    }

    .imit_btn {
        padding: 0.06rem 0.2rem;
        border-radius: 0.12rem;
        background: #E4811D;
        color: #fff;
    }

    .imit_btn.gray {
        background: #dcdcdc;
    }

    .p_imga {
        width: 160px;
        height: 160px;
        border: 1px solid #dcdcdc;
        border-radius: 80px;
    }

    .p_imga .img {
        width: 100%;
        height: 100%;
        border-radius: 80px;
    }

    .cart .w3 {
        width: 80px;
    }

    .p_imga {
        width: 60px;
        height: 60px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
    }

    .p_imga .img {
        width: 100%;
        height: 100%;
    }
    .x_num {
        position: relative;
        width: 5em;
    }

    .x_num .s_num {
        padding: 2px 5px;
        line-height: 1;
        position: absolute;
        left: 50%;
        margin-left: 10px;
        top: 3px;
        border-radius: 8px;
        background: #E4811D;
        color: #fff;
        font-size: 8px;
    }
    .oprate_img {
        width: 25px;
        height: 25px;
    }
    .txt_two{
        line-height: .52rem;
    }

</style>
