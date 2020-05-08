<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">设置交易密码</p>
        </div>
        <div class="FORM">
            <!--            <div class="INPUT" v-focus>-->
            <!--                <div class="account_icon">手机号</div>-->
            <!--                <input-->
            <!--                        type="text"-->
            <!--                        v-validate:tel="validateOtions.tel"-->
            <!--                        :placeholder="$t('请输入手机号')"-->
            <!--                        v-model="formData.tel"-->
            <!--                >-->
            <!--            </div>-->
            <!--            <div class="INPUT" v-focus style="position: relative">-->
            <!--                <div class="code_icon">验证码</div>-->
            <!--                <input-->
            <!--                        type="text"-->
            <!--                        v-validate:captcha="validateOtions.captcha"-->
            <!--                        :placeholder="$t('请输入验证码')"-->
            <!--                        v-model="sureCode"-->
            <!--                >-->
            <!--                <div-->
            <!--                        v-if="show"-->
            <!--                        class="sendCaptcha"-->
            <!--                        @click="toSendCaptcha"-->
            <!--                >{{captchaTips}}</div>-->
            <!--                <div-->
            <!--                        v-if="!show"-->
            <!--                        class="sendCaptcha"-->
            <!--                >{{count}} S</div>-->
            <!--            </div>-->
            <div class="INPUT" v-focus>
                <div class="pwd_icon">交易密码</div>
                <input
                        type="password"
                        v-validate:pwd="validateOtions.pwd"
                        :placeholder="$t('请输入新密码')"
                        v-model="formData.pwd"
                >
            </div>
            <div class="INPUT" v-focus>
                <div class="pwd_icon">确认交易密码</div>
                <input
                        type="password"
                        v-validate:confirmPwd="validateOtions.confirmPwd"
                        :placeholder="$t('请确认新密码')"
                        v-model="formData.confirmPwd"
                >
            </div>


        </div>

        <div
                class="button LONGBTN"
                @click="toValidate"
        >确认</div>


        <nlayer
                :maskCancel="true"
                maskBackgroundColor="rgba(0,0,0,0.4)"
                :visible="codeVisible"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
        >
            <div class="DIALOG">
                <div class="DIALOG_container">
                    <div class="clearfix">
                        <input
                                type=""
                                name=""
                                id=""
                                value=""
                                class="code_input fl"
                                placeholder="输入图中验证码"
                                v-model="enterCode"
                        />
                        <img v-bind:src="code" alt="" class="code_img fr"/>
                    </div>

                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closeCodeDig'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='toSureCode'
                    >确定</div>
                </div>

            </div>
        </nlayer>


        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1200"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>
</template>
<script>

    import { mapGetters, mapActions } from 'vuex'
    import Nlayer from '@/components/Nlayer'

    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    const TIME = 60
    export default {
        name:'NewFind',
        components: {
            Nlayer
        },
        data(){
            return{
                tips: '',
                tipsVisible: false,
                loadingVisible: false,
                codeVisible:false,
                sureCode:'',
                token:JSON.parse(localStorage.getItem('userinfo')).customerToken,
                formData: {
                    tel:JSON.parse(localStorage.getItem('userinfo')).phone,
                    captcha: '',
                    pwd: '',
                    confirmPwd: ''
                },
                captchaToken: '',
                enterCode:'',
                sended: false,
                time: TIME,
                code:'',
                show: true,
                count: '',
                timer: null,
                userid:JSON.parse(localStorage.getItem('userinfo'))
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            captchaTips(){
                if( this.sended ){
                    return this.time >= 10 ? this.time+this.$t('register.register_seconds')+this.$t('register.register_again') : '0'+this.time +this.$t('register.register_seconds')+this.$t('register.register_again')
                } else {
                    return this.$t('register.register_getCode')
                }
            },
            validateOtions(){
                // 验证格式及错误信息
                const res = {
                    account: {
                        rules:{
                            required: true,
                            account: true
                        },
                        msg:{
                            required: this.$t('validate.validate_account'),
                            account: this.$t('validate.validate_accountText')
                        }
                    },
                    tel: {
                        rules:{
                            required: true,
                            phone: true
                        },
                        msg:{
                            required: this.$t('validate.validate_phone'),
                            phone: this.$t('validate.validate_phoneFormat')
                        }
                    },
                    captcha: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('validate.validate_code')
                        }
                    },

                    pwd: {
                        rules:{
                            required: true,
                            sPassword: true
                        },
                        msg:{
                            required: "请输入要设置的交易密码",
                            sPassword: this.$t('validate.validate_passwordFormat')
                        }
                    },
                    confirmPwd: {
                        rules:{
                            required: true,
                            sPassword: true
                        },
                        msg:{
                            required: "请确认交易密码",
                        }
                    }

                }

                return res
            }
        },
        methods:{
            ...mapActions(['setUserinfo']),
            ...mapGetters(['getUserinfo']),
            getCode(){
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            },
//             // 点击出现弹窗
//             toSendCaptcha(){
//                 const {
//                     tel
//                 } = this.formData
//                 var that = this
//
//                 if( tel == '' ){
//                     this.showTips('手机号不能为空')
//                     return
//                 }
//                 var rex = /^1[23456789]\d{9}$/;
//                 if( !rex.test(tel) ){
//                     this.showTips('手机号格式不正确')
//                     return
//                 }
//
//                 // 点击确定按钮 请求获取验证码的接口 send_dx
//                 jsonAjax.post(urlUtil.getApiUrl("send_dx"), {
//                     phone:tel,
//                     securityCodeImage:that.enterCode
//                 }, function (result) {
//                     console.log(result)
//                     if( result.returnCode == 0 ){
//                         that.showTips(result.message)
//                     }
//                     if( result.returnCode == 1 ){
//                         that.showTips(result.message)
//                         // 验证码
//                         that.sureCode = result.resultData.verification
//                         console.log(that.sureCode)
//                         // 关闭弹窗
//                         that.codeVisible=false
//
//                         // 倒计时开始
//                         that.getCode()
// //                  	that.sended = true
//                     }
//
//
//                 })
//
//
//             },
            //
            toClick(){
                console.log('123')
            },
            // 倒计时
            setTimer(){
                const timer = setTimeout(() => {
                    if( this.time <= 0 ){
                        clearTimeout(timer)
                        this.sended = false
                        this.time = TIME
                        return
                    }
                    this.time -= 1
                    this.setTimer()
                }, 1000)
            },
            // 去验证格式
            toValidate(){
                const pass = this.$validator.checkAll()


                if( pass ){
                    // 数据格式通过验证
                    this.submit()
                } else {
                    // 没通过验证
                    const errors = this.$validator.errors.errors
                    const errorMsg = errors[0].msg

                    this.showTips(errorMsg)
                }
            },

            // 提交信息
            submit(){
                const {
                    tel,
                    pwd,
                    confirmPwd,
                    captcha
                } = this.formData
                var that = this
                console.log(that.formData.pwd,that.formData.confirmPwd)
                if (that.formData.pwd==that.formData.confirmPwd){
                    // 请求更改密码的接口 find_pass
                    jsonAjax.post(urlUtil.getApiUrl('savePayPassword'),{
                        customerToken:that.token,
                        payPassword:pwd,
                        customerId:that.userid.customerId,
                    },function(result){
                        console.log(result)
                        if( result.returnCode == 0 ){
                            that.showTips(result.message)
                        }
                        if( result.returnCode == 1 ){
                            that.showTips(result.message)
                            localStorage.setItem('transPass', "true")
                            that.setUserinfo({
                                ...that.userinfo,
                                transPwd: true
                            })
                            that.$router.go(-1);

                        }
                    })
                } else {
                    this.showTips("两次密码不一致")
                }


            },

            // 检测图片验证码
            toSureCode(){

            },
            // 关闭获取验证码弹窗
            closeCodeDig(){
                this.codeVisible=false
            },
            // 打开消息提示
            showTips(msg, refresh=true){
                this.tips = msg
                this.tipsVisible = true

            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
        }
    }
</script>
<style scoped>
    .page{
        background: #FFF;
    }
    .HEADER{
        background: #FFF;
    }
    .HEADER_LEFT{
        text-align: left;
        width: 100%;
        padding-left: 0.9rem;
        line-height: 0.88rem;
        color: #203395;
        font-size: 0.26rem;
    }
    .new_logo{
        width: 1.5rem;
        height: 1.5rem;
        background: #203395;
        margin:1rem auto 0;
        border-radius: 0.2rem;
    }
    .logo_txt{
        text-align: center;
        line-height: 0.9rem;
        font-size: 0.34rem;
        color: #203395;
        font-weight: bold;
    }
    .FORM{
        margin-top: .88rem;
        padding:0.45rem;
    }
    .sendCaptcha{
        position: absolute;
        right:0rem;
        text-align: center;
        width: 2rem;
        font-size: 0.26rem;
        padding-right: 0.2rem;border-radius: 0;
        padding-left: 0.2rem;
        border-left: 1px solid #203395;
        color: #203395;
        top: .3rem;
        z-index: 99999;
    }


    .account_icon{
        padding-left: .3rem;
        width: 1.7rem;
        color: #333;
        font-size: .26rem;
        /*background: url('../static/images/video_icon/icon_tel.png')no-repeat center center / cover;*/
    }
    .pwd_icon{
        padding-left: .3rem;
        width: 2rem;
        color: #333;
        font-size: .26rem;

        /*background: url('../static/images/video_icon/icon_pwd.png')no-repeat center center / cover;*/
    }
    .code_icon{
        padding-left: .3rem;
        width: 1.7rem;
        color: #333;
        font-size: .26rem;

        /*background: url('../static/images/video_icon/icon_code.png')no-repeat center center / cover;*/
    }
    .DIALOG_container{
        padding: 0.3rem;
    }
    .code_input{
        width: 3rem;
        height: 0.9rem;
        padding: 0 0.3rem;
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.9rem;
    }

    .code_img{
        width: 2rem;
        height: 0.9rem;
    }
    .button{
        margin-top: 6.2rem;
        margin-bottom: 1rem;
    }
</style>
