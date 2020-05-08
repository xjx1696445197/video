<!--<template>-->
<!--    <div class="page">-->
<!--        <div class="PRODUCT_FRONT" v-if="!opened">-->
<!--            <div class="PRODUCT_POSTER">-->
<!--                <div class="PRODUCT_POSTER_WRAPPER">-->
<!--                    <img src="../static/images/bg/haleLock_icon.png">-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="PRODUCT_FRONT_BTN LONGBTN" @click="openService">{{$t('haleLock.haleLock_openWarehouse')}}</div>-->
<!--        </div>-->
<!--        <div class="PRODUCT_REVERSESIDE" v-if="opened">-->
<!--            <div class="PRODUCT_TOP">-->
<!--                <div class="lockedPosition_top">-->
<!--                    <div class="lockedPosition_left">-->
<!--                        <p class="PRODUCT_TOP_TXT1">{{$t('haleLock.haleLock_enterWarehouseNum')}}</p>-->
<!--                        <p class="PRODUCT_TOP_TXT2">{{(detail.lockHaleNum || '&#45;&#45;&#45;&#45;') | tofixed4}}</p>-->
<!--                        <div class="lockedPosition_left_metas">-->
<!--                            <div class="lockedPosition_left_meta">-->
<!--                                <p class="PRODUCT_TOP_TXT3">{{$t('haleLock.haleLock_balance')}}</p>-->
<!--                                <p class="PRODUCT_TOP_TXT3">{{(detail.amount || '&#45;&#45;&#45;&#45;') | tofixed4}}</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="PRODUCT_BTN BUTTON_SHADOW BUTTON_BG tcenter radius-half"-->
<!--                        @click="openServiceDig"-->
<!--                    >{{$t('haleLock.haleLock_btn')}}</div>-->
<!--                </div>-->
<!--                <div class="PRODUCT_METAS tcenter">-->
<!--                    <div class="PRODUCT_META">-->
<!--                        <p class="PRODUCT_META_TXT1">{{$t('haleLock.haleLock_today')}}</p>-->
<!--                        <p class="PRODUCT_META_TXT2">{{(detail.profitDay || '&#45;&#45;&#45;&#45;') | tofixed4}}</p>-->
<!--                    </div>-->
<!--                    <div class="PRODUCT_META">-->
<!--                        <p class="PRODUCT_META_TXT1">{{$t('haleLock.haleLock_cumulative')}}</p>-->
<!--                        <p class="PRODUCT_META_TXT2">{{(detail.cumulativeProfit || '&#45;&#45;&#45;&#45;') | tofixed4}}</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="PRODUCT_SUB">-->
<!--                <p class="PRODUCT_TITLE">{{$t('haleLock.haleLock_record')}}</p>-->
<!--                <div class="PRODUCT_SUB_POS">-->
<!--                    <div class="PRODUCT_SUB_CONTENT">-->



<!--                        <md-scroll-view-->
<!--                                ref="scrollView"-->
<!--                                :scrolling-x="false"-->
<!--                                :auto-reflow="true"-->
<!--                                :manual-init="true"-->
<!--                                :immediate-check-end-reaching="true"-->
<!--                                @refreshing="$_onRefresh"-->
<!--                                @end-reached="$_onEndReached"-->
<!--                        >-->
<!--                            <md-scroll-view-refresh-->
<!--                                    slot="refresh"-->
<!--                                    slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"-->
<!--                                    :scroll-top="scrollTop"-->
<!--                                    :is-refreshing="isRefreshing"-->
<!--                                    :is-refresh-active="isRefreshActive"-->
<!--                                    :refreshText="$t('statustest.status_refresh')"-->
<!--                                    :refreshActiveText="$t('statustest.status_refreshed')"-->
<!--                                    :refreshingText="$t('statustest.status_refreshing')"-->


<!--                            ></md-scroll-view-refresh>-->

<!--                            <div class="PRODUCT_LIST">-->
<!--                                <div class="PRODUCT_ITEM"-->
<!--                                    v-for="(item, index) in list"-->
<!--                                     :key="item.id"-->
<!--                                     :class="{-->
<!--                                        'COMPLETE': item.expire == 1-->
<!--                                     }"-->
<!--                                     :data-id="item.id"-->
<!--                                     :data-state="item.expire"-->
<!--                                     @click="toDetail"-->
<!--                                >-->
<!--                                    <div class="PRODUCT_ITEM_TOP">-->
<!--                                        <p class="PRODUCT_ITEM_TXT1">{{$t('haleLock.haleLock_time')}}：{{item.startTime | dataFormat('yyyy-MM-dd')}}</p>-->
<!--                                        <p class="PRODUCT_ITEM_TXT2">{{ item.expire == 1 ? $t('statustest.status_finish') : $t('statustest.status_haveHand') }}</p>-->
<!--                                    </div>-->
<!--                                    <div class="PRODUCT_ITEM_SUB">-->
<!--                                        <p class="PRODUCT_ITEM_TXT3">{{$t('haleLock.haleLock_week')}}：{{item.lockTime}}{{$t('haleLock.haleLock_day')}}</p>-->
<!--                                        <p class="PRODUCT_ITEM_TXT4" v-if="item.expire == 1">+{{item.interest | tofixed4}} HALE</p>-->
<!--                                        <p class="PRODUCT_ITEM_TXT4" v-else>-{{item.amount | tofixed4}} HALE</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <md-scroll-view-more-->
<!--                                    slot="more"-->
<!--                                    :is-finished="isFinished"-->
<!--                                    :finishedText="$t('statustest.status_All_loaded')"-->
<!--                                    :loadingText="$t('statustest.status_loading')"-->
<!--                            >-->
<!--                            </md-scroll-view-more>-->
<!--                        </md-scroll-view>-->


<!--                    </div>-->

<!--                </div>-->

<!--            </div>-->
<!--        </div>-->


<!--        <nlayer-->
<!--            :visible="serviceDigVisible"-->
<!--            @close="serviceDigClose"-->
<!--            class="ANIMATITE_TOP_TO_BOTTOM_SMALL"-->
<!--            width="85%"-->
<!--            :zIndex="998"-->
<!--        >-->
<!--            <div class='DIALOG'>-->
<!--                <div class='DIALOG_TITLE'>-->
<!--                    <div>-->
<!--                        {{$t('haleLock.haleLock_haleWarehouse')}}-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class='DIALOG_CONTENT'>-->
<!--                    <div-->
<!--                        class="product_select"-->
<!--                        @click="openPicker"-->
<!--                    >{{selectedLockGear.title}}</div>-->
<!--                    <input type="text"-->
<!--                       class="product_input"-->
<!--                       :placeholder="$t('haleLock.haleLock_enterWarehouseNum')"-->
<!--                       v-model="productAmount"-->
<!--                    >-->
<!--                    <div class="product_tips">-->
<!--                        <p class="product_tips_txt1">{{$t('haleLock.haleLock_tips')}}</p>-->
<!--                        <p class="product_tips_txt1">{{$t('haleLock.haleLock_tipsOne')}}</p>-->
<!--                        <p class="product_tips_txt1">{{$t('haleLock.haleLock_tipsTwo')}}{{multiple}}{{$t('haleLock.haleLock_tipsThree')}}</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class='DIALOG_BTNS clearfix'>-->
<!--                    <div-->
<!--                        class='DIALOG_BTN CONFIRM'-->
<!--                        @click='vlidateLockData'-->

<!--                    ><div class="lockBtn BUTTON_BG BUTTON_SHADOW">{{$t('haleLock.haleLock_btn')}}</div></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nlayer>-->


<!--        <nlayer-->
<!--            :visible="passwordDigVisible"-->
<!--            @close="passwordDigClose"-->
<!--            class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"-->
<!--            width="80%"-->
<!--            :zIndex="999"-->
<!--        >-->
<!--            <div class='DIALOG'>-->
<!--                <div class='DIALOG_TITLE'>-->
<!--                    {{$t('layerdate.layerdate_enterTransactionPwd')}}-->
<!--                </div>-->
<!--                <div class='DIALOG_CONTENT'>-->
<!--                    <input type="password"-->
<!--                       class="PASSWORD_INPUT"-->
<!--                       :placeholder="$t('layerdate.layerdate_enterTransactionPwd')"-->
<!--                       v-model="password"-->
<!--                    >-->
<!--                </div>-->
<!--                <div class='DIALOG_BTNS clearfix'>-->
<!--                    <div-->
<!--                        class='DIALOG_BTN DEFAULT'-->
<!--                        @click='closePasswordDig'-->
<!--                    >{{$t('layerdate.layerdate_btnCancel')}}</div>-->
<!--                    <div-->
<!--                        class='DIALOG_BTN CONFIRM'-->
<!--                        :class="[isCheckPassword ? 'active' : '']"-->
<!--                        @click='checkPassword'-->
<!--                    >{{$t('layerdate.layerdate_btnOk')}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nlayer>-->

<!--        <nradio-->
<!--            :list="lockGear"-->
<!--            :defaultActive="0"-->
<!--            :visible="pickerVisible"-->
<!--            @close="pickerClose"-->
<!--            @select="pickerSelect"-->
<!--        >-->
<!--            <div class="picker_title" slot="header">-->
<!--                <p class="picker_title_txt1">{{$t('haleLock.haleLock_selectGear')}}</p>-->
<!--            </div>-->
<!--            <div class="picker_footer" slot="footer">-->
<!--                <div class="picker_btn"-->
<!--                     @click="pickerConfirm"-->
<!--                >{{$t('haleLock.haleLock_btnOk')}}</div>-->
<!--            </div>-->
<!--        </nradio>-->

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
<!--            :visible="noPasswordDigVisible"-->
<!--            @close="noPasswordDigClose"-->
<!--            class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"-->
<!--            width="80%"-->
<!--            :zIndex="999"-->
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
<!--                        class='DIALOG_BTN DEFAULT'-->
<!--                        @click='closeNoPasswordDig'-->
<!--                    >{{$t('layerdate.layerdate_btnCancel')}}</div>-->
<!--                    <div-->
<!--                        class='DIALOG_BTN CONFIRM'-->
<!--                        @click='toSetDealPassword'-->
<!--                    >{{$t('layerdate.layerdate_set')}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nlayer>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    import { sourceUrl } from '@/config'-->
<!--    import { mapGetters, mapActions } from 'vuex'-->

<!--    import Nradio from 'components/Nradio'-->
<!--    import Nlayer from 'components/Nlayer'-->
<!--    import ScrollView from 'mand-mobile/lib/scroll-view'-->
<!--    import ScrollViewRefresh from 'mand-mobile/lib/scroll-view-refresh'-->
<!--    import ScrollViewMore from 'mand-mobile/lib/scroll-view-more'-->


<!--    const PAGENO = 1-->
<!--    export default {-->
<!--        name: "LockedPosition",-->
<!--        components: {-->
<!--            Nradio,-->
<!--            Nlayer,-->
<!--            [ScrollView.name]: ScrollView,-->
<!--            [ScrollViewRefresh.name]: ScrollViewRefresh,-->
<!--            [ScrollViewMore.name]: ScrollViewMore-->
<!--        },-->
<!--        computed: {-->
<!--            userinfo(){-->
<!--                return this.getUserinfo()-->
<!--            },-->
<!--            userId(){-->
<!--                return this.userinfo.userId-->
<!--            },-->
<!--            opened(){-->
<!--                if( this.userinfo && this.userinfo.lockPosition ){-->
<!--                    return true-->
<!--                }-->

<!--                return false-->
<!--            },-->
<!--            firstGear(){-->
<!--                return this.$t('haleLock.haleLock_oneGear')-->
<!--            },-->
<!--            secondGear(){-->
<!--                return this.$t('haleLock.haleLock_twoGear')-->
<!--            },-->
<!--            threesGear(){-->
<!--                return this.$t('haleLock.haleLock_threeGear')-->
<!--            },-->
<!--            loginTip(){-->
<!--                return this.$t('login.login_tips')-->
<!--            },-->
<!--            haleLockTip(){-->
<!--                return this.$t('haleLock.haleLock_position')-->
<!--            },-->
<!--            haleLockTip1(){-->
<!--                return this.$t('haleLock.haleLock_position1')-->
<!--            },-->
<!--            haleLockTip2(){-->
<!--                return this.$t('haleLock.haleLock_position2')-->
<!--            },-->
<!--            haleLockTip3(){-->
<!--                return this.$t('haleLock.haleLock_position3')-->
<!--            },-->
<!--            haleLockTip4(){-->
<!--                return this.$t('haleLock.haleLock_position4')-->
<!--            },-->
<!--        },-->
<!--        data(){-->
<!--            return {-->
<!--                sourceUrl,-->
<!--                lockGear: [],-->
<!--                selectedLockGear: {},-->
<!--                multiple: '',-->
<!--                detail: {},-->
<!--                productAmount: '',-->
<!--                password: '',-->
<!--                pickerVisible: false,-->
<!--                serviceDigVisible: false,-->
<!--                passwordDigVisible: false,-->
<!--                noPasswordDigVisible: false,-->
<!--                tips: '',-->
<!--                tipsVisible: false,-->
<!--                pageNo: PAGENO,-->
<!--                pageSize: 8,-->
<!--                list: [],-->
<!--                isFinished: false,-->
<!--                isCheckPassword:false-->
<!--            }-->
<!--        },-->
<!--        mounted(){-->
<!--            this.init()-->
<!--        },-->
<!--        methods: {-->
<!--            ...mapActions(['setUserinfo']),-->
<!--            ...mapGetters(['getUserinfo']),-->
<!--            // 根据用户状态初始化-->
<!--            init(){-->
<!--                if( this.userinfo ){-->
<!--                    this.getHaleLockGear()-->
<!--                    this.getDetail()-->
<!--                    this.initScrollView()-->
<!--                }-->
<!--            },-->
<!--            // 初始化scrollview-->
<!--            initScrollView(){-->
<!--                if( this.$refs.scrollView ){-->
<!--                    this.$refs.scrollView.init()-->
<!--                }-->

<!--            },-->
<!--            // 加载数据-->
<!--            getData(refresh=false){-->
<!--                return this.$http.get('js/hLockHale/findLockLog', {-->
<!--                    userId: this.userId,-->
<!--                    pageSize: this.pageSize,-->
<!--                    pageNo: this.pageNo-->
<!--                }).then((res) => {-->
<!--                    console.log(res)-->
<!--                    if( res.success ){-->
<!--                        if( refresh ){-->
<!--                            this.list = res.result-->
<!--                        } else {-->
<!--                            this.list.push(...res.result)-->
<!--                        }-->

<!--                        this.$refs.scrollView.finishRefresh()-->
<!--                        this.$refs.scrollView.finishLoadMore()-->
<!--                        this.pageNo += 1-->

<!--                        if( res.result.length < this.pageSize ){-->
<!--                            this.isFinished = true-->
<!--                            this.$refs.scrollView.loadend()-->
<!--                        }-->
<!--                    }-->
<!--                })-->
<!--            },-->
<!--            // 滚动触底事件 此时要加载数据-->
<!--            $_onEndReached() {-->
<!--                if (this.isFinished) {-->
<!--                    return-->
<!--                }-->

<!--                this.getData()-->
<!--            },-->
<!--            // 刷新中事件 此时要刷新数据-->
<!--            $_onRefresh() {-->
<!--                this.isFinished = false-->
<!--                this.pageNo = PAGENO-->

<!--                this.getData(true)-->
<!--            },-->
<!--            // 开启服务 锁仓-->
<!--            openService(){-->
<!--                if( !this.userinfo ){-->
<!--                    this.showTips(this.loginTip)-->
<!--                } else if( this.userinfo && !this.userinfo.lockPosition ){-->
<!--                    this.openServiceDig()-->
<!--                }-->
<!--            },-->
<!--            // 获取详情-->
<!--            getDetail(){-->
<!--                this.$http.get('js/hLockHale/findLockHaleParameter', {-->
<!--                    userId: this.userId-->
<!--                }).then((res) => {-->
<!--                    if( res.success ){-->
<!--                        this.detail = res.result-->
<!--                    }-->
<!--                })-->
<!--            },-->
<!--            // 锁仓后刷新-->
<!--            refresh(){-->
<!--                if( this.opened ){-->
<!--                    this.getDetail()-->
<!--                    this.$refs.scrollView.triggerRefresh()-->
<!--                } else {-->
<!--                    // 设置最新的用户信息-->
<!--                    this.setUserinfo({-->
<!--                        ...this.userinfo,-->
<!--                        lockPosition: 1-->
<!--                    })-->

<!--                    setTimeout(() => {-->
<!--                        this.init()-->
<!--                        this.$refs.scrollView.triggerRefresh()-->
<!--                    }, 200)-->

<!--                }-->
<!--            },-->
<!--            // 请求档位参数-->
<!--            getHaleLockGear(){-->
<!--                this.$http.get('js/hsysSettings/haleLockGear').then((res) => {-->
<!--                    const result = res.resultVo-->

<!--                    if( result.success ){-->
<!--                        const rData = result.result-->
<!--                        const data = [{-->
<!--                            "title": this.firstGear +rData.oneGear,-->
<!--                            "value": rData.oneGear,-->
<!--                            "id": 0-->
<!--                        }, {-->
<!--                            "title": this.secondGear +rData.twoGear,-->
<!--                            "value": rData.twoGear,-->
<!--                            "id": 1-->
<!--                        }, {-->
<!--                            "title": this.threesGear +rData.threeGear,-->
<!--                            "value": rData.threeGear,-->
<!--                            "id": 2-->
<!--                        }]-->

<!--                        this.multiple = rData.multiple-->
<!--                        this.lockGear = data-->
<!--                        this.selectedLockGear = data[0]-->
<!--                    }-->
<!--                })-->
<!--            },-->
<!--            // 验证锁仓数据格式-->
<!--            vlidateLockData(){-->
<!--                const valueArr = this.selectedLockGear.value.split('-')-->
<!--                const nowValue = this.productAmount-->
<!--                const sale = this.multiple-->
<!--                const min = Number(valueArr[0])-->
<!--                const max = Number(valueArr[1])-->

<!--                let msg = ''-->

<!--                if( nowValue == ''){-->
<!--                    msg = this.haleLockTip-->
<!--                } else if ( nowValue < min ){-->
<!--                    msg = this.haleLockTip1-->
<!--                } else if ( nowValue > max ){-->
<!--                    msg = this.haleLockTip2-->
<!--                } else if ( nowValue % sale != 0 ){-->
<!--                    msg = this.haleLockTip3 + sale + this.haleLockTip4-->
<!--                }-->

<!--                if( msg ){-->
<!--                    this.showTips(msg)-->
<!--                    return-->
<!--                }-->

<!--                if( this.userinfo.transPwd ){-->
<!--                    // 有交易密码-->
<!--                    this.openPasswordDig()-->
<!--                } else {-->
<!--                    // 无交易密码-->
<!--                    this.openNoPasswordDig()-->
<!--                }-->
<!--            },-->
<!--            // 检测交易密码是否正确-->
<!--            checkPassword(){-->
<!--                if(!this.isCheckPassword){-->
<!--                    this.isCheckPassword = true-->
<!--                    this.$http.post('js/users/isCorrectTransPass',{-->
<!--                        userId: this.userId,-->
<!--                        transPass: this.password-->
<!--                    }).then((res) => {-->
<!--                        if( res.success ){-->
<!--                            this.commitLockPosition()-->
<!--                            this.password = ''-->
<!--                        } else {-->
<!--                            this.isCheckPassword = false-->
<!--                            this.showTips(res.message)-->
<!--                        }-->
<!--                    })-->
<!--                }-->

<!--            },-->
<!--            // 请求锁仓-->
<!--            commitLockPosition(){-->
<!--                this.$http.post('js/hLockHale/setLockHale',{-->
<!--                    userId: this.userId,-->
<!--                    transPass: this.password,-->
<!--                    amount: this.productAmount-->
<!--                }).then((res) => {-->
<!--                    this.isCheckPassword = false-->
<!--                    if( res.success ){-->
<!--                        this.closeAll()-->
<!--                        this.showTips(res.message)-->
<!--                        this.refresh()-->
<!--                    } else {-->
<!--                        this.closePasswordDig()-->
<!--                        this.showTips(res.message)-->
<!--                    }-->
<!--                })-->
<!--            },-->
<!--            toDetail(e){-->
<!--                const {-->
<!--                    id,-->
<!--                    state-->
<!--                } = e.currentTarget.dataset-->

<!--                this.$push({-->
<!--                    path: '/lockedPositionDetail',-->
<!--                    query: {-->
<!--                        id, state-->
<!--                    }-->
<!--                })-->
<!--            },-->
<!--            // 去设置交易密码-->
<!--            toSetDealPassword(){-->
<!--                this.$push({-->
<!--                    path: '/setPassword'-->
<!--                })-->
<!--            },-->
<!--            // 关闭全部layer-->
<!--            closeAll(){-->
<!--                this.closeNoPasswordDig()-->
<!--                this.closePasswordDig()-->
<!--                this.closePicker()-->
<!--                this.closeServiceDig()-->
<!--            },-->
<!--            // 打开消息提示-->
<!--            showTips(msg){-->
<!--                this.tips = msg-->
<!--                this.tipsVisible = true-->
<!--            },-->
<!--            // 监听消息提示关闭-->
<!--            tipsClosed(){-->
<!--                this.msg = ''-->
<!--                this.tipsVisible = false-->
<!--            },-->
<!--            // 打开锁仓弹窗-->
<!--            openServiceDig(){-->
<!--                this.serviceDigVisible = true-->
<!--            },-->
<!--            // 关闭锁仓弹窗-->
<!--            closeServiceDig(){-->
<!--                this.serviceDigVisible = false-->
<!--                this.productAmount = ''-->
<!--            },-->
<!--            // 监听关闭锁仓弹窗事件-->
<!--            serviceDigClose(){-->
<!--                this.serviceDigVisible = false-->
<!--                this.productAmount = ''-->
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
<!--            },-->
<!--            // 关闭选择档位-->
<!--            closePicker(){-->
<!--                this.pickerVisible = false-->
<!--            },-->
<!--            // 打开选择档位-->
<!--            openPicker(){-->
<!--                this.pickerVisible = true-->
<!--            },-->
<!--            // 监听档位关闭事件-->
<!--            pickerClose(data){-->
<!--                this.closePicker()-->
<!--            },-->
<!--            // 选择档位-->
<!--            pickerSelect(data){-->
<!--                this.selectedLockGear = data-->
<!--            },-->
<!--            // 确认档位-->
<!--            pickerConfirm(){-->
<!--                this.closePicker()-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    .lockedPosition_top{-->
<!--        padding: .25rem 0 .35rem;-->
<!--        display: flex; align-items: flex-start;-->
<!--    }-->
<!--    .lockedPosition_left{-->
<!--        flex: 1;-->
<!--    }-->
<!--    .PRODUCT_BTN{-->
<!--        margin-top: 0.45rem;-->
<!--    }-->
<!--    .lockedPosition_left_metas{-->
<!--        display: flex;-->
<!--        margin-top: 0.3rem;-->
<!--    }-->
<!--    .lockedPosition_left_meta{-->
<!--        display: flex;-->
<!--    }-->
<!--    .product_select{-->
<!--        font-size: .26rem;-->
<!--        height: 0.7rem;-->
<!--        border-radius: .1rem;-->
<!--        border: 1px solid #eee;-->
<!--        width: 100%;-->
<!--        box-sizing: border-box;-->
<!--        padding: 0 .2rem;-->
<!--        padding-right: 0.6rem;-->
<!--        color: #333;-->
<!--        text-align: left;-->
<!--        position: relative;-->
<!--        display: flex;-->
<!--        align-items: center;-->
<!--        margin-bottom: 0.2rem;-->
<!--    }-->
<!--    .product_input{-->

<!--        font-size: .26rem;-->
<!--        height: 0.7rem;-->
<!--        border-radius: .1rem;-->
<!--        border: 1px solid #eee;-->
<!--        display: block;-->
<!--        width: 100%;-->
<!--        box-sizing: border-box;-->
<!--        padding: 0 .2rem;-->
<!--        color: #333;-->
<!--        text-align: left;-->
<!--        position: relative;-->
<!--    }-->
<!--    .product_select:after{-->
<!--        content: '';-->
<!--        position: absolute;-->
<!--        width: 0;-->
<!--        height: 0;-->
<!--        right: 0.2rem;-->
<!--        top: 50%;-->
<!--        margin-top: -0.06rem;-->
<!--        border-width: 0.12rem 0.1rem 0 .1rem;-->
<!--        border-style: solid;-->
<!--        border-color: #bbb transparent transparent transparent;-->
<!--    }-->
<!--    .product_tips{-->
<!--        background: #fafafa;-->
<!--        border: 1px solid #eee;-->
<!--        padding: .1rem .2rem;-->
<!--        border-radius: .1rem;-->
<!--        margin-top: .5rem;-->
<!--        text-align: left;-->
<!--    }-->
<!--    .product_tips_txt1{-->
<!--        font-size: .22rem;-->
<!--        color: #666;-->
<!--        line-height: .35rem;-->
<!--    }-->
<!--    .lockBtn{-->
<!--        color: #fff;-->
<!--        width: 3rem;-->
<!--        margin: 0.2rem auto;-->
<!--        border-radius: 50rem;-->
<!--    }-->
<!--    .DIALOG_BTN.active{-->
<!--        color: #999;-->
<!--    }-->
<!--</style>-->
