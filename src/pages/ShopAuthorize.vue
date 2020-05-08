<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_CLOSE" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('aboutUs.aboutUs_authorize')}}</p>
        </div>
        <div class="wrapper">
            <div class="logo_wrapper clearfix">
                <div class="logo fl">
                    <div class="logoImg"></div>
                    <div class="logoTxt">HALLE TOKEN</div>
                </div>
                <div class="fl">
                    <div class="shop_right"></div>
                </div>
                <div class="logo fl">
                    <div class="shopImg"></div>
                    <div class="logoTxt">HALLE MALL</div>
                </div>
            </div>

            <div class="content">
                <div class="authorize_txt1">同意将<span class="authorize_txt3" style="padding: 0 0.05rem">HALLE TOKEN</span>
                    的以下信息授权给<span class="authorize_txt3" style="padding-left: 0.05rem">HALLE MALL</span></div>
                <div class="authorize_txt2" style="margin-left:0.2rem;">获取您的公开信息(手机号、昵称、头像等)</div>
                <div class="authorize_txt2" style="margin-left:0.2rem;">获取您的身份信息(交易密码等)为商城的支付密码</div>
                <div class="authorize_txt2" style="margin-left:0.2rem;">获取您的资产信息(USDT、HALE等)兑换积分</div>
                <div class="forget">
                    <div class="provision">
                        <div class="checkbox"
                             :class="[checked ? 'active' : '']"
                             @click="provisionSelect"
                        ></div>
                        <p class="provision_txt1">同意并阅读</p>
                        <p class="provision_txt2" @click="toUsingAgreement">《用户协议》</p>
                        <p class="provision_txt2" @click="toPrivacyAgreement">《隐私协议》</p>
                    </div>
                </div>

            </div>
            <div
                    class="SHOPLONGBTN LONGBTN"
                    style="position: absolute;bottom: 1rem;left: 50%;transform: translateX(-50%)"
                    @click="toValidate"
                    :class="[checked ? 'active' : '']"
            >授权并登录</div>
        </div>

        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1500"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { mapGetters, mapActions } from 'vuex'
    import Nlayer from '@/components/Nlayer'

    export default {
        name: "ShopAuthorize",
        components: {
            Nlayer
        },
        data(){
            return {
                checked:false,
                tips: '',
                tipsVisible: false,
            }
        },
        mounted() {
            console.log()
            this.isLogin()
        },
        computed: {
            curLang(){
                return this.getLang() == 'zh-CN' ? true : false
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },

        },
        methods: {
            ...mapActions(['setUserinfo']),
            ...mapGetters(['getUserinfo','getLang' ]),
            // 检测是否登录
            isLogin(){
                if( this.userinfo ){

                }
            },
            // 获取用户是否登陆过商城 http://39.106.90.111:8983/js/users/updateAuthorize?userId=10007
            getIsAuthen(){
                var that = this
                that.$http.get('js/users/updateAuthorize',{
                    userId:this.userId
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        console.log(res)
                        // return
                        this.showTips(res.message)
                        // 设置最新的用户信息
                        this.setUserinfo({
                            ...this.userinfo,
                            authorize: 2
                        })

                        setTimeout(function(){
                        //
                        //     this.$router.push({name:"Shop"});

                            that.$push({
                                path: '/shop'
                            })
                            if (localStorage.getItem("ponename")==null){
                                localStorage.setItem("ponename",this.userName);
                                setTimeout(function(){
                                    location.reload(true)
                                }, 100);
                            }else if (localStorage.getItem("ponename")==this.userName){

                            }else {
                                localStorage.setItem("ponename",this.userName);
                                setTimeout(function(){
                                    location.reload(true)
                                }, 100);
                            }
                        },600)
                    }
                })

            },
            // 勾选使用条款
            provisionSelect(){
                this.checked = !this.checked
            },
        //
            toUsingAgreement(){
                this.$push({
                    path: '/ShopUserAgreement'
                })
            },
            toPrivacyAgreement(){
                this.$push({
                    path: '/shopPrivacyAgreement'
                })
            },

        //
            toValidate(){
                if( !this.checked ){
                    this.showTips(this.$t('register.register_tip1'))
                    return
                }
                this.getIsAuthen()
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
            }
        }

    }
</script>

<style scoped>
    .FORM{
        margin-top: 0.3rem;
        padding: 0 0.8rem;

    }
    .inputBox_sub{
        margin-top: 0.3rem;
        position: relative;
        height: 0.9rem;
    }
    .wrapper{
        padding: 0.88rem 0.3rem;
    }
    .logo_wrapper{
        border-bottom: 1px solid #eee;
        padding: 0.3rem 0.3rem 0.5rem;
    }
    .logo{
        width: 45%;
    }
    .logoImg{
        margin-top: 0.5rem;
        background: url("../static/images/shop/HALLE TOKEN.png")no-repeat center center /cover;
        width: 1.2rem;
        height: 1.2rem;
        margin-left: auto;
        margin-right: auto;
    }
    .shopImg{
        margin-top: 0.5rem;
        background: url("../static/images/shop/HALLE MALL.png")no-repeat center center /cover;
        width: 1.2rem;
        height: 1.2rem;
        margin-left: auto;
        margin-right: auto;
    }
    .shop_right{
        margin-top: 0.8rem;
        background: url("../static/images/shop/shop_right.png")no-repeat center center /cover;
        width: 0.6rem;
        height: 0.42rem;
        margin-left: auto;
        margin-right: auto;

    }
    .logoTxt{
        font-size: 0.28rem;
        color:#E4811D;
        line-height: 0.5rem;
        text-align: center;
    }
    .authorize_txt1{
        font-size: 0.26rem;
        color:#333;
        line-height: 1rem;
    }
    .authorize_txt2{
        font-size: 0.26rem;
        color:#aaa;
        line-height: 0.9rem;
        padding-left: 0.2rem;
        position: relative;
    }
    .authorize_txt2:after{
        position: absolute;
        content: "";
        width: 0.07rem;
        height: 0.07rem;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #E4811D;
        border-radius: 100%;
    }
    .authorize_txt3{
        font-size: 0.26rem;
        color:#333;
        line-height: 1rem;
        font-weight: bold;
        /*padding: 0 0.1rem;*/
    }
    .content{
        padding: 0.4rem 0.1rem 0;
    }



    .button{
        margin-top: .5rem;
    }
    .forget{
        position: fixed;
        bottom: 2.5rem;
        left: 0.5rem;

        height: 0.4rem; align-items: center;
        display: flex;
        justify-content: space-between;
    }
    .provision{
        display: flex;
        height: 100%;
        align-items: center;
    }

    .checkbox{
        position: relative;
        width: 0.3rem;
        height: 0.3rem;
        box-sizing: border-box;
        /*border: 1px solid #dbdbdb;*/
        -webkit-border-radius: 0.02rem;
        -moz-border-radius: 0.02rem;
        border-radius: 0.02rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border:0.02rem solid #ccc;
    }
    .checkbox.active:after{
        display: block;
        border: none;
    }
    .checkbox:after{
        position: absolute;
        width: 100%;
        height: 100%;
        display: none;
        border: none;
        background: #e08222;
        background: url("../static/images/icon/select_agree.png") no-repeat center center / cover;
        content: '';

    }
    /*.checkbox{*/
        /*position: relative;*/
        /*width: 0.35rem;*/
        /*height: 0.35rem;*/
        /*box-sizing: border-box;*/
        /*border: 0.02rem solid #E5E5E5;*/
        /*-webkit-border-radius: 0.05rem;*/
        /*-moz-border-radius: 0.05rem;*/
        /*border-radius: 0.05rem;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
    /*}*/
    /*.checkbox.active:after{*/
        /*display: block;*/

    /*}*/
    /*.checkbox.active{*/
        /*border: 0.02rem solid #E4811D;*/
    /*}*/
    /*.checkbox:after{*/
        /*position: absolute;*/
        /*width: 60%;*/
        /*height: 60%;*/
        /*display: none;*/
        /*!**!*/
        /*content: '';*/
    /*}*/
    .provision_txt1{
        font-size: .26rem;
        color: #333;
        padding-left: .1rem;
    }
    .provision_txt2{
        font-size: .26rem;
        color: #e4811d;
    }
    .forget_txt{
        font-size: .26rem;
        color: #c8a76d;

    }
    input::-webkit-input-placeholder {
        color: #aaa;
    }
    .LONGBTN{
        background: #ccc;
    }

    .LONGBTN.active{
        background: #E4811D;
    }

</style>