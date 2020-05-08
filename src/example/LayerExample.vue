<template>
    <div class="page">
        <div class="btn" @click="openComponentDialog">组件级调用layer dialog</div>
        <div class="btn" @click="openComponentToast">组件级调用layer toast</div>
        <div class="btn" @click="openComponentCustom">组件级调用layer 自定义</div>
        <div class="btn" @click="openDialog">方法级调用layer dialog</div>
        <div class="btn" @click="openToast">方法级调用layer toast</div>
        <div class="btn" @click="openLayer">方法级调用layer 自定义</div>

        <!--组件级调用 dialog-->
        <nlayer
                :visible="dialogVisible"
                @close="closeAll"
                class="ANIMATITE_SCALE_TO_BIG NDIALOG"
                width="80%"
        >
            <div class='DIALOG'>
                <div class='DIALOG_TITLE'>
                    <div>
                        标题标题
                    </div>
                </div>
                <div class='DIALOG_CONTENT'>
                    <div>
                        会员卡内容会员卡内容会员卡内容会员卡内容会员卡内容会员卡内容会员卡内容
                    </div>
                </div>
                <div class='DIALOG_BTNS clearfix'>
                    <div
                            class='DIALOG_BTN DEFAULT'
                            @click='closeAll'
                    >不用了</div>
                    <div
                            class='DIALOG_BTN CONFIRM'
                            @click='closeAll'
                    >确定</div>
                </div>
            </div>
        </nlayer>

        <!--组件级调用 toast-->
        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1500"
                :visible="toastVisible"
                @close="closeAll"
                class="ANIMATITE_SCALE_TO_BIG NTOAST"
        >
            <div class='TOAST'> 请输入您的手机号 </div>
        </nlayer>

        <!--组件级调用自定义layer-->
        <nlayer
                :visible="layerVisible"
                @close="closeAll"
        >
            <div>组件级调用自定义layer</div>
        </nlayer>
    </div>


</template>

<script>
    import Nlayer from 'components/Nlayer'

    export default {
        components: {
            Nlayer
        },
        data(){
            return {
                dialogVisible: false,
                toastVisible: false,
                layerVisible: false
            }
        },
        methods: {
            // 打开组件级dialog
            openComponentDialog(){
                this.dialogVisible = true
            },
            // 打开组件级toast
            openComponentToast(){
                this.toastVisible = true
            },
            // 打开组件级自定义layer
            openComponentCustom(){
                this.layerVisible = true
            },
            // 关闭所有组件级layer
            closeAll(){
                this.dialogVisible = false
                this.toastVisible = false
                this.layerVisible = false
            },
            // 打开方法级dialog
            openDialog(){
                const dialog = this.$dialog({
                    title: 'dialog标题',
                    content: 'dialog内容',
                    width: '80%',
                    btns: [
                        {
                            content: 'no',
                            handle(){
                                dialog.close()
                            }
                        },
                        {
                            content: 'yes',
                            handle(){
                                console.log('点击yes')
                            }
                        }
                    ]
                })

                dialog.open()
            },
            // 打开方法级toast
            openToast(){
                const toast = this.$toast({
                    content: '请输入您的手机号'
                })

                toast.open()
            },
            // 打开方法级layer 自定义
            openLayer(){
                const h = this.$createElement
                const content = h('div', {
                    class: 'DIALOG'
                },[
                    h('div', {class: 'DIALOG_TITLE'}, '标题标题111'),
                    h('div', {class: 'DIALOG_CONTENT'}, '会员卡内容会员卡内容会员卡内容会员卡内容会员卡内容会员卡内容会员卡内容'),
                    h('div', {class: 'DIALOG_BTNS clearfix'}, [
                        h('div', {
                            class: 'DIALOG_BTN DEFAULT',
                            on: {
                                click: () => {
                                    layer.close()
                                }
                            }
                        }, '不用了'),
                        h('div', {
                            class: 'DIALOG_BTN CONFIRM',
                        }, '确定')
                    ]),
                ])

                const layer = this.$nlayer({
                    content,
                    width: '80%'
                })

                layer.open()
            }
        }
    }
</script>

<style scoped>
    .btn{
        width: 95%; line-height: 0.9rem;
        background: #FF4646;
        color: #fff;
        font-size: 0.32rem;
        -webkit-border-radius: 0.05rem;
        -moz-border-radius: 0.05rem;
        border-radius: 0.05rem;
        margin: 0.2rem auto;
        text-align: center;
    }
</style>
