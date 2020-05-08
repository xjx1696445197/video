<template>

    <div id="orderPay" class="content_box">
        <div class="spiltHeader"></div>

        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="repeatedsubm"></div>
            <p class="HEADER_SHOP_TITLE">订单支付</p>
        </div>
        <div class='bgfff pad_20' style='padding-top:40px; padding-bottom:40px'>
            <div class="mar_b20 pad_b20">
                感谢您的购买，订单已提交成功！
            </div>
            <div class="mar_b20 pad_b20">
                订单编号：<span class='cred'>{{orderSn}}</span>
            </div>
            <div class="mar_b20 pad_b20">
                <router-link :to="{name:'ShopOrderList',params:{type:'2'}}" style="display:block; padding: 5px; border:1px solid #dcdcdc; text-align: center;">查看订单</router-link>
            </div>
            <div class='pad_t20 pad_b20'>
                <b>请选择支付方式</b>
            </div>
            <!--<div class="table border_b pad_20" v-on:click='selectPay(1)' v-if="boxWay==2">-->
                <!--<div class="td" style="width: 35px"><img src="../static/images/shop/order_pay_03.png" width="0.7rem"> </div>-->
                <!--<div class="td pad_l20">微信支付</div>-->
                <!--<div class="td checkwidth">-->
                    <!--<div class='inblock checkbox'>-->
                        <!--<img class='checkbox' src='../static/images/shop/checkbox.png' v-if="payWay!=1">-->
                        <!--<img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-else>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="table border_b pad_20" v-on:click='selectPay(2)' v-if="boxWay==1">-->
                <!--<div class="td" style="width: 0.7rem"><img src="../static/images/shop/order_pay_05.png" width="35px"> </div>-->
                <!--<div class="td pad_l20">支付宝支付</div>-->
                <!--<div class="td checkwidth">-->
                    <!--<div class='inblock checkbox'>-->
                        <!--<img class='checkbox' src='../static/images/shop/checkbox.png' v-if="payWay!=2">-->
                        <!--<img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-else>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <div class="table border_b pad_20" v-on:click='selectPay(3)'>
                <div class="td" style="width: 0.5rem"><img src="../static/images/shop/icon_jf.png" class="pay_img"> </div>
                <div class="td pad_l20">积分支付</div>
                <div class="td checkwidth">
                    <div class='inblock checkbox'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="payWay!=3">
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="payWay==3">
                    </div>
                </div>
            </div>
<!--            <div class='pad_t20 pad_b20 border_b table'  v-if="payWay==3">-->
<!--                &lt;!&ndash;<div class='td wrem4 c666'>支付密码</div>&ndash;&gt;-->
<!--                <div class='td'>-->
<!--                    <input class='pad_l20 col12' v-model="payPassword" placeholder='请输入支付密码' type="password">-->
<!--                </div>-->
<!--                &lt;!&ndash;<div class="td wrem6 txt_right"><div class="com_btn3 txt_center" v-on:click="openImgcode()">{{send_txt}}</div></div>&ndash;&gt;-->
<!--            </div>-->

        </div>
        <div class="mb" v-show="payPasswordstroe">
            <div>
                <p>交易密码</p>
                <p><input type="password" v-model="payPassword" style="background: #fff;border: 1px solid #ccc;"></p>
                <p><span @click="Cancellationpayment">取消</span><span @click="Okonpayment">确认</span></p>
            </div>
        </div>
        <div class='bot_h'></div>
        <!--总结  -->
        <div class='oprate_bottom bgfff border_b f28' style="height: 0.8rem">
            <div class='table h100 all'>
                <div class='td oprate_btn1 txt_center' v-on:click='orderPay'>
                    确认支付
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import Vue from 'vue';
    import { Button,MessageBox,Toast} from 'mint-ui';
    Vue.component(Button.name, Button);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        data () {
            return {
                payPasswordstroe:false,
                orderSn:this.$route.query.orderSn,
                orderId:this.$route.query.orderId,
                orderType:this.$route.query.orderType,//1总订单，0子订单
                // payWay:1,//1微信2支付宝3余额
                payWay:3,
                boxWay:1,//1普通浏览器，2微信浏览器
                payPassword:'',
                uploadImgRoot: urlUtil.uploadImgRoot
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            var that=this;
            var useragent = navigator.userAgent;//获取浏览器类型
            //判断是否是微信内置浏览器  如果是则进入
            if (useragent.match(/MicroMessenger/i) == 'MicroMessenger') {
                //微信支付
                that.boxWay=2;
                that.payWay=1;
            }else{
                //支付宝支付
                that.boxWay=1;
                // that.payWay=2;
            //    优先使用积分支付 开通之后再屏蔽
                that.payWay=3;
            }
        },
        methods: {
            repeatedsubm:function(){
                var that=this;
                that.$router.back(-1);
                that.$router.back(-1);

            },
            //返回全部订单页面，避免用户回退重复提交页面
            routerBack: function () {
                this.$router.push({name:"orderList",params:{type:2}});
            },
            selectPay:function (index) {
                this.payWay=index;

            },
            orderPay:function () {
                var that=this;
                //支付宝支付
                if(this.payWay==2)
                {
                    var param = {
                        customerId:that.$store.state.userinfo.userId ,
                        ordersNo: this.orderSn,isTotalOrdersNo:this.orderType};
                    //支付宝支付
                    jsonAjax.post(urlUtil.getApiUrl("shopjsp_ali_pay"), param, function (result) {
                        if (result.returnCode == 1) {
                            //集成支付宝支付
                            const div = document.createElement('div');
                            div.innerHTML = result.resultData;
                            document.body.appendChild(div);
                            document.forms.punchout_form.submit();
                            //支付成功提示
                            that.$router.push({name:"ShopOrderPaySuccess",params:{orderId:that.orderId,orderSn:that.orderSn}});
                        } else {
                            //支付成功提示
                            MessageBox.alert('支付失败！').then(action => {
                                // 支付失败后跳转到失败页面
                                that.$router.push({name:"ShopOrderPayFail",params:{orderId:that.orderId,orderSn:that.orderSn}});
                            });
                        }
                    })
                }
                //微信支付
                else if(this.payWay==1){
                    //微信支付
                    var param = {
                        customerId:that.$store.state.userinfo.userId,
                        openid:localStorage.getItem("openid"),ordersNo:this.orderSn,isTotalOrdersNo:this.orderType};
                    //使用ajax异步get提交，"false"：请求方式为同步
                    jsonAjax.post(urlUtil.getApiUrl("per_wx_to_pay"), param, function (result) {
                        //获取微信签名对象
                        var obj = result.resultData;
                        //调取微信支付js
                        WeixinJSBridge.invoke('getBrandWCPayRequest',
                            {
                                "appId" : obj.appId, //公众号名称，由商户传入
                                "timeStamp":obj.timeStamp, //时间戳，自 1970 年以来的秒数
                                "nonceStr" : obj.nonceStr, //随机串
                                "package" : obj.package, //商品包信息
                                "signType" : obj.signType, //微信签名方式:
                                "paySign" : obj.sign //微信签名
                            },
                            function(res) {
                                if (res.err_msg == "get_brand_wcpay_request:ok") {
                                    Toast("支付成功！");
                                    //微信异步手动回调，修改数据库，支付成功
                                    that.$router.push({name:"ShopOrderPaySuccess",params:{orderId:that.orderId,orderSn:that.orderSn}});
                                } else {
                                    //支付成功提示
                                    MessageBox.alert('支付失败！').then(action => {
                                        // 支付失败后跳转到失败页面
                                        that.$router.push({name:"ShopOrderPayFail",params:{orderId:that.orderId,orderSn:that.orderSn}});
                                    });
                                }
                            });
                    });
                }
                //余额支付

                else if(this.payWay==3){
                    this.payPasswordstroe=true

                }
            },
            Cancellationpayment:function(){
                this.payPasswordstroe=false
                this.payPassword=''
            },
            Okonpayment:function () {
                var that=this
                if(this.payPassword=="")
                {
                    Toast("输入交易密码");
                    return false;
                }
                this.payPasswordstroe=false
                console.log(1)
                var param = {
                    customerId:that.$store.state.userinfo.userId,
                    // customerId:'10007',
                    ordersNo:this.orderSn,isTotalOrdersNo:this.orderType};
                param.payPassword = this.payPassword;
                console.log(JSON.stringify(param))
                console.log('余额支付')
                //余额支付
                jsonAjax.post(urlUtil.getApiUrl("balance_pay"), param, function (result) {
                    that.payPassword=''
                    console.log('余额支付成功')
                    if (result.returnCode == 1) {
                        //result.resultData：1.支付成功；2.余额不足；3.未设置支付密码；4.密码错误 5.该账单已支付
                        if (result.resultData == 1) {
                            //支付成功后
                            that.$router.push({name:"ShopOrderPaySuccess",params:{orderId:that.orderId,orderSn:that.orderSn}});
                        } else if(result.resultData == 2){
                            MessageBox.confirm('积分余额不足，请前往兑换积分?',{confirmButtonText:'去兑换'}).then(action => {
                                that.$router.push({name:"ShopExchangepoints",params:{type:'USDT'}});
                            })
                        } else if(result.resultData == 3){
                            Toast("未设置交易密码，请到用户中心设置交易密码");
                        } else if(result.resultData == 4){
                            Toast("密码错误");
                        }else if(result.resultData == 5){
                            Toast("该账单已支付");
                        }
                    } else {
                        MessageBox.alert('支付失败！').then(action => {
                            // 支付失败后跳转到失败页面
                            that.$router.push({name:"ShopOrderPayFail",params:{orderId:that.orderId,orderSn:that.orderSn}});
                        });
                    }
                })
            }

        }
    }
</script>

<style scoped>
    /*.mint-msgbox-header{*/
    /*    padding: 25px 0 25px!important;*/
    /*}*/
    .mb {
        z-index: 999;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
    }
    .pay_img{
        width: 0.5rem;
        height: 0.5rem;
    }

    .mb > div {
        color: #333;
        width: 5rem;
        background: #eee;
        height: 2.5rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -1.25rem;
        margin-left: -2.5rem;
        border-radius: .1rem;
        text-align: center;
    }

    .mb > div > p:nth-of-type(1) {
        line-height: .7rem;
        font-weight: bold;
    }

    .mb > div > p:nth-of-type(2) {
        line-height: 1rem;
        border-bottom: 1px solid #CDCED2;
    }

    .mb > div > p:nth-of-type(3) span {
        display: inline-block;
        width: 50%;
        height: .8rem;
        line-height: .8rem;
        color: #e4811d;
    }

    .mb > div > p:nth-of-type(3) span:nth-of-type(1) {
        border-right: 1px solid #CDCED2;
    }
    .bot_h {
        height: 0.47rem;
    }

    .oprate_bottom {
        height: 0.45rem;
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

    /* .checkbox{ width: 40rpx; height: 40rpx;} */

    .oprate_btn1 {
        background: #E4811D;
        color: #fff;
    }
    .checkwidth{ width: 18px;}
    .checkbox {
        width: 18px;
        height: 18px;
    }
</style>
