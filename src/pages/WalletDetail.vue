<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('wallet.wallet_title')}}</p>
        </div>
        <div class="header">
            <div class="logo radius-round"></div>
            <!--<p class=" v-text="userinfo && userinfo.nickName || $t('myMessageSetup.myMessageSetup_noBind')"></p>-->
            <p class="username thide tcenter" v-text="userinfo && userinfo.nickName || $t('myMessageSetup.myMessageSetup_noBind')"></p>
        </div>
        <div class="content">
            <div class="LIST ARROW">
                <div class="ITEM noflex">
                    <p class="noflex_txt1">{{$t('wallet.wallet_walletName')}}</p>
                    <p class="noflex_txt2" v-text="userinfo && userinfo.nickName || $t('myMessageSetup.myMessageSetup_noBind')"></p>
                </div>
                <div class="ITEM" @click="toModifyLoginPassword">
                    <p class="ITEM_TXT">{{$t('wallet.wallet_updateLoginPwd')}}</p>
                </div>
                <div class="ITEM" @click="toModifyDealPassword">
                    <p class="ITEM_TXT">{{$t('wallet.wallet_updateTransactionPwd')}}</p>
                </div>
                <div class="ITEM" @click="toExportMnemonicWord">
                    <p class="ITEM_TXT">{{$t('wallet.wallet_derivedMnemonics')}}</p>
                </div>
            </div>
        </div>

        <div class="LONGBTN del"
            @click="toDel"
        >删除钱包</div>




        <nlayer
                :visible="noPasswordDigVisible"
                @close="noPasswordDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_tips')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    {{$t('layerdate.layerdate_setPwd')}}
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closeNoPasswordDig'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='to'
                            data-path="/setPassword"
                    >{{$t('layerdate.layerdate_set')}}</div>
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
                :zIndex="1001"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>

        <nlayer
                :visible="passwordDigVisible"
                @close="passwordDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_enterTransactionPwd')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    <input type="password"
                           class="PASSWORD_INPUT"
                           :placeholder="$t('layerdate.layerdate_enterTransactionPwd')"
                           v-model="password"
                    >
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closePasswordDig'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='checkPassword'
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>



        <nlayer
                :visible="passwordDigDelVisible"
                @close="passwordDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="1000"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_enterTransactionPwd')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    <input type="password"
                           class="PASSWORD_INPUT"
                           :placeholder="$t('layerdate.layerdate_enterTransactionPwd')"
                           v-model="password"
                    >
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closePasswordDigDel'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='checkPasswordDel'
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>



        <nlayer
                :visible="noDelDigVisible"
                @close="noDelDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_tips')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    {{$t('layerdate.layerdate_user')}}
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='noDelDigClose'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='loginOut'
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    import Nlayer from 'components/Nlayer'

    export default {
        name: "WalletDetail",
        components: {
            Nlayer
        },

        data(){
            return {
                tips: '',
                tipsVisible: false,
                passwordDigVisible: false,
                noPasswordDigVisible: false,
                password: '',
                noDelDigVisible:false,
                passwordDigDelVisible:false
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            hasPwd(){
                return this.userinfo.transPwd
            },
            Sidebars(){
                return this.getSidebars()
            },
        },
        methods: {
            ...mapGetters(['getUsers','getSidebars','getUserinfo']),
            ...mapActions(['removeUserinfo', 'setUserinfo', 'setUserNoticeState', 'setUsers','setSidebars']),

            // 去修改登录密码
            toModifyLoginPassword(){
                this.$push({
                    path: '/modifyPassword',
                    query: {
                        target: 'loginPwd'
                    }
                })
            },
            // 去修改交易密码
            toModifyDealPassword(){
                if( !this.hasPwd ){
                    this.openNoPasswordDig()
                    return
                }

                this.$push({
                    path: '/modifyPassword',
                    query: {
                        target: 'dealPwd'
                    }
                })
            },
            // 去导出助记词
            toExportMnemonicWord(){
                if( !this.hasPwd ){
                    this.openNoPasswordDig()
                    return
                }

                this.openPasswordDig()
            },
            // 跳转页面
            to(e){
                const { path } = e.currentTarget.dataset

                this.$push({ path })
            },
            // 检测交易密码是否正确
            checkPassword(){
                this.$http.post('js/users/isCorrectTransPass',{
                    userId: this.userId,
                    transPass: this.password
                }).then((res) => {
                    if( res.success ){
                        this.$push({
                            path: '/exportMnemonicWord',
                            query: {
                                target: 'WalletDetail'
                            }
                        })
                    } else {
                        this.showTips(res.message)
                        this.password = ''
                    }
                })
            },
            // 检测交易密码是否正确 正确删除
            checkPasswordDel(){
                this.$http.post('js/users/isCorrectTransPass',{
                    userId: this.userId,
                    transPass: this.password
                }).then((res) => {
                    if( res.success ){
                        // 删除缓存中的值
                        for (let i = 0;i < this.Sidebars.length; i++){
                            if (this.Sidebars[i].username===this.userinfo.userName){
                                this.Sidebars.splice(i,1);
                            }
                        }


                        if( this.Sidebars.length > 0 ){
                            this.Sidebars.forEach((item,i)=>{
                                item.active = false
                            })
                            // 重新赋值
                            this.setSidebars(...this.Sidebars)
                        }

                        this.removeUserinfo()
                        this.setUserNoticeState()
                        this.passwordDigDelVisible = false
                        this.showTips('删除成功')

                        setTimeout(() => {
                            this.$router.replace({
                                path: '/asset'
                            })
                        }, 1000)
                    } else {
                        this.showTips(res.message)
                        this.password = ''
                    }
                })


            },
            toDel(){
            //    删除钱包
                this.openDelDig()

            },
            // 退出登录
            loginOut(){
                if( !this.hasPwd ){
                    this.openNoPasswordDig()
                    return
                }
                // 关闭弹窗
                this.noDelDigClose()
                this.openPasswordDigDel()
                // console.log(this.userinfo)

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
            // 监听无密码框关闭
            noPasswordDigClose(){
                this.noPasswordDigVisible = false
            },
            // 关闭无密码框
            closeNoPasswordDig(){
                this.noPasswordDigVisible = false
            },
            // 打开无密码框
            openNoPasswordDig(){
                this.noPasswordDigVisible = true
            },
            // 打开删除提示
            openDelDig(){
                this.noDelDigVisible = true
            },
            noDelDigClose(){
                this.noDelDigVisible = false
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
            // 打开删除密码弹窗
            openPasswordDigDel(){
                this.passwordDigDelVisible = true
            },
            // 关闭删除账号弹窗
            closePasswordDigDel(){
                this.passwordDigDelVisible = false
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
    .HEADER{
        background: none;
    }
    .ITEM.noflex{
        display: block;
        padding: 0.24rem 0;
        height: auto;
    }
    .ITEM.noflex:after{
        display: none;
    }
    .noflex_txt1{
        font-size: .26rem;
        color: #333;
        line-height: .5rem;
    }
    .noflex_txt2{
        font-size: .3rem;
        color: #333;
        line-height: .45rem;
    }
    .header{
        position: relative;
        height: 4.7rem;
        background: url("../static/images/bg/bg_top470.png") no-repeat center center / cover;
    }
    .logo{
        position: absolute;
        width: 1.82rem;
        height: 1.82rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,.3);
        left: 50%;
        transform: translateX(-50%);
        top: 1.2rem;
        background: url("../static/images/default/default_headImg.png") no-repeat center center / cover;
    }
    .username{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 3.3rem;
        font-size: .4rem;
        color: #fff;
        line-height: .6rem;
        max-width: 3rem;
    }
    .content{
        padding:0.1rem .3rem 0;
    }
    .del{
        position: fixed;
        bottom: 0.8rem;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
