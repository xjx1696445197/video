<template>
    <div id="myHistory" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
           <p class="HEADER_SHOP_TITLE">我的足迹</p>
           <div class="headerpositi">
               <div v-if="headerbj" @click="edit" style="line-height: 0.88rem">编辑</div>
               <div v-if="!headerbj"  @click="complete" style="line-height: 0.88rem">完成</div>
           </div>
        </div>
        <div class='top_tab border_b pad_l20 pad_r20' v-if="proHistory.length>0">
            <div class='table h100 all'>
                <div class='td f28'>我的足迹</div>
                <!-- 注释，待完善 -->
                <!-- <div class='td txt_right' v-on:click='clearHistory'>
                        <div class='inblock'>清空</div>
                </div> -->
            </div>
        </div>
        <div class='top_tabh'></div>
        <div class='pad_10 txt_center' v-if="proHistory.length<1">
            <span class='inblock'>暂无相关内容，</span>
            <router-link :to="{name:'ShopIndex'}" class='inblock czt'>去逛逛~</router-link>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class='pad_5 clearfix all'>
                <div v-for="(item,index) in proHistory">
                    <div class='L col6 pad_5 all'>
                        <div class='bgfff collect_list'>

                                <div class='img_cnt'>
                                    <router-link :to="{name:'ShopProductDetail',params:{pId:item.productId}}" class='block img_box '>
                                    <img :onerror="errorUserPhoto" :src='sourceUrlShop+item.logoImg' class='img'>
                                    </router-link>
                                    <img :onerror="errorUserPhoto"  src="../static/images/shop/delete_icon.png" class="imgpositi" v-if="!headerbj" @click="Deletefootprints(item.productId,index)">
                                </div>

                            <router-link :to="{name:'ShopProductDetail',params:{pId:item.productId}}" class=' mar_t10 mar_b10 mar_l5 mar_r5 txt_center txt_one block f24'>{{item.productName}}</router-link>
                            <div class='pad_b5 txt_center czt mar_l5 mar_r5 f24'>￥{{item.salesPrice}} | {{item.salesCredits}}积分</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pad_10 txt_center">{{loadTxt}}</div>
        </div>
    </div>
</template>

<script>
    import { sourceUrl,sourceUrlShop } from '@/config'
    import Vue from 'vue';
    import { Button,InfiniteScroll,MessageBox,Toast} from 'mint-ui';
    Vue.component(Button.name, Button,Toast);
    Vue.use(InfiniteScroll);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/shop/mrbj.png';

    export default {
        components:{},
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                proHistory:[],
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading:false,
                loadTag:false,//是否翻页标志
                loadTxt:"",
                curPage:1,//当前页码
                headerbj:true
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            that.doQuery();

        },
        methods: {
            Deletefootprints:function(productId,index){
                var that=this;
                MessageBox.confirm('确认删除此足迹?').then(action => {
                    jsonAjax.post(urlUtil.getApiUrl("deleteProBrRecord"), { productId:productId,customerId:that.$store.state.userinfo.userId}, function (result) {
                        that.proHistory.splice(index,1)
                        if(result.returnCode==1){
                            Toast('删除成功')
                        }else {
                            Toast('删除失败')
                        }
                    });
                })


            },
            edit:function(){
                this.headerbj=false
            },
            complete:function(){
                this.headerbj=true
            },
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            doQuery:function () {
                var that = this;
                var param = { page: that.curPage,
                    customerId:that.$store.state.userinfo.userId,
                    customerToken:that.$store.state.userinfo.token
                };
                jsonAjax.post(urlUtil.getApiUrl("user_hisroty"), param, function (result) {
                    // console.log(result)
                    if (result.returnCode == 1) {
                        if (result.resultData.probrrecordlist) {
                            var allProducts = [];
                            allProducts = allProducts.concat(that.proHistory, result.resultData.probrrecordlist);
                            that.proHistory=allProducts;
                            that.curPage++;
                            that.loading = false;
                            that.loadTag=true;
                        }
                        else {
                            if(that.curPage==1)
                            {
                                that.loadTxt="";
                            }
                            else{
                                that.loadTxt="加载完成！";
                            }
                            that.loadTag=false;
                        }
                    }
                    else {
                        if(that.curPage==1)
                        {
                            that.loadTxt="";
                        }
                        else{
                            that.loadTxt="加载完成！";
                        }
                        that.loadTag=false;
                    }
                });
            },
            loadMore:function ()  {
                if(this.loadTag)
                {
                    this.loadTxt="正在加载...";
                    this.loading = true;
                    this.doQuery();
                }
            }


        }

    }
</script>

<style scoped>
    .top_tab {
        position: fixed;
        height: 0.8rem;
        background: #fff;
        left: 0;
        top: 0.88rem;
        right: 0;
        z-index: 11;
    }

    /* .top_tab .border_b2{ border-bottom: 2px solid transparent;}
    .top_tab .border_b2.cur{ border-bottom-color: #ff0036; color: #ff0036;} */

    .top_tabh {
        height: 1.68rem;
    }

.headerpositi{
     position: fixed;
     right: .2rem;
     display: flex;
 }
.img_cnt{
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
}
    .imgpositi{
        position: absolute;
        right: .1rem;
        top: .1rem;
        width: .45rem;
    }
</style>
