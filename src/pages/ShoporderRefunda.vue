<template>
    <div id="orderRefund" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">售后申请</p>
        </div>

        <div class='bgfff border_b' style="margin-top: .88rem">
            <div class='pad_10 table all'>
                <div class='td p_img_view'>
                    <div class='p_img'>
                        <img class='img' :onerror="errorUserPhoto" :src='sourceUrlShop+proData.logoImage'>
                    </div>
                </div>
                <div class='td pad_l10'>
                    <div class='txt_two h1'>{{proData.productFullName}}</div>
                    <div class='c999 f28' :class='proData.specificationNames==null?"opcity":""' >规格：{{proData.specificationNames}}</div>
                    <div class='clear'>
                        <div class='L czt pad_t5'>￥{{proData.salesPrice}}</div>
                        <div class='R'>x{{proData.count}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class='table pad_10 bgfff all border_b'>
            <div class='td wrem6'>售后类型</div>
            <div class='td'>
                <div class='L mar_l5 f0' v-for="(item,index) in items" v-on:click='kuaidiSelect(index)'>
                    <img src="../static/images/shop/checkbox_ed.png" v-if="item.checked" class='ver_mid checkbox'>
                    <img src="../static/images/shop/checkbox.png" v-if="!item.checked" class='ver_mid checkbox'>
                    <span class='inblock f28'>{{item.value}}</span>
                </div>
            </div>
        </div>
        <div class='table pad_10 bgfff all border_b'>
            <div class='td wrem6'>数量</div>
            <div class='td'>
                <div class='p_num f0'>
                    <div class='inblock sub' v-on:click='subNum' v-if="pType==1">
                        <img src='../static/images/shop/jian.png' class='img'>
                    </div>
                    <div class='inblock'>
                        <input type='number' disabled='true' :value="pNum" class='input f28' style="border:none">
                    </div>
                    <div class='inblock add' v-on:click='addNum' v-if="pType==1">
                        <img src='../static/images/shop/add.png' class='img'>
                    </div>
                </div>
            </div>
        </div>
        <div class='table pad_10 bgfff all border_b'>
            <div class='td wrem6' style='vertical-align:top'>问题描述</div>
            <div class='td' style='vertical-align:top'>
                <textarea placeholder='请输入问题描述' class='txt all col12' style="height: 6em;" v-model='applay.miaoshu'></textarea>
            </div>
        </div>
        <div class='table pad_10 bgfff all border_b'>
            <div class='td wrem6'>退回方式</div>
            <div class='td'>
                <div class='L mar_l5 f0' v-for="(item,index) in itemsa" v-on:click='waySelect(index)'>
                    <img src="../static/images/shop/checkbox_ed.png" v-if="item.checked" class='ver_mid checkbox'>
                    <img src="../static/images/shop/checkbox.png" v-if="!item.checked" class='ver_mid checkbox'>
                    <span class='inblock f28'>{{item.value}}</span>
                </div>
            </div>
        </div>
        <div class='bgfff'>
            <div class='pad_10 border_b table'>
                <div class='td wrem6'>联系人</div>
                <div class='td'>
                    <input v-model='applay.linkman' placeholder='请输入收货人姓名'>
                </div>
            </div>
            <div class='pad_10 pad_b10 border_b table'>
                <div class='td wrem6'>联系电话</div>
                <div class='td'>
                    <input v-model='applay.mobilePhone' placeholder='请输入联系电话'>
                </div>
            </div>
        </div>

        <div class='bot_h'></div>
        <!--底部操作  -->
        <div class='oprate_bottom bgfff border_b f28'>
            <div class='table h100 all'>
                <div class='td oprate_btn1 txt_center' v-on:click='okEvaluate' v-if="!isBtn">
                    提交申请
                </div>
                <div class='td oprate_btn1 txt_center' v-if="isBtn" style="background: #ccc;">
                    申请中
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
                items: [{ checked: true, value:"退货"}],
                itemsa: [{ checked: true, value: "快递至商家" }],
                orderData:[],
                proData:{logoImage:"",productFullName:"商品名称",specificationNames:null,salesPrice:23.06,count:3},
                pType:1,//1新申请，2是修改申请
                pNum:1,//收售商品数量
                applay:{miaoshu:"",linkman:"",mobilePhone:""},
                orderId:this.$route.params.orderId,
                canNum:this.$route.params.canNum,
                pId:this.$route.params.pId,
                refundId:this.$route.params.refundId,
                uploadImgRoot: urlUtil.uploadImgRoot,
                isBtn:false
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            if(that.refundId==0)
            {
                //新申请
                that.pType=1;
                var pro_data = {};
                jsonAjax.post(urlUtil.getApiUrl("order_detail"), { ordersId: that.orderId,customerId: that.$store.state.loginInfo.customerId,type:0 }, function (result) {
                    // console.log(result)
                    if (result.returnCode == 1) {

                        var order_data = result.resultData.ordersList;
                        for (var j = 0; j < order_data.productList.length; j++) {
                            var str = "";
                            for (var key in order_data.productList[j].specificationNames) {
                                str += order_data.productList[j].specificationNames[key] + " ";
                            }
                            order_data.productList[j].specificationNames = str;
                            if (order_data.productList[j].productId == that.pId) {
                                pro_data = order_data.productList[j];
                            }
                        }
                        that.orderData=order_data;
                        that.proData= pro_data;
                    }
                })
            }
            else{
                //修改申请
                that.pType=2;
                jsonAjax.post(urlUtil.getApiUrl("order_applydetail"), { returnsApplyId: that.refundId,customerId: that.$store.state.loginInfo.customerId  }, function (result) {
                    // console.log(result)
                    if (result.returnCode == 1) {
                        var pro_data={};
                        var p_num=1;
                        var applay={};
                        pro_data = result.resultData.returnsApply[0];
                        pro_data.productFullName = pro_data.productName;
                        p_num = pro_data.count;
                        applay.linkman = pro_data.linkman;
                        applay.mobilePhone = pro_data.mobilePhone;
                        applay.miaoshu = pro_data.problemDescription;

                        that.proData= pro_data;
                        that.pNum=p_num
                        that.applay= applay;
                    }
                })
            }



        },
        methods: {
            kuaidiSelect:function (index) {
                //选择快递
            },
            subNum:function () {
                //数量减一
                if(this.pNum>1)
                {
                    this.pNum--;
                }
            },
            addNum:function () {
                //数量加一
                if(this.pNum<this.canNum)
                {
                    this.pNum++;
                }
            },
            waySelect:function (index) {
                //选择退回方式
            },
            okEvaluate:function () {
                var that = this;
                var pj = 0;
                if (that.applay.miaoshu=="")
                {
                    pj++;
                }
                if (pj != 0) {
                    Toast("请完善信息");
                    return false;
                }
                if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(that.applay.mobilePhone)) {
                    // $.toast("格式不正确", "text");
                    Toast('手机格式不正确');
                    return false;
                }
                if (that.applay.linkman=="") {
                    // $.toast("格式不正确", "text");
                    Toast('名字不能为空');
                    return false;
                }

                if(that.isBtn){
                    return
                }else{
                    //提交申请
                    if(this.pType==1)
                    {
                        that.isBtn = true
                        //新申请
                        var param = { ordersId: that.orderId, shopInfoId: that.orderData.shopInfoId, productId: that.pId, problemDescription: that.applay.miaoshu, count: that.pNum, disposeMode: 3, linkman: that.applay.linkman, mobilePhone: that.applay.mobilePhone,customerId: that.$store.state.loginInfo.customerId };
                        jsonAjax.post(urlUtil.getApiUrl("order_applay"), param, function (result) {
                            // console.log(result)
                            if (result.returnCode == 1) {
                                Toast("申请成功");
                                that.isBtn = false
                                that.$router.back(-1);
                            }
                        })
                    }
                    else{
                        that.isBtn = true
                        //修改申请
                        var param = { returnsApplyId: that.refundId, problemDescription: that.applay.miaoshu, count: that.pNum, disposeMode: 3, linkman: that.applay.linkman,mobilePhone: that.applay.mobilePhone,customerId: that.$store.state.loginInfo.customerId };
                        jsonAjax.post(urlUtil.getApiUrl("order_editlapply"), param, function (result) {
                            // console.log(result)
                            if (result.returnCode == 1) {
                                Toast("修改成功");
                                that.isBtn = false
                                that.$router.back(-1);
                            }
                        })
                    }
                }

            }

        }

    }
</script>

<style scoped>
    audio, canvas, video, img{
        display: inline-block;
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
        width: 20px;
        height: 20px;
    }

    .p_num .add .img, .p_num .sub .img {
        width: 100%;
        height: 100%;
    }

    .p_num .input {
        padding: 5px 5px;
        text-align: center;
        width: 3em;
    }

    .txt{ border: 1px solid #dcdcdc; padding: 10px; width: 100%;  }
    .bot_h {
        height: 0.45rem;
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
    .oprate_btn1 {
        background: #e4811d;
        color: #fff;
    }
    .opcity{ opacity: 0}
.wrem6{
    width: 1.5rem;
}
</style>
