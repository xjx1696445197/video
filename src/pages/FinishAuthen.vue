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
                        <p class="finishAuthen_txt2 fl" v-if="showCode==1">身份证号</p>
                        <p class="finishAuthen_txt2 fl" v-if="showCode==2">港澳居民身份证</p>
                        <p class="finishAuthen_txt2 fl" v-if="showCode==3">台湾居民身份证</p>
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
        <nlayer
                :autoClose="1200"
                :maskCancel="false"
                :visible="tipsVisible"
                :zIndex="1000"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
                maskBackgroundColor="rgba(0,0,0,0)"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import Nlayer from '@/components/Nlayer'

    export default {
        name: "FinishAuthen",
        components: {
            Nlayer
        },
        data() {
            return {
                detail: {},
                realName: '',
                tips: '',
                tipsVisible: false,
            }
        },
        mounted() {
            // 判断是否有数据
            this.isLogin()
        },
        computed: {
            userinfo() {
                return this.getUserinfo()
            },
            userId() {
                return this.userinfo.customerId
            },
            customerToken() {
                return this.userinfo.customerToken
            },
            showCode() {
                return this.$route.query.showCode
            },
        },
        methods: {
            ...mapActions(['setUserinfo', 'setUserinfo']),
            ...mapGetters(['getUserinfo']),
            // 打开消息提示
            showTips(msg) {
                console.log(msg)
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed() {
                this.msg = ''
                this.tipsVisible = false
            },
            // 检测用户是否登录
            isLogin() {
                if (this.userinfo) {
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
                var that = this;
                this.$http.get('app/aip/findUserInfo', {
                    userId: this.userId,
                    customerToken: this.customerToken
                }).then((res) => {
                    console.log(res)
                    if (res.returnCode == 1) {
                        this.detail = res.resultData
                        this.realName = "*" + this.detail.userName.substring(1, this.detail.userName.length)
                        this.setUserinfo({
                            ...this.userinfo,
                            certification: 1
                        })
                        localStorage.setItem('certification', 1)
                    } else {
                        that.showTips(res.message)
                        // 跳转到登录页面
                        setTimeout(function () {
                            that.$router.replace({
                                path: '/login'
                            })
                        }, 1000)
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