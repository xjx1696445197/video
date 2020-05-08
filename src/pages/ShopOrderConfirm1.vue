<template>
  <div class="page">
    <div class="HEADER_SHOP">
      <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
      <p class="HEADER_SHOP_TITLE">订单确认</p>
    </div>
    <div class="wrapper" style="overflow-y: scroll">
      <router-link :to="{name:'ShopAddressList',params:{aId:'addrselect'}}" class='border_b pad_20 all table bgfff' v-if="!orderAddress">
        <div class='addr_w1 f0 td'>
          <img class='img' src='../static/images/shop/order_confirm_04.png'>
        </div>
        <div class='pad_l20 pad_r20 td'>请选择收货地址</div>
        <div class='addr_w2 td'>
          <img src='../static/images/shop/order_confirm_07.png' class='img'>
        </div>
      </router-link>
      <router-link :to="{name:'ShopAddressList',params:{aId:orderAddress.customerAcceptAddressId}}" class='border_b pad_20 all table bgfff' v-else>
        <div class='addr_w1 f0 td'>
          <img class='img' src='../static/images/shop/order_confirm_04.png'>
        </div>
        <div class='pad_l20 pad_r20 td'>
          <div class='clearfix mar_b5'>
            <div class='L f28'>{{orderAddress.consignee}}</div>
            <div class='L c666 f28' style='margin-left:0.3rem'>{{orderAddress.mobilePhone}}</div>
          </div>
          <div class='c999 f28'>{{orderAddress.regionLocationName}}{{orderAddress.cityName}}{{orderAddress.areaCountyName}}{{orderAddress.address}}</div>
        </div>
        <div class='addr_w2 td'>
          <img src='../static/images/shop/order_confirm_07.png' class='img'>
        </div>
      </router-link>
      <div class='f0'>
        <img src='../static/images/shop/order_confirm_11.png' class='addr_h1'>
      </div>
      <!--购买的商品  -->
      <div v-for="(item,index) in orderData.shopProductList" >
        <!--<div class='pad_20 bgfff border_b'>-->
          <!--<img class='shop_img ver_mid' src='../static/images/shop/shop.png'  style="display: inline-block;">-->
          <!--<span class='inblock mar_l5'>{{item.shopName}}</span>-->
        <!--</div>-->

        <div class='pad_20 bgfff table all border_b' v-for="(itema,indexa) in item.productList">
          <div class='td p_img_view'>
            <div class='p_img'>
              <img class='img' :onerror="errorUserPhoto" :src='sourceUrlShop+itema.logoImg'>
            </div>
          </div>
          <div class='td pad_l10'>
            <div class='txt_two h1'>{{itema.productFullName}}</div>
            <!-- <view class='c999 f12'>规格：ffffff</view> -->
            <div class='clear'>
              <div class='L czt pad_t5 f28' :class="type==3?'txt_xx':''">￥{{itema.salesPrice}} | {{itema.salesCredits}} 积分</div>
              <div class='R f28'>x{{itema.quality}}</div>
            </div>
          </div>
        </div>
        <div class='pad_20 bgfff border_b txt_right'>
          <span class='inblock mar_r10'>共{{item.num}}件商品</span>
          <span class='inblock' v-if="type!=3">小计：</span>
          <span class='inblock' v-if="type==3">原价：</span>
          <span class='inblock czt f32'>￥{{item.xiaoji}} <span v-if="item.jifen != '0.00'">| {{item.jifen}} 积分</span></span>
        </div>
      </div>
      <div class='mar_t10 pad_20 bgfff clear border_b' style="height: 0.8rem">
        <div class='L mar_r10 f28'>收货方式</div>
        <div class='R f24'>
          <div class='L mar_l5 f0' v-for="(item,index) in kuaidiData" v-on:click='kuaidiSelect(index)'>
            <img src="../static/images/shop/checkbox_ed.png" v-if="index==kuaidiIndex" class='ver_mid checkbox'  style="display: inline-block;">
            <img src="../static/images/shop/checkbox.png" v-else class='ver_mid checkbox'  style="display: inline-block;">
            <span class='inblock f26'>{{item.value}}</span>
          </div>
        </div>
      </div>
      <div class='pad_20 bgfff all table border_b'>
        <div class='td'>运费</div>
        <div class='td txt_right c666 f24'>{{orderData.finalPostage}}</div>
      </div>
      <div v-if="type==1||type==5">
        <router-link :to="{name:'ShopinvoiceTab',params:{type:invoiceIndex}}" class='pad_20 bgfff all border_b table'>
          <div class='td'>发票信息</div>
          <div class='td txt_right c666 f24'>{{invoiceData[invoiceIndex]}}</div>
          <div class='addr_w2 td'>
            <img src='../static/images/shop/order_confirm_07.png' class='img'>
          </div>
        </router-link>

        <!--优惠券抵扣  -->
        <div class='pad_20 bgfff all border_b table' v-if="orderCoupList.length<1">
          <div class='td'>优惠券抵扣</div>
          <div class='td txt_right c666 f24'>无可用优惠券</div>
        </div>
        <router-link :to="{name:'ShopCouponListselect'}" class='pad_20 bgfff all border_b table' v-if="orderCoupList.length>0">
          <div class='td'>优惠券抵扣</div>
          <div class='td txt_right c666 f24' v-if="!orderCoup">暂未选择</div>
          <div class='td txt_right c666 f24' v-else>-{{orderCoup.discountCouponAmount}}</div>
          <div class='addr_w2 td'>
            <img src='../static/images/shop/order_confirm_07.png' class='img'>
          </div>
        </router-link>
        <!--积分抵扣  -->
        <!--<div class='pad_20 bgfff all table'>-->
          <!--<div class='td'>积分抵扣(可用{{orderCion.num}})</div>-->
          <!--<div class='td txt_right c666 f24'>可抵扣{{orderCion.cash}}</div>-->
          <!--<div class='td jinbi txt_right f0' v-on:click='orderCionselect' style="margin-left: 0.1rem">-->
            <!--<img src="../static/images/shop/checkbox.png" v-if="!orderCionxz" class='ver_mid checkbox' style='margin-right:0;'>-->
            <!--<img src="../static/images/shop/checkbox_ed.png" v-if="orderCionxz" class='ver_mid checkbox' style='margin-right:0;'>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class='pad_20 mar_b10 bgfff border_b czt f24'>-->
          <!--最高可抵扣交易额的{{limitProportion}}%-->
        <!--</div>-->
      </div>
      <div class='bot_h'></div>
      <!--总结  -->
      <div class='oprate_bottom bgfff border_b f28'>
        <div class='table h100 all pad_l20'>
          <div class='td w2 txt_right pad_r20' v-if="type!=3">
            合计：
            <span class='czt'>￥{{orderData.finalPayAmount}} | {{orderData.finalPayCredits}} 积分</span>
          </div>
          <div class='td w2 txt_right pad_r20' v-if="type==3">
            合计：
            <span class='czt'>{{orderData.scoreUseCount}}积分</span>
          </div>
          <div class='td oprate_btn1 txt_center' v-on:click='orderConfirm'>
            提交订单
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<div id="orderConfirm" class="content_box">-->
    <!--<div class="spiltHeader"></div>-->

    <!---->
    <!---->


  <!--</div>-->
</template>

<script>
  import { sourceUrl,sourceUrlShop } from '@/config'
  import Vue from 'vue';
  import { Button,Toast,MessageBox } from 'mint-ui';
  Vue.component(Button.name, Button);
  import urlUtil from '../util/apiUtil.js';
  import jsonAjax from '../util/restUtil.js';
  import userPhoto from '@/static/images/mrbj.png';

  export default {
    data () {
      return {
        sourceUrlShop,
        errorUserPhoto:'this.src="' + userPhoto + '"',
        orderAddress:{},//为空未选择地址
        orderData:{},
        kuaidiData: [
          {name: 1,value: "物流快递"},
          // {name: 2,value: "同城配送"},
          // {name: 3,value: "线下自取"}
        ],
        startData:{},
        scoreUseCount:0,
        kuaidiIndex:0,
        invoiceIndex:0,//发票类型
        invoiceData: ["不开发票", "普通发票", "增值税发票"],
        shuiLv:[0,0,0],
        orderCoupList:[],
        orderCoup:{customerDiscountCouponId:0,discountCouponAmount:0.00},//优惠券抵扣
        orderCion:{num:0,cash:0.00},//金币抵扣
        orderCionxz:false,
        limitProportion:30,//最高抵扣率
        uploadImgRoot: urlUtil.uploadImgRoot,
        type:this.$route.params.type//订单来源
      }
    },
    /**初始化组件的时候进行数据处理**/
    created: function () {
      var that=this;
//      var orderGlobal=this.$store.state.placeOrder;
      var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
//      console.log(orderGlobal)
      that.orderCionxz=orderGlobal.coin;
      that.invoiceIndex=orderGlobal.fapiao;
      that.kuaidiIndex=orderGlobal.way;
      that.orderCoup=orderGlobal.discount;
      that.orderCion=orderGlobal.coinNum;

      //订单确认数据获取
      if(that.type==1)
      {
          //普通数据
        var sa = [{
          nowBuyFlag: that.type,
          productId: orderGlobal.data.productId,
          quality: orderGlobal.data.quality,
          sku: orderGlobal.data.sku
        }];
        var sss = {
          buyNowProductBoList: sa,
          customerDisCountCouponId: 0,
          scoreUseCount: 0,
          customerId: that.$store.state.userinfo.userId
        };
        if(that.orderCionxz)
        {
          sss.scoreUseCount=that.orderCion.num;
        }
        if(orderGlobal.discount)
        {
          sss.customerDisCountCouponId=that.orderCoup.customerDiscountCouponId;
        }
        jsonAjax.post(urlUtil.getApiUrl("orderconfirm_imit"), {buyNowGoToOrderPageBoJSON: JSON.stringify(sss)}, function(result) {
          if (result.returnCode == 1) {
            var data = result.resultData;

            for (var i = 0; i < data.shopProductList.length; i++) {
              var all_num = 0,all_price = 0,all_jifen = 0;
              for (var j = 0; j < data.shopProductList[i].productList.length; j++) {
                all_num += data.shopProductList[i].productList[j].quality;
                all_price += data.shopProductList[i].productList[j].quality * data.shopProductList[i].productList[j].salesPrice;
                all_jifen += data.shopProductList[i].productList[j].quality * data.shopProductList[i].productList[j].salesCredits;
              }
              data.shopProductList[i].num = all_num;
              data.shopProductList[i].xiaoji = parseFloat(all_price).toFixed(2);
              data.shopProductList[i].jifen = parseFloat(all_jifen).toFixed(2);

            }
            var jinbi_num = result.resultData.scoreCount_limit_Proportion_isEnable;
            jinbi_num = parseFloat(jinbi_num).toFixed(0);
//            var jinbi_cash = result.resultData.moneyOffAmount;
            var jinbi_cash = parseFloat(jinbi_num/100).toFixed(2);
//            jinbi_cash = parseFloat(jinbi_cash).toFixed(2);

            that.orderData= result.resultData;
            that.orderCoupList=result.resultData.customerEnableCouponList;
            that.orderCion={num: jinbi_num,cash: jinbi_cash};
            that.limitProportion=result.resultData.limit_Proportion;
            that.shuiLv[1]=result.resultData.ptTaxRate;
            that.shuiLv[2]=result.resultData.zyTaxRate;
            //存储可用优惠券
            that.$store.state.placeCoupon= result.resultData.customerEnableCouponList;
            localStorage.setItem("placeCoupon",JSON.stringify(result.resultData.customerEnableCouponList));

            that.$store.state.placeOrder.coinNum=that.orderCion;
            orderGlobal.coinNum=that.orderCion;
            localStorage.setItem("placeOrder",JSON.stringify(orderGlobal));

            if(!orderGlobal.address)
            {
              //首次获取默认地址
              that.$store.state.placeOrder.address=result.resultData.address;

              orderGlobal.address=result.resultData.address;
              localStorage.setItem("placeOrder",JSON.stringify(orderGlobal));

              that.orderAddress=result.resultData.address;
            }
            else {
              that.orderAddress=orderGlobal.address;
            }
            if(that.invoiceIndex!=0)
            {
              that.orderData.finalPayAmount=parseFloat(that.orderData.finalPayAmount) + parseFloat(that.orderData.finalPayAmount - that.orderData.finalPostage) * parseFloat(that.shuiLv[that.invoiceIndex]) * 0.01;
              that.orderData.finalPayAmount=parseFloat(that.orderData.finalPayAmount).toFixed(2);
              that.orderData.finalPayCredits = parseFloat(that.orderData.finalPayCredits)+ parseFloat(that.orderData.finalPayAmount - that.orderData.finalPostage) * parseFloat(that.shuiLv[that.invoiceIndex]) * 0.01;
              that.orderData.finalPayCredits=parseFloat(that.orderData.finalPayCredits).toFixed(2);
            }
          }
        });
      }
      else if(that.type==5){
        //购物车
//        orderGlobal.data.shoppingCartIds: JSON.stringify(shoppingCartIds);
        var sss = {
          customerDisCountCouponId: 0,
          scoreUseCount: 0,
          shoppingCartIds: JSON.parse(orderGlobal.data.shoppingCartIds),
          customerId: that.$store.state.userinfo.userId
        };
        if(that.orderCionxz)
        {
          sss.scoreUseCount=that.orderCion.num;
        }
        if(orderGlobal.discount)
        {
          sss.customerDisCountCouponId=that.orderCoup.customerDiscountCouponId;
        }
        jsonAjax.post(urlUtil.getApiUrl("orderconfirm_cart"), {goToOrderPageBoJSON: JSON.stringify(sss)}, function (result) {
          if (result.returnCode == 1) {
            var data = result.resultData;
            for (var i = 0; i < data.shopProductList.length; i++) {
              var all_num = 0,all_price = 0,all_jifen = 0;
              for (var j = 0; j < data.shopProductList[i].productList.length; j++) {
                all_num += data.shopProductList[i].productList[j].quality;
                all_price += data.shopProductList[i].productList[j].quality * data.shopProductList[i].productList[j].salesPrice;
                all_jifen += data.shopProductList[i].productList[j].quality * data.shopProductList[i].productList[j].salesCredits;
              }
              data.shopProductList[i].num = all_num;
              data.shopProductList[i].xiaoji = parseFloat(all_price).toFixed(2);
              data.shopProductList[i].jifen = parseFloat(all_jifen).toFixed(2);
            }
            var jinbi_num = result.resultData.scoreCount_limit_Proportion_isEnable;
            jinbi_num = parseFloat(jinbi_num).toFixed(0);
            var jinbi_cash = parseFloat(jinbi_num/100).toFixed(2);

            that.orderData= result.resultData;
            that.orderCoupList=result.resultData.customerEnableCouponList;
            that.orderCion={num: jinbi_num,cash: jinbi_cash};
            that.limitProportion=result.resultData.limit_Proportion;
            that.shuiLv[1]=result.resultData.ptTaxRate;
            that.shuiLv[2]=result.resultData.zyTaxRate;
            //存储可用优惠券
            that.$store.state.placeCoupon= result.resultData.customerEnableCouponList;
            localStorage.setItem("placeCoupon",JSON.stringify(result.resultData.customerEnableCouponList));


            that.$store.state.placeOrder.coinNum=that.orderCion;
            orderGlobal.coinNum=that.orderCion;
            localStorage.setItem("placeOrder",JSON.stringify(orderGlobal));

            if(!orderGlobal.address)
            {
              //首次获取默认地址
              that.$store.state.placeOrder.address=result.resultData.address;

              orderGlobal.address=result.resultData.address;
              localStorage.setItem("placeOrder",JSON.stringify(orderGlobal));

              that.orderAddress=result.resultData.address;
            }
            else {
              that.orderAddress=orderGlobal.address;
            }
            if(that.invoiceIndex!=0)
            {
              that.orderData.finalPayAmount=parseFloat(that.orderData.finalPayAmount) + parseFloat(that.orderData.finalPayAmount - that.orderData.finalPostage) * parseFloat(that.shuiLv[that.invoiceIndex]) * 0.01;
              that.orderData.finalPayAmount=parseFloat(that.orderData.finalPayAmount).toFixed(2);
              that.orderData.finalPayCredits = parseFloat(that.orderData.finalPayCredits)+ parseFloat(that.orderData.finalPayAmount - that.orderData.finalPostage) * parseFloat(that.shuiLv[that.invoiceIndex]) * 0.01;
              that.orderData.finalPayCredits=parseFloat(that.orderData.finalPayCredits).toFixed(2);
            }
          }
        });
      }
      else{
          //团购-积分-秒杀
        that.startData=orderGlobal.data;
        that.scoreUseCount= orderGlobal.data.scoreUseCount;

        var sa = [{ nowBuyFlag: that.type, productId: orderGlobal.data.hdId, quality: orderGlobal.data.quality, sku: orderGlobal.data.sku }];
        var sss = { buyNowProductBoList: sa, customerDisCountCouponId: 0, scoreUseCount: that.scoreUseCount,
          customerId: that.$store.state.userinfo.userId };
        jsonAjax.post(urlUtil.getApiUrl("orderconfirm_imit"), {buyNowGoToOrderPageBoJSON: JSON.stringify(sss)}, function(result) {
          console.log(result)
          if (result.returnCode == 1) {
            var data = result.resultData;
            console.log(JSON.stringify(data))

            for (var i = 0; i < data.shopProductList.length; i++) {
              var all_num = 0,all_price = 0,all_jifen = 0;
              for (var j = 0; j < data.shopProductList[i].productList.length; j++) {
                all_num += data.shopProductList[i].productList[j].quality;
                all_price += data.shopProductList[i].productList[j].quality * data.shopProductList[i].productList[j].salesPrice;
                all_jifen += data.finalPayCredits;
              }
              data.shopProductList[i].num = all_num;
              data.shopProductList[i].xiaoji = parseFloat(all_price).toFixed(2);
              data.shopProductList[i].jifen = parseFloat(all_jifen).toFixed(2);
            }
//            that.order_cion_num=result.resultData.userEnableScoreAmount,
            that.orderData= result.resultData;
            if(!orderGlobal.address)
            {
              //首次获取默认地址
              that.$store.state.placeOrder.address=result.resultData.address;
              orderGlobal.address=result.resultData.address;
              localStorage.setItem("placeOrder",JSON.stringify(orderGlobal));
              that.orderAddress=result.resultData.address;
            } else {
              that.orderAddress=orderGlobal.address;
            }
          }else{
            MessageBox.alert(result.message).then(action => {
              //返回上一个路由
              that.$router.back(-1);
            });
          }
        });
      }

    },
    methods: {
      routerBack: function () {
        //返回上一个路由
        this.$router.back(-1);
      },
      kuaidiSelect:function(index){
        //选择快递方式
        this.kuaidiIndex=index;
        this.$store.state.placeOrder.way=this.kuaidiIndex;
        var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
        orderGlobal.way=this.kuaidiIndex;
        localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))

      },
      orderCionselect:function () {
        //是否选择金币抵扣
        this.orderCionxz=!this.orderCionxz;
        this.$store.state.placeOrder.coin=this.orderCionxz;
        var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
        orderGlobal.coin=this.orderCionxz;
        localStorage.setItem("placeOrder",JSON.stringify(orderGlobal));
        if(this.orderCion.num!=0)
        {
          this.countOrderMoney();
        }

      },
      orderConfirm:function(){
          //提交订单
        console.log('是否走了提交方法')
        var that = this;
//        var orderGlobal=that.$store.state.placeOrder;
        var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));

        if (!that.orderAddress) {
          Toast("请选择地址");
          return false;
        }
        if(that.type==1)
        {

            //普通商品
          var sa = [{
            nowBuyFlag: that.type,
            productId: orderGlobal.data.productId,
            quality: orderGlobal.data.quality,
            sku: orderGlobal.data.sku
          }];
          var sss = {
            buyNowProductBoList: sa,
            customerAddressId:that.orderAddress.customerAcceptAddressId,
            customerDisCountCouponId: 0,
            sendType:that.kuaidiData[that.kuaidiIndex].name,
            payMode:2,
            scoreUseCount: 0,
            invoiceType: that.invoiceIndex+1,
            invoiceInfo: {},
            customerId: that.$store.state.userinfo.userId
          };
          if(that.orderCionxz)
          {
            sss.scoreUseCount=that.orderCion.num;
          }
          if(orderGlobal.discount)
          {
            sss.customerDisCountCouponId=that.orderCoup.customerDiscountCouponId;
          }
          if (that.invoiceIndex != 0) {
//            sss.invoiceInfo = that.$store.state.placeOrder.fapiaoData;
            sss.invoiceInfo = orderGlobal.fapiaoData;
          }
          sss.invoiceInfo.invoiceType = that.invoiceIndex+1;
          console.log('123456')
          jsonAjax.post(urlUtil.getApiUrl("ordersave_imit"), {buyNowSaveOrderBoJSON: JSON.stringify(sss)}, function(result) {
            console.log('456')
            console.log(result)
            if (result.returnCode == 1) {
              //isTotalOrdersNo 是否是总订单号，0是子订单 ordersNo，1是总订单 totalOrdersNo
              var oid = result.resultData.ordersId;
              var order_sn = result.resultData.totalOrdersNo;
              // that.$router.push({name:'orderPay',query:{orderId:oid,orderSn:order_sn,orderType:1}});
              //使用页面跳转，为了避免 mode: 'history' 模式中，记录上一次url路径，导致微信支付授权支付url失败，提示URL未注册页面
              that.$router.push({name:'ShopOrderPay',query:{orderId:oid,orderSn:order_sn,orderType:1}});
              // var order_pay_url = "/orderPay/orderPay"+"?orderId="+oid+"&orderSn="+order_sn+"&orderType=1";
              // window.plus && window.plus.runtime.openURL( order_pay_url )
              // window.location.href = order_pay_url ;
            }
          });
        }
        else if(that.type==5){
          console.log('是否是购物车')
          //购物车
          var sss = {
            shoppingCartIds: JSON.parse(orderGlobal.data.shoppingCartIds),
            customerAddressId:that.orderAddress.customerAcceptAddressId,
            customerDisCountCouponId: 0,
            sendType:that.kuaidiData[that.kuaidiIndex].name,
            payMode:2,
            scoreUseCount: 0,
            invoiceType: that.invoiceIndex+1,
            invoiceInfo: {},
            customerId: that.$store.state.userinfo.userId
          };

          if(that.orderCionxz)
          {
            sss.scoreUseCount=that.orderCion.num;
          }
          if(orderGlobal.discount)
          {
            sss.customerDisCountCouponId=that.orderCoup.customerDiscountCouponId;
          }
          if (that.invoiceIndex != 0) {
//            sss.invoiceInfo = that.$store.state.placeOrder.fapiaoData;
            sss.invoiceInfo =orderGlobal.fapiaoData;
          }
          sss.invoiceInfo.invoiceType = that.invoiceIndex+1;

          console.log('是否到了提交')

          jsonAjax.post(urlUtil.getApiUrl("ordersave_cart"), {saveOrderBoJSON: JSON.stringify(sss)}, function (result) {
            console.log('是否到了返回')
            console.log(JSON.stringify(result))
            if (result.returnCode == 1) {
              //isTotalOrdersNo 是否是总订单号，0是子订单 ordersNo，1是总订单 totalOrdersNo
              var oid = result.resultData.ordersId;
              var order_sn = result.resultData.totalOrdersNo;
              that.$router.push({name:'ShopOrderPay',query:{orderId:oid,orderSn:order_sn,orderType:1}});
              // //使用页面跳转，为了避免 mode: 'history' 模式中，记录上一次url路径，导致微信支付授权支付url失败，提示URL未注册页面
              // var order_pay_url = "/orderPay/orderPay"+"?orderId="+oid+"&orderSn="+order_sn+"&orderType=1";
              // console.log(order_pay_url)
              // // window.plus && window.plus.runtime.openURL( order_pay_url )
              // window.location.href = order_pay_url ;
            }
          });
        }
        else{
            if(that.type==3){
              if (that.orderData.userEnableScoreAmount < that.orderData.scoreUseCount) {
                Toast("积分不足");
                return false;
              }
            }
          //团购-积分，秒杀
          var sa=[{ nowBuyFlag: that.type, productId: orderGlobal.data.hdId, quality: orderGlobal.data.quality, sku: orderGlobal.data.sku, scoreUseCount: orderGlobal.data.scoreUseCount }];
          var sss = {
              buyNowProductBoList: sa,
              customerAddressId: that.orderAddress.customerAcceptAddressId,
              customerDisCountCouponId: 0,
              sendType: that.kuaidiData[that.kuaidiIndex].name,
              payMode: 2,
              scoreUseCount: 0,
              invoiceType: 1,
              invoiceInfo: {},
              customerId: that.$store.state.userinfo.userId
          };
          jsonAjax.post(urlUtil.getApiUrl("ordersave_imit"), {buyNowSaveOrderBoJSON: JSON.stringify(sss)}, function(result) {
            if (result.returnCode == 1) {
                var oid = result.resultData.ordersId;
                var order_sn = result.resultData.totalOrdersNo;
                if(that.type==3)
                {
                  that.$router.push({name:"ShopOrderPaysuccess",params:{orderId:oid,orderSn:order_sn}});
                  return;
                }
                else {
                  //isTotalOrdersNo 是否是总订单号，0是子订单 ordersNo，1是总订单 totalOrdersNo

                  that.$router.push({name:'ShopOrderPay',query:{orderId:oid,orderSn:order_sn,orderType:1}});
                  //使用页面跳转，为了避免 mode: 'history' 模式中，记录上一次url路径，导致微信支付授权支付url失败，提示URL未注册页面
                  // var order_pay_url = "/orderPay/orderPay"+"?orderId="+oid+"&orderSn="+order_sn+"&orderType=1";
                  // window.plus && window.plus.runtime.openURL( order_pay_url )
                  // window.location.href = order_pay_url ;
                }
            }
            else{
                Toast("下单失败！")
            }
          });
        }
      },
      countOrderMoney:function () {
        //重新获取订单数据
        var that=this;
//        var orderGlobal=this.$store.state.placeOrder;
        var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
        //订单确认数据获取
        if(that.type==1)
        {
          //普通数据
          var sa = [{
            nowBuyFlag: that.type,
            productId: orderGlobal.data.productId,
            quality: orderGlobal.data.quality,
            sku: orderGlobal.data.sku
          }];
          var sss = {
            buyNowProductBoList: sa,
            customerDisCountCouponId: 0,
            scoreUseCount: 0,
            customerId: that.$store.state.userinfo.userId
          };
          if(that.orderCionxz)
          {
              sss.scoreUseCount=that.orderCion.num;
//            console.log(222)
          }
          if(orderGlobal.discount)
          {
            sss.customerDisCountCouponId=that.orderCoup.customerDiscountCouponId;
          }
          jsonAjax.post(urlUtil.getApiUrl("orderconfirm_imit"), {buyNowGoToOrderPageBoJSON: JSON.stringify(sss)}, function(result) {
            if (result.returnCode == 1) {
              var data = result.resultData;
              that.orderData.finalPayAmount= result.resultData.finalPayAmount;
              if(that.invoiceIndex!=0)
              {
                that.orderData.finalPayAmount=parseFloat(that.orderData.finalPayAmount) + parseFloat(that.orderData.finalPayAmount - that.orderData.finalPostage) * parseFloat(that.shuiLv[that.invoiceIndex]) * 0.01;
                that.orderData.finalPayAmount=parseFloat(that.orderData.finalPayAmount).toFixed(2);
              }
            }
          });
        }
        else if(that.type==2){
          //团购

        }
        else if(that.type==3){
          //积分
        }
        else if(that.type==4){
          //秒杀
        }
        else if(that.type==5){
          //购物车
          var sss = {
            customerDisCountCouponId: 0,
            scoreUseCount: 0,
            shoppingCartIds: JSON.parse(orderGlobal.data.shoppingCartIds),
            customerId: that.$store.state.userinfo.userId
          };
          if(that.orderCionxz)
          {
            sss.scoreUseCount=that.orderCion.num;
          }
          if(orderGlobal.discount)
          {
            sss.customerDisCountCouponId=that.orderCoup.customerDiscountCouponId;
          }
          jsonAjax.post(urlUtil.getApiUrl("orderconfirm_cart"), {goToOrderPageBoJSON: JSON.stringify(sss)}, function (result) {
            if (result.returnCode == 1) {
              var data = result.resultData;
              that.orderData.finalPayAmount= result.resultData.finalPayAmount;
              if(that.invoiceIndex!=0)
              {
                that.orderData.finalPayAmount=parseFloat(that.orderData.finalPayAmount) + parseFloat(that.orderData.finalPayAmount - that.orderData.finalPostage) * parseFloat(that.shuiLv[that.invoiceIndex]) * 0.01;
                that.orderData.finalPayAmount=parseFloat(that.orderData.finalPayAmount).toFixed(2);
              }
            }
          });
        }
      }
    }

  }
</script>

<style scoped>
  .addr_w1 {
    width: 0.5rem;
  }

  .addr_w1 .img {
    width: 0.5rem;
    height: 0.5rem;
  }

  .addr_w2 {
    width: 0.46rem;
  }

  .addr_w2 .img {
    width: 0.36rem;
    height: 0.36rem;
    margin-left: 0.1rem;
  }

  .addr_h1 {
    width: 100%;
  }

  .shop_img {
    width: 0.5rem;
    height: 0.5rem;
  }

  .p_img_view {
    width: 1.64rem;
  }

  .h1 {
    height: 3em;
  }

  .p_img {
    width: 1.6rem;
    height: 1.6rem;
    border: 1px solid #dcdcdc;
    border-radius: 0.08rem;
  }

  .p_img .img {
    width: 100%;
    height: 100%;
  }

  .checkbox {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.1rem;
    margin-left: 0.15rem;
  }

  .wrem7 {
    width: 2rem;
  }

  .input1 {
    border: 1px solid #dcdcdc;
    border-radius: 0.08rem;
    padding: 0.08rem 0.2rem;
  }

  .jinbi {
    width: 0.5rem;
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
    z-index: 1;
    border-top: 1px solid #f2f2f2;
  }

  .oprate_bottom .w2 {
    width: 4.5rem;
  }

  /* .checkbox{ width: 40rpx; height: 40rpx;} */

  .oprate_btn1 {
    background: #E4811D;
    color: #fff;
  }

</style>
