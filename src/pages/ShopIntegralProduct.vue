<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">积分商城</p>
        </div>
        <div class="wrapper">
            <div class="kind_scroll bgfff all">
                <div class='table_x h100 f24 txt_center'>
                    <div class='td ver_mid' :class='tabIndex==-1?"cur":""' v-on:click='tabExchange(-1)'>
                        <div class='txt_one f28'>全部</div>
                    </div>
                    <div v-for="(item,index) in kindList" class='td ver_mid' :class='index==tabIndex?"cur":""' v-on:click='tabExchange(index)'>
                        <div class='txt_one f28'>{{item.typeName}}</div>
                    </div>
                </div>
            </div>
            <!--排序-->
            <div class='sort_view f28 bgfff'>
                <div class='table txt_center'>
                    <div class="td" :class="'normal' == selectItem ? 'czt':''" v-on:click="sortBy('normal')">综合</div>
                    <div class="td" :class="'totalSales' == selectItem ? 'czt':''" v-on:click="sortBy('totalSales')">销量</div>
                    <div class="td f0" :class="'priceItem' == selectItem ? 'czt':''" v-on:click="sortBy('priceItem')">
                        <span class="inblock f28">价格</span>
                        <div class='inblock f0'>
                            <img v-if="selectItem!='priceItem'" class='price_img' src="../static/images/shop/up_down.png" />
                            <img v-if="queryType==2" class='price_img' src="../static/images/shop/down.png" />
                            <img v-if="queryType==3" class='price_img' src="../static/images/shop/up.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="list">
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="">
                    <div class='pad_20 txt_center f14' v-if="proList.length<1">暂无相关商品~</div>
                    <div class='pro_list'>
                        <div v-for="(item,index) in proList">
                            <router-link :to="{name:'productSDetail',params:{type:3,pId:item.id}}" class='all pad_20 border_b bgfff table'>
                                <div class='w1 td'>
                                    <div class='img_div f0 img_box img_big1 bgfff'>
                                        <div class='img_cnt'>
                                            <img class='img' :src="sourceUrlShop+item.logoImg">
                                        </div>
                                    </div>
                                </div>
                                <div class='td'>
                                    <div class='txt_two txt_h2 pad_l20 mar_b100'>{{item.productName}}</div>
                                    <div class='pad_l20 table all'>
                                        <div class='td wrem5'>
                                            <div class='czt'>{{item.expenseCoin}}积分</div>
                                            <div class='txt_xx c999 f20'>￥{{item.originalPrice}}</div>
                                        </div>
                                        <div class='td txt_right'>
                                            <div class='buy_btn'>去兑换</div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                    </div>
                    <div class="pad_20 txt_center">{{loadTxt}}</div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { sourceUrlShop } from '@/config'
    import Nlayer from '@/components/Nlayer'

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
                kindList:[
                    {"typeId":1,"typeName":"美妆","typeParentId":0,"sort":1,"loadType":1,"isShow":1,"levelCode":0},{"typeId":2,"typeName":"服饰","typeParentId":0,"sort":2,"loadType":1,"isShow":1,"levelCode":0},{"typeId":3,"typeName":"珠宝","typeParentId":0,"sort":3,"loadType":1,"isShow":1,"levelCode":0},{"typeId":4,"typeName":"食品","typeParentId":0,"sort":4,"loadType":1,"isShow":1,"levelCode":0},{"typeId":5,"typeName":"数码","typeParentId":0,"sort":5,"loadType":1,"isShow":1,"levelCode":1},{"typeId":6,"typeName":"家居","typeParentId":0,"sort":6,"loadType":1,"isShow":1,"levelCode":1}
                ],
                proList:[
                    {"id":14,"productId":3536,"shopInfoId":1,"typeId":1,"title":"海澜之家 中长款收腰轻薄风衣外套宽松","productName":"海澜之家 中长款收腰轻薄风衣外套宽松","logoImg":"shop/image/product/20180518/2018051810151917251321.jpg","allowExchangeNum":34,"customerLevel":1,"expenseCoin":4,"exchangeNum":0,"originalPrice":1280.00,"createTime":1556073215000,"updateTime":1566181413000,"isPublish":1,"isShow":1,"sku":"XP1805181018568298","specificationNames":{"尺寸":"L"}},{"id":13,"productId":3498,"shopInfoId":1,"typeId":1,"title":"迪奥口红","productName":"迪奥 变色磨砂唇膏粉漾魅惑润唇蜜口红","logoImg":"shop/image/shopInfo/20180418/2018041817465016874194.png","allowExchangeNum":10,"customerLevel":1,"expenseCoin":6000,"exchangeNum":0,"originalPrice":235.00,"createTime":1524047720000,"updateTime":1524047720000,"isPublish":1,"isShow":1,"sku":"ED1804181749579093","specificationNames":{"颜色":"玫红色"}},{"id":12,"productId":3505,"shopInfoId":1,"typeId":2,"title":"太阳镜","productName":"雷朋（RAY-BAN） 新品骄阳系列太阳眼镜","logoImg":"shop/image/shopInfo/20180418/2018041818202356474831.jpg","allowExchangeNum":10,"customerLevel":1,"expenseCoin":4000,"exchangeNum":0,"originalPrice":1480.00,"createTime":1524047324000,"updateTime":1524047324000,"isPublish":1,"isShow":1,"sku":"WD1804181822403462","specificationNames":{"镜片":"黑灰","镜架":"金色"}},{"id":11,"productId":3507,"shopInfoId":1,"typeId":2,"title":"破洞牛仔","productName":"森马 2018春装新款女装纯棉宽松中长款牛仔外套破洞bf风学生","logoImg":"shop/image/shopInfo/20180418/2018041818241172538885.jpg","allowExchangeNum":20,"customerLevel":1,"expenseCoin":3000,"exchangeNum":0,"originalPrice":219.00,"createTime":1524047280000,"updateTime":1524047280000,"isPublish":1,"isShow":1,"sku":"OR1804181827169455","specificationNames":{"尺码":"L","颜色":" 浅蓝色"}},{"id":10,"productId":3504,"shopInfoId":1,"typeId":4,"title":"三只松鼠礼盒","productName":"良品铺子 坚果大礼包1430g礼盒零食","logoImg":"shop/image/shopInfo/20180418/2018041818104702780266.jpg","allowExchangeNum":20,"customerLevel":1,"expenseCoin":100,"exchangeNum":0,"originalPrice":108.00,"createTime":1524046546000,"updateTime":1524046546000,"isPublish":1,"isShow":1,"sku":"EB1804181815055638","specificationNames":{}},{"id":9,"productId":3502,"shopInfoId":1,"typeId":5,"title":"OPPO R15","productName":"OPPO 全面屏智能拍照正品手机oppor15","logoImg":"shop/image/shopInfo/20180418/2018041817545749339994.jpg","allowExchangeNum":10,"customerLevel":1,"expenseCoin":1000,"exchangeNum":0,"originalPrice":2699.00,"createTime":1524045995000,"updateTime":1524045995000,"isPublish":1,"isShow":1,"sku":"SL1804181757374125","specificationNames":{"颜色":"白色","尺寸":"6"}},{"id":8,"productId":3503,"shopInfoId":1,"typeId":3,"title":"梦想之星太阳花","productName":"通灵 8K白金钻石吊坠项链 梦想之星太阳花","logoImg":"shop/image/shopInfo/20180418/2018041817594476528574.jpg","allowExchangeNum":5,"customerLevel":1,"expenseCoin":10000,"exchangeNum":0,"originalPrice":27500.00,"createTime":1524045957000,"updateTime":1524045957000,"isPublish":1,"isShow":1,"sku":"LL1804181804006676","specificationNames":{}},{"id":7,"productId":3500,"shopInfoId":1,"typeId":2,"title":"森马连衣裙","productName":"森马 2018夏季新款娃娃衫款女式裙子","logoImg":"shop/image/shopInfo/20180418/2018041817511973613403.jpg","allowExchangeNum":20,"customerLevel":1,"expenseCoin":200,"exchangeNum":0,"originalPrice":219.00,"createTime":1524045921000,"updateTime":1524045921000,"isPublish":1,"isShow":1,"sku":"DM1804181753380714","specificationNames":{"尺寸":"L"}},{"id":6,"productId":3441,"shopInfoId":1,"typeId":5,"title":"手提电脑包","productName":"雪曼 苹果笔记本手提电脑包女","logoImg":"shop/image/product/20180129/2018012915111844539909.jpg","allowExchangeNum":20,"customerLevel":1,"expenseCoin":100,"exchangeNum":0,"originalPrice":168.00,"createTime":1524044473000,"updateTime":1524044473000,"isPublish":1,"isShow":1,"sku":"WZ1801291500384922","specificationNames":{"颜色":"白"}},{"id":4,"productId":3443,"shopInfoId":1,"typeId":6,"title":"欧式四件套","productName":"梦洁家纺 美颂提花四件套文艺复古床品欧式套件","logoImg":"shop/image/product/20180129/2018012915422158744787.jpg","allowExchangeNum":20,"customerLevel":1,"expenseCoin":10,"exchangeNum":0,"originalPrice":0.01,"createTime":1524044407000,"updateTime":1524044407000,"isPublish":1,"isShow":1,"sku":"VQ1801291541473471","specificationNames":{"颜色":"春意芳菲","尺寸":"大1.8m-2m床适用"}}
                ]
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
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
            },
        },
        methods: {
            ...mapGetters(['getUserinfo','getSidebars']),
            ...mapActions(['removeUserinfo', 'setUserinfo', 'setUserNoticeState','setSidebars']),
            // 修改昵称
            modifyNickname(){
                this.showLoading()

                this.$http.get('js/users/updateNickName', {
                    userId : this.userId,
                    nickName: this.nickName
                }).then((res) => {
                    if( res.success ){
                        this.showTips(this.$t('myMessageSetup.myMessageSetup_update'))

                        // 设置最新的用户信息
                        this.setUserinfo({
                            ...this.userinfo,
                            nickName: this.nickName
                        })
                    }
                    this.closeLoading()
                    this.closeDialog()
                })
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
    .page{
        background: #fff;
    }
    .kind_scroll {
        position: fixed;
        left: 0;
        right: 0;
        height: 0.8rem;
        top:0.88rem;
        background: #fff;
        z-index: 10;
        overflow-x: auto;
    }

    .kind_scroll .td {
        /*padding: 0px 10px;*/
        min-width: 5em;
        box-sizing: border-box;
        border-bottom: 1px solid transparent;
    }

    .kind_scroll .td.cur {
        border-bottom-color: #ff0036;
        color: #ff0036;
    }

    .top_h {
        height: 0.8rem;
    }

    .time_tag {
        margin-left: 5px;
        margin-right: 5px;
        padding: 2px 5px;
        background: #232325;
        color: #fff;
        border-radius: 4px;
    }

    .pro_list .border_b {
        border-bottom: 1px solid #f2f2f2;
    }

    .pro_list .w1 {
        width: 80px;
    }

    .pro_list .img_div {
        border: 1px solid #f2f2f2;
        border-radius: 4px;
        overflow: hidden;
    }

    .pro_list .mar_b100 {
        margin-bottom: 2px;
    }

    .p_notice {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
    }

    .buy_btn {
        background: #E4811D;
        color: #fff;
        padding: 3px 10px;
        border-radius: 4px;
        display: inline-block;
    }


    /*筛选  */

    .sort_view {
        z-index: 10;
        position: fixed;
        left: 0;
        top: 1.68rem;
        right: 0;
        height: 0.8rem;
        border-bottom: 1px solid #f2f2f2;
        border-top: 1px solid #dcdcdc;
    }

    .sort_view .table {
        height: 100%;
    }

    .price_img {
        width: 24px;
        height: 24px;
        padding: 8px;
    }

    .list{
        position: absolute;
        bottom: 0rem;
        top: 2.48rem;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
</style>
