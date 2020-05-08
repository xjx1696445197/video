<template>
    <div id="orderEvaluate" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">订单评论</p>
        </div>
        <div v-for="(item,index) in orderData.productList" style="margin-top: .88rem">
            <div class='bgfff all pad_10 table evaluate border_b f0'>
                <div class='td eva_img'>
                    <img :onerror="errorUserPhoto" :src='sourceUrlShop+item.logoImage'>
                </div>
                <div class='td pad_l10'>
                    <div class='inblock mar_r10 f28'>评分</div>
                    <div class='inblock checkbox' v-on:click='goodEvalu(index,1)'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="item.score!=1">
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="item.score==1">
                    </div>
                    <div class='inblock mar_r10 mar_l5 f28' v-on:click='goodEvalu(index,1)'>好评</div>
                    <div class='inblock checkbox'  v-on:click='goodEvalu(index,0)'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="item.score!=0">
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="item.score==0">
                    </div>
                    <div class='inblock mar_r10 mar_l5 f28'  v-on:click='goodEvalu(index,0)'>中评</div>
                    <div class='inblock checkbox'  v-on:click='goodEvalu(index,-1)'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="item.score!=-1">
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="item.score==-1">
                    </div>
                    <div class='inblock mar_r10 mar_l5 f28'  v-on:click='goodEvalu(index,-1)'>差评</div>
                </div>
            </div>

            <!--添加图片-->
            <!--<div class="photo">
              <div class="title">添加图片（最多上传8张）</div>
              <div class="photo_wrap">
                <div class="educt_hasupload_pic" v-for="(item,index) in evalList[0].tempFilePaths">
                  <img :onerror="errorUserPhoto" :src='uploadImgRoot+"/"+item.pic' class="upload">
                  <img class="delete" src='../static/images/shop/delete.png' v-on:click='deleteImg(index)' >
                </div>
                <div class="educt_upload_add" v-on:click='addPicture()'>
                  <img src='../static/images/shop/camera.png'>
                </div>
              </div>
            </div>-->

            <div class='bgfff border_b mar_b10'>
                <div class='pad_10'>
                    <textarea class='pj_txt f28 col12' placeholder='宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧' v-model='item.miaoshu'></textarea>
                </div>
            </div>
        </div>

        <div class='bgfff pad_10 evaluate f0'>
<!--            <div class='pad_b10'>-->
<!--                <div class='shop_img f0 inblock'>-->
<!--                    <img src='../static/images/shop/shop.png'>-->
<!--                </div>-->
<!--                <div class='inblock mar_l10 f28'>店铺评分</div>-->
<!--            </div>-->
            <div class='pad_b10'>
                <div class='inblock mar_r10 f28'>描述相符</div>
                <div class='inblock star' v-for="(item,index) in starScore" v-on:click='miaoScoreselect(index)'>
                    <img src='../static/images/shop/star.png' v-if="mioashuScore<(index+1)">
                    <img src='../static/images/shop/star_en.png' v-if="mioashuScore>(index+1)||mioashuScore==(index+1)">
                </div>
            </div>
            <div class='pad_b10'>
                <div class='inblock mar_r10 f28'>物流服务</div>
                <div class='inblock star' v-for="(item,index) in starScore" v-on:click='wuliuScoreselect(index)'>
                    <img src='../static/images/shop/star.png' v-if="wuliuScore<(index+1)">
                    <img src='../static/images/shop/star_en.png' v-if="wuliuScore>(index+1)||wuliuScore==(index+1)">
                </div>
            </div>
            <div>
                <div class='inblock mar_r10 f28'>服务态度</div>
                <div class='inblock star'  v-for="(item,index) in starScore" v-on:click='fuwuScoreselect(index)'>
                    <img src='../static/images/shop/star.png' v-if="fuwuScore<(index+1)">
                    <img src='../static/images/shop/star_en.png' v-if="fuwuScore>(index+1)||fuwuScore==(index+1)">
                </div>
            </div>
        </div>
<!--        <div class='bgfff border_b mar_b10'>-->
<!--            <div class='pad_10'>-->
<!--                <textarea class='pj_txt f28 col12' placeholder='说说你对店铺的印象吧' v-model="shopTxt"></textarea>-->
<!--            </div>-->
<!--        </div>-->

        <div class='bot_h'></div>
        <!--底部操作  -->
        <div class='oprate_bottom bgfff border_b f28'>
            <div class='table h100 all pad_l10 f0'>
                <div class='td w1'>
                    <div class='inblock checkbox' v-on:click='isNiming'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="isName==0">
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-else>
                    </div>
                    <div class='inblock mar_l5 f28'>匿名</div>
                </div>
                <div class='td w2 f0'>无</div>
                <div class='td oprate_btn1 txt_center f28' v-on:click='okEvaluate'>
                    确认评价
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,Toast} from 'mint-ui';
    Vue.component(Button.name, Button);
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
                orderId:this.$route.params.orderId,
                type:this.$route.params.type,
                starScore: [1, 2, 3, 4, 5],
                orderData:{productList:[{ score: 1, miaoshu: "",logoImage:"" }]},
                mioashuScore:0,//店铺描述分数
                wuliuScore:0,//物流分数
                fuwuScore:0,//服务分数
                shopTxt:"",//店铺评价
                isName:1,//是否匿名
                uploadImgRoot: urlUtil.uploadImgRoot,
                //订单商品评价列表
                evalList: [{
                    //订单商品的评价图片上传路径
                    tempFilePaths: [{pic:"shop/image/product/20180427/2018042710155202444776.jpg"}],
                    //
                    imgList: []
                }],
                //当前选中评价图片
                curImgList: []
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            jsonAjax.post(urlUtil.getApiUrl("order_detail"), { ordersId: that.orderId,customerId: that.$store.state.loginInfo.customerId,type:that.type }, function (result) {
                if (result.returnCode == 1) {
                    var order_data = result.resultData.ordersList;
                    for (var j = 0; j < order_data.productList.length; j++) {
                        order_data.productList[j].score = 1;
                        order_data.productList[j].miaoshu = "";
                    }
                    that.orderData=order_data;
                }
            })

        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            goodEvalu:function (index,score) {
                //商品评价
                this.orderData.productList[index].score = score;
            },
            miaoScoreselect:function (index) {
                //描述评价
                this.mioashuScore=index+1;
            },
            wuliuScoreselect:function (index) {
                //物流评价
                this.wuliuScore=index+1;
            },
            fuwuScoreselect:function (index) {
                //服务评价
                this.fuwuScore=index+1;
            },
            isNiming:function () {
                //是否匿名
                if(this.isName==1)
                {
                    this.isName=0
                }
                else {
                    this.isName=1;
                }
            },
            //添加图片
            addPicture:function (index) {

            },
            //删除图片
            deleteImg:function (index) {

            },
            okEvaluate:function () {
                //提交评价
                var that = this;
                var pj = 0;
                var prolist = that.orderData.productList;
                for (var i = 0; i < prolist.length; i++) {
                    // if (prolist[i].miaoshu == "") {
                    //     pj++;
                    // }
                }

                if (that.wuliuScore == 0 || that.fuwuScore == 0||that.mioashuScore==0) {
                    pj++;
                }
                // if (that.shopTxt == '') {
                //     pj++;
                // }

                if (pj != 0) {
                    Toast("请完善评价信息");
                    return false;
                }

                var param = {
                    productEvaluation: [],
                    shopEvaluation: {
                        orderDetailId: that.orderData.productList[0].orderDetailId,
                        content: that.shopTxt,
                        describeLevel: that.mioashuScore,
                        logisticsLevel: that.wuliuScore,
                        serviceLevel: that.fuwuScore
                    },
                    customerId: that.$store.state.loginInfo.customerId
                };

                for (var i = 0; i < prolist.length; i++) {
                    if(prolist[i].miaoshu==""){
                        param.productEvaluation.push({ ordersId: that.orderData.ordersId, orderDetailId: prolist[i].orderDetailId, level: prolist[i].score, isAnonymous: that.isName, content: "此用户没有填写评论。" })
                    }else {
                        param.productEvaluation.push({ ordersId: that.orderData.ordersId, orderDetailId: prolist[i].orderDetailId, level: prolist[i].score, isAnonymous: that.isName, content: prolist[i].miaoshu })

                    }
                }

                jsonAjax.post(urlUtil.getApiUrl("order_evaluate"), { paramJson: JSON.stringify(param) }, function (result) {
                    // console.log(result)
                    if (result.returnCode == 1) {
//              Toast("评价成功！")
                        that.$router.go(-1);
                    }
                    else {
                        Toast("评价失败！")
                    }
                })

            }

        }

    }
</script>

<style scoped>
    .eva_img {
        width: 60px;
        font-size: 0;
    }

    .eva_img img {
        width: 60px;
        height: 60px;
    }

    .evaluate .star {
        width: .5rem;
        height: .5rem;
        margin-right: 5px;
        font-size: 0;
    }

    .evaluate .star img {
        width: 0.4rem;
        height: 0.4rem;
        margin-top: 0.05rem;
    }

    .pj_txt {
        height: 6em;
    }

    .up_pic {
        margin-right: 10px;
        margin-bottom: 10px;
        width: 160px;
        height: 160px;
        border: 1px solid #f2f2f2;
        font-size: 0;
        position: relative;
    }

    .up_pic img {
        width: 160px;
        height: 160px;
    }

    .up_pic .delete {
        position: absolute;
        right: -18px;
        top: -18px;
        font-size: 0;
    }

    .up_pic .delete img {
        width: 48px;
        height: 48px;
    }

    .shop_img {
        width: 25px;
    }

    .shop_img img {
        width: 25px;
        height: 25px;
    }

    .bot_h {
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
        width: 5em;
    }

    .oprate_bottom .w2 {
        width: 12em;
    }


    .checkbox {
        width: 18px;
        height: 18px;
    }

    .oprate_btn1 {
        background: #e4811d;
        color: #fff;
    }

    /* 添加图片 start */

    .photo{
        margin-top: 5px;
        background-color: #fff;
        height:auto;
    }

    .title {
        color: #ffa64d;
        font-size: 14px;
        padding: 15px 20px;
    }

    .photo_wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        padding:0px 0px 20px 20px;
    }

    .educt_upload_add{
        width:50px;
        height: 50px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        margin-bottom:10px;
        padding: 8px;
    }

    .educt_upload_add image{
        width:50px;
        height: 50px;
        padding:10px;
    }

    .educt_hasupload_pic {
        width:50px;
        height: 50px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        margin-right:10px;
        margin-bottom:10px;
        padding:1px;
    }

    .educt_hasupload_pic .upload{
        width:45px;
        height: 45px;
    }

    .educt_hasupload_pic .delete{
        width: 17px;
        height: 17px;
        position: relative;
        top: -57px;
        left: 38px;
    }
    /* 添加图片 end */

</style>
