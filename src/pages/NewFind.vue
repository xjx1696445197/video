<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <!--<div class="HEADER_LEFT">登录</div>-->
            <p class="HEADER_CENTER">忘记密码</p>
        </div>
        <div class="new_header" @click='toClick'>
            <div class="new_logo BUTTON_SHADOW"></div>
            <div class="logo_txt">ChmvToken</div>
        </div>
        <div class="FORM">
            <div class="INPUT INPUT_account" v-focus>
                <select
                        v-model="couponSelected"
                        class="select"
                        id="select_city"
                        @change="validateCity"
                >
                    <option :value="coupon.id" v-for="coupon in selectList" >{{coupon.name}}</option>
                </select>
                <input
                        type="text"
                        v-validate:tel="validateOtions.tel"
                        :placeholder="$t('findPassword.findPassword_enterPhone')"
                        v-model="formData.tel"
                        style="padding-left:1.2rem;"
                >
            </div>
            <div class="INPUT INPUT_code" v-focus>
                <input
                        type="text"
                        v-validate:captcha="validateOtions.captcha"
                        :placeholder="$t('findPassword.findPassword_phoneCode')"
                        v-model="formData.captcha"
                        style="width: 1.6rem"
                >
                <div
                        class="sendCaptcha"
                        @click="toSendCaptcha"
                >{{captchaTips}}</div>
            </div>
            <div class="INPUT INPUT_pwd" v-focus>
                <input
                        type="password"
                        v-validate:pwd="validateOtions.pwd"
                        :placeholder="$t('findPassword.findPassword_newPassword')"
                        v-model="formData.pwd"
                >
            </div>
            <div class="INPUT INPUT_pwd" v-focus>
                <input
                        type="password"
                        v-validate:confirmPwd="validateOtions.confirmPwd"
                        :placeholder="$t('findPassword.findPassword_rePassword')"
                        v-model="formData.confirmPwd"
                >
            </div>

            <div
                    class="button LONGBTN"
                    @click="toValidate"
                    style="margin-top: 0.5rem"
            >{{$t('findPassword.findPassword_confirm')}}</div>
            <div class="passwordtitle">
                提示：1、忘记密码只有3次找回机会，3次用完只能通过联系官方运营找回！2、大陆地区使用港澳台手机号接受信息请打开国际漫游，否则无法收到验证短信
            </div>

        </div>



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
        <nlayer
                :visible="noRealAuthenDig"
                @close="noRealAuthenDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    提示
                </div>
                <div class='DIALOG_CONTENT'>
                    {{errtitle}}
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='toIdCardAuthen'
                    >确认</div>
                </div>
            </div>
        </nlayer>
    </div>
</template>
<script>
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
                errtitle:"",
                noRealAuthenDig:false,
                tips: '',
                tipsVisible: false,
                loadingVisible: false,
                codeVisible:false,
                sureCode:'',
                formData: {
                    tel: '',
                    captcha: '',
                    pwd: '',
                    confirmPwd: ''
                },
                captchaToken: '',
                enterCode:'',
                sended: false,
                time: TIME,
                code:'',
                couponSelected: '',
                selectList:[
                    {
                        id: '86',
                        name: '+86'
                    },
                    {
                        id: '852',
                        name: '+852'
                    },
                    {
                        id: '853',
                        name: '+853'
                    },
                    {
                        id: '886',
                        name: '+886'
                    }
                ],
            }
        },
        created(){
            // 赋值地区显示
            this.couponSelected = this.selectList[0].id;

        },
        computed: {
            captchaTips(){
                if( this.sended ){
                    return this.time >= 10 ? this.time+this.$t('register.register_seconds') : '0'+this.time +this.$t('register.register_seconds')
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
        methods:{
            // 监听关闭无密码弹窗事件
            noRealAuthenDigClose(){
                this.noRealAuthenDig = false
            },
            toIdCardAuthen(){
                this.noRealAuthenDig=false;
            },
            // 点击出现弹窗
            toSendCaptcha(){
                const {
                    tel
                } = this.formData
                console.log(tel)
                if( tel == '' ){
                    this.showTips('手机号不能为空')
                    return
                }
                // 检测手机号格式
                if( this.couponSelected == '86' ){
                    // 大陆正则
                    var rex = /^[1][3-9]\d{9}$/;
                }else if( this.couponSelected == '852' ){
                    // 香港
                    var rex = /^([5|6|9])\d{7}$/;
                }else if( this.couponSelected == '853' ){
                    // 澳门
                    var rex = /^[6]([8|6])\d{5}$/;
                }else if( this.couponSelected == '886'){
                    // 台湾
                    var rex = /^[0]?[1-9]{1}[0-9]{2}[0-9]{3}[0-9]{3}$/;
//              		var myreg = /^([0]|[9])\\d{8,9}$/;
                }
//              var rex = /^1[23456789]\d{9}$/;
                if( !rex.test(tel) ){
                    this.showTips('手机号格式不正确')
                    return
                }
                // 请求发送的接口
                var that = this

                // 点击确定按钮 请求获取验证码的接口 send_dx
                jsonAjax.post(urlUtil.getApiUrl("send_dx"), {
                    phone:that.couponSelected == '86'? tel : that.couponSelected + tel,
                    securityCodeImage:that.enterCode,
                    requestType:2
                }, function (result) {
                    console.log(result)
                    if( result.returnCode == 0 ){
                        that.showTips(result.message)
                        that.noRealAuthenDig=true;
                        that.errtitle=result.message;
                    }
                    if( result.returnCode == 1 ){

                        that.showTips(result.message)
                        // 验证码
                        that.sureCode = result.resultData.verification
                        console.log(that.sureCode)
                        // 关闭弹窗
//                  	that.codeVisible=false

                        // 倒计时开始
                        that.setTimer()
                        that.sended = true
                    }


                })

                // 打开弹窗并获取验证码图片
//
//          	this.code = 'http://39.106.90.111:8184/app/securityCode/getSecurityCodeImage/'+ tel
//              this.codeVisible=true


            },
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
            // 选择区号
            validateCity(event){
                console.log(event)
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

                console.log(that.sureCode)
                // 请求更改密码的接口 find_pass
                jsonAjax.post(urlUtil.getApiUrl('find_pass'),{
                    phone:that.couponSelected == '86'? tel : that.couponSelected + tel,
                    password:pwd,
                    againLoginPassword:confirmPwd,
                    verification:captcha
                },function(result){
                    console.log(result)
                    if( result.returnCode == 0 ){
                        that.showTips(result.message)
                    }
                    if( result.returnCode == 1 ){
                        that.showTips(result.message)
                        setTimeout(function(){
//          				返回登录页面
                            that.$router.replace({
                                path: '/login'
                            })
                        },3000)

                    }
                })

            },

            // 检测图片验证码
            toSureCode(){
                const {
                    tel
                } = this.formData
                var that = this

                // 点击确定按钮 请求获取验证码的接口 send_dx
                jsonAjax.post(urlUtil.getApiUrl("send_dx"), {
                    phone:that.couponSelected == '86'? tel : that.couponSelected + tel,
                    securityCodeImage:that.enterCode
                }, function (result) {
                    console.log(result)
                    if( result.returnCode == 0 ){
                        that.showTips(result.message)
                    }
                    if( result.returnCode == 1 ){
                        that.showTips(result.message)
                        // 验证码
                        that.sureCode = result.resultData.verification
                        console.log(that.sureCode)
                        // 关闭弹窗
                        that.codeVisible=false

                        // 倒计时开始
                        that.setTimer()
                        that.sended = true
                    }


                })
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
        overflow: scroll;
    }
    .HEADER{
        z-index: 99999;
        background: #FFF;
        border-bottom: none;
    }
    .HEADER_LEFT{
        text-align: left;
        width: 100%;
        padding-left: 0.9rem;
        line-height: 0.88rem;
        color: #203395;
        font-size: 0.26rem;
    }
    .HEADER_CENTER{
        width: 100%;
        line-height: 0.88rem;
        color: #203395;
        font-size: 0.3rem;
        text-align: center;
    }
    .new_logo{
        width: 1.5rem;
        height: 1.5rem;
        /*background: #203395;*/
        margin:1rem auto 0;
        border-radius: 0.2rem;
        background: url(../static/images/video_icon/logo.png)no-repeat center center / cover;
        overflow: hidden;
    }
    .logo_txt{
        text-align: center;
        line-height: 0.9rem;
        font-size: 0.34rem;
        color: #203395;
        font-weight: bold;
    }
    .FORM{
        padding:0.75rem;
    }
    .sendCaptcha{
        font-size: 0.26rem;
        border-radius: 0;
        border-left: 1px solid #203395;
        width: 2.2rem;
        text-align: center;
        color: #203395;
    }


    .account_icon{
        margin-left: 0.3rem;
        margin-right: 0.1rem;
        width: 0.3rem;
        height: 0.4rem;
        background: url('../static/images/video_icon/icon_tel.png')no-repeat center center / cover;
    }
    .pwd_icon{
        margin-left: 0.3rem;
        margin-right: 0.1rem;
        width: 0.3rem;
        height: 0.4rem;
        background: url('../static/images/video_icon/icon_pwd.png')no-repeat center center / cover;
    }
    .code_icon{
        margin-left: 0.3rem;
        margin-right: 0.1rem;
        width: 0.3rem;
        height: 0.4rem;
        background: url('../static/images/video_icon/icon_code.png')no-repeat center center / cover;
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


    .INPUT{
        padding-left: 0.7rem;
    }
    .INPUT_pwd{
        position: relative;
    }
    .INPUT_pwd:before{
        position: absolute;
        content: '';
        width: 0.3rem;
        height: 0.4rem;
        background: url('../static/images/video_icon/icon_pwd.png')no-repeat center center / cover;
        top: 50%;
        transform: translateY(-50%);
        left: 0.3rem;
    }
    .INPUT_account{
        position: relative;
    }
    .INPUT_account:before{
        position: absolute;
        content: '';
        width: 0.3rem;
        height: 0.4rem;
        background: url('../static/images/video_icon/icon_tel.png')no-repeat center center / cover;
        top: 50%;
        transform: translateY(-50%);
        left: 0.3rem;
    }
    .INPUT_code{
        position: relative;
    }
    .INPUT_code:before{
        position: absolute;
        content: '';
        width: 0.3rem;
        height: 0.4rem;
        background: url('../static/images/video_icon/icon_code.png')no-repeat center center / cover;
        top: 50%;
        transform: translateY(-50%);
        left: 0.3rem;
    }
    .passwordtitle{
        padding: 0.2rem 0.25rem;
        margin-top: .4rem;
        color: #aaa;
        /*font-weight: bold;*/
        font-size: .22rem;
        /*height: 1.2rem;*/
        line-height:.4rem;
        padding-top: .2rem;
        background: #F5F5F5;
    }

    /*选择框样式开始*/
    /*.FORM{
        position: relative;
    }*/
    .select{
        z-index: 999;
        position: absolute;
        left: 0.7rem;
        top: 0rem;
        height: 1rem;
        border: none;
        text-align: center;
        background: none;
        font-size: .26rem;
        -webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
        -moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
        background: url("../static/images/login/select_down.png") no-repeat right center;
        background-size: 0.19rem  0.09rem;/*图片大小*/
        background-position: 100%;/*图片位置*/
        background-color:none;
        text-align:right;
        text-align-last: right;
        padding-right: 0.3rem;
        color: #203395;
    }
    /*选择框样式结束*/
</style>
