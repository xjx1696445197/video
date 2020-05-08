<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">优品团购</p>
        </div>
        <div class="wrapper">
            <div class="kind_scroll bgfff all">
                <div class='table_x h100 f24 txt_center'>
                    <div class='td ver_mid' :class='tabIndex==-1?"cur":""' v-on:click='tabExchange(-1)'>
                        <div class='txt_one f28'>全部</div>
                    </div>
                    <div v-for="(item,index) in kindList" class='td ver_mid' :class='index==tabIndex?"cur":""' v-on:click='tabExchange(index)'>
                        <div class='txt_one f28'>{{item.sortName}}</div>
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
                            <router-link :to="{name:'productSDetail',params:{type:2,pId:item.tuanId}}" class='all pad_20 border_b bgfff table'>
                                <div class='w1 td'>
                                    <div class='img_div f0 img_box img_big1 bgfff'>
                                        <div class='img_cnt'>
                                            <img class='img' :onerror="errorUserPhoto" :src="sourceUrlShop+item.tuanImageUrl">
                                        </div>
                                        <!-- <view class='p_notice txt_center pad_b10 pad_t10 f12'>已抢完</view> -->
                                    </div>
                                </div>
                                <div class='td'>
                                    <div class='txt_two txt_h2 pad_l10 mar_b100'>{{item.title}}</div>
                                    <div class=' pad_l10 table all'>
                                        <div class='td wrem5'>
                                            <div class='czt'>￥{{item.price}}</div>
                                            <div class='txt_xx c999 f10'>￥{{item.salesPrice}}</div>
                                        </div>
                                        <div class='td txt_right'>
                                            <div class='buy_btn'>{{item.openGroupCount}}人团</div>
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
                    {"tuanProductTypeId":1,"sortName":"电脑办公","sortCode":1,"parentId":0,"loadType":"1","createTime":null},{"tuanProductTypeId":8,"sortName":"大家团","sortCode":1,"parentId":0,"loadType":"1","createTime":null},{"tuanProductTypeId":2,"sortName":"服装鞋帽","sortCode":2,"parentId":0,"loadType":"1","createTime":null},{"tuanProductTypeId":3,"sortName":"运动户外","sortCode":3,"parentId":0,"loadType":"1","createTime":null},{"tuanProductTypeId":4,"sortName":"家用电器","sortCode":4,"parentId":0,"loadType":"1","createTime":null},{"tuanProductTypeId":5,"sortName":"个护化妆","sortCode":5,"parentId":0,"loadType":"1","createTime":null},{"tuanProductTypeId":6,"sortName":"食品饮料","sortCode":6,"parentId":0,"loadType":"1","createTime":null},{"tuanProductTypeId":7,"sortName":"手机数码","sortCode":7,"parentId":0,"loadType":"1","createTime":null},{"tuanProductTypeId":10,"sortName":"热销商品","sortCode":10,"parentId":0,"loadType":"1","createTime":1508813667000}
                ],
                proList:[
                    {"tuanId":143,"productId":3405,"shopInfoId":72,"tuanProductTypeId":8,"tuanImageUrl":"shop/image/group/20180123/2018012311313022885951.jpg","title":"钢笔礼盒","price":0.01,"introduction":"钢笔礼盒","tuanPeriod":999,"createTime":1516678309000,"beginTime":1516678312000,"endTime":1602991912000,"openGroupCount":7,"state":1,"bought":16,"qrCode":"image_shopInfo/image/group/20180123/2018012311315257043133.png","salesPrice":"38.00","sku":null,"specificationNames":{}},{"tuanId":142,"productId":2980,"shopInfoId":596,"tuanProductTypeId":10,"tuanImageUrl":"shop/image/group/20180123/2018012311300150943163.jpg","title":"水星家纺四件套","price":766.00,"introduction":"水星家纺四件套","tuanPeriod":999,"createTime":1516678223000,"beginTime":1516678226000,"endTime":1602991826000,"openGroupCount":100,"state":1,"bought":1,"qrCode":"image_shopInfo/image/group/20180123/2018012311302650757643.png","salesPrice":"800.00","sku":null,"specificationNames":{"颜色":"裸婚时代","尺寸":"大1.8m-2m床适用"}},{"tuanId":141,"productId":2938,"shopInfoId":596,"tuanProductTypeId":8,"tuanImageUrl":"shop/image/group/20180123/2018012311282167265016.jpg","title":"童话森林四件套","price":488.00,"introduction":"童话森林四件套","tuanPeriod":999,"createTime":1516678140000,"beginTime":1516678144000,"endTime":1602991744000,"openGroupCount":100,"state":1,"bought":0,"qrCode":"image_shopInfo/image/group/20180123/2018012311290433540815.png","salesPrice":"300.00","sku":null,"specificationNames":{"颜色":"向阳花开","尺寸":"大1.8m-2m床适用"}},{"tuanId":140,"productId":3266,"shopInfoId":27,"tuanProductTypeId":5,"tuanImageUrl":"shop/image/group/20180123/2018012311260760428552.jpg","title":"男士香水","price":578.00,"introduction":"古龙水","tuanPeriod":999,"createTime":1516677992000,"beginTime":1516677993000,"endTime":1602991593000,"openGroupCount":100,"state":1,"bought":0,"qrCode":"image_shopInfo/image/group/20180123/2018012311263392485204.png","salesPrice":"599.00","sku":null,"specificationNames":{}},{"tuanId":139,"productId":3260,"shopInfoId":27,"tuanProductTypeId":8,"tuanImageUrl":"shop/image/group/20180123/2018012311251383059306.jpg","title":"阿玛尼手表","price":1799.00,"introduction":"阿玛尼手表","tuanPeriod":999,"createTime":1516677934000,"beginTime":1516677936000,"endTime":1602991536000,"openGroupCount":100,"state":1,"bought":2,"qrCode":"image_shopInfo/image/group/20180123/2018012311253634191656.png","salesPrice":"1849.00","sku":null,"specificationNames":{}},{"tuanId":138,"productId":3256,"shopInfoId":27,"tuanProductTypeId":5,"tuanImageUrl":"shop/image/group/20180123/2018012311242575419964.jpg","title":"小胖丁","price":629.00,"introduction":"小胖丁","tuanPeriod":999,"createTime":1516677889000,"beginTime":1516677892000,"endTime":1602991492000,"openGroupCount":100,"state":1,"bought":1,"qrCode":"image_shopInfo/image/group/20180123/2018012311245211382193.png","salesPrice":"669.00","sku":null,"specificationNames":{}},{"tuanId":137,"productId":3202,"shopInfoId":321,"tuanProductTypeId":7,"tuanImageUrl":"shop/image/group/20180123/2018012311224126733863.jpg","title":"全面屏手机","price":8200.00,"introduction":"全面屏手机","tuanPeriod":999,"createTime":1516677797000,"beginTime":1516677799000,"endTime":1602991399000,"openGroupCount":100,"state":1,"bought":0,"qrCode":"image_shopInfo/image/group/20180123/2018012311231984968866.png","salesPrice":"8388.00","sku":null,"specificationNames":{"颜色":"白色","尺寸":"6"}},{"tuanId":136,"productId":3244,"shopInfoId":321,"tuanProductTypeId":10,"tuanImageUrl":"shop/image/group/20180123/2018012311201965613024.jpg","title":"戒指","price":9699.00,"introduction":"戒指","tuanPeriod":999,"createTime":1516677659000,"beginTime":1516677702000,"endTime":1602991302000,"openGroupCount":100,"state":1,"bought":0,"qrCode":"image_shopInfo/image/group/20180123/2018012311214285710127.png","salesPrice":"9763.00","sku":null,"specificationNames":{}},{"tuanId":135,"productId":3208,"shopInfoId":321,"tuanProductTypeId":7,"tuanImageUrl":"shop/image/group/20180123/2018012311191695510985.jpg","title":"vivoX20","price":2899.00,"introduction":"vivoX20","tuanPeriod":999,"createTime":1516677589000,"beginTime":1516677591000,"endTime":1602991191000,"openGroupCount":100,"state":1,"bought":0,"qrCode":"image_shopInfo/image/group/20180123/2018012311195182893221.png","salesPrice":"2998.00","sku":null,"specificationNames":{"颜色":"红色","尺寸":"6"}},{"tuanId":134,"productId":3241,"shopInfoId":321,"tuanProductTypeId":3,"tuanImageUrl":"shop/image/group/20180123/2018012311135575711236.jpg","title":"家用跑步机","price":1999.00,"introduction":"家用跑步机","tuanPeriod":900,"createTime":1516677258000,"beginTime":1516677260000,"endTime":1594437260000,"openGroupCount":100,"state":1,"bought":0,"qrCode":"image_shopInfo/image/group/20180123/2018012311142021635448.png","salesPrice":"2199.00","sku":null,"specificationNames":{}}
                ],
                loadTxt:'全部已加载'
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
        background: #ff0036;
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
