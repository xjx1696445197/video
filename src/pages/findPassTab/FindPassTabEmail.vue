<template>
    <div class="page">
        <div class="FORM">
            <div class="INPUT" v-focus>
                <input
                        type="text"
                        v-validate:account="validateOtions.account"
                        :placeholder="$t('findPassword.findPassword_account')"
                        v-model="formData.account"
                >
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="text"
                        v-validate:email="validateOtions.email"
                        :placeholder="$t('findPassword.findPassword_mailbox')"
                        v-model="formData.email"
                >
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="text"
                        v-validate:captcha="validateOtions.captcha"
                        :placeholder="$t('findPassword.findPassword_mailboxCode')"
                        v-model="formData.captcha"
                >
                <div
                        class="sendCaptcha radius-half BUTTON_BG"
                        @click="sendCaptcha"
                >{{captchaTips}}</div>
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="password"
                        v-validate:pwd="validateOtions.pwd"
                        :placeholder="$t('findPassword.findPassword_newPassword')"
                        v-model="formData.pwd"
                >
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="password"
                        v-validate:confirmPwd="validateOtions.confirmPwd"
                        :placeholder="$t('findPassword.findPassword_rePassword')"
                        v-model="formData.confirmPwd"
                >
            </div>


        </div>


        <div
                class="button LONGBTN"
                @click="toValidate"
        >{{$t('findPassword.findPassword_confirm')}}</div>



        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0.1)"
                :visible="loadingVisible"
                class="NLOADING"
        >
            <div class="LOADING">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve" width="0.8rem" height="0.8rem">
                    <path opacity="0.1" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                    <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
                <p class="LOADING_TXT">{{$t('layerdate.layerdate_loading')}}</p>
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
    // 验证格式及错误信息

    import Nlayer from '@/components/Nlayer'

    const TIME = 60
    export default {
        name: "FindPassTabEmail",
        components: {
            Nlayer
        },
        data(){
            return{
                tips: '',
                tipsVisible: false,
                loadingVisible: false,
                formData: {
                    account: '',
                    email: '',
                    captcha: '',
                    pwd: '',
                    confirmPwd: ''
                },
                captchaToken: '',
                sended: false,
                time: TIME
            }
        },
        computed: {
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
                    email: {
                        rules:{
                            required: true,
                            email: true
                        },
                        msg:{
                            required: this.$t('validate.validate_email'),
                            email: this.$t('validate.validate_emailFormat')
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

                }

                return res
            }
        },
        methods: {
            // 邮箱发送验证码
            sendCaptcha(){
                const pass = this.$validator.checkAll()

                const errors = this.$validator.errors.errors
                const telError = errors.filter((item) => {
                    return item.name == 'email'
                })
                const hasTelError = telError.length > 0 ? true : false

                if( hasTelError ){
                    this.showTips(telError[0].msg)
                    return
                }


                if( !this.sended ){
                    this.$http.get('js/usersLogin/emailCode', {
                        email: this.formData.email,
                        type: 2,
                        __HEADERSAUTH: true
                    }).then((res) => {
                        console.log(res)
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
                    this.showTips(this.$t('validate.validate_diff'))
                    return
                }

                this.submit()
            },
            // 提交信息
            submit(){
                const {
                    account,
                    email,
                    captcha,
                    pwd
                } = this.formData

                // 打开加载层
                this.showLoading()

                this.$http.post('js/usersLogin/seekPassword', {
                    userName: account,
                    messageValidateCode: captcha,
                    email: email,
                    newPass: pwd,
                    type: 2,
                    updateType: 1
                }, {
                    headers: {
                        'tmp_token': this.captchaToken
                    }
                }).then((res) => {
                    this.closeLoading()
                    this.showTips(res.message)

                    if( res.success ) {
                        setTimeout(() => {
                            this.$back()
                        }, 1200)
                    }
                })
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
        position: static;
        background: #fff;
    }
    .FORM{
        margin-top: 0.2rem;
        padding: 0 1rem;
    }
    .button{
        margin-top: .5rem;
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
