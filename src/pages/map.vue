

<template>
	<div style="overflow: scroll;height: 100%">
		<div class="HEADER">
		    <div class="HEADER_BACK" @click="this.$back"></div>
		    <p class="HEADER_TITLE">代理查询</p>
		    <div class="posiright" @click="search"><img src="../static/images/video_icon/icon_cx.png"></div>
		</div>
		<div id="myChartChina" style="width:100%; height:7.9rem;background: #f5f5f5;"></div>
		<div class="pmap" v-if="judge">
			<p>代理详情</p>
			<div>
				<span>代理省份：</span>
				<span>{{mapname}}</span>
			</div>
			<div>
				<span>代理昵称：</span>
				<span v-if='getberNum.result.agentName==null'>无</span>
				<span v-else>{{getberNum.result.agentName}}</span>
			</div>
			<div>
				<span>市代人数：</span>
				<span>{{getberNum.result.cityAgentNum}}</span>
			</div>
			<div>
				<span>区（县）代人数：</span>
				<span>{{getberNum.result.countyAgentNum}}</span>
			</div>
<!--			<div>-->
<!--				<span>省内会员人数：</span>-->
<!--				<span>{{getberNum.result.vipNum}}</span>-->
<!--			</div>-->
		</div>
		<div class="pmap" v-else>
			<p>代理详情</p>
			<div>
				<span>省代人数：</span>
				<span>{{Initialization.provinceNum}}</span>
			</div>
			<div>
				<span>市代人数：</span>
				<span>{{Initialization.cityNum}}</span>
			</div>
			<div>
				<span>区（县）代人数：</span>
				<span>{{Initialization.countyNum}}</span>
			</div>
<!--			<div>-->
<!--				<span>省内会员人数：</span>-->
<!--				<span>{{Initialization.memeberNum}}</span>-->
<!--			</div>-->
		</div>
	</div>
	</template>

  <script>
	  import urlUtil from '../util/apiUtil.js'
	  import jsonAjax from '../util/restUtil.js'
	  import echarts from 'echarts'
	  import Vue from 'vue'
	  Vue.prototype.$echarts = echarts
	  import china from '../static/100000.json'
	  echarts.registerMap('china', china)
	  import sss from '../static/js/china-main-city-map'
	  export default {
		  data() {
			  return {
				  getberNum:{result:{
						  cityAgentNum: 0,
						  countyAgentNum: 0,
						  vipNum: 0,
						  agentName: null
					  }},
				  judge:false,
				  mapname:"中国",
				  listd:'',
				  Initialization:''
			  }},
		  created(){
			  var that=this;
			  jsonAjax.get(urlUtil.getApiUrl('getProvinceState'), {}, function (result) {
				  that.listd=result.result
				  that.drawLine();
			  })
			  jsonAjax.get(urlUtil.getApiUrl('getAllAgentNum'), {}, function (result) {
				  that.Initialization=result.result
			  })
		  },
		 methods: {
			search(){
				this.$push({
					path: '/search'
				})
			},
	   drawLine(){
				var that=this;
	         // 基于准备好的dom，初始化echarts实例
	         var myChartContainer = document.getElementById('myChartChina');       
				 var resizeMyChartContainer = function(){
				   myChartContainer.style.width=(document.body.offsetWidth)+'px'//页面一半的大小
				 } 
				  resizeMyChartContainer();
	         var myChartChina = this.$echarts.init(myChartContainer); 
	  
	         function randomData() {  
	                 return Math.round(Math.random()*500);  
	             } 
	         // 绘制图表
	        var optionMap = {  
	               tooltip: { // 鼠标移到图里面的浮动提示框
	                                       enterable:true,
	                                       triggerOn: 'click',
	                                       // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
	                                   formatter (params, ticket, callback,id) {
										   that.mapname=params.name
										   console.log(params)
										   jsonAjax.get(urlUtil.getApiUrl('getMapMemberNum'), {name:params.data.fullName}, function (result) {
											  that.getberNum=result;
											   that.judge=true;
										   })
	                                       // params.data 就是series配置项中的data数据遍历
	                                       let localValue,
	                                           perf,
	                                           downloadSpeep,
	                                           usability,
	                                           point
	                                       if (params.data) {
	                                       	if (params.data.value==null) {
												localValue = 0

											}else {
												localValue = 1
											}
	                                           perf = params.data.perf
	                                           downloadSpeep = params.data.downloadSpeep
	                                           usability = params.data.usability
	                                           point = params.data.point
	                                       } else { // 为了防止没有定义数据的时候报错写的
	                                           localValue = 0
	                                           perf = 0
	                                           downloadSpeep = 0
	                                           usability = 0
	                                           point = 0
	                                       }
	                                           // const component = that.getHtmlComponent()
	                                           // console.log(that.getHtmlComponent())
	                                           // return component
	                                           // that.data=params.name;
	                         //               let htmlStr = `
	                         // <div style='font-size:14px;'> ${params.name}</div>
	                         // <p style='text-align:left;margin-top:5px;'>
	               	      //     代理人数：${localValue}<br/>
	                         //
	                         // </p>`
	                         //               return htmlStr

	                                       let url = window.location.href.split('#')[0] + '#/provincialmap?'+'&namemap='+params.name+'&fullname='+params.data.fullName
	                                       return `
	               <div style="display: flex;height:.7rem">
	               
	                          <div style='font-size:.22rem;height:.7rem;border-right: 1px solid #fff;padding-right:.2rem'> <p style="line-height:.35rem;height:.35rem;">省份: ${params.name}</p><p style='text-align:left;line-height:.35rem'>
	                                           省份代理: ${localValue}
	                                       </p></div>
	               
	               <p style="text-align: center;font-size:.22rem;margin-left: .15rem;line-height:.7rem;"><a href="${url}" style="color: white;">详情</a></p></div>`
	                                   },
	                                   backgroundColor:"rgba(32,51,149,0.7)",//提示标签背景颜色
	                                   // textStyle:{color:"#fff"} //提示标签字体颜色
	               
	                               },
	                  legend: {
	                             orient: 'vertical',
	                             left: 'left',
	                             data:['']
	                         },
	                  // visualMap: {
	                  //            min: 0,
	                  //            max: 1500,
	                  //            left: '10%',
	                  //            top: 'bottom',
	                  //            text: ['高','低'],
	                  //            calculable : false,
	                  //            color:['#fff','#fff']
	                  //        },   
	                  selectedMode: 'single',
					  // geo: { // 地理坐标系组件用于地图的绘制
					  //     map: 'china', // 表示中国地图
					  //     // roam: true, // 是否开启鼠标缩放和平移漫游
					  //     zoom: 1, // 当前视角的缩放比例（地图的放大比例）
					  // },
	                  series : [                         
	                             {
	                               name: '', 
	                               type: 'map',
	                               mapType: 'china',
									 zoom: 1.2,
									 itemStyle: {
	                                     normal:{
											 areaColor: '#fff',
											 borderColor: '#bbbbbb',
											 borderWidth: 1,
	                                     },
	                                     emphasis:{
	                                         shadowOffsetX: 0,
	                                         shadowOffsetY: 40,
	                                         shadowBlur: 20,
	                                         borderWidth: 0,
	                                         shadowColor: 'rgba(0, 0, 0, 0)',
											 areaColor: '#203395' ,// hover效果
											 label:{
												 textStyle: {
													 fontWeight: 'bold',
													 color: '#fff' }
											 }
	                                     },

	                                 },
	                                 showLegendSymbol: true,
	                                 label: {
	                                     normal: {
	                                         show: true	,
											 textStyle: {
												 fontSize: 8

											 },
	                                     emphasis: {
	                                         show: true,

	                                     },
										 areaStyle: {
											 color: '#90c31d',//选中状态的地图板块颜色

										 },
										}
	                                 },
	                                 data:that.listd
	                             }
	                         ]
	                }
	      
	         myChartChina.setOption(optionMap);
	         window.onresize=function(){
	             resizeMyChartContainer();
	             myChartChina.resize();
	         }
	       }}
		   }
  </script>
  <style scoped>
      .posiright{
          position:absolute;
          right: .3rem;
		  top: .2rem;
      }
	  .posiright img{
		  width: .4rem;
		  height: .4rem;
	  }
	  .pmap{
		  padding: 0 .3rem;
	  }
	  .pmap p{
		  height: 1rem;
		  border-bottom: 1px solid #EEEEEE;
		  line-height: 1rem;
		  font-size: .26rem;
		  font-weight: bold;
	  }
	   .pmap  div{
		   display: flex;
		   width: 100%;
		   color: #333;
		   font-size: .26rem;
		   justify-content: space-between;
		   line-height: .7rem;
	   }
  </style>
 