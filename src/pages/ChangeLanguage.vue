<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('my.my_showLanguage')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="content_list">

<!--                    <div class="content_item"-->
<!--                         :class="[curLang == 'en-US' ? 'active' : '']"-->
<!--                         @click="swtichLang('en-US')"-->
<!--                    >-->
<!--                        <p class="content_txt1">English</p>-->
<!--                        <div class="content_select"></div>-->
<!--                        <div class="content_point"></div>-->
<!--                    </div>-->

                    <div class="content_item"

                         :class="[curLang == 'zh-CN' ? 'active' : '']"
                         @click="swtichLang('zh-CN')"
                    >
                        <p class="content_txt1">简体中文</p>
                        <div class="content_select"></div>
                        <div class="content_point"></div>
                    </div>

                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import { mapGetters,mapMutations } from 'vuex'
    import storage from 'static/js/storage'

    export default {
        name: "ChangeLanguage",
        computed: {
            curLang(){
                return this.getLang()
            }
        },
        methods: {
            ...mapGetters(['getLang']),
            ...mapMutations({
                'setLang': 'SET_LANG'
            }),
            swtichLang(lang){
                // const { lang } = e.target.dataset
                console.log(lang)

                this.setLang(lang)
                this.$i18n.locale = lang
                storage.setItem('lang', lang)

                this.$back()
            }
        }
    }
</script>

<style scoped>
    .page{
        background: white;
    }
    .content{
        background: #fafafa;
        /*padding-top: 0.24rem;*/
    }
    .content_list{
        background: #fff;
        padding: 0 0.3rem;
    }
    .content_item{
        position: relative;
        height: 1rem;
        padding: 0.2rem 0.15rem;
        box-sizing: border-box;
        border-bottom: 1px solid #DDDDDD;
    }
    .content_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.6rem;
    }
    .content_select{
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 100%;
        border: 1px solid #203395;
        top: 50%;
        transform: translateY(-50%);
        /*top:0.3rem;*/
        right: 0.15rem;
        position: absolute;
    }
    .content_item.active .content_point{
        position: absolute;
        width: 0.28rem;height: 0.28rem;
        background: #203395;
        border-radius: 100%;
        top: 50%;
        transform: translateY(-50%);
        /*top:0.43rem;*/
        right: 0.21rem;
    }
    .conten1{
        position: fixed;
        top: 0;
        bottom: 1rem;
        left: 0;
        right: 0;
    }
    .btn{
        width: 95%; line-height: 0.9rem;
        background: #FF4646;
        color: #fff;
        font-size: 0.32rem;
        -webkit-border-radius: 0.05rem;
        -moz-border-radius: 0.05rem;
        border-radius: 0.05rem;
        margin: 0.2rem auto;
        text-align: center;
    }
    .tabbar{
        height: 1rem; box-sizing: border-box;
        background: #fff; border-top: 1px solid #dbdbdb;
        position: fixed;
        bottom: 0; text-align: center;
        left: 0;
        width: 100%;
        display: table; table-layout: fixed;
    }
    .tabbar>div{
        display: table-cell;
        font-size: 0.4rem;
        color: #333; line-height: 1rem;
        text-decoration: none;
    }
</style>