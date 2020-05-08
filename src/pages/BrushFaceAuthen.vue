<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">实名认证</p>
        </div>
        <div class="wrapper">
            <div class="wrapper_height">
                <p class="realName_txt1 tcenter">刷脸认证</p>
                <p class="realName_txt2 tcenter">请确保是 <span style="color: red">{{Name}}</span> 本人</p>
                <p class="realName_txt4 tcenter">请点击头像框进行刷脸拍照验证！</p>
                <div class="bg_icon mauto"
                    @click="toPick"
                     v-if="src==''"
                ></div>
                <div class="bg_img mauto" v-if="src!=''"
                     @click="toPick"
                >
                    <img :src="src" alt="" class="">
                </div>

                <p class="realName_txt3 tcenter" v-if="src==''">平视手机 正对光源</p>
                <div class="button LONGBTN BUTTON_SHADOW"
                    @click="uploadFaceImage"
                >开始验证</div>
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
                    <p class="realAuthentxt2">{{tipsError}}</p>
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
        name: "BrushFaceAuthen",
        components: {
            Nlayer
        },
        data () {
            return {
                src:'',
                srcc:'',
                tips: '',
                tipsError:'',
                tipsVisible: false,
                loadingVisible: false,
                baseURL,
                realAuthenErrorDig:false
            }
        },
        mounted(){


        },
        computed:{
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
            Name(){
                return this.$route.query.name
            },
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 检测
            checkFace(){
                if(!this.src){
                    this.showTips('点击图片拍照')
                    return false
                }
                return true
            },
            // 上传人脸正面照
            uploadFaceImage(){
                console.log('开始验证')
                if(!this.checkFace()){
                    return
                }

                // 打开加载中
                this.showLoading()

                var url = this.baseURL+'app/aip/personVerify'
                var data = [
                    {
                        type: 'file',
                        name: 'image',
                        value: this.src
                    },
                    {
                        type: 'string',
                        name: 'imageType',
                        value: 'BASE64'
                    },
                    {
                        type: 'string',
                        name: 'userId',
                        value: this.userId.toString()
                    }
                ]

                this.upload(url, 'post', data, (res, state) => {
                    this.closeLoading()
                    console.log(JSON.stringify(data))
                    console.log(state)
                    if( state == '200' ){
                        var result = JSON.parse(res.responseText)

                        if(result.returnCode == 1){
                            this.showTips(result.message)
                            // this.$push({
                            //     path: '/finishAuthen'
                            // })
                            localStorage.setItem("certification",1);
                            this.$router.replace({
                                path: '/finishAuthen',
                                query: {
                                    showCode:1
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
            toPick(){
                if (window.plus){
                    var cmr = plus.camera.getCamera()
                    cmr.captureImage((path) => {
                        plus.io.resolveLocalFileSystemURL(path, (entry) => {
                            var path = entry.toLocalURL()

                            this.resize(path, (src)=>{
                                this.setPath('src', src)
                            })

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
            openRealAuthenErrorDig(msg){
            	this.tipsError = msg
                this.realAuthenErrorDig = true
            },
            // 监听错误弹窗事件
            realAuthenErrorDigClose(){
                this.realAuthenErrorDig = false
            },
            // 清空照片重新上传
            toAgainAuthen(){
                this.realAuthenErrorDig = false
                this.src = ''
                this.srcc = ''
                // 跳转到第一步
                this.$router.replace({
                    path: '/realNameAuthen'
                })

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
    }
    .bg_icon{
        margin-top: 0.15rem;
        width: 5rem;
        height: 5rem;
        background: url("../static/images/video_icon/realName_icon.png")no-repeat center center / cover;
    }
    .bg_img{
        margin-top: 1rem;
        width: 5rem;
        height: auto;
    }
    .realName_list{
        padding: 0.15rem 0.3rem 0;
    }
    .realName_txt3{
        font-size: 0.3rem;
        color: #203395;
        line-height: 1rem;
        margin-top: 1.1rem;
    }
    .realName_txt4{
    	font-size: 0.3rem;
        color: #E72525;
        line-height: 0.5rem;
        margin-top: 0.5rem;
    }
    .button{
        width: 6.9rem;
        margin-top: 1rem;
    }

    .camera_outer {
        position: relative;
        overflow: hidden;
        background: url("../static/images/video_icon/realName_icon.png") no-repeat center;
        background-size: 100%;
    }
    .btn_camera{
        position: absolute;
        bottom: 4px;
        left: 0;
        right: 0;
        height: 50px;
        background-color: rgba(0,0,0,0.3);
        line-height: 50px;
        text-align: center;
        color: #ffffff;
    }
    .bg_r_img{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
    }
    .img_bg_camera {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .img_btn_camera {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
        color: #ffffff;
    }
    .loding_img{
        width: 50px;
        height: 50px;
    }
    .testTracking {
        height: 1rem;
        width: 100%;
        position: relative;
    }
    video, canvas {
        top: 0;
    }
    .buttonDiv {
        bottom: 0.1rem;
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