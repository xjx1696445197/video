<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">账号与安全</p>
        </div>
        <div style="margin-top: .88rem">

            <div @click="Changeloginpassword">
                <div>修改登录密码</div>
                <div>
                    <img src="../static/images/icon/notice_icon_right.png">
                </div>
            </div>
            <div @click="Changetransactionpassword">
                <div>修改交易密码</div>
                <div>
                    <img src="../static/images/icon/notice_icon_right.png">
                </div>
            </div>
            <div   @click="toIdCardAuthen">
                <div>实名认证</div>
                <div>
                    <img src="../static/images/icon/notice_icon_right.png">
                </div>
            </div>
<!--            <div   @click="toChangeTel">-->
<!--                <div>更换手机号</div>-->
<!--                <div>-->
<!--                    <img src="../static/images/icon/notice_icon_right.png">-->
<!--                </div>-->
<!--            </div>-->
        </div>

    </div>
</template>

<script>
    export default {
        methods:{
            Changeloginpassword(){
                this.$push({
                    path: '/Changeloginpassword'
                })
            },
            toIdCardAuthen(){
                if(!JSON.parse(localStorage.getItem('certification'))){
                    this.$push({
                        path: '/realNameAuthen'
                    })
                }else{
                    this.$push({
                        path: '/finishAuthen',
                        query: {
                            showCode:JSON.parse(localStorage.getItem('userinfo')).showCode
                        }
                    })
                }
            },
            Changetransactionpassword(){
                if(localStorage.getItem('transPass')=="true"){

                    this.$push({
                        path: '/Changetransactionpassword'
                    })
                }else {
                    this.$push({
                        path: '/Transaction'
                    })
                }

            },
            // 更换手机号
            toChangeTel(){
                this.$push({
                    path: '/changeTel'
                })
            }
        }
    }
</script>

<style scoped>
    .page{
        background: white;
    }
    .page>div:nth-of-type(2){
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
</style>