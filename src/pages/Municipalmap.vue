<style scoped>
    .tcenter{
        overflow: scroll;
        padding-bottom: .5rem;
    }
    .posiright{
        position:absolute;
        right: .3rem;
        top: .2rem;
    }
    .posiright img{
        width: .4rem;
        height: .4rem;
    }
    .o-echarts {
        margin-top: 1rem;
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height:350px;
        background: #f5f5f5;
    }
    .tcenter{
        position: fixed;
        width: 100%;
        height:100%;
        left: 0;
        top: 0;
        z-index: 999999999999999;
    }
    .searchtitle>p{
        padding-left: .2rem;
        border-left: .1rem solid #203395;
        font-size: .3rem;
        font-weight: bold;
        text-align: left;
        line-height: .35rem;
        margin-top: 1.23rem;
        margin-bottom: .35rem;
    }
    .searchtitle>div{
        border-bottom: 1px solid #EEEEEE;
        line-height: .7rem;
        color: #333333;
        font-size: .22rem;
        width: 6.9rem;

    }
    .searchtitle>div:nth-of-type(1){
        font-size: .26rem;
        font-weight: bold;
    }
    .searchtitle>div:nth-of-type(1) div{
        background:#E3E5F2;
    }
    .searchtitle>div:nth-of-type(1) div:nth-of-type(2){
        background:#F0F3FF;
    }
    .searchtitle>div:nth-of-type(1)>div{
        width: 33.33%;
        text-align: center;
    }
    .searchtitle>div>div{
        position: relative;
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .searchtitle>div>div img{
        position: absolute;
        left: .2rem;
        width: .2rem;
        top: .225rem;
        height: .25rem;
    }
    .searchtitle>div>div>div{
        padding: .2rem 0;
        line-height: .3rem;
        width: 33.33%;
    }
    .searchtitle>div>div>div:nth-of-type(1){
        width: 27%;
        margin-left: 6.33%;
    }
    .searchtitle{
        padding: 0 .3rem;
        margin-top: .88rem;
    }
</style>
<template>
    <div class="tcenter">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{namemap}}</p>
            <div class="posiright" @click="search"><img src="../static/images/video_icon/icon_cx.png"></div>
        </div>
        <p style="margin-top: 1rem" v-if="!store">
            当前城市暂无数据
        </p>
        <div class="searchtitle">
            <p>{{namemap}} 区(县)代理详情</p>
            <div style="   display: flex;
        justify-content: space-around;">
                <div>代理地区</div>
                <div>区(县)代理昵称</div>
                <div>区(县)内会员总量</div>
            </div>

            <div v-for="(item,index) in getberNum.result">
                <div>
                    <div>
                        <span v-if="item.showEditBtn" @click="EditBtn(index)"><img v-if="item.includeArea!==null" src="../static/images/video_icon/jtr.png"></span>
                        <span v-else @click="EditBtn(index)"><img v-if="item.includeArea!==null" src="../static/images/video_icon/jtx.png"></span>
                        {{item.name}}
                    </div>
                    <div v-if="item.agentName==null">无</div>
                    <div v-else>{{item.agentName}}</div>
                    <div>{{item.value}}</div>
                </div>
                <div v-if="!item.showEditBtn" style="text-align: left;display:block;padding-left: .5rem;background:rgba(245,245,245,1);color: #333333;font-size: .22rem"><p v-if="item.includeArea!==null">{{item.name}}包括{{item.includeArea}}</p></div>
            </div>
        </div>
    </div>
</template>

<script>
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import echarts from 'echarts';
    import utils from '../static/js/mapurl';
    import Vue from 'vue'
    // import sjdaaa from '../static/jincheng';
    // import axios from "axios";

    export default {
        name: 'echart-map',
        data() {
            return {
                store:true,
                namemap:"",
                getberNum:""

            };
        },
        mounted() {
        },
        created(){
            var that=this;
            that.namemap = utils.getUrlKey('namemap');
            var that=this;
            jsonAjax.get(urlUtil.getApiUrl('selectMapByAddress'), {name:that.namemap}, function (result) {
                that.getberNum=result;
                that.getberNum.result.forEach(item => {
                    Vue.set(item,"showEditBtn",1)
                })
                console.log(that.getberNum)

            })

        },
        methods: {
            EditBtn(index){
                var that=this;
                if (that.getberNum.result[index].showEditBtn==0) {
                    Vue.set(that.getberNum.result[index],"showEditBtn",1)
                }else {
                    Vue.set(that.getberNum.result[index],"showEditBtn",0)
                }
            },
            search(){
                this.$push({
                    path: '/search'
                })
            },

        }
    };
</script>
