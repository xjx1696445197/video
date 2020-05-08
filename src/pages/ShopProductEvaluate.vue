<template>
    <div id="productEvaluate" class="content_box">
        <!--<div class="spiltHeader"></div>-->
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">商品评价</p>
        </div>
       

        <div class='top_tab bgfff txt_center border_b' style="margin-top: 0.88rem;">
            <div class='table h100 f26' style="position: fixed;top: .88rem;width: 100%;left: 0;height: .8rem;background: white;">
                <div class='td' :class="tabIndex==1?'cur':''" v-on:click='tabClick(1)'>全部({{evaluate.sumCount}})</div>
                <div class='td' :class="tabIndex==2?'cur':''" v-on:click='tabClick(2)'>好评({{evaluate.goodCount}})</div>
                <div class='td' :class="tabIndex==3?'cur':''" v-on:click='tabClick(3)'>中评({{evaluate.midCount}})</div>
                <div class='td' :class="tabIndex==4?'cur':''" v-on:click='tabClick(4)'>差评({{evaluate.badCount}})</div>
            </div>
        </div>
        <!--<div class='top_h'></div>-->
        <div class='pad_10 txt_center' v-if="list.length<1">
            <span class='inblock'>暂无相关信息~</span>
        </div>
        <div class='pad_l10 pad_r10 bgfff' v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class='border_b pad_t10 pad_b10 all' v-for="(item,index) in list">
                <div class='table all mar_b5'>
                    <!--用户头像隐藏，因用户不传头像时，展示效果不好-->
                    <!--<div class='f0 td eva_img'>
                                <img :src='uploadImgRoot+"/"+item.cutomerImg' class='img'>
                              </div>-->
                    <div class='eva_title td f24'>{{item.isAnonymous==1 ? '******' : item.appraiserName}}</div>
                    <div class='td txt_right f0'>
                        <div class='inblock eva_star mar_l5' v-if="item.level>-2">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                        <div class='inblock eva_star mar_l5' v-if="item.level>-1">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                        <div class='inblock eva_star mar_l5' v-if="item.level>-1">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                        <div class='inblock eva_star mar_l5' v-if="item.level>0">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                        <div class='inblock eva_star mar_l5' v-if="item.level>0">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                    </div>
                </div>
                <div class='f26 c666 mar_b5'>{{item.content}}</div>
                <div class='f26 c666 mar_b5'>
                    <!--循环展示评价图片-->
                    <template v-for="(uploadImageItem,uploadImageItemIndex) in item.uploadImageArray">
                        <img v-if="uploadImageItem" :onerror="errorUserPhoto" class="productEvaluate_img" :src="sourceUrlShop+uploadImageItem" v-on:click="imgBgShow(index)" />
                    </template>
                </div>

                <!--展示评价图片预览-->
                <div class="img-bg" v-on:click="imgBgHide(index)" v-if="imgBgIsShow == index" >
                    <mt-swipe :auto="0" :show-indicators="false" class="">
                        <mt-swipe-item v-for="(uploadImageItem,index) in item.uploadImageArray" :key="index" >
                            <div class="">
                                <img :onerror="errorUserPhoto" :src="sourceUrlShop+uploadImageItem" class=""/>
                            </div>
                        </mt-swipe-item>
                    </mt-swipe>
                </div>

                <div class='f24 c666'>{{item.showTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</div>
            </div>
        </div>
        <div class="pad_10 txt_center">{{loadTxt}}</div>
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
    import userPhoto from '@/static/images/mrbj.png';

    export default {
        data () {
            return {
                sourceUrlShop,
                tabIndex:1,//1全部2好评3中评4差评
                evaluate:{sumCount:0,goodCount:0,midCount:0,badCount:0},
                pId:this.$route.params.pId,
                list:[],
                errorUserPhoto:'this.src="' + userPhoto + '"',
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading:false,
                loadTag:false,//是否翻页标志
                loadTxt:"",
                imgBgIsShow:null,//图片预览是否展示
                curPage:1//当前页码
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            this.$store.commit('isShowNavBar', false);
            this.doQuery();
        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            //    返回上一个页面

            },
            tabClick:function (index) {
                //切换tab
                if(index!=this.tabIndex)
                {
                    this.curPage=1;
                    this.list=[];
                    this.tabIndex=index;
                    this.loadTxt="";
                    this.doQuery();
                }
            },
            doQuery: function (eventType, eventTxt,eventId, queryType) {
                var that = this;
                var param = null;
                param={productId: that.pId, type: that.tabIndex, page: that.curPage};
                jsonAjax.post(urlUtil.getApiUrl("product_evaluate"), param, function (result) {
                    if (result.returnCode == 1) {
                        that.evaluate=result.resultData;
                        var evaluationListTemp = result.resultData.evaluationList;
                        if (evaluationListTemp) {
                            for (var i = 0; i < evaluationListTemp.length; i++) {
                                //获取评价图片，有一张或者多张，使用 , 逗号 分割，返回页面模板数据为数组类型。
                                if(evaluationListTemp[i].uploadImage!=null&&evaluationListTemp[i].uploadImage.length>0){
                                    //保存评价图片为数组类型
                                    //判断包含 , 逗号，表示都多张图片
                                    var uploadImageArray = evaluationListTemp[i].uploadImage.split(",");
                                    //重新定义uploadImage为数组类型
                                    evaluationListTemp[i].uploadImageArray=uploadImageArray;
                                }
                            }
                            var allList = [];
                            allList = allList.concat(that.list, evaluationListTemp);
                            that.list=allList;
                            that.curPage++;
                            that.loading = false;
                            that.loadTag=true;
                        } else {
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
            loadMore() {
                if(this.loadTag)
                {
                    this.loadTxt="正在加载...";
                    this.loading = true;
                    this.doQuery();
                }
            },
            //点击小图片，展示轮播图
            imgBgShow(index){
                this.imgBgIsShow = index;
            },
            //点击遮罩层，遮罩层隐藏
            imgBgHide(index){
                this.imgBgIsShow = null;
            }

        }
    }
</script>

<style scoped>
    .topshow_pe{
        position:static;
    }

    .top_tab {
        /*position: fixed;*/
        left: 0;
        right: 0;
        /*top: 0.45rem;*/
        z-index: 5;
        height: 0.8rem;
    }

    .top_tab  .td {
        border-bottom: 3px solid transparent;
    }

    .top_tab  .td.cur {
        color: #E4811D;
        border-color: #E4811D;
    }

    .top_h {
        height: 0.4rem;
    }

    .eva_head {
        width: 50px;
    }

    .eva_head img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #f2f2f2;
    }

    .eva_img {
        margin: 0px 2px 2px 0px;
    }

    .eva_img img {
        width: 40px;
        height: 40px;
    }

    /*评价  */

    .eva_img {
        width: 40px;
    }

    .eva_img .img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #dcdcdc;
    }

    .eva_star {
        width: 20px;
        height: 20px;
    }

    .eva_star .img {
        width: 100%;
        height: 100%;
    }

    .eva_title {
        width: 8em;
    }

    .productEvaluate_img{
        width: 60px;
        height: 60px;
        border: 1px solid #dcdcdc;
        display: inline-block;
        vertical-align: middle;
        margin-right:5px;
        margin-top:5px;
    }
    .img-bg {
        width:100%;
        height:100%;
        position:fixed;
        left:0;
        top:0;
        z-index:10;
        background:rgba(0,0,0,0.9);
        padding-top: 15%;
    }
    .img-bg img{
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
    }

</style>
