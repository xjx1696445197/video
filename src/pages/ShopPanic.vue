<template>
    <div id="panicBuy" class="content_box" style="background: #fff">
        <div class="spiltHeader"></div>
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">秒杀</p>
        </div>


        <div class="kind_scroll bgfff all">
            <div class='table_x h100 f24 txt_center width100' v-if="groupTime.length==1">
                <div v-for="(item,index) in groupTime" class='td ver_mid width100' :class='index==tabIndex?"cur":""'
                     v-on:click='tabExchange(index)'>
                    <div class='f28 mar_top'>{{item.time}}</div>
                    <div v-if="groupGtime[index].zt==0">进行中</div>
                    <div v-if="groupGtime[index].zt==1">即将开始</div>
                    <div v-if="groupGtime[index].zt==2">已结束</div>
                </div>
            </div>
            <div class='table_x h100 f24 txt_center width100'  v-if="groupTime.length==2">
                <div v-for="(item,index) in groupTime" class='td ver_mid width50' :class='index==tabIndex?"cur":""'
                     v-on:click='tabExchange(index)'>
                    <div class='f28 mar_top'>{{item.time}}</div>
                    <div v-if="groupGtime[index].zt==0">进行中</div>
                    <div v-if="groupGtime[index].zt==1">即将开始</div>
                    <div v-if="groupGtime[index].zt==2">已结束</div>
                </div>
            </div>
            <div class='table_x h100 f24 txt_center width100'  v-if="groupTime.length==3">
                <div v-for="(item,index) in groupTime" class='td ver_mid width33' :class='index==tabIndex?"cur":""'
                     v-on:click='tabExchange(index)'>
                    <div class='f28 mar_top'>{{item.time}}</div>
                    <div v-if="groupGtime[index].zt==0">进行中</div>
                    <div v-if="groupGtime[index].zt==1">即将开始</div>
                    <div v-if="groupGtime[index].zt==2">已结束</div>
                </div>
            </div>
            <div class='table_x h100 f24 txt_center width100'  v-if="groupTime.length==4">
                <div v-for="(item,index) in groupTime" class='td ver_mid width25' :class='index==tabIndex?"cur":""'
                     v-on:click='tabExchange(index)'>
                    <div class='f28 mar_top'>{{item.time}}</div>
                    <div v-if="groupGtime[index].zt==0">进行中</div>
                    <div v-if="groupGtime[index].zt==1">即将开始</div>
                    <div v-if="groupGtime[index].zt==2">已结束</div>
                </div>
            </div>
            <div class='table_x h100 f24 txt_center'  v-if="groupTime.length>=5">
                <div v-for="(item,index) in groupTime" class='td ver_midtwo' :class='index==tabIndex?"cur":""'
                     v-on:click='tabExchange(index)'>
                    <div class='f28 mar_top'>{{item.time}}</div>
                    <div v-if="groupGtime[index].zt==0">进行中</div>
                    <div v-if="groupGtime[index].zt==1">即将开始</div>
                    <div v-if="groupGtime[index].zt==2">已结束</div>
                </div>
            </div>
        </div>

        <div class='top_h'></div>
        <div class='bgfff pad_10 table all f24 border_b he_7' v-if="dqZt==0">
            <div class='td'>抢购中，先下单先得</div>
            <div class='td txt_right c666 f0'>
                <span class='inblock f24'>距结束</span>
                <span class='inblock f24 time_tag'>{{daojishi.shi}}</span>
                <span class='inblock f24'>:</span>
                <span class='inblock f24 time_tag'>{{daojishi.fen}}</span>
                <span class='inblock f24'>:</span>
                <span class='inblock f24 time_tag'>{{daojishi.miao}}</span>
            </div>
        </div>
        <div class='bgfff pad_10 table all f24 border_b he_7' v-if="dqZt==1">
            <div class='td'>抢购即将开始，先下单先得</div>
            <div class='td txt_right c666 f0'>
                <span class='inblock f24'>距开始</span>
                <span class='inblock f24 time_tag'>{{daojishi.shi}}</span>
                <span class='inblock f24'>:</span>
                <span class='inblock f24 time_tag'>{{daojishi.fen}}</span>
                <span class='inblock f24'>:</span>
                <span class='inblock f24 time_tag'>{{daojishi.miao}}</span>
            </div>
        </div>
        <div class='bgfff pad_10 table all f24 border_b he_7' v-if="dqZt==2">
            <div class='td'>抢购<span v-if="dqZt==0">进行中</span><span v-if="dqZt==1">即将开始</span><span v-if="dqZt==2">已结束</span></div>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" v-if="dqZt==2">
            <div class='pad_10 txt_center f28' v-if="productList.length<1">暂无相关商品~</div>
            <div class='pro_list'>
                <div v-for="(product,subIndexValue) in productList">
                    <router-link :to="{name:'',params:{pId:product.productId}}"
                                 class='all pad_10 border_b bgfff table' v-if="dqZt==1">
                        <div class='w1 td'  @click="promptbox">
                            <div class='img_div f0 img_box img_big1 bgfff'>
                                <div class='img_cnt'>
                                    <img class='img' :onerror="errorUserPhoto" :src="sourceUrlShop+product.logoImg"
                                         style="width: 1.6rem;height: 1.6rem">
                                </div>
                                <div class='p_notice txt_center pad_b10 pad_t10 f24'
                                     v-if="dqZt==0&product.panicNum==product.buyNum">已抢完
                                </div>
                                <!--<div class='p_notice txt_center pad_b10 pad_t10 f24' v-if="dqZt==2">已结束</div>-->
                            </div>
                        </div>
                        <div class='td'>
                            <div class='txt_two txt_h2 pad_l10 mar_b100'>{{product.productName | strFilter}}</div>
                            <div class='txt_one pad_l10 czt f24 mar_b100'>{{product.panicTitle}}</div>
                            <div class=' pad_l10 table all'>
                                <div class='td wrem5'>
                                    <div class='czt f28'><span class="pr10">￥{{product.panicPrice}} </span>| <span
                                            class="pl10">{{product.panicCredits}} 积分</span></div>
                                    <div class='c999 f20'><span class="pr10" style="text-decoration: line-through">￥{{product.originalPrice}}</span>
                                        | <span class="pl10" style="text-decoration: line-through">{{product.originalCredits}} 积分</span>
                                    </div>
                                </div>
                                <div class='td txt_right f0'>
                                    <div class='buy_btn f28' v-if="dqZt==0&product.buyNum<product.panicNum">立即抢购</div>
                                    <div class='buy_btn blue f28' v-if="dqZt==1">即将开始</div>
                                    <!-- <view class='buy_btn gray' wx:if="{{dq_zt==2}}">已结束</view> -->
                                    <div class='buy_btn f28' v-if="dqZt==2">已结束</div>
                                    <div class='buy_btn f28 gray' v-if="product.buyNum==product.panicNum">已抢完</div>
                                    <div>
                                        <span class='inblock c999 f20 mar_r5'>已售{{product.percent}}%</span>
                                        <div class='inblock f24 jindutiao f0'>
                                            <div class='jindu' :style='{width:product.percent+"%"}'></div>
                                            <!--<div class='jindu' style='width:product.percent+"%"'></div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <div
                            class='all pad_10 border_b bgfff table pad_10two'  @click="promptbox">
                        <div class='w1 td'  @click="promptbox">
                            <div class='img_div f0 img_box img_big1 bgfff'>
                                <div class='img_cnt'>
                                    <img class='img' :onerror="errorUserPhoto" :src="sourceUrlShop+product.logoImg"
                                         style="width: 1.6rem;height: 1.6rem">
                                </div>
                                <div class='p_notice txt_center pad_b10 pad_t10 f24'
                                     v-if="dqZt==0&product.panicNum==product.buyNum">已抢完
                                </div>
                                <div class='p_notice txt_center pad_b10 pad_t10 f24' v-if="dqZt==2">已结束</div>
                            </div>
                        </div>
                        <div class='td'>
                            <div class='txt_two txt_h2 pad_l10 mar_b100'>{{product.productName | strFilter}}</div>
                            <div class='txt_one pad_l10 czt f24 mar_b100'>{{product.panicTitle}}</div>
                            <div class=' pad_l10 table all'>
                                <div class='td wrem5'>
                                    <div class='czt'><span class="pr10">￥{{product.panicPrice}}</span> | <span
                                            class="pl10">{{product.panicCredits}}</span> 积分
                                    </div>
                                    <div class='c999 f20'><span class="pr10" style="text-decoration: line-through">￥{{product.originalPrice}}</span>
                                        <span>|</span> <span class="pl10" style="text-decoration: line-through">{{product.originalCredits}} 积分</span>
                                    </div>
                                </div>
                                <div class='td txt_right f0'>
                                    <div class='buy_btn f28' v-if="dqZt==0&product.buyNum<product.panicNum">立即抢购</div>
                                    <div class='buy_btn blue f28' v-if="dqZt==1">即将开始</div>
                                    <!-- <view class='buy_btn gray' wx:if="{{dq_zt==2}}">已结束</view> -->
                                    <div class='buy_btn f28 gray' v-if="dqZt==2">已结束</div>
                                    <div class='buy_btn f28 gray' v-if="dqZt==0&product.buyNum==product.panicNum">已抢完
                                    </div>
                                    <div>
                                        <span class='inblock c999 f20 mar_r5'>已售{{product.percent}}%</span>
                                        <div class='inblock f24 jindutiao f0'>
                                            <div class='jindu' :style='{width:product.percent+"%"}'></div>
                                            <!--<div class='jindu' style='width:product.percent+"%"'></div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="pad_10 txt_center">{{loadTxt}}</div>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" v-if="dqZt==1||dqZt==0">
            <div class='pad_10 txt_center f28' v-if="productList.length<1">暂无相关商品~</div>
            <div class='pro_list'>
                <div v-for="(product,subIndexValue) in productList">
                    <router-link :to="{name:'ShopProductDetail',params:{pId:product.productId}}"
                                 class='all pad_10 border_b bgfff table' v-if="dqZt==1">
                        <div class='w1 td'>
                            <div class='img_div f0 img_box img_big1 bgfff'>
                                <div class='img_cnt'>
                                    <img class='img' :onerror="errorUserPhoto" :src="sourceUrlShop+product.logoImg"
                                         style="width: 1.6rem;height: 1.6rem">
                                </div>
                                <div class='p_notice txt_center pad_b10 pad_t10 f24'
                                     v-if="dqZt==0&product.panicNum==product.buyNum">已抢完
                                </div>
                                <!--<div class='p_notice txt_center pad_b10 pad_t10 f24' v-if="dqZt==2">已结束</div>-->
                            </div>
                        </div>
                        <div class='td'>
                            <div class='txt_two txt_h2 pad_l10 mar_b100'>{{product.productName | strFilter}}</div>
                            <div class='txt_one pad_l10 czt f24 mar_b100'>{{product.panicTitle}}</div>
                            <div class=' pad_l10 table all'>
                                <div class='td wrem5'>
                                    <div class='czt f28'><span class="pr10">￥{{product.panicPrice}} </span>| <span
                                            class="pl10">{{product.panicCredits}} 积分</span></div>
                                    <div class='c999 f20'><span class="pr10" style="text-decoration: line-through">￥{{product.originalPrice}}</span>
                                        | <span class="pl10" style="text-decoration: line-through">{{product.originalCredits}} 积分</span>
                                    </div>
                                </div>
                                <div class='td txt_right f0'>
                                    <div class='buy_btn f28' v-if="dqZt==0&product.buyNum<product.panicNum">立即抢购</div>
                                    <div class='buy_btn blue f28' v-if="dqZt==1">即将开始</div>
                                    <!-- <view class='buy_btn gray' wx:if="{{dq_zt==2}}">已结束</view> -->
                                    <div class='buy_btn f28' v-if="dqZt==2">已结束</div>
                                    <div class='buy_btn f28 gray' v-if="product.buyNum==product.panicNum">已抢完</div>
                                    <div>
                                        <span class='inblock c999 f20 mar_r5'>已售{{product.percent}}%</span>
                                        <div class='inblock f24 jindutiao f0'>
                                            <div class='jindu' :style='{width:product.percent+"%"}'></div>
                                            <!--<div class='jindu' style='width:product.percent+"%"'></div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{name:'ShopProductsDetail',params:{type:'4',pId:product.panicId}}"
                                 class='all pad_10 border_b bgfff table' v-if="dqZt==0&product.buyNum<product.panicNum">
                        <div class='w1 td'>
                            <div class='img_div f0 img_box img_big1 bgfff'>
                                <div class='img_cnt'>
                                    <img class='img' :onerror="errorUserPhoto" :src="sourceUrlShop+product.logoImg"
                                         style="width: 1.6rem;height: 1.6rem">
                                </div>
                                <div class='p_notice txt_center pad_b10 pad_t10 f24'
                                     v-if="dqZt==0&product.panicNum==product.buyNum">已抢完
                                </div>
                                <div class='p_notice txt_center pad_b10 pad_t10 f24' v-if="dqZt==2">已结束</div>
                            </div>
                        </div>
                        <div class='td'>
                            <div class='txt_two txt_h2 pad_l10 mar_b100'>{{product.productName | strFilter}}</div>
                            <div class='txt_one pad_l10 czt f24 mar_b100'>{{product.panicTitle}}</div>
                            <div class=' pad_l10 table all'>
                                <div class='td wrem5'>
                                    <div class='czt'><span class="pr10">￥{{product.panicPrice}}</span> | <span
                                            class="pl10">{{product.panicCredits}}</span> 积分
                                    </div>
                                    <div class='c999 f20'><span class="pr10" style="text-decoration: line-through">￥{{product.originalPrice}}</span>
                                        <span>|</span> <span class="pl10" style="text-decoration: line-through">{{product.originalCredits}} 积分</span>
                                    </div>
                                </div>
                                <div class='td txt_right f0'>
                                    <div class='buy_btn f28' v-if="dqZt==0&product.buyNum<product.panicNum">立即抢购</div>
                                    <div class='buy_btn blue f28' v-if="dqZt==1">即将开始</div>
                                    <!-- <view class='buy_btn gray' wx:if="{{dq_zt==2}}">已结束</view> -->
                                    <div class='buy_btn f28 gray' v-if="dqZt==2">已结束</div>
                                    <div class='buy_btn f28 gray' v-if="dqZt==0&product.buyNum==product.panicNum">已抢完
                                    </div>
                                    <div>
                                        <span class='inblock c999 f20 mar_r5'>已售{{product.percent}}%</span>
                                        <div class='inblock f24 jindutiao f0'>
                                            <div class='jindu' :style='{width:product.percent+"%"}'></div>
                                            <!--<div class='jindu' style='width:product.percent+"%"'></div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <div @click="promptboxwu" class='all pad_10 border_b bgfff table' v-if="dqZt==0&product.buyNum==product.panicNum">
                        <div class='w1 td'>
                            <div class='img_div f0 img_box img_big1 bgfff'>
                                <div class='img_cnt'>
                                    <img class='img' :onerror="errorUserPhoto" :src="sourceUrlShop+product.logoImg"
                                         style="width: 1.6rem;height: 1.6rem">
                                </div>
                                <div class='p_notice txt_center pad_b10 pad_t10 f24'
                                     v-if="dqZt==0&product.panicNum==product.buyNum">已抢完
                                </div>
                                <div class='p_notice txt_center pad_b10 pad_t10 f24' v-if="dqZt==2">已结束</div>
                            </div>
                        </div>
                        <div class='td'>
                            <div class='txt_two txt_h2 pad_l10 mar_b100'>{{product.productName | strFilter}}</div>
                            <div class='txt_one pad_l10 czt f24 mar_b100'>{{product.panicTitle}}</div>
                            <div class=' pad_l10 table all'>
                                <div class='td wrem5'>
                                    <div class='czt'><span class="pr10">￥{{product.panicPrice}}</span> | <span
                                            class="pl10">{{product.panicCredits}}</span> 积分
                                    </div>
                                    <div class='c999 f20'><span class="pr10" style="text-decoration: line-through">￥{{product.originalPrice}}</span>
                                        <span>|</span> <span class="pl10" style="text-decoration: line-through">{{product.originalCredits}} 积分</span>
                                    </div>
                                </div>
                                <div class='td txt_right f0'>
                                    <div class='buy_btn f28' v-if="dqZt==0&product.buyNum<product.panicNum">立即抢购</div>
                                    <div class='buy_btn blue f28' v-if="dqZt==1">即将开始</div>
                                    <!-- <view class='buy_btn gray' wx:if="{{dq_zt==2}}">已结束</view> -->
                                    <div class='buy_btn f28 gray' v-if="dqZt==2">已结束</div>
                                    <div class='buy_btn f28 gray' v-if="dqZt==0&product.buyNum==product.panicNum">已抢完
                                    </div>
                                    <div>
                                        <span class='inblock c999 f20 mar_r5'>已售{{product.percent}}%</span>
                                        <div class='inblock f24 jindutiao f0'>
                                            <div class='jindu' :style='{width:product.percent+"%"}'></div>
                                            <!--<div class='jindu' style='width:product.percent+"%"'></div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="pad_10 txt_center">{{loadTxt}}</div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import {Button, MessageBox, Toast} from 'mint-ui';

    Vue.component(Button.name, Button,Toast);
    import {sourceUrlShop} from "../config";
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    import userPhoto from '@/static/images/mrbj.png';

    export default {
        data() {
            return {
                sourceUrlShop,
                errorUserPhoto: 'this.src="' + userPhoto + '"',
                tabIndex: 0,//当前选中时间
                groupTime: [],
                groupGtime: [],
                groupInfo: [],
                groupJtime: [],
                dqZt: 1,//当前选中时间的状态0进行中，1即将开始，2已开抢
                daojishi: {shi: '00', fen: '00', miao: '00'},
                tiaozhuan: 'productDetail',
                productList: [],
                uploadImgRoot: urlUtil.uploadImgRoot,
                oprateTag: true,//允许操作执行标志
                loading: false,
                loadTag: false,//是否翻页标志
                loadTxt: "",
                curPage: 2//当前页码
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;

            jsonAjax.get(urlUtil.getApiUrl("panic_time"), {}, function (result) {
                console.log(result)
                if (result.returnCode == 1) {
                    // 时间固定
                    var str = new Date();
                    var hour = str.getHours();
                    var minute = str.getMinutes();
                    var second = str.getSeconds();
                    // 测试开发环境使用,生产环境去掉,时间放开后，把ntime去掉
                    // var ntime = "2018/04/10 " + hour + ":" + minute + ":" + second;
                    var dq_w = -1;
                    // 时间放开后，把ntime去掉
                    var nowtime = parseInt(Date.parse(new Date()) / 1000);
                    var group_time = [], group_jtime = [], group_gtime = [];
                    var time_list = result.resultData;
                    var dq_zt = 1;
                    for (var j = 0; j < time_list.length; j++) {
                        var zta = 0;
                        var starttime = parseInt(time_list[j].startTime / 1000);
                        console.log(nowtime, starttime)
                        if (nowtime < starttime) {

                            zta = 1;
                            time_list[j].daojishi = parseInt(starttime - nowtime);

                        } else if (nowtime > ((time_list[j].activityTime) * 3600 + starttime)) {
                            zta = 2;
                            time_list[j].daojishi = 0;
                        } else {
                            zta = 0;
                            time_list[j].daojishi = parseInt((time_list[j].activityTime) * 3600 + starttime - nowtime);
                            if (dq_w == -1) {
                                dq_w = j;
                            }
                        }
                        group_time.push({g_zt: zta, time: that.qu_hm(time_list[j].startTime)});
                        group_jtime.push({time: that.qu_hm(time_list[j].startTime)});
                        if (j == 0) {
                            dq_zt = zta;
                        }
                        time_list[j].zt = zta;
                        group_gtime.push(time_list[j]);
                    }
                    if (dq_w == -1) {
                        dq_w = 0;
                    }
                    that.groupGtime = group_gtime;
                    that.groupJtime = group_jtime;
                    that.groupTime = group_time;
                    that.dqZt = dq_zt;
                    that.tabIndex = dq_w;

                    console.log(that.dqZt)
                    console.log(that.groupGtime)

                    if (dq_zt == 1) {
                        that.tiaozhuan = "/pages/productDetail/productDetail";
                    }
                    if (group_gtime.length > 0) {

                        var daojishice = {shi: "00", fen: "00", miao: "00", ztime: 0};
                        daojishice.ztime = group_gtime[0].daojishi;
                        daojishice.day = Math.floor(daojishice.ztime / 60 / 60 / 24);
                        daojishice.shi = Math.floor(daojishice.ztime / 60 / 60) % 24;
                        daojishice.fen = Math.floor(daojishice.ztime / 60) % 60;
                        daojishice.miao = daojishice.ztime % 60;
                        if (daojishice.day < 10) {
                            daojishice.day = "0" + daojishice.day;
                        }
                        if (daojishice.shi < 10) {
                            daojishice.shi = "0" + daojishice.shi;
                        }
                        if (daojishice.fen < 10) {
                            daojishice.fen = "0" + daojishice.fen;
                        }
                        if (daojishice.miao < 10) {
                            daojishice.miao = "0" + daojishice.miao;
                        }
                        that.daojishi = daojishice;
                    }


                    //时间倒计时

                    var timer = setInterval(function () {
                        var group_gttime = that.groupGtime;
                        var tab_index = that.tabIndex;
                        var daojishi = {shi: "00", fen: "00", miao: "00", ztime: 0}
                        for (var i = 0; i < group_gttime.length; i++) {
                            if (group_gttime != 2) {
                                if (group_gttime[i].daojishi > 0) {
                                    group_gttime[i].daojishi--;
                                    if (tab_index == i) {
                                        daojishi.ztime = group_gttime[i].daojishi;
                                        daojishi.day = Math.floor(daojishi.ztime / 60 / 60 / 24);
                                        daojishi.shi = Math.floor(daojishi.ztime / 60 / 60) % 24;
                                        daojishi.fen = Math.floor(daojishi.ztime / 60) % 60;
                                        daojishi.miao = daojishi.ztime % 60;
                                        if (daojishi.day < 10) {
                                            daojishi.day = "0" + daojishi.day;
                                        }
                                        if (daojishi.shi < 10) {
                                            daojishi.shi = "0" + daojishi.shi;
                                        }
                                        if (daojishi.fen < 10) {
                                            daojishi.fen = "0" + daojishi.fen;
                                        }
                                        if (daojishi.miao < 10) {
                                            daojishi.miao = "0" + daojishi.miao;
                                        }
                                    }
                                } else {
                                    if (group_gttime[i].zt == 1) {
                                        var str = new Date();
                                        var hour = str.getHours();
                                        var minute = str.getMinutes();
                                        var second = str.getSeconds();
                                        // 测试开发环境使用,生产环境去掉,时间放开后，把ntime去掉
                                        var ntime = "2018/04/10 " + hour + ":" + minute + ":" + second;
                                        var nowtimea = parseInt(Date.parse(new Date(ntime)) / 1000);
                                        var starttimea = parseInt(group_gttime[i].startTime / 1000);
                                        var cetimea = parseInt((group_gttime[i].activityTime) * 3600 + starttimea - nowtimea);
                                        //console.log(cetimea)
                                        group_gttime[i].daojishi = cetimea;
                                        group_gttime[i].zt = 0;

                                    } else {
                                        group_gttime[i].zt = 2;
                                    }
                                }
                            }
                        }
                        that.groupGtime = group_gttime;
                        that.daojishi = daojishi;
                    }, 1000);

                    //  获取首场次的列表 panic_list
                    //that.doQuery(that.data.tab_index)
                    that.tab_exchange_one()

                }
            })


        },
        // 字符串截取
        filters: {
            strFilter (value) {
                console.log(value)
                // let subString = value.slice(value.indexOf(' ') + 1)
                let subsString = value.replace(/\[.*?\]/g,'')
                console.log(subsString)

                return subsString;
            }
        },
        methods: {
            promptboxwu:function(){
                Toast("商品已被抢光")
            },
            promptbox:function(){
                // 秒杀结束点击提示玉
                Toast("抢购已结束")
            },
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            tabExchange: function (index) {
                console.log(this.dqZt)
                //切换时间段
                var that = this;
                var group_gtime = that.groupGtime;
                var dq_zt = 0;
                // 打印
                console.log(group_gtime)
                if (index != that.tabIndex) {
                    that.tabIndex = index;
                    dq_zt = group_gtime[index].zt;
                    if (dq_zt == 1) {
                        // that.setData({ tiaozhuan: "/pages/productDetail/productDetail" })
                        //              that.tiaozhuan= "/pages/productDetail/productDetail";
                    } else {
                        // that.setData({ tiaozhuan: "/pages/productSDetail/productSDetail" })
                        //              that.tiaozhuan= "/pages/productDetail/productSDetail";
                    }
                    var daojishice = {shi: "00", fen: "00", miao: "00", ztime: 0};
                    daojishice.ztime = group_gtime[index].daojishi;
                    daojishice.day = Math.floor(daojishice.ztime / 60 / 60 / 24);
                    daojishice.shi = Math.floor(daojishice.ztime / 60 / 60) % 24;
                    daojishice.fen = Math.floor(daojishice.ztime / 60) % 60;
                    daojishice.miao = daojishice.ztime % 60;
                    if (daojishice.day < 10) {
                        daojishice.day = "0" + daojishice.day;
                    }
                    if (daojishice.shi < 10) {
                        daojishice.shi = "0" + daojishice.shi;
                    }
                    if (daojishice.fen < 10) {
                        daojishice.fen = "0" + daojishice.fen;
                    }
                    if (daojishice.miao < 10) {
                        daojishice.miao = "0" + daojishice.miao;
                    }
                    that.daojishi = daojishice;
                    that.dqZt = dq_zt;
                    console.log(that.daojishi)
                    console.log(that.dqZt)
                    that.doQuery()
                }

            },
            tab_exchange_one: function () {
                var that = this;
                var i = that.tabIndex;
                var group_gtime = that.groupGtime;
                var dq_zt = 0;
                dq_zt = group_gtime[i].zt;
                if (dq_zt == 1) {
                    that.tiaozhuan = "/pages/productDetail/productDetail";
                } else {
                    that.tiaozhuan = "/pages/productDetail/productDetail";
                }
                var daojishice = {shi: "00", fen: "00", miao: "00", ztime: 0};
                daojishice.ztime = group_gtime[i].daojishi;
                daojishice.day = Math.floor(daojishice.ztime / 60 / 60 / 24);
                daojishice.shi = Math.floor(daojishice.ztime / 60 / 60) % 24;
                daojishice.fen = Math.floor(daojishice.ztime / 60) % 60;
                daojishice.miao = daojishice.ztime % 60;
                if (daojishice.day < 10) {
                    daojishice.day = "0" + daojishice.day;
                }
                if (daojishice.shi < 10) {
                    daojishice.shi = "0" + daojishice.shi;
                }
                if (daojishice.fen < 10) {
                    daojishice.fen = "0" + daojishice.fen;
                }
                if (daojishice.miao < 10) {
                    daojishice.miao = "0" + daojishice.miao;
                }
                that.daojishi = daojishice;
                that.dqZt = dq_zt;
                that.doQuery()
            },
            doQuery: function () {
                var that = this;
                var eventType = that.tabIndex, curPage = that.curPage;

                var param = null;
                param = {specialId: that.groupGtime[eventType].specialId, page: curPage};

                jsonAjax.get(urlUtil.getApiUrl("panic_list"), param, function (result) {
                    console.log(result)
                    if (result.returnCode == 1) {
                        var list = result.resultData;
                        for (var i = 0; i < list.length; i++) {
                            list[i].percent = parseFloat((parseInt(list[i].buyNum) / parseInt(list[i].panicNum)) * 100).toFixed(0);
                            list[i].routerUrl = that.routername(list[i].panicId, list[i].productId);
                        }
                        that.productList = list;

                    } else {
                        that.productList = [];
                    }

                });
            },
            qu_hm: function (str) {
                str = new Date(str);
                var year = str.getFullYear();
                var month = str.getMonth() + 1;
                var day = str.getDate();
                var hour = str.getHours();
                var minute = str.getMinutes();
                var second = str.getSeconds();

                if (hour < 10) {
                    hour = "0" + hour;
                }
                if (minute < 10) {
                    minute = "0" + minute;
                }
                return hour + ":" + minute;
            },
            routername: function (id, oldid) {
                if (this.dqZt == 1) {
                    return {name: "productDetail", params: {pId: oldid}}
                } else {
                    return {name: "productSDetail", params: {type: 4, pId: id}}
                }
            },
            loadMore: function () {
//        if(this.loadTag)
//        {
//          this.loadTxt="正在加载...";
//          this.loading = true;
//          this.doQuery();
//        }
            }

        }

    }
</script>

<style scoped>
    .page {
        background: #fff;
    }

    .kind_scroll {
        position: fixed;
        left: 0;
        right: 0;
        height: 1rem;
        background: #fff;
        z-index: 5;
        top: 0.88rem;
        overflow-x: auto;
    }

    .kind_scroll .ver_mid {
        box-sizing: border-box;
        border-right: 1px solid #dcdcdc;
        background: #dcdcdc;
        color: #fff;
    }
    .kind_scroll .ver_midtwo {
        box-sizing: border-box;
        min-width: 1.5rem;
        border-right: 1px solid #dcdcdc;
        background: #dcdcdc;
        color: #fff;
    }

    .width25{
        width: 25%;
    }
    .width33{
        width: 33.33%;
    }
    .width50{
        width: 50%;
    }
    .width100{
        width: 100%;
    }
    .kind_scroll .td.cur {
        background: #E4811D;
        color: #fff;
    }
    .he_7{
        height: .7rem;
    }
    .top_h {
        height: 1.4rem;
    }

    .time_tag {
        margin-left: 5px;
        margin-right: 5px;
        background: #232325;
        color: #fff;
        border-radius: 4px;
        height: .45rem;
        width: .45rem;
        line-height: .45rem;
        text-align: center;
    }
    .pad_10two{
        padding: 0.15rem .1rem!important;
    }
    .pro_list .border_b {
        border-bottom: 1px solid #f2f2f2;
    }

    .pro_list .w1 {
        width: 1.6rem;
    }

    .pro_list .img_div {
        border: 1px solid #f2f2f2;
        border-radius: 0.08rem;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .pro_list .mar_b100 {
        margin-bottom: 0.04rem;
    }

    .p_notice {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
    }

    .buy_btn {
        background: #E4811D;
        color: #fff;
        padding: 3px 10px;
        border-radius: 4px;
        display: inline-block;
    }

    .buy_btn.gray {
        background: #232323;
    }

    .buy_btn.blue {
        background: #ccc;
    }

    .jindutiao {
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        background: #dcdcdc;
        height: 10px;
        width: 60%;
    }

    .jindutiao .jindu {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background: #fd8989;
    }

    .list {
        position: absolute;
        bottom: 0rem;
        top: 2.7rem;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
    .mar_top{
        margin-top: .075rem;
    }
</style>
