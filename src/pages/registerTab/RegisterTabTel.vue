<template>
    <div class="page">
        <div class="FORM">
            <div class="INPUT" v-focus>
                <input
                        type="text"
                        v-validate:account="validateOtions.account"
                        :placeholder="$t('register.register_account')"
                        v-model="formData.account"
                >
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="text"
                        v-validate:tel="validateOtions.tel"
                        :placeholder="$t('register.register_enterPhone')"
                        v-model="formData.tel"
                >
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="text"
                        v-validate:captcha="validateOtions.captcha"
                        :placeholder="$t('register.register_phoneCode')"
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
                        :placeholder="$t('register.register_password')"
                        v-model="formData.pwd"
                >
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="password"
                        v-validate:confirmPwd="validateOtions.confirmPwd"
                        :placeholder="$t('register.register_rePassword')"
                        v-model="formData.confirmPwd"
                >
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="text"
                        v-validate:inviteAccount="validateOtions.inviteAccount"
                        :placeholder="$t('register.register_invitationCode')"
                        v-model="formData.inviteAccount"
                >
            </div>
            <div class="INPUT" v-focus>
                <input
                        type="text"
                        v-validate:nodeAccount="validateOtions.nodeAccount"
                        :placeholder="$t('register.register_nodeCode')"
                        v-model="formData.nodeAccount"
                >
            </div>

            <div class="forget">
                <div class="provision">
                    <div class="checkbox"
                        :class="[checked ? 'active' : '']"
                         @click="provisionSelect"
                    ></div>
                    <p class="provision_txt1">{{$t('register.register_readAgree')}}</p>
                    <p class="provision_txt2" @click="toUsingAgreement">{{$t('register.register_agreement')}}</p>
                </div>
                <div class="forget_txt" @click="toLogin">{{$t('register.register_login')}}</div>
            </div>

        </div>


        <div
                class="button LONGBTN"
                @click="toValidate"
        >{{$t('register.register_btn')}}</div>


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
    import { mapActions,mapGetters } from 'vuex'


    const TIME = 60
    export default {
        name: "RegisterTabTel",
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
                    tel: '',
                    captcha: '',
                    pwd: '',
                    confirmPwd: '',
                    inviteAccount: '',
                    nodeAccount: ''
                },
                loginSuccess: false,
                captchaToken: '',
                sended: false,
                checked: false,
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
                    },

                    inviteAccount: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('register.register_invitationCode')
                        }
                    },

                }

                return res
            },
            Sidebars(){
                return this.getSidebars()
            }
        },
        methods: {
            ...mapActions(['setUserinfo', 'setUserNoticeState','setSidebars']),
            ...mapGetters(['getSidebars']),
            // 去使用条款页面
            toUsingAgreement(){
                this.$push({
                    path: '/usingAgreement'
                })
            },
            // 去登录页面
            toLogin(){
                this.$push({
                    path: '/login'
                })
            },
            // 勾选使用条款
            provisionSelect(){
                this.checked = !this.checked
            },
            // 手机发送验证码
            sendCaptcha(){
                const pass = this.$validator.checkAll()

                const errors = this.$validator.errors.errors
                const telError = errors.filter((item) => {
                    return item.name == 'tel'
                })
                const hasTelError = telError.length > 0 ? true : false

                if( hasTelError ){
                    this.showTips(telError[0].msg)
                    return
                }


                if( !this.sended ){
                    this.$http.get('js/usersLogin/phoneNumberCode', {
                        phoneNumber: this.formData.tel,
                        type: 1,
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

                console.log(pwd,confirmPwd)
                if( pwd != confirmPwd ){
                    this.showTips(this.$t('validate.validate_diff'))
                    return
                }

                if( !this.checked ){
                    this.showTips(this.$t('register.register_tip1'))
                    return
                }

                this.submit()
            },
            // 提交信息
            submit(){
                const {
                    account,
                    tel,
                    captcha,
                    pwd,
                    inviteAccount,
                    nodeAccount
                } = this.formData

                // 打开加载层
                this.showLoading()

                this.$http.post('js/usersLogin/register', {
                    userName: account,
                    phonePrefix: "86",
                    mobilePhone: tel,
                    messageValidateCode: captcha,
                    userPass: pwd,
                    recommenderUserName: inviteAccount,
                    nodeUserName: nodeAccount
                }, {
                    headers: {
                        'tmp_token': this.captchaToken
                    }
                }).then((res) => {
                    if( res.success ) {
                        this.login()
                    } else {
                        this.closeLoading()
                        this.showTips(res.message)
                    }
                })
            },
            // 登录
            login(){
                const {
                    account,
                    pwd,
                } = this.formData

                this.$http.post("js/usersLogin/login", {
                    userName: account,
                    userPass: pwd,
                    __HEADERSAUTH: true
                }).then((res) => {
                    const { data } = res

                    // 关闭加载层
                    this.closeLoading()

                    setTimeout(() => {
                        if( data.success ){
                            const userinfo = data.result
                            const { token } = res.headers

                            // 设置消息状态
                            this.setUserNoticeState()
                            // 设置缓存
                            this.setUserinfo({
                                ...userinfo,
                                token
                            })
                            // 设置侧边栏
                            if(JSON.stringify(this.Sidebars).indexOf(JSON.stringify(userinfo.userName)) === -1 || this.Sidebars.length == 0){
                                // 设置
                                this.setSidebars({
                                    username:userinfo.userName,
                                    active:true
                                })
                            }else{
                                // 无需设置
                                this.Sidebars.forEach((item, i)=>{
                                    if(item.username == userinfo.userName){
                                        item.active = true
                                    }else{
                                        item.active = false
                                    }
                                })
                            }
                            this.loginSuccess = true
                            this.showTips(data.message)
                        }
                    }, 300)

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

                if( this.loginSuccess ){
                    this.$replace({
                        path: '/backupMnemonicWord'
                    })
                }
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
    .forget{
        margin-top: 0.18rem;
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
        width: 0.35rem;
        height: 0.35rem;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        -webkit-border-radius: 0.02rem;
        -moz-border-radius: 0.02rem;
        border-radius: 0.02rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .checkbox.active:after{
        display: block;
    }
    .checkbox:after{
        position: absolute;
        width: 70%;
        height: 70%;
        display: none;
        background: #e08222;
        content: '';
    }
    .provision_txt1{
        font-size: .22rem;
        color: #333;
        padding-left: .1rem;
    }
    .provision_txt2{
        font-size: .22rem;
        color: #e08222;
    }
    .forget_txt{
        font-size: .26rem;
        color: #e08222;
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
