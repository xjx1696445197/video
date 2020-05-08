<template>
    <div id="addressEdit" class="content_box">
        <div class="HEADER_SHOP">
            <div class="HEADER_SHOP_BACK" @click="this.$back"></div>
            <p class="HEADER_SHOP_TITLE">地址编辑</p>
        </div>

        <div class='pad_l20 pad_r20 bgfff' style="margin-top: 1rem">
            <div class='pad_t20 pad_b20 border_b table'>
                <div class='td wrem2'>收货人</div>
                <div class='td pad_r10'>
                    <input class='pad_l10 col12' v-model="addressDetail.consignee" placeholder='请输入收货人姓名' style="border: none">
                </div>
            </div>
            <div class='pad_t20 pad_b20 border_b table'>
                <div class='td wrem2'>手机号码</div>
                <div class='td pad_r10'>
                    <input class='pad_l10 col12' v-model="addressDetail.mobilePhone" placeholder='请输入收货人电话' style="border: none">
                </div>
            </div>
            <div class='pad_t20 pad_b20 border_b table' style="padding-right: .2rem">
                <div class='td wrem2'>所在省</div>
                <div class='td pad_l10 c666' v-on:click="openPicker">
                    {{province_name}} {{city_name}} {{area_name}}
                    <div v-if="pickerShow"><mt-picker :slots="slots" @change="onValuesChange"></mt-picker></div>

                    <!--<input class='pad_l10 col12'  v-model="addressDetail.province" placeholder='所在省'>-->
                </div>
                <div class='td comjt'>
                    <img src='../static/images/shop/order_confirm_07.png' class='img'>
                </div>
            </div>
            <!--<div class='pad_t10 pad_b10 border_b table'>-->
            <!--<div class='td wrem4'>所在市</div>-->
            <!--<div class='td pad_l 10 c666'>-->
            <!--<input class='pad_l10 col12'  v-model="addressDetail.city" placeholder='所在市'>-->
            <!--</div>-->
            <!--<div class='td comjt'>-->
            <!--<img src='../../assets/order_confirm_07.png' class='img'>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class='pad_t10 pad_b10 border_b table'>-->
            <!--<div class='td wrem4'>所在区</div>-->
            <!--<div class='td pad_l 10 c666'>-->
            <!--<input class='pad_l10 col12'  v-model="addressDetail.area" placeholder='所在区'>-->
            <!--</div>-->
            <!--<div class='td comjt'>-->
            <!--<img src='../../assets/order_confirm_07.png' class='img'>-->
            <!--</div>-->
            <!--</div>-->

            <div class='pad_t20 pad_b20 border_b table'>
                <div class='td wrem2'>详细地址</div>
                <div class='td  pad_r10'>
                    <input class='pad_l10 col12'  v-model="addressDetail.address" placeholder='请输入详细地址' style="border: none">
                </div>
            </div>
            <div class='pad_t20 pad_b20 border_b table'>
                <div class='td wrem2'>地址类型</div>
                <div class='td pad_l10 f24'>
                    <div class='add_icon inblock mar_r10' :class='tabIndex==1?"cur":""' v-on:click='selectTap(1)'>公司</div>
                    <div class='add_icon inblock mar_r10' :class='tabIndex==2?"cur":""' v-on:click='selectTap(2)'>住宅</div>
                    <div class='add_icon inblock mar_r10' :class='tabIndex==3?"cur":""' v-on:click='selectTap(3)'>无</div>
                </div>
            </div>
            <div class='pad_t20 pad_b20 border_b table'>
                <div class='td wrem2'>默认地址</div>
                <div class='td pad_l10 f24'>
                    <div class='add_icon inblock mar_r10' :class='moren?"cur":""' v-on:click='setMoren'>默认</div>
                </div>
            </div>

        </div>



        <div class='bot'></div>
        <!--新增收货地址  -->
        <div class='oprate_bottom'>
            <div class='table all h100'>
                <div class='td txt_center oprate_btn1 f28' v-on:click='saveAddress' v-if="openPickerstore">
                    保存
                </div>
                <div class='td txt_center oprate_btn1 f28' v-if="!openPickerstore" style="background: #ccc">
                    保存
                </div>
            </div>
        </div>

        <!--地址编辑-->
        <div class="box_shadow" v-if="pickerShow"  v-on:click="openPicker"></div>
        <div class="picker_bottom f28 txt_center" v-if="pickerShow">
            <div class="table h100">
                <div class="td f28"  v-if="openPickerstore"  v-on:click="openPicker">确定</div>
            </div>
            <div class="table h100">
                <div class="td f28"  v-if="!openPickerstore" >确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,Picker,Toast} from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.component(Picker.name, Picker);
    import urlUtil from '../util/apiUtil.js';
    import jsonAjax from '../util/restUtil.js';

    export default {
        components:{},
        data () {
            return {
                aId:this.$route.params.aId,
                addressDetail:{consignee:"",mobilePhone:"",province:"",city:"",area:"",address:""},
                tabIndex:1,
                moren:true,
                openPickerstore:true,
                moren_index:1,
                uploadImgRoot: urlUtil.uploadImgRoot,
                slots: [
                    {
                        flex: 1,
                        values: ['河北','天津','北京'],
                        className: 'slot1',
                        textAlign: 'left',
                        defaultIndex:0
                    },
                    {
                        flex: 1,
                        values: ['沧州', '保定', '石家庄',],
                        className: 'slot2',
                        textAlign: 'center',
                        defaultIndex:0
                    },
                    {
                        flex: 1,
                        values: ['盐山', '黄骅',],
                        className: 'slot3',
                        textAlign: 'right',
                        defaultIndex:0
                    }
                ],
                provinces:[],
                citys:[],
                areas:[],
                mrindex:[{name:'河北',areaId:0},{name:'沧州',areaId:0},{name:'盐山',areaId:0}],
                pickerShow:false,
                province_name:"",
                city_name:"",
                area_name:"",
                isShow:false
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            /**一定将当前的this赋值给此作用于的变量that后再进行赋值操作**/
            var that = this;
            if(that.aId=='newaddr')
            {
                //新增
                //获取地址区域省列表
                jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: 0, levelCode: 1 }, function (result) {
                    // console.log(result);
                    if (result.returnCode == 1) {
                        var lista = [];
                        for (var i = 0; i < result.resultData.length; i++) {
                            lista.push(result.resultData[i].name)
                        }
                        that.slots[0].values=lista;
                        that.provinces=result.resultData;
                        that.mrindex[0]=result.resultData[0];
                        that.province_name=that.mrindex[0].name;
                        //默认市
                        jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: that.provinces[0].areaId, levelCode: 2 }, function (result) {
                            // console.log(result);
                            if (result.returnCode == 1) {
                                var listb = [];
                                for (var i = 0; i < result.resultData.length; i++) {
                                    listb.push(result.resultData[i].name)
                                }
                                that.slots[1].values=listb;
                                that.citys=result.resultData;
                                that.mrindex[1]=result.resultData[0];
                                that.city_name=that.mrindex[1].name;
                                //默认区
                                jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: that.citys[0].areaId, levelCode: 3 }, function (result) {
                                    if (result.returnCode == 1) {
                                        var listc = [];
                                        for (var i = 0; i < result.resultData.length; i++) {
                                            listc.push(result.resultData[i].name)
                                        }
                                        that.slots[2].values=listc;
                                        that.areas=result.resultData;
                                        that.mrindex[2]=result.resultData[0];
                                        that.area_name=that.mrindex[2].name;
                                    }
                                })

                            }
                        })

                    }
                });
            }
            else{
                //编辑
                jsonAjax.post(urlUtil.getApiUrl("address_info"), { customerAcceptAddressId: that.aId,customerId: that.$store.state.userinfo.userId }, function (result) {
                    // console.log(result);
                    if (result.returnCode == 1) {
                        that.addressDetail= result.resultData.customerAcceptAddress;
                        that.moren=result.resultData.customerAcceptAddress.isSendAddress;
                        if(that.moren)
                        {
                            that.moren_index=1;
                        }
                        that.province_name=result.resultData.regionLocationName;
                        that.city_name=result.resultData.cityName;
                        that.area_name=result.resultData.areaCountyName;
                        that.tabIndex=result.resultData.customerAcceptAddress.tag;
                        var one_name=result.resultData.regionLocationName;
                        var two_name=result.resultData.cityName;
                        var three_name=result.resultData.areaCountyName;

                        //获取省市区
                        jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: 0, levelCode: 1 }, function (result) {
                            // console.log(result);
                            if (result.returnCode == 1) {
                                var lista = [];
                                for (var i = 0; i < result.resultData.length; i++) {
                                    lista.push(result.resultData[i].name)
                                }
                                that.slots[0].values=lista;
                                that.provinces=result.resultData;

                                var index=0;
                                for(var i=0;i<that.provinces.length;i++)
                                {
                                    if(one_name==that.provinces[i].name)
                                    {
                                        index=i;
                                    }
                                }
                                that.mrindex[0]=that.provinces[index];
//                //默认市
                                jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: that.mrindex[0].areaId, levelCode: 2 }, function (result) {
                                    // console.log(result);
                                    if (result.returnCode == 1) {
                                        var listb = [];
                                        for (var i = 0; i < result.resultData.length; i++) {
                                            listb.push(result.resultData[i].name)
                                        }
                                        that.slots[1].values=listb;
                                        that.citys=result.resultData;

                                        var index=0;
                                        for(var i=0;i<that.citys.length;i++)
                                        {
                                            if(two_name==that.citys[i].name)
                                            {
                                                index=i;
                                            }
                                        }
                                        that.mrindex[1]=that.citys[index];

                                        //默认区
                                        jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: that.mrindex[1].areaId, levelCode: 3 }, function (result) {
                                            if (result.returnCode == 1) {
                                                var listc = [];
                                                for (var i = 0; i < result.resultData.length; i++) {
                                                    listc.push(result.resultData[i].name)
                                                }
                                                that.slots[2].values=listc;
                                                that.areas=result.resultData;
                                                var index=0;
                                                for(var i=0;i<that.areas.length;i++)
                                                {
                                                    if(three_name==that.areas[i].name)
                                                    {
                                                        index=i;
                                                    }
                                                }
                                                that.mrindex[2]=that.areas[index];
                                            }
                                        })
                                    }
                                })
                            }
                        });


                    }
                })
            }

        },
        methods: {
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1);
            },
            openPicker:function () {
                if(!this.pickerShow)
                {
                    var lista=[],listb=[],listc=[],indexa=0,indexb=0,indexc=0;
                    for(var i=0;i<this.provinces.length;i++)
                    {
                        lista.push(this.provinces[i].name);
                        if(this.province_name==this.provinces[i].name)
                        {
                            indexa=i;
                        }
                    }
                    this.slots[0].values=lista;
                    this.slots[0].defaultIndex=indexa;
                    for(var i=0;i<this.citys.length;i++)
                    {
                        listb.push(this.citys[i].name);
                        if(this.city_name==this.citys[i].name)
                        {
                            indexb=i;
                        }
                    }
                    this.slots[1].values=listb;
                    this.slots[1].defaultIndex=indexb;
                    for(var i=0;i<this.areas.length;i++)
                    {
                        listc.push(this.areas[i].name);
                        if(this.area_name==this.areas[i].name)
                        {
                            indexc=i;
                        }
                    }
                    this.slots[2].values=listc;
                    this.slots[2].defaultIndex=indexc;
                }
                this.pickerShow=!this.pickerShow;
            },
            onValuesChange(picker, values) {
                var that=this;
                if(values[0]!=that.mrindex[0].name)
                {
                    //切换省--更新市，区
                    var index=0;
                    for(var i=0;i<that.provinces.length;i++)
                    {
                        if(values[0]==that.provinces[i].name)
                        {
                            index=i;
                        }
                    }
                    that.mrindex[0]=that.provinces[index];
                    that.province_name=that.mrindex[0].name;
                    //默认市
                    jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: that.mrindex[0].areaId, levelCode: 2 }, function (result) {
                        if (result.returnCode == 1) {
                            var listb = [];
                            for (var i = 0; i < result.resultData.length; i++) {
                                listb.push(result.resultData[i].name)
                            }
                            picker.setSlotValues(1, listb);
                            that.citys=result.resultData;
                            that.mrindex[1]=that.citys[0];
                            that.city_name=that.mrindex[1].name;
                            //默认区
                            jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: that.mrindex[1].areaId, levelCode: 3 }, function (result) {
                                if (result.returnCode == 1) {
                                    var listc = [];
                                    for (var i = 0; i < result.resultData.length; i++) {
                                        listc.push(result.resultData[i].name)
                                    }
                                    picker.setSlotValues(2, listc);
                                    that.areas=result.resultData;
                                    that.mrindex[2]=that.areas[0];
                                    that.area_name=that.mrindex[2].name;
                                }
                            })
                        }
                    })

                }
                if(values[1]!=that.mrindex[1].name)
                {
                    //切换省--更新区
                    var index=0;
                    for(var i=0;i<that.citys.length;i++)
                    {
                        if(values[1]==that.citys[i].name)
                        {
                            index=i;
                        }
                    }
                    that.mrindex[1]=that.citys[index];
                    that.city_name=that.mrindex[1].name;
                    //默认区
                    jsonAjax.post(urlUtil.getApiUrl("address_area"), { parentId: that.mrindex[1].areaId, levelCode: 3 }, function (result) {
                        if (result.returnCode == 1) {
                            var listc = [];
                            for (var i = 0; i < result.resultData.length; i++) {
                                listc.push(result.resultData[i].name)
                            }
                            picker.setSlotValues(2, listc);
                            that.areas=result.resultData;
                            that.mrindex[2]=result.resultData[0];
                            that.area_name=that.mrindex[2].name;
                        }
                    })
                }
                if(values[2]!=that.mrindex[2].name) {
                    //切换区
                    var index = 0;
                    for (var i = 0; i < that.areas.length; i++) {
                        if (values[2] == that.areas[i].name) {
                            index = i;
                        }
                    }
                    that.mrindex[2] = that.areas[index];
                    that.area_name = that.mrindex[2].name;
                }
            },
            selectTap:function (index) {
                //选择地址类型
                this.tabIndex=index;
            },
            setMoren:function () {
                //是否为默认
                this.moren=!this.moren;
                if(this.moren)
                {
                    this.moren_index=1;
                }
                else {
                    this.moren_index=0;
                }
            },
            saveAddress:function () {
                //保存地址

                var that = this;
                if( that.addressDetail.consignee == '' ){
                    Toast('收件人姓名必填');
                    return false;
                }

                if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(that.addressDetail.mobilePhone)) {
                    Toast('手机格式不正确');
                    return false;
                }

                if( that.addressDetail.address == '' ){
                    Toast('请补充完整地址');
                    return false;
                }

                that.openPickerstore=false
                var param = {
                    isSendAddress: that.moren_index,
                    mobilePhone:that.addressDetail.mobilePhone,
                    address: that.addressDetail.address,
                    consignee: that.addressDetail.consignee,
                    regionLocation: that.mrindex[0].areaId,
                    city: that.mrindex[1].areaId,
                    areaCounty: that.mrindex[2].areaId,
                    tag: that.tabIndex,
                    customerId: that.$store.state.userinfo.userId

                };
                console.log(param)
                if( !that.isShow ){
                    that.isShow = true
                    if(that.aId=='newaddr')
                    {
                        //设置新增地址为默认保存地址
                        param.isSendAddress = that.moren_index;
                        //新增
                        jsonAjax.post(urlUtil.getApiUrl("address_add"), param, function (result) {
                            that.isShow = false
                            if (result.returnCode == 1) {
                                that.$router.back(-1);
                            }else{
                                Toast(result.message);
                            }
                        });
                        // var orderGlobal=JSON.parse(localStorage.getItem("placeOrder"));
                        // orderGlobal.address=param;
                        // localStorage.setItem("placeOrder",JSON.stringify(orderGlobal))
                    }
                    else{
                        //编辑
                        param.customerAcceptAddressId = that.aId;
                        jsonAjax.post(urlUtil.getApiUrl("address_edit"), param, function (result) {
                            that.isShow = false
                            if (result.returnCode == 1) {
                                that.$router.back(-1);
                            }else{
                                Toast(result.message);
                            }
                        });

                    }
                }
                // return

            }

        }

    }
</script>

<style scoped>
    .wrem2{
        width: 2.2rem;
    }
    .add_icon {
        background: #dcdcdc;
        color: #666;
        border-radius: 4px;
        padding: 5px 0px;
        line-height: 1;
        width: 3em;
        text-align: center;
    }

    .add_icon.cur {
        background: #E4811D;
        color: #fff;
    }

    .bot {
        height: 0.9rem;
    }

    .oprate_bottom {
        height: 0.9rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        border-top: 1px solid #f2f2f2;
    }

    .oprate_btn1 {
        background: #E4811D;
        color: #fff;
        /* padding: 16rpx; */
    }

    /*.picker {*/
    /*padding-left: 10px;*/
    /*}*/
    .picker{position: absolute; z-index:99; bottom: 0.8rem; right: 0; left: 0; background: #ffffff;}
    .picker_bottom{  position: absolute; z-index:99; bottom: 0; right:0; left:0; background: #E4811D; height: 0.8rem; color: #ffffff;}
    .box_shadow{ position: absolute; z-index:98; background: rgba(0,0,0,0.6); left: 0; right: 0; top: 0; bottom: 0;}
    .comjt {
        width: .38rem;
    }
</style>
