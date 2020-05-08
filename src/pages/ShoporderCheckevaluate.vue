<template>
    <div id="orderCheckevaluate" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="Regression"></div>
            <p class="HEADER_SHOP_TITLE">评论内容</p>
        </div>
        <div v-for="(item,index) in productEvaluate" style="margin-top: 1rem">
            <div class='bgfff all pad_20 table evaluate border_b'>
                <div class='td eva_img'>
                    <img :onerror="errorUserPhoto" :src='sourceUrlShop+item.logoImg'>
                </div>
                <div class='td pad_l10 f0'>
                    <div class='inblock mar_r10 f24'>评分</div>
                    <div class='inblock checkbox'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="item.level!=1">
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="item.level==1">
                    </div>
                    <div class='inblock mar_r10 mar_l5 f24'>好评</div>
                    <div class='inblock checkbox'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="item.level!=0">
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="item.level==0">
                    </div>
                    <div class='inblock mar_r10 mar_l5 f24'>中评</div>
                    <div class='inblock checkbox'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="item.level!=-1">
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="item.level==-1">
                    </div>
                    <div class='inblock mar_r10 mar_l5 f24'>差评</div>
                </div>
            </div>
            <div class='bgfff border_b mar_b10'>
                <div class='pad_20'>
                    <div class='pj_txt f24'>{{item.content}}</div>
                </div>
            </div>
        </div>


        <div class='bgfff pad_20 evaluate f0'>
<!--            <div class='pad_b10'>-->
<!--                <div class='shop_img f0 inblock'>-->
<!--                    <img src='../static/images/shop/shop.png'>-->
<!--                </div>-->
<!--                <div class='inblock mar_l10 f28'>店铺评分</div>-->
<!--            </div>-->
            <div class='pad_b10'>
                <div class='inblock mar_r10 f28'>描述相符</div>
                <div class='inblock star' v-for="(item,index) in starScore">
                    <img src='../static/images/shop/star.png' v-if="mioashuScore<(index+1)">
                    <img src='../static/images/shop/star_en.png' v-if="mioashuScore>(index+1)||mioashuScore==(index+1)">
                </div>
            </div>
            <div class='pad_b10'>
                <div class='inblock mar_r10 f28'>物流服务</div>
                <div class='inblock star' v-for="(item,index) in starScore">
                    <img src='../static/images/shop/star.png' v-if="wuliuScore<(index+1)">
                    <img src='../static/images/shop/star_en.png' v-if="wuliuScore>(index+1)||wuliuScore==(index+1)">
                </div>
            </div>
            <div>
                <div class='inblock mar_r10 f28'>服务态度</div>
                <div class='inblock star' v-for="(item,index) in starScore">
                    <img src='../static/images/shop/star.png' v-if="fuwuScore<(index+1)">
                    <img src='../static/images/shop/star_en.png' v-if="fuwuScore>(index+1)||fuwuScore==(index+1)">
                </div>
            </div>
        </div>
        <div class='bgfff border_b mar_b10' v-if="shopTxt==undefined">
            <div class='pad_20 border_b f28'>店铺评价内容</div>
            <div class='pad_20 f28'>
                {{shopTxt}}
            </div>
        </div>

        <div class='bot_h'></div>
    </div>



</template>

<script>
    import Vue from 'vue';
    import { Button} from 'mint-ui';
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
                starScore: [1, 2, 3, 4, 5],
                productEvaluate:[{ level: 0, content: "描述试试",logoImg:"" }],
                mioashuScore:5,
                wuliuScore:5,
                fuwuScore:5,
                shopTxt:"店铺评价内容",
                uploadImgRoot: urlUtil.uploadImgRoot,
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            jsonAjax.post(urlUtil.getApiUrl("order_evaluate_detail"), { ordersId: that.orderId,customerId: that.$store.state.loginInfo.customerId }, function (result) {
                if (result.returnCode == 1) {
                    that.productEvaluate=result.resultData.productEvaluationList;
                    that.fuwuScore=result.resultData.storeEvaluation.serviceLevel;
                    that.wuliuScore=result.resultData.storeEvaluation.logisticsLevel;
                    that.mioashuScore=result.resultData.storeEvaluation.describeLevel;
                    that.shopTxt= result.resultData.storeEvaluation.content;
                }
            })

        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            Regression:function () {
                this.$router.push({name:'Shoplistvaluate',params:{type:'6'}});

            }

        }

    }
</script>

<style scoped>
    .eva_img {
        width: 1.2rem;
        font-size: 0;
    }

    .eva_img img {
        width: 1.2rem;
        height: 1.2rem;
    }

    .evaluate .star {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.1rem;
        font-size: 0;
    }

    .evaluate .star img {
        width: 0.4rem;
        height: 0.4rem;
        margin-top: 0.05rem;
    }

    .pj_txt {
        /*height: 6em;*/
    }

    .up_pic {
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
        width: 3.2rem;
        height: 3.2rem;
        border: 1px solid #f2f2f2;
        font-size: 0;
        position: relative;
    }

    .up_pic img {
        width: 3.2rem;
        height: 3.2rem;
    }

    .up_pic .delete {
        position: absolute;
        right: -0.36rem;
        top: -0.36rem;
        font-size: 0;
    }

    .up_pic .delete img {
        width: 0.96rem;
        height: 0.96rem;
    }

    .shop_img {
        width: 0.5rem;
    }

    .shop_img img {
        width: 0.5rem;
        height: 0.5rem;
    }


    .checkbox {
        width: 0.36rem;
        height: 0.36rem;
    }

    .oprate_btn1 {
        background: #ff0036;
        color: #fff;
    }

</style>
