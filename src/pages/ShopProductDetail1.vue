<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">{{topTitle}}</p>
        </div>
        <div class="wrapper">

            <!--顶部栏  -->
            <div class='ptop f24'>
                <div class='table h100 txt_center'>
                    <div class='td' v-on:click='click_go("prod")'><div class='inblock dw f0' v-if="pzt=='prod'"><img src='../static/images/icon/dw.png'></div><span class="inblock mar_l5">商品</span></div>
                    <div class='td' v-on:click='click_go("proevalua")'><div class='inblock dw f0' v-if="pzt=='proevalua'"><img src='../static/images/icon/dw.png'></div><span class="inblock mar_l5">评价</span></div>
                    <div class='td' v-on:click='click_go("pro_dt")'><div class='inblock dw f0' v-if="pzt=='pro_dt'"><img src='../static/images/icon/dw.png'></div><span class="inblock mar_l5">详情</span></div>
                </div>
            </div>
            <div class="top_h" id="prod"></div>
            <!--轮播图-->
            <div class="carousel">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in imgUrls_swiper" :key="item.id">
                            <div
                                    class="carousel_item"
                                    :style="{
                                            'backgroundImage': `url(${sourceUrlShop + item.imageUrl})`,
                                            'backgroundRepeat': 'no-repeat',
                                            'backgroundSize': 'cover',
                                            'backgroundPosition': 'center'
                                        }"
                                    :data-url="JSON.stringify(item.url)"
                                    @click="toDetail"
                            >
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <!--标题  -->
            <div class='all bgfff pad_10 table'>
                <div class='td f28 all pad_r10'>{{baseInfo.productName}}</div>
            </div>
            <div class='pad_l10 bgfff pad_r10 pad_b10 table all mar_b5'>
                <div class='td f28 czt'>￥{{baseInfo.salesPrice}}</div>
                <div class='td f24 c666 txt_right'>
                    <span class='inblock'>库存：{{postPack}}</span>
                    <span class='inblock mar_l10'>销量：{{baseInfo.totalSales}}</span>
                </div>
            </div>

            <!--已选规格  -->
            <div class='pad_10 bgfff f28 all table mar_b5' v-on:click='openGuige(1)' id="proevalua">
                <div class='td'>已选：
                    <span class='czt'>{{yxGuigestr}}</span>
                </div>
                <div class='td icon_xz f0 txt_right'>
                    <img src='../static/images/icon/xz_dot.png' class='img'>
                </div>
            </div>

            <!--宝贝评价  -->
            <router-link :to="{name:'productEvaluate',params:{pId:pId}}" class='bgfff all table pad_10 f28'>
                <div class='td'>商品评价（{{evaluate.sumCount}}）</div>
                <div class='icon_xz f0 td'>
                    <img class='rimg ver_mid' src='../static/images/icon/right.png'>
                </div>
            </router-link>
            <div class='pad_l10 pad_r10 mar_b5 bgfff'>
                <div class='border_t pad_t10 pad_b10 all' v-for="(item,index) in evaluate.evaluationList" v-if="index<5">
                    <div class='table all mar_b5'>
                        <!--用户头像隐藏，因用户不传头像时，展示效果不好-->
                        <!--<div class='f0 td eva_img'>
                          <img class='img' :onerror="errorUserPhoto" :src='uploadImgRoot+"/"+item.cutomerImg'>
                        </div>-->
                        <div class='eva_title td f12 txt_one'>{{item.appraiserName}}</div>
                        <div class='td txt_right f0'>
                            <div class='inblock eva_star mar_l5' v-if="item.level>-2">
                                <img class='img' src='../static/images/icon/star_en.png'>
                            </div>
                            <div class='inblock eva_star mar_l5' v-if="item.level>-1">
                                <img class='img' src='../static/images/icon/star_en.png'>
                            </div>
                            <div class='inblock eva_star mar_l5' v-if="item.level>-1">
                                <img class='img' src='../static/images/icon/star_en.png'>
                            </div>
                            <div class='inblock eva_star mar_l5' v-if="item.level>0">
                                <img class='img' src='../static/images/icon/star_en.png'>
                            </div>
                            <div class='inblock eva_star mar_l5' v-if="item.level>0">
                                <img class='img' src='../static/images/icon/star_en.png'>
                            </div>
                        </div>
                    </div>
                    <div class='f26 c666 mar_b5'>{{item.content}}</div>
                    <div class='f26 c666 mar_b5'>
                        <!--循环展示评价图片-->
                        <template v-for="(uploadImageItem,index) in item.uploadImageArray">
                            <img v-if="uploadImageItem" :onerror="errorUserPhoto" class="productEvaluate_img" :src="sourceUrlShop+uploadImageItem"/>
                        </template>
                    </div>
                    <div class='f24 c666'>{{item.showTime}}</div>
                </div>
            </div>


            <!--产品tab-->
            <div id='pro_dt' class='tab_title bgfff clear txt_center' v-if="xq_zt==0">
                <div class='L col4' v-on:click='tabQiehuan(0)'>
                    <span class='tab inblock' :class='tabIndex==0?"cur":""'>产品详情</span>
                </div>
                <div class='L col4' v-on:click='tabQiehuan(1)'>
                    <span class='tab inblock' :class='tabIndex==1?"cur":""'>产品参数</span>
                </div>
                <div class='L col4' v-on:click='tabQiehuan(2)'>
                    <span class='tab inblock' :class='tabIndex==2?"cur":""'>售后服务</span>
                </div>
            </div>
            <div class='bgfff pad_t10 pad_b10 detail_cnt' style='min-height:200px;' v-if="xq_zt==0">
                <div v-if="tabIndex==0">
                    <!--详情  -->
                    <div class='pad_10 txt_center' v-if="proDetail==''">暂无内容</div>
                    <div v-html="proDetail"></div>
                </div>
                <div v-if="tabIndex==1" class='pad_l10 pad_r10'>
                    <!--参数  -->
                    <div v-for="(item,index) in baseInforList">
                        <div class='f30 pad_b10 pad_t10'>{{item.name}}</div>
                        <div class='table pad_10 border_b all' v-for="(itema,indexa) in item.paramGroupInfo">
                            <div class='td'>{{itema.name}}</div>
                            <div class='td txt_right'>{{itema.value[0]}}</div>
                        </div>
                    </div>
                </div>
                <div v-if="tabIndex==2" class='pad_l10 pad_r10'>
                    <!--售后服务  -->
                    <div v-html="productShouhou"></div>
                </div>
            </div>

            <div class="bot_h"></div>
            <div class='oprate_bottom all bgfff f10 c666 txt_center'>
                <div class='table'>
                    <div class='td' v-if="isCollect==0" v-on:click='collectTap(1)'>
                        <div class='f0 mar_b2'>
                            <img class='oprate_img mauto' src='../static/images/icon/xca_03.png'>
                        </div>
                        <div>关注</div>
                    </div>
                    <div class='td' v-if="isCollect==1" v-on:click='collectTap(0)'>
                        <div class='f0 mar_b4'>
                            <img class='oprate_img mauto' src='../static/images/icon/xc_03.png'>
                        </div>
                        <div>已关注</div>
                    </div>
                    <router-link :to="{name:'cart'}" class='td x_num'>
                        <div class='s_num'>{{cartNum}}</div>
                        <div class='f0 mar_b4'>
                            <img class='oprate_img mauto' src='../static/images/icon/cart_black.png'>
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
                    <img src='../static/images/icon/delete.png'>
                </div>
                <div class='pad_l10 pad_r10 all clear pad_b10 border_b'>
                    <div class='L img_box'>
                        <img class='img' :src="sourceUrlShop+baseInfo.logoImg">
                    </div>
                    <div class='L font_div pad_l10 pad_t10'>
                        <div class='txt_one mar_b10'>{{baseInfo.productName}}</div>
                        <div class='clear'>
                            <div class='L czt'>￥{{baseInfo.salesPrice}}</div>
                            <div class='R f24 c999'>库存：{{postPack}}</div>
                        </div>
                    </div>
                </div>
                <!--规格滚动区  -->
                <div class='scrolla'>
                    <div v-for="(item,index) in productGuige">
                        <div class='pad_10 border_b'>{{item.keyName}}</div>
                        <div class='clear pad_5 border_b'>
                            <div v-for="(itema,indexa) in item.specificationValue" class='p_guige L' :class='yxGuigedata[index].tindex==indexa?"cur":""' v-on:click='editGuige(index,indexa)'>{{itema.valueName}}</div>
                        </div>
                    </div>
                    <!--数量  -->
                    <div class='table all pad_10'>
                        <div class="td wrem3">数量</div>
                        <div class="td">
                            <div class='p_num txt_right f0'>
                                <div class='inblock sub' v-on:click='subNum'>
                                    <img src='../static/images/icon/jian.png' class='img'>
                                </div>
                                <div class='inblock'>
                                    <input type='number' disabled='true' v-model='pNum' class='input f14'></input>
                                </div>
                                <div class='inblock add' v-on:click='addNum'>
                                    <img src='../static/images/icon/add.png' class='img'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--&lt;!&ndash;按钮  &ndash;&gt;-->
                <div class='oprate_btn1 all txt_center f30 nyBtn' v-if="buyTrue&postPack>0" v-on:click='addCart'>确 定</div>
                <div class='oprate_btn1 gray all txt_center f30 nyBtn' v-if="!buyTrue||postPack<1">库存不足</div>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { sourceUrlShop } from '@/config'
    import Nlayer from '@/components/Nlayer'
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'

    export default {
        name: "PersonalCenter",
        components: {
            Nlayer
        },
        data(){
            return {
                sourceUrlShop,
                loadingVisible: false,
                password: '',
                tips: '',
                tipsVisible: false,
                dialogVisible: false,
                passwordDigVisible: false,
                noPasswordDigVisible: false,
                nickName: '',
                change:'',
                errorUserPhoto:'this.src="../static/images/mrbj.png"',
                topTitle:'商品详情',
                imgUrls_swiper: [],
                pzt:'prod',//筛选条件
                pId:'3509',//商品id
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
                productShouhou:"售后内容",
                isCollect:0,//商品收藏，1已收藏，0未收藏
                cartNum:0,//购物车数量
                guigeOprate:0,//1，加入购物车，2立即购买,0不显示
                productGuige:[],//商品规格
                yxGuigedata:[],//商品已选规格
                yxGuigestr:'',//已选规格
                pNum:1,//购买数量
                uploadImgRoot: urlUtil.uploadImgRoot,
                buyTrue:true,//true可购买，false不可购买
            }
        },
        created(){

            //下单数据
            this.$store.state.placeOrder = {data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false};

            localStorage.setItem("placeOrder",JSON.stringify({data:false,address:false,coin:false,coinNum:0,discount:false,way:0,fapiao:0,fapiaoData:false}))
            var that = this;
            var pId=that.pId,oldPid=that.oldPid,shopId='';
            console.log(this.$route.params.pId)
            //that.$store.state.loginInfo.customerId
            //商品基本信息
            jsonAjax.post(urlUtil.getApiUrl("product_detail"), { productId: pId}, function (result) {
                console.log(result)
                if (result.returnCode == 1) {
                    shopId = result.resultData.shopInfoId;
                    that.shopId=shopId;

                    //店铺信息，customerId 参数判断用户是否收藏商品
                    jsonAjax.post(urlUtil.getApiUrl("shop_info"), { shopInfoId: shopId, customerId: that.$store.state.loginInfo.customerId }, function (result) {
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
                    // 渲染轮播
                    setTimeout(() => {
                        that.carouselSwiper = new Swiper('.carousel .swiper-container', {
                            loop: true,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: false,
                            },
                            pagination: {
                                el: '.carousel .swiper-pagination',
                                clickable: true
                            }
                        })
                    }, 30)
                    that.baseInfo=result.resultData;
                    that.postPack=result.resultData.storeNumber;
                    that.baseInforList=JSON.parse(result.resultData.productParametersValue);
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
            //获取购物车数量
            jsonAjax.post(urlUtil.getApiUrl("cart_hqnum"), {customerId: that.$store.state.userinfo.userId,
                customerToken: that.$store.state.userinfo.token,
                phone: 18222233333 }, function (result) {
                if (result.returnCode == 1) {
                    that.cartNum= result.resultData.quantityTotal;
                }
            });

            //商品评价
            jsonAjax.post(urlUtil.getApiUrl("product_evaluate"), { productId: that.pId, type: 1, page: 1 }, function (result) {
                if (result.returnCode == 1) {
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
                    that.evaluate=result.resultData;
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


            //查看是否关注
            jsonAjax.post(urlUtil.getApiUrl("product_checkcollect"), { productId: that.pId,customerId: '423' }, function (result) {
                if (result.returnCode == 1) {
                    that.isCollect = 0;
                } else if (result.returnCode == 0) {
                    that.isCollect = 1;
                }
            })
            //商品图文详情
            jsonAjax.post(urlUtil.getApiUrl("product_tuwen"), { productId: that.pId }, function (result) {
                if (result.returnCode == 1) {
                    that.proDetail=result.resultData.detailContent;//图文详情
                }

            });

            //获取售后服务
            jsonAjax.get(urlUtil.getApiUrl("news_detail") + "/763", {}, function (result) {
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
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            querys(){
                return this.$route.query
            },
            mobilePhone(){
                return this.userinfo.mobilePhone == 'false' ? false : this.userinfo.mobilePhone
            },
            email(){
                return this.userinfo.email == 'false' ? false : this.userinfo.email
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            Sidebars(){
                return this.getSidebars()
            }
        },
        methods: {
            ...mapGetters(['getUserinfo','getSidebars']),
            ...mapActions(['removeUserinfo', 'setUserinfo', 'setUserNoticeState','setSidebars']),
            // 轮播详情页
            toDetail(e){
                const {
                    url
                } = e.currentTarget.dataset
                // 转化为对象
                var path = JSON.parse(url).name
                var query = JSON.parse(url).params
                this.$push({
                    path:path,
                    query: query
                })
            },
            //顶部跳转
            click_go(str){
                this.pzt=str;
                location.replace("#"+this.pzt);
            },
            //打开规格div,state==1,加入购物车，state==2立即购买，state==0，关闭选择
            openGuige(state){

                this.guigeOprate=state;
            },
            //选择商品规格
            editGuige(index,indexa){

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
                this.yxGuigestr=str;
                this.refreshInfo();
            },
            // 检测
            judgeAll(){
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
            //tab切换
            tabQiehuan(index){

                this.tabIndex=index;
            },
            //商品收藏state=0取消收藏，state=1加入收藏
            collectTap(state){

                var that=this;
                if(state==0)
                {
                    //取消收藏
                    jsonAjax.post(urlUtil.getApiUrl("product_nocollect"), { productId: that.pId ,customerId: that.$store.state.loginInfo.customerId}, function (result) {
                        if (result.returnCode == 1) {
                            that.isCollect=0;
                        }
                    });

                }else{
                    //加入收藏
                    jsonAjax.post(urlUtil.getApiUrl("product_collect"), { productId: that.pId ,customerId: that.$store.state.loginInfo.customerId}, function (result) {
                        if (result.returnCode == 1) {
                            that.isCollect=1;
                        }
                    });

                }
            },
            //购买数量加一
            addNum(){

                if(this.pNum<this.postPack)
                {
                    this.pNum++;
                }else{
                    Toast("已达上限");
                }
            },
            //购买数量减一
            subNum(){

                if(this.pNum>1)
                {
                    this.pNum--;
                }else{
                    Toast("");
                }

            },
            //加入购物车 或 立即购买
            addCart(){
                if(this.guigeOprate==1)
                {

                    var cart_data = [], str,that=this;
                    cart_data[0] = { num: that.pNum, productId: that.pId, shopInfoId: that.shopId, sku: that.baseInfo.sku };
                    str = { customerId: that.$store.state.loginInfo.customerId, addToCartProductArray: cart_data };
                    jsonAjax.post(urlUtil.getApiUrl("add_cart"), {  saveShoppingCartBoJSON: JSON.stringify(str) }, function (result) {
                        // console.log(result);
                        if (result.returnCode == 1) {
                            var numa = that.cartNum + that.pNum;
                            that.cartNum= numa;
                            that.guigeOprate=0;
                        }else{
                            Toast(result.message);
                        }
                    });
                }else if(this.guigeOprate==2){
                    //立即购买
                    this.$store.state.placeOrder.data={productId:this.pId,quality:this.pNum,sku:this.baseInfo.sku};

                    var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                    orderGlobal.data={productId:this.pId,quality:this.pNum,sku:this.baseInfo.sku};
                    localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))

                    this.$router.push({name:"orderConfirm",params:{type:1}});
                }
            },
            //数据更新
            refreshInfo() {
                if(this.judgeAll())
                {
                    var that=this;

                    var strb = "";
                    for (var i = 0; i < that.yxGuigedata.length; i++) {
                        if (i > 0) {
                            strb += ",";
                        }
                        strb += that.yxGuigedata[i].id;
                    }

                    jsonAjax.post(urlUtil.getApiUrl("product_genxin"), { specificationValueIds: strb, goodId: that.goodId }, function (result) {
                        if (result.returnCode == 1) {
                            that.pId=result.resultData.productId;
                            //查看是否关注
                            jsonAjax.post(urlUtil.getApiUrl("product_checkcollect"), { productId: that.pId,customerId: that.$store.state.loginInfo.customerId }, function (result) {
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
                        }
                        else{
                            that.buyTrue=false;
                            that.postPack= 0;
                        }
                    });
                }
            },

            // 验证直接跳转还是需要二级密码
            vlidateBindTel(){
                if(!this.mobilePhone){
                    // 去绑定
                    this.$push({
                        path: '/bind',
                        query: {
                            name: 'tel'
                        }
                    })

                }else{
                    this.vlidateLockData('tel')
                }
            },
            // 验证
            vlidateBindEmail(){
                if(!this.email){
                    // 去绑定
                    this.$push({
                        path: '/bind',
                        query: {
                            name: 'email'
                        }
                    })

                }else{
                    this.vlidateLockData('email')
                }
            },
            // 验证是否有二级密码
            vlidateLockData(modifyName){
                this.change = modifyName
                console.log(this.change)
                console.log(this.userinfo.transPwd)
                if( this.userinfo.transPwd ){

                    // 有交易密码
                    this.openPasswordDig()
                } else {
                    // 无交易密码
                    this.openNoPasswordDig()
                }

            },
            // 去设置交易密码
            toSetDealPassword(){
                this.$push({
                    path: '/setPassword'
                })
            },
            // 检测交易密码是否正确
            checkPassword(){
                this.$http.post('js/users/isCorrectTransPass',{
                    userId: this.userId,
                    transPass: this.password
                }).then((res) => {
                    if( res.success ){
                        if(this.change == 'tel'){
                            // 跳转修改绑定的页面
                            this.$push({
                                path: '/modifyBind',
                                query: {
                                    name: 'modifyBindTel',
                                    number: this.mobilePhone
                                }
                            })
                        }else{
                            // 跳转修改绑定的页面
                            this.$push({
                                path: '/modifyBind',
                                query: {
                                    name: 'modifyBindEmail',
                                    number: this.email
                                }
                            })
                        }

                    } else {
                        this.showTips(res.message)
                        this.password = ''
                    }
                })
            },

            // 退出登录
            loginOut(){
                console.log(this.Sidebars)
                this.Sidebars.forEach((item,i)=>{
                    item.active = false
                })

                console.log(this.Sidebars)
                this.setSidebars(...this.Sidebars)
                // return
                this.removeUserinfo()


                this.setUserNoticeState()
                this.showTips(this.$t('myMessageSetup.myMessageSetup_logout'))
            },
            // 打开消息提示
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true
            },
            // 打开加载
            showLoading(){
                this.loadingVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false

                if( !this.userinfo ){
                    this.$replace({
                        name: 'My'
                    }, false)
                }
            },
            // 关闭加载层
            closeLoading(){
                this.loadingVisible = false
            },
            // 打开dialog修改层
            showDialog(){
                this.dialogVisible = true
            },
            // 关闭dialog修改层
            closeDialog(){
                this.dialogVisible = false
            },
            // 关闭无密码提示弹窗
            closeNoPasswordDig(){
                this.noPasswordDigVisible = false
            },
            // 打开无密码提示弹窗
            openNoPasswordDig(){
                this.noPasswordDigVisible = true
            },
            // 监听关闭无密码弹窗事件
            noPasswordDigClose(){
                this.noPasswordDigVisible = false
            },
            // 关闭密码弹窗
            closePasswordDig(){
                this.passwordDigVisible = false
                this.password = ''
            },
            // 打开密码弹窗
            openPasswordDig(){
                this.passwordDigVisible = true
            },
            // 监听关闭密码弹窗事件
            passwordDigClose(){
                this.passwordDigVisible = false
                this.password = ''
            }
        }
    }
</script>

<style scoped>
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

    .top_h{ height: 0.8rem;}

    /*关注  */
    .shopInfo{
        width:750px;
        margin: 0 auto;
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
        border-bottom: 0.08rem solid #ff0036;
    }

    .detail_cnt {
        padding-bottom: 2.8rem;
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
        background: #ff0036;
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
        height: 4.2rem;
        overflow-y: auto;
    }

    .box_guige .img_box {
        margin-top: -0.4rem;
        width: 1.6rem;
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
        background: #ff0036;
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
        width: 1.5rem;
    }

    .x_num {
        position: relative;
        /* width: 6em; */
    }

    .x_num .s_num {
        padding: 0.04rem 0.1rem;
        line-height: 1;
        position: absolute;
        left: 50%;
        margin-left: 0.1rem;
        top: 0.06rem;
        border-radius: 0.16rem;
        background: #ff0036;
        color: #fff;
        font-size: 0.16rem;
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
        background-color: #ff9600 !important;
        border-color: #ff9600;
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

</style>