<template>
    <div class="page">
        <p class="total">
            <span>{{$t('otc_entrust.purchase')}}：{{param.buyHaleNum|numFilter}}CHMC</span>
            <span>{{$t('otc_entrust.sell')}}：{{param.sellHaleNum|numFilter}}CHMC</span>
        </p>
        <div class="entrustbutton">
                <div  @click="commission">
                    {{$t('otc_entrust.commission')}}
            </div>
        </div>
        <div class="entrustlist" style="overflow: scroll; height: 100%;
    padding-bottom: 4.8rem;"   v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div v-for="(list,index) in data.result">
                <div>
                   <div>
                       <span v-if="list.type==1" class="green">{{$t('otc_entrust.purchase')}}</span>
                       <span v-if="list.type==2" class="red">{{$t('otc_entrust.sell')}}</span>

                       {{list.currency}}
                   </div>
                    <div class="green" v-if="list.type==1" >
                        {{$t('otc_entrust.entrustment')}}
                    </div>
                    <div class="red" v-if="list.type==2" >
                        {{$t('otc_entrust.entrustment')}}
                    </div>
                </div>
                <div>
            <div>
                <span v-if="list.type==1" >
                    {{$t('otc_entrust.purchaseprice')}}
                </span>
                <span v-if="list.type==2" >
                    {{$t('otc_entrust.Sellingprice')}}
                </span>
                <span class="bold">
                    $        {{list.amount}}
                </span>
            </div>
                    <div>
                           <span>
                    {{$t('otc_entrust.purchasequantity')}}
                </span>
                        <span class="bold">
                    {{list.sellNum}}  CHMC
                </span>
                    </div>
                </div>
                <div>
                    <div>
                <span>
                    {{$t('otc_entrust.buyingtime')}}
                </span>
                        <span class="bold">
                    {{list.transactionTime   | formatDate}}
                </span>
                    </div>
                <div @click="Revocationpurchase(list.id,list.type,index)" v-if="list.type==1">
                    {{$t('otc_entrust.revocationofpurchase')}}
                </div>
                    <div @click="Revocationpurchase(list.id,list.type,index)" v-if="list.type==2">
                        {{$t('otc_entrust.cancellationofsale')}}
                    </div>
                </div>

            </div>
            <P style="
                    padding: 0.32rem 0;
                    font-size: 0.24rem;
                    text-align: center;
                    color: #858b9c;
                    ">{{loadTxt}}</P>

<!--&lt;!&ndash;出售委托&ndash;&gt;-->
<!--            <div>-->
<!--                <div>-->
<!--                    <div>-->
<!--                        <span class="red">{{$t('otc_entrust.sell')}}</span>-->
<!--                        HALE-->
<!--                    </div>-->
<!--                    <div class="red">-->
<!--                        {{$t('otc_entrust.entrustment')}}-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <div>-->
<!--                <span>-->
<!--                    {{$t('otc_entrust.sellingprice')}}-->
<!--                </span>-->
<!--                        <span class="bold">-->
<!--                    $10.86-->
<!--                </span>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                           <span>-->
<!--                   {{$t('otc_entrust.quantitysold')}}-->
<!--                </span>-->
<!--                        <span class="bold">-->
<!--                    100000.56  HALE-->
<!--                </span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <div>-->
<!--                <span>-->
<!--                    {{$t('otc_entrust.sellingtime')}}-->
<!--                </span>-->
<!--                        <span class="bold">-->
<!--                    02.26-->
<!--                </span>-->
<!--                    </div>-->
<!--                    <div @click="Cancellationsale">-->
<!--                        {{$t('otc_entrust.cancellationofsale')}}-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->
        </div>
        <div class="mb" v-show="mbjudge">
        <div>
            <div>
                <div>{{$t('otc_entrust.revocationconfirmation')}}<img src="../static/images/icon/asset_close.png"  @click="Close"></div>
            </div>
            <div>{{$t('otc_entrust.cancellationsale')}}</div>
            <div>
                <div @click="Close">
                    {{$t('otc_entrust.cancel')}}
                </div>
                <div @click="Determine">
                    {{$t('otc_entrust.confirm')}}
                </div>
            </div>
        </div>

    </div>
        <div class="mb" v-show="mbjudgetw">
            <div>
                <div>
                    <div>{{$t('otc_entrust.revocationconfirmation')}}<img src="../static/images/icon/asset_close.png"  @click="Close"></div>
                </div>
                <div>{{$t('otc_entrust.revoke')}}</div>
                <div>
                    <div @click="Close">
                        {{$t('otc_entrust.cancel')}}
                    </div>
                    <div @click="Determine">
                        {{$t('otc_entrust.confirm')}}
                    </div>
                </div>
            </div>

        </div>
        <nlayer
                :visible="passwordDigVisible"
                @close="passwordDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_enterTransactionPwd')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    <input type="password"
                           class="PASSWORD_INPUT"
                           :placeholder="$t('layerdate.layerdate_enterTransactionPwd')"
                           v-model="password"
                    >
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closePasswordDig'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            :class="[isCheckPassword ? 'active' : '']"
                            @click='checkPassword'
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>
        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1500"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Nlayer from 'components/Nlayer'
    import {InfiniteScroll} from 'mint-ui'
    Vue.use(InfiniteScroll)
    export default {
        components: {
            Nlayer
        },
        data(){
            return {
                judge: '',
                mbjudge: false,
                mbjudgetw: false,
                userId: JSON.parse(localStorage.getItem('userinfo')).customerId,
                customerToken: JSON.parse(localStorage.getItem('userinfo')).customerToken,
                data: {result: []},
                chaseid: "",
                passwordDigVisible: false,
                passwordDigClose: false,
                password: "",
                tipsVisible: false,
                tips: '',
                index: '',
                curPage: 1,
                loadTag: true,
                loadTxt:"更多加载中...",
                param:'',
                isCheckPassword:true
            }
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
                return MM + '.' + d + ' ' + h + ':' + m + ':' + s
            },
        },
        methods:{
            // Cancellationsale(){
            // var that=this;
            //     that.mbjudge=true;
            // that.judge=0;
            // },
            // 监听消息提示打开
            loadMore:function () {
                if (this.loadTag) {
                    this.loadTxt = "更多加载中...";
                    this.doQuery();
                }

            },
            doQuery: function () {
                var that=this;
                this.$http.get('app/otcTransaction/findEntrustmentOrder', {
                    userId: that.userId,
                    pageNo: that.curPage,
                    pageSize: 5,
                    customerToken: that.customerToken
                }).then((datas) => {
                    if (datas.resultData == "") {
                        that.loadTxt = "全部已加载"
                        that.loadTag = false;
                    } else {
                        that.curPage++
                        var allProducts = [];
                        allProducts = allProducts.concat(that.data.result, datas.resultData);
                        that.data.result = allProducts;
                        that.loadTag = true;
                        that.loadTxt = "全部已加载"
                    }

                })


            },
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            closePasswordDig(){
                this.passwordDigVisible=false;
                this.password='';
            },
            checkPassword(){
                this.passwordDigVisible=false;
                var that=this;
                this.$http.post('app/otcTransaction/revokeOrder', {
                    id: that.chaseid,
                    userId: 4,
                    transPass: that.password
                }).then((res) => {
                    if(res.success){
                        that.showTips(res.message)
                        // that.data.result
                        that.data.result.splice(that.index,1);
                        that.password=''
                    }else {
                        that.showTips(res.message)
                        that.password=''
                    }
                })
                //调取判断支付密码是否正确
            },
            Revocationpurchase(id,type,index){
                var that=this;
                this.index=index;
                if (type==1){
                    that.mbjudgetw=true;
                } else {
                    that.mbjudge=true;
                }

                that.judge=1;
                that.chaseid=id
            },
            Close(){
                var that=this;
                that.mbjudge=false;
                that.mbjudgetw=false;
            },
            Determine(){
                var that=this;
                that.mbjudge=false;
                that.mbjudgetw=false;
                this.passwordDigVisible=true;
            },
            commission(){
                this.$push({
                    path: '/Releasecommission',
                })
            }
        },
        created() {
            var that=this;
            // this.$http.get('/js/hOtcTransaction/findEntrustmentOrder', {
            //     userId:that.userId,
            //     pageNo: that.curPage,
            //     pageSize:6
            // }).then((res) => {
            //     that.data=res
            // })
            this.$http.get('app/otcList/getStaticParam', {
                userId: that.userId,
            }).then((res) => {
                that.param = res.resultData;
            })
        }

    }
</script>
<style scoped>
    .page{
        margin-top: 2.88rem;
    }
    .mb>div{
        text-align: center;
        position: absolute;
        width: 6.6rem;
        height: 2.8rem;
        top: 25%;
        border-radius: .2rem;
        left: 50%;
        margin-left: -3.3rem;
        background: white;
    }
    .mb>div>div:nth-of-type(1){
        color: #333;
        font-size: .3rem;
        font-weight: bold;
        position: relative;
        height: 1.1rem;
        line-height: 1.1rem;
    }
    .mb>div>div:nth-of-type(2){
        font-size: .26rem;
        color: #333;
    }
    .mb>div>div:nth-of-type(3){
        margin-top: .35rem;
        border-top: 1px solid #eee;
        width: 6rem;
        margin-left: .3rem;
        display: flex;
        justify-content: space-around;
    }
    .mb>div>div:nth-of-type(3) div{
        height: .91rem;
        line-height: .91rem;
        color: #203395;
        width: 50%;
        font-size: .3rem;
        font-weight: bold;
    }
    .mb>div>div:nth-of-type(3) div:nth-of-type(1){
        border-right: 1px solid #eee;
    }
    .mb img{
        position: absolute;
        width: .3rem;
        height: .3rem;
        top: 50%;
        margin-top: -.15rem;
        right: .7rem;
    }
    .mb{
        height: 150%;
        width: 100%;
        background:rgba(0,0,0,.5);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
    }
    /*.page{*/
    /*    margin-top: 2.88rem;*/
    /*}*/
    .total{
          height: .8rem;
          background: white;

      }
    .total span{
        display: inline-block;
        width: 49%;
        font-size: .22rem;
        font-weight: bold;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        margin-top: .15rem;
    }
    .total span:nth-of-type(1){
        border-right: 1px solid #eee;
    }
    .entrustbutton{
        margin-top: .25rem;
       display: flex;
        justify-content: space-around;
        margin-bottom: .25rem;
    }
    .entrustbutton div{
        text-align: center;
        width: 5.5rem;
        height: .7rem;
        line-height: .7rem;
        border-radius: .4rem;
        font-size: .3rem;
        font-weight: bold;
        background:#203395;
        color: white;
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
    .entrustlist>div>div:nth-of-type(3) div:nth-of-type(2){
        width: 1.5rem;
        height: .5rem;
        line-height: .46rem;
        border: 1px solid #203395;
        color: #203395;
        text-align: center;
        border-radius: .05rem;
    }
    .entrustlist>div>div{
        height: .6rem;
        display: flex;
        justify-content: space-between;
    }

    .entrustlist>div{
        margin-top: .2rem;
        box-shadow:0px 5px 15px 0px rgba(102,102,102,0.1);
        border-radius: .2rem;
        padding: .28rem .3rem;
        height: 2.2rem;
        background: white;
    }
    .entrustlist>div:nth-of-type(1){
        margin-top: 0!important;
    }
</style>