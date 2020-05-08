<template>
    <div id="my" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="routerBack"></div>
            <p class="HEADER_SHOP_TITLE">账单详情</p>
        </div>
        <div class="detailsbox">
            <div>
                <p class="detailstitie">HALE 商城 购买商品</p>
                <img src="../static/images/shop/Success.png">
                <p class="play_monery"><span><span v-if="type==1">支付</span><span v-if="type==2">退款</span>成功</span> <span>    {{listdata.amount}} <span v-if="monthlybitwo==0" >元</span><span v-if="monthlybitwo==1" >积分</span></span></p>
            </div>
            <div>
                <div>
                    <span>支付方式：</span>
                    <span v-if="listdata.payMode==1">支付宝</span>
                    <span v-if="listdata.payMode==2">微信支付</span>
                    <span v-if="listdata.payMode==3">网银支付</span>
                    <span v-if="listdata.payMode==4">余额支付</span>
                    <span v-if="listdata.payMode==5">快钱支付</span>
                    <span v-if="listdata.payMode==6">货到付款</span>
                    <span v-if="listdata.payMode==7">积分抵扣</span>
                    <span v-if="listdata.payMode==8">支付宝(扫描)</span>
                    <span v-if="listdata.payMode==9">线下现金交易</span>
                    <span v-if="listdata.payMode==10">线下刷卡交易</span>
                    <span v-if="listdata.payMode==11">积分交易</span>

                </div>
                <div>
                    <p><span>商品说明：</span><span style="text-align: right">{{listdata.details}}</span></p>
                    <p><span></span><router-link :to="{name:'ShoporderDetail',params:{orderId:orderId}}"><span>查看订单详情  〉</span></router-link></p>
                </div>
                <div><span>订单编号：</span><span>{{listdata.ordersNo}}</span></div>
                <div><span>创建时间：</span><span>{{listdata.orderTime|formatDate}}</span></div>
                <div v-if="listdata.arrivalTime!==null && type == 2">
                    <span>申请退款时间：</span><span>{{listdata.refundTime|formatDate}}</span></div>
                <div v-if="type == 1">
                    <span>完成时间：</span><span>{{listdata.arrivalTime|formatDate}}</span></div>
                <div v-if="listdata.refundTime!==null">
                    <span>退款到账时间：</span><span>{{listdata.arrivalTime|formatDate}}</span></div>
                <div v-if="listdata.returnFreight!==null">
                    <span>运费已退回积分余额：</span><span>{{listdata.returnFreight}} 积分</span></div>
            </div>
        </div>
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
    export default {
        components: {},
        data() {
            return {
                msg: 0,
                isShowCalendar: false,//是否显示弹窗
                isShowTips: false,//是否显示下载提示
                defaultDatetime: new Date(),
                systemDate: '',
                nowDate: '',
                ordersNo: this.$route.params.ordersNo,
                productId: this.$route.params.productId,
                type: this.$route.params.type,
                backtime: this.$route.params.time,
                monthlybitwo:this.$route.params.monthlybitwo,
                returnsApplyNo:this.$route.params.returnsApplyNo,
                listdata: '',
                orderId: ''
                // markDate: [
                //   '2019/11/24','2019/11/22',
                //   {color: 'red',date: ['0', '2019/02/25', '2019/03/25', '2019/04/25', '2019/05/25', '2019/06/25', '2019/07/25', '2019/08/25', '2019/09/25', '2019/10/25', '2019/11/25', '2019/12/25']},
                //   {color: 'blue',date: ['2019/01/20', '2019/02/20', '2019/03/20', '2019/04/20', '2019/05/20', '2019/06/20', '2019/07/20', '2019/08/20', '2019/09/20', '2019/10/20', '2019/11/20', '2019/12/20']},
                //   {color: 'pink',date: ['2019/01/12', '2019/02/12', '2019/03/12', '2019/04/12', '2019/05/12', '2019/06/12', '2019/07/12', '2019/08/12', '2019/09/12', '2019/10/12', '2019/11/12', '2019/12/12']},
                //   {color: '#000000',date: ['2019/01/29', '2019/02/29', '2019/03/29', '2019/04/29', '2019/05/29', '2019/06/29', '2019/07/29', '2019/08/29', '2019/09/29', '2019/10/29', '2019/11/29', '2019/12/29']}
                // ], //对象数组形式的标记日期，可以自定义标记颜色
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {

            if (this.ordersNo==undefined){
                this.ordersNo=localStorage.getItem("ordersNo")
            }else {
                localStorage.setItem("ordersNo",this.ordersNo);

            }
            if (this.productId==undefined){
                this.productId=localStorage.getItem("productId")
            }else {
                localStorage.setItem("productId",this.productId);

            }
            if (this.monthlybitwo==undefined){
                this.monthlybitwo=localStorage.getItem("monthlybitwo")
            }else {
                localStorage.setItem("monthlybitwo",this.monthlybitwo);

            }
            if (this.type==undefined){
                this.type=localStorage.getItem("typebilld")
            }else {
                localStorage.setItem("typebilld",this.type);

            }
            if (this.returnsApplyNo==undefined){
                this.returnsApplyNo=localStorage.getItem("returnsApplyNo")
            }else {
                localStorage.setItem("returnsApplyNo",this.returnsApplyNo);

            }
            console.log(this.backtime)
            var that = this
            jsonAjax.get(urlUtil.getApiUrl('getbiledetail'), {
                ordersNo: that.ordersNo,
                productId: that.productId,
                type: that.type,
                returnsApplyNo:that.returnsApplyNo
            }, function (result) {
                that.orderId=result.result.orderId
                that.listdata = result.result
            })
            //转换当前日期
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
            this.systemDate = year + seperator1 + month + seperator1 + strDate
            console.log(this.monthlybill)
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
        },
        methods: {
            showCalendarDialog() {// 显示日历
                this.isShowCalendar = true
            },
            dateChange(date) {// 日期改变触发
                console.log(date, 'change')
            },
            dateConfirm(date) {// 点击确认按钮触发
                console.log(date, 'confirm')
            },
            dateClick(date) {// 点击日期时按钮触发
                console.log(date, 'click')
            },
            routerBack: function () {
                //返回上一个路由
                console.log(this.backtime)
                this.$router.back({name: "ShopMonthlybill", param: {type: this.backtime}})
            }

        }

    }
</script>

<style scoped>
    .content_box {
        background: white;
        height: 100%;
        z-index: 2;
    }

    .detailsbox {
        color: #333;
        margin-top: 1rem;
    }

    .detailsbox > div:nth-of-type(1) {
        border-bottom: .2rem solid #F5F5F5;
        height: 5rem;
        text-align: center;
        background: white;
    }

    .detailsbox > div > p {
        height: 1rem;
        line-height: 1rem;
        background: white;
    }

    .detailstitie {
        font-size: .3rem;
    }

    .detailsbox > div:nth-of-type(2) p {
        height: .4rem;
        line-height: .4rem;
        background: white;
    }

    .play_monery {
        font-size: .34rem;
    }

    .play_monery span:nth-of-type(2) {
        font-weight: bold;
    }

    .detailsbox > div:nth-of-type(2) {
    }

    .detailsbox > div:nth-of-type(2) div {
        border-bottom: 1px solid #F5F5F5;
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    .detailsbox > div:nth-of-type(2) div:nth-of-type(2) {
        display: block;
    }

    .detailsbox > div:nth-of-type(2) p {
        display: flex;
        justify-content: space-between;
    }

    .detailsbox > div:nth-of-type(2) p:nth-of-type(1) span:nth-of-type(2) {
        width: 4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
    }

    audio, canvas, video, img {
        display: inline-block;
    }
</style>
