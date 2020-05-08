<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <p class="HEADER_TITLE">活动</p>
        </div>
        <div class="NOIMG mauto"></div>
        <div class="NOCONTENT">
            该功能暂未开放，敬请期待～～
        </div>
    </div>

</template>

<script>
    import { sourceUrl } from '@/config'

    export default {
        name: "Market",
        data(){
            return {
                list: [],
                timer: null,
                sourceUrl
            }
        },
        mounted(){

        },
        destroyed(){

        },
        methods: {

        }
    }
</script>

<style scoped>
    .topper{
        padding: 0.24rem 0;
    }
    .header{
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
        background: #fff;
        padding-left: 0.75rem;
        display: flex;
    }
    .header_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.9rem;
        padding: 0 0.3rem;
    }
    .header_txt2{
        margin-left: 1.7rem;
        font-size: 0.26rem;
        color: #333;
        line-height: 0.9rem;
        padding: 0 0.3rem;
    }
    .header_txt3{
        margin-left: 0.3rem;
        color: #333;
        line-height: 0.9rem;
        padding: 0 0.3rem;
        font-size: 0.26rem;
    }
    .list{
        padding: 0 0.3rem;
    }
    .item{
        height: 1.2rem;
        background: #fff;
        border-radius: 0.24rem;
        margin-top: 0.24rem;
        padding: 0 0.2rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);
        position: relative;
        display: flex;
        align-items: center;
    }
    .item_pic{
        width: 0.44rem;
        height: 0.44rem;
        background: #f3f3f3;
    }
    .item_content{
        display: flex;
        padding: 0 0.1rem;
    }
    .item_content_txt1{
        font-size: 0.3rem;
        color: #333;
        line-height: 0.44rem;
    }
    .item_content_txt2{
        font-size: 0.24rem;
        color: #333;
        line-height: 0.44rem;
    }
    .item_txt1{
        font-size: 0.3rem;
        color: #333;
        position: absolute;
        right: 2.3rem;
    }
    .item_txt2{
        width: 1.5rem;
        height: 0.6rem;
        border-radius: 0.1rem;
        font-size: 0.26rem;
        color: #fff;
        line-height: 0.6rem;
        text-align: center;
        position: absolute;
        right: 0.2rem;
        background: #ccc;
    }
    .item.up .item_txt2{
        background: #21b369;
    }
    .item.down .item_txt2{
        background: #ed472c;
    }
</style>
