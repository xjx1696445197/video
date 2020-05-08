<template>
    <div id="orderPayfail" class="content_box">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">支付失败</p>
        </div>

        <div class='bgfff pad_20 txt_center f28' style='padding-top:40px; padding-bottom:40px'>
            <div class='mar_b20'>
                <img src='../static/images/shop/order_payf_03.png' style='width:40%;display: inline-block'>
            </div>
            <div>
                您的订单：<span class='cred'>{{orderSn}}</span> 未能支付成功</div>
            <div class='mar_b20 pad_t20'>
                如有任何问题，请及时<span class='cred'>联系客服</span>
            </div>
            <div class='pad_t20'>
                <router-link :to="{name:'ShopOrderList',params:{type:'2'}}" class='com_btn1 mar_r10'>查看订单</router-link>
                <router-link :to="{name:'ShopIndex'}" class='com_btn1'>继续逛逛</router-link>
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
                this.$router.push({name:"ShopOrderList",params:{type:2}});
            },

        }
    }
</script>
<style scoped>

</style>