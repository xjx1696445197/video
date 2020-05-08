<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{title}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="word_txt tcenter">
                    <p class="word_txt1">{{$t('backupsAuxiliaries.backupsAuxiliaries_remind')}}</p>
                    <p class="word_txt1">{{$t('backupsAuxiliaries.backupsAuxiliaries_remindtxt')}}</p>
                </div>
                <div class="word_list">
                    <div
                        class="word_item"
                        v-for="(item, index) in words"
                        :key="item"
                    >{{item}}</div>
                </div>
                <div class="word_btn LONGBTN" @click="toFillWord">{{$t('backupsAuxiliaries.backupsAuxiliaries_next')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "ExportMnemonicWord",
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
            title(){
                return this.target == 'BackupMnemonicWord' ? this.$t('backupsAuxiliaries.backupsAuxiliaries_tips') : this.$t('wallet.wallet_derivedMnemonicsTitle')
            }
        },
        data(){
            return {
                words: []
            }
        },
        mounted(){
            this.getWords()
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 去填写助记词
            toFillWord(){
                this.$push({
                    path: '/fillMnemonicWord',
                    query: {
                        target: this.target
                    }
                })
            },
            // 请求获取顺序助记词的接口
            getWords(){
                this.$http.get(`js/users/getWords/${this.userId}`).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.words = res.result
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .content{
        padding: 1.5rem 1rem 0;
    }
    .word_txt1{
        font-size: .26rem;
        color: #333;
        line-height: .5rem;
    }
    .word_list{
        margin-top: 1.55rem;
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
    .word_btn{
        margin-top: 2rem;
    }
</style>
