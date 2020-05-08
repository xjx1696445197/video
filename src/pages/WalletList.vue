<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('wallet.wallet_title')}}</p>
        </div>
        <div class="wrapper">
            <div class="wallet_scroll">
                <div class="wallet_list">
                    <div class="wallet_item"
                         v-for="(item, index) in userList"
                         :key="index"
                         @click="toDetail"
                         :data-id="index"
                    >
                        <div class="wallet_item_pic radius-round">
                            <img src="../static/images/default/default_headImg.png">
                        </div>
                        <p class="wallet_item_txt1">{{item.username}}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="selectbar LONGBTN">
            <p class="selectbar_txt selectbar_create"
                @click="toRegister"
            >{{$t('wallet.wallet_create')}}</p>
            <p class="selectbar_txt selectbar_import"
               @click="toImport"
            >{{$t('wallet.wallet_import')}}</p>
        </div>
        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1500"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>

    </div>
</template>

<script>
    import { mapGetters ,mapActions} from 'vuex'
    import Nlayer from '@/components/Nlayer'

    export default {
        name: "WalletList",
        components: {
            Nlayer
        },
        data(){
            return {
                userList:[],
                tips: '',
                tipsVisible: false,
            }
        },
        mounted(){
            // 判断是否有数据
            this.isSidebars()
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            Sidebars(){
                return this.getSidebars()
            },
        },
        methods: {
            ...mapActions(['setUserNoticeState', 'setNeedUpdate','setUserinfo','setUsers','removeUserinfo','setSidebars']),
            ...mapGetters(['getUserinfo', 'getSystemNotice', 'getTransferNotice', 'getNeedUpdate', 'getUpdateDetail','getSidebars']),
            // 检测缓存是否有数据
            isSidebars(){
                if(this.Sidebars.length > 0){
                    this.userList = this.Sidebars
                }else{
                    this.userList = []
                }
            },
            toDetail(e){
                const {
                    id
                } = e.currentTarget.dataset
                console.log('点击了')
                console.log(id)
                // 找到当前的加active
                // if( id == index ){
                //     this.userList[id].active = true
                // }
                this.userList.forEach((item, i)=>{
                    // console.log(item.username,this.userName)

                    if(i == id){

                        item.active = true
                    }else{
                        item.active = false
                    }

                })
                // 更换信息e
                // 根据当前选择的用户名去请求切换接口
                this.$http.post('js/usersLogin/getTokenByUserId', {
                    userName: this.userList[id].username,
                    __HEADERSAUTH: true
                }).then((res) => {
                    console.log(res,res.headers)
                    if(res.data.success){
                        console.log(res.headers)
                        let userinfo = res.data.result
                        const { token } = res.headers
                        // this.removeUserinfo()
                        // 保存用户信息
                        this.setUserinfo({
                            ...userinfo,
                            token
                        })
                        // 保存用户名
                        this.setUsers(userinfo.userName)

                        this.loginSuccess = true
                        this.showTips(res.message, false)

                    }else{
                        this.showTips(res.message)
                    }

                })
                this.$push({
                    path: '/walletDetail'
                })
            },
            // 去注册
            toRegister(){
                console.log('点击了创建')
                this.$push({
                    path: '/register',
                    query: {
                        from: 'create'
                    }
                })
                // this.$push({
                //     path: '/register'
                // })
            },
            // 去导入
            toImport(){
                console.log('点击了导入')
                // this.$router.replace({
                //     path: '/importWallet'
                // })
                this.$push({
                    path: '/importWallet',
                    query: {
                        from:'/walletList'
                    }

                })
                // this.$push({
                //     path: '/importWallet'
                // })
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
            }
        }
    }
</script>

<style scoped>
    .page{
        background: #fafafa;
    }
    .wallet_scroll{
        position: absolute;
        bottom: 1.1rem;
        top: 1rem;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
    .wallet_list{
        padding: .24rem .3rem;

    }
    .wallet_item{
        position: relative;
        padding: 0.5rem .25rem;
        /*padding-right: 0.8rem;*/
        border-radius: 0.2rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
        display: flex;
        align-items: center;
    }
    .wallet_item:after{
        content: '';
        position: absolute;
        background: url("../static/images/icon/notice_icon_right.png") no-repeat center center/cover;
        width: .4rem;
        height: .4rem;
        right: 0.25rem;
    }
    .wallet_item+.wallet_item{
        margin-top: 0.24rem;
    }
    .wallet_item_pic{
        width: 1.2rem;
        height: 1.2rem;
        overflow: hidden;
    }
    .wallet_item_pic img{
        display: block; width: 100%;
        height: 100%;
    }
    .wallet_item_txt1{
        flex: 1;
        padding-left: .3rem;
        font-size: .34rem;
        color: #333;
        line-height: .55rem;
    }

    .selectbar{
        position: relative;
        bottom: 0.9rem;
        left: 0;
        height: 0.7rem;

    }
    .selectbar:after{
        position: absolute;
        content: '';
        width: 0.02rem;
        height: 0.3rem;
        background: #fff;
        top: 50%;
        transform: translateY(-50%);
    }
    .selectbar_txt{
        font-size: .3rem;
        color: #fff;
        line-height: .7rem;
        position: absolute;
        top: 0;
        width: 50%;
        text-align: center;
    }
    .selectbar_create{
        left: 0;
    }
    .selectbar_import{
        right: 0;
    }
</style>
