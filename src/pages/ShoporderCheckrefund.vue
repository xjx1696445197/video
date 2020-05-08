<template>
    <div id="orderCheckrefund" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="regiset"></div>
            <p class="HEADER_SHOP_TITLE">售后进度</p>
        </div>
        <div class='top_view bgfff all pad_10 mar_b10' style="margin-top: .88rem">
            <div class='mar_b10'>售后单号：{{orderData.returnsApplyNo}}</div>
            <div class='mar_b10'>申请时间：{{orderData.applytime}}</div>
            <div class='mar_b10'>服务进度：
                <span class='czt' v-if="orderData.applyState==1&orderData.returnsState==0">待处理</span>
                <span class='czt' v-if="orderData.applyState==2&orderData.returnsState<2">退货中</span>
                <span class='czt' v-if="(orderData.applyState==2&orderData.returnsState==3)||(orderData.applyState==2&orderData.returnsState==2)">退款中</span>
                <span class='czt' v-if="orderData.applyState==2&orderData.returnsState==4">已完成</span>
                <span class='czt' v-if="orderData.returnsState==5">已取消</span>
                <span class='czt' v-if="orderData.applyState==3&orderData.returnsState!=5">已拒绝</span>
            </div>
        </div>
        <div class='bgfff border_b'>
            <div class='pad_10 table all'>
                <div class='td p_img_view'>
                    <div class='p_img'>
                        <img :onerror="errorUserPhoto" class='img' :src='sourceUrlShop+orderData.logoImage'>
                    </div>
                </div>
                <div class='td pad_l10'>
                    <div class='txt_two h1'>{{orderData.productFullName}}</div>
                    <div class='c999 f12' :class='orderData.specificationNames==null?"opcity":""' >规格：{{orderData.specificationNames}}</div>
                    <div class='clear'>
                        <div class='L czt pad_t5'>￥{{orderData.salesPrice}}</div>
                        <div class='R'>x{{orderData.count}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class='table pad_10 bgfff all border_b'>
            <div class='td wrem6'>售后类型</div>
            <div class='td'>
                <div class='L mar_l5'><span class='inblock'>退货</span></div>
            </div>
        </div>

        <div class='table pad_10 bgfff all border_b'>
            <div class='td wrem6' style='vertical-align:top'>问题描述</div>
            <div class='td' style='vertical-align:top'>
                {{applay.miaoshu}}
            </div>
        </div>
        <div class='table pad_10 bgfff all border_b'>
            <div class='td wrem6'>退回方式</div>
            <div class='td'>
                <div class='L mar_l5'><span class='inblock'>快递至商家</span></div>
            </div>
        </div>
        <div class='bgfff'>
            <div class='pad_10 border_b table'>
                <div class='td wrem6'>联系人</div>
                <div class='td'>{{applay.linkman}}</div>
            </div>
            <div class='pad_10 pad_b10 border_b table'>
                <div class='td wrem6'>联系电话</div>
                <div class='td'>{{applay.mobilePhone}}</div>
            </div>
            <!--<div class='pad_10 pad_b10 border_b table'>-->
                <!--<div class='td wrem6'>退货图片</div>-->
                <!--<div class='td'>-->
                    <!--&lt;!&ndash;循环展示评价图片&ndash;&gt;-->
                    <!--<template v-for="(uploadImageItem,index) in orderData.uploadImageArray">-->
                        <!--<img v-if="uploadImageItem" :onerror="errorUserPhoto" class="productRefund_img" :src="sourceUrlShop+uploadImageItem" v-on:click="imgBgShow" />-->
                    <!--</template>-->
                <!--</div>-->
            <!--</div>-->

            <div class="img-bg" v-on:click="imgBgHide" v-show="imgBgIsShow">
                <mt-swipe :auto="0" :show-indicators="false" class="">
                    <mt-swipe-item v-for="(item,index) in orderData.uploadImageArray" :key="index" >
                        <div class="">
                            <img :onerror="errorUserPhoto" :src="uploadImgRoot+'/'+item" class=""/>
                        </div>
                    </mt-swipe-item>
                </mt-swipe>
            </div>

        </div>
        <!--订单其他信息  -->
        <div class='bot'></div>
        <!--总结  -->
        <div class='oprate_bottom bgfff border_b f14 txt_right'>
            <div class='table h100 pad_r10 pad_l10 all'>
                <div class='td'>
                    <div class='com_obtn white inblock mar_l5 f28'
                         v-on:click='orderCancel'
                         v-if="orderData.returnsState!=5&orderData.applyState!=3&orderData.returnsState!=4">取消申请</div>
                    <div class='com_obtn white inblock mar_l5 f28'
                         v-on:click='orderDelete'
                         v-if="orderData.returnsState==5||orderData.returnsState==4||orderData.applyState==3">删除申请</div>
                    <router-link :to="{name:'ShoporderRefund',param:{pId:orderData.productId,refundId:orderData.returnsApplyId}}"
                                 class='com_obtn white mar_l5 inblock f28'
                                 v-if="orderData.returnsState!=5&orderData.applyState!=3&orderData.returnsState!=4">修改申请</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,MessageBox} from 'mint-ui';
    Vue.component(Button.name, Button);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/shop/mrbj.png';

    import {sourceUrlShop} from "@/config";

    import {Swipe,SwipeItem} from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    export default {
        components:{},
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                refundId:this.$route.params.refundId,
                applay:{miaoshu:"退货描述",linkman:"联系人",mobilePhone:""},
                orderData:{returnsApplyNo:"",applytime:"",applyState:2,returnsState:3,logoImage:"",specificationNames:null,productFullName:"商品名称",salesPrice:0.01,count:1},
                uploadImgRoot: urlUtil.uploadImgRoot,
                imgBgIsShow:false//图片预览是否展示
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            this.$store.commit('isShowNavBar', false);
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            jsonAjax.post(urlUtil.getApiUrl("order_applydetail"), { returnsApplyId: that.refundId,customerId: that.$store.state.loginInfo.customerId }, function (result) {
                if (result.returnCode == 1) {
                    var pro_data = {};
                    var applay = {};
                    pro_data = result.resultData.returnsApply[0];

                    //获取评价图片，有一张或者多张，使用 , 逗号 分割，返回页面模板数据为数组类型。
                    if(pro_data.uploadImage!=null&&pro_data.uploadImage.length>0){
                        //保存评价图片为数组类型
                        //判断包含 , 逗号，表示都多张图片
                        var uploadImageArray = pro_data.uploadImage.split(",");
                        //重新定义uploadImage为数组类型
                        pro_data.uploadImageArray=uploadImageArray;
                    }

                    pro_data.productFullName = pro_data.productName;
                    pro_data.applytime = urlUtil.exchange_time(pro_data.applyTime).all_time;
                    applay.linkman = pro_data.linkman;
                    applay.mobilePhone = pro_data.mobilePhone;
                    applay.miaoshu = pro_data.problemDescription;
                    that.orderData=pro_data;
                    that.applay= applay;
                }
            })

        },
        methods: {
            regiset: function () {
                //返回上一个路由
                this.$router.push({name:'ShoporderListrefund',params:{type:'6'}});
            },
            orderCancel:function () {
                var that=this;
                MessageBox.confirm('确认取消?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("order_cancelapply"), {returnsApplyId: that.refundId,customerId: that.$store.state.loginInfo.customerId}, function (result) {
                        if (result.returnCode == 1) {
                            that.orderData.returnsState=5;
                        }
                    })
                })
            },
            orderDelete:function () {
                var that=this;
                MessageBox.confirm('确认删除?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("order_deletelapply"), {returnsApplyId: that.refundId,customerId: that.$store.state.loginInfo.customerId}, function (result) {
                        if (result.returnCode == 1) {
                            that.$router.back(-1);
                        }
                    })
                })
            },
            //点击小图片，展示轮播图
            imgBgShow(){
                this.imgBgIsShow = true;
            },
            //点击遮罩层，遮罩层隐藏
            imgBgHide(){
                this.imgBgIsShow = false;
            }

        }
    }
</script>

<style scoped>
    .step {
        width: 100px;
        text-align: center;
        position: relative;
    }

    .step:after {
        position: absolute;
        left: 50%;
        width: 2px;
        margin-left: -1px;
        top: 0;
        bottom: 0;
        background: #dcdcdc;
        content: "";
        z-index: 1;
    }

    .step img {
        width: 58px;
        height: 58px;
        z-index: 2;
        position: relative;
    }
    .bot {
        height: 0.9rem;
    }

    .oprate_bottom {
        height: 0.9rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        border-top: 1px solid #f2f2f2;
    }

    .oprate_bottom .w2 {
        width: 16em;
    }

    .oprate_btn1 {
        background: #ff0036;
        color: #fff;
        display: inline-block;
        border-radius: 4px;
        padding: 2px 10px;
    }
    .p_img_view {
        width: 82px;
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
    .checkbox {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }
    .p_num .add, .p_num .sub {
        width: 18px;
        height: 18px;
    }

    .p_num .add .img, .p_num .sub .img {
        width: 18px;
        height: 18px;
    }

    .p_num .input {
        padding: 5px 5px;
        text-align: center;
        width: 100px;
    }

    .txt{ border: 1px solid #dcdcdc; padding: 10px; width: 100%;  }
    .opcity{ opacity: 0}


    .productRefund_img{
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
        padding-top: 25%;
    }
    .img-bg img{
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
    }
.wrem6{
    width: 1.5rem!important;
}
    .com_obtn.white{
        border-radius: .4rem;
        color: #e4811d;
        border: 1px solid #e4811d;
    }
</style>
