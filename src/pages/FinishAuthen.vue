<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">实名认证</p>
        </div>
        <div class="wrapper">
            <div class="finishAuthen_top">
                <div class="finishAuthen_top_icon mauto"></div>
                <p class="finishAuthen_txt1 tcenter">完成实名认证</p>
            </div>
            <div class="finishAuthen_list_wrapper">
                <div class="finishAuthen_list">
                    <div class="finishAuthen_item clearfix">
                        <p class="finishAuthen_txt2 fl">真实姓名</p>
                        <p class="finishAuthen_txt3 fr">{{realName}}</p>
                    </div>
                    <div class="finishAuthen_item clearfix">
                        <p class="finishAuthen_txt2 fl"  v-if="showCode==1">身份证号</p>
                        <p class="finishAuthen_txt2 fl"  v-if="showCode==2">港澳居民来往内地通行证</p>
                        <p class="finishAuthen_txt2 fl"  v-if="showCode==3">台湾居民来往内地通行证</p>
                        <p class="finishAuthen_txt3 fr">{{detail.idCardNumber | idCardFormat}}</p>
                    </div>
                    <!--<div class="finishAuthen_item clearfix">
                        <p class="finishAuthen_txt3 fr" style="padding-right: 0.5rem">{{detail.province}}    {{detail.city}}   {{detail.county}}（县 ）    </p>
                    </div>-->
                    <div class="finishAuthen_item clearfix">
                        <p class="finishAuthen_txt2 fl" v-if="showCode==1">刷脸认证</p>
                        <p class="finishAuthen_txt2 fl" v-if="showCode==2">银行卡认证</p>
                        <p class="finishAuthen_txt2 fl" v-if="showCode==3">银行卡认证</p>
                        <p class="finishAuthen_txt3 fr" style="color: #E72525;">已认证</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex'

    export default {
        name: "FinishAuthen",
        data () {
            return {
                detail:{},
                realName:''
            }
        },
        mounted(){
            // 判断是否有数据
            this.isLogin()
        },
        computed:{
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
            showCode(){
                return this.$route.query.showCode
            },
        },
        methods: {
            ...mapActions(['setUserinfo']),
            ...mapGetters(['getUserinfo']),
            // 检测用户是否登录
            isLogin(){
                if( this.userinfo ){
                    // 请求用户信息
                    this.getUserInfo()
                } else {
                    // 跳转到登录页面
                    this.$router.replace({
                        path: '/login'
                    })

                }
            },
        //    获取当前实名认证信息
            getUserInfo(){
                this.$http.get('app/aip/findUserInfo', {
                    userId: this.userId
                }).then((res) => {
                    console.log(res)
                    if( res.returnCode == 1 ){
                        this.detail = res.resultData
                        this.realName = "*"+this.detail.userName.substring(1,this.detail.userName.length)
                        this.setUserinfo({
                            ...this.userinfo,
                            certification: 1
                        })
                        localStorage.setItem('certification', 1)
                    }
                })
            },
        //    返回我的
            toMy(){
                this.$router.replace({
                    path: '/my'
                })
            }
        }
    }
</script>

<style scoped>
    .page{
        background: #fff;
    }
    .finishAuthen_top{
        padding: 0.6rem 0 0.4rem;
    }
    .finishAuthen_top_icon{
        width: 1.3rem;
        height: 1.3rem;
        background: url("../static/images/video_icon/icon_success.png")no-repeat center center / cover;
    }
    .finishAuthen_txt1{
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.55rem;
        margin-top: 0.3rem;
    }
    .finishAuthen_list_wrapper{
        background: #F5F5F5;
        padding-top: 0.2rem;
    }
    .finishAuthen_list{
        background: #fff;
    }
    .finishAuthen_list{
        padding: 0 0.3rem;
    }
    .finishAuthen_item{
        border-bottom: 1px solid #EEE;
    }
    .finishAuthen_txt2{
        font-size: 0.26rem;
        color: #333;
        line-height: 1rem;
    }
    .finishAuthen_txt3{
        font-size: 0.26rem;
        color: #203395;
        line-height: 1rem;
    }
</style>