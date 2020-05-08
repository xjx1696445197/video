<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="cancel"></div>
            <p class="HEADER_TITLE">{{$t('addressBook.addressBook_add')}}</p>
            <div
                    class="HEADER_RIGHT finish"
                    @click="toValidate"
            >{{$t('addressBook.addressBook_finish')}}</div>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="FORM">
                    <div class="INPUT INPUT1" v-focus>
                        <div class="modifyPwd_label">{{$t('addressBook.addressBook_name')}}</div>
                        <input
                                type="text"
                                v-validate:name="validateOtions.name"
                                v-model="formData.name"


                        >
                    </div>
                    <div class="INPUT INPUT1" v-focus>
                        <div class="modifyPwd_label">{{$t('addressBook.addressBook_user')}}</div>
                        <input
                                type="text"
                                v-validate:user="validateOtions.user"
                                v-model="formData.user"


                        >
                    </div>
                    <div class="input_wrapper">
                        <p class="input_wrapper_txt">{{$t('addressBook.addressBook_address')}}</p>
                        <div class="INPUT INPUT1" v-focus>
                            <div class="modifyPwd_label"></div>
                            <input
                                    type="text"
                                    v-model="address"

                            >
                        </div>
                        <div class="scan"
                             @click="toScan"
                        ></div>
                    </div>

                    <div class="INPUT INPUT1" v-focus>
                        <div class="modifyPwd_label">{{$t('addressBook.addressBook_tel')}}</div>
                        <input
                                type="text"
                                v-validate:tel="validateOtions.tel"
                                v-model="formData.tel"


                        >
                    </div>
                    <div class="INPUT INPUT1" v-focus>
                        <div class="modifyPwd_label">{{$t('addressBook.addressBook_email')}}</div>
                        <input
                                type="text"
                                v-validate:email="validateOtions.email"
                                v-model="formData.email"


                        >
                    </div>
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
    import { mapGetters,mapMutations, mapActions} from 'vuex'
    import Nlayer from '@/components/Nlayer'

    export default {
        name: "AddBook",
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
                }
            }
        },
        mounted(){
            this.getDetail()
            this.address = this.getScanData()
        },

        computed: {
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
                // 设置用户地址簿信息
                // 设置当前页面缓存
                if(JSON.stringify(this.addressInfo) == "{}"){
                    //    没有缓存

                }else{
                    this.setAddressInfo({
                        ...this.formData
                    })
                }
                // return
                this.$push({
                    path: '/scan'
                })
            },
            // 检测是否需要缓存
            getDetail(){
                if(typeof(this.addressInfo) == "undefined" || JSON.stringify(this.addressInfo) == "{}"){

                }else{
                    this.formData = this.addressInfo
                }
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
                    this.showTips(this.$t('currencyDetail.currencyDetail_correspondingAddress'))
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

                this.$http.post('js/addressBook', {
                    userId:this.userId,
                    contactsName: name,
                    contactsSurname: user,
                    payeeWalletAddress: this.address,
                    contactsPhone: tel,
                    contactsEmail: email,
                    remarks: remarks
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.showTips(res.message)
                        setTimeout(() => {
                            // 清空数据
                            this.removeAddressInfo()
                            this.$back()
                        }, 2000)
                    }else{
                        this.showTips(res.message)
                    }
                })

            },

            // 点击取消
            cancel(){
                // 清空数据
                this.removeAddressInfo()
                this.$back()
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
    .finish{
        font-size: .3rem;
        color: #fff;
        width: auto;
    }
    .content{
        padding: 0 0.3rem;
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
    .INPUT1{
        height: 1rem;
    }
    .INPUT1+.INPUT1{
        margin-top: 0;
    }
    .scan{
        background: url("../static/images/icon/scan_active_icon.png")no-repeat center center /cover;
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        top: -0.15rem;
        /*transform: translateY(-50%);*/
        right: 0.1rem;
        z-index: 99;
    }
</style>