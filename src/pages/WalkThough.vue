<template>
    <div class="page">
        <div class="walkThough">
            <div class="swiper-container walkThough_swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"
                         v-for="(item, index) in swiperPics"
                         :key="item.id"
                         :style="{background: `url(${ sourceUrl + item.url}) no-repeat center center / cover`}"
                    >
                        <div class="walkThough_btn" v-if="index == swiperPics.length - 1" @click="toAsset">{{$t('layerdate.layerdate_opening')}}</div>
                    </div>
                </div>
                <div class="walkThough_pagination swiper-pagination" ref="pagination"></div>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapMutations,mapGetters } from 'vuex'
    import 'static/swiper/swiper.min.js'
    import 'static/swiper/swiper.min.css'
    import {
        sourceUrl
    } from '@/config'

    export default {
        name: "WalkThough",
        data(){
            return{
                sourceUrl,
                swiper: null,
                swiperPics: []
            }
        },
        mounted(){
            this.init()

        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
        },
        methods: {
            ...mapMutations({
                'setRouteAction': 'SET_ROUTEACTION'
            }),
            ...mapGetters(['getUserinfo']),
            // 去资产页面
            toAsset(){
                // 去资产的时候调用接口
                this.$replace({
                    path: '/asset'
                })
            },
            // 初始化
            init(){
                this.getDetail()
                this.isLogin()
            },
            // 检测用户是否登录
            isLogin(){
                // 有用户信息请求新的接口
                if( this.userinfo ){
                    // 请求头部数据
                    this.isUserActive()

                }
            },
            // 请求活跃用户信息
            isUserActive(){
                this.$http.get('app/users/updateUserTeamActiveNumBuUserId', {
                    userId: this.userId
                }).then((res) => {

                })
            },
            // 获取轮播数据
            getDetail(){
                this.$http.get('app/startPage/queryStartPagePicture').then((res) => {
                    this.swiperPics = res.resultData
                    if( this.swiperPics.length <= 0 ){
                        this.setRouteAction('')
                        this.$router.replace({
                            path: '/asset'
                        })
                        return
                    }
                    setTimeout(() => {
                        this.initSwiper()
                    }, 30)
                })
            },
            // 初始化轮播
            initSwiper(){
                this.swiper = new Swiper('.walkThough_swiper', {
                    pagination: {
                        el: '.walkThough_swiper .swiper-pagination',
                        clickable: true
                    },
                    on: {
                        init:() => {
                            this.$refs.pagination.style.opacity = 1
                            this.$refs.pagination.style.visibility = 'visible'
                        }
                    },
                    resistanceRatio: 0
                })
            },
        }

    }
</script>

<style scoped>
    .walkThough{
        width: 100%; height: 100%;
        position: relative;
    }
    .walkThough_btn{
        position: absolute;
        left: 50%;
        margin-left: -1.5rem;
        /*transform: translateX(-50%);*/
        bottom: .85rem;
        background: #173488;
        color: #fff;
        line-height: .7rem;
        font-size: .34rem;
        z-index: 99999;
        border-radius: 50rem;
        width: 3rem;
        transform: translatez(200px);
        text-align: center;
    }
    .walkThough_swiper{
        width: 100%; height: 100%;
    }
    .walkThough_swiper .swiper-slide{
        position: relative;
        width: 100%; height: 100%; background: #000;
    }
    .walkThough_swiper .swiper-pagination{
        font-size: 0; line-height: 0;
        opacity: 0; visibility: hidden;
        transition: all 0.3s ease ;
    }
    .walkThough_swiper >>> .swiper-pagination-bullet{
        width: 0.15rem;
        height: 0.15rem;
        -webkit-border-radius: 50rem;
        -moz-border-radius: 50rem;
        border-radius: 50rem;
        margin: 0 0.07rem;
    }
    .walkThough_swiper >>> .swiper-pagination-bullet.swiper-pagination-bullet-active{
        width: 0.15rem;
        /*width: 0.3rem;*/
        border-radius: 100%;
        /*background: #4700e8;*/
        background: #173488;
    }

    .walkThough_swiper >>> .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
        bottom: 0.4rem;
        left: 0;
        width: 100%;
    }
</style>