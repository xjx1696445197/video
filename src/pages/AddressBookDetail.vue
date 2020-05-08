<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('addressBook.addressBook_detail')}}</p>
            <div
                    class="HEADER_RIGHT edit"
                    @click="go"
                    data-path="/editAddressBook"
            >{{$t('addressBook.addressBook_edit')}}</div>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="LIST">
                    <div class="ITEM1">
                        <p class="ITEM_TXT">{{$t('addressBook.addressBook_username')}}<span class="ITEM_TXT" style="margin-left: 0.25rem;">{{detail.contactsSurname}}{{detail.contactsName}}</span></p>

                    </div>
                    <div class="ITEM1">
                        <p class="ITEM_TXT">{{$t('addressBook.addressBook_remarks')}}<span class="ITEM_TXT" style="margin-left: 0.25rem;">{{detail.remarks}}</span></p>

                    </div>
                    <div class="ITEM2" data-initcopyer="true">
                        <p class="ITEM_TXT2">{{$t('addressBook.addressBook_address')}}</p>
                        <p class="ITEM_TXT1">{{$t('addressBook.addressBook_copy')}}</p>
                        <p class="ITEM_TXT">{{detail.payeeWalletAddress}}</p>
                    </div>
                    <div class="ITEM">
                        <p class="ITEM_TXT">{{$t('addressBook.addressBook_tel')}}</p>
                        <p class="ITEM_TXT">{{detail.contactsPhone}}</p>
                    </div>
                    <div class="ITEM">
                        <p class="ITEM_TXT">{{$t('addressBook.addressBook_email')}}</p>
                        <p class="ITEM_TXT">{{detail.contactsEmail}}</p>
                    </div>

                </div>
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

    import Nlayer from '@/components/Nlayer'
    import ClipboardJS from 'clipboard'
    import { mapGetters } from 'vuex'
    export default {
        name: "AddressBookDetail",
        components: {
            Nlayer
        },
        data(){
            return {
                tips: '',
                tipsVisible: false,
                copyer: null,
                detail:{}
            }
        },
        computed: {
            id(){
                return this.$route.query.id
            },
            allTip(){
                return this.$t('currencyDetail.currencyDetail_all')
            },
            receiveTip(){
                return this.$t('currencyDetail.currencyDetail_receivables')
            },
            transferTip(){
                return this.$t('currencyDetail.currencyDetail_transferAccounts')
            },
            exchangeTip(){
                return this.$t('currencyDetail.currencyDetail_exchange')
            },
            shareTip1(){
                return this.$t('share.share_tips1')
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            }
        },
        mounted(){
            this.getDetail()
        },
        destroyed(){
            this.copyer.destroy()
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 打开消息提示
            showTips(msg, refresh=true){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            // 初始化复制器
            initCopyer(value){
                this.copyer = new ClipboardJS('[data-initcopyer]', {
                    text (){
                        return value
                    }
                }).on('success', () => {
                    this.showTips(this.shareTip1)
                })

            },
            // 获取联系人详情
            getDetail(){
                this.$http.get('js/addressBook/findAddressBookDetail', {
                    id: this.id
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.detail = res.result
                        this.initCopyer(res.result.payeeWalletAddress)
                    }
                })
            },
            // 去编辑
            go(){
                this.$push({
                    path: '/editAddressBook',
                    query: {
                        id: this.id,
                        address:this.detail.payeeWalletAddress
                    }
                })
            },

            // 去详情
            toDetail(e){
                const {
                    id,
                    state,
                    type
                } = e.currentTarget.dataset


                if( type == 4 ){
                    return
                }

                this.$push({
                    path: '/currencyDealDetail',
                    query: {
                        id: id,
                        currencyName: this.currencyName,
                        dealResState: state,
                        dealName: type
                    }
                })
            },

        }
    }
</script>

<style scoped>
    .LIST{
        padding: 0 0.3rem;
    }
    .ITEM{
        justify-content: space-between;
    }
    .ITEM1{
        border-bottom: 1px solid #ccc;
        height: 1rem;
    }
    .ITEM2{
        border-bottom: 1px solid #ccc;
        height: 1.5rem;
        position: relative;
    }

    .ITEM_TXT1{
        font-size: 0.26rem;
        color: #E4811D;
        line-height: 0.5rem;
        position: absolute;
        top: 0.2rem;
        right: 0.15rem;
    }
    .ITEM_TXT2{
        font-size: 0.26rem;
        padding: 0.2rem 0.15rem 0;
        color: #333;
        line-height: 0.5rem;

    }
    .ITEM2 .ITEM_TXT{
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .ITEM_TXT{
        line-height: 1rem;
        padding: 0 0.15rem;
    }

    .edit{
        font-size: 0.3rem;
        color: #fff;
        width: auto;
    }
</style>