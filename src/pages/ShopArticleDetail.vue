<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">新闻详情</p>
        </div>
        <div class="wrapper">
            <div class="list">
                <div class='pad_20 bgfff f34'>
                    <div class='mar_b20' style='font-weight:bold;'>{{news_detial.title}}</div>
                    <div class='f24 c999'>
                        <div class='inblock'>{{news_detial.dtime}}</div>
                    </div>
                </div>

                <div v-html="news_detial.content" class='content pad_10 bgfff all'></div>
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
                    {"articleId":800,"categoryId":9,
                        dtime:'2018-01-22 16:11',
                        "articleType":null,"articleCode":null,"title":"情人节来了，多用户商城系统营销活动怎么做?",
                        "brief":"又到了一年一度情侣们甜蜜、单身狗流泪的2.14情人节了，当然也是很多多用户商城系统利用情人节专题促销赚钱的日子，尤其是一些化妆品、服装、巧克力、礼品这些商品，情人节营销能够显著的提升销量。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012216091696443638.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516608694000,"updateTime":1516608694000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":799,"categoryId":9,"articleType":null,"articleCode":null,"title":"怎样做好B2B2C商城系统招商工作","brief":"招商入驻收取商户费用是B2B2C商城系统的一个重要盈利部分，而且做好招商工作才能不断壮大B2B2C商城系统的规模，提升平台竞争力，同时在平台内部也能够形成更丰富的盈利模式。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012216065181487085.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516608486000,"updateTime":1516608486000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":797,"categoryId":9,"articleType":null,"articleCode":null,"title":"多用户商城系统提高人气好方法——积分商城系统","brief":"多用户商城系统的人气都是经过长久以来的会员营销积攒下来的，积分商城系统兑换礼品或者购物抵现的活动一直以来在众多营销活动中的效果都是数一数二的，所以很多企业在开发多用户商城系统时都会设计积分商城系统。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215562434546962.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516607948000,"updateTime":1516607948000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":796,"categoryId":9,"articleType":null,"articleCode":null,"title":"移动互联网时代下的微信商城开发更具优势","brief":"随着互联网技术的不断发展，手机、平板等移动设备的广泛应用，传统互联网时代已经不知不觉的过度到移动互联网时代。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215515531537347.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516607666000,"updateTime":1516607666000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":795,"categoryId":9,"articleType":null,"articleCode":null,"title":"B2C商城系统或成互联网+时代下品牌发展的最佳模式","brief":"作为新兴的技术和传播媒介，互联网为企业宣传推广、渠道建立和沟通方式等方面带来了全新的转变，为企业品牌塑造、品牌发展带来新机会，同时还可以利用互联网的大数据实现品牌自我监督。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215452313787548.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516607414000,"updateTime":1516607414000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":794,"categoryId":9,"articleType":null,"articleCode":null,"title":"社会化媒体营销对多用户商城系统产生的影响","brief":"社会化媒体营销又被称为社会化营销，是利用社会化网络媒体来进行营销的一种方式，主要工具包括微博、微信、博客、在线社区等自媒体平台或组织媒体平台。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215323011011373.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516606580000,"updateTime":1517392927000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":793,"categoryId":9,"articleType":null,"articleCode":null,"title":"新零售趋势下的O2O商城系统如何运营","brief":"新零售O2O商城系统是拥有合作加盟店、同城社区资源、连锁直营店的商家，利用互联网进行推广销售产品的一种电子商务模式，线上交易线下体验受到很多消费者的欢迎。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215265478594486.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516606195000,"updateTime":1516606195000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":792,"categoryId":9,"articleType":null,"articleCode":null,"title":"现阶段生鲜O2O商城系统如何运营以维持可持续发展","brief":"传统企业拥抱互联网、移动互联网已成大势所趋，传统产业和新兴产业之间的融合更加快速的发展。\n自从O2O理念进入互联网，很多的商业机会也随之涌现，例如拥有广阔市场和美好发展前景的生鲜电商。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215110640946633.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516605470000,"updateTime":1517392833000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":791,"categoryId":9,"articleType":null,"articleCode":null,"title":"汽配行业电商转型怎么做?汽配电商分析","brief":"汽车产业作为我国经济的重要支柱，近年来一直保持着快速发展，国内的汽车保有量规模迅速攀升。巨大的汽车保有量同时也为汽车后市场带来了广阔的发展前景。随着互联网+的不断推进。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012215415995050325.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516604200000,"updateTime":1517392813000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null},{"articleId":790,"categoryId":9,"articleType":null,"articleCode":null,"title":"农村电商多用户商城系统面临的挑战和机遇","brief":" 近年来农村电商一直是人们讨论的热点话题，且呈现蓬勃发展之势。我们认为，农村电商的发展不仅仅是电商市场在农村的渗透这样的优质商品引入，更需要农村发展起自己的电商事业。","content":null,"author":"admin","imgUrl":"cms/image/article/20180122/2018012216171248127342.jpg","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":null,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516008159000,"updateTime":1517392779000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":null}
                ],
                loadTxt:'全部已加载',
                news_detial:{
                    dtime:'2018-01-22 16:11',
                    "articleId":800,"categoryId":9,"articleType":null,"articleCode":"","title":"情人节来了，多用户商城系统营销活动怎么做?","brief":"又到了一年一度情侣们甜蜜、单身狗流泪的2.14情人节了，当然也是很多多用户商城系统利用情人节专题促销赚钱的日子，尤其是一些化妆品、服装、巧克力、礼品这些商品，情人节营销能够显著的提升销量。","content":"<p><span style=\"font-size:14px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;又到了一年一度情侣们甜蜜、单身狗流泪的2.14情人节了，当然也是很多多用户商城系统利用情人节专题促销赚钱的日子，尤其是一些化妆品、服装、巧克力、礼品这些商品，情人节营销能够显著的提升销量。京东、天猫这些大型电商平台现在已经有很多情人节的文案和活动了，<strong>这个情人节，<a href=\"http://www.shopjsp.com/htm/shopjsp/cpys.html\" target=\"_blank\">多用户商城系统</a>营销活动怎么做?</strong></span></p><p><br/></p><p><span style=\"font-size:14px;\"></span></p><p><span style=\"font-size:14px;\"><strong><span style=\"font-size:16px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多用户商城系统情人节营销常见方案</span></strong></span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、订单满额免运费，以包邮的形式暗示消费者购买的产品性价比提高了;2、订单满额打折/立减/赠品，一强烈的折扣诱惑消费者购买更多的商品提高客单价;3、订单满额加价换购，消费达到指定金额后加N元以低廉的价格换购商品;4、预购优惠券，以低价购买高价优惠券，例如20元购50元优惠券，20抵50的心理能够保证活动当天的效果;5、消费送积分，配合积分商城换购适合情人节的礼品。</span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\"><strong><span style=\"font-size:16px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多用户商城系统情人节营销注意事项</span></strong></span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一，促销时限</strong></span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在距离情人节还有几天时间，但是电商时代速度才是一切，并且从消费者下单到收到商品中间还有物流配送的时间，所以现在这个时间如果还不开始进行促销宣传就有些迟了。而且不只是情人节营销，所有营销活动都应该有一个促销时间，确定一个固定的时间，这样才能更好的刺激消费者购物。→<a href=\"http://www.shopjsp.com/htm/shopjsp/qyzx_detail/974.html\" target=\"_blank\"> 商城网站节假日营销如何开展?</a></span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二，促销特点</strong></span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一直以来很多多用户商城系统的促销都是“一成不变”的，面对铺天盖地的促销广告，消费者需要的是让人耳目一新的、有特点的促销活动。企业可以从促销活动的形式上入手，对促销玩法进行创新，最好能形成消费者自发的宣传，也可以从文案上夺人眼球。再加上实惠的促销活动，让多用户商城系统更得人心。</span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第三，促销氛围</strong></span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;良好的促销氛围能够刺激消费者的购物欲望，对于情人节营销活动来说，比起突出产品功能来讲更重要的是突出送礼物的心意。多用户商城系统可以针对情人节买东西大都为了送礼物的特性，为消费者提供更多的增值服务。例如提供更加精美的商品包装等。做本土化多用户商城系统的，如果有配送方面的能力可以提供定时送达的服务，相信很多消费者都有这样的需求。</span></p><p><span style=\"font-size:14px;\"> </span></p><p><span style=\"font-size:14px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多用户商城系统情人节营销想要取胜就要有创意的主题和符合消费者需求的促销形式，这都离不开内容的设计。好的内容能够提高营销活动的传播速度和价值，而真正要成功靠的就是人们常说的——走心营销。</span></p><p><span style=\"font-size:14px;\"><strong><br/></strong></span><br/></p>","author":"admin","imgUrl":"cms/image/article/20190731/2019073110183105295386.png","imgTrueName":null,"outUrl":null,"seoTitle":null,"keywords":null,"clickCount":1,"sortCode":null,"isDeal":null,"isEssence":null,"isPass":null,"isOpenDiscuss":null,"isShow":null,"createTime":1516608694000,"updateTime":1564539519000,"publishUser":null,"modifyUser":null,"fpId":null,"fpName":null,"spId":null,"spName":null,"integral":null,"topCount":null,"treadCount":null,"showType":null,"videoUrl":0}
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
