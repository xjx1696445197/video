<template>
    <div id="my" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">我的钱包</p>
        </div>
        <div class="Money_category">
            <div class="money_category_tips" v-if="isOpen">
                <div class="money_category_wrapper clearfix">
                    <img src="../static/images/shop/icon_money.png" alt="" class="fl inblock money_category_img">
                    <div class="money_category_txt1 fl">{{content}}</div>
                    <img src="../static/images/shop/delete_icon.png" alt="" class="fr inblock money_category_img1" @click="closeTips">
                </div>
            </div>
            <router-link :to="{name:'ShopIntegralrecord'}" class='bgfff border_b table all'>
                <div>
                    <div><img src="../static/images/shop/icon_jf.png" style="vertical-align: middle;"><span>积分</span></div>
                    <div><span style="margin-right: 0.3rem;">{{userData.credits|numFilter}}</span><img src='../static/images/shop/rigth.png' style="vertical-align: middle;"></div>
                </div>
            </router-link>
            <router-link :to="{name:'ShopCurrencybalance',params:{type:'1'}}" class='bgfff  border_b table all'>
                <div>
                    <div><img src="../static/images/shop/USDT.png" style="vertical-align: middle;"><span>USDT</span></div>
                    <div><span style="margin-right: 0.3rem;">{{userData.usdt}}</span><img src='../static/images/shop/rigth.png' style="vertical-align: middle;"></div>
                </div>
            </router-link>
            <router-link :to="{name:'ShopCurrencybalance',params:{type:'2'}}" class='bgfff  border_b table all'>
                <div>
                    <div><img src="../static/images/shop/HALE.png" style="vertical-align: middle;"><span>HALE</span></div>
                    <div><span style="margin-right: 0.3rem;">{{userData.hale}}</span><img src='../static/images/shop/rigth.png' style="vertical-align: middle;" ></div>
                </div>
            </router-link>
        </div>
        <div class="hj"></div>

        <router-link :to="{name:'ShopConsumptiondetails'}" class='bgfff pad_tb  border_b table all'>
            <div class="mx_rk">
                <div>交易明细</div>
                <img src='../static/images/shop/rigth.png' style="vertical-align: middle;">
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
                userData:'',
                isOpen:false,
                content:''
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            var that = this
            jsonAjax.get(urlUtil.getApiUrl('my_wallet'), {userId:that.$store.state.userinfo.userId}, function (result) {
                that.userData = result.result

            })
        //    获取兑换内容
            jsonAjax.get(urlUtil.getApiUrl('getSystemSettings'),{}, function (result) {
                console.log(result)
                if(result.success){
                    that.isOpen = result.result.onOrOff == 'ON' ? true : false
                    that.content = result.result.promptNew
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
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1)
            },
            closeTips(){
                var that = this
              console.log('点击了关闭')
            //    修改为false
                that.isOpen = false
            },
            // Returnhalle:function () {
            //   console.log(1)
            //   sessionStorage.setItem("ShoppingMall", "0");
            // },
            // doQuery:function () {
            //   var that = this;
            //   var param = { currentPage: that.curPage,customerId: that.$store.state.loginInfo.customerId };
            //   jsonAjax.post(urlUtil.getApiUrl("user_center"),param , function (result) {
            //     if (result.returnCode == 1) {
            //       if(that.curPage==1)
            //       {
            //         that.userData=result.resultData.list;
            //         //获取微信登录用户头像
            //         var headImgUrl = localStorage.getItem("headImgUrl");
            //         if(headImgUrl){
            //           that.userData.headImgUrl = headImgUrl;
            //         }
            //       }
            //       if (result.resultData.list.recommendProductlist) {
            //         var allProducts = [];
            //         allProducts = allProducts.concat(that.productList, result.resultData.list.recommendProductlist);
            //         that.productList=allProducts;
            //         that.curPage++;
            //         that.loading = false;
            //         that.loadTag=true;
            //       }
            //       else {
            //         if(that.curPage==1)
            //         {
            //           that.loadTxt="";
            //         }
            //         else{
            //           that.loadTxt="加载完成！";
            //         }
            //         that.loadTag=false;
            //       }
            //     }
            //   });
            // },
            // loadMore() {
            //   if(this.loadTag)
            //   {
            //     this.loadTxt="正在加载...";
            //     this.loading = true;
            //     this.doQuery();
            //   }
            // }

        }

    }
</script>

<style scoped>
    .content_box{
        height: 100%;
        background: white;
        z-index: 2;
    }
    .Money_category{
        color: #333333;
        margin-top: 0.88rem;
    }
    .money_category_tips{
        background: #FFFEEF;
        padding: 0.15rem 0.3rem;
    }
    .money_category_icon{
        width: 0.3rem;
        height: 0.26rem;
        background: url("../static/images/shop/icon_money.png")no-repeat center center /cover;
        margin-right: 0.1rem;
    }
    .money_category_img{
        width: 0.3rem;
        height: 0.26rem;
        top: 0.06rem;
        /*top: 50%;*/
        /*transform: translateY(-50%);*/
        left: 0;
        position: absolute;
    }
    .money_category_img1{
        width: 0.3rem;
        height: 0.3rem;
        top: 0.03rem;
        /*top: 50%;*/
        /*transform: translateY(-50%);*/
        right: -0.15rem;
        position: absolute;
    }
    .money_category_wrapper{
        position: relative;
    }
    .money_category_txt1{
        font-size: 0.25rem;
        color: #E4811D;
        line-height: 0.35rem;
        text-align:justify;
        width: 6rem;
        margin-left: 0.45rem;
    }
    .border_b{
        border: none;
    }
    .Money_category>a{
        /*margin-top: .2rem;*/
    }
    .Money_category>a>div{
        border-bottom: 1px solid #EEEEEE;
        height: 1rem;
        padding: 0 0.3rem;
        display: flex;
        justify-content: space-between;
    }
    .Money_category a>div>div:nth-of-type(1){
        line-height: 1rem;
    }
    .Money_category a>div>div:nth-of-type(2){
        line-height: 1rem;
    }
    .Money_category a>div>div:nth-of-type(2) span{
        vertical-align: middle;

    }
    .Money_category a>div>div:nth-of-type(1) img{
        margin-bottom: .05rem;
        width: .5rem;
    }
    .Money_category a>div>div:nth-of-type(1) span{
        margin-left: .2rem;
    }
    .Money_category a>div>div:nth-of-type(2) img{
        width: .3rem;
    }
    .hj{
        height: .2rem;
        background: #F5F5F5;
    }
    .mx_rk{
        height: 1rem;
        line-height: 1rem;
        color: #333333;
        border-bottom: 1px solid #EEEEEE;
        padding: 0 0.3rem;
        display: flex;
        justify-content: space-between;
    }
    .mx_rk img{
        width: .3rem;
        height: .3rem;
        margin-top: 0.35rem;
    }
    .pad_tb{
        /*padding:10px 0 ;*/
    }
    audio, canvas, video, img{
        display: inline-block;
    }
</style>
