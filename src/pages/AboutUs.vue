<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('aboutUs.aboutUs_title')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="aboutUs_top">
                    <div class="aboutUs_logo"></div>
                    <p class="aboutUs_txt1" style="color: #203395;font-size:.34rem;font-weight: bold;font-style:italic">ChmvToken</p>
                    <p class="aboutUs_txt2" style="font-weight: bold;font-size: .26rem">{{version}}</p>
                </div>
<div style="background: #fafafa;height: .2rem"></div>
                <div class="aboutUs_lists">
                    <div class="LIST ARROW LAST_NO_BORDER">
                        <div class="ITEM" @click="go" data-path="/userAgreement">
                            <p class="ITEM_TXT">{{$t('aboutUs.aboutUs_userProtocol')}}</p>
                        </div>
                        <div class="ITEM" @click="go" data-path="/privacyAgreement">
                            <p class="ITEM_TXT">{{$t('aboutUs.aboutUs_policy')}}</p>
                        </div>
                    </div>

<!--                    <div class="LIST">-->
<!--                        <div class="ITEM">-->
<!--                            <p class="ITEM_TXT">{{$t('aboutUs.aboutUs_officialWebsite')}}</p>-->
<!--                            <p class="ITEM_TXT">http:www.chmc.top</p>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {version} from "@/config";
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';
    export default {
        name: "AboutUs",
        data() {
            return {
                version,
                userdata:""
            }
        },
        created(){
            var that=this
            jsonAjax.get(urlUtil.getApiUrl("findAboutUs"), {}, function (result) {
                that.userdata=result.resultData
                console.log(that.userdata)
            });

        },
        methods: {
            go(e) {
                const {
                    path
                } = e.currentTarget.dataset

                this.$push({path})
            }
        }
    }
</script>

<style scoped>
    .content {
        padding-top: .24rem;
    }

    .aboutUs_top {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        padding: .5rem 0;
    }

    .aboutUs_logo {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: .35rem;
        box-shadow: 0 0.05rem 0.15rem rgba(102, 102, 102, .3);
        background: url("../static/images/start-up.png") no-repeat center center / cover;
    }

    .aboutUs_txt1 {
        font-size: .4rem;
        color: #333;
        line-height: .5rem;
        margin-top: 0.3rem;
    }

    .aboutUs_txt2 {
        font-size: .26rem;
        color: #333;
        line-height: .45rem;
        margin-top: 0.1rem;
    }

    .aboutUs_lists {
        padding: 0 .3rem;
    }

    .ITEM {
        justify-content: space-between;
        border-bottom: 1px solid #eee !important;
    }
.page{
    background: white;
}
</style>
