<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">更换手机号</p>
        </div>
        <div class="wrapper">
        	<div class="changeTel_list">
        		<div class="changeTel_item clearfix">
        			<p class="changeTel_item_txt fl">手机号</p>
        			<p class="changeTel_item_txt fr">{{phone | telFormat}}</p>
        		</div>
        	</div>
			<div
                class="button LONGBTN BUTTON_SHADOW"
                @click="toRealChangeTel"
        	>更换手机号</div>
        </div>

    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'

    export default {
        name: "ChangeTel",
        data () {
            return {
                
            }
        },
        mounted(){
            // 判断是否有数据
            this.isLogin()
        },
        computed:{
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
            phone(){
            	return this.userinfo.phone
            }
        },
        methods: {
            ...mapActions(['setUserinfo']),
            ...mapGetters(['getUserinfo']),
            // 检测用户是否登录
            isLogin(){
                if( this.userinfo ){
                    
                } else {
                    // 跳转到登录页面
                    this.$router.replace({
                        path: '/login'
                    })

                }
            },
            // 去更换手机号的页面
            toRealChangeTel(){
            	this.$push({
                    path: '/realChangeTel'
                })
            },
        }
    }
</script>

<style scoped>
	.page{
		background: #F5F5F5;
	}
	.changeTel_list{
		background: #fff;
	}
	.changeTel_item{
		padding: 0 0.35rem;
	}
	.changeTel_item_txt{
		font-size: 0.26rem;
		color: #333;
		line-height: 1rem;
	}
	.button{
		width: 6.9rem;
		margin-top: 1rem;
	}
</style>