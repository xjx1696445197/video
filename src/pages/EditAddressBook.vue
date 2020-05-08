<template>
    <div class="page" ref="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="cancel">{{$t('addressBook.addressBook_cancel')}}</div>
            <p class="HEADER_TITLE">{{$t('addressBook.addressBook_update')}}</p>
            <div
                    class="HEADER_RIGHT finish"
                    @click="toValidate"
            >{{$t('addressBook.addressBook_finish')}}</div>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="FORM">
                    <div class="plr30">
                        <div class="INPUT INPUT1" v-focus>
                            <div class="modifyPwd_label">{{$t('addressBook.addressBook_name')}}</div>
                            <input
                                    type="text"
                                    v-validate:name="validateOtions.name"
                                    v-model="formData.name"


                            >
                        </div>
                    </div>

                    <div class="plr30">
                        <div class="INPUT INPUT1" v-focus>
                            <div class="modifyPwd_label">{{$t('addressBook.addressBook_user')}}</div>
                            <input
                                    type="text"
                                    v-validate:user="validateOtions.user"
                                    v-model="formData.user"


                            >
                        </div>
                    </div>

                    <div class="swipe" ref="swipe">
                        <div class="swipe_wrap" ref="swipeWrap">
                            <div class="swipe_content">
                                <div class="plr30">
                                    <div class="address">
                                        <div class="address_left" ref="swipeTrigger"></div>
                                        <div class="address_right">
                                            <p class="address_txt1">{{$t('addressBook.addressBook_address')}}</p>
                                            <input type="text" class="address_input"
                                                v-model="address"
                                            >
                                        </div>
                                        <div class="scan"
                                             @click="toScan"
                                        ></div>
                                    </div>
                                </div>

                            </div>
                            <div class="swipe_other" ref="swipeOther">
                                <div class="del"
                                    @click="del"
                                >{{$t('addressBook.addressBook_delBtn')}}</div>
                            </div>
                        </div>

                    </div>

                    <div class="plr30">
                        <div class="INPUT INPUT1" v-focus>
                            <div class="modifyPwd_label">{{$t('addressBook.addressBook_tel')}}</div>
                            <input
                                    type="text"
                                    v-validate:tel="validateOtions.tel"
                                    v-model="formData.tel"


                            >
                        </div>
                    </div>

                    <div class="plr30">
                        <div class="INPUT INPUT1" v-focus>
                            <div class="modifyPwd_label">{{$t('addressBook.addressBook_email')}}</div>
                            <input
                                    type="text"
                                    v-validate:email="validateOtions.email"
                                    v-model="formData.email"


                            >
                        </div>
                    </div>

                    <div class="plr30">
                        <div class="INPUT INPUT1" v-focus>
                            <div class="modifyPwd_label">{{$t('addressBook.addressBook_remarks')}}</div>
                            <input
                                    type="text"
                                    v-validate:remarks="validateOtions.remarks"
                                    v-model="formData.remarks"


                            >
                        </div>
                    </div>



                </div>

                <div class="LONGBTN delContact"
                     @click="delContact"

                >{{$t('addressBook.addressBook_del')}}</div>


            </div>
        </div>

        <nlayer
                :visible="noPasswordDigVisible"
                @close="noPasswordDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    {{$t('layerdate.layerdate_tips')}}
                </div>
                <div class='DIALOG_CONTENT'>
                    {{$t('layerdate.layerdate_delAddress')}}
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='noPasswordDigClose'
                    >{{$t('layerdate.layerdate_btnCancel')}}</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='closeNoPasswordDig'
                    >{{$t('layerdate.layerdate_btnOk')}}</div>
                </div>
            </div>
        </nlayer>

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
    import { mapGetters,mapMutations ,mapActions} from 'vuex'
    import Nlayer from '@/components/Nlayer'

    export default {
        name: "EditAddressBook",
        components: {
            Nlayer
        },
        data(){
            return{
                tips: '',
                tipsVisible: false,
                loadingVisible: false,
                address:'',
                formData: {
                    name: '',
                    user: '',
                    tel: '',
                    email: '',
                    remarks: ''
                },
                noPasswordDigVisible: false,
            }
        },
        mounted(){
            this.getDetail()
            this.address = this.getScanData()
            this.addEvent()
        },
        computed: {
            id(){
                return this.$route.query.id
            },
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            },
            addressInfo(){
                return this.getAddressInfo()
            },
            validateOtions(){
                // 验证格式及错误信息
                const res = {
                    name:{
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('validate.validate_names')
                        }
                    },
                    user:{
                        rules:{
                            required: true
                        },
                        msg:{
                            required: this.$t('validate.validate_user')
                        }
                    },
                    tel: {
                        rules:{
                            required: true,
                            phone: true
                        },
                        msg:{
                            required: this.$t('validate.validate_phone'),
                            phone: this.$t('validate.validate_phoneFormat')
                        }
                    },
                    email: {
                        rules:{
                            required: true,
                            email: true
                        },
                        msg:{
                            required: this.$t('validate.validate_email'),
                            email: this.$t('validate.validate_emailFormat')
                        }
                    }

                }

                return res
            }
        },
        destroyed(){
            this.setScanData('')
        },
        methods: {
            ...mapMutations({
                'setScanData': 'SET_SCANDATA'
            }),
            ...mapGetters(['getUserinfo', 'getScanData','getAddressInfo']),
            ...mapActions(['setAddressInfo','removeAddressInfo']),

            // 去扫码
            toScan(){
                console.log(this.addressInfo,this.formData,JSON.stringify(this.addressInfo))
                let address = this.address
                // 设置当前页面缓存
                if(JSON.stringify(this.addressInfo) == "{}"){
                //    没有缓存

                }else{
                    this.setAddressInfo({
                        ...this.formData,
                        address
                    })
                }

                console.log(this.addressInfo,this.formData)

                this.$push({
                    path: '/scan'
                })
            },
            // 检测地址是否正确
            checkUSDT(value){
                const usdtRule = /^(1|3)[a-zA-Z\d]{24,33}$/
                const haleRule = /^(0x)?[0-9a-fA-F]{40}$/
                const btcRule = /^[^0OlI]{25,34}$/
                if( !usdtRule.test(value) && !haleRule.test(value) && !btcRule.test(value) ){
                    return this.$t('currencyDetail.currencyDetail_rightAddress')
                }
            },
            // 获取详情
            getDetail(){
                this.$http.get('js/addressBook/findAddressBookDetail', {
                    id: this.id
                }).then((res) => {
                    console.log(res,this.addressInfo,typeof(JSON.stringify(this.addressInfo)),JSON.stringify(this.addressInfo))
                    if( res.success ){
                        if(typeof(this.addressInfo) == "undefined" || typeof(JSON.stringify(this.addressInfo))== "undefined" || JSON.stringify(this.addressInfo) == "[]"){
                            console.log('123')
                            this.formData = {
                                name: res.result.contactsName,
                                user: res.result.contactsSurname,
                                tel: res.result.contactsPhone,
                                email: res.result.contactsEmail,
                                remarks: res.result.remarks
                            }
                            this.address = this.getScanData() || res.result.payeeWalletAddress

                        }else{
                            console.log('123456')
                            this.formData = this.addressInfo
                            this.address = this.getScanData() || this.addressInfo.address || this.address
                        }



                    }
                })
            },
            // 点击取消
            cancel(){
                // 清空数据
                this.removeAddressInfo()
                this.$back()
            },

            //删除
            del(){
                this.setScanData('')
                this.address = ''

            },
            // 删除联系人
            delContact(){
                // 出现是否删除的弹窗
                this.openNoPasswordDig()

            },
            // 请求删除联系人的接口
            getDelContact(){
                this.$http.get('js/addressBook/deleteAddressBookById', {
                    id: this.id,
                    userId:this.userId
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.showTips(res.message)
                        setTimeout(() => {
                            this.$router.go(-2)
                        }, 2000)

                    }else{
                        this.showTips(res.message)
                    }
                })
            },
            // 添加事件
            addEvent(){
                const trigger = this.$refs.swipeTrigger
                const page = this.$refs.page

                trigger.addEventListener('click', () => {
                    const swipe = this.$refs.swipe
                    const width = this.$refs.swipeOther.offsetWidth

                    swipe.style.cssText = `transition: all .3s ease; transform: translate3d(-${width}px, 0, 0);`
                })

                page.addEventListener('touchstart', () => {
                    const swipe = this.$refs.swipe

                    swipe.style.cssText = `transition: all .3s ease; transform: translate3d(0, 0, 0);`
                })


            },

            // 去验证格式
            toValidate(){
                let msg = ''

                const pass = this.$validator.checkAll()

                if( !pass ) {
                    // 没通过验证
                    const errors = this.$validator.errors.errors

                    const errorMsg = errors[0].msg

                    this.showTips(errorMsg)
                    return
                }

                if(this.address == ''){
                    this.showTips(this.$t('addressBook.addressBook_correspondingAddress'))
                    return
                }else{
                    msg = this.checkUSDT(this.address)
                }

                if( msg ){
                    this.showTips(msg)
                    return
                }


                this.submit()
            },
            // 提交信息
            submit(){
                console.log('点击了提交')

                const {
                    name,
                    user,
                    tel,
                    email,
                    remarks
                } = this.formData

                this.$http.post('js/addressBook/update', {
                    id:this.id,
                    // userId:this.userId,
                    contactsName: name,
                    contactsSurname: user,
                    payeeWalletAddress: this.address,
                    contactsPhone: tel,
                    contactsEmail: email,
                    remarks: remarks
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        // 清空数据
                        this.removeAddressInfo()

                        this.showTips(res.message)
                        setTimeout(() => {
                            this.$back()
                        }, 2000)
                    }else{
                        this.showTips(res.message)
                    }
                })

            },
            // 关闭全部layer
            closeAll(){
                this.closeNoPasswordDig()
                this.closePasswordDig()
            },
            // 关闭无密码提示弹窗
            closeNoPasswordDig(){
                // 执行删除操作
                console.log('是否触发')
                this.noPasswordDigVisible = false
                this.getDelContact()
            },
            // 打开无密码提示弹窗
            openNoPasswordDig(){
                this.noPasswordDigVisible = true
            },
            // 监听关闭无密码弹窗事件
            noPasswordDigClose(){
                this.noPasswordDigVisible = false
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

    .del{
        width: 1rem;
        height: 100%;
        background: red;
        color: #fff;
        font-size: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .swipe{

    }
    .swipe_wrap{
        position: relative;
    }
    .swipe_content{
        width: 100%;
        overflow: hidden;
    }
    .swipe_other{
        position: absolute;
        left: 100%;
        top: 0;
        right: auto;
        bottom: 0;
    }
    .address{
        padding: 0.25rem 0;
        padding-left: 0.12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #ccc;
    }
    .address_left{
        width: 0.36rem;
        height: 0.36rem;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        background: #E4811D;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.3rem;
    }
    .address_left:after{
        position: absolute;
        content: '';
        width: 0.2rem; height: 0.04rem;
        background: #fff;
    }
    .address_right{
        flex: 1;
        position: relative;
    }
    .address_right:after{
        position: absolute;
        left: -0.15rem;
        width: 1px;
        height: 0.6rem;
        background: #ccc;
        content: '';
        top: 50%;
        margin-top: -0.3rem;
    }
    .address_txt1{
        font-size: 0.26rem;
        color: #333;
        line-height: 0.5rem;
    }
    .address_input{
        font-size: 0.26rem;
        color: #333;
        height: 0.5rem;
        border: none;
        background: none;
        display: block;
        width: 100%;
    }
    .scan{
        background: url("../static/images/icon/scan_active_icon.png")no-repeat center center /cover;
        width: 0.6rem;
        height: 0.6rem;
        /*position: absolute;*/
        /*top: -0.15rem;*/
        /*!*transform: translateY(-50%);*!*/
        /*right: 0.1rem;*/
        /*z-index: 99;*/
        margin-left: 0.15rem;
    }

    .delContact{
        margin-top: 2.65rem;

    }

    .finish{
        font-size: .3rem;
        color: #fff;
        width: auto;
    }
    .content{

    }
    .input_wrapper{
        height: 1.3rem;
        position: relative;
    }
    .input_wrapper_txt{
        color: #333;
        font-size: 0.26rem;
        line-height: 0.3rem;
        margin-top: 0.25rem;
    }
    .plr30{
        padding: 0 0.3rem;
    }
    .INPUT1{
        height: 1rem;

    }
    .INPUT1+.INPUT1{
        margin-top: 0;
    }

    .HEADER_BACK{
        background: none;
        font-size: .3rem;
        color: #fff;
        width: auto;
        margin-top: 0.1rem;
    }
</style>