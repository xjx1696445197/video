<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <p class="HEADER_TITLE">商城</p>
        </div>
        <div class="NOIMG mauto"></div>
        <div class="NOCONTENT">
            该功能暂未开放，敬请期待～～
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Product',
    }
</script>

<style scoped>
    .product_tabbar{
        display: flex;
        justify-content: center;
        height: 100%;
    }
    .product_tabbar_item{
        font-size: .4rem;
        color: #fff;
        line-height: .88rem;
        padding: 0 .35rem;
        position: relative;
    }
    .product_tabbar_item:after{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        content: '';
        height: 0.04rem;
        background: #fff;
        -webkit-border-radius: 50rem;
        -moz-border-radius: 50rem;
        border-radius: 50rem;
        display: none;
    }
    .product_tabbar_item+.product_tabbar_item{
        margin-left: .45rem;
    }
    .product_tabbar_item.active{
        font-weight: bold;
    }
    .product_tabbar_item.active:after{
        display: block;
    }
    .content{
        height: 100%;
        position: relative;
    }
</style>
