<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">实名认证</p>
        </div>
        <div class="wrapper">
            <div class="realName_top">
                <p class="realName_txt2 tcenter">银行卡必须为中国大陆发行的银行卡，请如实填写卡号，  </p>
                <p class="realName_txt2 tcenter">仅用于核实真实身份。</p>
            </div>

            <div class="FORM">
                <div class="realName_list">
                    <!--持卡人姓名-->
                    <div class="realName_item">
                        <div class="INPUT_REAL">
                            <p class="realName_txt3">持卡人姓名</p>
                            <input type="text" class="realName_input"
                                   v-validate:username="validateOtions.username"
                                   placeholder="请输入您的姓名"
                                   v-model="formData.username"
                            >
                        </div>
                    </div>
                    <!--银行卡号-->
                    <div class="realName_item">
                        <div class="INPUT_REAL">
                            <p class="realName_txt3">银行卡号</p>
                            <input type="text" class="realName_input"
                                   v-validate:bankcard="validateOtions.bankcard"
                                   placeholder="请输入您的卡号"
                                   v-model="formData.bankcard"
                            >
                        </div>
                    </div>

                    <!--通行证-->
                    <div class="realName_item">
                        <div class="INPUT_REAL">
                            <p class="realName_txt3" v-if='showCode==2'>港澳地区来往通行证</p>
                            <p class="realName_txt3" v-if='showCode==3'>台湾居民来往内地通行证</p>
                            <input type="text" class="realName_input"
                                   v-validate:usercards="validateOtions.usercards"
                                   placeholder="请输入您的证件号"
                                   v-model="formData.usercards"
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="button LONGBTN BUTTON_SHADOW"
                 @click='toValidate'
            >完成验证</div>

            <p class="realName_txt5 tcenter">未满18岁与超过65岁用户无法通过实名认证</p>

        </div>

        <!--错误信息展示-->
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

    import Nlayer from '@/components/Nlayer'
    import { mapGetters, mapActions } from 'vuex'
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        name: "BankCardAuthen",
        components: {
            Nlayer
        },
        data() {
            return {
                tips: '',
                tipsVisible: false,
                formData: {
                    bankcard: '',
                    username: '',
                    usercard:'',
                    usercards:''

                },

            }
        },
        computed: {
            showCode(){
                return this.$route.query.showCode
            },
            name(){
                return this.$route.query.name
            },
            usercards(){
                return this.$route.query.usercards
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
            validateOtions(){
                // 验证格式及错误信息
                const res = {
                    username: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('请输入姓名')
                        }
                    },
                    usercard: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('请输入银行卡号')
                        }
                    },
                    usercards: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('请输入通行证号码')
                        }
                    },
                }

                return res
            }
        },
        methods:{
            ...mapGetters(['getUserinfo']),
            // 验证银行卡账号是否符合要求  6225767304111768 6228480402564890018 6228481269040908170 6214830190806827 6214680045764006
            toValidate(){
                // 验证规则
                const pass = this.$validator.checkAll()
                if( pass ){
                    // 数据格式通过验证
                    // 验证姓名
                    if( this.formData.username != this.name ){
                        this.showTips('姓名与上一页填写不符')
                        return
                    }
                    // 验证卡号
                    console.log(this.formData.bankcard)
                    var rex =  /^([1-9]{1})(\d{15}|\d{18})$/;
                    if( !rex.test(this.formData.bankcard) ){
                        this.showTips('银行卡账号不正确')
                        return
                    }
                    // 验证通行证
                    if( this.formData.usercards != this.usercards ){
                        this.showTips('通行证与上一页填写不符')
                        return
                    }
                    // 请求接口第二步认证
                    this.postSaveUserAuthen()
                } else {
                    // 没通过验证
                    const errors = this.$validator.errors.errors
                    const errorMsg = errors[0].msg

                    this.showTips(errorMsg)
                }

            },
            // 请求第二步认证接口
            // 请求接口进行下一步
            postSaveUserAuthen(){
                console.log(this.formData)
                var that = this
                jsonAjax.post(urlUtil.getApiUrl("real_second_authen"), {
                    userId:that.userId,
                    userName:that.formData.username,
                    bankCardNumber:that.formData.bankcard,
                    idCardNumber:that.formData.usercards
                }, function (result) {
                    console.log(result)
//                  return
                    if( result.returnCode == 1 ){
                        localStorage.setItem("certification",1);
                        // 完成认证跳转到完成认证的页面
                        that.$router.replace({
                            path: '/finishAuthen',
                            query: {
                                showCode:that.showCode
                            }
                        })

                    }else{
                        that.showTips(result.message)
                    }

                })

                // hale的请求方式
//          	this.$http.post('app/aip/userCertification', {
//                  userId:this.userId,
//                  userName:this.formData.username,
//                  bankCardNumber:this.formData.bankcard,
//                  idCardNumber:this.formData.usercards
//              }).then((res) => {
//                  // 关闭加载层
////                  this.closeLoading()
//                  console.log(res)
////                 
//
//              })
//             return 

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
            },

        }
    }

</script>

<style scoped>
    .wrapper{
        /*height: auto;*/
        overflow-y:scroll;
    }
    .realName_top{
        padding: 0.35rem 0;
        background: #F5F5F5;
    }
    .realName_txt1{
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.55rem;
        margin-top: 0.2rem;
    }
    .realName_txt2{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.45rem;
    }
    .realName_list{
        padding: 0.15rem 0.3rem 0;
    }
    .realName_txt3{
        font-size: 0.26rem;
        color: #203395;
        line-height: 1rem;
    }
    .realName_txt4{
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.8rem;
        padding: 0 0.3rem;
    }
    .realName_input{
        text-align: right;
    }
    .INPUT{
        border-bottom: 1px solid #eee;
    }
    .INPUT_account{
        border-bottom: 1px solid #eee;
    }
    .realName_select{
        height: 1rem;
        display: block;
        color: #203395;
        font-size: 0.26rem;
        border: none;
        padding: 0 0.2rem;
        flex: 1;
        position: relative;
        z-index: 1;
        background: none;
        -webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
        -moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
        background: url("../static/images/video_icon/select_down.png") no-repeat right center;
        background-size: 0.3rem  0.3rem;/*图片大小*/
        background-position: 98%;/*图片位置*/
        width: 2rem!important;
        background-color:none;
        text-align:right;
        text-align-last: right;
        padding-right: 0.5rem;
    }
    .realName_select.empty{
        color: #ccc;
    }
    .select_item{
        height: 1rem;
        display: block;
        color: #203395;
        font-size: 0.26rem;
        border: none;
        /*padding: 0 0.2rem;*/
        /*flex: 4;*/
        position: relative;
        z-index: 1;
        background: none;
        -webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
        -moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
        background: url("../static/images/video_icon/select_down.png") no-repeat right center;
        background-size: 0.3rem  0.3rem;/*图片大小*/
        background-position: 98%;/*图片位置*/
        width: 1rem;
        background-color:none;
        text-align:right;
        text-align-last: right;
        padding-right: 0.5rem;
    }
    .realName_select option{
        background: none;

    }
    .realName_select1{
        height: 0.8rem;
        -webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
        -moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
        background: url("../static/images/video_icon/select_down.png") no-repeat right center;
        background-size: 0.3rem  0.3rem;/*图片大小*/
        background-position: 98%;/*图片位置*/
    }
    .realName_select2{
        width: 2.5rem!important;
    }
    .button{
        width: 6.9rem;
        margin-top: 4rem;
    }
    .realName_txt5{
        font-size: 0.22rem;
        color: #E72525;
        line-height: 0.8rem;
        padding: 0 0.3rem;
    }
    /*年月日css*/
    .item select{
        width: 1.5rem;
    }
    .border_bottom{
        border-bottom: 1px solid #eee;
    }
</style>