<template>
    <div class="page">
        <div class="header">
            <div class="HEADER">
                <div class="HEADER_BACK" @click="this.$back"></div>
            </div>
            <div class="logo mauto">
                <img src="../static/images/forget/comon_forget_logo.png">
            </div>
        </div>
        <div class="content">
            <div class="tabs mauto tcenter">
                <router-link replace tag="div" class="tab" :to="{ path:'/register/registerTabTel',query:{from:from}}">{{$t('register.register_mobile')}}</router-link>
                <router-link replace tag="div" class="tab" :to="{ path:'/register/registerTabEmail',query:{from:from}}">{{$t('register.register_mailbox')}}</router-link>
            </div>
            <div class="router-view">
                <router-view></router-view>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "Register",
        computed: {
            from() {
                return this.$route.params.from
            },
        }
    }
</script>

<style scoped>
    .header{
        height: 3rem;
        background: url("../static/images/forget/common_forget_bg.png") no-repeat center center / cover;
        display: flex;
        align-items: center;
    }
    .HEADER{
        background: none;
        z-index: 1;
    }
    .logo{
        width: 4.4rem;
    }
    .logo img{
        display: block;
        width: 100%;
        height: auto;
    }

    .tabs{
        width: 5.5rem;
        display: flex;
        margin-top: .55rem;
    }
    .tab{
        flex: 1;
        font-size: .3rem;
        color: #666;
        line-height: .7rem;
        border-bottom: .04rem solid #ccc;
    }
    .tab.active{
        color: #e08222!important;
        border-bottom: .04rem solid #e08222;
    }
</style>
