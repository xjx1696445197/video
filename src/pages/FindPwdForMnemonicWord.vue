<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('backupsAuxiliaries.backupsAuxiliaries_fillin_title')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <textarea
                    class="word_box"
                    :placeholder="$t('backupsAuxiliaries.backupsAuxiliaries_tip1')"
                    v-model="words"
                ></textarea>
                <div class="word_btn LONGBTN" @click="validate">{{$t('layerdate.layerdate_btnOk')}}</div>
            </div>
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
    import { mapGetters } from 'vuex'
    import Nlayer from '@/components/Nlayer'

    export default {
        name: "FindPwdForMnemonicWord",
        components: {
            Nlayer
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            target(){
                return this.$route.query.target
            },
            wordsTxt(){
                return this.words.split(',').join('')
            },
            wordsArr(){
                return this.words.split(',')
            },
            wordsLength(){
                return this.wordsArr.length
            }
        },
        data(){
            return {
                words: '',
                tips: '',
                tipsVisible: false,
            }
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 检测词
            validate(){
                if( this.words == '' ){
                    this.showTips(this.$t('backupsAuxiliaries.backupsAuxiliaries_tip2'))
                    return
                }

                if( this.wordsLength < 12 ){
                    this.showTips(this.$t('backupsAuxiliaries.backupsAuxiliaries_tip3'))
                    return
                }

                // 验证助记词顺序
                this.$http.post('js/users/verificationAuxiliaries', {
                    auxiliaries: this.wordsTxt,
                    userId: this.userId
                }).then((res) => {
                    this.showTips(res.message)
                    if( res.success ){
                        setTimeout(() => {
                            this.$push({
                                path: '/modifyPassword2',
                                query: {
                                    target: this.target
                                }
                            })
                        }, 1200)
                    }
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
            }
        }
    }
</script>

<style scoped>
    .content {
        height: 100%; box-sizing: border-box;
        padding: .65rem 1rem 0;
    }
    .word_box{
        border: 1px solid #e08222;
        min-height: 4rem;
        border-radius: .2rem;
        padding: .25rem .4rem;
        box-sizing: border-box;
        width: 100%;
        display: block;
        font-size: .26rem;
        color: #e08222;
        line-height: .5rem;
    }

    .word_btn{
        margin-top: 0.7rem;
    }
</style>
