<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('share.share_scan')}}</p>
            <div class="HEADER_RIGHT pics" @click="openGallery">{{$t('share.share_album')}}</div>
        </div>
        <div class="wrapper">
            <div id="area"></div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "Scan",
        data(){
            return {
                scan: null
            }
        },
        mounted(){
            if (window.plus) {
                this.openScan()
            } else {
                document.addEventListener('plusready', this.openScan, false)
            }
        },
        destroyed(){
            this.scan && this.scan.close()
        },
        methods: {
            ...mapMutations({
                'setScanData': 'SET_SCANDATA'
            }),
            // 打开相册
            openGallery(){
                if (window.plus && this.scan) {
                    plus.gallery.pick((path) => {
                        plus.barcode.scan(path, this.scan.onmarked, (error) => {
                            plus.nativeUI.alert(this.$t('share.share_img'))
                        })
                    }, (err) => {
                        console.log('Failed: '+err.message)
                    })
                }
            },
            // 开启二维码扫描
            openScan(){
                this.scan = new plus.barcode.Barcode('area')
                this.scan.onmarked = (type, result) => {
                    result = result.replace(/\n/g, '')

                    this.scan.close()
                    this.setScanData(result)
                    this.$back()
                }

                this.scan.start()
            }
        }
    }
</script>

<style scoped>
    #area{
        width: 100%;
        height: 100%;
    }
    .pics{
        font-size: .3rem;
        color: #fff;
        width: auto;
    }
</style>