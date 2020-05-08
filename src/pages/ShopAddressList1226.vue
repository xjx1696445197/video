<template>
    <div id="addressList" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">收货地址</p>
        </div>
        <div style="margin-top: 1rem"></div>
        <div class='pad_20 txt_center' v-if="addresslist.length<1" style="font-size: .28rem;">暂无收货地址~</div>
        <div class='bgfff pad_20 bgfff mar_b10' v-for="(item,index) in addresslist" >
            <div class='pad_b10' v-on:click='addrSelect(index)' >
                <div class='mar_b5'>
                    <div class='inblock mar_r5 add_icon f20' v-if="item.tag==1">公司</div>
                    <div class='inblock mar_r5 add_icon f20' v-if="item.tag==2">住宅</div>
                    <div class='inblock mar_r5'>{{item.consignee}}</div>
                    <div class='inblock'>{{item.mobilePhone}}</div>
                </div>
                <div class='c666 f24'>{{item.regionLocationName}}{{item.cityName}}{{item.areaCountyName}}{{item.address}}</div>
            </div>
            <div class='clear pad_t10 c666 f24'>
                <div class='L mar_r10' v-if="aId!='addlist'">
                    <img src="../static/images/shop/checkbox_ed.png" class='ver_mid checkbox' v-if="item.customerAcceptAddressId==aId || item.isSendAddress==1">
                    <!--<img src="../static/images/shop/checkbox_ed.png" class='ver_mid checkbox' v-if="item.isSendAddress==1">-->
                    <img src="../static/images/shop/checkbox.png" class='ver_mid checkbox'  v-on:click='setMoren(index)' v-if="item.customerAcceptAddressId!=aId && item.isSendAddress!=1">
                    <span class='inblock mar_l5 f28' v-if="item.isSendAddress==0">选择</span>
                    <span class='inblock mar_l5 f28' v-if="item.isSendAddress==1">默认</span>
                </div>
                <div class='L mar_r10' v-else>
                    <img src="../static/images/shop/checkbox_ed.png" class='ver_mid checkbox' v-if="item.isSendAddress==1">
                    <img src="../static/images/shop/checkbox.png" class='ver_mid checkbox' v-on:click='setMoren(index)' v-if="item.isSendAddress==0">
                    <span class='inblock mar_l5 f28' v-if="item.isSendAddress==0">选择</span>
                    <span class='inblock mar_l5 f28' v-if="item.isSendAddress==1">默认</span>
                </div>
                <div class='R'>
                    <router-link :to="{name:'Shopaddressedit',params:{aId:item.customerAcceptAddressId}}" class='inblock mar_l10'>
                        <img src="../static/images/shop/address_07.png" class='ver_mid checkbox'>
                        <span class='inblock mar_l5 f28'>编辑</span>
                    </router-link>
                    <div class='inblock mar_l10' v-on:click='addrDelete(index)'>
                        <img src="../static/images/shop/address_09.png" class='ver_mid checkbox'>
                        <span class='inblock mar_l5 f28'>删除</span>
                    </div>
                </div>
            </div>
        </div>
        <div class='bot'></div>
        <!--新增收货地址  -->
        <div class='oprate_bottom'>
            <div class='table all h100'>
                <router-link :to="{name:'Shopaddressedit',params:{aId:'newaddr'}}" class='td txt_center oprate_btn1'>
                    新增收货地址
                </router-link>
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

    export default {
        components:{},
        data () {
            return {
                addresslist:[],
                aId:this.$route.params.aId,
                uploadImgRoot: urlUtil.uploadImgRoot,
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            jsonAjax.post(urlUtil.getApiUrl("address_list"), {customerId: that.$store.state.userinfo.userId}, function (result) {
                //console.log(result);
                if (result.returnCode == 1) {
                    that.addresslist=result.resultData;
                }
            });


        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            addrSelect:function (index) {
                //选择地址
                this.aId=this.addresslist[index].customerAcceptAddressId;
                this.$store.state.placeOrder.address=this.addresslist[index];

                var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                orderGlobal.address=this.addresslist[index];
                localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))
                //设置默认地址

                var that = this;
                var i = index;
                var list = that.addresslist;

                jsonAjax.post(urlUtil.getApiUrl("address_setmoren"), { customerAcceptAddressId: list[i].customerAcceptAddressId,
                    customerId: that.$store.state.userinfo.userId }, function (result) {
                    that.$router.back(-1)
                    // console.log(result);
                    if (result.returnCode == 1) {
                        for (var j = 0; j < list.length; j++) {
                            if (i == j) {
                                list[j].isSendAddress = 1;
                            }
                            else {
                                list[j].isSendAddress = 0;
                            }
                        }
                        that.addresslist=list;
                    }
                }, true);

            },
            addrDelete:function (index) {
                //删除地址
                var that = this;
                var i = index;
                var list = that.addresslist;
                MessageBox.confirm('确认删除?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("address_delete"), {customerAcceptAddressId: list[i].customerAcceptAddressId,
                        customerId: that.$store.state.userinfo.userId}, function (result) {
                        if (result.returnCode == 1) {
                            var new_list = [];
                            for (var j = 0; j < list.length; j++) {
                                if (i != j) {
                                    new_list.push(list[j]);
                                }
                            }
                            that.addresslist=new_list;
                        }
                    })
                })


            },
            setMoren:function (index) {
                //设置默认地址
                //选择地址
                this.aId=this.addresslist[index].customerAcceptAddressId;
                this.$store.state.placeOrder.address=this.addresslist[index];

                var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                orderGlobal.address=this.addresslist[index];
                console.log(orderGlobal)
                localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))
                //设置默认地址
                var that = this;
                var i = index;
                var list = that.addresslist;

                jsonAjax.post(urlUtil.getApiUrl("address_setmoren"),
                    { customerAcceptAddressId: list[i].customerAcceptAddressId,
                    customerId: that.$store.state.userinfo.userId }, function (result) {
                    // console.log(result);
                    if (result.returnCode == 1) {
                        for (var j = 0; j < list.length; j++) {
                            if (i == j) {
                                list[j].isSendAddress = 1;
                            }
                            else {
                                list[j].isSendAddress = 0;
                            }
                        }
                        that.addresslist=list;
                    }
                }, true);

            }


        }

    }
</script>

<style scoped>
    audio, canvas, video, img{
        display: inline-block;
    }
    .mar_b10{
        height: 1.7rem;
        border-bottom: 1px solid #f2f2f2;
    }
    page {
        /*background: #f2f2f2;*/
        font-size: 0.28rem;
    }
    .inblock {
        display: inline-block;
        vertical-align: middle;
    }
    .add_icon {
        background: #e4811d;
        color: #fff;
        border-radius: 4px;
        padding: 3px 5px;
        line-height: 1;
    }

    .checkbox {
        width: 18px;
        height: 18px;
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
        /* padding: 16rpx; */
    }

</style>
