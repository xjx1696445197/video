<template>
    <div class="common_tabbar">
        <router-link replace tag="div" class="common_tabbar_item" to="/asset">
            <div class="common_tabbar_item_icon common_tabbar_item_icon001"></div>
            <p class="common_tabbar_item_txt">首页</p>
        </router-link>
        <router-link replace tag="div" class="common_tabbar_item" to="/market">
            <div class="common_tabbar_item_icon common_tabbar_item_icon002"></div>
            <p class="common_tabbar_item_txt">活动</p>
        </router-link>
        <router-link replace tag="div" class="common_tabbar_item" to="/product">
            <div class="common_tabbar_item_icon common_tabbar_item_icon003"></div>
            <p class="common_tabbar_item_txt">商城</p>
        </router-link>
        <router-link replace tag="div" class="common_tabbar_item" to="/news">
            <div class="common_tabbar_item_icon common_tabbar_item_icon004"></div>
            <p class="common_tabbar_item_txt">OTC</p>
        </router-link>
        <router-link replace tag="div" class="common_tabbar_item" to="/my">
            <div class="common_tabbar_item_icon common_tabbar_item_icon005"></div>
            <p class="common_tabbar_item_txt">{{$t('tabbar.my')}}</p>
        </router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>


    .common_tabbar{
        height: 1.1rem; box-sizing: border-box;
        background: #fff; border-top: 1px solid #dbdbdb;
        position: fixed;
        bottom: 0; text-align: center;
        left: 0;
        width: 100%;
        display: table; table-layout: fixed;
    }
    .common_tabbar_item{
        padding-top: 0.1rem; padding-bottom: 0.1rem;
        display: table-cell;
    }
    .common_tabbar_item_icon {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 auto;
    }
    .common_tabbar_item_txt {
        font-size: 0.2rem;
        color: #666;
        line-height: 0.3rem;
        background: none;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon001 {
        background: url('../static/images/video_icon/index_icon_001.png') no-repeat center center / cover;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon002 {
        background: url('../static/images/video_icon/index_icon_002.png') no-repeat center center / cover;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon003 {
        background: url('../static/images/video_icon/index_icon_003.png') no-repeat center center / cover;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon004 {
        background: url('../static/images/video_icon/index_icon_004.png') no-repeat center center / cover;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon005 {
        background: url('../static/images/video_icon/index_icon_005.png') no-repeat center center / cover;
    }

    .common_tabbar_item.active .common_tabbar_item_txt {
            color: #203395;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon001 {
        background: url('../static/images/video_icon/index_icon_active_001.png') no-repeat center center / cover;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon002 {
        background: url('../static/images/video_icon/index_icon_active_002.png') no-repeat center center / cover;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon003 {
        background: url('../static/images/video_icon/index_icon_active_003.png') no-repeat center center / cover;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon004 {
        background: url('../static/images/video_icon/index_icon_active_004.png') no-repeat center center / cover;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon005 {
        background: url('../static/images/video_icon/index_icon_active_005.png') no-repeat center center / cover;
    }
</style>