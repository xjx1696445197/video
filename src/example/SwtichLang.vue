<template>
    <div class="page">
        <div class="content">
            <div class="btn" @click="swtichLang" data-lang="en-US">切换到英文</div>
            <div class="btn" @click="swtichLang" data-lang="zh-CN">切换到中文</div>
        </div>

        <div class="tabbar">
            <div>{{$t('tabbar.asset')}}</div>
            <div>{{$t('tabbar.market')}}</div>
            <div>{{$t('tabbar.product')}}</div>
            <div>{{$t('tabbar.news')}}</div>
            <div>{{$t('tabbar.my')}}</div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import storage from 'static/js/storage'

    export default {
        name: "SwtichLang",
        methods: {
            ...mapMutations({
                'setLang': 'SET_LANG'
            }),
            swtichLang(e){
                const { lang } = e.target.dataset


                this.setLang(lang)
                this.$i18n.locale = lang
                storage.setItem('lang', lang)
            }
        }
    }
</script>

<style scoped>
    .content{
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
