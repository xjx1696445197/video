<template>
    <div class="page">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">搜索</p>
        </div>
        <div class="wrapper">
            <form @submit.prevent="queryProduct">
                <div class='search_top'>
                    <div class='pad_l20 pad_r20 table all'>
                        <div class='td f28'>
                            <div class='keyword c999 all bgfff'>
                                <div class="table">
                                    <div class="td" style="width: 0.5rem">
                                        <img src='../static/images/shop/serach.png' style='width:0.4rem; height:0.4rem;' class='ver_mid'>
                                    </div>
                                    <div class='td'>
                                        <input type="text" class="pad_l10 pad_r10 col12 f28" placeholder="请输入搜索内容" v-model="searchTxt">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='td button-box txt_right f28' v-on:click="queryProduct">
                            搜索
                        </div>
                        <!-- 暂时替换为搜索
                        <div class='td button-box txt_right f14' v-on:click="cancelTxt">
                          取消
                        </div>-->
                    </div>
                </div>
            </form>

            <div class="top_h"></div>
            <div class='pad_20 bgfff'>
<!--                <div class='mar_b20 f30 pad_b20'>热门搜索</div>-->
<!--                <div class='c666 mar_b20 pad_b20 f28'>-->
<!--                    <div class='search_vv' v-for="item in list" v-on:click='searchBtnkey(item.keywords)'>{{item.keywords}}</div>-->
<!--                </div>-->
                <div class='mar_b20 f30 pad_b20' style="display: flex;justify-content: space-between">历史记录  <div class='f28 txt_center' v-if="searchList.length>0">
                    <div class='delete_btn inblock' v-on:click='deleteSearch'>
                        <span class='inblock'><img src="../static/images/video_icon/icon_sc.png" style="width: .3rem;height: .3rem"></span>
                    </div>
                </div></div>
                <div class='c666 mar_b20 pad_b20 f28'>
                    <div class='search_vv' v-for="item in searchList" v-on:click='searchBtn(item)'>{{item}}</div>
                </div>

            </div>


        </div>

        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1200"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { sourceUrlShop } from '@/config'
    import Nlayer from '@/components/Nlayer'
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'

    export default {
        name: "PersonalCenter",
        components: {
            Nlayer
        },
        data(){
            return {
                sourceUrlShop,
                loadingVisible: false,
                password: '',
                tips: '',
                tipsVisible: false,
                dialogVisible: false,
                passwordDigVisible: false,
                noPasswordDigVisible: false,
                nickName: '',
                change:'',
                loadTxt:'全部已加载',
                list:[],
                searchList:[],
                searchTxt:'',
            }
        },
        created(){
            if (localStorage.getItem("search_list")) {
                var list = JSON.parse(localStorage.getItem("search_list"));
                this.searchList=list;
            }

        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            mobilePhone(){
                return this.userinfo.mobilePhone == 'false' ? false : this.userinfo.mobilePhone
            },
            email(){
                return this.userinfo.email == 'false' ? false : this.userinfo.email
            },
            loginTip(){
                return this.$t('login.login_tips')
            },
            Sidebars(){
                return this.getSidebars()
            },
        },
        methods: {
            ...mapGetters(['getUserinfo','getSidebars']),
            ...mapActions(['removeUserinfo', 'setUserinfo', 'setUserNoticeState','setSidebars']),
            // 关键字
            searchBtnkey(keyword){
                this.searchTxt=keyword;
                this.queryProduct();
            },
            // 按钮
            searchBtn(keyword){
                this.searchTxt=keyword;
                this.queryProduct();
            },
            // 关闭到首页
            close(){
                this.$router.replace({
                    path: '/ShopIndex'
                })
            },
            // 搜索结果
            queryProduct(){
                // searchTxt 搜索关键字，不为空时，可以搜索，否则不能搜索
                if(this.searchTxt){
                    var new_list = [];
                    new_list.push(this.searchTxt);

                    if (localStorage.getItem("search_list")) {
                        var list = JSON.parse(localStorage.getItem("search_list"));
                        for (var i = 0; i < list.length; i++) {
                            if (list[i] != this.searchTxt) {
                                if (new_list.length < 10) {
                                    new_list.push(list[i]);
                                }
                            }
                        }
                    }

                    localStorage.setItem("search_list", JSON.stringify(new_list));
                    // this.$router.push({name:"searchmap",params:{cId:0,cName:0,keyword:this.searchTxt}});
                    this.$push({path:"searchmap",query:{cId:0,cName:0,name:this.searchTxt}});
                }else{
                    this.showTips("请输入您想要搜索地址")
                }
            },
            // 不修改
            cancelTxt(){
                this.searchTxt="";
            },
            // 删除内容
            deleteSearch(){
                localStorage.removeItem("search_list");
                // console.log(localStorage.getItem("search_list"))
                this.searchList=[]
            },
            // 打开消息提示
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true
            },
            // 打开加载
            showLoading(){
                this.loadingVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false

                if( !this.userinfo ){
                    this.$replace({
                        name: 'My'
                    }, false)
                }
            },
            // 关闭加载层
            closeLoading(){
                this.loadingVisible = false
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        background: #fff;
    }
    .search_top {
        position: fixed;
        left: 0;
        top: 0.88rem;
        right: 0;
        height: 1rem;
        border-bottom: 1px solid #f2f2f2;
        z-index: 10;
    }

    .search_top .table {
        height: 100%;
    }

    .keyword {
        padding: 0.08rem 0.2rem;
        border: 1px solid #efefef;
        width: 100%;
        line-height: 1;
        border-radius: 0.4rem;
    }

    .button-box {
        width: 1rem;
        padding-right: 0.2rem;
    }

    .top_h{ height: 1rem}

    .search_vv {
        display: inline-block;
        padding: 0.12rem 0.2rem;
        line-height: 1;
        background: #fff;
        border: 1px   solid #CCCCCC;
        margin: 0px 0.1rem 0.1rem 0px;
        border-radius: 0.4rem;
    }

    .delete_btn {
        line-height: 1;
        border-radius: 0.4rem;
    }
    input{
        border: none;
    }

</style>