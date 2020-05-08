<template>

    <div id="productDetail" class="content_box">

        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">{{topTitle}}</p>
        </div>
        <!--顶部栏  -->
        <div class='ptop f24'>
            <div class='table h100 txt_center'>
                <div class='td' v-on:click='click_go("prod")'><div class='inblock dw f0' v-if="pzt=='prod'"><img src='../static/images/shop/dw.png'></div><span class="inblock mar_l5">商品</span></div>
                <div class='td' v-on:click='click_go("proevalua")'><div class='inblock dw f0' v-if="pzt=='proevalua'"><img src='../static/images/shop/dw.png'></div><span class="inblock mar_l5">评价</span></div>
                <div class='td' v-on:click='click_go("pro_dt")'><div class='inblock dw f0' v-if="pzt=='pro_dt'"><img src='../static/images/shop/dw.png'></div><span class="inblock mar_l5">详情</span></div>
            </div>
        </div>
        <div class="top_h" id="prod"></div>
        <!--轮播图-->
        <div class="img_box img_big1">
            <div class="img_cnt">
                <div class="loding" v-if="lodingimg"><img src="../static/images/shop/Load.gif"> </div>
                <mt-swipe :auto="4000" class="mt-swipe">
                    <mt-swipe-item v-for="(item,index) in imgUrls_swiper" :key="index" >
                        <img :onerror="errorUserPhoto" :src="sourceUrlShop+item" class="img" v-if="index==0"  @load="successLoadImg" />
                        <img :onerror="errorUserPhoto" :src="sourceUrlShop+item" class="img" v-else/>
                        <span class="desc"></span>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <!--标题  -->
        <div class='all bgfff pad_20 table'>
            <div class='td f28 all' style="width: 90%">{{baseInfo.productName}}</div>
            <span class="copy-btn" v-clipboard:copy="baseInfo.productName" v-clipboard:success="onCopy" v-clipboard:error="onError"
                  style="color:#e4811d;display: inline-block;width: 2rem;text-align: right;">复制去咨询</span>
        </div>
        <div class='pad_l20 bgfff pad_r20 pad_b20 table all mar_b10'>
            <div class='td f28 czt'><span class="pr10">￥{{baseInfo.salesPrice}} </span>| <span class="pl10">{{baseInfo.salesCredits}} </span>积分</div>
            <div class='td f24 c666 txt_right'>
                <span class='inblock'>库存：{{postPack}}</span>
                <span class='inblock mar_l20'>销量：{{baseInfo.totalSales}}</span>
            </div>
        </div>
        <!--已选规格  -->
        <div class='pad_20 bgfff f28 all table mar_b10' v-on:click='openGuige(1)' id="proevalua">
            <div class='td'>已选：
                <span class='czt'>{{yxGuigestr}}</span>
            </div>
            <div class='td icon_xz f0 txt_right'>
                <img src='../static/images/shop/xz_dot.png' class='img'>
            </div>
        </div>
        <!--宝贝评价  -->
        <div style="width: 100%;height: 0.2rem;background: #f5f5f5;"></div>
        <router-link :to="{name:'ShopProductEvaluate',params:{pId:pId}}" class='bgfff all table pad_20 f28'>
            <div class='td'>商品评价（{{evaluate.sumCount}}）</div>
            <div class='icon_xz f0 td'>
                <img class='rimg ver_mid' src='../static/images/shop/right.png'>
            </div>
        </router-link>
        <div class='pad_l20 pad_r20 bgfff'>
            <div class='border_t pad_t20 pad_b20 all' v-if="evaluate.sumCount == 0">
                暂无评价
            </div>
            <div class='border_t pad_t20 pad_b20 all' v-for="(item,index) in evaluate.evaluationList" v-if="index<5">
                <div class='table all mar_b10'>
                    <!--用户头像隐藏，因用户不传头像时，展示效果不好-->
                    <!--<div class='f0 td eva_img'>
                      <img class='img' :onerror="errorUserPhoto" :src='uploadImgRoot+"/"+item.cutomerImg'>
                    </div>-->
                    <div class='eva_title td f24 txt_one'>{{item.isAnonymous==1 ? '******' : item.appraiserName}}</div>
                    <div class='td txt_right f0'>
                        <div class='inblock eva_star mar_l5' v-if="item.level>-2">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                        <div class='inblock eva_star mar_l5' v-if="item.level>-1">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                        <div class='inblock eva_star mar_l5' v-if="item.level>-1">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                        <div class='inblock eva_star mar_l5' v-if="item.level>0">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                        <div class='inblock eva_star mar_l5' v-if="item.level>0">
                            <img class='img' src='../static/images/shop/star_en.png'>
                        </div>
                    </div>
                </div>
                <div class='f26 c666 mar_b10'>{{item.content}}</div>
                <div class='f26 c666 mar_b10'>
                    <!--循环展示评价图片-->
                    <template v-for="(uploadImageItem,index) in item.uploadImageArray">
                        <img v-if="uploadImageItem" :onerror="errorUserPhoto" class="productEvaluate_img" :src="sourceUrlShop+uploadImageItem"/>
                    </template>
                </div>
                <div class='f24 c666'>{{item.showTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</div>
            </div>
        </div>
        <!--店铺  -->
        <!--<view>-->
        <!--<div style="width: 100%;height: 0.2rem;background: #f5f5f5;"></div>-->
        <!--<div class='bgfff pad_5 mar_b5 all f28'>-->
            <!--<div class='mar_b10'>-->
                <!--<img class='icon_shop ver_mid mar_r5' src='../static/images/shop/shop.png' style="display: inline-block">-->
                <!--<span class='inblock'>{{shopInfo.shopName}}</span>-->
            <!--</div>-->
            <!--<div class='pad_10 all table' style='margin-top:5px; padding-bottom:5px;'>-->
                <!--<div class='td txt_center'>-->
                    <!---->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
            <!--<a href='javascript:;' onclick='easemobim.bind({configId: "086dd8df-005d-40b2-8411-dde5091d1ef9"})'>-->
                <!--<img style="width: 1.2rem" src="../static/images/shop/icon_kftwo.png">-->
            <!--</a>-->
        <!--</view>-->
        <!--&lt;!&ndash;  &ndash;&gt;-->
        <!--<div class='up_load'>上滑查看商品详情</div>-->
        <!--&lt;!&ndash;详情  &ndash;&gt;-->
        <div style="width: 100%;height: 0.2rem;background: #f5f5f5;"></div>
        <div id='pro_dt' class='tab_title bgfff clear txt_center' v-if="xq_zt==0" style='height:0.88rem;'>
            <div class='L col6' v-on:click='tabQiehuan(0)'>
                <span class='tab inblock f28' :class='tabIndex==0?"cur":""'>产品详情</span>
            </div>
            <div class='L col6' v-on:click='tabQiehuan(1)'>
                <span class='tab inblock f28' :class='tabIndex==1?"cur":""'>产品参数</span>
            </div>
            <!--<div class='L col4' v-on:click='tabQiehuan(2)'>-->
                <!--<span class='tab inblock f28' :class='tabIndex==2?"cur":""'>售后服务</span>-->
            <!--</div>-->
        </div>
        <div class='bgfff pad_b20 detail_cnt' style='min-height:4rem;background: none;' v-if="xq_zt==0">
            <div v-if="tabIndex==0">
                <!--详情  -->
                <div class='pad_20 txt_center' v-if="proDetail==''">暂无内容</div>
                <div v-html="proDetail"></div>
            </div>
            <div v-if="tabIndex==1" class='pad_l20 pad_r20'>
                <!--参数  -->
                <div v-for="(item,index) in baseInforList">
                    <div class='f30 pad_b20 pad_t20'>{{item.name}}</div>
                    <div class='table pad_20 border_b all' v-for="(itema,indexa) in item.paramGroupInfo">
                        <div class='td'>{{itema.name}}</div>
                        <div class='td txt_right'>{{itema.value[0]}}</div>
                    </div>
                </div>
                <div>
                    <div class='table pad_20 border_b all'>
                        <div class='td'>商品编号</div>
                        <div class='td txt_right'>{{productCode}}</div>
                    </div>
                </div>
            </div>
            <div v-if="tabIndex==2" class='pad_l20 pad_r20'>
                <!--售后服务  -->
                <div v-html="productShouhou"></div>
            </div>
        </div>

        <!--<div class='up_load_txt' wx:if="{{show_xq.zt!=0}}">{{show_xq.txt}}</div>-->
        <!--<div class='both'></div>-->
        <!--&lt;!&ndash;底部操作  &ndash;&gt;-->
        <div class="bot_h"></div>
        <div class='oprate_bottom all bgfff f20 c666 txt_center'>
            <div class='table'>

                <div class='td' v-if="isCollect==0" v-on:click='collectTap(1)'>
                    <div class='f0 mar_b2'>
                        <img class='oprate_img mauto' src='../static/images/shop/xca_023.png'>
                    </div>
                    <div>收藏</div>
                </div>
                <div class='td' v-if="isCollect==1" v-on:click='collectTap(0)'>
                    <div class='f0 mar_b2'>
                        <img class='oprate_img mauto' src='../static/images/shop/xc_03.png'>
                    </div>
                    <div>已收藏</div>
                </div>
                <router-link :to="{name:'ShopCart'}" class='td x_num'>
                    <div class='s_num'>{{cartNum}}</div>
                    <div class='f0 mar_b2'>
                        <img class='oprate_img mauto' src='../static/images/shop/cart_black.png'>
                    </div>
                    <div>购物车</div>
                </router-link>
                <div class='td oprate_btn1 f28 wrem8 color_1' v-on:click='openGuige(1)'>加入购物车</div>
                <div class='td oprate_btn1 f28 wrem8' v-on:click='openGuige(2)'>立即购买</div>
            </div>
        </div>

        <!--规格  -->
        <div class='box_shadow' :class='guigeOprate==0?"Hide":""' v-on:click='openGuige(0)'></div>
        <div class='box_guige' :class='guigeOprate!=0?"cur":""'>
            <div class='close_btn f0' v-on:click='openGuige(0)'>
                <img src='../static/images/shop/delete.png'>
            </div>
            <div class='pad_l20 pad_r20 all clear pad_b20 border_b' style="height: 1.35rem">
                <div class='L img_box'>
                    <img class='img' :onerror="errorUserPhoto" :src="sourceUrlShop+baseInfo.logoImg">
                </div>
                <div class='L font_div pad_l20 pad_t20'>
                    <div class='txt_one mar_b10 f24'>{{baseInfo.productName}}</div>
                    <div class='clear'>
                        <div class='L czt f24'><span class="pr10">￥{{baseInfo.salesPrice}}</span> | <span class="pl10">{{baseInfo.salesCredits}}</span> 积分</div>
                        <div class='R f24 c999'>库存：{{postPack}}</div>
                    </div>
                </div>
            </div>
            <!--规格滚动区  -->
            <div class='scrolla'>
                <div v-for="(item,index) in productGuige">
                    <div class='pad_20 border_b f24'>{{item.keyName}}</div>
                    <div class='clearfix pad_10 border_b'>
                        <div v-for="(itema,indexa) in item.specificationValue" class='p_guige L f24'
                             :class='yxGuigedata[index].tindex==indexa || curProductId == indexa?"cur":""'
                             v-on:click='editGuige(index,indexa)'

                        >{{itema.valueName}}
                        </div>
                    </div>
                </div>
                <!--数量  -->
                <div class='table all pad_20'>
                    <div class="td wrem3">数量</div>
                    <div class="td">
                        <div class='p_num txt_right f0'>
                            <div class='inblock sub' v-on:click='subNum'>
                                <img src='../static/images/shop/jian.png' class='img'>
                            </div>
                            <div class='inblock'>
                                <input type='number' disabled='true' v-model='pNum' class='input f28' style="border: none;"></input>
                            </div>
                            <div class='inblock add' v-on:click='addNum'>
                                <img src='../static/images/shop/add.png' class='img'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- 增加按钮开始 -->
            <!--<div class="clearfix">-->
                <!--<div class='oprate_btn1 all txt_center f30 nyBtn fl color_1' v-if="buyTrue&postPack>0 && !isNowBuy"-->
                     <!--style="width:50%;"-->
                     <!--v-on:click='addCart'>加入购物车</div>-->
                <!--<div class='oprate_btn1 all txt_center f30 nyBtn fl' v-if="buyTrue&postPack>0 && !isNowBuy"-->
                     <!--v-on:click='createOrder'-->
                    <!--style="width:50%;"-->
                <!--&gt;立即购买</div>-->
                <!--<div class='oprate_btn1 all txt_center f30 nyBtn fl' v-if="isNowBuy"-->
                     <!--v-on:click='createOrderNow'-->
                <!--&gt;确定</div>-->
                <!--<div class='oprate_btn1 gray all txt_center f30 nyBtn' v-if="!buyTrue||postPack<1">库存不足</div>-->
            <!--</div>-->
            <!-- 增加按钮结束 -->
            <div class='oprate_btn1 all txt_center f30 nyBtn' v-if="buyTrue&postPack>0"
                 v-on:click='addCart'>确定</div>

            <div class='oprate_btn1 gray all txt_center f30 nyBtn' v-if="!buyTrue||postPack<1">库存不足</div>

        </div>

        <a href='javascript:;'
           @mousedown="down" @touchstart="down"
           @mousemove="move" @touchmove="move"
           @mouseup="end" @touchend="end"
           id="Customerservice" onclick='easemobim.bind({configId: "086dd8df-005d-40b2-8411-dde5091d1ef9"})' style="position:fixed;z-index: 999999;bottom: 1.3rem;right: .1rem;border-radius: 50%;width: 1.2rem;height: 1.2rem;touch-action: none;">
            <img style="width: 1.2rem" src="../static/images/shop/icon_kftwo.png">
        </a>
    </div>
</template>


<script>
    import { sourceUrl,sourceUrlShop } from '@/config'
    import { mapGetters } from 'vuex'
    import Vue from 'vue';
    import {Button,Header,Swipe,SwipeItem,Toast,MessageBox} from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.component(Header.name, Header);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/mrbj.png';
    // import 'static/js/easemob.js';
    import VueClipboard from 'vue-clipboard2'
    Vue.use(VueClipboard)



    export default {
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                topTitle:'商品详情',
                imgUrls_swiper: [],
                pzt:'prod',//筛选条件
                pId:this.$route.params.pId,//商品id
                goodId:-1,
                oldPid:this.$route.params.pId,
                evaluate:{},//商品评价列表
                shopInfo:{},//商铺情况
                shopId:'',//商铺id
                baseInfo:{},//商品基本详情
                postPack:10,//商品库存
                xq_zt:0,//是否显示详情tab
                tabIndex:0,//商品tab
                proDetail:"商品图文详情",
                baseInforList:[],//商品参数
                productCode:'',//商品编号
                productShouhou:"售后内容",
                isCollect:0,//商品收藏，1已收藏，0未收藏
                cartNum:0,//购物车数量
                guigeOprate:0,//1，加入购物车，2立即购买,0不显示
                productGuige:[],//商品规格
                yxGuigedata:[],//商品已选规格
                yxGuigestr:'',//已选规格
                pNum:1,//购买数量
                uploadImgRoot: urlUtil.uploadImgRoot,
                buyTrue:true,//true可购买，false不可购买,
                isEvaluate:false,
                isNowBuy:false,
                curProductId:'',//当前的规格参数
                flags: false,
                position: { x: 0, y: 0 },
                nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                lodingimg:true
            //
                }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userName(){
                return this.userinfo.userName
            },
            token(){
                return this.userinfo.token
            }
        },
        mounted(){
            var that=this
            console.log(this.userName)
            window.easemobim = window.easemobim || {};
            easemobim.config = {
                configId: '086dd8df-005d-40b2-8411-dde5091d1ef9',
                buttonText: '联系客服',
                dialogWidth: '460px',
                dialogHeight: '550px',
                dialogPosition: { x: '10px', y: '10px' },
                user: {
                    username:this.userName,
                    password: '123',
                    // token:'',
                    // token:this.token,

                },
                visitor: {
                    trueName: this.userName,
                    userNickname: this.userName
                }
            }

        },
        /**初始化组件的时候进行数据处理**/
        created: function () {

            //下单数据
            this.$store.state.placeOrder = {data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false};

            localStorage.setItem("placeOrder",JSON.stringify({data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false}))

            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            var pId=that.pId,oldPid=that.oldPid,shopId='';

            //获取购物车数量
            jsonAjax.post(urlUtil.getApiUrl("cart_hqnum"), {
                customerId: that.$store.state.userinfo.userId}, function (result) {
                if (result.returnCode == 1) {
                    that.cartNum= result.resultData.quantityTotal;
                }
            });

            //商品评价
            jsonAjax.post(urlUtil.getApiUrl("product_evaluate"), { productId: that.pId, type: 1, page: 1 }, function (result) {
                if (result.returnCode == 1) {
                    // 如果用户有评价
                    if(result.resultData.goodCount != 0){
                        that.isEvaluate = true
                        //获取评价图片，有一张或者多张，使用 , 逗号 分割，返回页面模板数据为数组类型。
                        var evaluationListTemp = result.resultData.evaluationList;
                        if (evaluationListTemp) {
                            for (var i = 0; i < evaluationListTemp.length; i++) {
                                //获取评价图片，有一张或者多张，使用 , 逗号 分割，返回页面模板数据为数组类型。
                                if(evaluationListTemp[i].uploadImage!=null&&evaluationListTemp[i].uploadImage.length>0){
                                    //保存评价图片为数组类型
                                    //判断包含 , 逗号，表示都多张图片
                                    var uploadImageArray = evaluationListTemp[i].uploadImage.split(",");
                                    //重新定义uploadImage为数组类型
                                    evaluationListTemp[i].uploadImageArray=uploadImageArray;
                                }
                            }
                            result.resultData.evaluationList = evaluationListTemp;

                        }
                    }else{
                    //    没有评价

                    }

                    that.evaluate=result.resultData;
                    console.log(that.evaluate)
                }
            });

            //获取商品规格
            jsonAjax.post(urlUtil.getApiUrl("product_guige"), { productId: pId }, function (result) {
                if (result.returnCode == 1) {
                    that.productGuige=result.resultData.specificationValuesList;
                    // console.log("productGuige:"+that.productGuige)
                    that.goodId=result.resultData.goodId;
                    //刷新数据-默认第一个属性
                    var ls_guige = [];
                    var str = "";
                    for (var i = 0; i < that.productGuige.length; i++) {
                        var ls_data={}
                        for(var j=0;j<that.productGuige[i].specificationValue.length;j++)
                        {
                            if(that.productGuige[i].specificationValue[j].productId==that.pId)
                            {
                                ls_data.tindex=j;
                                ls_data.name=that.productGuige[i].specificationValue[j].valueName;
                                ls_data.id=that.productGuige[i].specificationValue[j].specificationValueId;
                                str += that.productGuige[i].specificationValue[j].valueName;
                            }
                        }
                        ls_guige.push(ls_data);
                    }
                    that.yxGuigedata=ls_guige;
                    that.yxGuigestr=str;

                }
            });

            //商品详情
            //商品基本信息
            jsonAjax.post(urlUtil.getApiUrl("product_detail"), { productId: pId}, function (result) {
                if (result.returnCode == 1) {
                    shopId = result.resultData.shopInfoId;
                    that.shopId=shopId;

                    //店铺信息，customerId 参数判断用户是否收藏商品
                    jsonAjax.post(urlUtil.getApiUrl("shop_info"), { shopInfoId: shopId,
                        customerId: that.$store.state.userinfo.userId }, function (result) {
                        if (result.returnCode == 1) {
                            if (!result.resultData.shopCollectionCount) {
                                result.resultData.shopCollectionCount = 0
                            }
                            that.shopInfo= result.resultData;
                        }
                    });
                    //轮播图
                    var lunbo = [];
                    if (result.resultData.productImgs[0]) {
                        lunbo = result.resultData.productImgs;
                    }
                    else {
                        lunbo.push(result.resultData.logoImg);
                    }
                    that.imgUrls_swiper=lunbo;
                    that.baseInfo=result.resultData;
                    that.postPack=result.resultData.storeNumber;
                    that.baseInforList=JSON.parse(result.resultData.productParametersValue);
                    that.productCode = result.resultData.productCode
                    console.log(that.productCode)
                    that.curProductId = result.resultData.productTypeId;
                    that.topTitle=result.resultData.productName;
                    that.buyTrue=true;
                    // isBuy 0 不能购买，1 可以购买
                    if(result.resultData.isBuy==0){
                        that.buyTrue=false;
                        MessageBox.alert('商品已下架或者不存在！').then(action => {
                            //返回上一个路由
                            that.$router.back(-1);
                        });
                    }
                }
                else{
                    that.buyTrue=false;
                    that.postPack= 0;
                    MessageBox.alert('商品已下架或者不存在！').then(action => {
                        //返回上一个路由
                        that.$router.back(-1);
                    });
                }
            });

            //查看是否关注
            jsonAjax.post(urlUtil.getApiUrl("product_checkcollect"), { productId: that.pId,
                customerId: that.$store.state.userinfo.userId }, function (result) {
                if (result.returnCode == 1) {
                    that.isCollect = 0;
                } else if (result.returnCode == 0) {
                    that.isCollect = 1;
                }
            })
            //商品图文详情
            jsonAjax.post(urlUtil.getApiUrl("product_tuwen"), { productId: that.pId }, function (result) {
                console.log(result.resultData.detailContent)
                if (result.returnCode == 1) {
                    that.proDetail=result.resultData.detailContent;//图文详情
                }
            });

            //获取售后服务
            jsonAjax.get(urlUtil.getApiUrl("news_detail") + "/763", {}, function (result) {
                console.log(result)
                if (result.returnCode == 1) {
                    that.productShouhou=result.resultData.content;
                }
            })

            //会员浏览记录user_savehisroty
            // console.log(urlUtil.getApiUrl("product_tuwen"));
            jsonAjax.post(urlUtil.getApiUrl("savehisroty"), {customerId:that.$store.state.userinfo.userId,productId:that.pId }, function (result) {
                if (result.returnCode == 1) {
                    // console.log("savehisroty")
                }

            });

        },
        methods: {
            ...mapGetters(['getUserinfo']),
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            onCopy (e) {
                Toast('复制成功')
            },
            onError (e) {
                Toast("复制失败")
            },
            move(){
                if(this.flags){
                    var touch ;
                    if(event.touches){
                        touch = event.touches[0];
                    }else {
                        touch = event;
                    }
                    this.nx = touch.clientX - this.position.x;
                    this.ny = touch.clientY - this.position.y;
                    this.xPum = this.dx+this.nx;
                    this.yPum = this.dy+this.ny;
                    if (touch.clientX>this.width-20){

                    }else if (touch.clientX<0){

                    }else{
                        Customerservice.style.left = this.xPum+"px";
                    }
                    if (touch.clientY>this.height-30){

                    }else if (touch.clientY<0){

                    }else{
                        Customerservice.style.top = this.yPum +"px";
                    }

                    //阻止页面的滑动默认事件
                    document.addEventListener("touchmove",function(){ // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
                        // event.preventDefault();//jq 阻止冒泡事件
                        event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
                    },false);
                }
            },
//鼠标释放时候的函数

            successLoadImg(){
                this.lodingimg=false
            },
            end(){
                this.flags = false;
            },
            down(){
                this.flags = true;
                var touch;
                if(event.touches){
                    touch = event.touches[0];
                }else {
                    touch = event;
                }
                this.position.x = touch.clientX;
                this.position.y = touch.clientY;
                this.dx = Customerservice.offsetLeft;
                this.dy = Customerservice.offsetTop;
            },
            click_go:function(str){
                this.pzt=str;//顶部跳转
                console.log(this.pzt)
                if(str == 'pro_dt'){
                    this.tabIndex=0
                }
                document.querySelector("#"+this.pzt).scrollIntoView(true);
                // location.replace("#"+this.pzt);
                // location.replace("/#/shopProductDetail/"+this.pId);
            },
            openGuige:function(state){
                console.log(this.productGuige,this.yxGuigestr)

                var that = this
                // yxGuigedata[index].tindex
                // that.curProductId = that.yxGuigedata[0].tindex;
                console.log(state,JSON.stringify(that.yxGuigedata))
                //打开规格div,state==1,加入购物车，state==2立即购买，state==0，关闭选择 state == 3
                that.guigeOprate=state;
            },
            createOrder(){
                this.guigeOprate=2;
            //    根据参数不同 执行不同的操作
                //立即购买
                this.$store.state.placeOrder.data={productId:this.pId,quality:this.pNum,sku:this.baseInfo.sku};

                var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                orderGlobal.data={productId:this.pId,quality:this.pNum,sku:this.baseInfo.sku};
                localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))

                this.$router.push({name:"ShopOrderConfirm",params:{type:1}});

            },
            createOrderNow(){
                this.guigeOprate=2;
                this.isNowBuy = true
                //    根据参数不同 执行不同的操作
                //立即购买
                this.$store.state.placeOrder.data={productId:this.pId,quality:this.pNum,sku:this.baseInfo.sku};

                var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                orderGlobal.data={productId:this.pId,quality:this.pNum,sku:this.baseInfo.sku};
                localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))

                this.$router.push({name:"ShopOrderConfirm",params:{type:1}});

            },
            editGuige:function(index,indexa){
                //选择商品规格
                this.yxGuigedata[index].tindex=indexa;
                this.yxGuigedata[index].name=this.productGuige[index].specificationValue[indexa].valueName;
                this.yxGuigedata[index].id=this.productGuige[index].specificationValue[indexa].specificationValueId;
                var str="";
                for(var i=0;i<this.yxGuigedata.length;i++)
                {
                    if(this.yxGuigedata[i].tindex!=-1)
                    {
                        str+=this.yxGuigedata[i].name;
                    }
                }

                // console.log("yxGuigedata:"+this.yxGuigedata);
                // 如果有 undefined 替换为空
                var str2 = ''
                str2 = str.replace("undefined", '');
                this.yxGuigestr=str2;
                console.log(str2)
                this.refreshInfo();
            },
            judgeAll:function(){
                var flag=0;
                for(var i=0;i<this.yxGuigedata.length;i++)
                {
                    if(this.yxGuigedata[i].tindex==-1)
                    {
                        flag=flag+1;
                    }
                }

                if(flag>0)
                {
                    return false;
                }
                else{
                    return true;
                }

            },
            collectShop:function(){
                //店铺收藏
                var that=this;
                if(that.shopInfo.concerned)
                {
                    //取消收藏
                    jsonAjax.post(urlUtil.getApiUrl("shop_nocollect"), { shopInfoId: that.shopId,
                        customerId: that.$store.state.userinfo.userId }, function (result) {
                        if (result.returnCode == 1) {
                            Toast("取消成功");
                            that.shopInfo.concerned = !that.shopInfo.concerned;
                        }
                    });


                }else{
                    jsonAjax.post(urlUtil.getApiUrl("shop_collect"), { shopInfoId: that.shopId,
                        customerId: that.$store.state.userinfo.userId }, function (result) {
                        if (result.returnCode == 1) {
                            Toast("关注成功");
                            that.shopInfo.concerned = !that.shopInfo.concerned;
                        }
                    });

                }

            },
            tabQiehuan:function(index){
                //tab切换
                this.tabIndex=index;
            },
            collectTap:function(state){
                //商品收藏state=0取消收藏，state=1加入收藏
                var that=this;
                if(state==0)
                {
                    //取消收藏
                    jsonAjax.post(urlUtil.getApiUrl("product_nocollect"), { productId: that.pId ,
                        customerId:that.$store.state.userinfo.userId}, function (result) {
                        if (result.returnCode == 1) {
                            that.isCollect=0;
                        }
                    });

                }else{
                    //加入收藏
                    jsonAjax.post(urlUtil.getApiUrl("product_collect"), { productId: that.pId ,
                        customerId: that.$store.state.userinfo.userId}, function (result) {
                        if (result.returnCode == 1) {
                            that.isCollect=1;
                        }
                    });

                }
            },
            addNum:function(){
                //购买数量加一
                if(this.pNum<this.postPack)
                {
                    this.pNum++;
                }else{
                    Toast("已达上限");
                }
            },
            subNum:function(){
                //购买数量减一
                if(this.pNum>1)
                {
                    this.pNum--;
                }else{
                    Toast("");
                }

            },
            addCart:function(){

                if(this.productGuige!="" && this.yxGuigestr == ''){
                    Toast('请选择规格')
                    return
                }


                if(this.guigeOprate==1)
                {
                    //加入购物车
                    var cart_data = [], str,that=this;
                    cart_data[0] = { num: that.pNum, productId: that.pId, shopInfoId: that.shopId, sku: that.baseInfo.sku };
                    str = { customerId: that.$store.state.userinfo.userId, addToCartProductArray: cart_data };
                    jsonAjax.post(urlUtil.getApiUrl("add_cart"), {  saveShoppingCartBoJSON: JSON.stringify(str) }, function (result) {
                        // console.log(result);
                        if (result.returnCode == 1) {
                            var numa = that.cartNum + that.pNum;
                            that.cartNum= numa;
                            that.guigeOprate=0;
                        }else{
                            // 跳转到登陆页面

                            Toast(result.message);
                            if(result.message == '未找到当前的用户token，请重新登录'){
                                that.$push({
                                    path: '/login'
                                })
                            }
                            // that.$router.push({name:"Login"});
                            // $router.push

                        }
                    });

                }else if(this.guigeOprate==2){
                    //立即购买
                    this.$store.state.placeOrder.data={productId:this.pId,quality:this.pNum,sku:this.baseInfo.sku};

                    var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                    orderGlobal.data={productId:this.pId,quality:this.pNum,sku:this.baseInfo.sku};
                    localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))

                    this.$router.push({name:"ShopOrderConfirm",params:{type:1}});
                }
            },
            refreshInfo:function () {
                console.log(this.goodId)
                if(this.judgeAll())
                {
                    var that=this;
                    //数据更新
                    var strb = "";
                    for (var i = 0; i < that.yxGuigedata.length; i++) {
                        if (i > 0) {
                            strb += ",";
                        }
                        strb += that.yxGuigedata[i].id;
                    }

                    jsonAjax.post(urlUtil.getApiUrl("product_genxin"), {
                        specificationValueIds: strb,
                        goodId: that.goodId
                    }, function (result) {
                        if (result.returnCode == 1) {
                            that.pId=result.resultData.productId;
                            //查看是否关注
                            jsonAjax.post(urlUtil.getApiUrl("product_checkcollect"), { productId: that.pId,
                                customerId: that.$store.state.userinfo.userId}, function (result) {
                                if (result.returnCode == 1) {
                                    that.isCollect = 0;
                                } else if (result.returnCode == 0) {
                                    that.isCollect = 1;
                                }
                            });
                            //商品评价
                            jsonAjax.post(urlUtil.getApiUrl("product_evaluate"), { productId: that.pId, type: 1, page: 1 }, function (result) {
                                if (result.returnCode == 1) {
                                    that.evaluate=result.resultData;
                                }
                            });
                            //商品基本信息
                            jsonAjax.post(urlUtil.getApiUrl("product_detail"), { productId: that.pId}, function (result) {
                                if (result.returnCode == 1) {

                                    //轮播图
                                    var lunbo = [];
                                    if (result.resultData.productImgs[0]) {
                                        lunbo = result.resultData.productImgs;
                                    }
                                    else {
                                        lunbo.push(result.resultData.logoImg);
                                    }
                                    that.imgUrls_swiper=lunbo;
                                    that.baseInfo=result.resultData;
                                    that.buyTrue=true;
                                    that.postPack=result.resultData.storeNumber;
                                    if(that.postPack<that.pNum)
                                    {
                                        that.pNum=that.postPack;
                                    }
                                    that.baseInforList=JSON.parse(result.resultData.productParametersValue);
                                    // isBuy 0 不能购买，1 可以购买
                                    if(result.resultData.isBuy==0){
                                        that.buyTrue=false;
                                        Toast("商品已下架或者不存在")
                                        return
                                        // MessageBox.alert('商品已下架或者不存在！').then(action => {
                                        //     //返回上一个路由
                                        //     that.$router.back(-1);
                                        // });
                                    }
                                }
                                else{
                                    that.buyTrue=false;
                                    that.postPack= 0;
                                    Toast("商品已下架或者不存在")
                                    return
                                    // MessageBox.alert('商品已下架或者不存在！').then(action => {
                                    //     //返回上一个路由
                                    //     that.$router.back(-1);
                                    // });
                                }

                            });
                            //商品图文详情
                            jsonAjax.post(urlUtil.getApiUrl("product_tuwen"), { productId: that.pId }, function (result) {
                                if (result.returnCode == 1) {
                                    that.proDetail=result.resultData.detailContent;//图文详情
                                }
                            });
                        }
                        else{
                            that.buyTrue=false;
                            that.postPack= 0;
                        }
                    });
                }
            }
        },

    }
</script>

<style scoped>

    page {
        /*background: #f2f2f2;*/
        font-size: 0.28rem;
    }
    .inblock {
        display: inline-block;
        vertical-align: middle;
    }
    .desc {
        font-weight: 600;
        padding: 0.1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        width: 100%;
        color: #fff;
        position: absolute;
        bottom: 0;
    }
    .ptop{
        position: fixed; left: 0; right: 0;
        top: 0.88rem; height: 0.8rem;
        background: #fff; border-bottom: 1px solid #fefefe;
        z-index: 10; line-height: 1
    }
    .ptop .dw img{ width: 0.3rem; height: 0.3rem;}

    .top_h{ height: 1.68rem;}

    /*关注  */
    .shopInfo{
        width:750px;
        margin: 0 auto;
    }
    .pro_dt{

    }

    .icon_collect {
        width: 1rem;
    }

    .icon_collect .img {
        width: 1rem;
        height: 1rem;
    }

    /*右侧按钮样式  */

    .icon_xz {
        width: 0.5rem;
    }

    .icon_xz .img {
        width: 0.5rem;
        height: 0.16rem;
    }

    .icon_xz .rimg {
        width: 0.36rem;
        height: 0.36rem;
    }

    /*店铺  */

    .icon_shop {
        width: 0.5rem;
        height: 0.5rem;
    }

    .shop_btn {
        padding: 0.06rem 0.2rem;
        border-radius: 0.4rem;
        display: inline-block;
        border: 1px solid #dcdcdc;
    }

    .title{
        position: relative;
        top:-0.14rem;
    }

    /*详情  */

    .tab_title {
        border-bottom: 1px solid #f2f2f2;
    }

    .tab_title .tab {
        border-bottom: 0.08rem solid transparent;
        padding: 0.2rem 0.1rem 0.16rem 0.1rem;
    }

    .tab_title .tab.cur {
        border-bottom: 0.08rem solid #E4811D;
    }

    .detail_cnt {
        padding-bottom: 0rem;
    }
 .loding{
     position: absolute;
     left: 50%;
     top: 45%;
     width: 1rem;
     height: 1rem;
     margin-left: -.5rem;
     border-radius: .05rem;
     background: rgba(0,0,0,0.5);
     text-align: center;
     line-height: 1rem;
     z-index: 9;
 }
    .loding img{
        width: .5rem;
        display: inline-block;
    }
    /*底部操作  */

    .oprate_bottom {
        height: 0.9rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        border-top: 1px solid #f2f2f2;
    }
    .bot_h{ height: 0.9rem}

    .oprate_bottom .table {
        height: 100%;
    }

    .oprate_btn1 {
        background: #E4811D;
        color: #fff;
    }

    .oprate_btn1.gray {
        background: #dcdcdc;
    }

    .oprate_btn1.blue {
        background: #2285c9;
    }
    .oprate_img {
        width: 0.4rem;
        height: 0.4rem;
    }

    .mar_b2 {
        margin-bottom: 0.04rem;
    }

    .box_shadow {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 10;
        background: rgba(0, 0, 0, 0.6);
    }

    .box_guige {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 12;
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate(0, 110%);
        transition: transform 300ms ease-in-out;
    }

    .box_guige.cur {
        transform: translate(0, 0);
    }

    .box_guige .scrolla {
        width: 100%;
        height: 4.2rem;
        overflow-y: auto;
    }

    .box_guige .img_box {
        margin-top: -0.4rem;
        width:1.6rem;
        height: 1.6rem;
        background: #fff;
        padding: 0.06rem;
        border-radius: 0.08rem;
    }

    .box_guige .img_box .img {
        width: 100%;
        height: 100%;
        border-radius: 0.08rem;
    }

    .box_guige .font_div {
        width: 4.3rem;
    }

    .box_guige .close_btn {
        position: absolute;
        right: 1px;
        top: 1px;
        z-index: 2;
    }

    .box_guige .close_btn img {
        width: 0.48rem;
        height: 0.48rem;
    }

    .p_guige {
        padding: 0.1rem 0.2rem;
        margin: 0.1rem;
        border-radius: 0.08rem;
        background: #dcdcdc;
        color: #666;
    }

    .p_guige.cur {
        background: #E4811D;
        color: #fff;
    }

    .p_num .add, .p_num .sub {
        width: 0.4rem;
        height: 0.4rem;
        font-size: 0;
    }

    .p_num .add .img, .p_num .sub .img {
        width: 0.4rem;
        height: 0.4rem;
    }

    .p_num .input {
        padding: 0.1rem;
        text-align: center;
        width: 0.84rem;
    }

    .x_num {
        position: relative;
        /* width: 6em; */
    }

    .x_num .s_num {
        padding: 2px 5px;
        line-height: 1;
        position: absolute;
        left: 50%;
        margin-left: 5px;
        top: 3px;
        border-radius: 8px;
        background: #E4811D;
        color: #fff;
        font-size: 8px;
    }
    .wrem8{ width: 2.5rem}
    /*评价  */

    .eva_img {
        width:0.8rem;
    }

    .eva_img .img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        border: 1px solid #dcdcdc;
    }

    .eva_star {
        font-size: 0;
        width: 0.4rem;
        height: 0.4rem;
    }

    .eva_star .img {
        width: 100%;
        height: 100%;
    }

    .eva_title {
        width: 3rem;
    }

    .up_load{padding: 0.2rem; border-top: 1px solid #fefefe; border-bottom: 1px solid #fefefe; text-align: center; background: #fff;}
    .up_load_txt{ padding: 0.2rem; text-align: center; background: #fff;}
    .both{height: 2.6rem;}
    .color_1{
        background-color: rgb(255, 183, 6) !important;
        border-color: rgb(255, 183, 6);
    }
    .nyBtn{ height: 0.8rem; line-height: 0.8rem}

    .productEvaluate_img{
        width: 1.2rem;
        height: 1.2rem;
        border: 1px solid #dcdcdc;
        display: inline-block;
        vertical-align: middle;
        margin-right:0.1rem;
        margin-top:0.1rem;
    }
    .em-widget-header .drag-bar {
        position: absolute;
        left: 40px;
        top: 0;
        right: 80px;
        width: auto;
        height: 100%;
    }
    .em-widget-header .btn-min {
        position: relative;
        float: right;
        margin: 10px;
        width: 0.4rem;
        height:0.4rem;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px hsla(0,0%,100%,.3);
    }
</style>
