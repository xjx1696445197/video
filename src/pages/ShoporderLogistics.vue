<template>
    <div id="orderLogistics" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">物流信息</p>
        </div>

        <div class='top_view bgfff all pad_10 mar_b10' style="margin-top: 0.88rem">
            <div class='mar_b10'>订单编号：{{orderSn}}</div>
            <div class='mar_b10'>快递名称：{{logiticData.deliveryCorpName}}</div>
            <div class=''>快递单号：{{logiticData.deliverySn}}</div>
        </div>


        <div class="txt_center pad_10" v-if="logiticList.length<1">暂无物流信息~</div>
        <div class='bgfff pad_10 all' v-if="logiticList.length>0">
            <div v-for="(item,index) in logiticList">
                <div class='table' :class='index!=0?"c999":""'>
                    <div class='td ver_top step f0 pad_t10 pad_b10'>
                        <img src='../static/images/shop/wl_03.png' v-if="index==0">
                        <img src='../static/images/shop/wl_06.png' v-if="index!=0">
                    </div>
                    <div class='td ver_top border_b pad_b10 pad_t10'>
                        <div class='mar_b5'>{{item.context}}</div>
                        <div class='c999'>{{item.time}}</div>
                    </div>
                </div>
            </div>
            <!--<div class='table c999'>-->
            <!--<div class='td ver_top step f0 pad_t10 pad_b10'><img src='../static/images/shop/wl_06.png'></div>-->
            <!--<div class='td ver_top border_b  pad_t10 pad_b10'>-->
            <!--<div class='mar_b5'>您的订单已签收</div>-->
            <!--<div class='c999'>2018-10-10 08:00:00</div>-->
            <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button} from 'mint-ui';
    Vue.component(Button.name, Button);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        components:{},
        data () {
            return {
                orderSn:'',
                logiticData:{deliveryCorpName:'',deliverySn:''},//
                logiticList:[],//
                orderId:this.$route.params.orderId,
                uploadImgRoot: urlUtil.uploadImgRoot,
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            this.$store.commit('isShowNavBar', false);
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            jsonAjax.post(urlUtil.getApiUrl("order_logitic"), { orderId: that.orderId,customerId: that.$store.state.loginInfo.customerId }, function (result) {
                console.log(result)
                if (result.returnCode == 1) {
                    that.orderSn=result.resultData.ordersNo;
                    that.logiticData= result.resultData.shipping;
                    if(result.resultData.shipping.expressInfo!=null)
                    {
                        that.logiticList=JSON.parse(result.resultData.shipping.expressInfo).data;
                    }

                }
            })

        },
        methods: {
            routerBack: function () {
                //返回上一个路由
//        this.$router.push({name:"my"});
                this.$router.back(-1);
            },

        }

    }
</script>

<style scoped>
    .step {
        width: 30px;
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
        width: 18px;
        height: 18px;
        z-index: 2;
        position: relative;
    }

</style>
