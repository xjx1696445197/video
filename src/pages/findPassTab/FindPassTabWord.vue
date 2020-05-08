
<template>
    <div class="page">
        <div class="FORM">
            <textarea class="words" v-model="words" :placeholder="$t('findPassword.findPassword_remind')"></textarea>
        </div>

        <div class="tips mauto">
            <p class="tips_txt1">{{$t('findPassword.findPassword_notice')}}</p>
        </div>
        <div
            class="button LONGBTN"
            @click="toValidate"
        >{{$t('findPassword.findPassword_confirm')}}</div>


        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0.1)"
                :visible="loadingVisible"
                class="NLOADING"
        >
            <div class="LOADING">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve" width="0.8rem" height="0.8rem">
                    <path opacity="0.1" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                    <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
                <p class="LOADING_TXT">{{$t('layerdate.layerdate_loading')}}</p>
            </div>
        </nlayer>


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

    export default {
        name: "FindPassTabWord",
        components: {
            Nlayer
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
            }
        },
        data(){
            return{
                words: '',
                tips: '',
                tipsVisible: false,
                loadingVisible: false,
            }
        },
        methods: {
            // 去验证格式
            toValidate(){
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

                this.submit()
            },
            // 提交信息
            submit(){

                // 打开加载层
                this.showLoading()

                this.$http.post('js/usersLogin/auxiliariesSeekPassword', {
                    auxiliaries: this.wordsTxt
                }).then((res) => {
                    this.closeLoading()
                    this.showTips(res.message)

                    if( res.success ) {
                        setTimeout(() => {
                            this.$back()
                        }, 1200)
                    }
                })
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
        position: static;
        background: #fff;
    }
    .FORM{
        margin-top: 0.35rem;
        padding: 0 1rem;
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
    .tips{
        background: #fafafa;
        border: 1px solid #eee;
        padding: .1rem .2rem;
        border-radius: .1rem;
        margin-top: .35rem;
        width: 5.5rem;
        box-sizing: border-box;
    }
    .tips_txt1{
        font-size: .22rem;
        color: #666;
        line-height: .36rem;
    }
</style>
