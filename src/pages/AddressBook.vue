<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('addressBook.addressBook_title')}}</p>
            <div
                    class="HEADER_RIGHT add"
                    @click="go"
                    data-path="/addBook"
            ></div>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="addressBook_noMsg" v-if="!isList">
                    <img class="addressBook_noMsg_pic mauto" src="../static/images/noMsg_bg.png">
                    <p class="addressBook_noMsg_txt">{{$t('addressBook.addressBook_tip1')}}</p>
                    <div class="LONGBTN addressBook_noMsg_btn"
                         @click="go"
                         data-path="/addBook"
                    >{{$t('addressBook.addressBook_addBtn')}}</div>
                </div>
                <div class="addressBooklist" v-if="isList">
                    <div class="addressBooklistWrapper">
                        <div class="addressBook_item"
                            v-for="(item, index) in addressBookList"
                            :key="item.id"
                            :data-id="item.id"
                            @click="toDetail"
                        >
                            <div class="addressBook_item_txt">
                                <p class="addressBook_item_txt1">{{item.contactsSurname}}{{item.contactsName}}</p>
                                <p class="addressBook_item_txt2">{{$t('addressBook.addressBook_remarks')}}：{{item.remarks}}</p>
                                <p class="addressBook_item_txt2">{{$t('addressBook.addressBook_address')}}：{{item.payeeWalletAddress}}</p>
                            </div>
                            <div class="addressBook_item_icon"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>

    import Nlayer from '@/components/Nlayer'
    import { mapGetters } from 'vuex'

    export default {
        name: 'My',
        components: {
            Nlayer
        },
        data(){
            return {
                tips: '',
                tipsVisible: false,
                system: '',
                transfer: '',
                isList:false,
                addressBookList:[]
            }
        },
        mounted() {
            console.log()
            this.isLogin()
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            loginTip(){
                return this.$t('login.login_tips')
            }
        },
        methods: {
            ...mapGetters(['getUserinfo', 'getSystemNotice', 'getTransferNotice']),
            // 检测是否登录
            isLogin(){
                if( this.userinfo ){
                    this.getAddressBookList()
                }
            },
            // 查询是否有地址簿信息
            getAddressBookList(){
                //
                this.$http.get('js/addressBook/list', {
                    userId : this.userId
                }).then((res) => {
                    console.log(res)
                    if(res.success){
                        console.log('是否进来这里')
                        if(res.result.length == 0){
                            console.log('是否进来这里2')
                        }else{
                            console.log('是否进来这里3')
                            this.addressBookList = res.result
                            this.isList = true
                        }
                    }
                    // if( res.success ){
                    //     this.showTips(this.$t('myMessageSetup.myMessageSetup_update'))
                    //
                    //     // 设置最新的用户信息
                    //     this.setUserinfo({
                    //         ...this.userinfo,
                    //         nickName: this.nickName
                    //     })
                    // }
                })
            },
            // 页面跳转
            go(e){

                console.log(e)
                const {
                    path,
                    disable
                } = e.currentTarget.dataset

                if( disable ){
                    this.showTips(this.$t('layerdate.layerdate_open'))
                    return
                }

                this.$push({ path })
            },
            // 去详情
            toDetail(e){
                const {
                    id
                } = e.currentTarget.dataset

                this.$push({
                    path: '/addressBookDetail',
                    query: {
                        id: id
                    }
                })
            },
            // 打开消息提示
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            }
        }
    }
</script>

<style scoped>
    .content{
        height: 100%;position: relative;
    }
    .addressBooklist{ padding: 0 0.3rem;flex: 1;
        }
    .addressBooklistWrapper{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 0.3rem 0.3rem;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-scrolling: touch;
    }
    .addressBook_item{ border-bottom: 1px solid #ccc;padding:0.1rem 0.5rem 0.2rem 0.25rem;position: relative;}
    .addressBook_item_txt1{ font-size: 0.3rem;color: #333;line-height: 0.6rem;font-weight: bold;}
    .addressBook_item_txt2{ font-size: 0.26rem;color: #333;line-height: 0.4rem;}
    .addressBook_item_txt2 +.addressBook_item_txt2{ margin-top: 0.1rem;}
    .addressBook_item_icon{ position: absolute;
        /*top:50%;*/
        top:0.2rem;
        right:0.1rem;
        /*transform: translateY(-50%);*/
        width: 0.4rem;height: 0.4rem;background: url('../static/images/icon/notice_icon_right.png') no-repeat center center / cover;}
    .addressBook_noMsg{ text-align:center;padding-top: 3.15rem;}
    .addressBook_noMsg_pic{ width: 2.7rem;height: 1.8rem;}
    .addressBook_noMsg_txt{ font-size: 0.26rem;color: #333;line-height: 0.9rem;}
    .addressBook_noMsg_btn{ margin-top: 3.3rem;}
    .add{
        z-index: 99999;
        background: url("../static/images/icon/add_icon.png") no-repeat center center / cover;
    }
</style>>