<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">我的粉丝</p>
        </div>
        <div class="usermain">
            <div>
                <div>
                    <span>
                        今日:<span v-if="userdata.personAdNum==1" style="color: #203395">活跃</span><span v-if="userdata.personAdNum==0">未活跃</span>
                    </span>
                    <img src="../static/images/default_headImg.png">
                </div>
                <P>{{userdata.nickName}}</P>
                <div>
<!--                    <img v-if="userdata.agentLevel==0" src="../static/images/my/省级代理.png">-->
                    <img v-if="userdata.agentLevel==1" src="../static/images/my/省级代理.png">
                    <img v-if="userdata.agentLevel==2" src="../static/images/my/市级代理.png">
                    <img v-if="userdata.agentLevel==3" src="../static/images/video_icon/pcity_agent.png">
                    <img v-if="userdata.agentLevel==4" src="../static/images/video_icon/county_agent.png">
                    <img v-if="userdata.agentLevel==5" src="../static/images/video_icon/pcounty_agent.png">
                    <img v-if="userdata.agentLevel==6" src="../static/images/video_icon/ccounty_agent.png">
                    <img v-if="userdata.agentLevel==7" src="../static/images/video_icon/pccounty_agent.png">
                    <img src="../static/images/my/vip1.png" v-if="userdata.vipLevel==1">
                    <img src="../static/images/my/vip2.png" v-if="userdata.vipLevel==2">
                    <img src="../static/images/my/vip3.png" v-if="userdata.vipLevel==3">
                </div>
            </div>

            <div class="xingji">
                <div>
                    <div>
                        <img src="../static/images/my/icon_星星.png">
                        <span>一星团队</span>
                    </div>
                    <div>{{userdata.oneStarNum}}</div>
                </div>
                <div>
                    <div>
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <span>二星团队</span>
                    </div>
                    <div>{{userdata.twoStarNum}}</div>
                </div>
                <div>
                    <div>
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <span>三星团队</span>
                    </div>
                    <div>{{userdata.threeStarNum}}</div>
                </div>
                <div>
                    <div>
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <span>四星团队</span>
                    </div>
                    <div>{{userdata.fullStarNum}}</div>

                </div>
                <div>
                    <div>
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <img src="../static/images/my/icon_星星.png">
                        <span>五星团队</span>
                    </div>
                    <div>{{userdata.starLevel}}</div>

                </div>
            </div>
        </div>
        <div class="teamtext">
            <div>
                <P>
                    直属粉丝: {{userdata.directUserNum}}
                </P>
                <P>
                    <span><span>活跃:</span>{{userdata.directActiveNum}}</span>
                    <span><span>未活跃:</span>{{userdata.directUserNum-userdata.directActiveNum}}</span>
                </P>
            </div>
            <div>
                <P>粉丝总量: {{userdata.teamAllMember}}</P>
                <P>
                    <span><span>活跃:</span>{{userdata.teamActiveNum}}</span>
                    <span><span>未活跃:</span>{{userdata.teamAllMember-userdata.teamActiveNum}}</span>
                </P>
            </div>
<!--            <div>-->
<!--                <p>总奖励</p>-->
<!--                <P>{{userdata.teamAdProfit}}</P>-->
<!--            </div>-->
        </div>
        <div class="hh"></div>
        <div class="teamlist" v-if="userdatalist!==null">
            <ul>
                <li v-for="list in userdatalist">
                    <div><div><span>昵称：{{list.nickName}}</span>
                        <img src="../static/images/my/vip1.png" v-if="list.vipLevel==1">
                        <img src="../static/images/my/vip2.png" v-if="list.vipLevel==2">
                        <img src="../static/images/my/vip3.png" v-if="list.vipLevel==3"></div>
                    <div>
                    今日:<span v-if="list.personAdNum==1" style="color: #203395">活跃</span><span v-if="list.personAdNum==0">未活跃</span>
                    </div>
                    </div>
                    <div>
                        <div>
                            <p>粉丝总量</p>
                            <p>{{list.teamAllMember}}</p>
                        </div>
<!--                        <div>-->
<!--                            <p>总奖励</p>-->
<!--                            <p>{{list.teamAdProfit}}</p>-->
<!--                        </div>-->
                        <div>
                            <p>注册时间</p>
                            <p>{{list.regTime|formatDate}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="teamlist" v-else>
            <P style="text-align: center;margin-top: .2rem;color: #333;font-size: .24rem">暂无数据</P>
        </div>

        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0.1)"
                :visible="loadingVisible"
                class="NLOADING"
        >
            <div class="LOADING">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve" width="0.8rem"
                     height="0.8rem">
                    <path opacity="0.1" fill="#fff"
                          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                    <path fill="#fff"
                          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20"
                                          to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
                <p class="LOADING_TXT">{{$t('layerdate.layerdate_loading')}}</p>
            </div>
        </nlayer>

        <nlayer
                :autoClose="1200"
                :maskCancel="false"
                :visible="tipsVisible"
                :zIndex="1000"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
                maskBackgroundColor="rgba(0,0,0,0)"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>
</template>

<script>
    import Nlayer from '@/components/Nlayer'
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    export default {
        components: {
            Nlayer
        },
        data() {
            return {
                loadingVisible: true,
                userdata: "",
                userdatalist: "",
                userId: JSON.parse(localStorage.getItem('userinfo')).customerId,
                loadingnuber: 0,
                tips: '',
                tipsVisible: false,
            }
        },
        created() {
            var that=this
            jsonAjax.post(urlUtil.getApiUrl("getUserTeamDirectInfo"), {userId:that.userId}, function (result) {
                that.userdatalist = result.resultData
                that.loadingnuber = that.loadingnuber + 1
                if(that.loadingnuber==2){
                    that.loadingVisible=false;
                }


            });
            jsonAjax.post(urlUtil.getApiUrl("getUserTeamSelfInfo"), {userId:that.userId}, function (result) {
                that.userdata = result.resultData
                that.loadingnuber = that.loadingnuber + 1
                if (that.loadingnuber == 2) {
                    that.loadingVisible = false;
                }
                if (result.returnCode) {
                } else {
                    // 检测errorCode 是否为00101
                    that.showTips(result.message)
                    // 跳转到登录页面
                    setTimeout(function () {
                        that.$router.replace({
                            path: '/login'
                        })
                    }, 1000)
                }
                console.log(that.userdata)
            });
        },filters: {
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
                return y + '/' + MM + '/' + d
            },
        },
        methods: {
            // 打开消息提示
            showTips(msg) {
                console.log(msg)
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed() {
                this.msg = ''
                this.tipsVisible = false
            },
        }
    }
</script>
<!--starLevel-->
<style scoped>
    .page{
        overflow: scroll;
        background: white;
    }
    .usermain {
        margin-top: 1.38rem;
        height: 2.7rem;
        border-bottom: 1px solid #eee;
           display: flex;
        justify-content: space-between;
       }
.usermain>div:nth-of-type(1)>div:nth-of-type(1)>img{
    width: 1.1rem;
    height: 1.1rem;
}
    .usermain>div:nth-of-type(1)>div:nth-of-type(1){
        position: relative;
    }
    .usermain>div:nth-of-type(1)>div:nth-of-type(1)>span{
        position: absolute;
        left: -.15rem;
        top: -.2rem;
        font-size: .22rem;
    }
.usermain>div:nth-of-type(1){
    padding-left: .35rem;
    text-align: center;
    width: 55%;
}
.usermain>div:nth-of-type(1)>div:nth-of-type(2) img:nth-of-type(1){
    height: .36rem;
}
    .usermain>div:nth-of-type(1)>div:nth-of-type(2) img:nth-of-type(2){
        width: .9rem;
        height: .36rem;
    }
.usermain>div:nth-of-type(1)>div:nth-of-type(1){
    display: flex;
    justify-content: space-around;
}
.usermain>div:nth-of-type(1)>div:nth-of-type(2){
    margin-top: .25rem;
    width: 60%;
    margin-left: 20%;
    justify-content: space-around;
    display: flex;
}
.usermain>div:nth-of-type(1) p{
    color: #333;
    font-size: .30rem;
    font-weight: bold;
    margin-top: .1rem;
}

.usermain>div>div>div{
    margin-right: .35rem;

    display: flex;
}
    .xingji>div{
        margin-top: .21rem;
    }
    .xingji>div:nth-of-type(1){
        margin-top: 0;

    }
    .usermain>div>div{
        display: flex;
        justify-content: space-between;
    }
    .usermain>div>div span{
        margin-left: .1rem;
    }
    .usermain>div:nth-of-type(2) img{
        margin-top: .04rem;
        margin-left: .015rem;
        width: .26rem;
        height: .26rem;
    }
    .usermain>div:nth-of-type(2){
        font-size: .17rem;
    }
    .teamtext{
        color: #333;
        margin-top: .1rem;
        height: 1rem;
        display: flex;
    }
    .teamtext div{
        width: 50%;
        text-align: center;
    }
    .teamtext div:nth-of-type(1){
        border-right: 1px solid #eee;
    }
    .teamtext div p:nth-of-type(1){
        margin-top: .15rem;
        line-height: .375rem;
        font-size:.22rem;
    }
    .teamtext div p:nth-of-type(2){
        padding: 0 .5rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #203395;
        font-size: .18rem;
    }
    .teamtext div p:nth-of-type(2) span span{
        color: #333;
    }
        .hh{
            margin-top: .1rem;
            height: .2rem;
            background: #f5f5f5;
        }
    .teamlist ul{
        padding: 0 .3rem;
    }
    .teamlist ul img{
        width: .9rem;
        height: .36rem;
        margin-top: .22rem;
        margin-left: .15rem;
    }
    .teamlist ul li{
        padding-bottom: .28rem;
        border-bottom: 1px solid #eee;
    }
    .teamlist ul li>div:nth-of-type(1) div{
          display: flex;
          line-height: .8rem;
      }
    .teamlist ul li>div:nth-of-type(1){
        display: flex;
        justify-content: space-between;
    }
    .teamlist ul li>div:nth-of-type(2){
        color: #666666;
        display: flex;
        font-size: .22rem;
        justify-content: space-between;
    }
    .teamlist ul li>div:nth-of-type(2)>div:nth-of-type(1){
        width: 30%;
        text-align: left;
    }
    .teamlist ul li>div:nth-of-type(2)>div:nth-of-type(2){
        width: 30%;
        text-align: right;
    }
    /*.teamlist ul li>div:nth-of-type(2)>div:nth-of-type(3){*/
    /*    width: 40%;*/
    /*    */
    /*}*/
</style>