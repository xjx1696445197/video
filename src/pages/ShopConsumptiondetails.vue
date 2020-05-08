<template>
    <div id="my" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">积分交易明细</p>
        </div>
        <!--<div class="je_dp">-->
        <!--</div>-->
        <!--<div class="tab-tit">-->
            <!--<div href="javascript:;" @click="integral" :class="{'cur':msg===1}">积分交易</div>-->
            <!--&lt;!&ndash;<div href="javascript:;" @click="cash" :class="{'cur':msg===0}">现金交易</div>&ndash;&gt;-->
        <!--</div>-->
        <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
            如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con">
            <div v-show="msg===1" class="Alreadyobtained Alreadyused"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" >
                <div class="time_xz">
                    <div>
                        <div>
                            <button @click="showCalendarDialog"
                                    style="border:none;font-weight: bold"
                            >{{systemDate}}   月</button><img  @click="showCalendarDialog"
                                                              src="../static/images/shop/down1.png" style="vertical-align: middle;">
                        </div>
                        <div>
                            <router-link :to="{name:'ShopMonthlybill',params:{type:systemDate,tystore:1,rotertype:0}}" class='bgfff  table all'
                            style="color: #E4811D"
                            >
                                月账单
                            </router-link>

                        </div>
                    </div>
                    <div>消费：{{spendAllAmount}} 积分  <span style="margin-left: 0.2rem">退款：{{refundAllAmount}} 积分</span></div>
                </div>
                <div style="height: 2.48rem"></div>
                <ul>
                    <li v-for="(data,index) in list">
                        <div>
                            <div v-if="data.orderType==0">积分购物</div>
                            <div v-if="data.orderType==1">积分商品退款</div>
                            <div>{{data.orderTime|formatDate}}</div>
                        </div>
                        <div :class="{'curtwo':data.orderType==true}"><span  v-if="data.orderType==1">+</span><span  v-if="data.orderType==0">-</span>  {{data.amount}} 积分</div>
                    </li>

                </ul>
                <div style="text-align: center;font-size: .28rem;line-height: 1rem">{{loadTxt}}</div>
            </div>
            <div v-show="msg===0" class="Alreadyobtained"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" >
                <div class="time_xz">
                    <div>
                        <div>
                            <button @click="showCalendarDialog">{{systemDate}}   月</button><img src="../static/images/shop/down1.png">
                        </div>
                        <div>
                            <router-link :to="{name:'ShopMonthlybill',params:{type:systemDate,tystore:0}}" class='bgfff  border_b table all'>
                                月账单
                            </router-link>
                        </div>
                    </div>
                    <div>消费：{{spendAllAmount}} 元 退款：{{refundAllAmount}} 元</div>
                </div>
<div style="height: 2.68rem"></div>
                <ul>
                    <li v-for="(data,index) in list">
                        <div>
                            <div v-if="data.orderType==0">现金购物</div>
                            <div v-if="data.orderType==1">现金商品退款</div>
                            <div>{{data.orderTime|formatDate}}</div>
                        </div>
                        <div  :class="{'curtwo':data.orderType==true}"><span  v-if="data.orderType==1">+</span><span  v-if="data.orderType==0">-</span>  {{data.amount}} 元</div>
                    </li>

                </ul>
                <div style="text-align: center;font-size: .28rem;line-height: 1rem">{{loadTxt}}</div>
            </div>

        </div>
        <vue-hash-calendar ref="picker"
                           model="dialog"
                           :scroll-change-date="true"
                           :visible.sync="isShowCalendar"
                           :default-datetime="defaultDatetime"
                           :is-show-week-view="false"
                           format="YY-MM"
                           week-start="sunday"
                           picker-type="datetime"
                           :show-today-button="true"
                           @confirm="dateConfirm"
                           @click="dateClick"
                           @change="dateChange"></vue-hash-calendar>
        <!--<router-link :to="{name:'ShopExchangepoints',params:{type:'USDT'}}">-->
            <!--<div class="Exchangepoints">-->
                <!--兑换积分-->
            <!--</div>-->
        <!--</router-link>-->
    </div>

</template>

<script>
    import Vue from 'vue'
    import {InfiniteScroll} from 'mint-ui'
    Vue.use(InfiniteScroll)
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import userPhoto from '@/static/images/shop/mrbj.png'
    import vueHashCalendar from 'vue-hash-calendar'
    // 引入组件CSS样式
    import 'vue-hash-calendar/lib/vue-hash-calendar.css'
    // 注册组件库
    Vue.use(vueHashCalendar)
    // 注册组件库
    export default {
        components: {},
        data () {
            return {
                msg: 1,
                isShowCalendar: false,//是否显示弹窗
                isShowTips: false,//是否显示下载提示
                defaultDatetime: new Date(),
                systemDate: '',
                nowDate: '',
                list:'',
                refundAllAmount:'',
                spendAllAmount:'',
                loadTag: true,
                curPage:1,//当前页码
                loadTxt:'',
                loadTxttwo:'',
                curPagetwo:1
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            var date = new Date()
            var seperator1 = '-'
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var strDate = date.getDate()
            if (month >= 1 && month <= 9) {
                month = '0' + month
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = '0' + strDate
            }
            this.systemDate = year + seperator1 + month
            console.log(this.systemDate)
            var that=this;
            if (that.msg==0){
                jsonAjax.post(urlUtil.getApiUrl('getmoneytransactioninfo'), {userId: that.$store.state.userinfo.userId, time: that.systemDate,page:that.curPage}, function (data) {
                    that.list=data.result.list;
                    that.refundAllAmount=data.result.refundAllAmount;
                    that.spendAllAmount=data.result.spendAllAmount;
                })
            }else {
                jsonAjax.get(urlUtil.getApiUrl('getcreditstransactioninfo'), {userId: that.$store.state.userinfo.userId, time: that.systemDate,page:that.curPagetwo}, function (data) {
                    that.list=data.result.list;
                    that.refundAllAmount=data.result.refundAllAmount;
                    that.spendAllAmount=data.result.spendAllAmount;
                })
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
            }},
        methods: {
            showCalendarDialog () {// 显示日历
                this.isShowCalendar = true;
            },
            dateChange (date) {// 日期改变触发
                console.log(date, 'change');
            },
            dateConfirm (date) {// 点击确认按钮触发
                this.loadTag=true;
                this.systemDate=date;
                var that=this;
                that.curPage=1
                that.curPagetwo=1
                this.list='';
                that.refundAllAmount='';
                that.spendAllAmount='';
                if (that.msg==0){
                    jsonAjax.post(urlUtil.getApiUrl('getmoneytransactioninfo'), {userId: that.$store.state.userinfo.userId, time: that.systemDate,page:that.curPage}, function (data) {
                        that.list=data.result.list;
                        that.refundAllAmount=data.result.refundAllAmount;
                        that.spendAllAmount=data.result.spendAllAmount;
                    })
                }else {
                    jsonAjax.get(urlUtil.getApiUrl('getcreditstransactioninfo'), {userId: that.$store.state.userinfo.userId, time: that.systemDate,page:that.curPage}, function (data) {
                        that.list=data.result.list;
                        that.refundAllAmount=data.result.refundAllAmount;
                        that.spendAllAmount=data.result.spendAllAmount;
                    })
                }
            },
            dateClick (date) {// 点击日期时按钮触发
                console.log(date, 'click')
            },
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1)
            },
            cash:function () {
                var  that=this;
                that.list='';
                that.loadTag=true;
                that.curPage=1;
                that.curPagetwo=1;
                if (this.msg==0){

                }else {
                    this.msg=0;
                    this.list='';
                    that.refundAllAmount='';
                    that.spendAllAmount='';
                    jsonAjax.post(urlUtil.getApiUrl('getmoneytransactioninfo'), {userId: that.$store.state.userinfo.userId, time: that.systemDate,page:that.curPage}, function (data) {
                        that.list=data.result.list;
                        that.refundAllAmount=data.result.refundAllAmount;
                        that.spendAllAmount=data.result.spendAllAmount;
                        if (data.result.list.length!==0){
                            that.loadTxt='加载完成'

                        }else {
                            that.loadTxt='没有更多数据'
                        }
                    })
                }
            },
            integral:function () {
                var  that=this;
                that.list='';
                that.loadTag=true;
                that.curPage=1;
                that.curPagetwo=1;
                if (this.msg==1){

                }else {
                    this.msg=1;
                    this.list='';
                    that.refundAllAmount='';
                    that.spendAllAmount='';
                    jsonAjax.get(urlUtil.getApiUrl('getcreditstransactioninfo'), {userId: that.$store.state.userinfo.userId, time: that.systemDate,page:that.curPage}, function (data) {
                        that.list=data.result.list;
                        that.refundAllAmount=data.result.refundAllAmount;
                        that.spendAllAmount=data.result.spendAllAmount;
                        if (data.result.list.length!==0){
                            that.loadTxt='加载完成'

                        }else {
                            that.loadTxt='没有更多数据'
                        }
                    })
                }
            },
            doQuery: function () {
              var that=this;
                if (that.msg==0){
                    that.curPage++
                    jsonAjax.post(urlUtil.getApiUrl('getmoneytransactioninfo'), {userId: that.$store.state.userinfo.userId, time: that.systemDate,page:that.curPage}, function (data) {
                        if (data.result.list.length!==0){
                            var allProducts = [];
                            allProducts = allProducts.concat(that.list, data.result.list);
                            that.list = allProducts
                        }else {
                            that.loadTag=false
                        }
                        if (data.result.list.length!==0){
                            that.loadTxt='加载完成'

                        }else {
                            that.loadTxt='没有更多数据'
                        }
                    })
                }else {
                    that.curPagetwo++
                    jsonAjax.get(urlUtil.getApiUrl('getcreditstransactioninfo'), {userId: that.$store.state.userinfo.userId, time: that.systemDate,page:that.curPagetwo}, function (data) {
                        if (data.result.list.length!==0){
                            var allProducts = [];
                            allProducts = allProducts.concat(that.list, data.result.list);
                            that.list = allProducts
                        }else {
                            that.loadTag=false
                        }
                        if (data.result.list.length!==0){
                            that.loadTxt='加载完成'

                        }else {
                            that.loadTxt='没有更多数据'
                        }
                    })
                }
            },
            loadMore:function () {
                if (this.loadTag) {
                    this.loadTxt = "正在加载...";
                    this.doQuery();
                }
            }

        }

    }
</script>

<style scoped>
    .content_box {
        background: #F5F5F5;
        height: 100%;
        z-index: 2;
    }
    .je_dp{
        margin-top: 1rem;
    }
    .tab-tit {
        position: fixed;
        width: 100%;
        top: .88rem;
        background: white;
        display: flex;
        justify-content: space-around;
    }

    .tab-tit div {

        background: white;
        display: inline-block;
        height: 1rem;
        line-height: 1rem;
        width: 18%;
        font-size: .32rem;
        text-align: center;
        color: #333;
    }

    .tab-tit .cur {
        color: #E4811D;
        border-bottom: 2px solid #E4811D;
    }

    .tab-con>div {
        background: white;
        margin: 0 auto;
        padding-top: 20px;
    }
    .Alreadyobtained ul{
        background: white;
    }
    .Alreadyobtained li{
        width: 100%;
        padding:.1rem .2rem;
        height: 1.4rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EEEEEE;
        background: white;
    }
    .Alreadyobtained li>div>div:nth-of-type(1){
        color: #333;
        line-height: .5rem;
        margin-top: .1rem;
    }
    .Alreadyobtained li>div>div:nth-of-type(2){
        color: #666;
        line-height: .5rem;
    }
    .Alreadyobtained li>div:nth-of-type(2){
        line-height: 1.1rem;

    }
    .curtwo{
        color: #E4811D!important;
    }
    .Alreadyused li>div:nth-of-type(2){
        color: #333;
    }
    .Exchangepoints{
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
        border-radius:5px;
    }
    .time_xz{
        position: fixed;
        width: 100%;
        background: white;
        color: #333;
        border-bottom: .2rem solid #F5F5F5;
        padding: .2rem;
        /*top: 1.88rem;*/
        top:0.88rem;
    }
    .time_xz>div:nth-of-type(1){
        display: flex;
        justify-content: space-between;
        line-height: .7rem;


    }
    .time_xz>div:nth-of-type(2){
        line-height: .5rem;
    }
    .time_xz>div:nth-of-type(1)>button{
        font-weight: bold;
    }
    .time_xz>div:nth-of-type(1)>div:nth-of-type(2){
        margin-top: .15rem;
        font-weight: bold;
        border-left: 1px solid #E4811D;
        height: .4rem;
        width: 1.4rem;
        text-align: center;
        line-height: .4rem;
        color: #E4811D;
    }
    .time_xz>div:nth-of-type(1)>div:nth-of-type(1){
        font-weight: bold;
    }
    .time_xz>div:nth-of-type(1)>div:nth-of-type(1) img{
        width: 15%;
        margin-left: .2rem;
    }
 img{
     display: inline-block;
 }

</style>
