
<template>
        <div class="page">
            <div class="HEADER_SHOP">
                <p class="HEADER_SHOP_TITLE">购物车</p>
                <p class="HEADER_SHOP_RIGHT" style="font-size: 0.26rem;width: 0.6rem;top: 0.2rem" v-if="oprateEdit==0" v-on:click='cartOprate(1)'>编辑</p>
                <p class="HEADER_SHOP_RIGHT" style="font-size: 0.26rem;width: 0.6rem;top: 0.2rem" v-if="oprateEdit==1" v-on:click='cartOprate(0)'>完成</p>
            </div>

        <!--<div class='cart_top bgfff border_b' v-if="cartData.length>0">-->
            <!--<div class='h100 pad_l10 table pad_r10 all'>-->
<!--&lt;!&ndash;                <div class='td'>共&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class='czt'>{{cartNum}}</span> 个店铺</div>&ndash;&gt;-->
                <!--<div class='txt_right td wrem4' v-if="oprateEdit==0" v-on:click='cartOprate(1)'>编辑</div>-->
                <!--<div class='txt_right td wrem4' v-if="oprateEdit==1" v-on:click='cartOprate(0)'>完成</div>-->
            <!--</div>-->
        <!--</div>-->
        <div class="top_h"></div>
        <!--中间列表  -->
        <div class='cart_cnt cart' style="overflow: scroll;
   position: absolute;top: 0.88rem;bottom:0.6rem;left: 0;right: 0;">
            <div class='pad_10 txt_center'v-if="isCart">
                <div class='f0 mar_b10'>
                    <img src='../static/images/shop/cart_03.png' style='width:50%;margin-left: 25%'>
                </div>
                <div class='mar_b10'>
                    <span class='inblock c999'>购物空空的，快去逛逛吧</span>
                </div>
                <div>
                    <router-link :to="{name:'ShopIndex'}" class='inblock guanguang'>再去逛逛</router-link>
                </div>
            </div>
            <div class='pad_20 txt_center f28' v-if="isMore">数据加载中~</div>
            <div v-for="(item,index) in cartData">
<!--                <div class='pad_6 all table bgfff border_b'>-->
<!--                    <div class='checkbox td f0' v-on:click='shopCheck(index)'>-->
<!--                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="!item.shopInfo.check">-->
<!--                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="item.shopInfo.check">-->
<!--                    </div>-->
<!--                    <div class='td pad_l10 f0' hover-class='none'>-->
<!--                        <img src='../static/images/shop/shop.png' class='shop_img ver_mid mar_r5' style="display: inline-block">-->
<!--                        <div class='inblock mar_r5 f28'>{{item.shopInfo.shopName}}</div>-->
<!--                    </div>-->
<!--                </div>-->
                <div class='pad_20 bgfff table all border_b' v-for="(itema,indexa) in item.productList">
                    <div class='checkbox td' v-on:click='proCheck(index,indexa)'>
                        <img class='checkbox' src='../static/images/shop/checkbox.png' v-if="!itema.check"></img>
                        <img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="itema.check"></img>
                    </div>
                    <div class='pad_l20 td w1'>
                        <router-link :to="{name:'ShopProductDetail',params:{pId:itema.productId}}" class='p_img'>
                            <img :onerror="errorUserPhoto" class='img' :src='sourceUrlShop+itema.logoImg'>
                        </router-link>
                    </div>
                    <div class='td'>
                        <router-link  :to="{name:'ShopProductDetail',params:{pId:itema.productId}}" class='txt_two h1 block'>{{itema.productFullName}}</router-link>
                        <!-- <view class='c999 f24'>规格：hhhhh</view> -->
                        <div class='clear mar_t10'>
                            <div class='L czt pad_t5 f28'><span class="pr10">￥{{itema.salesPrice}}</span> | <span class="pl10">{{itema.credits}}</span> 积分</div>
                            <div class='R'>
                                <div class='p_num txt_right f0'>
                                    <div class='inblock sub' v-on:click='subNum(index,indexa)'>
                                        <img src='../static/images/shop/jian.png' class='img'>
                                    </div>
                                    <div class='inblock'>
                                        <input type='number' v-model='itema.quantity' class='input f28' disabled="true" style="border: none;color: #333;"></input>
                                    </div>
                                    <div class='inblock add' v-on:click='addNum(index,indexa)'>
                                        <img src='../static/images/shop/add.png' class='img'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='vh8'></div>
            </div>
        </div>
        <!--底部操作  -->
        <!--<div class="bot_h"></div>-->
        <!--<div class='oprate_bottom bgfff border_b f28' v-if="cartData.length>0">-->
            <!--<div class='table h100 all pad_l10'>-->
                <!--<div class='td w1'>-->
                    <!--<div class='inblock checkbox' v-on:click='allCheckoprate'>-->
                        <!--<img class='checkbox' src='../static/images/shop/checkbox.png' v-if="!allCheck"></img>-->
                        <!--<img class='checkbox' src='../static/images/shop/checkbox_ed.png' v-if="allCheck"></img>-->
                    <!--</div>-->
                    <!--<div class='inblock mar_l5 f26' style="line-height: 0.9rem">全选</div>-->
                <!--</div>-->
                <!--<div class='td w2' v-if="oprateEdit==1">-->
                    <!--<div v-on:click='deleteCart' class='pad_l10 pad_r10 inblock'>删除</div>-->
                <!--</div>-->
                <!--<div class='td w2' v-if="oprateEdit==0">-->
                    <!--&lt;!&ndash;<div>&ndash;&gt;-->
                        <!--&lt;!&ndash;<span class='f24'>总计：</span></div>&ndash;&gt;-->
                    <!--<div class='f26' style="line-height: 0.9rem;">-->
                        <!--总计：<span class="pr10">￥{{allPrice}}</span> | <span class="pl10">{{allCredit}}</span> 积分-->
                     <!--</div>-->
                <!--</div>-->
                <!--<div class='oprate_btn1 txt_center f28' v-on:click='settlement'-->
                    <!--style="height: 0.88rem!important;line-height: 0.88rem"-->
                <!--&gt;-->
                    <!--去结算({{allNum}})-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
            <!--底部样式重构-->
            <div class="shopCart_bottom">
                <div class="clearfix" style="height: 0.9rem">
                    <div class="shopCart_select fl" v-on:click='allCheckoprate'>
                        <img src="../static/images/shop/checkbox.png" alt="" class="checkbox" v-if="!allCheck">
                        <img src="../static/images/shop/checkbox_ed.png" alt="" class="checkbox" v-if="allCheck">
                    </div>
                    <div class="fl">
                        <div class='inblock mar_l5 f26' style="line-height: 0.9rem">全选</div>
                    </div>
                    <div class="fl" v-if="oprateEdit==1">
                        <div v-on:click='deleteCart' class='pad_l10 pad_r10 inblock f26' style="line-height: 0.9rem">删除</div>
                    </div>
                    <div class="fl" v-if="oprateEdit==0">
                        <div class='pad_l10 pad_r10 inblock f26' style="line-height: 0.9rem">总计：<span class="pr10">￥{{allPrice}}</span> | <span class="pl10">{{allCredit}}</span> 积分</div>
                    </div>
                    <div class="fr shopCart_btn" v-on:click='settlement'>

                        <div
                            style="background: #E4811D;height: 0.86rem;line-height: 0.86rem;margin-top: 0.01rem"
                        >去结算({{allNum}})</div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import { MessageBox,Toast } from 'mint-ui';
    import {  mapActions } from 'vuex'
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/mrbj.png';
    import {sourceUrl, sourceUrlShop} from '@/config'
    export default {
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                cartData:[],//购物车数据
                checkData:[],
                cartNum:0,//购物车店铺数量
                oprateEdit:0,//购物车编辑状态
                allCheck:false,//false全不选，true全选
                allPrice:0,//结算价格
                allCredit:0,//结算积分
                allNum:0,//结算数量
                uploadImgRoot: urlUtil.uploadImgRoot,
                isMore:true,
                isCart:false
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            // this.$store.commit('selected_page', 'cart');
            this.setDefaultCateId('')
            //下单数据
            this.$store.state.placeOrder = {data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false};

            localStorage.setItem("placeOrder",JSON.stringify({data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false}))
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            jsonAjax.post(urlUtil.getApiUrl("cart_list"), {customerId: that.$store.state.userinfo.userId}, function (result) {
                if (result.returnCode == 1) {
                    for (var i = 0; i < result.resultData.length; i++) {
                        result.resultData[i].shopInfo.check = false;
                        for (var j = 0; j < result.resultData[i].productList.length; j++) {
                            result.resultData[i].productList[j].check = false;
                        }

                    }
                    that.cartData=result.resultData;
                    if(that.cartData.length<=0){
                        that.isMore = false
                        that.isCart = true
                        console.log('123')
                    }else{
                        that.isMore = false
                        console.log(that.cartData.length)
                    }
                    that.cartNum=result.resultData.length;
                }
            });

        },
        methods: {
            ...mapActions(['setDefaultCateId']),
            cartOprate:function (state) {
                this.oprateEdit=state;
            },
            shopCheck:function(i){
                //店铺选择与否
                var that = this;
                var cartData = that.cartData;
                var acheck = false;
                if (!cartData[i].shopInfo.check) {
                    cartData[i].shopInfo.check = true;
                    for (var k = 0; k < cartData[i].productList.length; k++) {
                        cartData[i].productList[k].check = true;
                    }
                    //判断是不是全选
                    var len_s = 0;
                    for (var s = 0; s < cartData.length; s++) {
                        if (cartData[s].shopInfo.check) {
                            len_s++;
                        }
                    }
                    if (len_s == cartData.length) {
                        acheck = true;
                    }
                    else {
                        acheck = false;
                    }

                }
                else {
                    cartData[i].shopInfo.check = false;
                    for (var k = 0; k < cartData[i].productList.length; k++) {
                        cartData[i].productList[k].check = false;
                    }
                    acheck = false;
                }
                that.cartData=cartData;
                that.allCheck=acheck;
                that.setCheckData();
            },
            proCheck:function(i,j){
                //商品选择与否
                var that = this;
                var cartData = that.cartData;
                var acheck = 0;
                if (!cartData[i].productList[j].check) {
                    cartData[i].productList[j].check = true;
                    //判断商品是不是全选
                    var len = 0;
                    for (var k = 0; k < cartData[i].productList.length; k++) {
                        if (cartData[i].productList[k].check) {
                            len++;
                        }
                    }
                    if (len == cartData[i].productList.length) {
                        cartData[i].shopInfo.check = true;
                    }
                    else {
                        cartData[i].shopInfo.check = false;
                    }

                    //判断是不是全选
                    var len_s = 0;
                    for (var s = 0; s < cartData.length; s++) {
                        if (cartData[s].shopInfo.check) {
                            len_s++;
                        }
                    }
                    if (len_s == cartData.length) {
                        acheck = true;
                    }
                    else {
                        acheck = false;
                    }
                }
                else {
                    cartData[i].productList[j].check = false;
                    cartData[i].shopInfo.check = false;
                    acheck = false;
                }

                that.cartData=cartData;
                that.allCheck=acheck;
                that.setCheckData();
            },
            allCheckoprate:function () {
                //是否全选
                var cartData = this.cartData;
                this.allCheck=!this.allCheck;
                for (var i = 0; i < cartData.length; i++) {
                    cartData[i].shopInfo.check = this.allCheck;
                    for (var j = 0; j < cartData[i].productList.length; j++) {
                        cartData[i].productList[j].check = this.allCheck;
                    }
                }
                this.cartData=cartData;
                this.setCheckData();
            },
            deleteCart:function(){
                //购物车删除
                var that = this;
                if (that.checkData.length < 1) {
                    Toast( "没有要删除的商品");
                    return false;
                }
                else {

                    MessageBox.confirm('确认删除?').then(action => {
                        var shoppingCartIds = "";
                        for (var i = 0; i < that.checkData.length; i++) {
                            if (i > 0) {
                                shoppingCartIds += ","
                            }
                            shoppingCartIds += that.checkData[i].shopCartId;
                        }
                        jsonAjax.post(urlUtil.getApiUrl("cart_delete"), { shopCartId: shoppingCartIds,customerId: that.$store.state.userinfo.userId }, function (result) {
                            if (result.returnCode == 1) {
                                jsonAjax.post(urlUtil.getApiUrl("cart_list"), {customerId: that.$store.state.userinfo.userId}, function (result) {
                                    if (result.returnCode == 1) {
                                        for (var k = 0; k < result.resultData.length; k++) {
                                            result.resultData[k].shopInfo.check = false;
                                            for (var j = 0; j < result.resultData[k].productList.length; j++) {
                                                result.resultData[k].productList[j].check = false;
                                            }
                                        }
                                        that.cartData=result.resultData;
                                        that.cartNum=result.resultData.length;
                                        //删除后清零
                                        that.allNum=0;
                                        that.allPrice=0;
                                        that.allCredit=0;
                                    }
                                });
                            }
                        });
                    });

                }
            },
            settlement:function () {
                //去结算

                if (this.checkData.length < 1) {
                    Toast( "没有要结算的商品");
                    return false;
                }

                var shoppingCartIds = [];
                for (var i = 0; i < this.checkData.length; i++) {
                    shoppingCartIds.push(this.checkData[i].shopCartId);
                }
                this.$store.state.placeOrder.data={shoppingCartIds: JSON.stringify(shoppingCartIds)};

                var orderGlobal;
                if(localStorage.getItem("placeOrder")){
                    orderGlobal=JSON.parse(localStorage.getItem("placeOrder"))
                }
                orderGlobal.data={shoppingCartIds: JSON.stringify(shoppingCartIds)};
                localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))


                this.$router.push({name:"ShopOrderConfirm",params:{type:5}});
            },
            addNum:function (index,indexa) {
                var that=this;
                var cartData=that.cartData;
                if (cartData[index].productList[indexa].quantity == (cartData[index].productList[indexa].storeNumber)) {
                    return false;
                }
                var now_num = cartData[index].productList[indexa].quantity + 1;

                jsonAjax.post(urlUtil.getApiUrl("cart_num"), { quantity: now_num, productId: cartData[index].productList[indexa].productId, shopCartId: cartData[index].productList[indexa].shopCartId,
                    customerId:that.$store.state.userinfo.userId}, function (result) {
                    if (result.returnCode == 1) {
                        cartData[index].productList[indexa].quantity = now_num;
                        that.cartData=cartData;
                        that.setCheckData();
                    }
                });
            },
            subNum:function (index,indexa) {
                var that=this;
                var cartData=that.cartData;
                if(cartData[index].productList[indexa].quantity<2)
                {
                    return false;
                }
                var now_num = cartData[index].productList[indexa].quantity - 1;

                jsonAjax.post(urlUtil.getApiUrl("cart_num"), { quantity: now_num, productId: cartData[index].productList[indexa].productId, shopCartId: cartData[index].productList[indexa].shopCartId,
                    customerId: that.$store.state.userinfo.userId }, function (result) {
                    if (result.returnCode == 1) {
                        cartData[index].productList[indexa].quantity = now_num;
                        that.cartData=cartData;
                        that.setCheckData();
                    }
                });
            },
            setCheckData:function () {
                //核查选中的
                var xz_data = [];
                var num = 0, sump = 0;
                var scre = 0;
                for (var i = 0; i < this.cartData.length; i++) {
                    for (var j = 0; j < this.cartData[i].productList.length; j++) {
                        if (this.cartData[i].productList[j].check == 1) {
                            xz_data.push(this.cartData[i].productList[j]);
                            num += this.cartData[i].productList[j].quantity;
                            // 总价
                            sump += this.cartData[i].productList[j].quantity * this.cartData[i].productList[j].salesPrice
                            scre += this.cartData[i].productList[j].quantity * this.cartData[i].productList[j].credits
                        }
                    }
                }
                this.checkData=xz_data;
                this.allNum=num;
                this.allPrice=parseFloat(sump).toFixed(2);
                this.allCredit = parseFloat(scre);
            }

        }

    }
</script>

<style scoped>
    .page{
        font-size: 0.28rem;
    }
    .cart_top {
        height: 0.8rem;
        position: fixed;
        left: 0;
        top: 0.9rem;
        right: 0;
    }
    .top_h{height: 0.88rem}
    .shopCart_bottom{
        background: #fff;
        height: 0.9rem;
        position: fixed;
        width: 100%;
        bottom: 1rem;
        left: 0;
        border-bottom: 0.01rem solid #eee;
        border-top: 0.01rem solid #eee;
    }
    .shopCart_select{
        padding: 0.25rem 0.2rem;
        box-sizing: border-box;
    }
    .shopCart_btn{
        width: 2rem;
        text-align: center;
        color: #fff;
    }
    .oprate_bottom {
        height: 0.9rem;
        position: fixed;
        bottom: 1.09rem;
        left: 0;
        right: 0;
        z-index: 2;
        border-top: 1px solid #f2f2f2;
    }
    .bot_h{height: 0rem}
    .oprate_bottom .w1 {
        width: 0.9rem;
    }

    .oprate_bottom .w2 {
        width: 3.8rem;
    }

    .checkbox {
        width: 0.4rem;
        height:  0.4rem;
    }

    .oprate_btn1 {
        background: #e4811d;
        color: #fff;
        width: 2rem;
    }

    .p_img {
        width: 80px;
        height: 80px;
        /*border: 1px solid #dcdcdc;*/
        border-radius: 4px;
        display: block;
        font-size:0;
    }

    .p_img .img {
        width: 100%;
        height: 100%;
    }

    .p_num .add, .p_num .sub {
        width: 20px;
        height: 20px;
        font-size: 0;
    }

    .p_num .add .img, .p_num .sub .img {
        width: 100%;
        height:100%;
    }

    .p_num .input {
        padding: 5px 5px;
        text-align: center;
        width: 3em;
    }

    .cart .w1 {
        width: 100px;
    }

    .cart .h1 {
        height: 3em;
    }

    .shop_img {
        width: 25px;
        height: 25px;
    }
    page {
        /*background: #f2f2f2;*/
        font-size: 0.28rem;
    }
    .inblock {
        display: inline-block;
        vertical-align: middle;
    }

    .shop_jt {
        width: 20px;
        height: 36px;
    }

    .vh8 {
        height: 8px;
    }

    .pad_6 {
        padding: 6px 10px;
    }

    .guanguang {
        padding: 8px 30px;
        background: #e4811d;
        color: #fff;
        line-height: 1;
        border-radius: 20px;
    }

</style>
