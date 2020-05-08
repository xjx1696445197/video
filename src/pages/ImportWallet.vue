<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('wallet.wallet_importTitle')}}</p>
        </div>
        <div class="wrapper">
            <div class="form_wrapper">
                <p class="form_wrapper_txt tcenter">{{$t('wallet.wallet_auxiliaries')}}</p>
                <div class="FORM">
                    <textarea class="words" v-model="words" :placeholder="$t('findPassword.findPassword_remind')"></textarea>
                    <div class="forget">
                        <div class="provision">
                            <div class="checkbox"
                                 :class="[checked ? 'active' : '']"
                                 @click="provisionSelect"
                            ></div>
                            <p class="provision_txt1">{{$t('register.register_readAgree')}}</p>
                            <p class="provision_txt2" @click="toUsingAgreement">{{$t('register.register_agreement')}}</p>
                        </div>
                    </div>
                    <div
                            class="button LONGBTN"
                            @click="validate"
                    >{{$t('wallet.wallet_importBtn')}}</div>
                </div>


            </div>

        </div>


        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0.1)"
                :visible="loadingVisible"
                class="NLOADING"
                :zIndex="1001"
        >
            <div class="LOADING">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve" width="0.8rem" height="0.8rem">
                    <path opacity="0.1" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                    <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
                <p class="LOADING_TXT">{{$t('layerdate.layerdate_importing')}}</p>
            </div>
        </nlayer>


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
    import Nlayer from '@/components/Nlayer'
    import { mapActions,mapGetters } from 'vuex'
    export default {
        name: "ImportWallet",
        components: {
            Nlayer
        },
        data(){
            return {
                words: '',
                fillWords: [],
                tips: '',
                tipsVisible: false,
                checked: false,
                loadingVisible:false
            }
        },
        computed: {
            wordsArr(){
                return this.words.split(',')
            },
            wordsLength(){
                return this.wordsArr.length
            },
            wordsTxt(){
                return this.wordsArr.join('')
            },
            Sidebars(){
                return this.getSidebars()
            },
            path(){
                return this.$route.query.from
            },
        },
        methods:{
            ...mapGetters(['getUsers','getSidebars']),
            ...mapActions(['setUserinfo', 'setUserNoticeState', 'setUsers','setSidebars']),
            // 检测词
            validate(){
                if( this.words == '' ){
                    this.showTips(this.$t('backupsAuxiliaries.backupsAuxiliaries_tip2'))
                    return
                }

                let word = this.words.replace(/,/g, "")
                if(!(/^[a-zA-Z]+$/.test(word))){
                    this.showTips(this.$t('validate.validate_contentError'))
                    return
                }

                if( this.wordsLength < 12 ){
                    this.showTips(this.$t('backupsAuxiliaries.backupsAuxiliaries_tip3'))
                    return
                }

                if( !this.checked ){
                    this.showTips(this.$t('register.register_tip1'))
                    return
                }

                // 打开加载层
                this.showLoading()

                // 检测词
                this.$http.post('js/usersLogin/auxiliariesLogin', {
                    auxiliaries: this.wordsTxt,
                    __HEADERSAUTH: true
                }).then((res) => {
                    console.log(res)
                    // 关闭加载层
                    this.closeLoading()
                    // return
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

                        // 设置侧边栏
                        if(JSON.stringify(this.Sidebars).indexOf(JSON.stringify(userinfo.userName)) === -1 || this.Sidebars.length == 0){
                            // 设置
                            this.setSidebars({
                                username:userinfo.userName,
                                active:true
                            })
                        }else{
                            // 无需设置
                            this.Sidebars.forEach((item, i)=>{
                                if(item.username == userinfo.userName){
                                    item.active = true
                                }else{
                                    item.active = false
                                }
                            })
                        }

                        this.showTips(res.data.message, false)

                        setTimeout(() => {
                            this.$back()
                        }, 2000)


                    }else{
                        this.showTips(res.data.message)
                    }
                })
            },
            // 返回
            toBack(){
                this.$router.replace({
                    path: this.path
                })
            },
            // 勾选使用条款
            provisionSelect(){
                this.checked = !this.checked
            },
            // 去使用条款页面
            toUsingAgreement(){
                this.$push({
                    path: '/usingAgreement'
                })
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
            // 打开加载
            showLoading(){
                console.log('执行了')
                this.loadingVisible = true
            },
            // 关闭加载层
            closeLoading(){
                this.loadingVisible = false
            }
        }
    }
</script>

<style scoped>
    .page{
        /*position: static;*/
        background: #fff;
    }
    .FORM{
        padding: 0 1rem;
        background: #fff
    }
    .form_wrapper{
        padding-top: 0.24rem;
        background: #fafafa;
    }
    .button{
        margin-top: .8rem;

    }
    .words{
        font-size: .26rem;
        color: #e08222;
        line-height: .5rem;
        border-radius: .2rem;
        width: 100%;
        display: block;
        border: 1px solid #e08222;
        height: 4rem;
        padding: .25rem .4rem;
        box-sizing: border-box;
    }
    .form_wrapper_txt{
        font-size: 0.3rem;
        color: #333;
        line-height: 1rem;
        font-weight: bold;
        background: #fff;
    }


    .forget{
        margin-top: 0.5rem;
        height: 0.4rem; align-items: center;
        display: flex;
        justify-content: space-between;
    }
    .provision{
        display: flex;
        height: 100%;
        align-items: center;
    }
    .checkbox{
        position: relative;
        width: 0.25rem;
        height: 0.25rem;
        box-sizing: border-box;
        border: 1px solid #E4811D;
        -webkit-border-radius: 0.02rem;
        -moz-border-radius: 0.02rem;
        border-radius: 0.02rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .checkbox.active:after{
        display: block;
    }
    .checkbox:after{
        position: absolute;
        width: 70%;
        height: 70%;
        display: none;
        background: #e08222;
        content: '';
    }
    .provision_txt1{
        font-size: .22rem;
        color: #333;
        padding-left: .1rem;
    }
    .provision_txt2{
        font-size: .22rem;
        color: #e08222;
    }
    .forget_txt{
        font-size: .26rem;
        color: #e08222;
    }
</style>