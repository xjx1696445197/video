<template>
    <div id="invoiceTab" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">发票信息</p>
        </div>

        <div class='pad_20 bgfff txt_center all table border_b' v-if="invoiceType!=3" style="margin-top: 0.88rem">
            <div class='td' v-on:click='fapiaoSelect(0)'>
                <img src="../static/images/shop/checkbox.png" v-if="invoiceType!=0" class='ver_mid checkbox inblock'>
                <img src="../static/images/shop/checkbox_ed.png" v-if="invoiceType==0" class='ver_mid checkbox inblock'>
                <span class='inblock'>不开发票</span>
            </div>
            <div class='td' v-on:click='fapiaoSelect(1)'>
                <img src="../static/images/shop/checkbox.png" v-if="invoiceType!=1" class='ver_mid checkbox inblock'>
                <img src="../static/images/shop/checkbox_ed.png" v-if="invoiceType==1" class='ver_mid checkbox inblock'>
                <span class='inblock'>普通发票</span>
            </div>
            <div class='td' v-on:click='fapiaoSelect(2)'>
                <img src="../static/images/shop/checkbox.png" v-if="invoiceType!=2" class='ver_mid checkbox inblock'>
                <img src="../static/images/shop/checkbox_ed.png" v-if="invoiceType==2" class='ver_mid checkbox inblock'>
                <span class='inblock'>增值税发票</span>
            </div>
        </div>
        <!--普通发票  -->
        <div class='pad_10 bgfff all' v-if="invoiceType==1" >

            <div class='table pad_20 border_b all'>
                <div class='td wrem9'>发票抬头：</div>
                <div class='td'>
                    <input class="col12" placeholder='输入发票抬头' v-model='ptData.companyNameForInvoice'>
                </div>
            </div>
            <div class='table pad_20 border_b all'>
                <div class='td wrem9'>统一社会信用代码：</div>
                <div class='td'>
                    <input class="col12" type="text" placeholder='统一社会信用代码' v-model='ptData.taxpayerNumber'>
                </div>
            </div>
            <div class='pad_10 f28'>
                温馨提示：发票开公司时，需填写统一社会信用代码
            </div>
        </div>
        <!--增值税  -->
        <div class='pad_10 bgfff all' v-if="invoiceType==2||invoiceType==3">
            <div style="height: 1rem" v-if="invoiceType==3">

            </div>
            <div class='table pad_20 border_b all'>
                <div class='td wrem9'>发票抬头：</div>
                <div class='td'>
                    <input class="col12" placeholder='输入发票抬头' v-model='zzhData.companyNameForInvoice'>
                </div>
            </div>
            <div class='table pad_20 border_b all'>
                <div class='td wrem9'>统一社会信用代码：</div>
                <div class='td'>
                    <input class="col12" type="text" placeholder='统一社会信用代码' v-model='zzhData.taxpayerNumber'>
                </div>
            </div>
            <div class='table pad_20 border_b all'>
                <div class='td wrem9'>地址：</div>
                <div class='td'>
                    <input class="col12" placeholder='请输入地址' v-model='zzhData.addressForInvoice'>
                </div>
            </div>
            <div class='table pad_20 border_b all'>
                <div class='td wrem9'>电话：</div>
                <div class='td'>
                    <input class="col12" type="number" placeholder='请输入电话' v-model='zzhData.phoneForInvoice'>
                </div>
            </div>
            <div class='table pad_20 border_b all'>
                <div class='td wrem9'>开户行：</div>
                <div class='td'>
                    <input class="col12" placeholder='请输入开户行' v-model='zzhData.openingBank'>
                </div>
            </div>
            <div class='table pad_20 border_b all'>
                <div class='td wrem9'>账号：</div>
                <div class='td'>
                    <input class="col12" type="number" placeholder='请输入账号' v-model='zzhData.bankAccountNumber'>
                </div>
            </div>
        </div>
        <div class='bot'></div>
        <!--新增收货地址  -->
        <div class='oprate_bottom'>
            <div class='table all h100'>
                <div class='td txt_center oprate_btn1 f28' v-on:click='okFapiao'>确认</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,Toast} from 'mint-ui';
    Vue.component(Button.name, Button);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        components:{},
        data () {
            return {
                isShow:true,
                invoiceType:this.$route.params.type,
                ptData:{companyNameForInvoice:"",taxpayerNumber:""},
                zzhData:{companyNameForInvoice:"",taxpayerNumber:"",addressForInvoice:"",phoneForInvoice:"",openingBank:"",bankAccountNumber:"",
                    customerToken:this.$store.state.userinfo.token},
                uploadImgRoot: urlUtil.uploadImgRoot,
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;

            //获取普通发票
            if (localStorage.getItem("fapiao_one")) {
                this.ptData=JSON.parse(localStorage.getItem("fapiao_one"));
            }
            //获取增值税发票信息
            jsonAjax.post(urlUtil.getApiUrl("invoice_info"), {
                customerId: that.$store.state.userinfo.userId,
                customerToken:that.$store.state.userinfo.token
            }, function (result) {
                if (result.returnCode == 1) {
                    if (result.resultData.invoiceId != 0) {
                        that.zzhData= result.resultData;
                    }
                }
            })

        },

        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            fapiaoSelect:function (index) {
                //发票类型选择
                this.invoiceType=index;
            },
            okFapiao:function () {
                var that=this;
                //发票保存
                if(this.invoiceType==1)
                {
                    //普通发票
                    if(this.ptData.companyNameForInvoice=="")
                    {
                        Toast("请输入发票抬头");
                        return false;
                    }
                    /* // 如果是个人，则识别号无需填写
                    if(this.ptData.taxpayerNumber=="")
                    {
                      Toast("请输入统一社会信用代码");
                      return false;
                    }
                    if(!/^[\da-z]+$/i.test(this.ptData.taxpayerNumber))
                    {
                      Toast("统一社会信用代码格式错误");
                      return false;
                    }
                    */

                    localStorage.setItem("fapiao_one",JSON.stringify(this.ptData));

                    if(that.invoiceType!=3){
                        that.$store.state.placeOrder.fapiao=that.invoiceType;
                        var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                        orderGlobal.fapiao=that.invoiceType;

                        if(that.invoiceType==1)
                        {
                            that.$store.state.placeOrder.fapiaoData=that.ptData;
                            orderGlobal.fapiaoData=that.ptData;
                        }
                        else if(that.invoiceType==2){
                            that.$store.state.placeOrder.fapiaoData=that.zzhData;
                            orderGlobal.fapiaoData=that.zzhData;
                        }
                        localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))
                    }
                    that.$router.back(-1);
                }
                else if(this.invoiceType==2||this.invoiceType==3){
                    //增值票zzhData:{companyNameForInvoice:"",taxpayerNumber:"",addressForInvoice:"",phoneForInvoice:"",openingBank:"",bankAccountNumber:""},
                    if(this.zzhData.companyNameForInvoice=="")
                    {
                        Toast("请输入发票抬头");
                        return false;
                    }
                    if(this.zzhData.taxpayerNumber=="")
                    {
                        Toast("请输入统一社会信用代码");
                        return false;
                    }
                    if(!/^[\da-z]+$/i.test(this.zzhData.taxpayerNumber))
                    {
                        Toast("统一社会信用代码格式错误");
                        return false;
                    }

                    if(this.zzhData.addressForInvoice=="")
                    {
                        Toast("请输入地址");
                        return false;
                    }

                    if(this.zzhData.phoneForInvoice=="")
                    {
                        Toast("请输入电话");
                        return false;
                    }
                    if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.zzhData.phoneForInvoice))
                    {
                        Toast("电话格式不正确");
                        return false;
                    }
                    if(this.zzhData.openingBank=="")
                    {
                        Toast("请输入开户行");
                        return false;
                    }
                    if(this.zzhData.bankAccountNumber=="")
                    {
                        Toast("请输入账号");

                        return false;
                    }
                    if(this.zzhData.bankAccountNumber.toString().length<16||this.zzhData.bankAccountNumber.toString().length>19)
                    {
                        Toast("账号为16-19个字节");
                        return false;
                    }
                    var param =this.zzhData;
                    param.customerId=that.$store.state.userinfo.userId;
                    //保存发票信息
                    jsonAjax.post(urlUtil.getApiUrl("invoice_save"), param, function (result) {
                        // console.log(result)
                        if (result.returnCode == 1) {
                            if(that.invoiceType!=3){
                                var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                                that.$store.state.placeOrder.fapiao=that.invoiceType;
                                orderGlobal.fapiao=that.invoiceType;
                                if(that.invoiceType==1)
                                {
                                    that.$store.state.placeOrder.fapiaoData=that.ptData;
                                    orderGlobal.fapiaoData=that.ptData
                                }
                                else if(that.invoiceType==2){
                                    that.$store.state.placeOrder.fapiaoData=that.zzhData;
                                    orderGlobal.fapiaoData=that.zzhData;
                                }
                                localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))
                            }
                            that.$router.back(-1);
                        }
                    }, true)
                }
                else{
                    if(that.invoiceType!=3){
                        var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                        that.$store.state.placeOrder.fapiao=that.invoiceType;
                        orderGlobal.fapiao=that.invoiceType;
                        if(that.invoiceType==1)
                        {
                            that.$store.state.placeOrder.fapiaoData=that.ptData;
                            orderGlobal.fapiaoData=that.ptData;
                        }
                        else if(that.invoiceType==2){
                            that.$store.state.placeOrder.fapiaoData=that.zzhData;
                            orderGlobal.fapiaoData=that.zzhData;
                        }
                        localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))
                    }
                    this.$router.back(-1);
                }

            }

        }

    }
</script>

<style scoped>
    .checkbox {
        width: 0.36rem;
        height: 0.36rem;
        margin-right: 0.1rem;
    }

    .wrem9 {
        width: 2.52rem;
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

    .oprate_btn1 {
        background: #e4811d;
        color: #fff;
    }
    input{
        border: none;
    }

</style>
