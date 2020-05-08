<template>
    <div id="my" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">月账单</p>
        </div>
        <!--<div class="je_dp">-->
        <!--</div>-->
        <div class="tab-tit">
            <div href="javascript:;" @click="refund" :class="{'cur':msg===0}">
                <p :class="{'curcolor':msg===0}">消费</p>
                <p>- {{spendAmount}} <span v-if="monthlybitwo==0">元</span> <span v-if="monthlybitwo==1">积分</span></p>
            </div>
            <div href="javascript:;" @click="spend" :class="{'cur':msg===1}">
                <p :class="{'curcolor':msg===1}">退款</p>
                <p>+ {{refundAmount}} <span v-if="monthlybitwo==0">元</span> <span v-if="monthlybitwo==1">积分</span></p>
            </div>
        </div>
        <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
            如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con" >
            <div v-show="msg===0" class="Alreadyobtained Alreadyused">

                <ul>


                    <li v-for="(value,key) in list">
                        <div class="thime">{{key}}</div>
                        <router-link  v-for="(datatw,index) in value"  v-if="datatw.orderType!==3"  :to="{name:'ShopBilldetails',params:{ordersNo:datatw.ordersNo,returnsApplyNo:datatw.returnsApplyNo,productId:datatw.productId,type:msg+1,monthlybitwo:monthlybitwo}}">
                            <div>
                                <div><span v-if="monthlybitwo==1">积分</span><span v-if="monthlybitwo==0">现金</span>购物</div>
                                <div>{{datatw.details}}</div>
                            </div>
                            <div><span  class="vermide">- {{datatw.amount}}</span> <span v-if="monthlybitwo==1" class="vermide">积分</span><span v-if="monthlybitwo==0" class="vermide">元</span><img src="../static/images/shop/rigth.png"></div>
                        </router-link>
                        <router-link  v-for="(datatw,index) in value" v-if="datatw.orderType==3" :to="{name:''}">
                            <div>
                                <div style="line-height: 1.2rem"><span v-if="monthlybitwo==1">积分</span><span v-if="monthlybitwo==0">现金</span>运费</div>
                            </div>
                            <div><span class="vermide">- {{datatw.amount}}</span> <span v-if="monthlybitwo==1" class="vermide">积分</span><span v-if="monthlybitwo==0" class="vermide">元</span><img src="../static/images/shop/rigth.png"></div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div v-show="msg===1" class="Alreadyobtained ">
                <ul>
                    <li v-for="(value,key) in list">
                        <div class="thime">{{key}}</div>
                        <router-link v-for="(datatw,index) in value" :to="{name:'ShopBilldetails',params:{ordersNo:datatw.ordersNo,returnsApplyNo:datatw.returnsApplyNo,productId:datatw.productId,type:msg+1,monthlybitwo:monthlybitwo}}">
                            <div>
                                <div><span v-if="monthlybitwo==1">积分</span><span v-if="monthlybitwo==0">现金</span>商品退款</div>
                                <div>{{datatw.details}}</div>
                            </div>
                            <div><span class="vermide">+ {{datatw.amount}}</span> <span v-if="monthlybitwo==1" class="vermide">积分</span><span v-if="monthlybitwo==0"  class="vermide">元</span><img src="../static/images/shop/rigth.png"></div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue'
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
        data () {
            return {
                msg: this.$route.params.rotertype,
                isShowCalendar: false, // 是否显示弹窗
                isShowTips: false, // 是否显示下载提示
                defaultDatetime: new Date(),
                systemDate: '',
                nowDate: '',
                monthlybill: this.$route.params.type,
                monthlybitwo: this.$route.params.tystore,
                list: '',
                refundAmount:0,
                spendAmount:0
                // markDate: [
                //   '2019/11/24','2019/11/22',
                //   {color: 'red',date: ['0', '2019/02/25', '2019/03/25', '2019/04/25', '2019/05/25', '2019/06/25', '2019/07/25', '2019/08/25', '2019/09/25', '2019/10/25', '2019/11/25', '2019/12/25']},
                //   {color: 'blue',date: ['2019/01/20', '2019/02/20', '2019/03/20', '2019/04/20', '2019/05/20', '2019/06/20', '2019/07/20', '2019/08/20', '2019/09/20', '2019/10/20', '2019/11/20', '2019/12/20']},
                //   {color: 'pink',date: ['2019/01/12', '2019/02/12', '2019/03/12', '2019/04/12', '2019/05/12', '2019/06/12', '2019/07/12', '2019/08/12', '2019/09/12', '2019/10/12', '2019/11/12', '2019/12/12']},
                //   {color: '#000000',date: ['2019/01/29', '2019/02/29', '2019/03/29', '2019/04/29', '2019/05/29', '2019/06/29', '2019/07/29', '2019/08/29', '2019/09/29', '2019/10/29', '2019/11/29', '2019/12/29']}
                // ], //对象数组形式的标记日期，可以自定义标记颜色
            }
        },
        /** 初始化组件的时候进行数据处理**/
        created: function () {
            if (this.msg==undefined){
                this.msg=localStorage.getItem("typebilld")-1
            }
            if (this.monthlybill==undefined){
               this.monthlybill=localStorage.getItem("backtime")
            }else {
                localStorage.setItem("backtime",this.monthlybill);

            }
            if (this.monthlybitwo==undefined){
                this.monthlybitwo=localStorage.getItem("monthlybitwo")
            }else {
                localStorage.setItem("monthlybitwo",this.monthlybitwo);

            }
            var that = this
            if(this.monthlybitwo==1){
                jsonAjax.post(urlUtil.getApiUrl('getcreditsmonthinfo'), {userId: that.$store.state.userinfo.userId, time: that.monthlybill,type:that.msg,page:1}, function (data) {
                    that.list = data.result[0]
                    that.refundAmount = data.result[1].refundAmount
                    that.spendAmount = data.result[1].spendAmount
                })
            }else {
                jsonAjax.post(urlUtil.getApiUrl('getnmoneymonthinfo'), {userId:that.$store.state.userinfo.userId, time: that.monthlybill,type:that.msg,page:1}, function (data) {
                    that.list = data.result[0]
                    that.refundAmount = data.result[1].refundAmount
                    that.spendAmount = data.result[1].spendAmount
                })
            }


            // 转换当前日期
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
        methods: {
            showCalendarDialog () { // 显示日历
                this.isShowCalendar = true
            },
            dateChange (date) { // 日期改变触发
                console.log(date, 'change')
            },
            dateConfirm (date) { // 点击确认按钮触发
                console.log(date, 'confirm')
            },
            dateClick (date) { // 点击日期时按钮触发
                console.log(date, 'click')
            },
            routerBack: function () {
                // 返回上一个路由
                this.$router.back(-1)
            },
            refund:function () {
                var that=this
                if (this.msg==0){

                }else {
                    this.msg=0
                    if(this.monthlybitwo==1){
                        jsonAjax.post(urlUtil.getApiUrl('getcreditsmonthinfo'), {userId: that.$store.state.userinfo.userId, time: that.monthlybill,type:that.msg,page:1}, function (data) {
                            that.list = data.result[0]
                        })
                    }else {
                        jsonAjax.post(urlUtil.getApiUrl('getnmoneymonthinfo'), {userId: that.$store.state.userinfo.userId, time: that.monthlybill,type:that.msg,page:1}, function (data) {
                            that.list = data.result[0]
                        })
                    }

                }

            },
            spend:function () {
                var that=this
                if (this.msg==1){

                }else {
                    this.msg=1
                    if(this.monthlybitwo==1){
                        jsonAjax.post(urlUtil.getApiUrl('getcreditsmonthinfo'), {userId: that.$store.state.userinfo.userId, time: that.monthlybill,type:that.msg,page:1}, function (data) {
                            that.list = data.result[0]
                        })
                    }else {
                        jsonAjax.post(urlUtil.getApiUrl('getnmoneymonthinfo'), {userId: that.$store.state.userinfo.userId, time: that.monthlybill,type:that.msg,page:1}, function (data) {
                            that.list = data.result[0]
                        })
                    }
                }

            }

        }

    }
</script>

<style scoped>
    audio, canvas, video, img{
        display: inline-block;
    }
    .content_box {
        background: #F5F5F5;
        height: 100%;
        z-index: 2;
    }
    .je_dp{
        margin-top: 1rem;
    }
    .tab-tit {
        background: white;
        margin-top: 0.88rem;
        display: flex;
        justify-content: space-around;
    }
    .tab-tit p:nth-of-type(1){
        line-height: .8em;
        margin-top: .35rem;
    }
    body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, tdbody{
        background: none;
    }
    .thime{
        width: 100%;
        /*height: 1rem;*/
        padding: 0.1rem .2rem;
        color: #333333;
        background: #F5F5F5;
        line-height: 0.8rem;
    }
    .tab-tit div {
        padding-bottom: 1.4rem;
        background: white;
        display: inline-block;
        height: 1.2rem;
        line-height: .6rem;
        width:28%;
        font-size: .32rem;
        text-align: center;
        color: #333;

    }
    .tab-tit div P:nth-of-type(2){
        font-size: .28rem;
    }
    .tab-tit .cur {
        border-bottom: 2px solid #E4811D;
    }
    .tab-tit .curcolor {
        color: #E4811D;
    }


    .tab-con>div {
        background: white;
        height: 13rem;
        margin: 0 auto;
        /*padding-top: 20px;*/
    }
    .Alreadyobtained li a{
        width: 100%;
        padding: .1rem .2rem;
        height: 1.4rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EEEEEE;
        background: white;
    }
    .Alreadyobtained li a>div>div:nth-of-type(1){
        margin-top: .1rem;
        color: #333;
        line-height: .5rem;
    }
    .Alreadyobtained li a>div>div:nth-of-type(2){
        color: #666;
        line-height: .5rem;
        width: 4rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    }
    .Alreadyobtained li a>div:nth-of-type(2){
        line-height: 1.2rem;
        color: #E4811D;
        text-align: right;
    }
    .Alreadyobtained img{
        width: .3rem;
        margin-left: .2rem;
        vertical-align: middle;
    }
    .vermide{
        vertical-align: middle;
    }
    .Alreadyused li a>div:nth-of-type(2){
        color: #333;
        text-align: right;
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
        color: #333;
        border-bottom: .4rem solid #F5F5F5;
        padding: .2rem;
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
    .time_xz>div:nth-of-type(1)>div{
        margin-top: .15rem;
        font-weight: bold;
        border-left: 1px solid #E4811D;
        height: .4rem;
        width: 1.4rem;
        text-align: center;
        line-height: .4rem;
        color: #E4811D;
    }


</style>
