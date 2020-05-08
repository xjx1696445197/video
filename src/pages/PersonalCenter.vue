<!--<template>-->
<!--    <div class="page">-->
<!--        <div class="HEADER">-->
<!--            <div class="HEADER_BACK" @click="this.$back"></div>-->
<!--            <p class="HEADER_TITLE">{{$t('myMessageSetup.myMessageSetup_myIdentity')}}</p>-->
<!--        </div>-->
<!--        <div class="wrapper">-->
<!--            <div class="content">-->

<!--                <div class="LIST">-->
<!--                    <div class="ITEM">-->
<!--                        <p class="ITEM_TXT">{{$t('myMessageSetup.myMessageSetup_personalAvatar')}}</p>-->
<!--                        <div class="personalCenter_avatar radius-round"></div>-->
<!--                    </div>-->
<!--                    <div-->
<!--                        class="ITEM available"-->
<!--                        @click="showDialog"-->
<!--                    >-->
<!--                        <p class="ITEM_TXT">{{$t('myMessageSetup.myMessageSetup_nick')}}</p>-->
<!--                        <p class="ITEM_TXT" v-text="userinfo && userinfo.nickName || $t('myMessageSetup.myMessageSetup_noBind')"></p>-->
<!--                    </div>-->
<!--                    <div class="ITEM">-->
<!--                        <p class="ITEM_TXT">{{$t('myMessageSetup.myMessageSetup_identityId')}}</p>-->
<!--                        <p class="ITEM_TXT" v-text="userinfo && userinfo.userIdCard || $t('myMessageSetup.myMessageSetup_noBind')"></p>-->
<!--                    </div>-->
<!--                    <div class="ITEM">-->
<!--                        <p class="ITEM_TXT">{{$t('myMessageSetup.myMessageSetup_identity')}}</p>-->
<!--                        <p class="ITEM_TXT" v-text="userinfo && userinfo.userName || $t('myMessageSetup.myMessageSetup_noBind')"></p>-->
<!--                    </div>-->
<!--                    <div class="ITEM available"-->
<!--                         @click="vlidateBindTel"-->
<!--                    >-->
<!--                        <p class="ITEM_TXT">{{$t('myMessageSetup.myMessageSetup_phone')}}</p>-->
<!--                        <p class="ITEM_TXT" v-text="(userinfo && mobilePhone) || $t('myMessageSetup.myMessageSetup_noBind')"></p>-->
<!--                    </div>-->
<!--                    <div class="ITEM available"-->
<!--                         @click="vlidateBindEmail"-->
<!--                    >-->
<!--                        <p class="ITEM_TXT">{{$t('myMessageSetup.myMessageSetup_email')}}</p>-->
<!--                        <p class="ITEM_TXT" v-text="(userinfo && email) || $t('myMessageSetup.myMessageSetup_noBind')"></p>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="personalCenter_btn LONGBTN" @click="loginOut">{{$t('myMessageSetup.myMessageSetup_loginOut')}}</div>-->
<!--            </div>-->


<!--        </div>-->


<!--        &lt;!&ndash;修改用户名弹窗&ndash;&gt;-->
<!--        <nlayer-->
<!--            :visible="dialogVisible"-->
<!--            @close="closeDialog"-->
<!--            class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"-->
<!--            width="80%"-->
<!--        >-->
<!--            <div class='DIALOG'>-->
<!--                <div class='DIALOG_TITLE'>-->
<!--                    <div>-->
<!--                        {{$t('layerdate.layerdate_nickname')}}-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class='DIALOG_CONTENT'>-->
<!--                    <input type="text" class="DIALOG_INPUT" v-model="nickName">-->
<!--                </div>-->
<!--                <div class='DIALOG_BTNS clearfix'>-->
<!--                    <div-->
<!--                        class='DIALOG_BTN DEFAULT'-->
<!--                        @click='closeDialog'-->
<!--                    >{{$t('layerdate.layerdate_btnCancel')}}</div>-->
<!--                    <div-->
<!--                        class='DIALOG_BTN CONFIRM'-->
<!--                        @click='modifyNickname'-->
<!--                    >{{$t('layerdate.layerdate_btnOk')}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nlayer>-->

<!--        &lt;!&ndash;加载弹窗&ndash;&gt;-->
<!--        <nlayer-->
<!--            :maskCancel="false"-->
<!--            maskBackgroundColor="rgba(0,0,0,0.1)"-->
<!--            :visible="loadingVisible"-->
<!--            class="NLOADING"-->
<!--        >-->
<!--            <div class="LOADING">-->
<!--                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve" width="0.8rem" height="0.8rem">-->
<!--                    <path opacity="0.1" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>-->
<!--                    <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">-->
<!--                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>-->
<!--                    </path>-->
<!--                </svg>-->
<!--                <p class="LOADING_TXT">{{$t('layerdate.layerdate_loading')}}</p>-->
<!--            </div>-->
<!--        </nlayer>-->


<!--        <nlayer-->
<!--                :visible="passwordDigVisible"-->
<!--                @close="passwordDigClose"-->
<!--                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"-->
<!--                width="80%"-->
<!--                :zIndex="999"-->
<!--        >-->
<!--            <div class='DIALOG'>-->
<!--                <div class='DIALOG_TITLE'>-->
<!--                    {{$t('layerdate.layerdate_enterTransactionPwd')}}-->
<!--                </div>-->
<!--                <div class='DIALOG_CONTENT'>-->
<!--                    <input type="password"-->
<!--                           class="PASSWORD_INPUT"-->
<!--                           :placeholder="$t('layerdate.layerdate_enterTransactionPwd')"-->
<!--                           v-model="password"-->
<!--                    >-->
<!--                </div>-->
<!--                <div class='DIALOG_BTNS clearfix'>-->
<!--                    <div-->
<!--                            class='DIALOG_BTN DEFAULT'-->
<!--                            @click='closePasswordDig'-->
<!--                    >{{$t('layerdate.layerdate_btnCancel')}}</div>-->
<!--                    <div-->
<!--                            class='DIALOG_BTN CONFIRM'-->
<!--                            @click='checkPassword'-->
<!--                    >{{$t('layerdate.layerdate_btnOk')}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nlayer>-->

<!--        &lt;!&ndash;提示弹窗&ndash;&gt;-->
<!--        <nlayer-->
<!--            :maskCancel="false"-->
<!--            maskBackgroundColor="rgba(0,0,0,0)"-->
<!--            :autoClose="1200"-->
<!--            :visible="tipsVisible"-->
<!--            @close="tipsClosed"-->
<!--            class="NTOAST ANIMATITE_SCALE_TO_BIG"-->
<!--            :zIndex="1000"-->
<!--        >-->
<!--            <div class='TOAST' v-text="tips"></div>-->
<!--        </nlayer>-->


<!--        <nlayer-->
<!--                :visible="noPasswordDigVisible"-->
<!--                @close="noPasswordDigClose"-->
<!--                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"-->
<!--                width="80%"-->
<!--                :zIndex="999"-->
<!--        >-->
<!--            <div class='DIALOG'>-->
<!--                <div class='DIALOG_TITLE'>-->
<!--                    {{$t('layerdate.layerdate_tips')}}-->
<!--                </div>-->
<!--                <div class='DIALOG_CONTENT'>-->
<!--                    {{$t('layerdate.layerdate_setPwd')}}-->
<!--                </div>-->
<!--                <div class='DIALOG_BTNS clearfix'>-->
<!--                    <div-->
<!--                            class='DIALOG_BTN DEFAULT'-->
<!--                            @click='closeNoPasswordDig'-->
<!--                    >{{$t('layerdate.layerdate_btnCancel')}}</div>-->
<!--                    <div-->
<!--                            class='DIALOG_BTN CONFIRM'-->
<!--                            @click='toSetDealPassword'-->
<!--                    >{{$t('layerdate.layerdate_set')}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nlayer>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    import { mapGetters, mapActions } from 'vuex'-->
<!--    import Nlayer from '@/components/Nlayer'-->

<!--    export default {-->
<!--        name: "PersonalCenter",-->
<!--        components: {-->
<!--            Nlayer-->
<!--        },-->
<!--        data(){-->
<!--            return {-->
<!--                loadingVisible: false,-->
<!--                password: '',-->
<!--                tips: '',-->
<!--                tipsVisible: false,-->
<!--                dialogVisible: false,-->
<!--                passwordDigVisible: false,-->
<!--                noPasswordDigVisible: false,-->
<!--                nickName: '',-->
<!--                change:''-->
<!--            }-->
<!--        },-->
<!--        computed: {-->
<!--            userinfo(){-->
<!--                return this.getUserinfo()-->
<!--            },-->
<!--            userId(){-->
<!--                return this.userinfo.userId-->
<!--            },-->
<!--            mobilePhone(){-->
<!--                return this.userinfo.mobilePhone == 'false' ? false : this.userinfo.mobilePhone-->
<!--            },-->
<!--            email(){-->
<!--                return this.userinfo.email == 'false' ? false : this.userinfo.email-->
<!--            },-->
<!--            loginTip(){-->
<!--                return this.$t('login.login_tips')-->
<!--            },-->
<!--            Sidebars(){-->
<!--                return this.getSidebars()-->
<!--            },-->
<!--        },-->
<!--        methods: {-->
<!--            ...mapGetters(['getUserinfo','getSidebars']),-->
<!--            ...mapActions(['removeUserinfo', 'setUserinfo', 'setUserNoticeState','setSidebars']),-->
<!--            // 修改昵称-->
<!--            modifyNickname(){-->
<!--                this.showLoading()-->

<!--                this.$http.get('js/users/updateNickName', {-->
<!--                    userId : this.userId,-->
<!--                    nickName: this.nickName-->
<!--                }).then((res) => {-->
<!--                    if( res.success ){-->
<!--                        this.showTips(this.$t('myMessageSetup.myMessageSetup_update'))-->

<!--                        // 设置最新的用户信息-->
<!--                        this.setUserinfo({-->
<!--                            ...this.userinfo,-->
<!--                            nickName: this.nickName-->
<!--                        })-->
<!--                    }-->
<!--                    this.closeLoading()-->
<!--                    this.closeDialog()-->
<!--                })-->
<!--            },-->
<!--            // 验证直接跳转还是需要二级密码-->
<!--            vlidateBindTel(){-->
<!--                if(!this.mobilePhone){-->
<!--                // 去绑定-->
<!--                    this.$push({-->
<!--                        path: '/bind',-->
<!--                        query: {-->
<!--                            name: 'tel'-->
<!--                        }-->
<!--                    })-->

<!--                }else{-->
<!--                    this.vlidateLockData('tel')-->
<!--                }-->
<!--            },-->
<!--            // 验证-->
<!--            vlidateBindEmail(){-->
<!--                if(!this.email){-->
<!--                    // 去绑定-->
<!--                    this.$push({-->
<!--                        path: '/bind',-->
<!--                        query: {-->
<!--                            name: 'email'-->
<!--                        }-->
<!--                    })-->

<!--                }else{-->
<!--                    this.vlidateLockData('email')-->
<!--                }-->
<!--            },-->
<!--            // 验证是否有二级密码-->
<!--            vlidateLockData(modifyName){-->
<!--                this.change = modifyName-->
<!--                console.log(this.change)-->
<!--                console.log(this.userinfo.transPwd)-->
<!--                if( this.userinfo.transPwd ){-->

<!--                    // 有交易密码-->
<!--                    this.openPasswordDig()-->
<!--                } else {-->
<!--                    // 无交易密码-->
<!--                    this.openNoPasswordDig()-->
<!--                }-->

<!--            },-->
<!--            // 去设置交易密码-->
<!--            toSetDealPassword(){-->
<!--                this.$push({-->
<!--                    path: '/setPassword'-->
<!--                })-->
<!--            },-->
<!--            // 检测交易密码是否正确-->
<!--            checkPassword(){-->
<!--                this.$http.post('js/users/isCorrectTransPass',{-->
<!--                    userId: this.userId,-->
<!--                    transPass: this.password-->
<!--                }).then((res) => {-->
<!--                    if( res.success ){-->
<!--                        if(this.change == 'tel'){-->
<!--                            // 跳转修改绑定的页面-->
<!--                            this.$push({-->
<!--                                path: '/modifyBind',-->
<!--                                query: {-->
<!--                                    name: 'modifyBindTel',-->
<!--                                    number: this.mobilePhone-->
<!--                                }-->
<!--                            })-->
<!--                        }else{-->
<!--                            // 跳转修改绑定的页面-->
<!--                            this.$push({-->
<!--                                path: '/modifyBind',-->
<!--                                query: {-->
<!--                                    name: 'modifyBindEmail',-->
<!--                                    number: this.email-->
<!--                                }-->
<!--                            })-->
<!--                        }-->

<!--                    } else {-->
<!--                        this.showTips(res.message)-->
<!--                        this.password = ''-->
<!--                    }-->
<!--                })-->
<!--            },-->

<!--            // 退出登录-->
<!--            loginOut(){-->
<!--                console.log(this.Sidebars)-->
<!--                this.Sidebars.forEach((item,i)=>{-->
<!--                    item.active = false-->
<!--                })-->

<!--                console.log(this.Sidebars)-->
<!--                this.setSidebars(...this.Sidebars)-->
<!--                // return-->
<!--                this.removeUserinfo()-->


<!--                this.setUserNoticeState()-->
<!--                this.showTips(this.$t('myMessageSetup.myMessageSetup_logout'))-->
<!--            },-->
<!--            // 打开消息提示-->
<!--            showTips(msg){-->
<!--                this.tips = msg-->
<!--                this.tipsVisible = true-->
<!--            },-->
<!--            // 打开加载-->
<!--            showLoading(){-->
<!--                this.loadingVisible = true-->
<!--            },-->
<!--            // 监听消息提示关闭-->
<!--            tipsClosed(){-->
<!--                this.msg = ''-->
<!--                this.tipsVisible = false-->

<!--                if( !this.userinfo ){-->
<!--                    this.$replace({-->
<!--                        name: 'My'-->
<!--                    }, false)-->
<!--                }-->
<!--            },-->
<!--            // 关闭加载层-->
<!--            closeLoading(){-->
<!--                this.loadingVisible = false-->
<!--            },-->
<!--            // 打开dialog修改层-->
<!--            showDialog(){-->
<!--                this.dialogVisible = true-->
<!--            },-->
<!--            // 关闭dialog修改层-->
<!--            closeDialog(){-->
<!--                this.dialogVisible = false-->
<!--            },-->
<!--            // 关闭无密码提示弹窗-->
<!--            closeNoPasswordDig(){-->
<!--                this.noPasswordDigVisible = false-->
<!--            },-->
<!--            // 打开无密码提示弹窗-->
<!--            openNoPasswordDig(){-->
<!--                this.noPasswordDigVisible = true-->
<!--            },-->
<!--            // 监听关闭无密码弹窗事件-->
<!--            noPasswordDigClose(){-->
<!--                this.noPasswordDigVisible = false-->
<!--            },-->
<!--            // 关闭密码弹窗-->
<!--            closePasswordDig(){-->
<!--                this.passwordDigVisible = false-->
<!--                this.password = ''-->
<!--            },-->
<!--            // 打开密码弹窗-->
<!--            openPasswordDig(){-->
<!--                this.passwordDigVisible = true-->
<!--            },-->
<!--            // 监听关闭密码弹窗事件-->
<!--            passwordDigClose(){-->
<!--                this.passwordDigVisible = false-->
<!--                this.password = ''-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    .page{-->
<!--        background: #fff;-->
<!--    }-->
<!--    .content{-->
<!--        padding: .24rem 0.3rem 0;-->
<!--    }-->

<!--    .ITEM{-->
<!--        justify-content: space-between;-->
<!--    }-->
<!--    .ITEM.available{-->
<!--        padding-right: 0.4rem;-->
<!--    }-->
<!--    .ITEM.available:after{-->
<!--        position: absolute;-->
<!--        content: '';-->
<!--        right: 0;-->
<!--        width: .3rem;-->
<!--        height: .3rem;-->
<!--        background: url("../static/images/icon/notice_icon_right.png") no-repeat center center/cover;-->
<!--    }-->
<!--    .ITEM.available .ITEM_TXT:last-child{-->
<!--        color: #e4811d;-->
<!--    }-->

<!--    .personalCenter_avatar{-->
<!--        width: .6rem;-->
<!--        height: .6rem;-->
<!--        background: url("../static/images/default/default_headImg.png") no-repeat center center/cover;-->
<!--    }-->
<!--    .personalCenter_btn{-->
<!--        margin-top: .9rem;-->
<!--    }-->
<!--</style>-->

<template>
    <div class="page">
                <div class="HEADER">
                    <div class="HEADER_BACK" @click="gomy"></div>
                    <p class="HEADER_TITLE">个人中心</p>
                </div>
        <div style="margin-top: .88rem">
            <div>
                <div>个人头像</div>
                <div>
                    <img src="../static/images/default_headImg.png">
                </div>
            </div>
            <div>
                <div>昵称</div>
                <div @click="Modifnickname">
                    <span style="color: #203395">{{userdata.nickName}}</span>


                    <img src="../static/images/icon/notice_icon_right.png">
                </div>

            </div>
            <div>
                <div>手机号</div>
                <div>
                {{userdata.mobilePhone}}
                 </div>


            </div>
            <div>
                <div>代理权限</div>
                <div v-if='userdata.agentAreaCodeLevel1||userdata.agentAreaCodeLevel2||userdata.agentAreaCodeLevel3!=="0"'>
                    <span v-if='userdata.agentAreaCodeLevel1!=="0"'>{{userdata.agentAreaCodeLevel1}}代理</span>
                    <span v-if='userdata.agentAreaCodeLevel2!=="0"'>{{userdata.agentAreaCodeLevel2}}代理</span>
                    <span v-if='userdata.agentAreaCodeLevel3!=="0"'> {{userdata.agentAreaCodeLevel3}}区(县)代理</span>
                </div>
                <div  v-if='userdata.agentAreaCodeLevel1=="0"&&userdata.agentAreaCodeLevel2=="0"&&userdata.agentAreaCodeLevel3=="0"'>
                    无
                </div>
            </div>
            <div>
                <div>VIP等级</div>
                <div  v-if="userdata.vipLevel>0">
                    VIP
                    {{userdata.vipLevel}}
                </div>
                <div  v-else>
                    普通用户
                </div>
            </div>
            <div>
                <div>团队星级</div>
                <div v-if="userdata.starLevel>0">
                    {{userdata.starLevel}}星团队
                </div>
                <div v-else>
                    无
                </div>
            </div>
            <div>
                <div>身份ID</div>
                <div>
                    {{userdata.userCode}}
                </div>
            </div>
            <div>
                <div>推荐人身份ID</div>
                <div>
                    {{userdata.userIdCard}}
                </div>
            </div>
        </div>
        <div class="mb" v-show="mbstore">
            <div>
                <P><input type="text" placeholder="输入您的新昵称" v-model="name"></P>
                <P>
                    <span @click="hide">取消</span>
                    <span @click="nameok">确认</span>
                </P>
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
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    // import { mapGetters, mapActions } from 'vuex'
    import Nlayer from '@/components/Nlayer'


    export default {
        name: "Personalcenters",
        data(){
            return {
            userdata:"",
                userId:JSON.parse(localStorage.getItem('userinfo')),
                mbstore:false,
                name:"",
                tips: '',
                tipsVisible: false

            }
        },
        components: {
            Nlayer
        },
        created() {
            var that=this
            jsonAjax.get(urlUtil.getApiUrl("findUserNews"), {userId:that.userId.customerId}, function (result) {
                that.userdata=result.resultData
                that.name=that.userdata.nickName
            });
        },
        methods:{
            gomy(){
                this.$push({
                    path: '/my',

                })
            },
            hide(){
                this.mbstore=false
            },
            nameok(){
                this.mbstore=false
                var that=this
                jsonAjax.post(urlUtil.getApiUrl("updateNickName"), {customerToken:that.userId.customerToken,phone:that.userId.phone,nickName:that.name}, function (result) {
                if (result.returnCode==0){
                    that.showTips(result.message)
                }else if (result.returnCode==1){
                    that.userdata.nickName=that.name
                    that.showTips(result.message)

                }
                });
            },
            Modifnickname(){
                this.mbstore=true

            },
            // 打开消息提示
            showTips(msg) {
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed() {
                this.msg = ''
                this.tipsVisible = false
            }


        },
        computed: {
        }
    }
</script>

<style scoped>
    .page{
        background: white;
    }
    .mb{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
    }
    .mb>div{
        border-radius: .1rem;
        position: absolute;
        top: 47%;
        left: 50%;
        width: 5rem;
        height: 2rem;
        margin-left: -2.5rem;
        background: white;
    }
    .mb>div>P{
        text-align: center;

    }
    .mb>div>P input{
        width: 90%;
        height: .8rem;
        margin-top: .2rem;
        padding-left: .2rem;
    }
    .mb>div>P:nth-of-type(2){
        margin-top: .2rem;
        border-top: 1px solid #eee;
    }
    .mb>div>P span{
        display: inline-block;
        width: 49%;
        height: .75rem;
        line-height: .75rem;


    }
    .mb>div>P span:nth-of-type(1){
        border-right: 1px solid #eee;
    }
    .mb>div>P span:nth-of-type(2){
        color: #203395;
    }
    .page>div:nth-of-type(2){
    color: #333;
    padding:0 .3rem;
}
.page>div:nth-of-type(2)>div{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    height: 1rem;
    line-height: 1rem;
    justify-content: space-between;
}
.page>div:nth-of-type(2)>div:nth-of-type(1) img{
     width: .8rem;
     margin-top: .1rem;
 }
.page>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2){
    display: flex;
}
.page>div:nth-of-type(2)>div div:nth-of-type(2){
   font-weight: bold;
    font-size: .26rem;
}
    .page>div:nth-of-type(2)>div div:nth-of-type(1){
        font-size: .26rem;
    }
.page>div:nth-of-type(2)>div:nth-of-type(2) img{
    width: .3rem;
    height: .35rem;
    margin-top: .31rem;
}
.page>div:nth-of-type(2) div:nth-of-type(1) div{

}
</style>