<template>
    <div class="page">
		<div class="content">
			<router-view></router-view>
		</div>
		<tabbars></tabbars>
    </div>
</template>

<script>
    import Tabbars from 'components/Tabbars'

    export default {
		name: "Shop",
        components: {
            Tabbars
        }
    }
</script>

<style scoped>
	.page{
		background: #f3f3f3;
	}
	.content{
		position: fixed;
		top: 0;
		bottom: 1.1rem;
		left: 0;
		right: 0;
		z-index: 1;
	}

	body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, tdbody {
		margin: 0;
		padding: 0;
		font-family: "Microsoft YaHei";
		background: #f5f5f5;
	}
	.bgcoloreee{background: #f5f5f5; }
	*{ box-sizing: border-box;}
	/* -webkit-overflow-scrolling: touch; 解决 IOS 系统 上下滑动不流畅问题 */
	html{font-size: 100px;-webkit-overflow-scrolling: touch;}
	input::-webkit-input-placeholder{color:#ccc;}
	input,textarea,button{color:inherit; -webkit-appearance: none; background: transparent; border:none; outline: none; font: inherit; vertical-align: middle;}
	button{ cursor: pointer;}
	ul,li{list-style: none;}
	h1.no,h2.no,h3.no,h4.no,h5.no,h6.no{font-weight: normal; font: inherit; color: inherit;}
	img{border: none;vertical-align: middle; max-width: 100%;}
	a {
		color: inherit;
		text-decoration: none;
	}

	page {
		background: #f2f2f2;
		font-size: 14px;
	}

	.all {
		box-sizing: border-box;
	}

	.L {
		float: left;
	}

	.R {
		float: right;
	}

	.clear:after {
		display: block;
		clear: both;
		content: '';
	}

	.table {
		display: table;
		width: 100%;
	}

	.table .td {
		display: table-cell;
		max-width: 0;
		vertical-align: middle;
	}
	.block{display: block;}
	.inblock {
		display: inline-block;
		vertical-align: middle;
	}

	.Hide {
		display: none !important;
	}

	.Show {
		display: block !important;
	}

	.txt_left {
		text-align: left;
	}

	.txt_center {
		text-align: center;
	}

	.txt_right {
		text-align: right;
	}

	.ver_top {
		vertical-align: top !important;
	}

	.ver_mid {
		vertical-align: middle !important;
	}

	.ver_bot {
		vertical-align: bottom !important;
	}

	.txt_one {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.txt_two {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.txt_h2 {
		line-height: 1.5;
		height: 3em;
	}

	.txt_xx {
		text-decoration: line-through;
	}

	.line1 {
		line-height: 1;
	}

	.border_b {
		border-bottom: 1px solid #f2f2f2;
	}

	.border_t {
		border-top: 1px solid #f2f2f2;
	}

	.h100 {
		height: 100%;
	}

	.col1 {
		width: 8.333333333333333%;
	}

	.col2 {
		width: 16.66666666666667%;
	}

	.col3 {
		width: 25%;
	}

	.col4 {
		width: 33.33333333333333%;
	}

	.col5 {
		width: 41.66666666666667%;
	}

	.col6 {
		width: 50%;
	}

	.col7 {
		width: 58.33333333333333%;
	}

	.col8 {
		width: 66.66666666666666%;
	}

	.col9 {
		width: 75%;
	}

	.col10 {
		width: 83.33333333333333%;
	}

	.col11 {
		width: 91.66666666666666%;
	}

	.col12 {
		width: 100%;
	}

	.col13 {
		width: 20%;
	}

	.col14 {
		width: 12.5%;
	}

	.f0 {
		font-size: 0;
	}

	.f8 {
		font-size: 0.08rem;
	}

	.f10 {
		font-size:0.10rem;
	}

	.f11 {
		font-size: 0.11rem;
	}

	.f12 {
		font-size: 0.12rem;
	}

	.f13 {
		font-size: 0.13rem;
	}

	.f14 {
		font-size: 0.14rem;
	}

	.f15 {
		font-size: 0.15rem;
	}

	.f16 {
		font-size: 0.16rem;
	}

	.f18 {
		font-size: 0.18rem;
	}

	.f20 {
		font-size: 0.20rem;
	}

	.f22 {
		font-size: 0.22rem;
	}

	.f24 {
		font-size: 0.24rem;
	}

	.f26 {
		font-size: 0.26rem;
	}

	.f28 {
		font-size: 0.28rem;
	}

	.f30 {
		font-size: 0.30rem;
	}

	.f34 {
		font-size: 0.34rem;
	}

	.f36 {
		font-size: 0.36rem;
	}

	.f40 {
		font-size: 0.40rem;
	}

	.f50 {
		font-size: 0.50rem;
	}

	.pad_l40 {
		padding-left: 40px;
	}

	.pad_l10 {
		padding-left: 10px;
	}

	.pad_r10 {
		padding-right: 10px;
	}

	.pad_t10 {
		padding-top: 10px;
	}

	.pad_b10 {
		padding-bottom: 10px;
	}

	.pad_l15 {
		padding-left: 15px;
	}

	.pad_r15 {
		padding-right: 15px;
	}

	.pad_b15 {
		padding-bottom: 15px;
	}

	.pad_t15 {
		padding-top: 15px;
	}

	.pad_b15 {
		padding-bottom: 15px;
	}

	.pad_t20 {
		padding-top: 20px;
	}

	.pad_15 {
		padding: 15px;
	}

	.pad_10 {
		padding: 10px;
	}

	.pad_5 {
		padding: 5px;
	}

	.pad_1 {
		padding: 1px;
	}

	.pad_t5 {
		padding-top: 5px;
	}

	.pad_l5 {
		padding-left: 5px;
	}

	.pad_b5 {
		padding-bottom: 5px;
	}

	.mar_b10 {
		margin-bottom: 10px;
	}

	.mar_t10 {
		margin-top: 10px;
	}

	.mar_l10 {
		margin-left: 10px;
	}

	.mar_r10 {
		margin-right: 10px;
	}

	.mar_b5 {
		margin-bottom: 5px;
	}

	.mar_r5 {
		margin-right: 5px;
	}

	.mar_l5 {
		margin-left: 5px;
	}

	.img_box {
		position: relative;
	}

	.img_cnt {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
	}

	.img_cnt .img {
		width: 100%;
		height: 100%;
	}

	.img_big1 {
		padding-bottom: 100%;
	}

	.img_big2 {
		padding-bottom: 44%;
	}

	.img_big3 {
		padding-bottom: 30%;
	}

	.mar_t1 {
		margin-top: -2px;
	}

	.bgf5f {
		background: #f5f5f5;
	}

	.bgfff {
		background: #fff;
	}

	.bgeee {
		background: #ddd;
	}

	.czt {
		color: #ff0036;
	}

	.green {
		color: #6abc3c;
	}

	.c666 {
		color: #666;
	}

	.c353 {
		color: #353535;
	}

	.c999 {
		color: #999;
	}

	.cfff {
		color: #fff;
	}

	.cred {
		color: #f00;
	}

	.com_btn1 {
		display: inline-block;
		padding: 5px 15px 6px 15px;
		border: 1px solid #ff0036;
		color: #ff0036;
		text-align: center;
		border-radius: 20px;
	}

	.com_btn2 {
		display: inline-block;
		border-radius: 4px;
		padding: 4px 10px 5px 10px;
		border: 1px solid #dcdcdc;
		line-height: 1;
	}

	.com_btn3 {
		display: inline-block;
		border-radius: 4px;
		padding: 5px 10px 5px 10px;
		border: 1px solid #ff0036;
		color: #ff0036;
		line-height: 1;
	}
	.com_btn4 {
		display: inline-block;
		border-radius: 4px;
		padding: 10px 10px 10px 10px;
		border: 1px solid #ff0036;
		background: #ff0036;
		color: #ffffff;
		line-height: 1;
	}

	.wrem4 {
		width: 4.2em;
	}

	.wrem3 {
		width: 3.2em;
	}

	.wrem5 {
		width: 5.2em;
	}

	.wrem6 {
		width: 6.2em;
	}

	.wrem10 {
		width: 10.2em;
	}

	.comjt {
		width: 18px;
	}

	.comjt .img {
		width: 18px;
		height: 18px;
	}

	.com_obtn {
		background: #ff0036;
		color: #fff;
		padding: 5px 0px;
		border-radius: 20px;
		width: 6em;
		text-align: center;
	}

	.com_obtn.gray {
		background: #dcdcdc;
	}

	.com_obtn.white {
		background: #ffffff;
		color: #ff0036;
		border: 1px solid #ff0036;
	}

	.table_x {
		display: table;
	}

	.table_x .td {
		display: table-cell;
	}

	.h100 {
		height: 100%;
	}


	/*主体*/
	.body_box{ position: absolute; left: 0px; top: 0px; bottom: 0px; right: 0; overflow: hidden;}
	.g_wrap{ width: 100%; max-width: 1024px;}
	.content_box{position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow-y: auto;}
	.content_box.hastop{padding-top: 0.50rem;}
	.content_box.hasbottom{padding-bottom: 0.55rem;}
	.content_box.hastab{padding-top: 85px;}
	.content_box.hasoperate{padding-bottom: 105px;}
	.content_box.no_has{padding-bottom: 50px;}

	.spiltHeader{ height: 0.45rem;}
	.spiltfooter{ height: 55px;}
	.qzbgfff{ position: absolute; bottom: 0; background: #ffffff;  left:0;  right:0; top: 0; padding-top: 0.45rem; z-index: 1; overflow-y: auto}



	.top_menuIcon{ position: relative}
	.top_menuIcon .iconImg{ height: 6px;}
	.top_menu{  position: absolute; right: 6px;  top:0.4rem; background: rgba(0,0,0,0.8); border-radius:6px; margin-right: -10px; margin-left: -50px;}
	.top_menu .pad_10{ border-bottom: 1px solid #4e4e4e; padding: 12px 15px;}
	.top_menu .pad_10:last-child{ border-bottom: none;}
	.top_menu img{ width: 24px;  height:24px; margin-right: 5px;}
	/*.top_menuIcon:hover .top_menu{ display: block}*/
	.topshow{ overflow: visible !important;}
	.top_menu:before{position: absolute; top: -0.09rem; right: 8px; border-left: 0.1rem solid transparent; border-right: 0.1rem solid transparent;  border-bottom: 0.1rem solid #000; content: ""}


	@media only screen and (min-width: 400px) {
		html {
			font-size: 106.66666666px !important;
		}
	}
	@media only screen and (min-width: 414px) {
		html {
			font-size: 110.4px !important;
		}
	}
	@media only screen and (min-width: 480px) {
		html {
			font-size: 128px !important;
		}

		.kind_scroll,.cart_top,.oprate_bottom,.top_tab,.ptop,.search_top,.sort_view,.body_box{ width: 480px; left: 50% !important; margin-left:-240px; }
		#shopIndex .kind_scroll,#shopIndex .sort_view{ width: 100%; left:0; margin-left: 0}

		.mint-tabbar.is-fixed{width: 480px; left: 50% !important; margin-left:-240px;}
		.mint-header{width: 480px; left: 50% !important; margin-left:-240px;}

		.product_wrap_2{ width: 150px !important;}
		.product_img_info_2{width: 150px !important; height: 150px !important;}

	}
	@media only screen and (min-width: 640px) {
		html {
			font-size: 148px !important;
		}

		.kind_scroll,.cart_top,.oprate_bottom,.top_tab,.ptop,.search_top,.sort_view,.body_box{ width: 640px; left: 50% !important; margin-left:-320px; }

		#shopIndex .kind_scroll,#shopIndex .sort_view{ width: 100%; left:0; margin-left: 0}

		.mint-tabbar.is-fixed{width: 640px; left: 50% !important; margin-left:-320px;}
		.mint-header{width: 640px; left: 50% !important; margin-left:-320px;}

		.btn_img_info{ width:60px !important; height:60px !important;}

		.product_wrap_2{ width: 200px !important;}
		.product_img_info_2{width: 200px !important; height: 200px !important;}
		.kind_scroll .td{min-width: 7.5em !important;}

		.top_menuIcon .iconImg{ height: 8px;}

	}
	.splitBottom{
		margin-bottom: 0.5rem !important;
	}

	.oprate_bottom{ margin-bottom: -1px !important;}
	input{ padding-top: 3px !important; padding-bottom: 3px !important;}

	/*@media only screen and (min-width: 480px) {*/
	/*html {*/
	/*font-size: 128px !important;*/
	/*}*/
	/*}*/

	.orderNumBox{position: relative;}
	.orderNumBox .orderNum{ position: absolute; font-size: 8px; color: #ff0036; right: -8px; top: -3px; line-height: 18px; text-align: center; border-radius:50%; width: 20px; background: #ffffff;  height:20px; border:1px solid #ff0036;}

</style>
