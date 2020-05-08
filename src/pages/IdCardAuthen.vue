<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">实名认证</p>
        </div>
        <div class="wrapper">
            <div class="wrapper_height">
                <p class="realName_txt1 tcenter">上传身份证照片</p>
                <p class="realName_txt2 tcenter">仅用于核实真实身份，保障您的信息安全， </p>
                <p class="realName_txt2 tcenter" style="margin-top:0.05rem">通过后信息不可更改。</p>
                <div class="bg_front_icon mauto"
                     @click="toPick('front')"
                     v-if="!src1"
                >
                </div>
                <img :src="src1" alt="" class="front_img"
                     @click="toPick('front')"
                     v-if="src1"
                >
                <div class="bg_back_icon mauto"
                     @click="toPick('back')"
                     v-if="!src2"
                >

                </div>
                <img :src="src2" alt="" class="front_img"
                     @click="toPick('back')"
                     v-if="src2"
                >
                <div class="button LONGBTN BUTTON_SHADOW"
                     @click="uploadIdCardImage"
                >下一步</div>
            </div>


        </div>

        <!--加载框-->
        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0.1)"
                :visible="loadingVisible"
                class="NLOADING"
        >
            <div class="LOADING">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve" width="0.8rem" height="0.8rem">
                    <path opacity="0.1" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                    <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
                <p class="LOADING_TXT">{{$t('layerdate.layerdate_loading')}}</p>
            </div>
        </nlayer>

        <!--提示框-->
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

        <!--认证失败弹窗-->
        <nlayer
                :visible="realAuthenErrorDig"
                @close="realAuthenErrorDigClose"
                class="ANIMATITE_TOP_TO_BOTTOM_SMALL NDIALOG"
                width="80%"
                :zIndex="999"
        >
            <div class='DIALOG'>
                <div class="DIALOG_TITLE_ERROR">
                    <div class="realAuthenIcon"></div>
                    <p class="realAuthentxt1">{{$t('layerdate.layerdate_authenError')}}</p>
                    <p class="realAuthentxt2">{{errorMsg}}</p>
                    <div class="realAuthenBtn"
                         @click="toAgainAuthen"
                    >{{$t('layerdate.layerdate_authenAgain')}}</div>
                </div>
            </div>
        </nlayer>
    </div>
</template>
<script>
    import Nlayer from '@/components/Nlayer'
    import { mapGetters } from 'vuex'
    import { baseURL } from '@/config'

    export default {
        name: "IdCardAuthen",
        components: {
            Nlayer
        },
        data () {
            return {
                src1:'',
                src2:'',
                src11:'',
                src22:'',
                tips: '',
                tipsVisible: false,
                loadingVisible: false,
                baseURL,
                realAuthenErrorDig:false,
                errorMsg:''
            }
        },
        mounted(){

        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            }
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 验证身份证正反面是否上传
            checkSelect(){
                if(!this.src1){
                    this.showTips('请上传身份证正面照片')
                    return false
                }else if(!this.src2){
                    this.showTips('请上传身份证背面照片')
                    return false
                }

                return true
            },
            // 身份证正反面
            uploadIdCardImage(){
                if(!this.checkSelect()){
                    return
                }
                // 打开加载中
                this.showLoading()

                var url = this.baseURL+'app/aip/idcard'
                var data = [
                    {
                        type: 'file',
                        name: 'front',
                        value: this.src1
                    },
                    {
                        type: 'file',
                        name: 'back',
                        value: this.src2
                    },
                    {
                        type: 'string',
                        name: 'userId',
                        value:this.userId.toString()
                    }
                ]

                this.upload(url, 'post', data, (res, state) => {
                    this.closeLoading()
                    console.log(state)
                    if( state == '200' ){

                        var result = JSON.parse(res.responseText)

                        if(result.returnCode == 1){
                            var name = result.resultData.userName
                            console.log(name)
                            var realName = "*"+name.substring(1,name.length)
                            this.showTips(result.message)
                            this.$router.replace({
                                path: '/brushFaceAuthen',
                                query: {
                                    name: realName
                                }
                            })
                        }else{
                            console.log(result.message)
                            this.openRealAuthenErrorDig(result.message)
                        }


                    }else{
                        this.showTips('当前通道拥挤，请稍后再试')
                    }
                })
            },
            // 上传文件公共方法
            upload(url, method, data, callback){
                var task = plus.uploader.createUpload(url, {
                    method: method
                }, (res, state) => {
                    callback(res, state)
                })

                for( var i=0; i<data.length; i++ ){
                    var item = data[i]

                    if( item.type === 'file' ){
                        task.addFile(item.value, {key: item.name})
                    } else if( item.type === 'string' ){
                        task.addData(item.name, item.value)
                    }
                }

                task.start()
            },
            toPick(name){
                if (window.plus){
                    var cmr = plus.camera.getCamera()
                    cmr.captureImage((path) => {
                        plus.io.resolveLocalFileSystemURL(path, (entry) => {
                            var path = entry.toLocalURL()



                            if( name == 'front' ){
                                this.resize(path, (src)=>{
                                    this.setPath('src1', src)
                                })
//                              this.setPath('src1', path)
                            } else {
                                this.resize(path, (src)=>{
                                    this.setPath('src2', src)
                                })
//                              this.setPath('src2', path)
                            }

                        }, (e) => {
                            outLine('读取录像文件错误：' + e.message);
                        });
                    }, (e) => {
                        outSet('取消拍照');
                    });
                }

            },
            // 获取文件名
            setPath(name, path){
                var me = this
                var img = new Image()
                img.src = path
                img.onload = function(){
                    me[name] = path
                }
            },
            resize(src, callback) {
                var filename = src.substring(src.lastIndexOf('/') + 1);

                plus.zip.compressImage({
                        src: src,
                        dst: '_doc/' + filename,
                        overwrite: true,
                        width: '1000px', //这里指定了宽度，同样可以修改
                        format: 'jpg',
                        quality: 90 //图片质量不再修改，以免失真
                    },
                    function(e) {
                        callback(e.target);
                    },
                    function(err) {

                    })
            },
            // 跳转到实名认证
            toBrushFaceAuthen(){
                this.$push({
                    path: '/brushFaceAuthen'
                })
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

                if( this.loginSuccess ){
                    this.$replace({
                        name: 'My'
                    }, false)
                }
            },
            // 关闭加载层
            closeLoading(){
                this.loadingVisible = false
            },

            // 打开错误提示弹窗
            openRealAuthenErrorDig(errorMsg){
                this.errorMsg = errorMsg
                this.realAuthenErrorDig = true
            },
            // 监听错误弹窗事件
            realAuthenErrorDigClose(){
                this.realAuthenErrorDig = false
            },
            // 清空照片重新上传
            toAgainAuthen(){
                this.realAuthenErrorDig = false
                this.src1 = ''
                this.src11 = ''
                this.src2 = ''
                this.src22 = ''
            },

        }


    }
</script>
<style scoped>
    .realName_txt1{
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.55rem;
        margin-top: 0.2rem;
    }
    .realName_txt2{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.35rem;
        padding-top: 0.1rem;
    }
    .bg_front_icon{
        width: 5rem;
        height: 3.2rem;
        background: url("../static/images/video_icon/idCard_before.png")no-repeat center center /cover;
        margin-top: 0.5rem;
        position: relative;
    }
    .bg_front_icon:after{
        position: absolute;
        width: 100%;
        height: 0.55rem;
        content: '上传身份证正面照片';
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.55rem;
        text-align: center;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .bg_back_icon{
        width: 5rem;
        height: 3.2rem;
        background: url("../static/images/video_icon/idCard_after.png")no-repeat center center /cover;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        position: relative;
    }
    .bg_back_icon:after{
        position: absolute;
        width: 100%;
        height: 0.55rem;
        content: '上传身份证背面照片';
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.55rem;
        text-align: center;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .front_img{
        width: 5rem;
        height: auto;
        margin: 0.5rem auto 0;
        display: block;
    }
    .button{
        width: 6.9rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .wrapper{
        overflow-y: scroll;
    }
    .wrapper_height{
        height: auto;

    }

    /*错误样式*/
    .DIALOG_TITLE_ERROR{
        padding: 0.85rem 0 0.95rem;
    }
    .realAuthenIcon{
        margin: 0 auto;
        width: 1.4rem;
        height: 1.4rem;
        background: url("../static/images/video_icon/error_icon.png")no-repeat center center / cover;
    }
    .realAuthentxt1{
        font-size: 0.36rem;
        color: #333;
        line-height: 0.45rem;
        font-weight: bold;
        padding: 0.5rem 0 0.2rem;
    }
    .realAuthentxt2{
        font-size: 0.26rem;
        color: #666;
        line-height: 0.45rem;
    }
    .realAuthenBtn{
        width: 3rem;
        height: 0.9rem;
        background: #203395;
        font-size: 0.3rem;
        color: #FEFEFE;
        line-height: 0.9rem;
        border-radius: 50rem;
        margin: 0.7rem auto 0;
    }
</style>
