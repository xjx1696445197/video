<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <p class="HEADER_SHOP_TITLE">个人中心</p>
        </div>
        <div class="wrapper">
            <div class="shop_myTop">
                <div class="shop_myTop_wrapper clearfix">
                    <div class="headImg fl">
                        <img src="../static/images/default/mrbj.png" alt="">
                    </div>
                    <div class="shop_myTop_content fl">
                        <p class="shop_txt1 fweight">蜡笔小鑫</p>
                        <p class="shop_txt2">账号：123456XY</p>
                    </div>
                </div>
            </div>

            <!--我的订单-->
            <div class="shop_order">
                <div class="shop_orderTop clearfix">
                    <div class="shop_orderIcon fl"></div>
                    <p class="shop_txt3 fl">我的订单</p>
                    <div class="right_icon fr shop_myTop_mt30"></div>
                    <p class="shop_txt3 fr">查看全部订单</p>
                </div>
                <div class="shop_orderBottom">
                    <div class="shop_list clearfix tcenter">
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon1 mauto"></div>
                            <p class="shop_txt4">待付款</p>
                        </div>
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon2 mauto"></div>
                            <p class="shop_txt4">待发货</p>
                        </div>
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon3 mauto"></div>
                            <p class="shop_txt4">待收货</p>
                        </div>
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon4 mauto"></div>
                            <p class="shop_txt4">评价</p>
                        </div>
                        <div class="shop_item fl">
                            <div class="shop_item_icon shop_item_icon5 mauto"></div>
                            <p class="shop_txt4">售后</p>
                        </div>
                    </div>
                </div>
            </div>

            <!--我的钱包-->
            <div class="shop_order1">
                <div class="shop_orderTop clearfix">
                    <div class="shop_walletIcon fl"></div>
                    <p class="shop_txt3 fl">我的钱包</p>
                    <div class="right_icon fr shop_myTop_mt30"></div>
                </div>
                <div class="shop_orderBottom_wallet">
                    <div class="shop_list clearfix tcenter">
                        <div class="shop_item_wallet fl">
                            <p class="shop_txt4 fweight">80000</p>
                            <p class="shop_txt5">积分</p>
                        </div>
                        <div class="shop_item_wallet fl">
                            <p class="shop_txt4 fweight">54321.1234</p>
                            <p class="shop_txt5">USDT</p>
                        </div>
                        <div class="shop_item_wallet fl">
                            <p class="shop_txt4 fweight">654321.1234</p>
                            <p class="shop_txt5">HALE</p>
                        </div>
                    </div>
                </div>
            </div>

            <!--其他配置-->
            <div class="shop_other">
                <div class="shop_otherBottom">
                    <div class="shop_list clearfix tcenter">
                        <div class="shop_item_other fl">
                            <div class="shop_item_other_icon shop_item_other_icon1 mauto"></div>
                            <p class="shop_txt4">我的收藏</p>
                        </div>
                        <div class="shop_item_other fl">
                            <div class="shop_item_other_icon shop_item_other_icon2 mauto"></div>
                            <p class="shop_txt4">我的足迹</p>
                        </div>
                        <div class="shop_item_other fl">
                            <div class="shop_item_other_icon shop_item_other_icon3 mauto"></div>
                            <p class="shop_txt4">收货地址</p>
                        </div>
                        <div class="shop_item_other fl">
                            <div class="shop_item_other_icon shop_item_other_icon4 mauto"></div>
                            <p class="shop_txt4">发票信息</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="SHOPLONGBTN back"
                 @click="toMain"
            >返回HALLE TOKEN</div>
        </div>



    </div>
</template>


<script>
    import Nlayer from '@/components/Nlayer'
    import { sourceUrl,sourceUrlShop } from '@/config'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "ShopMy",
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
            }
        },
        mounted(){
            // 判断是否有数据
            this.isSidebars()
            this.isLogin()

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
        },
        methods: {
            ...mapActions(['setUserNoticeState', 'setNeedUpdate','setUserinfo','setUsers','removeUserinfo','setSidebars']),
            ...mapGetters(['getUserinfo', 'getSystemNotice', 'getTransferNotice', 'getNeedUpdate', 'getUpdateDetail','getSidebars']),
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
                    // 获取用户是否有未读消息
                    this.setUserNoticeState()
                    // 获取登录时的资产列表
                    this.getAccountList()
                //    获取状态
                    this.setStatus()
                } else {
                    // 获取没有登录时的资产列表
                    this.getAccountListNoLogin()
                }
            },
            // 获取登录时的资产列表
            getAccountList(){
                this.$http.get('js/userWallet/getUserWallet', {
                    userId: this.userId
                }).then((res) => {
                    if( res.success ){
                        this.accountList = res.result.list
                    }
                })
            },
            // 获取没有登录时的资产列表
            getAccountListNoLogin(){
                this.$http.get('js/usersLogin/getUserWallet').then((res) => {
                    if( res.success ){
                        this.accountList = res.result
                    }
                })
            },
            //
            setStatus(){
                this.userList.forEach((item, i)=>{
                    console.log(item.username,this.userName)

                    if(item.username == this.userName){

                        item.active = true
                    }else{
                        item.active = false
                    }

                })
            },
            // 跳转到币详情
            toDetail(e){
                if( !this.userinfo ){
                    this.showTips(this.loginTip)
                    return
                }
                const { name } = e.currentTarget.dataset

                this.$push({
                    path: '/currencyDetail',
                    query: {
                        currencyName: name
                    }
                })
            },
            // 跳转到消息页面
            toNotice(){
                if( !this.userinfo ){
                    this.showTips(this.loginTip)
                    return
                }
                this.$push({
                    path: '/notice'
                })
            },
            // 选择
            selectUser(e){
                const {
                    id
                } = e.currentTarget.dataset
                console.log(id)
                // 打开加载层
                this.showLoading()
                this.userList.forEach((item, i)=>{

                    if(i == id){

                        item.active = true
                    }else{
                        item.active = false
                    }

                })

                // 根据当前选择的用户名去请求切换接口
                this.$http.post('js/usersLogin/getTokenByUserId', {
                    userName: this.userList[id].username,
                    __HEADERSAUTH: true
                }).then((res) => {
                    // 关闭加载层
                    this.closeLoading()
                    console.log(res,res.headers)
                    if(res.data.success){
                        console.log(res.headers)
                        let userinfo = res.data.result
                        const { token } = res.headers
                        // this.removeUserinfo()
                        // 保存用户信息
                        this.setUserinfo({
                            ...userinfo,
                            token
                        })
                        // 保存用户名
                        this.setUsers(userinfo.userName)

                        this.loginSuccess = true

                        this.isLogin()
                        this.showTips(res.data.message, false)

                    }else{
                        this.showTips(res.data.message)
                    //    未找到该用户 然后进行删除操作
                    }

                })


                console.log(this.userList)

            },
            // 去注册
            toRegister(){
                // 关闭侧边栏
                this.feeTipDigClose()
                this.$push({
                    path: '/register',
                    query: {
                        from: 'create'
                    }
                })

            },
            // 去导入
            toImport(){
                // 关闭侧边栏
                this.feeTipDigClose()
                this.$push({
                    path: '/importWallet',
                    query: {
                        from:'/asset'
                    }

                })
            },
            toMain(){
                this.$router.replace({
                    path: '/asset'
                })
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

    .shop_myTop_wrapper{
        padding: 0.3rem;
        height: 1.6rem;
        box-sizing: border-box;
        background: #fff;
    }

    .headImg{
        width: 1rem;
        height: 1rem;
        background: #E4811D;
        border-radius: 50rem;
        overflow: hidden;
        border: 1px solid #E4811D;
    }
    .headImg img{
        width: 100%;
        height: 100%;

    }

    .shop_myTop_content{
        padding-top: 0.1rem;
        padding-left: 0.3rem;
    }
    .shop_txt1{
        font-size: 0.34rem;
        color: #333;
        line-height: 0.45rem;
    }
    .shop_txt2{
        font-size: 0.26rem;
        color: #aaa;
        line-height: 0.45rem;
    }
    .shop_txt3{
        font-size: 0.3rem;
        color: #333;
        line-height: 1rem;
        padding: 0 0.2rem;
    }
    .shop_txt4{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.5rem;
    }
    .shop_txt5{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.5rem;
    }
    .shop_myTop_mt30{
        margin-top: 0.3rem;
    }
    .right_icon{
        background: url("../static/images/icon/notice_icon_right.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.4rem;

    }

    .shop_order{
        margin-top: 0.3rem;
        height: 2.5rem;
        background: #fff;
        padding: 0 0.3rem;
    }
    .shop_order1{
        margin-top: 0.3rem;
        height: 2.4rem;
        background: #fff;
        padding: 0 0.3rem;
    }

    .shop_other{
        margin-top: 0.3rem;
        background: #fff;
        padding: 0.4rem 0.3rem 0.2rem;
    }
    .shop_orderTop{
        border-bottom: 1px solid #eee;
    }
    .shop_orderIcon{
        background: url("../static/images/shop/shop_myOrder.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.35rem;
        margin-top: 0.3rem;
    }
    .shop_walletIcon{
        background: url("../static/images/shop/shop_myWallet.png") no-repeat center center /cover;
        height: 0.4rem;
        width: 0.4rem;
        margin-top: 0.3rem;
    }
    .shop_orderBottom{
        padding: 0.2rem 0;
        box-sizing: border-box;
    }
    .shop_orderBottom_wallet{
        padding-top: 0.2rem;
        box-sizing: border-box;
    }
    .shop_item{
        width: 1.38rem;
    }
    .shop_item_wallet{
        width: 2.3rem;
        position: relative;
    }
    .shop_item_wallet+.shop_item_wallet:before{
        position: absolute;content: '';
        width: 1px;height: 0.6rem;
        background: #eee;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .shop_item_icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .shop_item_icon1{
        background: url("../static/images/shop/shop_order_icon1.png") no-repeat center center /cover;
    }
    .shop_item_icon2{
        background: url("../static/images/shop/shop_order_icon2.png") no-repeat center center /cover;
    }
    .shop_item_icon3{
        background: url("../static/images/shop/shop_order_icon3.png") no-repeat center center /cover;
    }
    .shop_item_icon4{
        background: url("../static/images/shop/shop_order_icon4.png") no-repeat center center /cover;
    }
    .shop_item_icon5{
        background: url("../static/images/shop/shop_order_icon5.png") no-repeat center center /cover;
    }
    .shop_item_other{
        width: 1.725rem;
    }
    .shop_item_other_icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .shop_item_other_icon1{
        background: url("../static/images/shop/shop_other_icon001.png") no-repeat center center /cover;
    }
    .shop_item_other_icon2{
        background: url("../static/images/shop/shop_other_icon002.png") no-repeat center center /cover;
    }
    .shop_item_other_icon3{
        background: url("../static/images/shop/shop_other_icon003.png") no-repeat center center /cover;
    }
    .shop_item_other_icon4{
        background: url("../static/images/shop/shop_other_icon004.png") no-repeat center center /cover;
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

    .back{
        margin-top: 1.2rem;
    }
</style>




