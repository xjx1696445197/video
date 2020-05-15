<template>
    <div class="page">
        <div class="HEADER">
            <p class="HEADER_TITLE">{{$t('otc.title')}}</p>
        </div>
        <div class="wrapper">
            <div class="wrapper_title clearfix">
                <p class="wrapper_title_txt fl">CHMC/USDT</p>
                <p class="wrapper_title_txt fr">${{price | tofixed2}}</p>
            </div>
            <div class="wrapper_tabbar">
                <div class="otc_tabbar">
                    <router-link class="otc_tabbar_item otc_tabbar_item1" replace tag="div" to="/otc/buy">
                        {{$t('otc.otc_buy')}}
                    </router-link>
                    <router-link class="otc_tabbar_item otc_tabbar_item2" replace tag="div" to="/otc/sell">
                        {{$t('otc.otc_sell')}}
                    </router-link>
                    <router-link class="otc_tabbar_item otc_tabbar_item3" replace tag="div" to="/otc/entrust">
                        {{$t('otc.otc_entrust')}}
                    </router-link>
                    <router-link class="otc_tabbar_item otc_tabbar_item3" replace tag="div" to="/otc/order">
                        {{$t('otc.otc_order')}}
                    </router-link>
                </div>
            </div>

            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Otc",
        data() {
            return {
                price: '0.00'
            }
        },
        mounted() {
            // 获取可用余额
            this.getAvailableAmount()
        },
        computed: {
            userinfo() {
                return this.getUserinfo()
            },
            userId() {
                return this.userinfo.userId
            }
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 获取可用余额
            getAvailableAmount() {
                this.$http.get('app/otcList/getStaticParam', {
                    userId: 3,
                }).then((res) => {
                    console.log(res)
                    if (res.success) {
                        this.price = res.result.usdtHale
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .wrapper_tabbar {
        background: white;
        position: fixed;
        top: 1.88rem;
        left: 0;
        right: 0;
        z-index: 99;
    }

    .otc_tabbar {
        display: flex;
        justify-content: center;
        height: 1rem;
        margin: 0 0.3rem;
    }

    .otc_tabbar_item {
        font-size: .3rem;
        color: #333;
        line-height: 1rem;
        text-align: center;
        /*padding: 0 .5rem;*/
        height: 1rem;
        z-index: 99;
        width: 25%;
    }

    /* 购买样式 */
    .otc_tabbar_item1 {
        position: relative;
    }

    .otc_tabbar_item1:after {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        content: '';
        height: 0.04rem;
        background: #21B369;
        -webkit-border-radius: 50rem;
        -moz-border-radius: 50rem;
        border-radius: 50rem;
        display: none;
    }

    .otc_tabbar_item1.active:after {
        display: block;
    }

    .otc_tabbar_item1.active.otc_tabbar_item {
        color: #21B369;
    }

    /* 出售样式 */
    .otc_tabbar_item2 {
        position: relative;
    }

    .otc_tabbar_item2:after {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        content: '';
        height: 0.04rem;
        background: #ED472C;
        -webkit-border-radius: 50rem;
        -moz-border-radius: 50rem;
        border-radius: 50rem;
        display: none;
    }

    .otc_tabbar_item2.active:after {
        display: block;
    }

    .otc_tabbar_item2.active.otc_tabbar_item {
        color: #ED472C;
    }

    /* 其余样式 */
    .otc_tabbar_item3 {
        position: relative;
    }

    .otc_tabbar_item3:after {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        content: '';
        height: 0.04rem;
        background: #203395;
        -webkit-border-radius: 50rem;
        -moz-border-radius: 50rem;
        border-radius: 50rem;
        display: none;
    }

    .otc_tabbar_item3.active:after {
        display: block;
    }

    .otc_tabbar_item3.active.otc_tabbar_item {
        color: #203395;
    }

    .wrapper_title {
        z-index: 999;
        height: 1rem;
        border-bottom: 1px solid #eee;
        /*background: red;*/
        background: white;
        position: fixed;
        top: 0.88rem;
        left: 0;
        right: 0;
        padding: 0 0.3rem;
    }

    .wrapper_title_txt {
        font-size: 0.3rem;
        line-height: 1rem;
        color: #203395;
        font-weight: bold;
    }

</style>