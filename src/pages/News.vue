<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <p class="HEADER_TITLE">OTC</p>
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

<!--<template>-->
<!--    <div class="page">-->
<!--        <div class="HEADER">-->
<!--            <p class="HEADER_TITLE">{{$t('otc.title')}}</p>-->
<!--        </div>-->
<!--        <div class="wrapper">-->
<!--            <div class="wrapper_title clearfix">-->
<!--                <p class="wrapper_title_txt fl">HALE/USDT</p>-->
<!--                <p class="wrapper_title_txt fr">${{price | tofixed2}}</p>-->
<!--            </div>-->
<!--            <div class="wrapper_tabbar">-->
<!--                <div class="otc_tabbar">-->
<!--                    <router-link replace tag="div" class="otc_tabbar_item otc_tabbar_item1" to="/otc/buy">{{$t('otc.otc_buy')}}</router-link>-->
<!--                    <router-link replace tag="div" class="otc_tabbar_item otc_tabbar_item2" to="/otc/sell">{{$t('otc.otc_sell')}}</router-link>-->
<!--                    <router-link replace tag="div" class="otc_tabbar_item otc_tabbar_item3" to="/otc/entrust">{{$t('otc.otc_entrust')}}</router-link>-->
<!--                    <router-link replace tag="div" class="otc_tabbar_item otc_tabbar_item3" to="/otc/order">{{$t('otc.otc_order')}}</router-link>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="content">-->
<!--                <router-view></router-view>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    import { mapGetters } from 'vuex'-->

<!--    export default {-->
<!--        name: "Otc",-->
<!--        data(){-->
<!--            return {-->
<!--                price:'0.00'-->
<!--            }-->
<!--        },-->
<!--        mounted(){-->
<!--            // 获取可用余额-->
<!--            this.getAvailableAmount()-->
<!--        },-->
<!--        computed: {-->
<!--            userinfo(){-->
<!--                return this.getUserinfo()-->
<!--            },-->
<!--            userId(){-->
<!--                return this.userinfo.userId-->
<!--            }-->
<!--        },-->
<!--        methods:{-->
<!--            ...mapGetters(['getUserinfo']),-->
<!--            // 获取可用余额-->
<!--            getAvailableAmount(){-->
<!--                this.$http.get('js/hOtcListTransaction/getStaticParam', {-->
<!--                    userId:this.userinfo?this.userId:null,-->
<!--                }).then((res) => {-->
<!--                    console.log(res)-->
<!--                    if( res.success ){-->
<!--                        this.price = res.result.usdtHale-->
<!--                    }-->
<!--                })-->
<!--            },-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    .wrapper_tabbar{-->
<!--        background: white;-->
<!--        position: fixed;-->
<!--        top: 1.88rem;-->
<!--        left: 0;-->
<!--        right: 0;-->
<!--        z-index: 99;-->
<!--    }-->
<!--    .otc_tabbar{-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        height: 1rem;-->
<!--        margin: 0 0.3rem;-->
<!--    }-->
<!--    .otc_tabbar_item{-->
<!--        font-size: .3rem;-->
<!--        color: #333;-->
<!--        line-height: 1rem;-->
<!--        text-align: center;-->
<!--        /*padding: 0 .5rem;*/-->
<!--        height: 1rem;-->
<!--        z-index: 99;-->
<!--        width: 25%;-->
<!--    }-->
<!--    /* 购买样式 */-->
<!--    .otc_tabbar_item1{-->
<!--        position: relative;-->
<!--    }-->
<!--    .otc_tabbar_item1:after{-->
<!--        position: absolute;-->
<!--        left: 0;-->
<!--        bottom: 0;-->
<!--        width: 100%;-->
<!--        content: '';-->
<!--        height: 0.04rem;-->
<!--        background: #21B369;-->
<!--        -webkit-border-radius: 50rem;-->
<!--        -moz-border-radius: 50rem;-->
<!--        border-radius: 50rem;-->
<!--        display: none;-->
<!--    }-->
<!--    .otc_tabbar_item1.active:after{-->
<!--        display: block;-->
<!--    }-->
<!--    .otc_tabbar_item1.active.otc_tabbar_item{-->
<!--        color: #21B369;-->
<!--    }-->
<!--    /* 出售样式 */-->
<!--    .otc_tabbar_item2{-->
<!--        position: relative;-->
<!--    }-->
<!--    .otc_tabbar_item2:after{-->
<!--        position: absolute;-->
<!--        left: 0;-->
<!--        bottom: 0;-->
<!--        width: 100%;-->
<!--        content: '';-->
<!--        height: 0.04rem;-->
<!--        background: #ED472C;-->
<!--        -webkit-border-radius: 50rem;-->
<!--        -moz-border-radius: 50rem;-->
<!--        border-radius: 50rem;-->
<!--        display: none;-->
<!--    }-->
<!--    .otc_tabbar_item2.active:after{-->
<!--        display: block;-->
<!--    }-->
<!--    .otc_tabbar_item2.active.otc_tabbar_item{-->
<!--        color:#ED472C;-->
<!--    }-->
<!--    /* 其余样式 */-->
<!--    .otc_tabbar_item3{-->
<!--        position: relative;-->
<!--    }-->
<!--    .otc_tabbar_item3:after{-->
<!--        position: absolute;-->
<!--        left: 0;-->
<!--        bottom: 0;-->
<!--        width: 100%;-->
<!--        content: '';-->
<!--        height: 0.04rem;-->
<!--        background: #203395;-->
<!--        -webkit-border-radius: 50rem;-->
<!--        -moz-border-radius: 50rem;-->
<!--        border-radius: 50rem;-->
<!--        display: none;-->
<!--    }-->
<!--    .otc_tabbar_item3.active:after{-->
<!--        display: block;-->
<!--    }-->
<!--    .otc_tabbar_item3.active.otc_tabbar_item{-->
<!--        color:#203395;-->
<!--    }-->
<!--    .wrapper_title{-->
<!--        z-index: 999;-->
<!--        height: 1rem;-->
<!--        border-bottom: 1px solid #eee;-->
<!--        /*background: red;*/-->
<!--        background: white;-->
<!--        position: fixed;-->
<!--        top: 0.88rem;-->
<!--        left: 0;-->
<!--        right: 0;-->
<!--        padding: 0 0.3rem;-->
<!--    }-->
<!--    .wrapper_title_txt{-->
<!--        font-size: 0.3rem;-->
<!--        line-height: 1rem;-->
<!--        color: #203395;-->
<!--        font-weight: bold;-->
<!--    }-->

<!--</style>-->