<template>
    <div id="specialActivity" class="content_box" style="background: #fff">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP" style="z-index: 999;">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">专场促销</p>
        </div>

        <div class='pad_20' style="margin-top: 0.4rem;">
            <div v-if="list.length==0" class="activity_txt">暂无相关促销活动~</div>
            <div v-for="(item,index) in list">
                <router-link :to="{name:'ShopSpecialActivityDetail',params:{id:item.promotionId,name:item.promotionName}}" class='img_box block img_big2 activity mar_b20'>
                    <div class='f0 img_cnt'>
                        <img :onerror="errorUserPhoto" :src='sourceUrlShop+item.largePoster' class='img'>
                    </div>
                    <div class='font_div'>
                        <div class='txt_one'>{{item.promotionName}}</div>
                    </div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,Toast } from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.component(Toast.name, Toast);
    import { sourceUrlShop } from "@/config";
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/mrbj.png';

    export default {
        data () {
            return {
                sourceUrlShop,
                errorUserPhoto:'this.src="' + userPhoto + '"',
                list:[],
                uploadImgRoot: urlUtil.uploadImgRoot,
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that=this;
            jsonAjax.get(urlUtil.getApiUrl("special_list"), {}, function (result) {
                if (result.returnCode == 1) {
                    that.list=result.resultData;
                }
            })

        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },

        }

    }
</script>

<style scoped>
    .page{
        background: #fff;
    }
    .activity_txt{
        font-size: 0.28rem;
        line-height: 1rem;
        color: #333;
        text-align: center;
    }
    .activity {
        border-radius: 0.08rem;
        background: #fff;
        overflow: hidden;
    }

    .activity .font_div {
        position: absolute;
        z-index: 10;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 0.16rem 0.2rem;
    }
    .list{
        position: absolute;
        bottom: 0rem;
        top: 0.88rem;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
</style>
