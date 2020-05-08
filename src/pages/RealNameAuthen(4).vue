<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">实名认证</p>
        </div>
        <div class="wrapper">
        	<div class="realName_top">
        		<p class="realName_txt2 tcenter">请如实填写身份信息</p>
	            <p class="realName_txt2 tcenter">仅用于核实真实身份，保障您的信息安全</p>
	            <p class="realName_txt2 tcenter">通过后信息不可更改</p>
        	</div>
            
            <div class="FORM">
                <div class="realName_list">
                	<!--证件类型-->
                    <div class="realName_item">                        
                        <div class="INPUT_REAL clearfix">
                        	<p class="realName_txt3 fl">证件类型</p>
                            <select name="public-choice" v-model="couponSelected" @change="getCouponSelected" class="realName_select realName_select2 fr">                                        
							    <option :value="coupon.id" v-for="coupon in selectList" >{{coupon.name}}</option>                                    
							</select>
                        </div>
                    </div>
                	<!--姓名-->
                    <div class="realName_item">                        
                        <div class="INPUT_REAL">
                        	<p class="realName_txt3">姓名</p>
                            <input type="text" class="realName_input"
                                   v-validate:username="validateOtions.username"
                                   placeholder="请输入您的姓名"
                                   v-model="formData.username"
                            >
                        </div>
                    </div>                    
                    <!--证件类型对应的list-->
                    <div class="realName_item_wrapper1" v-if="showCode==1">
                    	<div class="realName_item">
                        
	                        <div class="INPUT_REAL">
	                        	<p class="realName_txt3">身份证号</p>
	                            <input type="text" class="realName_input"
	                                   v-validate:usercard="validateOtions.usercard"
	                                   placeholder="请输入您的证件号"
	                                   v-model="formData.usercard"
	                            >
	                        </div>
	                    </div>
	                    <div class="realName_item">
                        	<p class="realName_txt3">身份地址</p>
	                        <div class="realName_item_select clearfix">
	                        	<p class="realName_txt4 fl">省份</p>
	                        	<select 
	                        		name="public-choice" 
	                        		v-model="provSelected" 
	                        		@change="getProvSelected" 
	                        		class="realName_select realName_select1 fr"
	                        		:class="[provSelected==''?'empty':'']"
	                        		ref="newText"
	                        	>                                        
								    <option value="">选择省份</option>
								    <option 
								    	:value="coupon.code" 
								    	v-for="coupon in selectPList"
								    >{{coupon.name}}</option>
								</select>
	                        </div>
	                        <div class="realName_item_select clearfix">
	                        	<p class="realName_txt4 fl">城市</p>
	                        	<select 
	                        		name="public-choice" 
	                        		v-model="citySelected" 
	                        		@change="getCitySelected" 
	                        		class="realName_select realName_select1 fr"
	                        		:class="[citySelected==''?'empty':'']"
	                        	> 
	                        		<option value="">选择城市</option>
								    <option :value="coupon.code" v-for="coupon in selectCList" >{{coupon.name}}</option>                                    
								</select>
	                        </div>
	                        <div class="realName_item_select clearfix">
	                        	<p class="realName_txt4 fl">区（县）</p>
	                        	<select 
	                        		name="public-choice" 
	                        		v-model="countrySelected" 
	                        		@change="getCountrySelected" 
	                        		class="realName_select realName_select1 fr"
	                        		:class="[countrySelected==''?'empty':'']"
	                        	>   
	                        		<option value="">选择地区</option>
								    <option :value="coupon.code" v-for="coupon in selectYList" >{{coupon.name}}</option>                                    
								</select>
	                        </div>
	                        <div class="INPUT_REAL">
	                        	<p class="realName_txt3">详细地址</p>
	                            <input type="text" class="realName_input"
	                                   v-validate:town="validateOtions.town"
	                                   placeholder="请输入街道门牌等信息"
	                                   v-model="formData.town"
	                            >
	                        </div>
	                    </div>
                    </div>
                    <!--港澳对应的list-->
                    <div class="realName_item_wrapper2" v-if="showCode==2">
                    	<!--出生日期-->
                    	<div class="realName_item clearfix border_bottom">
                        	<p class="realName_txt3 fl">出生日期</p>
	                        <div class="select-box clearfix fr">
								<span class="item fl">
									<select v-model="formData.birthYear" class="select_item">
										<option value="">请选择</option>
										<option v-for="item in birthYear" :value="item">{{item}}年</option>
									</select>
								</span>
								<span class="item fl">
									<select  
										v-model="formData.birthMonth" 
										class="select_item"
										
									>
										<option value="">请选择</option>
										<option v-for="item in birthMonth" :value="item">{{item}}月</option>
									</select>
								</span>
								<span class="item fl">
									<select  
										v-model="formData.birthDay" 
										class="select_item"
										@change="validateBirth"	
									>
										<option value="">请选择</option>
										<option v-for="item in birthDay" :value="item">{{item}}日</option>
									</select>
							    </span>
							</div>
	                    </div>
                    	<div class="realName_item">
                        
	                        <div class="INPUT_REAL">
	                        	<p class="realName_txt3">港澳地区来往内地通行证</p>
	                            <input type="text" class="realName_input"
	                                   v-validate:usercards="validateOtions.usercards"
	                                   placeholder="请输入您的证件号码"
	                                   v-model="formData.usercards"
	                            >
	                        </div>
	                    </div>
	                    <!--换证次数-->
	                    <div class="realName_item clearfix border_bottom">
                        	<p class="realName_txt3 fl">换证次数</p>
	                        <div class="select-box clearfix fr">
								<span class="item fl">
									<select v-model="formData.changeTime" class="select_item">
										<option v-for="item in changeTime" :value="item">{{item}}</option>
									</select>
								</span>
							</div>
	                    </div>
	                    <!--证件有效期-->
	                    <div class="realName_item clearfix border_bottom">
                        	<p class="realName_txt3 fl">证件有效期</p>
	                        <div class="select-box clearfix fr">
								<span class="item fl">
									<select v-model="formData.year" class="select_item">
										<option v-for="item in year" :value="item">{{item}}年</option>
									</select>
								</span>
								<span class="item fl">
									<select  v-model="formData.month" class="select_item">
										<option v-for="item in month" :value="item">{{item}}月</option>
									</select>
								</span>
								<span class="item fl">
									<select  
										v-model="formData.day" 
										class="select_item"
										@change="validateEnd"
									>
										<option v-for="item in day" :value="item">{{item}}日</option>
									</select>
							    </span>
							</div>
	                    </div>
	                    <!--选择地址-->
	                    <div class="realName_item">
                        	<p class="realName_txt3">详细地址</p>
                        	<div class="clearfix">
                        		<div class="realName_item_select clearfix fl">
		                        	<!--<p class="realName_txt4 fl">省份</p>-->
		                        	<select 
		                        		name="public-choice" 
		                        		v-model="provSelected" 
		                        		@change="getProvSelected" 
		                        		class="realName_select realName_select1 realName_select2 fr"
		                        		:class="[provSelected==''?'empty':'']"
		                        	>                                        
									    <option value="">选择省份</option>
									    <option :value="coupon.code" v-for="coupon in selectPList" >{{coupon.name}}</option>
									</select>
		                        </div>
		                        <div class="realName_item_select clearfix fl">
		                        	<!--<p class="realName_txt4 fl">城市</p>-->
		                        	<select 
		                        		name="public-choice" 
		                        		v-model="citySelected" 
		                        		@change="getCitySelected" 
		                        		class="realName_select realName_select1 fr"
		                        		:class="[citySelected==''?'empty':'']"
		                        	> 
		                        		<option value="">选择城市</option>
									    <option :value="coupon.code" v-for="coupon in selectCList" >{{coupon.name}}</option>                                    
									</select>
		                        </div>
		                        <div class="realName_item_select clearfix fl">
		                        	<!--<p class="realName_txt4 fl">区（县）</p>-->
		                        	<select 
		                        		name="public-choice" 
		                        		v-model="countrySelected" 
		                        		@change="getCountrySelected" 
		                        		class="realName_select realName_select1 fr"
		                        		:class="[countrySelected==''?'empty':'']"
		                        	>   
		                        		<option value="">选择地区</option>
									    <option :value="coupon.code" v-for="coupon in selectYList" >{{coupon.name}}</option>                                    
									</select>
		                        </div>
                        	</div>
	                        
	                        <div class="INPUT_REAL">
	                        	<!--<p class="realName_txt3">详细地址</p>-->
	                            <input type="text" class="realName_input"
	                                   v-validate:town="validateOtions.town"
	                                   placeholder="请输入街道门牌等信息"
	                                   v-model="formData.town"
	                            >
	                        </div>
	                    </div>
                    </div>
                    <div class="realName_item_wrapper3" v-if="showCode==3">
                    	<!--出生日期-->
                    	<div class="realName_item clearfix border_bottom">
                        	<p class="realName_txt3 fl">出生日期</p>
	                        <div class="select-box clearfix fr">
								<span class="item fl">
									<select v-model="formData.birthYear" class="select_item">
										<option v-for="item in birthYear" :value="item">{{item}}年</option>
									</select>
								</span>
								<span class="item fl">
									<select  v-model="formData.birthMonth" class="select_item">
										<option v-for="item in birthMonth" :value="item">{{item}}月</option>
									</select>
								</span>
								<span class="item fl">
									<select  
										v-model="formData.birthDay" 
										class="select_item"
										@change="validateBirth"	
									>
										<option v-for="item in birthDay" :value="item">{{item}}日</option>
									</select>
							    </span>
							</div>
	                    </div>
                    	<div class="realName_item">
                        
	                        <div class="INPUT_REAL">
	                        	<p class="realName_txt3" style="width: 5rem;">台湾居民来往内地通行证</p>
	                            <input type="text" class="realName_input"
	                                   v-validate:usercards="validateOtions.usercards"
	                                   placeholder="请输入您的身份证号码"
	                                   v-model="formData.usercards"
	                            >
	                        </div>
	                    </div>
	                    <!--换证次数-->
	                    <div class="realName_item clearfix border_bottom">
                        	<p class="realName_txt3 fl">签发次数</p>
	                        <div class="select-box clearfix fr">
								<span class="item fl">
									<select v-model="formData.changeTime" class="select_item">
										<option v-for="item in changeTime" :value="item">{{item}}</option>
									</select>
								</span>
							</div>
	                    </div>
	                    <!--证件有效期-->
	                    <div class="realName_item clearfix border_bottom">
                        	<p class="realName_txt3 fl">证件有效期</p>
	                        <div class="select-box clearfix fr">
								<span class="item fl">
									<select v-model="formData.year" class="select_item">
										<option v-for="item in year" :value="item">{{item}}年</option>
									</select>
								</span>
								<span class="item fl">
									<select  v-model="formData.month" class="select_item">
										<option v-for="item in month" :value="item">{{item}}月</option>
									</select>
								</span>
								<span class="item fl">
									<select  
										v-model="formData.day" 
										class="select_item"
										@change="validateEnd"
									>
										<option v-for="item in day" :value="item">{{item}}日</option>
									</select>
							    </span>
							</div>
	                    </div>
	                    <!--选择地址-->
	                    <div class="realName_item">
                        	<p class="realName_txt3">详细地址</p>
                        	<div class="clearfix">
                        		<div class="realName_item_select clearfix fl">
		                        	<!--<p class="realName_txt4 fl">省份</p>-->
		                        	<select 
		                        		name="public-choice" 
		                        		v-model="provSelected" 
		                        		@change="getProvSelected" 
		                        		class="realName_select realName_select1 realName_select2 fr"
		                        		:class="[provSelected==''?'empty':'']"
		                        		:label-in-value="true"
		                        	>                                        
									    <option value="">选择省份</option>
									    <option 
									    	:value="coupon.code" 
									    	v-for="coupon in selectPList"
									    	:lable="coupon.name"
									    >{{coupon.name}}</option>
									</select>
		                        </div>
		                        <div class="realName_item_select clearfix fl">
		                        	<!--<p class="realName_txt4 fl">城市</p>-->
		                        	<select 
		                        		name="public-choice" 
		                        		v-model="citySelected" 
		                        		@change="getCitySelected" 
		                        		class="realName_select realName_select1 fr"
		                        		:class="[citySelected==''?'empty':'']"
		                        	> 
		                        		<option value="">选择城市</option>
									    <option :value="coupon.code" v-for="coupon in selectCList" >{{coupon.name}}</option>                                    
									</select>
		                        </div>
		                        <div class="realName_item_select clearfix fl">
		                        	<!--<p class="realName_txt4 fl">区（县）</p>-->
		                        	<select 
		                        		name="public-choice" 
		                        		v-model="countrySelected" 
		                        		@change="getCountrySelected" 
		                        		class="realName_select realName_select1 fr"
		                        		:class="[countrySelected==''?'empty':'']"
		                        	>   
		                        		<option value="">选择地区</option>
									    <option :value="coupon.code" v-for="coupon in selectYList" >{{coupon.name}}</option>                                    
									</select>
		                        </div>
                        	</div>
	                        
	                        <div class="INPUT_REAL">
	                        	<!--<p class="realName_txt3">详细地址</p>-->
	                            <input type="text" 
	                            	class="realName_input"
	                                   v-validate:town="validateOtions.town"
	                                   placeholder="请输入街道门牌等信息"
	                                   v-model="formData.town"
	                            >
	                        </div>
	                    </div>
                    </div>
                    <!--<div 
                    	class=""
                    	@click='getMsgInfo'
                    >获取省市县信息</div>-->
                </div>
            </div>

            <div
                    class="button LONGBTN BUTTON_SHADOW"
                    @click="toValidate"
            >下一步</div>
            
            <p class="realName_txt5 tcenter">未满18岁与超过65岁用户无法通过实名认证</p>

        </div>
        
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
                    <p class="realAuthentxt1">提示</p>
                    <p class="realAuthentxt2">{{errorMsg}}</p>
                    <div class="realAuthenBtn"
                    	@click="closeRealAuthenErrorDig"
                    >确定</div>
                </div>
            </div>
        </nlayer>
        
        <!--错误信息展示-->
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
    </div>
</template>

<script>

    import Nlayer from '@/components/Nlayer'
    import { mapGetters, mapActions } from 'vuex'
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        name: "RealNameAuthen",
        components: {
            Nlayer
        },
        data() {
            return {
                tips: '',
                tipsVisible: false,
                formData: {
                    username: '',
                    usercard: '',
                    usercards:'',
                    town:'',
                    year:'',
					month:'',
					day:'',
					changeTime:'',
					birthYear:'1956',
					birthMonth:'01',
					birthDay:'01'
                },
                year:[],
				month:[],
				day:[],
				birthYear:[],
				birthMonth:[],
				birthDay:[],
                couponSelected: '',
                showCode:1,
                changeTime:[],
                selectList:[
                    {
                        id: '1',
                        name: '大陆地区'
                    },
                    {
                        id: '2',
                        name: '港澳地区'
                    },
                    {
                        id: '3',
                        name: '台湾地区'
                    }
                ],
                selectPList:[],
                selectCList:[],
                selectYList:[],
                provSelected:'',
                provName:'',
                citySelected:'',
                cityName:'',
                countrySelected:'',
                countryName:'',
                GA_selectPList:[],
                realAuthenErrorDig:false,
                errorMsg:'',
                cityInfo:[]
            }
        },
        created(){
        	// 赋值地区显示
            this.couponSelected = this.selectList[0].id;
            
        },
        mounted(){
        	this.init()
        	
//      	this.openRealAuthenErrorDig()
        },
        computed: {
        	userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.customerId
            },
            validateOtions(){
                // 验证格式及错误信息
                const res = {
                    username: {
                        rules:{
                            required: true
                        },
                        msg:{
                            required: '请输入您的姓名'
                        }
                    }
                }

                return res
            }
        },
        methods:{
        	...mapGetters(['getUserinfo']),
        	// 年月日
        	init(){
        		// 获取有效期年
			  	this.getYear();
			  	// 获取有效期月
			  	this.getMonth();
			  	// 获取有效期日
			  	this.getDay();
			  	// 获取生日的年
			  	this.getBirthYear();
			  	// 获取生日的月
			  	this.getBirthMonth();
			  	// 获取生日的日
			  	this.getBirthDay();
			  	// 获取换证次数
			  	this.getChangeTime();
			  	// 获取数据
			  	this.getCityInfoMsg(this.showCode);
			},
			// 获取城市数据
			getCityInfoMsg(showCode){
				this.$http.get('app/area/getNextPath',{
                    parentId: 0,
                    type:this.showCode
               }).then((res) => {
                    if( res.returnCode == 1 ){
                        this.cityInfo = res.resultData
                        this.selectPList = this.cityInfo.map((item)=>{
			            	console.log(item)
			            	return {
			            		name:item.name,
			            		code:item.areaId
			            	}
			            })
                    }
                })
			},
			// 根据选择不同城市数据不同
            getCouponSelected(event){
                // 获取选中的地区信息 1大陆 2港澳 3台湾
                this.showCode = event.target.value
                // 切换触发之后将所有职清空
                this.provSelected = ''
                this.citySelected = ''
                this.countrySelected = ''
                // 切换之后姓名和详细地址清空
                this.formData.username = ''
                this.formData.town = ''
                // 调用接口请求数据
                this.getCityInfoMsg(this.showCode)
            },
            // 根据省获取不同的城市
            getCityInfo(code){
            	this.cityInfo.map((items)=>{
	            	if(items.areaId == code){
	            		this.selectCList = items.childer.map((list)=>{
	            			return{
	            				name:list.name,
	            				code:list.areaId
	            			}
	            		})
	            	}
            	})            	
            },
            // 根据市获取区的信息
            getCountryInfo(code){
            	this.cityInfo.map((item)=>{
	            	if(item.areaId == this.provSelected){
	            		item.childer.map((items)=>{
	            			if(items.areaId == code){
	            				this.selectYList = items.childer.map((list)=>{
			            			return{
			            				name:list.name,
			            				code:list.areaId
			            			}
			            		})
	            			}
	            		})
	            		
	            	}
	            })	            
            },
            // 获取省的信息
            getProvSelected(event){
            	console.log(event)
            	console.log(this.$refs)
            	// 获取选择的省份编码
            	this.provSelected = event.target.value
            	// 获取对应省份的城市
            	this.getCityInfo(this.provSelected)
            	// 将城市和区县清空
            	this.citySelected = ''
            	this.countrySelected = ''
            	// 清空区县数组
            	this.selectYList = []
            },
            // 获取市的信息
            getCitySelected(){
            	// 获取城市列表
            	this.citySelected = event.target.value
            	// 获取县
            	this.getCountryInfo(this.citySelected)
            	// 清空区县选择
            	this.countrySelected = ''
            },
            // 获取年
			getYear(){
			  let date = new Date;
			  let current_year = date.getFullYear();
			  for (let i = current_year; i < current_year+100; i++) {
				this.year.push(''+i);
			  }
			  
			  this.formData.year = this.year[0]
			},
			// 获取月
			getMonth(){
			  for (let i = 1; i < 13; i++) {
			  	if(i<10){
			  		this.month.push('0'+i);
			  	}else{
			  		this.month.push(''+i);
			  	}
				
			  }
			  console.log(this.month)
			  this.formData.month = this.month[0]
			},
			//获取日
			getDay(){
			  this.day = [];
			  let day = this.getDaysInMonth(this.formData.year, this.formData.month)
			  for (let i = 1; i <= day ; i++) {
			  	if(i<10){
			  		this.day.push('0'+i);
			  	}else{
			  		this.day.push(''+i);
			  	}
			      
			  }
			  this.formData.day = this.day[0]
			},
			// 获取生日的年
			getBirthYear(){
				let date = new Date;
				let current_year = date.getFullYear();
				for (let i = 0; i < 100; i++) {
				    let y = current_year - i;
					this.birthYear.push(y);
				}				  
//				this.formData.birthYear = this.birthYear[0]
			},
			// 获取生日的月
			getBirthMonth(){
			  	for (let i = 1; i < 13; i++) {
			  		if(i<10){
			  			this.birthMonth.push('0'+i);
			  		}else{
			  			this.birthMonth.push(''+i);
			  		}
				
			  	}			  
//			  	this.formData.birthMonth = this.birthMonth[0]
			},
			// 获取生日的日
			getBirthDay(){
			  	this.birthDay = [];
			  	let birthDay = this.getDaysInMonth(this.formData.birthYear, this.formData.birthMonth)
			  	for (let i = 1; i <= birthDay ; i++) {
				  	if(i<10){
				  		this.birthDay.push('0'+i);
				  	}else{
				  		this.birthDay.push(''+i);
				  	}				      
			  	}
//			  	this.formData.birthDay = this.birthDay[0]
			  	
			  	
			},
			// 获取换证次数
			getChangeTime(){
				for (let i = 0; i <= 99 ; i++) {
				  	if(i<10){
				  		this.changeTime.push('0'+i);
				  	}else{
				  		this.changeTime.push(''+i);
				  	}
				      
				}
				this.formData.changeTime = this.changeTime[0]
			},
			//获取某个月的天数
			getDaysInMonth(year, month) {
		         month = parseInt(month, 10);
			  	let d = new Date(year, month, 0);
			  	return d.getDate();
			},
			padding0(num, length) {//数字前填充0方法
			   for(let len = (num + "").length; len < length; len = num.length) {
				  num = "0" + num;            
			   }
			   return num;
			},
	        submit(){//提交      
	            let birthday = this.formData.year +"-" + this.padding0(this.formData.month,2) +"-" + this.padding0(this.formData.day,2);
	 
			    let cur_date = new Date();
			    if(cur_date < new Date(birthday)){
				    alert("请选择小于今天的年月日");
				    return;
			    }
	            console.log(birthday);//birthday就是得到的最终的日期，格式为2019-01-01
	        },
			// 验证生日是否正确 validateBirth
			validateBirth(){
				console.log('能否进来区间')
				
				// 根据最终的选择判断 当前的年月日
			  	console.log(this.formData)
			  	// 获取当前的年月日
			  	var date1=new Date(this.formData.birthYear,parseInt(this.formData.birthMonth),parseInt(this.formData.birthDay));
	           	var date2=new Date();
	           	var date=(date2.getTime()-date1.getTime())/(1000*60*60*24);/*不用考虑闰年否*/
	           	let current_year = date2.getFullYear();
	           	let current_mouth = date2.getMonth();
	           	let current_day = date2.getDate();
	           	// 获取当前的月份
	           	var m = current_mouth + 1;
			    if (m.toString().length == 1) {
			        m = "0" + m;
			    }
    
	           	console.log(current_day,parseInt(this.formData.birthDay))
	           	if( this.formData.birthYear >= current_year -18 ){
	           		console.log(123)
	           		// 说明年份是相差18年
	           		if( m <= parseInt(this.formData.birthMonth) ){
	           			// 说明月份够
	           			if( current_day <= parseInt(this.formData.birthDay) ){
	           				// 说明日子够
	           			}else{
	           				console.log('出生日期不对')
	           				this.errorMsg = '您未满18岁，不能进行实名验证！'
	           				this.openRealAuthenErrorDig()
	           			}
	           		}else{
	           			console.log('出生月份不对')
	           			this.errorMsg = '您未满18岁，不能进行实名验证！'
	           			this.openRealAuthenErrorDig()
	           		}
	           	}
	           	if( this.formData.birthYear <= current_year - 65 ){
	           		// 说明年份是相差18年
	           		if( m <= parseInt(this.formData.birthMonth) ){
	           			// 说明月份够
	           			if( current_day <= parseInt(this.formData.birthDay) ){
	           				
	           				console.log('出生日期不对')
	           				this.errorMsg = '您已超过65岁，不能进行实名验证！'
	           				this.openRealAuthenErrorDig()
	           			}else{
	           				// 说明日子够
	           			}
	           		}else{
	           			console.log('出生月份不对')
	           			this.errorMsg = '您已超过65岁，不能进行实名验证！'
	           			this.openRealAuthenErrorDig()
	           		}
	           	}
				
				// 生日正确 验证通行证是否正确
				this.validateUserCards()
			},
			// 验证通行证是否正确
			validateUserCards(){
				if( this.showCode != 1 ){
            		if( this.formData.usercards == '' ){
            			this.showTips('请输入您的证件号码')
            			return
            		}
            		
            		if( this.showCode == 2 ){
            			var rex = /^([A-Z]\d{6,11}(\w1\w1)?)$/;
            		}else{
            			var rex = /^[a-zA-Z][0-9]{9}$/
            		}
            		
		            if( !rex.test(this.formData.usercards) ){
		            	this.showTips('请输入正确的证件号码')
		            	return
		            }
            	}
				
				// 通行证正确 验证省市县
				this.validateEmpty()
			},
			// 验证省市县是否为空
			validateEmpty(){
				// 获取省市县名称
            	this.selectPList.map((item)=>{
            		if( item.code == this.provSelected ){
            			this.provName = item.name
            		}
            	})
            	this.selectCList.map((item)=>{
            		if( item.code == this.citySelected ){
            			this.cityName = item.name
            		}
            	})
            	this.selectYList.map((item)=>{
            		if( item.code == this.countrySelected ){
            			this.countryName = item.name
            		}
            	})
            	
            	if( this.provName == '' ){
            		this.showTips('请选择省份')
            		return
            	}
            	if( this.cityName == '' ){
            		this.showTips('请选择城市')
            		return
            	}
            	if( this.countryName == '' ){
            		this.showTips('请选择地区')
            		return
            	}
            	if( this.formData.town == '' ){
            		this.showTips('请填写详细地址')
            		return
            	}
            	
            	// 请求接口完成认证
	            this.postSaveUserInfo()
			},
			// 验证证件有效期
			validateEnd(){
				var date1=new Date(this.formData.year,parseInt(this.formData.month),parseInt(this.formData.day));
	           	var date2=new Date();
	           	var date=(date2.getTime()-date1.getTime())/(1000*60*60*24);/*不用考虑闰年否*/
//	           	if(date/365){
//	           		
//	           	}
				console.log(date2)
			},
            // 去验证格式
            toValidate(){
            	// 正则判断
            	const pass = this.$validator.checkAll()
                if( pass ){
                    // 数据格式通过验证
                    // 根据地区进行判断 大陆地区
                    if( this.showCode == 1 ){
                    	// 判断身份证号码是否为空
                    	if( this.formData.usercard == '' ){
	            			this.showTips('请输入您的身份证号码')
	            			return
	            		}else{
	            			// 判断身份证号码是否正确
		            		var rex = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
		            		var rexR = /^[1-9]\d{5}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}$/
		            		
		            		if( rex.test(this.formData.usercard) || rexR.test(this.formData.usercard) ){
		            			
				            }else{
				            	this.showTips('请输入正确的身份证号码')
				            	return
				            }
	            		}
                    	
	            		
	            		// 判断省市县
	            		this.validateEmpty()
                    }else{
                    	// 判断生日是否正确
                    	this.validateBirth()
                    }                    
	            	
                } else {
                    // 没通过验证
                    const errors = this.$validator.errors.errors
                    const errorMsg = errors[0].msg

                    this.showTips(errorMsg)
                }
            	   
            },
            // 请求接口进行下一步
            postSaveUserInfo(){
            	console.log(this.formData)
            	var that = this
            	jsonAjax.post(urlUtil.getApiUrl("real_authen"), {
                    userId:that.userId,
                    userName:that.formData.username,
                    idCardNumber:that.showCode != 1? that.formData.usercards : that.formData.usercard,
                    type:that.showCode,
                    province:that.provName,
                    city:that.cityName,
                    county:that.countryName,
                    town:that.formData.town,
                    certificatesDate:that.showCode != 1 ? that.formData.year+that.formData.month+that.formData.day :'',
                    issueNum:that.showCode != 1 ? that.formData.changeTime:'',
                    birth:that.showCode != 1 ? that.formData.birthYear+that.formData.birthMonth+that.formData.birthDay :''
                }, function (result) {
                    console.log(result)
//                  return
                    if( result.returnCode == 1 ){
                    	if( that.showCode == 1 ){
		            		that.$router.replace({
			                    path: '/brushFaceAuthen',
			                    query: {
			                        name: that.formData.username
			                    }
			                })
		            	}else{
		            		that.$router.replace({
			                    path: '/bankCardAuthen',
			                    query: {
			                        name: that.formData.username,
			                        showCode:that.showCode,
			                        usercards:that.formData.usercards
			                    }
			                })
		            	}
                    }else{
                    	that.showTips(result.message)
                    }
//                  if( result.success ){
//                      that.detail = result.result
//                      // that.amount = result.result.vip1Number
//                      return
//                      // 根据用户等级去赋值
////                         if( this.vipLevel == 0 ){
//// //		            		that.vipNum = 'vip1'
////                             that.amount = result.result.vip1Number
////                         }else if( this.vipLevel == 1 ){
//// //		            		that.vipNum = 'vip2'
////                             that.amount = result.result.vip2Number
////                         }else{
//// //		            		that.vipNum = 'vip3'
////                             that.amount = result.result.vip3Number
////                         }
//
//                  }
                })
            	return
            	this.$http.post('app/aip/saveUserInfo', {
                    userId:this.userId,
                    userName:this.formData.userName,
                    idCardNumber:this.formData.userCard,
                    type:this.showCode,
                    province:this.provName,
                    city:this.cityName,
                    county:this.countryName,
                    town:this.formData.town,
                    certificatesDate:'',
                    issueNum:'',
                    birth:''
                }).then((res) => {
                    // 关闭加载层
//                  this.closeLoading()
                    console.log(res)
//                  if(res.data.success){
//                      console.log(res.headers)
//                      let userinfo = res.data.result
//                      const { token } = res.headers
//                      // this.removeUserinfo()
//                      // 保存用户信息
//                      this.setUserinfo({
//                          ...userinfo,
//                          token
//                      })
//                      // 保存用户名
//                      this.setUsers(userinfo.userName)
//
//                      this.loginSuccess = true
//
//                      this.isLogin()
//                      this.showTips(res.data.message, false)
//
//                  }else{
//                      this.showTips(res.data.message)
//                      //    未找到该用户 然后进行删除操作
//                  }

                })
            },
            // 获取省市县信息
            getMsgInfo(){
            	console.log(123)
            	// 访问json数据
            	console.log(cityInfo)
//				console.log(cityTW)
				console.log(cityXA)
            	
 
            },
            
            
            
            // 根据省获取市的信息
            
            
            
            getCountrySelected(){
            	
            },
            // 打开错误提示弹窗
            openRealAuthenErrorDig(){
                this.realAuthenErrorDig = true
            },
            // 监听错误弹窗事件
            realAuthenErrorDigClose(){
                this.realAuthenErrorDig = false
            },
            // 关闭错误提示弹窗
            closeRealAuthenErrorDig(){
            	// 清理生日信息重新选择
            	// 获取生日的年
			  	this.getBirthYear();
			  	// 获取生日的月
			  	this.getBirthMonth();
			  	// 获取生日的日
			  	this.getBirthDay();
			  	this.realAuthenErrorDig = false
            },
            // 打开消息提示
            showTips(msg){
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.msg = ''
                this.tipsVisible = false
            },
            
        }
    }
</script>

<style scoped>
	.wrapper{
		/*height: auto;*/
		overflow-y:scroll;
	}
	.realName_top{
		padding: 0.35rem 0;
		background: #F5F5F5;
	}
    .realName_txt1{
        font-size: 0.26rem;
        color: #203395;
        line-height: 0.55rem;
        margin-top: 0.2rem;
    }
    .realName_txt2{
        font-size: 0.22rem;
        color: #333;
        line-height: 0.45rem;
    }
    .realName_list{
        padding: 0.15rem 0.3rem 0;
    }
    .realName_txt3{
        font-size: 0.26rem;
        color: #203395;
        line-height: 1rem;
    }
    .realName_txt4{
    	font-size: 0.26rem;
        color: #203395;
        line-height: 0.8rem;
        padding: 0 0.3rem;
    }
    .realName_input{
    	text-align: right;
    }
    .INPUT{
    	border-bottom: 1px solid #eee;
    }
    .INPUT_account{
    	border-bottom: 1px solid #eee;
    }
    .realName_select{
    	height: 1rem;
	    display: block;
	    color: #203395;
	    font-size: 0.26rem;
	    border: none;
	    padding: 0 0.2rem;
	    flex: 1;
	    position: relative;
	    z-index: 1;
	    background: none;
	    -webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
		-moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
		background: url("../static/images/video_icon/select_down.png") no-repeat right center;
		background-size: 0.3rem  0.3rem;/*图片大小*/
		background-position: 98%;/*图片位置*/
		width: 2rem!important;
		background-color:none;
		text-align:right;
    	text-align-last: right;
    	padding-right: 0.5rem;
    }
    .realName_select.empty{
    	color: #ccc;
    }
    .select_item{
    	height: 1rem;
	    display: block;
	    color: #203395;
	    font-size: 0.26rem;
	    border: none;
	    /*padding: 0 0.2rem;*/
	    /*flex: 4;*/
	    position: relative;
	    z-index: 1;
	    background: none;
	    -webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
		-moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
		background: url("../static/images/video_icon/select_down.png") no-repeat right center;
		background-size: 0.3rem  0.3rem;/*图片大小*/
		background-position: 98%;/*图片位置*/
		width: 1rem;
		background-color:none;
		text-align:right;
    	text-align-last: right;
    	padding-right: 0.5rem;
    }
    .realName_select option{
    	background: none;
    	
    }
    .realName_select1{
    	height: 0.8rem;
    	 -webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
		-moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
		background: url("../static/images/video_icon/select_down.png") no-repeat right center;
		background-size: 0.3rem  0.3rem;/*图片大小*/
		background-position: 98%;/*图片位置*/
    }
    .realName_select2{
    	width: 2.5rem!important;
    }
    .button{
        width: 6.9rem;
        margin-top: 1rem;
    }
    .realName_txt5{
    	font-size: 0.22rem;
        color: #E72525;
        line-height: 0.8rem;
        padding: 0 0.3rem;
    }
    /*年月日css*/
   	.item select{
   		width: 1.5rem;
   	}
   	.border_bottom{
   		border-bottom: 1px solid #eee;
   	}
   	
   	/*错误样式*/
    .DIALOG_TITLE_ERROR{
        padding:0;
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
        height: 0.7rem;
        background: #203395;
        font-size: 0.3rem;
        color: #FEFEFE;
        line-height: 0.7rem;
        border-radius: 50rem;
        margin: 0.4rem auto;
    }
</style>