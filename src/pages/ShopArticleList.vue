<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">今日头条</p>
        </div>
        <div class="wrapper">
            <div class='pad_10 txt_center f28' v-if="list.length<1">暂无相关新闻~</div>
            <div class="list">
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <div v-for="(item,index) in list" :key="index">
                        <div
                                :data-articleId="item.articleId"
                                @click="go"
                        >
                            <div  class='pad_20 border_b all table bgfff'>
                                <div class='td'>
                                    <div class='mar_b20 txt_one f28'>{{item.title}}</div>
                                    <div class='f12 c999'>
                                        <div class='line_h4 f24'>{{item.brief}}</div>
                                    </div>
                                </div>
                                <div class='td news_img txt_right f0' v-if="item.imgUrl">
                                    <img :onerror="errorUserPhoto" :src="sourceUrlShop+item.imgUrl">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pad_10 txt_center">{{loadTxt}}</div>
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
                list:[
                    {"articleId":800,"categoryId":9,"articleType":null,"articleCode":null,"title":"情人节来了，多用户商城系统营销活动怎么做?","brief":"又到了一年一度情侣们甜蜜、单身狗流泪的2.14情人节了，当然也是很多多用户商城系统利用情人节专题促销赚钱的日子，尤其是一些化妆品、服装、巧克力、礼品这些商品，情人节营销能够显著的提升销量。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012216091696443638.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516608694000,"updateTime":1516608694000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":799,"categoryId":9,"articleType":null,"articleCode":null,"title":"怎样做好B2B2C商城系统招商工作","brief":"招商入驻收取商户费用是B2B2C商城系统的一个重要盈利部分，而且做好招商工作才能不断壮大B2B2C商城系统的规模，提升平台竞争力，同时在平台内部也能够形成更丰富的盈利模式。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012216065181487085.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516608486000,"updateTime":1516608486000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":797,"categoryId":9,"articleType":null,"articleCode":null,"title":"多用户商城系统提高人气好方法——积分商城系统","brief":"多用户商城系统的人气都是经过长久以来的会员营销积攒下来的，积分商城系统兑换礼品或者购物抵现的活动一直以来在众多营销活动中的效果都是数一数二的，所以很多企业在开发多用户商城系统时都会设计积分商城系统。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215562434546962.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516607948000,"updateTime":1516607948000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":796,"categoryId":9,"articleType":null,"articleCode":null,"title":"移动互联网时代下的微信商城开发更具优势","brief":"随着互联网技术的不断发展，手机、平板等移动设备的广泛应用，传统互联网时代已经不知不觉的过度到移动互联网时代。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215515531537347.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516607666000,"updateTime":1516607666000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":795,"categoryId":9,"articleType":null,"articleCode":null,"title":"B2C商城系统或成互联网+时代下品牌发展的最佳模式","brief":"作为新兴的技术和传播媒介，互联网为企业宣传推广、渠道建立和沟通方式等方面带来了全新的转变，为企业品牌塑造、品牌发展带来新机会，同时还可以利用互联网的大数据实现品牌自我监督。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215452313787548.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516607414000,"updateTime":1516607414000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":794,"categoryId":9,"articleType":null,"articleCode":null,"title":"社会化媒体营销对多用户商城系统产生的影响","brief":"社会化媒体营销又被称为社会化营销，是利用社会化网络媒体来进行营销的一种方式，主要工具包括微博、微信、博客、在线社区等自媒体平台或组织媒体平台。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215323011011373.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516606580000,"updateTime":1517392927000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":793,"categoryId":9,"articleType":null,"articleCode":null,"title":"新零售趋势下的O2O商城系统如何运营","brief":"新零售O2O商城系统是拥有合作加盟店、同城社区资源、连锁直营店的商家，利用互联网进行推广销售产品的一种电子商务模式，线上交易线下体验受到很多消费者的欢迎。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215265478594486.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516606195000,"updateTime":1516606195000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":792,"categoryId":9,"articleType":null,"articleCode":null,"title":"现阶段生鲜O2O商城系统如何运营以维持可持续发展","brief":"传统企业拥抱互联网、移动互联网已成大势所趋，传统产业和新兴产业之间的融合更加快速的发展。\n自从O2O理念进入互联网，很多的商业机会也随之涌现，例如拥有广阔市场和美好发展前景的生鲜电商。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215110640946633.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516605470000,"updateTime":1517392833000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":791,"categoryId":9,"articleType":null,"articleCode":null,"title":"汽配行业电商转型怎么做?汽配电商分析","brief":"汽车产业作为我国经济的重要支柱，近年来一直保持着快速发展，国内的汽车保有量规模迅速攀升。巨大的汽车保有量同时也为汽车后市场带来了广阔的发展前景。随着互联网+的不断推进。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215415995050325.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516604200000,"updateTime":1517392813000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":790,"categoryId":9,"articleType":null,"articleCode":null,"title":"农村电商多用户商城系统面临的挑战和机遇","brief":" 近年来农村电商一直是人们讨论的热点话题，且呈现蓬勃发展之势。我们认为，农村电商的发展不仅仅是电商市场在农村的渗透这样的优质商品引入，更需要农村发展起自己的电商事业。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012216171248127342.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516008159000,"updateTime":1517392779000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null}
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
            // 页面跳转
            go(e){

                console.log(e)
                const {
                    articleId
                } = e.currentTarget.dataset
                this.$push({
                    path: '/ShopArticleDetail',
                    query: {
                        articleId: articleId
                    }
                })



            },
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
    .news_img {
        width: 1.8rem;
        padding-left: 0.2rem;
    }

    .news_img img {
        width: 1.6rem;
        height: 1.3rem;
    }

    .line_h4 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }

    .content >>> p{
        background: #ffffff;
        text-indent: -0.12rem;
        line-height: 0.48rem;
    }

    .content >>> img{
        width: 100%;
        margin: 0.1rem;
    }
    .list{
        position: absolute;
        bottom: 0rem;
        top: 0.88rem;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }

</style>
