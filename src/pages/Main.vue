<template>
    <div class="page">
		<div class="content">
			<router-view></router-view>
		</div>
		<tabbar></tabbar>
    </div>
</template>

<script>
    import Tabbar from 'components/Tabbar'

    export default {
		name: "Main",
        components: {
            Tabbar
        }
    }
</script>

<style scoped>
	.page{
		background: #fafafa;
	}
	.content{
		position: fixed;
		top: 0;
		bottom: 1.1rem;
		left: 0;
		right: 0;
		z-index: 1;
	}
</style>
