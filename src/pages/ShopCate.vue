<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <p class="HEADER_SHOP_TITLE">分类</p>
        </div>
        <div class="wrapper">
            <div class="category-left">
                <div class="spiltHeader"></div>
                <div
                        :class="{'active':left_selected_id ==left_category.productTypeId,'category-left-item':'true'}"
                        v-for="(left_category,index) in left_category_list"
                        :key="left_category.productTypeId"
                        v-on:click="handleCategory(left_category.productTypeId)"
                        :id="left_category.productTypeId"
                        align="center"
                >
                    <!--<div class="mauto">-->
                        <!--<img :onerror="errorUserPhoto" :src="sourceUrlShop+left_category.categoryImageApp" style="width:0.4rem; height:0.4rem; margin-bottom: 0.06rem;" />-->
                    <!--</div>-->
                    <div>
                        <span class="f26"> {{left_category.sortAppName}}</span>
                    </div>
                </div>
                <div class="spiltfooter"></div>
            </div>
            <div class="category-right">
                <div class="spiltHeader"></div>
                <div v-for="(category_sed,index) in category_list_sed_thd">
                    <div class="category-right-header">{{category_sed.sortAppName}}</div>
                    <div class="category-grid f0">

                        <div class="category-grid-item f0" v-for="(category_thd,indexa) in category_sed.thirdProductTypeMap">
                            <router-link :to="{name:'ShopProduct',params:{cId:category_thd.productTypeId,cName:category_thd.sortAppName,keyword:0}}" class="block" style="display: inline-block;">
                                <template v-if="category_thd.categoryImageApp!=null">
                                    <img :onerror="errorUserPhoto" :src="sourceUrlShop+category_thd.categoryImageApp" />
                                </template>
                                <template v-else>
                                    <img  src="../static/images/default/mrbj.png" />
                                </template>
                                <div class="f26">{{category_thd.sortAppName}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="spiltfooter"></div>
            </div>
        </div>
    </div>
</template>


<script>
    import Nlayer from '@/components/Nlayer'
    import { sourceUrl,sourceUrlShop } from '@/config'
    import { mapGetters, mapActions,mapMutations } from 'vuex'
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/mrbj.png';

    export default {
        name: "ShopCate",
        components: {
            Nlayer
        },
        data(){
            return {
                sourceUrl,
                sourceUrlShop,
                accountList: [],
                updateDialog: null,
                tips: '',
                tipsVisible: false,
                userList:[
                    {
                        username:'dmy00001',
                        active:false
                    },
                    {
                        username:'yl000051',
                        active:false
                    },
                    {
                        username:'zhy11111',
                        active:false
                    }
                ],
                feeTipVisible:false,
                loadingVisible: false,
                left_selected_id: this.defaultCateId || '',//当前选定第一级类型ID
                left_category_list: [],//第一级商品类型
                category_list_sed_thd:[],
                errorUserPhoto:'this.src="' + userPhoto + '"',

            }
        },
        created(){
            var that = this;
            var left_selected_id = "";
            jsonAjax.get(urlUtil.getApiUrl('product_category_fst'), {}, function (result) {
                if (result.returnCode === 1) {
                    /** 1、轮播图获取点击图片的超链接地址并展示图片 **/
                    var category_list_fst = result.resultData;
                    var obj = category_list_fst[0];
                    console.log(that.defaultCateId)
                    if(typeof(that.defaultCateId)==="undefined" || that.defaultCateId ==''){

                        left_selected_id = obj.productTypeId;

                    }else{
                        that.left_selected_id = that.defaultCateId



                    }

                    that.left_category_list=category_list_fst;
                    that.dispalyRigthCategoryList(left_selected_id);
                }
            })
        },
        mounted(){
            // 判断是否有数据
            this.isSidebars()
            this.isLogin()
            // 加载数据
            // 判断是返回还是切换
            if( this.defaultCateId == ""){
                this.dispalyRigthCategoryList()
                this.handleCategory()
            }else{
                this.dispalyRigthCategoryList(this.defaultCateId)
                console.log(this.defaultCateId)


                console.log(this.left_selected_id)
                this.handleCategory(this.defaultCateId)
            }


            // 判断是否要更新
            if( this.needUpdate == -1 ){
                this.setNeedUpdate()
            } else {
                if( this.needUpdate ){
                    this.createUpdateDialog()
                    this.updateDialog.open()
                }
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            hasNoReadNotice(){
                return this.getTransferNotice() || this.getSystemNotice()
            },
            needUpdate(){
                return this.getNeedUpdate()
            },
            updateDetail(){
                return this.getUpdateDetail()
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            userName(){
                return this.userinfo.userName
            },
            Sidebars(){
                return this.getSidebars()
            },
            defaultCateId(){
                return this.getDefaultCateId()
            }
        },
        methods: {
            ...mapActions(['setUserNoticeState', 'setNeedUpdate','setUserinfo','setUsers','removeUserinfo','setSidebars','setDefaultCateId']),
            ...mapGetters(['getUserinfo', 'getSystemNotice', 'getTransferNotice', 'getNeedUpdate', 'getUpdateDetail','getSidebars','getDefaultCateId']),
            // 加载分类
            dispalyRigthCategoryList(left_selected_id) {
                var that = this;
                //加载所有商品分类
                that.left_selected_id=left_selected_id;
                jsonAjax.post(urlUtil.getApiUrl("product_category_sed_thd"), { productTypeId: left_selected_id }, function (result) {
                    if (result.returnCode == 1) {
                        var category_list_sed_thd = [];
                        category_list_sed_thd = result.resultData;
                        if (category_list_sed_thd != null) {
                            that.left_selected_id=left_selected_id;
                            that.category_list_sed_thd= category_list_sed_thd;
                        }
                    }
                });
            },
            handleCategory(left_selected_id) {
                var left_selected_id = left_selected_id;
                // 设置选中的id
                console.log(left_selected_id)
                this.setDefaultCateId(left_selected_id)
                // console.log(left_selected_id)
                this.dispalyRigthCategoryList(left_selected_id);
            },
            // 创建版本更新弹窗
            createUpdateDialog(){
                const h = this.$createElement
                const cons = this.updateDetail.content.replace(/(\r\n)|(\n)/g,'<br/>');
                console.log(cons)
                const content = h('div', {
                    class: 'DIALOG'
                },[
                    h('div', {class: 'DIALOG_TITLE'}, this.updateDetail.editionNum + this.$t('aboutUs.aboutUs_edition')),
                    h('div', {class: 'DIALOG_CONTENT'}, this.updateDetail.content),
                    h('div', {class: 'DIALOG_BTNS clearfix'}, [
                        h('div', {
                            class: 'DIALOG_BTN CONFIRM',
                            on: {
                                click: () => {
                                   this.openPage()
                                }
                            }
                        }, this.$t('aboutUs.aboutUs_update'))
                    ]),
                ])

                this.updateDialog = this.$layer({
                    content,
                    width: '80%',
                    maskCancel: false
                })
            },
            // 原生打开新页面
            openPage(){
                window.plus && window.plus.runtime.openURL( this.updateDetail.downloadPath )
            },
            // 检测缓存是否有数据
            isSidebars(){
                if(this.Sidebars.length > 0){
                    this.userList = this.Sidebars
                }else{
                    this.userList = []
                }
            },
            // 检测用户是否登录
            isLogin(){
                if( this.userinfo ){

                } else {

                }
            },
            // 打开
            toOpen(){
                this.feeTipVisible = true
            },
            feeTipDigClose(){
                this.feeTipVisible = false
            },
            toClose(){
                this.feeTipVisible = false
            },
            // 打开消息提示
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            // 打开加载
            showLoading(){
                console.log('执行了')
                this.loadingVisible = true
            },
            // 关闭加载层
            closeLoading(){
                this.loadingVisible = false
            }
        }
    }
</script>

<style scoped>
    .page{
        position: relative;
    }
    .asset_sidebar{
        position: relative;
        /*top: 0;*/
        /*left: 0;*/
        /*right: 2.5rem;*/
        /*bottom: 0;*/
        /*width: 7.5rem;*/
        height: 100%;
        /*z-index: 999;*/
    }
    .sidebar_scroll{
        position: absolute;
        top: 1.3rem;
        left: 0;
        width: 100%;
        right: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
    .sidebar_content{
        height: 100%;
        width: 5rem;
        background: #fafafa;
    }
    .sidebar_title{
        background: #e4811d;
        width: 100%;
        height: 1.3rem;
        position: relative;
    }
    .sidebar_txt1{
        font-size: 0.32rem;
        color: #fff;
        line-height: 0.9rem;
        padding-top: 0.4rem;
        padding-left: 0.3rem;
    }
    .sidebar_icon{
        background: url("../static/images/icon/sidebar_up.png") no-repeat center center / cover;
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        right: 0.3rem;
        bottom: 0.15rem;
    }
    .sidebar_list_wrapper{
        padding-top: 0.24rem;
        background: #fafafa;
    }
    .sidebar_list_padding{
        background: #fff;
        padding: 0 0.3rem;
    }
    .sidebar_txt2{
        font-size: 0.3rem;
        color: #333;
        line-height: 0.8rem;
        padding-top: 0.2rem;
    }
    .sidebar_item{
        padding: 0.2rem;
        border-top: 1px solid #ccc;
        position: relative;
    }
    .sidebar_item.active .sidebar_active_icon{
        background: url("../static/images/icon/select_active.png") no-repeat center center / cover;
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.1rem;
    }
    .sidebar_active_icon{

    }
    .sidebar_item_pic{
        width: 0.6rem;
        height: 0.6rem;
    }
    .sidebar_item_default{
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .sidebar_item_create{
        background: url("../static/images/icon/create_wallet.png") no-repeat center center / cover;
    }
    .sidebar_item_import{
        background: url("../static/images/icon/import_wallet.png") no-repeat center center / cover;
    }
    .sidebar_txt3{
        font-size: 0.24rem;
        color: #333;
        line-height: 0.6rem;
        position: absolute;
        left: 1rem;
        top:0.2rem;
    }


    .HEADER_LEFT {
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        top: 0.15rem;
        left: 0.3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .select{
        background: url("../static/images/icon/sidebar_expand.png") no-repeat center center / cover;
    }

    .header{
        position: relative;
        height: 4.7rem;
        background: url("../static/images/bg/bg_top470.png") no-repeat center center / cover;
    }
    .notice{
        background: url("../static/images/asset_notice_icon.png") no-repeat center center / cover;
    }
    .notice.active:after{
        position: absolute;
        content: '';
        width: .12rem;
        height: .12rem;
        background: #e4811d;
        border-radius: 100%;
        right: .36rem;
        top: .1rem;
    }
    .logo{
        position: absolute;
        width: 1.82rem;
        height: 1.82rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,.3);
        left: 50%; border-radius: 100%;
        transform: translateX(-50%);
        top: 1.2rem;
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .username{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 3.22rem;
        font-size: .4rem;
        color: #fff;
        line-height: .6rem;
        text-align: center; max-width: 3rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .list{
        margin-top: 0.24rem;
        padding: 0 .3rem;
    }
    .item{
        overflow: hidden;
        display: flex;
        position: relative;
        height: 1.3rem;
        background: #fff;
        border-radius: .2rem;
        padding: 0 0.55rem 0 0.75rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
        align-items: center;
        justify-content: space-between;
    }
    .item+.item {
        margin-top: .24rem;
    }
    .item:after{
        position: absolute;
        right: 0.15rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0.4rem;
        height: 0.4rem;
        content: '';
        background: url("../static/images/icon/notice_icon_right.png") no-repeat center center / cover;
    }
    .item_pic{
        width: 0.6rem;
        height: 0.6rem;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        overflow: hidden;
        position: absolute;
        left: 0.15rem;
    }
    .item_pic img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .item_name{
        font-size: .34rem;
        color: #333;
        padding: 0 0.15rem;
        line-height: .6rem;
    }
    .item_count{
        font-size: .34rem;
        color: #333;
        padding: 0 0.15rem;
        line-height: .6rem;
    }
    .DIALOG_CONTENT{
        text-align: left;
        /*padding: 0 0.4rem;*/
    }
    .DIALOG_TITLE{
        font-size: .34rem;
        color: #333;
    }
    .DIALOG_CONTENT{
        white-space:pre-line;
    }


    .category-left {
        width: 26.667%;
        /* height: 560px;  */
        background: #f5f5f5;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: -0.5rem;
        top: 0.5rem;
        overflow-y: auto;
    }

    .category-right {
        width: 73.333%;
        /* height: 560px; */
        background: #fff;
        /* flex-grow: 1; */
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        overflow-y: auto;
    }

    .category-left-item {
        height: 1rem;
        padding: 0.3rem 0;
        border-bottom: 1px solid #dedede;
        font-size: 0.26rem;
    }

    .category-left-item.active {
        background: #fff;
        border-left: 0.04rem solid #e4811d;
        font-weight: bold;
        color: #e4811d;
    }

    .category-right-header {
        margin-top: 0.5rem;
        margin-bottom: -0.2rem;
        height: 0.7rem;
        align-self: center;
        line-height: 0.7rem;
        font-size: 0.28rem;
        margin-left: 0.2rem;
        font-weight: bold;
    }

    .category-grid {
        margin-left: 0.2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        background: #fff;
    }

    .category-grid-item {
        padding-top: 0.36rem;
        width: 32.5%;
        text-align: center;
        /*height: 180rpx;*/
        display: inline-block;
        align-self: center;
        justify-content: center;
    }

    .category-grid-item.active {
        border: 1px solid #e4811d;
        background: #f5f5f5;
    }

    .category-grid-item img {
        width: 1.2rem;
        height: 1.2rem;
        margin-bottom: 0.06rem;
        /*padding-left: 10px;*/
        /*padding-right: 10px;*/
    }

    .category-grid-item span {
        display: block;
        margin-top: 0.04rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.26rem;
        text-align: center;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }

</style>




