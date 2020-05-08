<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{title}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="FORM">
                    <div class="INPUT" v-focus>
                        <div class="modifyPwd_label">{{$t('validate.validate_oldPasswordText')}}</div>
                        <input
                            type="password"
                            :placeholder="$t('validate.validate_oldPassword')"
                            v-model="formData.oldPwd"
                            v-validate:oldPassword="validateOtions.oldPwd"
                        >
                    </div>
                    <div class="INPUT" v-focus>
                        <div class="modifyPwd_label">{{$t('validate.validate_newPasswordText')}}</div>
                        <input
                            type="password"
                            :placeholder="$t('validate.validate_newPassword')"
                            v-model="formData.newPwd"
                            v-validate:newPassword="validateOtions.newPwd"
                        >
                    </div>
                    <div class="INPUT" v-focus>
                        <div class="modifyPwd_label">{{$t('validate.validate_passwordFormatText')}}</div>
                        <input
                            type="password"
                            :placeholder="$t('validate.validate_newPasswordAgain')"
                            v-model="formData.confirmPwd"
                            v-validate:confirmPassword="validateOtions.confirmPwd"
                        >
                    </div>
                </div>

                <div class="modifyPwd_sub">
                    <p class="modifyPwd_txt1">{{$t('validate.validate_passwordFormat')}}</p>
                    <p class="modifyPwd_txt2" @click="toForgetPassword">{{$t('login.login_forgetPassword')}}</p>
                </div>

                <div
                    class="modifyPwd_btn LONGBTN"
                    @click="toValidate"
                >{{$t('findPassword.findPassword_confirmUpdate')}}</div>
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

    export default {
        name: "ModifyPassword",
        data(){
            return {
                formData: {
                    oldPwd: '',
                    newPwd: '',
                    confirmPwd: ''
                },
                tips: '',
                tipsVisible: false
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
            validateOtions(){
                // 验证格式及错误信息
                const res = {
                    oldPwd: {
                        rules:{
                            required: true,
                            sPassword: true
                        },
                        msg:{
                            required: this.$t('validate.validate_oldPassword'),
                            sPassword: this.$t('validate.validate_passwordFormat')
                        }
                    },
                    newPwd: {
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
                    newPwd,
                    confirmPwd
                } = this.formData

                if( !pass ) {
                    // 没通过验证
                    const errors = this.$validator.errors.errors
                    const errorMsg = errors[0].msg
                    this.showTips(errorMsg)
                    return
                }

                if( newPwd != confirmPwd ){
                    this.showTips(this.$t('validate.validate_diff'))
                    return
                }

                this.submit()
            },
            // 提交信息
            submit(){
                let sdata = {}
                if(this.type == '1'){
                    sdata = {
                        userId: this.userId,
                        type: this.type,
                        newPass: this.formData.newPwd,
                        userPass:this.formData.oldPwd
                    }
                }else{
                    sdata = {
                        userId: this.userId,
                        type: this.type,
                        newPass: this.formData.newPwd,
                        transPass:this.formData.oldPwd
                    }
                }


                this.$http.post('js/users/seekUserPassword', sdata).then((res) => {
                    if( res.success ){
                        this.showTips(res.message)
                        setTimeout(() => {
                            if( this.type == '1' ){
                                this.removeUserinfo()
                                this.resetHistory()
                            } else if ( this.type == '2' ){
                                this.$back()
                            }
                        }, 1200)
                    }else{
                        this.showTips(res.message)
                    }
                })

            },
            // 去忘记密码页面
            toForgetPassword(){
                this.$push({
                    path: '/forgetPassword',
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
</style>