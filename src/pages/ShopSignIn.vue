<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">每日签到</p>
        </div>
        <div class="wrapper">
            <div class='cion_head czt txt_center'>
                <div class='cion'>
                    <div>当前奖励</div>
                    <div class='f15' v-if="!nowCheck">{{nowJiangli}}</div>
                    <div class='f15' v-else>+{{jiangli}}积分</div>
                </div>

                <div class='cion_b f0'>
                    <img class='img' src='../static/images/shop/qdbg_02.png'>
                </div>
            </div>
            <div class='sign_div'>
                <div class='pad_t10 pad_b10 f16 txt_center border_b'>{{now_month}}月</div>
                <div class='clear txt_center'>
                    <div v-for="(item,index) in riliList" class="L col14 rizi txt_center" :class="item.num<now_q?'no':''">
                        <div class="riziquan hasbg"
                             :class="item.num<(now_q+1)?'hasbg':''"

                        >{{item.num}}</div>
                    </div>
                </div>
                <div class='txt_center pad_t10 pad_b10'>
                    <div class='btn_sign' v-if="!nowCheck">签到</div>
                    <div class='btn_sign gray' v-else>已签到</div>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Nlayer from '@/components/Nlayer'

    export default {
        name: "PersonalCenter",
        components: {
            Nlayer
        },
        data(){
            return {
                nowCheck:false,
                nowJiangli:'20',
                jiangli:'20',
                now_month:'11',
                nowCheck:false,
                now_q:'11',
                loadingVisible: false,
                password: '',
                tips: '',
                tipsVisible: false,
                dialogVisible: false,
                passwordDigVisible: false,
                noPasswordDigVisible: false,
                nickName: '',
                change:'',
                riliList:[
                    {"day":1,"hasSigned":false},{"day":2,"hasSigned":false},{"day":3,"hasSigned":false},{"day":4,"hasSigned":false},{"day":5,"hasSigned":false},{"day":6,"hasSigned":false},{"day":7,"hasSigned":false},{"day":8,"hasSigned":false},{"day":9,"hasSigned":false},{"day":10,"hasSigned":false},{"day":11,"hasSigned":false},{"day":12,"hasSigned":false},{"day":13,"hasSigned":true},{"day":14,"hasSigned":false},{"day":15,"hasSigned":false},{"day":16,"hasSigned":false},{"day":17,"hasSigned":false},{"day":18,"hasSigned":false},{"day":19,"hasSigned":false},{"day":20,"hasSigned":false},{"day":21,"hasSigned":false},{"day":22,"hasSigned":true},{"day":23,"hasSigned":false},{"day":24,"hasSigned":false},{"day":25,"hasSigned":false},{"day":26,"hasSigned":false},{"day":27,"hasSigned":false},{"day":28,"hasSigned":false},{"day":29,"hasSigned":false},{"day":30,"hasSigned":false}
                ]
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            mobilePhone(){
                return this.userinfo.mobilePhone == 'false' ? false : this.userinfo.mobilePhone
            },
            email(){
                return this.userinfo.email == 'false' ? false : this.userinfo.email
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            Sidebars(){
                return this.getSidebars()
            },
        },
        methods: {
            ...mapGetters(['getUserinfo','getSidebars']),
            ...mapActions(['removeUserinfo', 'setUserinfo', 'setUserNoticeState','setSidebars']),
            // 修改昵称
            modifyNickname(){
                this.showLoading()

                this.$http.get('js/users/updateNickName', {
                    userId : this.userId,
                    nickName: this.nickName
                }).then((res) => {
                    if( res.success ){
                        this.showTips(this.$t('myMessageSetup.myMessageSetup_update'))

                        // 设置最新的用户信息
                        this.setUserinfo({
                            ...this.userinfo,
                            nickName: this.nickName
                        })
                    }
                    this.closeLoading()
                    this.closeDialog()
                })
            },
            // 验证直接跳转还是需要二级密码
            vlidateBindTel(){
                if(!this.mobilePhone){
                // 去绑定
                    this.$push({
                        path: '/bind',
                        query: {
                            name: 'tel'
                        }
                    })

                }else{
                    this.vlidateLockData('tel')
                }
            },
            // 验证
            vlidateBindEmail(){
                if(!this.email){
                    // 去绑定
                    this.$push({
                        path: '/bind',
                        query: {
                            name: 'email'
                        }
                    })

                }else{
                    this.vlidateLockData('email')
                }
            },
            // 验证是否有二级密码
            vlidateLockData(modifyName){
                this.change = modifyName
                console.log(this.change)
                console.log(this.userinfo.transPwd)
                if( this.userinfo.transPwd ){

                    // 有交易密码
                    this.openPasswordDig()
                } else {
                    // 无交易密码
                    this.openNoPasswordDig()
                }

            },
            // 去设置交易密码
            toSetDealPassword(){
                this.$push({
                    path: '/setPassword'
                })
            },
            // 检测交易密码是否正确
            checkPassword(){
                this.$http.post('js/users/isCorrectTransPass',{
                    userId: this.userId,
                    transPass: this.password
                }).then((res) => {
                    if( res.success ){
                        if(this.change == 'tel'){
                            // 跳转修改绑定的页面
                            this.$push({
                                path: '/modifyBind',
                                query: {
                                    name: 'modifyBindTel',
                                    number: this.mobilePhone
                                }
                            })
                        }else{
                            // 跳转修改绑定的页面
                            this.$push({
                                path: '/modifyBind',
                                query: {
                                    name: 'modifyBindEmail',
                                    number: this.email
                                }
                            })
                        }

                    } else {
                        this.showTips(res.message)
                        this.password = ''
                    }
                })
            },

            // 退出登录
            loginOut(){
                console.log(this.Sidebars)
                this.Sidebars.forEach((item,i)=>{
                    item.active = false
                })

                console.log(this.Sidebars)
                this.setSidebars(...this.Sidebars)
                // return
                this.removeUserinfo()


                this.setUserNoticeState()
                this.showTips(this.$t('myMessageSetup.myMessageSetup_logout'))
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

                if( !this.userinfo ){
                    this.$replace({
                        name: 'My'
                    }, false)
                }
            },
            // 关闭加载层
            closeLoading(){
                this.loadingVisible = false
            },
            // 打开dialog修改层
            showDialog(){
                this.dialogVisible = true
            },
            // 关闭dialog修改层
            closeDialog(){
                this.dialogVisible = false
            },
            // 关闭无密码提示弹窗
            closeNoPasswordDig(){
                this.noPasswordDigVisible = false
            },
            // 打开无密码提示弹窗
            openNoPasswordDig(){
                this.noPasswordDigVisible = true
            },
            // 监听关闭无密码弹窗事件
            noPasswordDigClose(){
                this.noPasswordDigVisible = false
            },
            // 关闭密码弹窗
            closePasswordDig(){
                this.passwordDigVisible = false
                this.password = ''
            },
            // 打开密码弹窗
            openPasswordDig(){
                this.passwordDigVisible = true
            },
            // 监听关闭密码弹窗事件
            passwordDigClose(){
                this.passwordDigVisible = false
                this.password = ''
            }
        }
    }
</script>

<style scoped>
    .page{
        background: #fff;
    }
    .cion_head {
        /*height: 357px;*/
        position: relative;
    }

    .cion_head .cion {
        z-index: 1;
        position: absolute;
        left: 0;
        /*top: 30%;*/
        right: 0;
        bottom: 0;
        padding-bottom: 0.2rem;
    }

    .cion_head .img {
        width: 100%;
    }

    /*.cion_head .cion {*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*padding-bottom: 20px;*/
    /*text-align: center;*/
    /*z-index: 2;*/
    /*}*/

    .sign_div {
        margin: 0px 0.2rem;
        background: #fff;
        border-radius: 0 0 0.12rem 0.12rem;
        padding: 0 0.2rem;
    }

    .sign_div .riziquan {
        display: inline-block;
        vertical-align: middle;
        width: 0.8rem;
        height: 0.8rem;
        text-align: center;
        border-radius: 50%;
        line-height: 0.8rem;
        margin: 0.1rem auto;
    }

    .sign_div .riziquan.hasbg {
        background: #ec683c;
        color: #fff;
        box-shadow: 0.04rem 0.04rem 0.06rem #fff;
    }

    .sign_div .rizi.no .riziquan.hasbg {
        background: #dcdcdc;
    }

    .btn_sign {
        display: inline-block;
        width: 2rem;
        border-radius: 0.08rem;
        padding: 0.08rem 0;
        color: #fff;
        background: #ff0036;
    }

    .btn_sign.gray {
        background: #dcdcdc;
    }
</style>
