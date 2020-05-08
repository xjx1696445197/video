<template>
    <div id="my" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">我的积分</p>
        </div>
        <div style="position:fixed;width: 100%;height: 4.35rem;background: #f5f5f5">
        <div class="je_dp">
            <div>可用积分</div>
            <div>{{userData.availableCredits|numFilter}}</div>
            <div style="margin-top: .2rem">
<!--                <div>-->
<!--                    <div>冻结积分</div>-->
<!--                    <div>{{userData.lockCredits|numFilter}}</div>-->
<!--                </div>-->
<!--                <div>-->
                    <div>累计兑换积分</div>
                    <div class="lj_jf">{{userData.allCredits|numFilter}}</div>
                </div>
        </div>
        </div>
        <div style="height: 4.2rem">

        </div>
        <div id="tab_positi">
        <div class="tab-tit">
            <div href="javascript:;" @click="getCredits" :class="{'cur':msg===0}">已兑换</div>
            <div href="javascript:;" @click="OutputInfo" :class="{'cur':msg===1}">已使用</div>
<!--            <div href="javascript:;" @click="msg=2" :class="{'cur':msg===2}">冻结</div>-->
        </div>
        <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
            如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con"   v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10">
            <div v-show="msg===0" class="Alreadyobtained">
                <ul>
                    <li v-for="(data,index) in creditsInput" >
                        <div>
                            <div v-if="data.transactionType==11">HALE兑换积分</div>
                            <div v-if="data.transactionType==12">USDT兑换积分</div>
                            <div v-if="data.transactionType==13">积分退款</div>
                            <div>{{data.addTime | formatDate}}</div>
                        </div>
                        <div>+ {{data.amount|numFilter}} 积分</div>
                    </li>
                </ul>
                <div style="text-align: center;font-size: .28rem;line-height: 1rem">{{loadTxt}}</div>
            </div>
            <div v-show="msg===1" class="Alreadyobtained Alreadyused" >
                <ul>
                    <li v-for="(data,index) in creditsOutput">
                        <div>
                            <div v-if="true">积分消费</div>
                            <div>{{data.addTime | formatDate}}</div>
                        </div>
                        <div>- {{data.amount|numFilter}} 积分</div>
                    </li>
                </ul>
                <div style="text-align: center;font-size: .28rem;line-height: 1rem">{{loadTxt}}</div>
            </div>
<!--            <div v-show="msg===2" class="Alreadyobtained Alreadyused">-->
<!--            </div>-->
        </div>
        </div>
        <router-link :to="{name:'ShopExchangepoints',params:{type:'USDT'}}">
            <div class="Exchangepoints">
                兑换积分
            </div>
        </router-link>

    </div>

</template>

<script>
    import Vue from 'vue'
    import {InfiniteScroll} from 'mint-ui'

    Vue.use(InfiniteScroll)
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import userPhoto from '@/static/images/shop/mrbj.png'

    export default {
        components: {},
        data () {
            return {
                msg: 0,
                userData: '',
                creditsInput: '',
                creditsOutput:'',
                loadTag: true,
                loadTagtwo:true,
                curPage:1,//当前页码
                curPagetwo:1,//当前页码
                loadTxt:'',
                loadTxttwo:''
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            var that = this
            jsonAjax.post(urlUtil.getApiUrl('getCreditsInfo'), {userId:that.$store.state.userinfo.userId}, function (result) {
                that.userData = result.result
                console.log(that.userData)
            })
            jsonAjax.post(urlUtil.getApiUrl('getCreditsInputInfo'), {userId: that.$store.state.userinfo.userId,page:"1"}, function (result) {
                that.creditsInput = result.result
                console.log(that.creditsInput)
            })
        },
        filters: {
            numFilter (value) {
                let realVal = ''
                if (value) {
                    // 截取当前数据到小数点后2位
                    let tempVal = parseFloat(value).toFixed(3)
                    realVal = tempVal.substring(0, tempVal.length - 1)
                } else {
                    realVal = '0'
                }
                return realVal
            },
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
            }
        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1)
            },
            loadMore: function () {
                var that=this;
                if (that.msg==0) {
                    console.log("loadTag")
                    if (this.loadTag) {

                        this.doQuery();
                    }
                }else {
                    console.log("loadTagtwo")
                    if (this.loadTagtwo) {

                        this.doQuery();
                    }
                }

            },
            getCredits:function(){
                var that=this;
                that.msg=0;
                if (that.creditsInput==''){
                    jsonAjax.post(urlUtil.getApiUrl('getCreditsInputInfo'), {userId: that.$store.state.userinfo.userId,page:that.curPage}, function (result) {
                        that.creditsInput = result.result
                    })
                }else {

                }

            },
            OutputInfo:function(){
                var that=this;
                that.msg=1;
                if (that.creditsOutput=='') {

                    jsonAjax.post(urlUtil.getApiUrl('getCreditsOutputInfo'), {
                        userId: that.$store.state.userinfo.userId,
                        page: that.curPagetwo
                    }, function (result) {
                        that.creditsOutput = result.result;
                       that.loadTag=result.success


                    })
                }else {

                }
            },
            doQuery: function () {
                var that = this;
                that.loadTag = true;
                that.loadTagtwo = true;
                if (that.msg==0){
                    that.curPage++;
                    jsonAjax.post(urlUtil.getApiUrl('getCreditsInputInfo'), {userId: that.$store.state.userinfo.userId,page:that.curPage}, function (result) {
                             if (result.success){
                                 var allProducts = [];
                                 allProducts = allProducts.concat(that.creditsInput, result.result);
                                 that.creditsInput = allProducts
                             }else {
                                 that.loadTag=result.success
                             }
                            if (that.result==null){
                                that.loadTxt='没有更多数据'
                            }else {
                                that.loadTxt='正在加载...'
                            }
                            console.log(that.creditsInput)
                    })
                }else {

                    that.curPagetwo++;
                    console.log(that.curPagetwo)
                    jsonAjax.post(urlUtil.getApiUrl('getCreditsOutputInfo'), {userId: that.$store.state.userinfo.userId,page:that.curPagetwo}, function (result) {
                        if (result.result==""){
                            that.loadTagtwo=false;
                        }else if (result.success){
                            var allProducts = [];
                            allProducts = allProducts.concat(that.creditsOutput, result.result);
                            that.creditsOutput = allProducts
                        }
                        if (that.result==null){
                            that.loadTxttwo='没有更多数据'
                        }else {
                            that.loadTxttwo='正在加载...'
                        }
                        console.log(that.creditsOutput)
                    })
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
        height: 3rem;
        color: white;
        text-align: center;
        margin-top: 1.1rem;
    }
    .je_dp > div:nth-of-type(1) {
     margin-top: .1rem;
    }
    .je_dp > div:nth-of-type(2) {
        height: .8rem;
        line-height: .8rem;
        font-size: .5rem;
        font-weight: bold;
    }
.lj_jf{
    font-size:.4rem!important;
    font-weight: bold;
}
    /*.je_dp > div:nth-of-type(3) {*/
    /*    margin-top: .2rem;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*}*/

    .je_dp > div:nth-of-type(3) > div {
        font-size: .2rem;
        text-align: center;
        /*width: 50%;*/

    }
    .je_dp > div:nth-of-type(3) > div:nth-of-type(2) {
        height: .8rem;
        line-height: .8rem;
    }
    .je_dp > div:nth-of-type(3) > div > div:nth-of-type(2) {
        font-weight: bold;
        font-size: .34rem;
        line-height: .6rem;
    }

    .je_dp > div:nth-of-type(3) > div > div:nth-of-type(1) {
        font-size: .22rem;
    }

    /*.je_dp > div:nth-of-type(3) > div:nth-of-type(1) {*/
    /*    border-right: 1px solid white;*/
    /*}*/

    .tab-tit {
        background: white;
        margin-top: .15rem;
        display: flex;
        justify-content: space-around;
    }

    .tab-tit div {

        background: white;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        width: 18%;
        font-size: .32rem;
        text-align: center;
        color: #333;
        padding-top: 0.1rem;
    }

    .tab-tit .cur {
        color: #E4811D;
        border-bottom: 2px solid #E4811D;
    }
    #tab_positi{
      /*position: fixed;*/
      /*  width: 100%;*/
      /*  height: 50%;*/
      /*  bottom: 1.4rem;*/
      /*  overflow: auto;*/

    }
    .tab-con{
        padding-bottom: 1.5rem;
    }
    .tab-con>div {
        background: white;
        overflow: auto;
        margin: 0 auto;
        padding-top: 20px;
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
        margin-top: .1rem;
        color: #333;
        line-height: .5rem;
    }
    .Alreadyobtained li>div>div:nth-of-type(2){
        color: #666;
        line-height: .5rem;
    }
    .Alreadyobtained li>div:nth-of-type(2){
        line-height: 1.15rem;
        color: #E4811D;
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

</style>
