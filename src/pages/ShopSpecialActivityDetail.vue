<template>
    <div id="specialProduct" class="content_box">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">专场促销详情</p>
        </div>

        <div class='img_box img_big2 activity mar_b1' style="margin-top: 0.4rem">
            <div class='f0 img_cnt'>
                <img :src='sourceUrlShop+largePoster' class='img'>
            </div>
            <div class='font_div'>
                <div class='txt_one'>{{promotionName}}</div>
            </div>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class='pad_10 txt_center f28' v-if="list.length<1">暂无相关商品~</div>
            <div class='pro_list pad_1 all f28'>
                <div class='clear all pad_1'>
                    <div v-for="(product,subIndexValue) in list">
                        <router-link :to="{name:'ShopProductDetail',params:{pId:product.productId}}" class='L all pad_1 col6'>
                            <div class='img_div f0 img_box img_big1 bgfff'>
                                <div class='img_cnt'>
                                    <img :onerror="errorUserPhoto" class='img' :src="sourceUrlShop+product.logoImg">
                                </div>
                            </div>
                            <div class='txt_center txt_one bgfff all pad_10 f28'>{{product.productFullName | strFilter}}</div>
                            <div class='bgfff txt_center czt all pad_10 f28'><span class="pr10">￥{{product.salesPrice}} </span>| <span class="pl10">{{product.salesCredits}}</span> 积分</div>
                        </router-link>
                    </div>

                </div>
            </div>
            <div class="pad_10 txt_center">{{loadTxt}}</div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,Toast } from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.component(Toast.name, Toast);
    import { sourceUrlShop } from "@/config";
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/mrbj.png';

    export default {
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                topTitle:this.$route.params.name,
                largePoster:'',
                promotionName:this.$route.params.name,
                promotionId:this.$route.params.id,
                list:[],
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
            var that=this;
            that.doQuery();

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
            go(){
                this.$router.push({name:"shopSpecialActivity"});
            },
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            doQuery:function () {
                var that = this;
                var param = { page: that.curPage,promotionId:that.promotionId};

                jsonAjax.post(urlUtil.getApiUrl("special_prolist"), param, function (result) {
                    // console.log(result)
                    if (result.returnCode == 1) {
                        that.largePoster=result.resultData.largePoster;
                        if (result.resultData.productList.length>0) {
                            var allProducts = [];
                            allProducts = allProducts.concat(that.list,result.resultData.productList);
                            that.list=allProducts;
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
            loadMore:function ()  {
//        console.log(this.loadTag)
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
    .page{
        background: #fff;
    }
    .activity {
        border-radius: 0.08rem;
        background: #fff;
        overflow: hidden;
    }

    .activity .font_div {
        position: absolute;
        z-index: 10;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 0.16rem 0.2rem;
    }
    .list{
        position: absolute;
        bottom: 0rem;
        top: 4.3rem;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
</style>
