<template>
    <div class="main">
        <div class="searchinput" >
            <div  @click="search"><img src='../static/images/shop/serach.png' style='width:0.4rem; height:0.4rem;' class='ver_mid'>{{name}}</div>
            <span @click="this.$back">
                取消
            </span>
        </div>
<div class="searchtitle">
        <p>与{{name}}相关的地区</p>
    <div  v-if='list!==""'>
        <div>地区</div>
        <div>是否有代理</div>
        <div>会员总量</div>
    </div>
    <div v-if='list==""'>
  无搜索相关信息
    </div>
        <div  v-if='list!==""'v-for="item in list">
            <div>{{item.name}}</div>
            <div v-if="item.agentName==null">无</div>
            <div v-else>{{item.agentName}}</div>
            <div>{{item.value}}</div>
        </div>

</div>
    </div>
</template>

<script>
    import utils from '../static/js/mapurl';
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    export default {
        data(){
            return {
                name:utils.getUrlKey('name'),
                list:""
            }
        },
        created(){
            var that=this;
            jsonAjax.get(urlUtil.getApiUrl("selectAgentByAddress"), {
                name:that.name
            }, function (result) {
                that.list=result.result.list
            })
        },
        methods:{
            search(){
                this.$router.replace({
                    path: '/search'
                })

            }

        }
    }
</script>

<style scoped>
    .main{
        padding: 0 .3rem;
        height: 100%;
        overflow: scroll;
        padding-bottom: .2rem;
    }
    .searchinput{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        padding: 0 .3rem;
        background: white;
        height: .88rem;
        line-height: .88rem;
        display: flex;
        justify-content: space-between;
    }
    .searchinput div{
        color: #333;
        margin-top: .08rem;
        width: 5.8rem;
        height: .7rem;
        line-height: .7rem;
        background: #F5F5F5;
        padding-left: .8rem;
        border-radius: .4rem;
    }
    .searchinput span{
        color: #AAAAAA;
        font-size: .3rem;
        font-weight: bold;
      line-height: .88rem;
    }
    .searchinput div img{
        left: .5rem;
        position: absolute;
        top: .23rem;
        width: .28rem;
    }
    .searchtitle{
        margin-top: .88rem;
    }
    .searchtitle>p{
        font-size: .3rem;
        font-weight: bold;
        line-height: 1.1rem;
    }
    .searchtitle>div{
        background: #F5F5F5;
        color: #333333;
        font-size: .22rem;
        line-height: .3rem;
        width: 6.9rem;
        display: flex;
        justify-content: space-around;
    }
    .searchtitle>div>div{
        padding: .2rem 0;

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
    .searchtitle>div>div{
        width: 33.33%;
        text-align: center;
    }

</style>