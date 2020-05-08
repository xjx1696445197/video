<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('backupsAuxiliaries.backupsAuxiliaries_fillin_title')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="word_box">
                    <div class="word_list" style="margin-top: 0;">
                        <div
                                class="word_box_item"
                                v-for="(item, index) in fillWords"
                                :key="item"
                                @click="removeItem(index)"
                        >{{item}}</div>
                    </div>
                </div>

                <div class="word_list">
                    <div
                        class="word_item"
                        v-for="(item, index) in words"
                        :key="item"
                        @click="selectItem(index)"
                    >{{item}}</div>
                </div>

                <div class="word_btn LONGBTN" @click="validate">{{$t('backupsAuxiliaries.backupsAuxiliaries_next')}}</div>
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
        name: "FillMnemonicWord",
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
            }
        },
        data(){
            return {
                words: [],
                fillWords: [],
                tips: '',
                tipsVisible: false,
            }
        },
        mounted(){
            this.getWords()
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 检测词
            validate(){

                if( this.fillWords.length == 0 ){
                    this.showTips(this.$t('backupsAuxiliaries.backupsAuxiliaries_tip4'))
                    return
                }

                if( this.fillWords.length < 12 ){
                    this.showTips(this.$t('backupsAuxiliaries.backupsAuxiliaries_tip5'))
                    return
                }

                // 验证助记词顺序
                this.$http.post('js/users/verificationAuxiliaries', {
                    auxiliaries: this.fillWords.join(''),
                    userId: this.userId
                }).then((res) => {
                    this.showTips(res.message)
                    if( res.success ){
                        setTimeout(() => {
                            if( this.target == 'BackupMnemonicWord' ){
                                this.$router.go(-3)
                                this.$replace({
                                    path: '/asset'
                                }, false)
                            } else if( this.target == 'WalletDetail' ){
                                this.$go(-2)
                            }

                        }, 1200)
                    }
                })
            },
            // 请求获取乱序助记词的接口
            getWords(){
                this.$http.get(`js/users/getUsersRandomWordById/${this.userId}`).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.words = res.result
                    }
                })
            },
            // 选中词
            selectItem(index){
                const word = this.words.splice(index, 1)
                this.fillWords.push(...word)
            },
            // 删除词
            removeItem(index){
                const word = this.fillWords.splice(index, 1)
                this.words.push(...word)
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
        padding: .65rem 1rem 0;
    }
    .word_box{
        border: 1px solid #e08222;
        min-height: 4rem;
        border-radius: .2rem;
        padding: 0 .25rem 0.3rem;
        box-sizing: border-box;
    }
    .word_list{
        margin-top: .55rem;
        display: flex;
        flex-wrap: wrap;
    }
    .word_item{
        font-size: .3rem;
        color: #333;
        line-height: .5rem;
        padding: 0 .25rem;
        background: #eee;
        border-radius: .05rem;
        margin-top: .3rem;
        margin-right: .25rem;

    }

    .word_box_item{
        color: #e08222;
        margin-top: .3rem;
        margin-right: .25rem;
        font-size: .3rem;
        line-height: .5rem;
        height: 0.5rem;
    }

    .word_btn{
        margin-top: 1.2rem;
    }
</style>
