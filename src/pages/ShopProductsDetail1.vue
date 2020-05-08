<template>
    <div id="productSDetail" class="content_box">

        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">{{topTitle}}</p>
        </div>
        <!--顶部栏  -->
        <div class='ptop f28'>
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
                <mt-swipe :auto="4000" class="mt-swipe">
                    <mt-swipe-item v-for="(item,index) in imgUrls_swiper" :key="index">
                        <img :onerror="errorUserPhoto" :src="sourceUrlShop+item" class="img"/>
                        <span class="desc"></span>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>

        <!--标题  -->
        <div v-if="pType==3">
            <div class='all bgfff pad_20 table'>
                <div class='td f28 all'>{{jfBase.productName}}</div>
            </div>
            <div class='pad_l20 bgfff pad_r20 pad_b20 table all mar_b20'>
                <div class='td f28 czt'><span class='inblock mar_r20 pl10'>{{jfBase.expenseCoin}}积分</span> <span class='inblock txt_xx f28 c666'>市场价￥{{jfBase.originalPrice}}</span></div>
                <div class='td col4 f28 c666 txt_right'><span class='inblock mar_l20'>兑换数量：{{jfBase.allowExchangeNum}}</span></div>
            </div>
        </div>
        <div v-if="pType==4">
            <div class='bgfff pad_20 table all f28 border_b'>
                <div class='td'>已售{{qgBase.buyNum}}</div>
                <div class='td txt_right c666 f0' v-if="qzZt==0">
                    <span class='inblock f28'>距结束</span>
                    <span class='inblock f28 time_tag'>{{daojishi.shi}}</span>
                    <span class='inblock f28'>:</span>
                    <span class='inblock f28 time_tag'>{{daojishi.fen}}</span>
                    <span class='inblock f28'>:</span>
                    <span class='inblock f28 time_tag'>{{daojishi.miao}}</span>
                </div>
                <div class='td txt_right c666' v-if="qzZt==2">
                    <span class='inblock'>已结束</span>
                </div>
            </div>
            <div class='all bgfff pad_20 table'>
                <div class='td f28 all'>
                    <p style="display: flex;justify-content: space-between"><span class='mar_b20'>{{qgBase.productName}}</span><span class="copy-btn" v-clipboard:copy="qgBase.productName" v-clipboard:success="onCopy" v-clipboard:error="onError" style="color:#e4811d;">复制去咨询</span></p>
                    <div class='f28 czt'>{{qgBase.panicTitle}}</div>
                </div>
            </div>
            <div class='pad_l20 bgfff pad_r20 pad_b20 table all mar_b20'>
                <div class='td f28 czt'><span class='inblock mar_r20 pr10'>￥{{qgBase.panicPrice}}</span> | <span class="pl10">{{qgBase.panicCredits}} 积分</span>
                    <div class="mar_t10">
                        <span class='inblock f22 c666 pr10' style="text-decoration: line-through">市场价￥{{qgBase.originalPrice}}</span>
                        <span style="color: #666" class="f22"> | </span><span class="inblock pl10 c666 f22" style="text-decoration: line-through">{{qgBase.originalCredits}} 积分</span></div></div>
                <!--<div class='td col4 f28 c666 txt_right'><span class='inblock mar_l20'>库存：{{qgBase.panicNum}}</span></div>-->
            </div>
        </div>
        <div v-if="pType==2">
            <div class='bgfff pad_20 table all f28 border_b'>
                <div class='td'>已有{{tgBase.bought}}人参团</div>
                <div class='td txt_right c666'>
                    <div>参团人数：{{tgBase.openGroupCount}}</div>
                </div>
            </div>
            <div class='all bgfff pad_20 table'>
                <div class='td f28 all'>
                    <p style="display: flex;justify-content: space-between"><span class='mar_b20'>{{tgBase.title}}</span><span class="copy-btn" v-clipboard:copy="tgBase.title" v-clipboard:success="onCopy" v-clipboard:error="onError" style="color:#e4811d;">复制去咨询</span></p>
                    <div class='f28 czt'>{{tgBase.introduction}}</div>
                </div>
            </div>
            <div class='pad_l20 bgfff pad_r20 pad_b20 table all mar_b20'>
                <div class='td f28 czt'><span class='inblock mar_r20'><span class="pr10">￥{{tgBase.price}}</span> | <span class="pl10">{{tgBase.credits}}</span> 积分</span>
                    <div class="mt15">
                        <span class='inblock f22 c666 pr10' style="text-decoration: line-through">原价￥{{baseInfo.salesPrice}}</span><span class="c666 f22"> | </span>
                        <span class="pl10 c666 inblock f22" style="text-decoration: line-through;">{{baseInfo.salesCredits}} 积分</span></div>
                </div>
                <!--<div class='td col4 f28 c666 txt_right'><span class='inblock mar_l20'>库存：{{tgBase.tuanPeriod}}</span></div>-->
            </div>
        </div>
        <!--宝贝评价  -->
        <router-link :to="{name:'ShopProductEvaluate',params:{pId:pId}}" class='bgfff all table pad_20 f28 border_b' id="proevalua" style="">
            <div class='td'>商品评价（{{evaluate.sumCount}}）</div>
            <div class='icon_xz f0 td'>
                <img class='rimg ver_mid' src='../static/images/shop/right.png'>
            </div>
        </router-link>
        <div class='pad_l20 pad_r20 mar_b20 bgfff'>
            <div class='border_t pad_t10 pad_b20 all' v-for="(item,index) in evaluate.evaluationList" v-if="index<5">
                <div class='table all mar_b20'>
                    <!--用户头像隐藏，因用户不传头像时，展示效果不好-->
                    <!--<div class='f0 td eva_img'>
                                  <img :src='uploadImgRoot+"/"+item.cutomerImg' class='img'>
                                </div>-->
                    <div class='eva_title td f28 txt_one f28' style="width: 2rem;">{{item.isAnonymous==1 ? '******' : item.appraiserName}}</div>
                    <div class='td txt_right f0' >
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
                <div class='f28 c666 mar_b20'>{{item.content}}</div>
                <div class='f28 c666'>{{item.showTime}}</div>
            </div>
        </div>
        <!--店铺  -->
        <!--<div class='bgfff pad_5 mar_b20 all f28'>-->
            <!--<div class='mar_b20'>-->
                <!--<img class='icon_shop ver_mid mar_r5' src='../static/images/shop/shop.png'>-->
                <!--<span class='inblock'>{{shopInfo.shopName}}</span>-->
            <!--</div>-->
            <!--<div class='table all txt_center'>-->
                <!--<div class='td'>-->
                    <!--<div>{{shopInfo.shopCollectionCount}}</div>-->
                    <!--<div class='c666 f28 pad_t10'>关注人数</div>-->
                <!--</div>-->
                <!--<div class='td'>-->
                    <!--<div>{{shopInfo.salesProCount}}</div>-->
                    <!--<div class='c666 f28 pad_t10'>全部商品</div>-->
                <!--</div>-->
                <!--<div class='td'>-->
                    <!--<div>100</div>-->
                    <!--<div class='c666 f28 pad_t10'>信誉值</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class='pad_20 all table' style='margin-top:5px; padding-bottom:5px;'>-->
                <!--<div class='td txt_center'>-->
                    <!--<div v-on:click='collectShop' class='shop_btn line1 c666 f0'>-->
                        <!--<div v-if="shopInfo.concerned"><span class='inblock f0'><img class='icon_shop' src='../static/images/shop/xc_03.png' style="width: 20px;height: 20px;"></span><span class='pad_l5 f28 inblock'>关注店铺</span></div>-->
                        <!--<div v-else><span class='inblock f0'><img class='icon_shop' src='../static/images/shop/xca_03.png' style="width: 20px;height: 20px;"></span><span class='pad_l5 f28 inblock'>关注店铺</span></div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class='td txt_center'>-->
                    <!--<router-link :to="{name:'shopIndex',params:{shopId:shopId}}" class='shop_btn line1 c666'>-->
                        <!--<div class='inblock f0'> <img class='icon_shop' src='../static/images/shop/shopcollect.png'></div>-->
                        <!--<span class='pad_l5 inblock'>进店逛逛</span>-->
                    <!--</router-link>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class='up_load'>上滑查看商品详情</div>-->
        <!--详情  -->

        <div id='pro_dt' class='tab_title bgfff clear txt_center' v-if="xq_zt==0" style="height: 0.8rem;">
            <div class='L col6' v-on:click='tabQiehuan(0)'>
                <span class='tab inblock  f28' :class='tabIndex==0?"cur":""'>产品详情</span>
            </div>
            <div class='L col6' v-on:click='tabQiehuan(1)'>
                <span class='tab inblock  f28' :class='tabIndex==1?"cur":""'>产品参数</span>
            </div>
            <!--<div class='L col4' v-on:click='tabQiehuan(2)'>-->
                <!--<span class='tab inblock  f28' :class='tabIndex==2?"cur":""'>售后服务</span>-->
            <!--</div>-->
        </div>
        <div class='bgfff pad_t10 pad_b20 detail_cnt' style='min-height:200px;' v-if="xq_zt==0">
            <div v-if="tabIndex==0">
                <!--详情  -->
                <div class='pad_20 txt_center' v-if="proDetail==''">暂无内容</div>
                <div v-html="proDetail"></div>
            </div>
            <div v-if="tabIndex==1" class='pad_l20 pad_r20'>
                <!--参数  -->
                <div v-for="(item,index) in baseInforList">
                    <div class='f15 pad_b20 pad_t10 f28'>{{item.name}}</div>
                    <div class='table pad_20 border_b all' v-for="(itema,indexa) in item.paramGroupInfo">
                        <div class='td f28'>{{itema.name}}</div>
                        <div class='td txt_right f28'>{{itema.value[0]}}</div>
                    </div>
                </div>
            </div>
            <div v-if="tabIndex==2" class='pad_l20 pad_r20'>
                <!--售后服务  -->
                <div v-html="productShouhou"></div>
            </div>
        </div>
        <!--</scroll-view>-->
        <!--底部操作  -->
        <div class='oprate_bottom all bgfff f20 c666 txt_center'>
            <div class='table'>
                <!-- <view class='td f0'>空着</view> -->
                <div class='td oprate_btn1 f28' v-on:click='openGuige'>{{btn_xztxt}}</div>
            </div>
        </div>

        <!--规格  -->
        <div class='box_shadow' :class='guigeOprate==0?"Hide":""' v-on:click='openGuige(0)'></div>
        <div class='box_guige' :class='guigeOprate!=0?"cur":""'>
            <div class='close_btn f0' v-on:click='openGuige(0)'>
                <img src='../static/images/shop/delete.png'>
            </div>
            <div class='pad_l20 pad_r20 all clear pad_b20 border_b' style="height: 1.5rem">
                <div class='L img_box'>
                    <img class='img' :onerror="errorUserPhoto" :src="sourceUrlShop+baseInfo.logoImg">
                </div>
                <div class='L font_div pad_l20 pad_t20' >
                    <div class='txt_one mar_b20 f28' style="height: 0.5rem">{{baseInfo.productName}}</div>
                    <div class='clear'>
                        <div class='L czt f28' v-if="pType==3" style="height: 0.5rem;width: 0.5rem;">{{jfBase.expenseCoin}}积分</div>
                        <div class='L czt f28' v-if="pType==4" style="height: 0.5rem;width: 0.5rem;">￥{{qgBase.panicPrice}}</div>
                        <div class='L czt f28' v-if="pType==2" style="height: 0.5rem;width: 3rem;"><span class="pr10">￥{{tgBase.price}}</span> | <span class="pl10">{{tgBase.credits}}</span> 积分</div>
                        <!--<div class='R f28 c999'>库存：{{postPack}}</div>-->
                    </div>
                </div>
            </div>
            <!--规格滚动区  -->
            <div class='scrolla'>
                <!--<div v-for="(item,index) in productGuige">-->
                <!--<div class='pad_20 border_b'>{{item.keyName}}</div>-->
                <!--<div class='clear pad_5 border_b'>-->
                <!--<div v-for="(itema,indexa) in item.specificationValue" class='p_guige L' :class='yxGuigedata[index].index==indexa?"cur":""' v-on:click='editGuige(index,indexa)'>{{itema.valueName}}</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--数量  -->
                <div class='table all pad_20'>
                    <div class="td wrem3">数量</div>
                    <div class="td">
                        <div class='p_num txt_right f0'>
                            <div class='inblock sub' v-on:click='subNum'>
                                <img src='../static/images/shop/jian.png' class='img'>
                            </div>
                            <div class='inblock'>
                                <input type='number' disabled='true' v-model='pNum' class='input f28' style="border:none;"></input>
                            </div>
                            <div class='inblock add' v-on:click='addNum'>
                                <img src='../static/images/shop/add.png' class='img'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--&lt;!&ndash;按钮  &ndash;&gt;-->
            <div class='oprate_btn1 all txt_center f30 nyBtn' v-if="buyTrue&postPack>0" v-on:click='addCart'>确 定</div>
            <div class='oprate_btn1 gray all txt_center f30 nyBtn' v-if="!buyTrue||postPack<1">库存不足</div>
        </div>

        <!--客服-->
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
    import { Button,Toast,MessageBox } from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.component(Toast.name, Toast);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/shop/mrbj.png';
    import VueClipboard from 'vue-clipboard2'
    Vue.use(VueClipboard)
    export default {
        components:{},
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                topTitle:'商品详情',
                imgUrls_swiper: ["",""],
                pzt:'prod',//筛选条件
                pId:this.$route.params.pId,//商品id
                hdId:this.$route.params.pId,//活动id
                jfBase:{productName:"",expenseCoin:"200",originalPrice:43.06,allowExchangeNum:10},
                qgBase:{buyNum:5,productName:"商品名称",panicTitle:"活动名称",panicPrice:10.06,originalPrice:23.06,panicNum:10},
                qzZt:0,
                daojishi:{shi:'00',fen:'00',miao:'00'},
                tgBase:{bought:10,openGroupCount:20,title:"商品名称",introduction:"商品介绍",price:23.06,salesPrice:40.06,tuanPeriod:5},
                evaluate:{sumCount:0,evaluationList:[
                        {cutomerImg:"",appraiserName:"评价人",level:0,content:"评价内容",showTime:"2018-06-12"}
                    ]},//商品评价列表
                shopInfo:{shopName:"商铺名称",shopCollectionCount:0,salesProCount:15},//商铺情况
                shopId:'',//商铺id
                baseInfo:{productName:'商品名称',salesPrice:23.06,totalSales:15,logoImg:""},//商品基本详情
                postPack:0,//商品库存
                xq_zt:0,//是否显示详情tab
                tabIndex:0,//商品tab
                proDetail:"暂无商品详情",
                baseInforList:[
                    {name:"属性名",paramGroupInfo:[{name:"小属性",value:["参数详情"]}]}
                ],//商品参数
                productShouhou:"售后内容",
                guigeOprate:0,
                pType: this.$route.params.type,//2团购，3积分，4秒杀
                btn_txt: ["", "立即购买", "立即参团", "立即兑换", "立即抢购"],
                btn_xztxt:'立即购买',
                pNum:1,//购买数量
                sku:'',
                buyTrue:true,//true可购买，false不可购买
                uploadImgRoot: urlUtil.uploadImgRoot,
                tabs: [
                    {iconImg: require('../static/images/shop/icon_syone.png'), id: 'name', title: '首页', name: 'home', zt: true},
                    {iconImg: require('../static/images/shop/icon_flone.png'), id: 'category', title: '分类', name: 'category', zt: true},
                    {iconImg: require('../static/images/shop/icon_tgone.png'), id: 'my', title: '团购', name: 'my', zt: true},
                    {iconImg: require('../static/images/shop/icon_gwcone.png'), id: 'cart', title: '购物车', name: 'cart', zt: true},
                    {
                        iconImg: require('../static/images/shop/icon_wdone.png'),
                        id: 'tuanProduct',
                        title: '用户中心',
                        name: 'tuanProducttuanProduct',
                        zt: true
                    }

                ],
                menushow: false,
                flags: false,
                position: { x: 0, y: 0 },
                nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
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
                    password: '',
                    token:this.token,

                }
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            this.$store.state.placeOrder = {data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false};
            localStorage.setItem("placeOrder",JSON.stringify({data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false}))
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that=this;
            that.btn_xztxt=that.btn_txt[that.pType];

            var posturl = "", param = null;
            //加载商品详情
            if (that.pType == 3) {
                //积分
                posturl = urlUtil.getApiUrl("cion_prodetail");
                param = { id: that.hdId }
            }
            else if (that.pType == 2) {
                //团购
                posturl = urlUtil.getApiUrl("tuan_prodetail");
                param = { tuanId: that.hdId }

            }
            else if (that.pType == 4) {
                //抢购
                posturl = urlUtil.getApiUrl("panic_prodetail");
                param = { panicId: that.hdId }
            }

            //获取活动商品信息
            jsonAjax.get(posturl, param, function (result) {
                if (result.returnCode == 1) {
                    if (that.pType == 3) {
                        that.jfBase=result.resultData;
                        that.pId=result.resultData.productId;
                        that.postPack=result.resultData.allowExchangeNum;
                        that.sku=result.resultData.sku;
                        that.topTitle=result.resultData.productName
                    }
                    else if (that.pType == 4) {
                        that.qgBase=result.resultData;
                        that.pId=result.resultData.productId;
                        // that.postPack=result.resultData.panicNum;
                        that.postPack = result.resultData.storeNumber;
                        that.sku=result.resultData.sku;
                        that.topTitle=result.resultData.productName;

                        // 时间固定
                        var str = new Date();
                        var hour = str.getHours();
                        var minute = str.getMinutes();
                        var second = str.getSeconds();
                        // 测试开发环境使用,生产环境去掉,时间放开后，把ntime去掉
                        // var ntime = "2018/04/10 " + hour + ":" + minute + ":" + second;

                        var nowtime = parseInt(Date.parse(new Date()) / 1000);

                        var daojishi = {shi: "00", fen: "00", miao: "00", ztime: 0};
                        var zta = 0;
                        var starttime = parseInt(result.resultData.startTime / 1000);

                        if (nowtime > ((result.resultData.activityTime) * 3600 + starttime)) {
                            zta = 2;
                            daojishi.ztime = 0;
                        }
                        else {
                            zta = 0;
                            daojishi.ztime = parseInt((result.resultData.activityTime) * 3600 + starttime - nowtime);
                        }
                        daojishi.day = Math.floor(daojishi.ztime / 60 / 60 / 24);
                        daojishi.shi = Math.floor(daojishi.ztime / 60 / 60) % 24;
                        daojishi.fen = Math.floor(daojishi.ztime / 60) % 60;
                        daojishi.miao = daojishi.ztime % 60;
                        if (daojishi.day < 10) {
                            daojishi.day = "0" + daojishi.day;
                        }
                        if (daojishi.shi < 10) {
                            daojishi.shi = "0" + daojishi.shi;
                        }
                        if (daojishi.fen < 10) {
                            daojishi.fen = "0" + daojishi.fen;
                        }
                        if (daojishi.miao < 10) {
                            daojishi.miao = "0" + daojishi.miao;
                        }
                        that.daojishi=daojishi;
                        that.qzZt=zta;


                        //时间倒计时
                        var timer = setInterval(function () {

                            var daojishi = {shi: "00", fen: "00", miao: "00", ztime: 0};
                            var zta = 0;
                            var ztime = that.daojishi.ztime;

                            if (zta == 0) {
                                if (ztime > 0) {
                                    ztime--;
                                    daojishi.ztime = ztime;
                                    daojishi.day = Math.floor(daojishi.ztime / 60 / 60 / 24);
                                    daojishi.shi = Math.floor(daojishi.ztime / 60 / 60) % 24;
                                    daojishi.fen = Math.floor(daojishi.ztime / 60) % 60;
                                    daojishi.miao = daojishi.ztime % 60;
                                    if (daojishi.day < 10) {
                                        daojishi.day = "0" + daojishi.day;
                                    }
                                    if (daojishi.shi < 10) {
                                        daojishi.shi = "0" + daojishi.shi;
                                    }
                                    if (daojishi.fen < 10) {
                                        daojishi.fen = "0" + daojishi.fen;
                                    }
                                    if (daojishi.miao < 10) {
                                        daojishi.miao = "0" + daojishi.miao;
                                    }
                                }
                                else {
                                    zta = 2;
                                }
                            }
                            else {
                                clearInterval(timer);
                            }
                            that.daojishi=daojishi;
                            that.qzZt=zta;
                        }, 1000);

                    }
                    else if (that.pType == 2) {
                        that.tgBase=result.resultData;
                        that.pId= result.resultData.productId;
                        that.postPack= result.resultData.tuanPeriod;
                        // that.postPack= result.resultData.storeNumber;
                        that.sku=result.resultData.sku;
                        that.topTitle= result.resultData.title;
                        // that.postPack = result.resultData.storeNumber;
                    }

                    //商品基本信息
                    jsonAjax.post(urlUtil.getApiUrl("product_detail"), { productId: that.pId}, function (result) {
                        if (result.returnCode == 1) {
                            var shopId = result.resultData.shopInfoId;
                            that.shopId=shopId;

                            //店铺信息
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
                            that.baseInforList=JSON.parse(result.resultData.productParametersValue);
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
                    //商品图文详情
                    jsonAjax.post(urlUtil.getApiUrl("product_tuwen"), { productId: that.pId }, function (result) {
                        if (result.returnCode == 1) {
                            that.proDetail=result.resultData.detailContent;//图文详情
                        }

                    });
                    //商品评价
                    jsonAjax.post(urlUtil.getApiUrl("product_evaluate"), { productId: that.pId, type: 1, page: 1 }, function (result) {
                        if (result.returnCode == 1) {
                            that.evaluate=result.resultData;
                        }
                    });

                } else {
                    MessageBox.alert('商品已下架或者不存在！').then(action => {
                        //返回上一个路由
                        that.$router.back(-1);
                    });
                }


            });

            //获取售后服务
            jsonAjax.get(urlUtil.getApiUrl("news_detail") + "/763", {}, function (result) {
                if (result.returnCode == 1) {
                    that.productShouhou=result.resultData.content;
                }
            })


        },
        methods: {
            ...mapGetters(['getUserinfo']),
            onCopy (e) {
                Toast('复制成功')
            },
            onError (e) {
                Toast("复制失败")
            },
            //分享
            share: function () {
                alert('分享')
            },
            changeItem: function (id, name, zt) {
                if (id != '') {
//            this.$store.commit('isShowNavBar', !this.$store.state.isShowNavBar);
                    this.$store.commit('selected_page', id)
                }
                this.$router.push({name: name})
            },
            showMenu: function () {
                this.menushow = !this.menushow
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
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            click_go:function(str){
                this.pzt=str;//顶部跳转
                location.replace("#"+this.pzt);
            },
            openGuige:function(state){

                if(this.pType==4)
                {
                    //秒杀
                    this.addCart();
                }
                else if(this.pType==3)
                {
                    //积分
                    this.addCart();
                }
                else{
                    //打开规格div,state==1,加入购物车，state==2立即购买，state==0，关闭选择--团购
                    this.guigeOprate=state;
                }


            },
            collectShop:function(){
                //店铺收藏
                var that=this;
                if(that.shopInfo.concerned)
                {
                    //取消收藏
                    jsonAjax.post(urlUtil.getApiUrl("shop_nocollect"), { shopInfoId: that.shopId,
                        customerId: that.$store.state.userinfo.userId}, function (result) {
                        if (result.returnCode == 1) {
                            Toast("取消成功");
                            that.shopInfo.concerned = !that.shopInfo.concerned;
                        }
                    });


                }else {
                    jsonAjax.post(urlUtil.getApiUrl("shop_collect"), {
                        shopInfoId: that.shopId,
                        customerId: that.$store.state.userinfo.userId
                    }, function (result) {
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
                //立即兑换
                var that = this;
                var score = 0;
                if (that.pType == 3) {
                    score = parseInt(that.jfBase.expenseCoin)
                }
                this.$store.state.placeOrder.data={productId:this.pId,hdId:that.hdId,quality:this.pNum,sku:this.sku, scoreUseCount: score};

                var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                orderGlobal.data={productId:this.pId,hdId:that.hdId,quality:this.pNum,sku:this.sku, scoreUseCount: score};
                localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))

                this.$router.push({name:"ShopOrderConfirm",params:{type:this.pType}});

            }

        }

    }
</script>

<style scoped>


    .desc {
        font-weight: 600;
        padding: 5px;
        height: 20px;
        line-height: 20px;
        width: 100%;
        color: #fff;
        position: absolute;
        bottom: 0;
    }
    .ptop{ position: fixed; left: 0; right: 0; top: 0.88rem; height: 0.8rem; background: #fff; border-bottom: 1px solid #fefefe; z-index: 10; line-height: 1}
    .ptop .dw img{ width: 15px; height: 15px;}

    .top_h{ height: 1.68rem;}

    /*关注  */
    .shopInfo{
        width:750px;
        margin: 0 auto;
    }

    .icon_collect {
        width: 50px;
    }

    .icon_collect .img {
        width: 50px;
        height: 50px;
    }

    /*右侧按钮样式  */

    .icon_xz {
        width: 25px;
    }

    .icon_xz .img {
        width: 25px;
        height: 8px;
    }

    .icon_xz .rimg {
        width: 18px;
        height: 18px;
    }

    /*店铺  */

    .icon_shop {
        height: 25px;
        width: 25px;

    }

    .shop_btn {
        padding: 3px 10px;
        border-radius: 20px;
        display: inline-block;
        border: 1px solid #dcdcdc;
    }

    .title{
        position: relative;
        top:-7px;
    }

    /*详情  */

    .tab_title {
        border-bottom: 1px solid #f2f2f2;
    }

    .tab_title .tab {
        border-bottom: 4px solid transparent;
        padding: 10px 5px 8px 5px;
    }

    .tab_title .tab.cur {
        border-bottom: 4px solid #E4811D;
    }

    .detail_cnt {
        padding-bottom: 140px;
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
        background: #e4811d;
        color: #fff;
    }

    .oprate_btn1.gray {
        background: #dcdcdc;
    }

    .oprate_btn1.blue {
        background: #2285c9;
    }
    .oprate_img {
        width: 20px;
        height: 20px;
    }

    .mar_b2 {
        margin-bottom: 2px;
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
        width: 5rem;
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
        padding: 0.1rem 0.1rem;
        text-align: center;
        width: 1rem;
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
    .wrem8{ width: 7em}
    /*评价  */

    .eva_img {
        width: 0.8rem;
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
        width: 0.2rem;
    }

    .up_load{padding: 10px; border-top: 1px solid #fefefe; border-bottom: 1px solid #fefefe; text-align: center; background: #fff;}
    .up_load_txt{ padding: 10px; text-align: center; background: #fff;}
    .both{height: 130px;}
    .color_1{
        background-color: #ff9600 !important;
        border-color: #ff9600;
    }
    .nyBtn{ height: 0.8rem; line-height: 0.8rem}


    .time_tag {
        margin-left: 5px;
        margin-right: 5px;
        padding: 2px 5px;
        background: #232325;
        color: #fff;
        border-radius: 4px;
    }

    .top_menuIcon .iconImg {
        height: 20px;
    }

    .inblocktwo {
        color: white;
    }
    audio, canvas, video, img{
        display: inline-block;
    }
</style>
