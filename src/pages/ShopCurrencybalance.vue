<template>
    <div id="my" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE" v-if="tabIndex==1">USDT</p>
            <p class="HEADER_SHOP_TITLE" v-if="tabIndex==2">HALE</p>

        </div>
        <div  style="position:fixed;width: 100%;height: 3.35rem;background: white">
        <div class="je_dp">
            <P><span><span v-if="tabIndex==1">USDT</span><span v-if="tabIndex==2">HALE</span>   余额</span><img
                    src="../static/images/shop/Eye.png" @click="monepass" v-if="interystore==0"><img
                    src="../static/images/shop/Closeyoureyes.png" @click="monepasstwo" v-if="interystore==1"></P>
            <P v-if="interystore==0">{{balance}}</P>
            <P v-if="interystore==0">= ￥ {{balance*proportion|numFilter}}</P>
            <P v-if="interystore==1">****.****</P>
            <P v-if="interystore==1">= ￥ ****.**</P>
        </div>
        </div>
        <div style="height: 3.5rem">

        </div>
        <div class="Record">
            兑换记录
        </div>

        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10"
             class="Record_two">
            <ul>
                <li v-for="(data,index) in exchange">
                    <p><span v-if="tabIndex==1">USDT兑换积分</span><span v-if="tabIndex==2">HALE兑换积分</span><span>- {{data.exchangeAmount}} <span
                            v-if="tabIndex==1">USDT</span><span v-if="tabIndex==2">HALE</span></span></p>
                    <p><span>{{data.addTime|formatDate}}</span><span>+ {{data.amount|numFilter}} 积分</span></p>
                </li>
            </ul>
            <div class="pad_10 txt_center" style="line-height: 1rem">{{loadTxt}}</div>
        </div>
        <router-link :to="{name:'ShopExchangepoints',params:{type:nextpage}}">
            <div class="Exchangepoints">
                兑换积分
            </div>
        </router-link>
    </div>

</template>

<script>
    import Vue from 'vue'
    import {InfiniteScroll} from 'mint-ui'

    import {Loadmore} from 'mint-ui';

    Vue.component(Loadmore.name, Loadmore);
    Vue.use(InfiniteScroll)
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import userPhoto from '@/static/images/shop/mrbj.png'

    export default {
        components: {},
        data() {
            return {
                tabIndex: this.$route.params.type,
                interystore: '0',
                interyRMB: '7654321.12',
                exchange: '',
                nextpage: '',
                balance: '',
                proportion: '',
                loadTxt: '',
                loadTag: false,//是否翻页标志
                list: [],
                loading: false,
                curPage:0//当前页码
            }
        },
        filters: {
            formatDate: function (value) {
                let date = new Date(value)
                let y = date.getFullYear()
                let MM = date.getMonth() + 1
                MM = MM < 10 ? ('0' + MM) : MM
                let d = date.getDate()
                d = d < 10 ? ('0' + d) : d
                let h = date.getHours()
                h = h < 10 ? ('0' + h) : h
                let m = date.getMinutes()
                m = m < 10 ? ('0' + m) : m
                let s = date.getSeconds()
                s = s < 10 ? ('0' + s) : s
                return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
            },
            numFilter(value) {
                let realVal = ''
                if (value) {
                    // 截取当前数据到小数点后2位
                    let tempVal = parseFloat(value).toFixed(3)
                    realVal = tempVal.substring(0, tempVal.length - 1)
                } else {
                    realVal = '0'
                }
                return realVal
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            var that = this
            if (this.tabIndex == undefined) {
                this.tabIndex = localStorage.getItem('tabIndex')
            } else {
                localStorage.setItem('tabIndex', this.$route.params.type)
            }
            // if (that.tabIndex==1){
            //     jsonAjax.post(urlUtil.getApiUrl('usdtexchangeInfo'), {userId: that.$store.state.userinfo.userId,page: that.curPage}, function (result) {
            //         that.exchange = result.result
            //         console.log(that.exchange)
            //     })
            //     that.nextpage="USDT"
            // }else {
            //     jsonAjax.post(urlUtil.getApiUrl('haleexchangeInfo'), {userId: that.$store.state.userinfo.userId,page: that.curPage}, function (result) {
            //         that.exchange = result.result
            //         console.log(that.exchange)
            //     })
            //     that.nextpage="HALE"
            // }
            this.doQuery();
        },
        mounted: function () {
            var that = this
            jsonAjax.get(urlUtil.getApiUrl('getuseramount'), {
                userId: that.$store.state.userinfo.userId,
                currency: that.nextpage
            }, function (result) {
                that.balance = result.result.amount
                that.proportion = result.result.price
            })
        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1)
            },
            monepass: function () {
                this.interystore = 1
            },
            monepasstwo: function () {
                this.interystore = 0
            },
            doQuery: function () {
                var that = this;
                that.loadTag = true;
                console.log(that.curPage)
                if (that.tabIndex == 1) {
                    that.curPage++;
                    jsonAjax.post(urlUtil.getApiUrl('usdtexchangeInfo'), {
                        userId: that.$store.state.userinfo.userId,
                        page: that.curPage
                    }, function (result) {
                        if (result.result==''){
                            that.loadTag = false;
                            that.loadTxt = "没有更多记录 ！";
                        }else {
                            if (that.exchange == '') {
                                that.exchange = result.result

                            } else {
                                // for (var i=0;i<result.result.length;i++){
                                var allProducts = [];
                                allProducts = allProducts.concat(that.exchange, result.result);
                                that.exchange = allProducts
                                console.log(that.exchange)
                                // }
                                that.loadTxt = "加载完成 ！";

                            }
                        }

                    })
                    that.nextpage = "USDT"
                } else {
                    that.curPage++;
                    jsonAjax.post(urlUtil.getApiUrl('haleexchangeInfo'), {
                        userId: that.$store.state.userinfo.userId,
                        page: that.curPage
                    }, function (result) {
                        if (result.result==''){
                            that.loadTag = false;
                            that.loadTxt = "没有更多记录 ！";
                        }else {
                            if (that.exchange == '') {
                                that.exchange = result.result

                            } else {
                                that.loadTag = true;
                                // for (var i=0;i<result.result.length;i++){
                                var allProducts = [];
                                allProducts = allProducts.concat(that.exchange, result.result);
                                that.exchange = allProducts
                                console.log(that.exchange)
                                // }
                                that.loadTxt = "加载完成 ！";
                            }
                        }
                    })
                    that.nextpage = "HALE"
                }
            },
            loadMore: function () {
                if (this.loadTag) {
                    this.loadTxt = "正在加载...";
                    this.doQuery();
                }
            },

        }
    }
</script>

<style scoped>
    .content_box {
        background: #F5F5F5;
        height: 100%;
        z-index: 2;
    }

    .je_dp {
        border-radius: .1rem;
        padding: 10px;
        width: 90%;
        margin-left: 5%;
        background: #E4811D;
        height: 2rem;
        color: white;
        margin-top: 1.1rem;
    }

    .je_dp img {
        margin-right: .2rem;
        width: .4rem;
        height: .4rem;
    }

    .Exchangepoints {
        position: fixed;
        bottom: .4rem;
        left: 7.25%;
        width: 85%;
        color: white;
        background: #E4811D;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: .3rem;
        border-radius: 5px;
    }

    .je_dp p {
        padding-left: .2rem;
        display: flex;
        justify-content: space-between;
    }

    .je_dp p:nth-of-type(1) {
        margin-top: .1rem;
    }

    .je_dp p:nth-of-type(2) {
        font-size: .4rem;
        font-weight: bold;
    }

    .je_dp p:nth-of-type(3) {
        line-height: .6rem;
        font-size: .24rem;
    }

    body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, tdbody {
        background: none;
    }

    .Record {
        font-size: 0.34rem;
        color: #333333;
        width: 90%;
        margin-left: 5%;
        line-height: 1rem;
    }

    .Record_two {
        width: 100%;
        background: white;
        /*padding-bottom: 1.5rem;*/
        margin-bottom: 1.5rem;
    }

    .Record_two ul {
        background: white;
    }

    .Record_two ul li {
        padding: .1rem 0;
        border-bottom: 1px solid #EEEEEE;
        height: 1.4rem;
        width: 90%;
        margin-left: 5%;
    }

    .Record_two ul li p {
        display: flex;
        justify-content: space-between;
    }

    .Record_two ul li p:nth-of-type(1) {
        margin-top: .1rem;
        color: #333333;
        line-height: .5rem;
    }

    .Record_two ul li p:nth-of-type(2) {
        font-size: .26rem;
        color: #666666;
    }

    .Record_two ul li p:nth-of-type(2) span:nth-of-type(2) {
        font-size: .3rem;
        color: #E4811D;
    }


</style>
