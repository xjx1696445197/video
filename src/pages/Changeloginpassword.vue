<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">修改登录密码</p>
        </div>
        <div style="margin-top: .88rem">
            <div><input type="text" v-model="oldpassword" placeholder="请输入当前密码"><span>旧密码</span></div>
            <div><input type="password" v-model="newpassword" placeholder="请输入新密码"><span>新密码</span></div>
            <div><input type="password" v-model="newpasswords" placeholder="请确认新密码"><span>确认新密码</span></div>
            <p><span>密码长度为8-18位数字+字母组合</span>
<!--                <span @click="Retrieveloginpassword">忘记密码</span>-->
            </p>
        </div>
        <div class="footer">
            <button @click="loginpassword">
                确认修改
            </button>
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
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import Nlayer from '@/components/Nlayer'
    export default {
        name: "AboutUs",
        data() {
            return {
                oldpassword:"",
                newpassword:"",
                newpasswords:"",
                tips: '',
                tipsVisible: false,
                token:JSON.parse(localStorage.getItem('userinfo')),
                userId:JSON.parse(localStorage.getItem('userinfo')).customerId
            }
        },
        components: {
            Nlayer
        },
        created(){
            if(JSON.parse(localStorage.getItem('userinfo'))==undefined){
                this.$push({
                    path: '/login'
                })
            }else {

            }
        },
        methods:{
            showTips(msg) {
                this.tips = msg
                this.tipsVisible = true
            },  // 监听消息提示关闭
            tipsClosed() {
                this.msg = ''
                this.tipsVisible = false
            },
            loginpassword(){
                var that=this
                var password=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
                if (that.oldpassword==""){
                    that.showTips("请填写原有密码")
                } else if(!password.test(that.oldpassword)){
                    that.showTips("原有密码格式错误")
                } else if(that.newpassword==""){
                    that.showTips("请填新密码")
                }else if(!password.test(that.newpassword)){
                    that.showTips("新密码格式错误")
                }else if(that.newpasswords==""){
                    that.showTips("请确认新密码")
                }else if(that.newpassword!==that.newpasswords){
                    that.showTips("两次密码不一致")
                }else{

                    jsonAjax.post(urlUtil.getApiUrl("updatePassword"), {customerToken:that.token.customerToken,userId:that.userId,password:that.oldpassword,newPassword:that.newpassword,againNewPassword:that.newpasswords,type:1}, function (result) {
                       if (result.returnCode==0){
                           that.showTips(result.message)
                           if (result.resultData.errorCode && result.resultData.errorCode == "00101") {
                               that.showTips(result.message)
                               // 跳转到登录页面
                               setTimeout(function () {
                                   that.$router.replace({
                                       path: '/login'
                                   })
                               }, 1000)
                           }

                       }else if (result.returnCode==1) {
                           that.showTips(result.message)
                           localStorage.removeItem('userinfo')
                           setTimeout(() => { that.$push({
                               path:"login"
                           })},500)

                       }


                    });
                }

            },
            Retrieveloginpassword(){
                this.$push({
                    path: '/Retrieveloginpassword'
                })
            }

        },

    }
</script>

<style scoped>
    .page{
        color: #333;
        background: white;
    }
    .page>div:nth-of-type(2){
        color: #333;
        padding:.3rem;
    }
    .page>div:nth-of-type(2)>div:nth-of-type(1){
        margin-top: 0rem;

    }
    .page>div:nth-of-type(2)>p{
        display: flex;
        justify-content: space-between;
        height: .8rem;
        line-height: .8rem;
    }
    .page>div:nth-of-type(2)>p span:nth-of-type(2){
        color: #203395;
    }
    .page>div:nth-of-type(2)>p span:nth-of-type(1){
        color: #AAAAAA;
    }
    .page>div:nth-of-type(2)>div {
        margin-top: .3rem;
        position: relative;
        width: 100%;
    }
    .page>div:nth-of-type(2)>div input{
        border: 1px solid #CCCCCC;
        width: 100%;
        padding-left: 2rem;
    }
    .page>div:nth-of-type(2)>div span{
        position: absolute;
        left: .3rem;

    }

    .page>div:nth-of-type(2)>div{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        justify-content: space-between;
    }
    .page>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2){
        display: flex;
    }
    .page>div:nth-of-type(2)>div div:nth-of-type(2){
        font-weight: bold;
    }
    .page>div:nth-of-type(2)>div img{
        width: .3rem;
        height: .35rem;
        margin-top: .31rem;
    }
    .page>div:nth-of-type(2) div:nth-of-type(1) div{

    }
    .footer{
        margin-top: 5rem;
        width: 90%;
        margin-left: 5%;
        margin-bottom: 1rem;
    }
    .footer button{
       width: 100%;
        height: 1rem;
        color: white;
        font-size: .3rem;
        border: none;
        background: #203395;
    }
</style>