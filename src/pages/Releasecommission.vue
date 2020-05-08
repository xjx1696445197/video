<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('otc_Releasecommission.ReleaseCommission')}}</p>
        </div>
        <div class="wrapper">
        <div class="wrapper_title clearfix">
            <p class="wrapper_title_txt fl">HALE/USDT</p>
            <p class="wrapper_title_txt fr">${{param.usdtHale| numFilter}}</p>
        </div>
            <div class="title">
                <ul class="tab-tilte">
                    <li @click="tabcur(0)" class="otc_tabbar_item1"><div :class="{active:cur==0}">{{$t('otc_Releasecommission.purchase')}}</div></li>
                    <li @click="tabcur(1)" class="otc_tabbar_item2"><div :class="{active1:cur==1}">{{$t('otc_Releasecommission.Sell')}}</div></li>
                </ul>
                <div>
                    <span>{{$t('otc_Releasecommission.Price')}}</span>
                    <span><span>{{$t('otc_Releasecommission.Currentdiscprice')}}</span>  {{param.usdtHale | numFilter}} USDT</span>

                </div>
            </div>
            <div class="tab-content">
<!--                委托购买-->
                <div v-show="cur==0">
                    <div>
                        <span>{{$t('otc_Releasecommission.Transactionprice')}}</span>
                        <input type="number" v-model="transactionprice" @input="exitsVal"  @blur="minxz" :placeholder="$t('otc_Releasecommission.Pleaseprice')" >
                        <span>
                            USDT
                        </span>
                    </div>
                    <div class="balance">
                        <span>{{$t('otc_Releasecommission.Transactionvolume')}}</span>
                        <span><span>{{$t('otc_Releasecommission.available')}}：</span>   {{accountList[1].amount |numFilter}} USDT</span>

                    </div>
                    <div>
                        <span>{{$t('otc_Releasecommission.Purchasequantity')}}（HALE）</span>
                        <input type="number" v-model="volume"  @input="exitsVal"  @blur="minxz" :placeholder="$t('otc_Releasecommission.Pleasequantity')" >

                    </div>
                    <p>
                        {{$t('otc_Releasecommission.Transactionrestrictions')}}
                    </p>
                    <div>
                        <span>{{$t('otc_Releasecommission.minimum')}}（USDT）</span>
                        <input type="number" v-model="min"  @input="exitsVal"  @blur="minxz"  :placeholder="$t('otc_Releasecommission.Minimumlimit')">

                    </div>
                    <div>
                        <span>{{$t('otc_Releasecommission.maximum')}}（USDT）</span>
                        <input type="number" v-model="max" @input="exitsVal" readonly="true"  :placeholder="$t('otc_Releasecommission.Maximumlimit')" >

                    </div>
                    <p>
                        {{$t('otc_Releasecommission.Remarks')}}
                    </p>
                    <div>
                     <textarea :placeholder="$t('otc_Releasecommission.transaction')"   v-model="remarks"   class="INPUT2"></textarea>
                    </div>
                    <div>
                        <div  class="grey"  v-show="information==0">
                            {{$t('otc_Releasecommission.Issueorder')}}
                    </div>
                        <div  class="yellow"  v-show="information==1"  @click="Releasecommission">
                            {{$t('otc_Releasecommission.Issueorder')}}
                        </div>
                    </div>
                </div>
<!--                委托出售-->
                <div v-show="cur==1">
                    <div>
                        <span>{{$t('otc_Releasecommission.Transactionprice')}}</span>
                        <input type="number"  v-model="transactionprice"  @input="exitsVal" @blur="minxz"  :placeholder="$t('otc_Releasecommission.Pleaseprice')"">
                        <span>
                            USDT
                        </span>
                    </div>
                    <div class="balance">
                        <span>{{$t('otc_Releasecommission.Transactionvolume')}}</span>
                        <div>

                            <P><span><span>{{$t('otc_Releasecommission.available')}}：</span>   {{accountList[0].amount |numFilter}} HALE</span></P>
                            <P><span><span>{{$t('otc_Releasecommission.available')}}：</span>   {{accountList[1].amount |numFilter}} USDT</span></P>

                        </div>

                    </div>
                    <div>
                        <span>{{$t('otc_Releasecommission.quantitysold')}}（HALE）</span>
                        <input type="number" v-model="volume"  @input="exitsVal"   @blur="minxz"  :placeholder="$t('otc_Releasecommission.Pleaseentersold')">
                        <div @click="whole">{{$t('otc_Releasecommission.whole')}}</div>
                    </div>
                    <p style="font-size: .22rem;background: white;height: .7rem;line-height: .7rem"><span style="color: #666">{{$t('otc_Releasecommission.ServiceCharge')}}：{{servicecharge| numFilter}} UDST</span><span style="color: #ccc">（ {{$t('otc_Releasecommission.Cancellationrelease')}}）</span></p>
                    <p>
                        {{$t('otc_Releasecommission.Transactionrestrictions')}}
                    </p>
                    <div>
                        <span>{{$t('otc_Releasecommission.minimum')}}（USDT）</span>
                        <input type="number" v-model="min"  @input="exitsVal" @blur="minxz" :placeholder="$t('otc_Releasecommission.Minsellinglimit')">

                    </div>
                    <div>
                        <span> {{$t('otc_Releasecommission.maximum')}}（USDT）</span>
                        <input type="number" v-model="max" @input="exitsVal" readonly="true" :placeholder="$t('otc_Releasecommission.Maxsellinglimit')">

                    </div>
                    <p>
                        {{$t('otc_Releasecommission.Remarks')}}

                    </p>
                    <div>
                        <textarea v-model="remarks" :placeholder="$t('otc_Releasecommission.transaction')" class="INPUT2"></textarea>
                    </div>
                    <div>
                        <div class="grey" v-show="information==0">
                            {{$t('otc_Releasecommission.Issueorder')}}
                        </div>
                        <div class="yellow" v-show="information==1" @click="Releasecommission">
                            {{$t('otc_Releasecommission.Issueorder')}}

                        </div>
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
                :visible="noPasswordDigVisible"
                @close="noPasswordDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_tips')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    {{$t('layerdate.layerdate_setPwd')}}
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closeNoPasswordDig'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='toSetDealPassword'
                    >{{$t('layerdate.layerdate_set')}}</div>
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
    import Nlayer from '@/components/Nlayer'

    export default {
        components: {
            Nlayer
        },
       data(){
           return{
               cur:0,
               information:0,
               transactionprice:'',
               volume:'',
               min:'',
               max:'',
               remarks:'',
               halebalance:'',
               ifExist:'',
               passwordDigVisible:false,
               passwordDigClose:"",
               isCheckPassword:false,
               password:'',
               noPasswordDigVisible:false,
               noPasswordDigClose:false,
               userId:JSON.parse(localStorage.getItem('userinfo')).userId,
               tipsVisible: false,
               tips: '',
               param:'',
               servicecharge:0,
               accountList:[{amount:0},{amount:0}]

           }
       },
        created(){
            var that=this;
            this.$http.get('/js/hOtcListTransaction/getStaticParam', {

            }).then((res) => {
                that.transactionprice=parseFloat(res.result.usdtHale).toFixed(3).substring(0, parseFloat(res.result.usdtHale).toFixed(3).length - 1);
                that.param=res.result;
            })
            this.$http.get('js/userWallet/getUserWallet', {
                userId: that.userId
            }).then((res) => {
                if( res.success ){
                    that.accountList = res.result.list
                    that.halebalance=parseFloat(res.result.list[0].amount).toFixed(3).substring(0, parseFloat(res.result.list[0].amount).toFixed(3).length - 1)
                }
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
            }
        },
        methods:{
            minxz(){
                if(this.transactionprice>this.min){
                    this.min=this.transactionprice
                    this.showTips("最小限额不能小于单价")
                }
                    },
            // 监听消息提示打开
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true;
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            tabcur(index){
                var that=this;
                this.cur=index;
                this.transactionprice=''
                this.volume=''
                this.min=''
                this.max=''
                this.remarks=''
                this.password=''
                this.information=0
                this.$http.get('/js/hOtcListTransaction/getStaticParam', {}).then((res) => {
                    that.transactionprice=parseFloat(res.result.usdtHale).toFixed(3).substring(0, parseFloat(res.result.usdtHale).toFixed(3).length - 1);
                })

            },
            whole(){
                this.volume=this.halebalance;
                this.showTips("操作成功")
                var that=this;
                setTimeout(function () {
                    that.min=that.transactionprice;
                },20)
            },
            Releasecommission(){
                this.passwordDigVisible=true
            },
            // 检测交易密码是否正确
            checkPassword(){
                var that=this;
                that.passwordDigVisible=false;
                that.$http.post('js/users/isCorrectTransPass',{
                        userId: that.userId,
                        transPass: that.password
                    }).then((res) => {
                        if( res.success ){
                            that.surebuy()
                            // 关闭密码弹窗
                            that.password = ''
                        } else {
                            that.password = ''
                            that.showTips(res.message)
                        }
                    })
            },
            surebuy(){
                var that=this;
                    this.$http.post('/js/hOtcTransaction/addEntrustOrder', {
                        userId:that.userId,
                        type: that.cur+1,
                        amount: that.volume,
                        singleMin: that.min,
                        singleMax: that.max,
                        remarks: that.remarks,
                        transPass: that.password,
                        transactionAmount: that.transactionprice,
                        currency: "HALE",
                        transactionCurrency: "USDT",
                    }).then((res) => {
                        if (res.success){
                            that.showTips(res.message)
                            this.transactionprice=''
                            this.volume=''
                            this.min=''
                            this.max=''
                            this.remarks=''
                            this.password=''
                            this.$router.go(-1);
                        }else {
                            that.showTips(res.message)
                            this.password=''
                        }
                    })
                //调取判断支付密码是否正确
            },
            closePasswordDig(){
                this.password=''
                this.passwordDigVisible=false
            },

            closeNoPasswordDig(){
                this.noPasswordDigVisible=false;
            },
            toSetDealPassword(){
                this.$push({
                    path: '/setPassword'
                })
            },
        },
        computed:{
            exitsVal:function(){
               if (Number(this.min)>Number(this.max)){
                    this.min=this.max
                    this.showTips("最小限额不能大于最大限额")
                }
                this.max=this.transactionprice*this.volume;
                this.max=parseFloat(this.max).toFixed(3).substring(0, parseFloat(this.max).toFixed(3).length - 1);
                this.servicecharge=this.max*this.param.fee
                if (this.cur==0) {
                    if (this.max > this.accountList[1].amount) {
                        this.showTips("超出余额请重新输入")
                        this.transactionprice = 0;
                        this.volume = 0;
                        this.max = 0;
                    }
                }
                if (this.cur==1){
                    if (this.volume>this.accountList[0].amount) {
                        this.showTips("超出余额请重新输入")
                        this.transactionprice=0;
                        this.volume=0;
                        this.max=0;
                    }
                }

                this.ifExist=Number(Boolean(this.transactionprice))+Number(Boolean(this.volume))+Number(Boolean(this.min))+Number(Boolean(this.max));
            }
        },
        watch:{
            ifExist(newVal,oldVal){
                if(Number(newVal) === 4){
                  this.information=1
                }else{
                    this.information=0
                }
            }
        }

    }
</script>

<style scoped>
.page{
    overflow: scroll;
    background: white;
}
.tab-tilte{
    display: flex;
}
.tab-tilte li{
    color: #333;
    width: 50%;
    text-align: center;
    font-size: .3rem;
    line-height: 1rem;
    height: 1rem;
    font-weight: bold;

}
.wrapper_title_txt{
    line-height: 1rem;
    color: #203395;
    font-weight: bold;
    margin: 0 0.42rem;
}
.wrapper_title{
    border-bottom: 1px solid #eee;
}
.tab-tilte li div{
    width: 50%;
    margin-left: 25%;
    height: .8rem;
    line-height: .8rem;
    margin-top: .1rem;
}
    .active{

        color: #21B369;
        border-bottom: 2px solid #21B369;

    }
.active1{
    color: #ED472C;
    border-bottom: 2px solid #ED472C;
}
    .title>div{
        background: #F5F5F5;
        width: 100%;
        display: flex;
        justify-content:space-between;
        height: 1rem;
        line-height: 1rem;
        font-size: .26rem;
        padding: 0 .42rem;
    }
    .title>div span span{
        color: #666;
    }
    .balance{
        background: #F5F5F5;
        width: 100%;
        display: flex;
        justify-content:space-between;
        height: 1rem;
        line-height: 1rem;
        font-size: .26rem;
        padding: 0 .42rem;
    }
    .balance span span{
        color: #666;
    }
    .balance p:nth-of-type(1){
        margin-top: .15rem;
    }
.balance p{
    line-height: .35rem;
}
    .tab-content>div>p{
        padding:  0 .3rem;
        height: .9rem;
        line-height: .9rem;
        background: #F5F5F5;
        color: #333333;
        font-size: .26rem;
    }
.tab-content>div>div:nth-of-type(1){
    font-size: .26rem;
    height: 1.3rem;
    line-height: 1.3rem;
    padding: 0 .42rem;
    display: flex;
    justify-content: space-between;
}
.tab-content>div>div:nth-of-type(3){
    position: relative;
    font-size: .26rem;
    height: 1.3rem;
    line-height: 1.3rem;
    padding: 0 .42rem;
    display: flex;
    justify-content: space-between;
}
.tab-content>div>div:nth-of-type(3) input{
    font-size: .26rem;
    padding-left: .2rem;
    width: 4.6rem;
    height: .9rem;
    line-height: .9rem;
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    margin-top: .2rem;
}
.tab-content>div>div:nth-of-type(3) span{
    width: 2.5rem;
}
.tab-content>div>div:nth-of-type(3) div{
    width: 1.2rem;
    text-align: center;
    color: #203395;
    border-left: 1px solid #203395;
    height: .3rem;
    line-height: .3rem;
    top: .5rem;
    position: absolute;right: .42rem;
}

.tab-content>div>div:nth-of-type(4){
    font-size: .26rem;
    height: 1.3rem;
    line-height: 1.3rem;
    padding: 0 .42rem;
    display: flex;
    justify-content: space-between;
}
.tab-content>div>div:nth-of-type(4) input{
    font-size: .26rem;
    padding-left: .2rem;
    width: 4.6rem;
    height: .9rem;
    line-height: .9rem;
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    margin-top: .2rem;
}
.tab-content>div>div:nth-of-type(4) span{
    width: 3.5rem;
}

.tab-content>div>div:nth-of-type(5){
    font-size: .26rem;
    height: 1.3rem;
    line-height: 1.3rem;
    padding: 0 .42rem;
    display: flex;
    justify-content: space-between;
}
.tab-content>div>div:nth-of-type(5) input{
    font-size: .26rem;
    padding-left: .2rem;
    width: 4.6rem;
    height: .9rem;
    line-height: .9rem;
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    margin-top: .2rem;
}
.tab-content>div>div:nth-of-type(5) span{
    width: 3.5rem;
}
.tab-content>div>div:nth-of-type(1) input{
    font-size: .26rem;
    padding-left: .2rem;
    width: 4.6rem;
    height: .9rem;
    line-height: .9rem;
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    margin-top: .2rem;
}
.tab-content>div>div:nth-of-type(6){
padding: 0 .3rem;
    margin-top: .2rem;
}
textarea.INPUT2{
    height: 1.2rem;
    text-align: justify;
    padding-top: .2rem;
}
.tab-content>div>div:nth-of-type(7) {
    margin-bottom: .5rem;
    margin-top: .8rem;
    display: flex;
    justify-content: space-around;
}
.tab-content>div>div:nth-of-type(7) .grey {
    text-align: center;
    font-size: .3rem;
    font-weight: bold;
    color: white;
    width: 6.9rem;
    height: 1rem;
    line-height: 1rem;
    background:rgba(204,204,204,1);
    box-shadow:0px 5px 15px 0px rgba(102,102,102,0.3);
    border: none;
}
.tab-content>div>div:nth-of-type(7) .yellow {
    text-align: center;
    font-size: .3rem;
    font-weight: bold;
    color: white;
    width: 6.9rem;
    height: 1rem;
    line-height: 1rem;
    background:#203395;
    box-shadow:0px 5px 15px 0px rgba(102,102,102,0.3);
    border: none;
}
    input{
        color: #203395;
    }
</style>