<template>
    <div class="common_tabbar">
        <router-link replace tag="div" class="common_tabbar_item" to="/shopIndex">
            <div class="common_tabbar_item_icon common_tabbar_item_icon001"></div>
            <p class="common_tabbar_item_txt">首页</p>
        </router-link>
        <router-link replace tag="div" class="common_tabbar_item" to="/shopCate">
            <div class="common_tabbar_item_icon common_tabbar_item_icon002"></div>
            <p class="common_tabbar_item_txt">分类</p>
        </router-link>
        <router-link replace tag="div" class="common_tabbar_item" to="/shopGroup">
            <div class="common_tabbar_item_icon common_tabbar_item_icon003"></div>
            <p class="common_tabbar_item_txt">团购</p>
        </router-link>
        <router-link replace tag="div" class="common_tabbar_item" to="/shopCart">
            <div class="common_tabbar_item_icon common_tabbar_item_icon004"></div>
            <p class="common_tabbar_item_txt">购物车</p>
        </router-link>
        <router-link replace tag="div" class="common_tabbar_item" to="/shopMy">
            <div class="common_tabbar_item_icon common_tabbar_item_icon005"></div>
            <p class="common_tabbar_item_txt">我的</p>
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
        background: #fff; border-top: 0.01rem solid #dbdbdb;
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
        background: url('../static/images/shop/index_icon_001.png') no-repeat center center / cover;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon002 {
        background: url('../static/images/shop/index_icon_002.png') no-repeat center center / cover;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon003 {
        background: url('../static/images/shop/index_icon_003.png') no-repeat center center / cover;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon004 {
        background: url('../static/images/shop/index_icon_004.png') no-repeat center center / cover;
    }
    .common_tabbar_item_icon.common_tabbar_item_icon005 {
        background: url('../static/images/shop/index_icon_005.png') no-repeat center center / cover;
    }

    .common_tabbar_item.active .common_tabbar_item_txt {
        color: #e4811d;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon001 {
        background: url('../static/images/shop/index_icon_active_001.png') no-repeat center center / cover;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon002 {
        background: url('../static/images/shop/index_icon_active_002.png') no-repeat center center / cover;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon003 {
        background: url('../static/images/shop/index_icon_active_003.png') no-repeat center center / cover;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon004 {
        background: url('../static/images/shop/index_icon_active_004.png') no-repeat center center / cover;
    }
    .common_tabbar_item.active .common_tabbar_item_icon.common_tabbar_item_icon005 {
        background: url('../static/images/shop/index_icon_active_005.png') no-repeat center center / cover;
    }
</style>