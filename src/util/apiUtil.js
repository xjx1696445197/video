/**
 * Created by on 2018/7/25.
 *  封装应用中使用到所有的api的URL
 */
// var api_root = 'http://192.168.3.95:8184';//测试调试
// var api_rootimg = 'http://192.168.3.95:8184';//测试调试
var api_root = 'http://39.106.90.111:8184';//测试调试
var api_rootimg = 'http://39.106.90.111:8184';//测试调试
//
// var api_root = 'http://chmcapi.chmc.top';//正式调试
// var api_rootimg = 'http://chmcserver.chmc.top';//正式调试
//内置图片资源路径
var inner_img_root = api_rootimg + "/resource";
//上传图片资源路径
var upload_img_root = api_rootimg;
// var upload_img_root= api_root+"/images/b2b2c_ssm";//本地调试1

var urlUtil = urlUtil || {};
urlUtil.uploadImgRoot = upload_img_root;
urlUtil.getApiUrl = function (url_key) {
  var apiUrl = "";
  switch (url_key) {
    // 家兴------------------------------------------------------------------------
    case 'real_update_phone':
      apiUrl = api_root + "/app/customer/updatePhone";
      break;
      // 实名认证第一步
    case 'real_authen':
      apiUrl = api_root + "/app/aip/saveUserInfo";
      break;

      // 实名认证第二步
    case 'real_second_authen':
      apiUrl = api_root + "/app/aip/userCertification";
      break;
      // 全部会员代理
    case "getAllAgentNum":
      apiUrl = api_root + '/app/users/getAllAgentNum';
      break;

      // 二级全部代理信息
    case "getCityState":
      apiUrl = api_root + '/app/users/getCityState';
      break;
      // 一级全部代理信息
    case "getProvinceState":
      apiUrl = api_root + '/app/users/getProvinceState';
      break;

      //       三级
    case "selectMapByAddress":
      apiUrl = api_root + '/app/users/selectMapByAddress';
      break;
      //       搜索地址
    case "selectAgentByAddress":
      apiUrl = api_root + '/app/users/selectAgentByAddress';
      break;
	//       文件地区编号
    case "getMapJson":
	  apiUrl = api_root + '/app/users/getMapJson';
	  break;
	  //       输入省市获取下级人数的
	  case "getMapMemberNum":
	    apiUrl = api_root + '/app/users/getMapMemberNum';
	    break;
          //提币
    case "withDrawMoney":
      apiUrl = api_root + '/app/wallet/userWallet/withDrawMoney';
      break;

    // 检测token是否过期
    case "tokenIsOut":
      apiUrl = api_root + '/app/users/tokenIsOut';
      break;

    case "savePayPassword":
      apiUrl = api_root + '/app/customer/savePayPassword';
      break;
          //收益明细
    case "getVinVoutDetail":
      apiUrl = api_root + '/app/wallet/userWalletTransfer/getVinVoutDetail';
      break;
    //个人中心修改昵称
    case "updateNickName":
      apiUrl = api_root + '/app/customer/updateNickName';
      break;
      // 获取用户个人中心顶部数据
    case "my_top":
      apiUrl = api_root + '/app/users/findUserAgencyAuthority';
      break;
      // 获取提币页面数据
    case "with_draw":
      apiUrl = api_root + '/app/wallet/userWallet/findAmountBuCurrencyOut';
      break;
      // 请求兑换
    case "exchange_chmc":
      apiUrl = api_root + '/app/wallet/userWallet/exchangeToChmc';
      break;
      //获取二维码和图片
    case "findUserShareimg":
      apiUrl = api_root + "/app/users/findUserShareImg";
      break;
      //忘记交易密码验证码更改密码
    case "settingsPayPassword":
      apiUrl = api_root + "/app/customer/settingsPayPassword";
      break;

      //意见反馈
    case "addOpinion":
      apiUrl = api_root + "/app/users/addOpinion";
      break;
      //我的团队直推会员信息
    case "getUserTeamDirectInfo":
      apiUrl = api_root + "/app/users/getUserTeamDirectInfo";
      break;
      //我的团队自身信息
    case "getUserTeamSelfInfo":
      apiUrl = api_root + "/app/users/getUserTeamSelfInfo";
      break;
          //根据旧密码修改密码
    case "updatePassword":
      apiUrl = api_root + "/app/customer/updatePassword";
      break;
          //关于我们
    case "findAboutUs":
      apiUrl = api_root + "/app/aboutUs/findAboutUs";
      break;
          //个人信息
    case "findUserNews":
            apiUrl = api_root + "/app/users/findUserNews";
            break;
      //获取用户账单详情
    case "getbiledetail":
      apiUrl = api_root + "/app/wallet/transactionDetail/getBileDetail";
      break;
//积分交易月账单展示
    case "getcreditsmonthinfo":
      apiUrl = api_root + "/app/wallet/transactionDetail/getCreditsMonthInfo";
      break;
//获取兑换积分限制
    case "getexchangenum":
      apiUrl = api_root + "/app/settings/getexchangeNum";
      break;
//现金交易详情
    case "getmoneytransactioninfo":
      apiUrl = api_root + "/app/wallet/transactionDetail/getMoneyTransactionInfo";
      break;
//现金交易月账单展示
    case "getnmoneymonthinfo":
      apiUrl = api_root + "/app/wallet/transactionDetail/getMoneyMonthInfo";
      break;
//积分交易详情展示
    case "getcreditstransactioninfo":
      apiUrl = api_root + "/app/wallet/transactionDetail/getCreditsTransactionInfo";
      break;

//各个币种余额
    case "userexchangecredits":
      apiUrl = api_root + "/app/wallet/userWalletTransfer/UserExchangeCredits";
      break;
//各个币种余额
    case "getuseramount":
      apiUrl = api_root + "/app/wallet/userWalletTransfer/getUserAmount";
      break;
//hale记录
    case "haleexchangeInfo":
      apiUrl = api_root + "/app/wallet/hale/exchangeInfo";
      break;

//usdt记录
    case "usdtexchangeInfo":
      apiUrl = api_root + "/app/wallet/usdt/exchangeInfo";
      break;

//我的积分已使用
    case "getCreditsOutputInfo":
      apiUrl = api_root + "/app/wallet/credits/getCreditsOutputInfo";
      break;
//我的积分已获得
    case "getCreditsInputInfo":
      apiUrl = api_root + "/app/wallet/credits/getCreditsInputInfo";
      break;
//我的积分 总余额
    case "getCreditsInfo":
      apiUrl = api_root + "/app/wallet/getCreditsInfo";
      break;
//各种余额
    case "my_wallet":
      apiUrl = api_root + "/app/wallet/getAllBalance";
      break;

      //删除足迹
    case "deleteProBrRecord":
      apiUrl = api_root + "/app/customer/proBrRecord/deleteProBrRecordInfo";
      break;

    //  ------------------------------------------------------------------------
    //      获取优惠券未使用数量
    case "getCustomerDiscountCouponAmount":
      apiUrl = api_root + "/app/customer/customerDiscountCoupon/getCustomerDiscountCouponAmount";
      break;
    //  获取兑换内容
    case "getSystemSettings":
      apiUrl = api_root + "/app/settings/getSystemSettings";
      break;

    //首页模块
    case "home_index":
      apiUrl = api_root + "/app/home/getHomeIndex";
      break;
    //商品分类
    case "product_category_fst":
      apiUrl = api_root + "/app/product/productType/getFirstProductTypeList";
      break;
    case "product_category_sed_thd":
      apiUrl = api_root + "/app/product/productType/getSedAndThdProductTypeList";
      break;
    //分类商品
    case "category_products":
      apiUrl = api_root + "/app/product/productInfo/getProductList";
      break;
    //登录注册
    case "login":
      apiUrl = api_root + "/app/login/customerLogin";
      break;
    case "logincheck":
      apiUrl = api_root + "/app/login/checkLoginByPhone";
      break;
    case "sign":
      apiUrl = api_root + "/app/register/saveCustomerRegister";
      break;
    case "findpass":
      apiUrl = api_root + "/app/forgetPassword/forgetPassword";
      break;
    //新闻模块
    case "cms_list":
      apiUrl = api_root + "/app/article/getCmsArticleListPage";
      break;
    case "cms_detail":
      apiUrl = api_root + "/app/article/getArticleById";
      break;
    // 商品详情
    case "product_detail":
      apiUrl = api_root + "/app/product/productInfo/getBaseProductInfo";
      break;
    // 商品规格
    case "product_guige":
      apiUrl = api_root + "/app/product/productInfo/getProductSpecification";
      break;
    //商品图文详情
    case "product_tuwen":
      apiUrl = api_root + "/app/product/productInfo/getProductInfoInfoDetail";
      break;
    //更新数据
    case "product_genxin":
      apiUrl = api_root + "/app/product/productInfo/getProductIdBySpecification";
      break;
    //商品查看收藏
    case "product_checkcollect":
      apiUrl = api_root + "/app/customer/productCollection/isProductCollection";
      break;
    //商品收藏
    case "product_collect":
      apiUrl = api_root + "/app/customer/productCollection/saveProductCollection";
      break;
    //商品取消收藏
    case "product_nocollect":
      apiUrl = api_root + "/app/customer/productCollection/deleteProcutCollection";
      break;
    //店铺信息
    case "shop_info":
      apiUrl = api_root + "/app/product/productInfo/getShopBaseInfo";
      break;
    //店铺关注
    case "shop_collect":
      apiUrl = api_root + "/app/customer/shopCollection/saveShopCollection";
      break;
    //店铺取消关注
    case "shop_nocollect":
      apiUrl = api_root + "/app/customer/shopCollection/deleteShopCollection";
      break;
    //店铺收藏列表
    case "shop_collectlist":
      apiUrl = api_root + "/app/customer/shopCollection/getCollectShopList";
      break;
    //商品评价
    case "product_evaluate":
      apiUrl = api_root + "/app/customer/productEvaluation/getEvaluationByProductId";
      break;
    //热门搜索
    case "product_hotlist":
      apiUrl = api_root + "/app/topSearch/getTopSearchInfo";
      break;
    //地址列表
    case "address_list":
      apiUrl = api_root + "/app/customer/customerAcceptAddress/getCustomerAcceptAddressList";
      break;
    case "address_info":
      apiUrl = api_root + "/app/customer/customerAcceptAddress/getCustomerAcceptAddressObject";
      break;
    case "address_edit":
      apiUrl = api_root + "/app/customer/customerAcceptAddress/updateCustomerAcceptAddress";
      break;
    case "address_add":
      apiUrl = api_root + "/app/customer/customerAcceptAddress/saveCustomerAcceptAddress";
      break;
    case "address_setmoren":
      apiUrl = api_root + "/app/customer/customerAcceptAddress/updateCustomerAcceptAddressIsSend";
      break;
    case "address_delete":
      apiUrl = api_root + "/app/customer/customerAcceptAddress/deleteCustomerAcceptAddress";
      break;
    //添加购物车
    case "add_cart":
      apiUrl = api_root + "/app/customer/shoppingCart/saveShoppingCartNewVersion";
      break;
    //购物车移除
    case "cart_delete":
      apiUrl = api_root + "/app/customer/shoppingCart/deleteShopCartById";
      break;
    //获取购物车列表
    case "cart_list":
      apiUrl = api_root + "/app/customer/shoppingCart/getShoppingCartData";
      break;
    //更改购物车数量
    case "cart_num":
      apiUrl = api_root + "/app/customer/shoppingCart/updateShoppingCartQuantity";
      break;
    //获取购物车数量
    case "cart_hqnum":
      apiUrl = api_root + "/app/customer/shoppingCart/findShoppingCartProductCount";
      break;
    //购物车确认订单
    case "orderconfirm_cart":
      apiUrl = api_root + "/app/customer/orders/gotoOrderPage";
      break;
    //购物车保存订单
    case "ordersave_cart":
      apiUrl = api_root + "/app/customer/orders/saveShoppingCartOrder";
      break;
    //立即购买确认订单
    case "orderconfirm_imit":
      apiUrl = api_root + "/app/customer/orders/gotoBuyNowOrderPage";
      break;
    //立即购买保存订单
    case "ordersave_imit":
      apiUrl = api_root + "/app/customer/orders/saveBuyNowOrder";
      break;
    //订单列表
    case "order_list":
      apiUrl = api_root + "/app/customer/orders/findOrders";
      break;
    //订单详情
    case "order_detail":
      apiUrl = api_root + "/app/customer/orders/getOrders";
      break;
    //取消订单
    case "order_cancel":
      apiUrl = api_root + "/app/customer/orders/cancelOrders";
      break;
    //确认收货
    case "order_receive":
      apiUrl = api_root + "/app/customer/orders/confirmOrders";
      break;
    //订单评价
    case "order_evaluate":
      apiUrl = api_root + "/app/customer/orders/saveMoreProductEvaluation";
      break;
    //订单评价详情
    case "order_evaluate_detail":
      apiUrl = api_root + "/app/customer/productEvaluation/getOrderEvaluationInfo";
      break;
    //订单售后
    case "order_applay":
      apiUrl = api_root + "/app/customer/orders/saveReturnProductInfo";
      break;
    //可申请售后的列表
    case "order_canapplaylist":
      apiUrl = api_root + "/app/customer/orders/getReturnProductsList";
      break;
    //取消申请
    case "order_cancelapply":
      apiUrl = api_root + "/app/customer/orders/updateReturnsState";
      break;
    //修改申请
    case "order_editlapply":
      apiUrl = api_root + "/app/customer/orders/updateReturnProductInfo";
      break;
    //删除申请
    case "order_deletelapply":
      apiUrl = api_root + "/app/customer/orders/updateIsDelete";
      break;
    //可申请售后的列表
    // case "order_canapplaylist": apiUrl = api_root + "/app/customer/orders/getReturnProductsList"; break;
    //售后列表
    case "order_applaylist":
      apiUrl = api_root + "/app/customer/orders/getReturnsList";
      break;
    //售后详情
    case "order_applydetail":
      apiUrl = api_root + "/app/customer/orders/getReturnSpeed";
      break;
    //删除订单
    case "order_delete":
      apiUrl = api_root + "/app/customer/orders/deleteOrders";
      break;
    //订单物流
    case "order_logitic":
      apiUrl = api_root + "/app/customer/shipping/getShippingInfoList";
      break;
    //可领取优惠券
    case "coup_lqlist":
      apiUrl = api_root + "/app/discountCoupon/getDiscountCouponList";
      break;
    //领取优惠券
    case "coup_lqoprate":
      apiUrl = api_root + "/app/customer/customerDiscountCoupon/directlyReceiveDiscountCoupon";
      break;
    //店铺优惠券
    case "coup_shoplist":
      apiUrl = api_root + "/app/discountCoupon/getDiscountCouponByShopInfoId";
      break;
    //用户优惠券列表
    case "coup_list":
      apiUrl = api_root + "/app/discountCoupon/getInvitationDiscountCoupon";
      break;
    case "coup_lista":
      apiUrl = api_root + "/app/customer/customerDiscountCoupon/getCustomerDiscountCouponList";
      break;
    //我的积分
    case "cion_number":
      apiUrl = api_root + "/app/customer/mallCoin/getSumMalls";
      break;
    case "cion_kind":
      apiUrl = api_root + "/app/coinMall/queryAllCoinMallProductType";
      break;
    case "cion_list":
      apiUrl = api_root + "/app/coinMall/getCoinMallProductList";
      break;
    case "cion_prodetail":
      apiUrl = api_root + "/app/coinMall/loadCoinMallProductById";
      break;
    //积分来源
    case "cion_from":
      apiUrl = api_root + "/app/customer/mallCoin/getMallCoinList";
      break;
    //商品收藏列表
    case "pro_coolect_list":
      apiUrl = api_root + "/app/customer/productCollection/getCollectProductList";
      break;
    //商品取消收藏列表
    case "pro_coolect_cancel":
      apiUrl = api_root + "/app/customer/productCollection/deleteProcutCollection";
      break;
    //抢购商品
    case "panic_time":
      apiUrl = api_root + "/app/panicBuying/getTodayPanicSpecial";
      break;
    case "panic_list":
      apiUrl = api_root + "/app/panicBuying/getPanicBuyingBySpecialId";
      break;
    case "panic_prodetail":
      apiUrl = api_root + "/app/panicBuying/loadPanicBuyingByPanicId";
      break;
    //团购商品
    case "tuan_kind":
      apiUrl = api_root + "/app/tuan/queryAllTuanProductType";
      break;
    case "tuan_list":
      apiUrl = api_root + "/app/tuan/getTuanProductList";
      break;
    // case "tuan_list": apiUrl = api_root + "/app/tuan/getTorder_applydetailuanProductList"; break;
    case "tuan_prodetail":
      apiUrl = api_root + "/app/tuan/loadTuanProductById";
      break;
    //获取订单数量
    case "orderNum":
      apiUrl = api_root + "/app/customer/orders/findOrdersCount";
      break;
    //余额
    case "cash_num":
      apiUrl = api_root + "/app/customer/bankroll/getBalance";
      break;
    //余额充值
    case "cash_chong":
      apiUrl = api_root + "/app/customer/recharge/saveMoeny";
      break;
    //余额提现
    case "cash_apply":
      apiUrl = api_root + "/app/customer/drawing/saveDrawing";
      break;
    //余额明细
    case "cash_list":
      apiUrl = api_root + "/app/customer/getCustomerBalanceInfo";
      break;
    //签到
    case "signin":
      apiUrl = api_root + "/app/customer/customerSign";
      break;
    case "signin_riqi":
      apiUrl = api_root + "/app/customer/getCustomerSingData";
      break;
    case "signin_score":
      apiUrl = api_root + "/app/keyBook/getKeyBookByType";
      break;
    case "signin_explain":
      apiUrl = api_root + "/app/article/getArticleByCode/QJSM_QDGZSM";
      break;
    //专场促销
    case "special_list":
      apiUrl = api_root + "/app/promotion/getPlatformPromotionAllList";
      break;
    case "special_prolist":
      apiUrl = api_root + "/app/promotion/getStoreApplyPromotionList";
      break;
    //获取区域列表
    case "address_area":
      apiUrl = api_root + "/app/area/getNextAreaByParams";
      break;
    // 新闻头条
    case "news_list":
      apiUrl = api_root + "/app/article/getCmsArticleTodayHeadlineList";
      break;
    case "news_detail":
      apiUrl = api_root + "/app/article/getArticleById";
      break;
    //微信用户登录
    case "wxmp_login":
      apiUrl = api_root + "/wxmp/login/wxmpCustomerLogin";
      break;
    //获取用户手机号
    case "user_phone":
      apiUrl = api_root + "/wxmp/login/bingPhoneNumber";
      break;
    //我的足迹
    case "user_hisroty":
      apiUrl = api_root + "/app/customer/proBrRecord/getProBrRecordList";
      break;
    case "savehisroty":
      apiUrl = api_root + "/app/customer/proBrRecord/saveProBrRecord";
      break;
    case "user_hisroty_clear":
      apiUrl = api_root + "/app/customer/proBrRecord/deleteProBrRecordInfo";
      break;
    //获取用户信息
    case "user_info":
      apiUrl = api_root + "/app/customer/getCustomerNewInfo";
      break;
    //获取个人中心数据
    case "user_center":
      apiUrl = api_root + "/app/product/productInfo/getRecommendProductList";
      break;
    //修改密码
    case "user_editpass":
      apiUrl = api_root + "/app/customer/updatePassword";
      break;
      // 忘记密码
    case "find_pass":
      apiUrl = api_root + '/app/forgetPassword/findLoginPassword';
      break;
      // 请求开通vip所需hale
    case "vip_hale":
      apiUrl = api_root + '/app/users/vipAmountList';
      break;
      // 开通vip
    case "open_vip":
      apiUrl = api_root + '/app/users/openUserVipLevel';
      break;
      // 我的页面我的资产数据
    case "my_asset":
      apiUrl = api_root + '/app/wallet/userWallet/walletBalance';
      break;
      // 获取币地址
    case "currency_detail":
      apiUrl = api_root + '/app/wallet/userWallet/findAmountByCurrency';
      break;
      // 获取兑换页面数据
    case 'currency_exchange_detail':
      apiUrl = api_root + '/app/wallet/userWallet/getRateByCurrency';
      break;
      // 检测交易密码是否正确
    case 'transPass_isTrue':
      apiUrl = api_root + '/app/users/isCorrectTransPass';
      break;
    //修改支付密码
    case "user_editpaypass":
      apiUrl = api_root + "/app/customer/updatePayPassword";
      break;
    //更换手机号
    case "user_editphone":
      apiUrl = api_root + "/app/customer/updatePhone";
      break;
    //修改用户基本信息
    case "user_editinfo":
      apiUrl = api_root + "/app/customer/customerInfo/updateCustomerInfo";
      break;
    //短信发送
    case "send_dx":
      apiUrl = api_root + "/app/securityCode/getMessagesSecurityCode";
      break;
    //图片
    case "send_pic":
      apiUrl = api_root + "/app/securityCode/getSecurityCodeImage";
      break;
    //微信支付，微信JsApi预支付订单的信息
    case "per_wx_to_pay":
      apiUrl = api_root + "/app/customer/wxpay/wxJsApiPay";
      break;
    //获取微信公众号用户信息wxUserOpenId
    case "wechat_information_acquisition":
      apiUrl = api_root + "/app/weChat/weChatInformationAcquisition";
      break;
    //支付宝支付订单
    case "shopjsp_ali_pay":
      apiUrl = api_root + "/app/customer/alipay/shopJspAliPay";
      break;
    //余额支付订单
    // case "balance_pay":
    //   apiUrl = api_root + "/app/customer/balancePay/balancePaying";
    //   break;
      //余额支付订单
    case "balance_pay":
      apiUrl = api_root + "/app/customer/balancePay/creditsPaying";
      break;
    //获取发票信息
    case "invoice_info":
      apiUrl = api_root + "/app/customer/invoice/getInvoice";
      break;
    //保存，修改发票信心
    case "invoice_save":
      apiUrl = api_root + "/app/customer/invoice/updateInvoice";
      break;
    //用户修改头像图片
    case "customer_image_upload":
      apiUrl = api_root + "/app/customerUpload/updateCustomerHeadPhoto";
      break;
    //图片上传（通用）
    case "image_upload":
      apiUrl = api_root + "/app/upload/uploadImageInfo";
      break;
    //默认没有找到
    default:
      null;

  }
  return apiUrl;
}

urlUtil.urlback = function (code_S, id, name) {
  //按照编码跳页,这是小程序的编码对应的链接，需要重新修改成Vue的链接
  var bianma = [
    {nameExplain: "优品团购首页", code: "SY_YPTG_SY", name: "ShopGroup", tag: 1},
    {nameExplain: "优品团购详情", code: "SY_YPTG_XQ", name: "ShopProductsDetail", params: {type: 2, pId: id}, tag: 2},
    {nameExplain: "商品详情", code: "SP_SPXQ", name: "ShopProductDetail", params: {pId: id}, tag: 2},
    {nameExplain: "商品列表分类", code: "SP_SPLB", name: "ShopProduct", params: {cId: id, cName: name, keyword: 0}, tag: 2},
    {nameExplain: "商品列表搜索", code: "SP_SPLB_SS", name: "ShopProductList", params: {cId: 0, cName: 0, keyword: name}, tag: 2},
    {nameExplain: "秒杀首页", code: "SY_MSQG_SY", name: "ShopPanic", tag: 1},
    {nameExplain: "秒杀详情", code: "SY_MSQG_XQ", name: "ShopProductsDetail", params: {type: 4, pId: id}, tag: 2},
    {nameExplain: "专场活动首页", code: "SY_ZCHD_SY", name: "ShopSpecialActivity", tag: 1},
    {nameExplain: "专场活动详情", code: "SY_ZCHD_XQ", name: "SpecialProduct", params: {id: id, name: name}, tag: 2},
    {nameExplain: "今日头条首页", code: "SY_JRTT_SY", name: "articleList", tag: 1},
    {nameExplain: "今日头条详情", code: "SY_JRTT_XQ", name: "articleDetail", params: {articleId: id}, tag: 2},
    {nameExplain: "领券中心列表", code: "SY_LJZX_LB", name: "ShopCouponDraw", tag: 1},
    {nameExplain: "每日签到_签到", code: "SY_MRQD_QD", name: "signIn", tag: 1},
    {nameExplain: "积分商城首页", code: "SY_JFSC_SY", name: "integralProduct", tag: 1},
    {nameExplain: "积分商城详情", code: "SY_JFSC_XQ", name: "ShopProductsDetail", params: {type: 3, pId: id}, tag: 2},
    {nameExplain: "热门商圈首页", code: "SY_RMSQ_SY", name: "ShopIndex", tag: 1},
    {nameExplain: "热门商圈列表", code: "SY_RMSQ_LB", name: "ShopIndex", tag: 1},
    {nameExplain: "热门商圈商家详情", code: "SY_RMSQ_XQ", name: "ShopIndex", params: {shopId: id}, tag: 2},
    {nameExplain: "我的订单列表", code: "SY_WDDD_LB", name: "ShopOrderList", params: {type: 1}, tag: 2},
    {nameExplain: "我的_首页", code: "WD_SY", name: "ShopMy", tag: 1}
  ];

  var url = "";
  for (var i = 0; i < bianma.length; i++) {
    if (code_S == bianma[i].code) {
      url = bianma[i];
      break;
    }
  }
  // console.log()
  if (url != "") {
    if (url.tag == 2) {
      return {name: url.name, params: url.params};
    }
    else {
      return {name: url.name};
    }
  }
  else {
    return '';
  }

};

urlUtil.exchange_time = function (str) {
  str = new Date(str);
  var year = str.getFullYear();
  var month = str.getMonth() + 1;
  var day = str.getDate();
  var hour = str.getHours();
  var minute = str.getMinutes();
  var second = str.getSeconds();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  return {
    riqi: year + "-" + month + "-" + day,
    time: hour + ":" + minute + ":" + second,
    all_time: year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second,
    minute: minute,
    hour: hour,
    seconds: second
  };
};

export default urlUtil
