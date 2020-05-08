<template>
    <div id="orderPaysuccess" class="content_box">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">支付成功</p>
        </div>

        <div class='bgfff pad_10 txt_center' style='padding-top:40px; padding-bottom:40px'>
            <div class='mar_b10 mauto' style="display: inline-block">
                <img src='../static/images/shop/order_pays_03.png' style='width:100%;'>
            </div>
            <div class='mar_b10 pad_t10'>您的订单：
                <span class='cred'>{{orderSn}}</span> 如果您已支付成功，可以查看订单详情或者继续逛逛。</div>
            <!--<div class='pad_t10'>-->
                <!--<router-link :to="{name:'ShopOrderList',params:{type:'3',index:0}}" class='go_list' style="margin:auto;">查看订单</router-link>-->
                <!--<router-link :to="{name:'ShopIndex'}" class='go_index' style="margin:auto;">继续逛逛</router-link>-->
            <!--</div>-->
            <div class='pad_t10'>
                <router-link :to="{name:'ShopOrderList',params:{type:'3',index:0}}" class='go_list' style="margin:auto;">查看订单</router-link>
                <div class='go_index' style="margin:auto;" @click="toShopIndex">继续逛逛</div>
            </div>

        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import { Button } from 'mint-ui';
    Vue.component(Button.name, Button);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';


    export default {

        data () {
            return {
                orderSn:this.$route.params.orderSn,
                orderId:this.$route.params.orderId,
                uploadImgRoot: urlUtil.uploadImgRoot,
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {

            var that=this;
            jsonAjax.post(urlUtil.getApiUrl("product_hotlist"), {}, function (result) {
                if (result.returnCode == 1) {
                    that.list=result.resultData;
                }

            })
        },
        methods: {
            //返回全部订单页面，避免用户回退重复提交页面
            routerBack: function () {
                this.$router.push({name:"ShopOrderList",params:{type:3}});
            },
        //    toShopIndex
            toShopIndex(){
                this.$replace({
                    path: '/ShopIndex'
                })
            },

        }

    }
</script>
<style scoped>
    .go_index,.go_list{
        font-size: .28rem;
        display: inline-block;
        border: 1px solid #e4811d;
        color: #e4811d;
        width: 1.8rem;
        height: .6rem;
        line-height: .6rem;
        border-radius: .1rem;
    }
</style>

