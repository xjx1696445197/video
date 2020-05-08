<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('backupsAuxiliaries.backupsAuxiliaries_backups')}}</p>
        </div>

        <div class="wrapper">
            <div class="content">
                <div class="pic">
                    <img src="../static/images/bg/auxiliaries_bg.png">
                </div>
                <p class="txt1 tcenter">{{$t('backupsAuxiliaries.backupsAuxiliaries_getAuxiliaries')}}</p>
                <div class="txts">
                    <p class="txt2">{{$t('backupsAuxiliaries.backupsAuxiliaries_tips')}}</p>
                    <div class="fonts">
                        <p class="txt3">{{$t('backupsAuxiliaries.backupsAuxiliaries_tipsOne')}}</p>
                        <p class="txt3">{{$t('backupsAuxiliaries.backupsAuxiliaries_tipstwo')}}</p>
                    </div>
                </div>
                <div class="btns">
                    <div class="btn LONGBTN" @click="toExportMnemonicWord">{{$t('backupsAuxiliaries.backupsAuxiliaries_backupImmediately')}}</div>
                    <div class="btn LONGBTN" @click="toAsset">{{$t('backupsAuxiliaries.backupsAuxiliaries_laterBackup')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BackupMnemonicWord",
        methods: {
            // 去备份助记词页面
            toExportMnemonicWord(){
                this.$push({
                    path: '/exportMnemonicWord',
                    query: {
                        target: 'BackupMnemonicWord'
                    }
                })
            },
            // 去资产页面
            toAsset(){
                this.$router.go(-1)
                this.$replace({
                    path: '/asset',
                }, false)
            }
        }
    }
</script>

<style scoped>
    .content{
        padding: 1.5rem .95rem 0;
    }
    .pic img{
        display: block;
        width: 100%;
        height: auto;
    }
    .txt1{
        font-size: .26rem;
        color: #333;
        line-height: .5rem;
        margin-top: 0.45rem;
    }
    .txts{
        margin-top: 0.65rem;
        padding: 0 .05rem;
    }
    .txt2{
        font-size: .26rem;
        color: #333;
        line-height: .7rem;
        font-weight: bold;
        padding: 0 .25rem;
        position: relative;
    }
    .txt2:after{
        position: absolute;
        content: '';
        width: .1rem;
        height: .1rem;
        background: #333;
        top: 50%;
        transform: translateY(-50%);
        left: .08rem;
        border-radius: 100%;
    }
    .txt3{
        font-size: .26rem;
        color: #333;
        line-height: .5rem;
    }
    .btn{
        margin-top: 0.45rem;
    }
</style>