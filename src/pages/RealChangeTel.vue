<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">更换手机号</p>
        </div>
        
        <div class="FORM">
        	<!--证件类型-->
            <div class="realChangeTel_box">                        
                <div class="realChangeTel clearfix">
                	<p class="realChangeTel_txt1 fl">国家和地区</p>
                    <select 
                    	name="public-choice" 
                    	v-model="couponSelected" 
                    	@change="getCouponSelected" 
                    	class="realChangeTel_select fr">                                        
					    <option :value="coupon.id" v-for="coupon in selectList" >{{coupon.name}}</option>                                    
					</select>
                </div>
            </div>
	
            <div class="INPUT" v-focus>
                <div class="account_icon">+{{couponSelected}}</div>
                <input
                        type="text"
                        v-validate:tel="validateOtions.tel"
                        :placeholder="$t('请输入手机号')"
                        v-model="formData.tel"
                >
            </div>
            <div class="INPUT" v-focus style="position: relative">
                <div class="code_icon">验证码</div>
                <input
                        type="text"
                        v-validate:captcha="validateOtions.captcha"
                        :placeholder="$t('请输入验证码')"
                        v-model="sureCode"
                >
                <div
                        v-if="show"
                        class="sendCaptcha"
                        @click="toSendCaptcha"
                >{{captchaTips}}</div>
                <div
                        v-if="!show"
                        class="sendCaptcha"
                >{{count}} S</div>
            </div>
        </div>

        <div
                class="button LONGBTN BUTTON_SHADOW"
                @click="toValidate"
        >确认修改</div>
        
        <div class="passwordtitle_bottom">
        	<p class="passwordtitle_bottom_txt">提示：大陆地区使用港澳台手机号接受信息请打开国际漫游，否则无法收到验证短信。</p>
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
	import { mapActions, mapGetters } from 'vuex'
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    const TIME = 60
    export default {
        name:'RealChangeTel',
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
                token:JSON.parse(localStorage.getItem('userinfo')).customerToken,
                formData: {
                    tel:'',
                    captcha: ''
                },
                captchaToken: '',
                enterCode:'',
                sended: false,
                time: TIME,
                code:'',
                show: true,
                count: '',
                timer: null,
                userid:JSON.parse(localStorage.getItem('userinfo')),
                couponSelected: '',
                selectList:[
                    {
                        id: '86',
                        name: '中国'
                    },
                    {
                        id: '852',
                        name: '香港'
                    },
                    {
                        id: '853',
                        name: '澳门'
                    },
                    {
                        id: '886',
                        name: '台湾'
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
                    return this.time >= 10 ? this.time+this.$t('register.register_seconds')+this.$t('register.register_again') : '0'+this.time +this.$t('register.register_seconds')+this.$t('register.register_again')
                } else {
                    return this.$t('register.register_getCode')
                }
            },
            validateOtions(){
                // 验证格式及错误信息
                const res = {
                    tel: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('validate.validate_phone')
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
            },
            
        },
        methods:{
        	...mapActions(['setUsers']),
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
            // 监听关闭无密码弹窗事件
            noRealAuthenDigClose(){
                this.noRealAuthenDig = false
            },
            // 点击出现弹窗
            toSendCaptcha(){
                const {
                    tel
                } = this.formData
                var that = this

                if( tel == '' ){
                    this.showTips('手机号不能为空')
                    return
                }
                
                // 检测手机号是否正确
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

                // 点击确定按钮 请求获取验证码的接口 send_dx
                jsonAjax.post(urlUtil.getApiUrl("send_dx"), {
                    phone:that.couponSelected == '86'? tel : that.couponSelected + tel,
                    securityCodeImage:that.enterCode,
                    requestType:4,
                    userId:that.userid.customerId,
                }, function (result) {
                    console.log(result)
                    if( result.returnCode == 0 ){
                        that.showTips(result.message)
                        that.noRealAuthenDig=true;
                        that.errtitle=result.message
                    }
                    if( result.returnCode == 1 ){
                        that.showTips(result.message)
                        // 验证码
                        that.sureCode = result.resultData.verification
                        console.log(that.sureCode)
                        // 关闭弹窗
                        that.codeVisible=false

                        // 倒计时开始
                        that.getCode()
//                  	that.sended = true
                    }


                })


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
            toIdCardAuthen(){
                this.noRealAuthenDig=false;
            },
            // 验证
            getCouponSelected(){},
            // 验证地区
            validateCity(){},
            // 去验证格式
            toValidate(){
                const pass = this.$validator.checkAll()


                if( pass ){
                	// 检测手机号是否正确
                	if( this.couponSelected == '86' ){
                		// 大陆正则
                		var myreg = /^[1][3-8]\d{9}$/;
                	}else if( this.couponSelected == '852' ){
                		// 香港
                		var myreg = /^([5|6|9])\d{7}$/;
                	}else if( this.couponSelected == '853' ){
                		// 澳门
                		var myreg = /^[6]([8|6])\d{5}$/;
                	}else if( this.couponSelected == '886'){
                		// 台湾
                		var myreg = /^[0]?[1-9]{1}[0-9]{2}[0-9]{3}[0-9]{3}$/;
//              		var myreg = /^([0]|[9])\\d{8,9}$/;
                	}
                	
                	
                	if (this.formData.tel == "") {
				        this.showTips("手机号不能为空")
				    } else if (!myreg.test(this.formData.tel)) {
				        this.showTips("手机号格式错误")
				    } else {
				    	var newPhone = this.couponSelected == '86' ? this.formData.tel : this.couponSelected + this.formData.tel
				        console.log('全部成功' + newPhone)
				    }
//				    return
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
                    captcha
                } = this.formData
                var that = this

                console.log(that.sureCode)
                // 请求更改密码的接口 find_pass
                jsonAjax.post(urlUtil.getApiUrl('real_update_phone'),{
                	customerToken:that.token,
                    phones:that.couponSelected == '86'? tel : that.couponSelected + tel,
                    customerId:that.userid.customerId,
                    verification:that.sureCode
                },function(result){
                    console.log(result)
//                  return
                    if( result.returnCode == 0 ){
                        that.showTips(result.message)
                    }
                    if( result.returnCode == 1 ){
                        that.showTips(result.message)
                        that.sureCode=""
                        // 添加到默认用户名
                        var phones = that.couponSelected == '86'? tel : that.couponSelected + tel
                        that.setUsers(phones)
                        // 跳转到登录页面
                        localStorage.removeItem('userinfo')
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
        margin-top: 1.08rem;
        padding:0 0.3rem;
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
        width: 1.7rem;
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
        margin-top: 4rem;
        /*margin-bottom: 1rem;*/
        width: 6.9rem;
    }
    .passwordtitle{
        padding: 0 0.45rem;
        margin-top: .88rem;
        color: #203395;
        font-weight: bold;
        font-size: .26rem;
        height: 1.2rem;
        line-height:.4rem;
        padding-top: .2rem;
        background: rgba(32,52,149,0.2);
    }
    /*选择框样式*/
    .select{
		z-index: 999;
		position: absolute;
		left: 1.9rem;
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
		text-align:left;
		padding-right: 0.3rem;
		color: #203395;
	}
	/*底部提示文字样式*/
	.passwordtitle_bottom{
        padding: 0.5rem 0.75rem 0;        
    }
    .passwordtitle_bottom_txt{
        color: #aaa;
        font-size: .22rem;
        line-height:.4rem;
        padding: .25rem;
        background: #F5F5F5;
    }
    
    /*选择框样式*/
   	.realChangeTel_box{
   		width: 100%;
   		height: 1rem;
   		border: 1px solid #ccc;
   		margin-bottom: 0.3rem;
   	}
   	.realChangeTel{
   		padding: 0 0.3rem;
   	}
   	.realChangeTel_txt1{
   		font-size: 0.26rem;
   		color: #333;
   		line-height: 1rem;
   	}
   	.realChangeTel_select{
   		height: 1rem;
	    border: none;
	    text-align: center;
	    background: none;
	    font-size: .26rem;
	    -webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
		-moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
		background: url("../static/images/video_icon/icon_right.png") no-repeat right center;
		background-size: 0.3rem  0.3rem;/*图片大小*/
		background-position: 110%;/*图片位置*/
		background-color:none;
		text-align:left;
		padding-right: 0.4rem;
		color: #333;
   	}
</style>
