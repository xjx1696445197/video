<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">我的资产</p>
        </div>
        <div class="wrapper">
            <div class="topper">
                <div class="header">
                    <p class="header_txt1">{{$t('market.market_name')}}</p>
                    <p class="header_txt2">{{$t('market.market_newPrice')}}</p>
                    <p class="header_txt3">{{$t('market.market_downUpToday')}}</p>
                </div>
            </div>
            <div class="list">
                <div class="item"
                     v-for="(item, index) in list"
                     :key="index"
                     :class="[itemClass(item.rate)]"
                >
                    <div class="item_pic radius-round"
                        :style="{'background': `url(${sourceUrl + item.currencyImgUrl}) no-repeat center center / cover`}"
                    ></div>
                    <div class="item_content">
                        <p class="item_content_txt1">{{item.currency}}</p>
                        <p class="item_content_txt2">/{{item.postCurrency}}</p>
                    </div>
                    <p class="item_txt1">{{item.price}}</p>
                    <p class="item_txt2">{{ item.rate.indexOf('-') > -1 ? item.rate : `+${item.rate}` }}</p>
                </div>
            </div>

            <div class="bottom">
                <div class="bottom_title">我的资产</div>
                <div class="bottom_list">
                    <div class="bottom_item clearfix" @click='toCurrencyDetail' data-currency="CHMC">
                        <div class="bottom_txt1 fl"><img src="../static/images/start-up.png"><span>CHMC</span></div>
                        <div class="bottom_icon fr"></div>
                    </div>
                    <div class="bottom_item clearfix" @click='toCurrencyDetail' data-currency="HALE">
                        <div class="bottom_txt1 fl"><img src="../static/images/shop/HALE.png"><span>HALE</span></div>
                        <div class="bottom_icon fr"></div>
                    </div>
                    <div class="bottom_item clearfix" @click='toIntegralDetail'>
                        <div class="bottom_txt1 fl"><img src="../static/images/jifen.jpg"><span>积分</span></div>
                        <div class="bottom_icon fr"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import { sourceUrl } from '@/config'

    export default {
        name: "MyAsset",
        data(){
            return {
                list: [],
                timer: null,
                sourceUrl
            }
        },
        mounted(){
            this.getList()
            this.timer = setInterval(() => {
                this.getList()
            }, 1500)
        },
        destroyed(){
            clearInterval(this.timer)
            this.timer = null
        },
        methods: {
            // 判断item单项应该添加什么class
            itemClass(value){
                if(value.indexOf('-') > -1){
                    return 'down'
                }else if(value == "0.00%"){
                    return ''
                }else{
                    return 'up'
                }
            },
            // 获取数据
            getList(){
                // /app/currencyRate/findCurrencyRate js/usersLogin/marketHistory
                this.$http.get('app/currencyRate/findCurrencyRate').then((res) => {
                    if( res.returnCode == 1 ){
                        this.list = res.resultData
                        console.log(res.resultData)
                    }
                })
            },
            // 去项目币详情页面
            toCurrencyDetail(event){
                console.log(event)
                const { currency } = event.target.dataset
                console.log(currency)
//          	return
                this.$push({
                    path: '/currencyDetail',
                    query: {
                        currencyName: currency
                    }

                })
            },
            // 去积分详情页面
            toIntegralDetail(){
                console.log('是否进来这个区间')
                this.$push({
                    path: '/integralDetail',

                })
            }
        }
    }
</script>
<style scoped>
    .topper{
        /*padding: 0.24rem 0;*/
    }
    .header{
        /*box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);*/
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
        background: #FFF;
    }
    .item{
        height: 1rem;
        background: #fff;
        /*border-radius: 0.24rem;*/
        /*margin-top: 0.24rem;*/
        /*padding: 0 0.2rem;*/
        /*box-shadow: 0 0.05rem 0.15rem rgba(102,102,102,0.1);*/
        position: relative;
        display: flex;
        align-items: center;
    }
    .item{
        border-top: 1px solid #eee;
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
    .clearfix{
        position: relative;
    }
    .clearfix img{
        width: .44rem;
        position: absolute;
        top: .25rem;


    }
    .clearfix span{
        margin-left: .6rem;
    }
    .item_txt2{
        width: 1.5rem;
        height: 0.6rem;
        /*border-radius: 0.1rem;*/
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

    .bottom{

    }
    .bottom_list{
        padding: 0 0.3rem;
        background: #fff;
    }
    .bottom_item{
        width: 100%;
        height: 1rem;
    }
    .bottom_item+.bottom_item{
        border-top: 1px solid #eee;
    }
    .bottom_title{
        padding: 0 0.3rem;
        font-size: 0.26rem;
        color: #203395;
        line-height: 1rem;
        padding-top: 0.1rem;
    }
    .bottom_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 1rem;
    }
    .bottom_icon{
        margin-top: 0.35rem;
        width: 0.3rem;
        height: 0.3rem;
        background: url("../static/images/video_icon/icon_right.png") no-repeat center center /cover;
    }
</style>