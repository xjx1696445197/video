<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('notice.notice_detail')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <p class="detail_title" v-text="detail.title"></p>
                <div class="detail_meta">
                    <p class="detail_date">{{detail.addTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                </div>
                <div class="detail_content" v-html="detail.content"> </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "NoticeDetail",
        data(){
            return {
                detail: {}
            }
        },
        computed: {
            id() {
                return this.$route.query.id
            },
            userinfo() {
                return this.getUserinfo()
            },
            customerToken() {
                return this.userinfo.customerToken
            },
            userId() {
                return this.userinfo.customerId
            }
        },
        mounted(){
            this.markRead()
            this.getDetail()
        },
        methods: {
            ...mapActions(['setUserNoticeState']),
            ...mapGetters(['getUserinfo']),
            // 获取详情
            getDetail(){
                this.$http.get(`app/message/getMsgById`, {
                    id: this.id,
                    customerToken: this.customerToken
                }).then((res) => {
                    if( res.returnCode == 1 ){
                        this.detail = res.resultData
                    }
                })
            },
            // 标记已读
            markRead(){
//              this.$http.get('js/message/markReadMsg',{
//                  userId: this.userId,
//                  id: this.id
//              }).then((res) => {
//                  if( res.success ){
//                      this.setUserNoticeState()
//                  }
//              })

//                  msgType: this.type,

                this.$http.get('app/message/markReadMsg', {
                    userId: this.userId,
                    id: this.id,
                    customerToken: this.customerToken
                }).then((res) => {
                    if( res.returnCode == 1 ){
                        this.setUserNoticeState()
//                      this.$refs.scrollView.triggerRefresh()
//                      this.setUserNoticeState()
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .content{
        padding: 0.3rem;
    }
    .detail_title{
        font-size: .4rem;
        color: #333;
        line-height: .65rem;
        font-weight: bold;
    }
    .detail_meta{
        padding: 0.25rem 0;
    }
    .detail_date{
        font-size: .26rem;
        color: #333;
        line-height: .4rem;
    }
    .detail_content{
        padding: .2rem 0;
    }
</style>
