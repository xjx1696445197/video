<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('news.news_newsDetail')}}</p>
        </div>

        <div class="wrapper">
            <div class="main">
                <p class="detail_title" v-text="detail.title"></p>
                <div class="detail_meta">
                    <p class="detail_name" v-text="detail.publisher"></p>
                    <p class="detail_date">{{detail.publishTime | dataFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                </div>
                <div class="detail_content" v-html="detail.content"></div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "NewDetail",
        data(){
            return {
                detail: {}
            }
        },
        computed: {
            id(){
                return this.$route.query.id
            }
        },
        mounted(){
            this.getDetail()
        },
        methods: {
            // 获取详情
            getDetail(){
                this.$http.get('js/consultationAdministrationApp/findContentById', {
                    id: this.id
                }).then((res) => {
                    const {
                        result,
                        success
                    } = res

                    if( success ){
                        this.detail = result
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
    .main{
        padding: .24rem .3rem;
    }
    .detail_title{
        font-size: .4rem;
        color: #333;
        line-height: .65rem;
        font-weight: bold;
    }
    .detail_meta{
        padding: 0.3rem 0;
        display: flex; justify-content: space-between;
    }
    .detail_name{
        font-size: .26rem;
        color: #333;
        line-height: .3rem;
    }
    .detail_date{
        font-size: .26rem;
        color: #333;
        line-height: .3rem;
    }
    .detail_content{
        padding: .2rem 0;
        word-wrap: break-word;
        font-size: .3rem;
        color: #333;
        line-height: .6rem;
        text-align: justify;
    }
</style>
