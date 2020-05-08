<template>
    <div class="page">
        <div class="HEADER">
    <div class="HEADER_BACK" @click="this.$back"></div>
    <p class="HEADER_TITLE">{{title}}</p>
</div>
    <div class="wrapper">
        <div class="content">
            <div class="FORM">
                <div
                        class="INPUT"
                        v-focus
                        v-if="mobilePhone"
                >
                    <div class="modifyPwd_label">{{$t('myMessageSetup.myMessageSetup_phone')}}</div>
                    <input
                            type="text"
                            disabled="disabled"
                            :value="mobilePhone"
                    >
                </div>
                <div
                        class="INPUT"
                        v-focus
                        v-else
                >
                    <div class="modifyPwd_label">{{$t('myMessageSetup.myMessageSetup_email')}}</div>
                    <input
                            type="text"
                            disabled="disabled"
                            :value="email"
                    >
                </div>

                <div
                        class="INPUT"
                        v-focus
                        v-if="mobilePhone"
                >
                    <div class="modifyPwd_label">{{$t('login.login_code')}}</div>
                    <input
                            type="text"
                            :placeholder="$t('validate.validate_code')"
                            v-model="formData.captcha"
                            v-validate:captcha="validateOtions.captcha"
                    >
                    <div
                            class="sendCaptcha radius-half BUTTON_BG"
                            @click="sendCaptchaTel"
                    >{{captchaTips}}</div>
                </div>
                <div
                        class="INPUT"
                        v-focus
                        v-else
                >
                    <div class="modifyPwd_label">{{$t('login.login_code')}}</div>
                    <input
                            type="text"
                            :placeholder="$t('validate.validate_code')"
                            v-model="formData.captcha"
                            v-validate:captcha="validateOtions.captcha"
                    >
                    <div
                            class="sendCaptcha radius-half BUTTON_BG"
                            @click="sendCaptchaEmail"
                    >{{captchaTips}}</div>
                </div>
                <div class="INPUT" v-focus>
                    <div class="modifyPwd_label">{{$t('validate.validate_newPasswordText')}}</div>
                    <input
                            type="password"
                            :placeholder="$t('validate.validate_newPassword')"
                            v-model="formData.pwd"
                            v-validate:password="validateOtions.pwd"
                    >
                </div>
                <div class="INPUT" v-focus>
                    <div class="modifyPwd_label">{{$t('validate.validate_passwordFormatText')}}</div>
                    <input
                            type="password"
                            :placeholder="$t('validate.validate_newPasswordAgain')"
                            v-model="formData.confirmPwd"
                            v-validate:rePassword="validateOtions.confirmPwd"
                    >
                </div>

            </div>

            <div class="modifyPwd_sub">
                <p class="modifyPwd_txt1">{{$t('validate.validate_passwordFormat')}}</p>
                <p class="modifyPwd_txt2" @click="toFindPwdForMnemonicWord">{{$t('validate.validate_word')}}</p>
            </div>

            <div
                    class="modifyPwd_btn LONGBTN"
                    @click="toValidate"
            >{{$t('layerdate.layerdate_btnOk')}}</div>
        </div>

    </div>


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
    // 验证格式及错误信息


    import { mapGetters, mapActions, mapMutations } from 'vuex'
    import Nlayer from '@/components/Nlayer'

    const TIME = 60
    export default {
        name: "ForgetPassword",
        data(){
            return {
                formData: {
                    pwd: '',
                    confirmPwd: '',
                    captcha: ''
                },
                tips: '',
                tipsVisible: false,
                sended: false,
                captchaToken: '',
                time: TIME
            }
        },
        components: {
            Nlayer
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
            target(){
                return this.$route.query.target
            },
            title(){
                if( this.target === 'loginPwd' ){
                    return this.$t('wallet.wallet_updateLoginPwdTitle')
                } else if( this.target === 'dealPwd' ){
                    return this.$t('wallet.wallet_updateTransactionPwdTitle')
                }
            },
            type(){
                if( this.target === 'loginPwd' ){
                    return '1'
                } else if( this.target === 'dealPwd' ){
                    return '2'
                }
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
                    pwd: {
                        rules:{
                            required: true,
                            sPassword: true
                        },
                        msg:{
                            required: this.$t('validate.validate_newPassword'),
                            sPassword: this.$t('validate.validate_passwordFormat')
                        }
                    },
                    confirmPwd: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('validate.validate_newPasswordAgain')
                        }
                    },
                    captcha: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('validate.validate_code')
                        }
                    }
                }

                return res
            }
        },
        methods: {
            ...mapMutations(['SET_ROUTEACTION']),
            ...mapActions(['removeUserinfo']),
            ...mapGetters(['getUserinfo']),
            // 重置历史记录
            resetHistory(){
                const step = window.history.length - 3

                this.$router.go(-step)
                setTimeout(() => {
                    this.SET_ROUTEACTION('')
                    this.$router.replace({
                        path: '/login'
                    })
                }, 100)
            },
            // 去验证格式
            toValidate(){
                const pass = this.$validator.checkAll()

                const {
                    pwd,
                    confirmPwd
                } = this.formData

                if( !pass ) {
                    // 没通过验证
                    const errors = this.$validator.errors.errors
                    const errorMsg = errors[0].msg
                    this.showTips(errorMsg)
                    return
                }

                if( pwd != confirmPwd ){
                    this.showTips(this.$t('validate.validate_differ'))
                    return
                }

                this.submit()
            },
            // 提交信息
            submit(){
                let params = {
                    updateType: this.type,
                    userName: this.userinfo.userName,
                    messageValidateCode: this.formData.captcha,
                    newPass: this.formData.pwd
                }

                if( this.mobilePhone ){
                    params = {
                        ...params,
                        type: 1,
                        mobilePhone: this.mobilePhone
                    }
                } else {
                    params = {
                        ...params,
                        type: 2,
                        email: this.email
                    }
                }

                this.$http.post('js/users/seekPassword', params, {
                    headers: {
                        'tmp_token': this.captchaToken
                    }
                }).then((res) => {
                    this.showTips(res.message)
                    if( res.success ){
                        setTimeout(() => {
                            if( this.type == '1' ){
                                this.removeUserinfo()
                                this.resetHistory()
                            } else if ( this.type == '2' ){
                                this.$back()
                            }
                        }, 1200)
                    }
                })
            },
            // 手机发送验证码
            sendCaptchaTel(){
                if( !this.sended ){
                    this.$http.get('js/usersLogin/phoneNumberCode', {
                        phoneNumber: this.mobilePhone,
                        type: 2,
                        __HEADERSAUTH: true
                    }).then((res) => {
                        this.showTips(res.data.message)
                        this.captchaToken = res.headers.tmp_token

                        this.setTimer()
                    })
                }
                this.sended = true
            },
            // 邮箱发送验证码
            sendCaptchaEmail(){
                if( !this.sended ){
                    this.$http.get('js/usersLogin/emailCode', {
                        email: this.email,
                        type: 2,
                        __HEADERSAUTH: true
                    }).then((res) => {
                        this.showTips(res.data.message)
                        this.captchaToken = res.headers.tmp_token

                        this.setTimer()
                    })
                }
                this.sended = true
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
            // 去助记词修改
            toFindPwdForMnemonicWord(){
                this.$push({
                    path: '/findPwdForMnemonicWord',
                    query: {
                        target: this.target
                    }
                })
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
    .content{
        padding: 0.54rem 0.3rem 0;
    }
    .modifyPwd_label{
        font-size: .26rem;
        color: #333;
        line-height: .7rem;
        width: 1.2rem;
    }
    .modifyPwd_sub{
        display: flex;
        justify-content: space-between;
        padding: 0.15rem 0;
        margin-top: 0.18rem;
    }
    .modifyPwd_txt1{
        font-size: .26rem;
        color: #aaa;
        line-height: 0.4rem;
        flex: 1;
    }
    .modifyPwd_txt2{
        font-size: .26rem;
        color: #e4811d;
        line-height: 0.4rem;
        width: 1.5rem;
        text-align: right;
    }
    .modifyPwd_btn{
        margin-top: 0.9rem;
        font-size: .3rem;
        color: #fff;
        width: 5.5rem;
        line-height: .7rem;
    }
    .sendCaptcha{
        width: auto;
        height:0.5rem;
        box-sizing: border-box;
        padding: 0 0.2rem;
        font-size: 0.22rem;
        color: #fff;
        line-height: 0.5rem;
        text-align: center;
    }
</style>