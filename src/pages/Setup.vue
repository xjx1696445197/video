<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">设置</p>
        </div>
        <div style="margin-top: .88rem">

            <div @click="Accountandsecurity">
                <div>账号与安全</div>
                <div>
                    <img src="../static/images/icon/notice_icon_right.png">
                </div>
            </div>
            <div @click="changeLanguage">
                <div>语言显示</div>
                <div>
                    <img src="../static/images/icon/notice_icon_right.png">
                </div>
            </div>
<!--            <div>-->
<!--                <div>意见反馈</div>-->
<!--                <div>-->
<!--                    <img src="../static/images/icon/notice_icon_right.png">-->
<!--                </div>-->
<!--            </div>-->
            <div @click="AboutUs">
                <div>关于我们</div>
                <div>
                    <img src="../static/images/icon/notice_icon_right.png">
                </div>
            </div>
        </div>
<div class="Logout" @click="Logout">退出登录</div>
    </div>
</template>

<script>
    export default {
        methods:{
            Accountandsecurity(){
                this.$push({
                    path: '/Accountandsecurity'
                })
            },
            changeLanguage(){
                this.$push({
                    path: '/changeLanguage'
                })
            },
            AboutUs(){
                this.$push({
                    path: '/AboutUs'
                })
            },
            Logout(){
                localStorage.removeItem('userinfo')
                this.$push({
                    path: '/login'
                })
            }
        },created() {
            if(JSON.parse(localStorage.getItem('userinfo'))==undefined){
                this.$push({
                    path: '/login'
                })
            }else {

            }

        }
    }
</script>

<style scoped>
    .page{
        background: #F5F5F5;
    }
    .page>div:nth-of-type(2){
        background: white;
        color: #333;
        padding:0 .3rem;
    }
    .page>div:nth-of-type(2)>div{
        border-bottom: 1px solid #EEEEEE;
        display: flex;
        height: 1rem;
        line-height: 1rem;
        justify-content: space-between;
    }
    .page>div:nth-of-type(2)>div:nth-of-type(3){
        border: none;
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
    .Logout{
        text-align: center;
        width: 100%;
        height: 1rem;
        font-size: .3rem;
        font-weight: bold;
        background: white;
        line-height: 1rem;
        margin-top: .2rem;
    }
</style>