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
    /*.t-echarts{*/
    /*      margin-top:   .88rem;*/
    /*      min-width: 30px;*/
    /*      min-height: 30px;*/
    /*      width: 100%;*/
    /*      height:350px;*/
    /*      background: #f5f5f5;*/
    /*  }*/
    .o-echarts{
        margin-top:   .88rem;
        /*width: 100%;*/
        height:7rem;
        /*min-height: 100%;*/
        background: #f5f5f5;
    }
    .tcenter{
        position: fixed;
        width: 100%;
        height:100%;
        left: 0;
        top: 0;
        z-index: 999999999999999;
        overflow: scroll;
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
<template>
    <div class="tcenter">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{namemap}}</p>
            <div class="posiright" @click="search"><img src="../static/images/video_icon/icon_cx.png"></div>
        </div>
        <!--      <div class="t-echarts">-->
        <div :id="id" class="o-echarts" v-if="store"></div>
        <!--      </div>-->
        <p style="margin-top: .88rem" v-if="!store">
            当前城市暂无数据
        </p>
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
                <span>区（县）代人数：</span>
                <span>{{getberNum.result.countyAgentNum}}</span>
            </div>
<!--            <div>-->
<!--                <span>市内会员人数：</span>-->
<!--                <span>{{getberNum.result.vipNum}}</span>-->
<!--            </div>-->
        </div>
        <div class="pmap" v-else>
            <p>代理详情</p>
            <div>
                <span>代理省份：</span>
                <span>{{fullname}}</span>
            </div>
            <div>
                <span>市代人数：</span>
                <span>{{Initialization.result.cityAgentNum}}</span>
            </div>
            <div>
                <span>区（县）代人数：</span>
                <span>{{Initialization.result.countyAgentNum}}</span>
            </div>
<!--            <div>-->
<!--                <span>省内会员人数：</span>-->
<!--                <span>{{Initialization.result.vipNum}}</span>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import echarts from 'echarts';
    // import dass from '../../map/重庆.json';
    import utils from '../static/js/mapurl';
    // import axios from "axios";

    export default {
        name: 'echart-map',
        data() {
            return {
                getberNum:{result:{
                        cityAgentNum: 0,
                        countyAgentNum: 0,
                        vipNum: 0,
                        agentName: null
                    }},
                Initialization:{result:{
                        cityAgentNum: 0,
                        countyAgentNum: 0,
                        vipNum: 0,
                        agentName: null
                    }},
                judge:false,
                listd:[],
                datacode:"",
                mapname:"",
                mapdata:'',
                dataname:{},
                namedata:[],
                fullname:1,
                agen:1,
                store:true,
                namemap:"",
                id: 'echartss',
                echartObj: null,
                radioList: {
                    A: '',
                    // B: '军转干部在岗培训项目',
                    // C: '专技人员公需科目项目',
                    // D: '专技人员新取得中级职称岗前培训项目',
                    // E: '事业单位新进人员岗前培训项目'
                },
                radioActive: 'A',
                option: {
                    title: {
                        text: '',
                        top: '3%',
                        left: '5%',
                        textStyle: {
                            fontSize: 10,
                            fontWeight: 300,
                            color: '#b6d7ff'
                        }
                    },
                    tooltip: {
                        enterable:true,
                        triggerOn: 'click',
                        padding:5,
                        backgroundColor: 'transparent',
                        formatter: params => {

                            let localValue;
                            var that=this;
                            jsonAjax.get(urlUtil.getApiUrl('getMapMemberNum'), {name:that.fullname+params.name}, function (result) {
                                that.getberNum=result;
                                that.judge=true;
                            })
                            that.mapname=that.fullname+"  "+params.name
                            var name=that.fullname+params.name
                            if (params.data.value==null){
                                localValue=0;
                            }else {
                                localValue=1;
                            }
                            let url = window.location.href.split('#')[0] + '#/municipalmap?'+'&namemap='+name
                            return `
	               <div style="display: flex;height:.7rem;">

	                          <div style='font-size:.22rem;height:.7rem;border-right: 1px solid #fff;padding-right:.2rem'> <p style="line-height:.35rem;height:.35rem;">省份: ${params.name}</p><p style='text-align:left;line-height:.35rem'>
	                                           市级代理:${localValue}
	                                       </p></div>

	               <p style="text-align: center;font-size:.22rem;margin-left: .15rem;line-height:.7rem;"><a href="${url}" style="color: white;">详情</a></p></div>`;
                        },
                        backgroundColor:"rgba(32,51,149,0.7)",//提示标签背景颜色

                    },
                    legend: {
                        orient: 'vertical',
                        top: '9%',
                        left: '5%',
                        icon: 'circle',
                        data: [],
                        selectedMode: 'single',
                        selected: {},
                        itemWidth: 12,
                        itemHeight: 12,
                        itemGap: 30,
                        inactiveColor: '#b6d7ff',
                        textStyle: {
                            color: '#ec808d',
                            fontSize: 10,
                            fontWeight: 300,
                            padding: [0, 0, 0, 15]
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 500,
                        show: false,
                        splitNumber: 5,
                        inRange: {
                            color: ['#fff', '#fff', '#fff', '#fff', '#fff'].reverse()
                        },
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    geo: {
                        map: '',
                        zoom:1.2,
                        label: {
                            normal: {
                                show: true,
                                color: '#000',
                                textStyle: {
                                    fontSize: 8

                                },
                            },
                            emphasis: {
                                show: true,
                                color: '#ccc'
                            }
                        },
                        // roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#fff',
                                borderColor: '#6367ad',
                                borderWidth: 1,

                            },
                            emphasis: {
                                areaColor: '#203395' // hover效果
                            }
                        }
                    },
                    series: [{
                        name: '会员人数',
                        type: 'map',
                        geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                        data: []
                    }]
                }
            };
        },
        mounted() {

            var that=this;
            //     that.namemap = utils.getUrlKey('namemap');
            //     jsonAjax.get(urlUtil.getApiUrl('getMapJson'), {code:that.namemap}, function (result) {
            //     that.mapdata=JSON.parse(result.message)
            //         console.log(that.mapdata)
            //         setTimeout(function() {
            //             echarts.registerMap("", that.mapdata);
            //             },500)
            // })
            // var datan=昆明市
            // var datac=that.dataname.datan
            // console.log(datac)
            // console.log(that.datacode)
            this.echartObj = echarts.init(document.getElementById(this.id));
            // setTimeout(function() {
            //
            //     },5000)


            this.echartObj.on('legendselectchanged', params => {
                this.radioActive = Object.keys(this.radioList).filter(item => this.radioList[item] === params.name)[0];
                this.echartObj.clear();
                this.echartObj.setOption(this.getOptions());
            });
            window.addEventListener('resize', () => {
                if (this.echartObj && this.echartObj.resize) {
                    this.echartObj.resize();
                }
            });


        },
        created(){
            var that=this;
            that.fullname=utils.getUrlKey('fullname');
            that.namemap = utils.getUrlKey('namemap');
            jsonAjax.get(urlUtil.getApiUrl('getMapMemberNum'), {name:that.fullname}, function (result) {
                that.Initialization=result;
                console.log(that.Initialization)
            })

            jsonAjax.get(urlUtil.getApiUrl('getCityState'), {name:that.fullname}, function (result) {
                that.listd=result.result
                jsonAjax.get(urlUtil.getApiUrl('getMapJson'), {code:that.namemap}, function (result) {
                    that.mapdata=JSON.parse(result.message)
                    for (var i=0;i<that.mapdata.features.length;i++){
                        that.namedata.push(that.mapdata.features[i].properties);
                    }
                    console.log(that.namedata)
                    // console.log(result)
                    console.log(that.mapdata)
                    echarts.registerMap("", that.mapdata);
                    // echarts.registerMap("", dass);
                    setTimeout(function () {
                        that.echartObj.setOption(that.getOptions(), true);
                    },250)

                })
            })

        },
        methods: {
            search(){
                this.$push({
                    path: '/search'
                })
            },
            getOptions() {
                var that=this;
                this.setOptions('legend', {
                    data: Object.values(this.radioList),
                    selected: (list => {
                        const obj = {};
                        Object.keys(list).map((item, index) => {
                            obj[list[item]] = item === this.radioActive;
                        });
                        return obj;
                    })(this.radioList)
                });
                this.setOptions('series', (() => {
                    const arr = [];
                    Object.values(this.radioList)
                        .map((item, index) => {
                            arr[this.radioList[this.radioActive] === item ? 'unshift' : 'push']({
                                name: item,
                                type: 'map',
                                geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                                data:that.listd
                            });
                            // console.log(this.getSeriesData(item))
                        });

                    return arr;

                })());
                return this.option;
            },
            // getSeriesData(item) {
            //     return this.radioList[this.radioActive] === item ? JSON.features.map(item => {
            //         return {
            //             name: item.properties.name,
            //             value: Math.ceil(Math.random() * 500),
            //             obj: {
            //                 a: Math.ceil(Math.random() * 500),
            //                 b: Math.ceil(Math.random() * 500),
            //                 c: Math.ceil(Math.random() * 500),
            //                 d: Math.ceil(Math.random() * 500)
            //             }
            //         };
            //     }) : [];
            // },
            setOptions(objKey, objVal) {
                // 基于准备好的dom，初始化echarts实例
                // var myChartContainer = document.getElementById('echartss');
                // var resizeMyChartContainer = function(){
                //     myChartContainer.style.width=(document.body.offsetWidth)+'px'//页面一半的大小
                //     myChartContainer.style.height=(document.body.offsetHeight)+'px'//页面一半的大小
                // }
                // resizeMyChartContainer();
                // var myChartChina = this.$echarts.init(myChartContainer);
                if (this.option[objKey] && typeof this.option[objKey] === 'object' && !Array.isArray(this.option[objKey])) {
                    this.option[objKey] = Object.assign(this.option[objKey], objVal);
                } else {
                    this.option[objKey] = objVal;
                }
                this.$set(this.option, objKey, this.option[objKey]);
            }
        }
    };
</script>
