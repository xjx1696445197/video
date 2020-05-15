<template>
    <div class="page">
        <div class="title">
        <ul class="tab-tilte">
            <li @click="curt(0)"><div :class="{active:cur==0}">{{$t('otc_order.completed')}}</div></li>
            <li @click="curt(1)"><div :class="{active:cur==1}">{{$t('otc_order.rescinded')}}</div></li>
        </ul>
            <p>
                <span>
                    {{$t('otc_order.purchase')}}：{{data.haleBuy | tofixed2}} CHMC
                </span>
                <span>
                    {{$t('otc_order.sell')}}：{{data.spendHale | tofixed2}} CHMC
                </span>
            </p>
            <p>
                <span>
                        {{$t('otc_order.spend')}}：{{data.spendUsdt | tofixed2}} USDT
                </span>
                <span>
                    {{$t('otc_order.Get')}}：{{data.getUsdt | tofixed2}} USDT
                </span>
            </p>
        </div>
        <div class="tab-content" style="overflow: scroll;    height: 100%;
    padding-bottom: 4.8rem;">
            <div v-show="cur==0">
                <div class="entrustlist"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <div v-for="list in datalist">
                        <div>
                            <div>
                                <span v-if="list.type==1" class="green">{{$t('otc_order.purchase')}}</span>
                                <span v-if="list.type==2"  class="red">{{$t('otc_order.sell')}}</span>
                                {{list.currency}}
                            </div>
                            <div  v-if="list.type==1" class="green">
                                {{$t('otc_order.completed')}}
                            </div>
                            <div  v-if="list.type==2"  class="red">
                                {{$t('otc_order.completed')}}
                            </div>
                        </div>
                        <div>
                            <div>
                <span v-if="list.type==1" >
                    {{$t('otc_order.purchaseprice')}}
                </span>
                                <span v-if="list.type==2" >
                    {{$t('otc_order.Sellingprice')}}
                </span>
                                <span class="bold">
                    $ {{list.amount}}
                </span>
                            </div>
                            <div>
                           <span>
                    {{$t('otc_order.purchasequantity')}}
                </span>
                                <span class="bold">
                    {{list.allAmount}}  CHMC
                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                <span>
                    {{$t('otc_order.buyingtime')}}
                </span>
                                <span class="bold">
                    {{list.transactionTime| formatDate}}
                </span>
                            </div>
                            <div class="Viewdetails"
                                 :data-id="list.id"
                                 :data-type="list.type"
                                 @click="viewdetails">
                                {{$t('otc_order.viewdetails')}}
                            </div>
                        </div>
                    </div>
                    <P style="
                    padding: 0.32rem 0;
                    font-size: 0.24rem;
                    text-align: center;
                    color: #858b9c;
                    ">{{loadTxt}}</P>
                </div>
            </div>
<!--            已撤销-->
            <div v-show="cur==1" >
                <div class="entrustlist"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <div v-for="list in datalist">
                        <div>
                            <div>
                                <span v-if="list.type==1" class="green">{{$t('otc_order.purchase')}}</span>
                                <span v-if="list.type==2"  class="red">{{$t('otc_order.sell')}}</span>
                                {{list.currency}}
                            </div>
                            <div  v-if="list.type==1" class="green">
                                {{$t('otc_order.rescinded')}}
                            </div>
                            <div v-if="list.type==2"  class="red">
                                {{$t('otc_order.rescinded')}}
                            </div>
                        </div>
                        <div>
                            <div>
                 <span v-if="list.type==1" >
                    {{$t('otc_order.purchaseprice')}}
                </span>
                                <span v-if="list.type==2" >
                    {{$t('otc_order.Sellingprice')}}
                </span>
                                <span class="bold">
                    ${{list.amount}}
                </span>
                            </div>
                            <div>
                           <span>
                    {{$t('otc_order.purchasequantity')}}
                </span>
                                <span class="bold">
                    {{list.sellNum}}  CHMC
                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                <span>
                    {{$t('otc_order.Commissiontime')}}
                </span>
                                <span class="bold">
                                     {{list.createTime|formatDate}}
                </span>
                            </div>
                            <div>
                                 <span>
                     {{$t('otc_order.Cancellationtime')}}
                </span>
                                <span class="bold">
                 {{list.transactionTime|formatDate}}
                </span>
                            </div>
                        </div>

                    </div>

                    <P style="
                    padding: 0.32rem 0;
                    font-size: 0.24rem;
                    text-align: center;
                    color: #858b9c;
                    ">{{loadTxt}}</P>
<!--                    <div>-->
<!--                        <div>-->
<!--                            <div>-->
<!--                                <span class="red">{{$t('otc_order.sell')}}</span>-->
<!--                                HALE-->
<!--                            </div>-->
<!--                            <div class="red">-->
<!--                                {{$t('otc_order.rescinded')}}-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <div>-->
<!--                <span>-->
<!--                    {{$t('otc_order.sellingprice')}}-->
<!--                </span>-->
<!--                                <span class="bold">-->
<!--                    $10.86-->
<!--                </span>-->
<!--                            </div>-->
<!--                            <div>-->
<!--                           <span>-->
<!--                   {{$t('otc_order.quantitysold')}}-->
<!--                </span>-->
<!--                                <span class="bold">-->
<!--                    100000.56  HALE-->
<!--                </span>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <div>-->
<!--                <span>-->
<!--                    {{$t('otc_order.Commissiontime')}}-->
<!--                </span>-->
<!--                                <span class="bold">-->
<!--                  02.26 17:45:24-->
<!--                </span>-->
<!--                            </div>-->
<!--                            <div>-->
<!--                             <span>-->

<!--                                 {{$t('otc_order.Cancellationtime')}}-->

<!--                </span>-->
<!--                                <span class="bold">-->
<!--                  02.26 17:45:24-->
<!--                </span>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {InfiniteScroll} from 'mint-ui'
    Vue.use(InfiniteScroll)
    export default {
        name: "Order",
        data () {
            return {
                cur: 0,
                userId: JSON.parse(localStorage.getItem('userinfo')).customerId,
                customerToken: JSON.parse(localStorage.getItem('userinfo')).customerToken,
                datalist: [],
                data: "",
                curPage: 1,
                loadTag: true,
                loadTxt: "更多加载中..."
            }
        },
        methods:{
            loadMore:function () {
                if (this.loadTag) {
                    this.loadTxt = "更多加载中...";
                    this.doQuery();
                }

            },
            doQuery: function () {
                var that=this;
                this.loadTag=false;
                this.$http.get('app/otcTransaction/findOtcOrder', {
                    userId: that.userId,
                    type: that.cur + 1,
                    pageNo: that.curPage,
                    pageSize: 5,
                    customerToken: that.customerToken
                }).then((data) => {
                    that.data = data.resultData
                    that.curPage++
                    if (data.resultData.otcOrder == '') {
                        that.loadTxt = "全部已加载"
                        that.loadTag = false;
                    } else {
                        var allProducts = [];
                        allProducts = allProducts.concat(that.datalist, data.resultData.otcOrder);
                        that.datalist = allProducts;
                        that.loadTag = true;
                        that.loadTxt = "全部已加载"
                    }

                })


            },
            viewdetails(event){
                const { id,type } = event.target.dataset
                this.$push({
                    path: '/orderDetail',
                    query: {
                        orderId: id,
                        type:type
                    }
                })
            },
            curt(index){
                this.cur=index;
                var that=this;
                that.loadTag=true;
                that.curPage=1;
                that.datalist=[]
                that.doQuery()
                // this.$http.get('js/hOtcTransaction/findOtcOrder', {
                //     userId:that.userId,
                //     type: index+1,
                //     pageNo: that.curPage,
                //     pageSize: 10
                // }).then((res) => {
                //     that.datalist=res.result.otcOrder
                //     that.curPage++
                //     that.data=res.result
                // })
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
                return MM + '.' + d + ' ' + h + ':' + m + ':' + s
            },
        },
        created(){
            var that=this;
            // this.$http.get('js/hOtcTransaction/findOtcOrder', {
            //     userId:that.userId,
            //     type: that.cur+1,
            //     pageNo: that.curPage,
            //     pageSize: 5
            // }).then((res) => {
            //     // that.datalist=res.result.otcOrder
            //     // console.log(that.datalist)
            // })
        }
    }
</script>
<style scoped>
    .page{
        margin-top: 2.88rem;
    }
    .tab-tilte{
        display: flex;
        justify-content: space-around;
        height: .8rem;
    }
    .tab-tilte li{
        width: 50%;
        text-align: center;
    }
.tab-tilte li div{
    margin-top: .27rem;
    line-height: .5rem;
    font-size: .26rem;
    font-weight: bold;
    width: 1.5rem;
    margin-left: 25%;
}
    .active{
        color: #203395;
        border-bottom: 2px solid #203395;
    }
    .title p:nth-of-type(1){
        margin-top: .23rem;

    }
.title p{
    font-size: .22rem;
    font-weight: bold;
}
.title{
    background: white;
    padding-bottom: .22rem;
}
.title p span:nth-of-type(1){
    white-space:nowrap;
    display: inline-block;
    width: 2.6rem;
    margin-left: .45rem;
}
.title p span:nth-of-type(2){
    margin-left: 1rem;
}
.entrustlist{
    margin: 0 .3rem;

}
.green{
    color: #21B369;
    font-weight: bold;
}
.bold{
    font-weight: bold;
}
.red{
    color: #ED472C;
    font-weight: bold;
}
.entrustlist>div>div:nth-of-type(1){
    font-size: .26rem;
}
.entrustlist>div>div:nth-of-type(2){
    font-size: .22rem;
}

.entrustlist>div>div:nth-of-type(3){
    font-size: .22rem;

}
.Viewdetails{
    width: 1.5rem;
    height: .5rem;
    line-height: .46rem;
    border: 1px solid #203395;
    color: #203395;
    text-align: center;
    border-radius: .05rem;
}
.entrustlist>div>div:nth-of-type(3) div:nth-of-type(2){

}
.entrustlist>div>div{
    height: .6rem;
    display: flex;
    justify-content: space-between;
}
.entrustlist>div{
    box-shadow:0px 5px 15px 0px rgba(102,102,102,0.1);
    margin-top: .2rem;
    border-radius: .2rem;
    padding: .28rem .3rem;
    height: 2.2rem;
    background: white;
}
</style>