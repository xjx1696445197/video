<template>
    <div id="my" class="content_box">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="back()"></div>
            <p class="HEADER_TITLE">奖励明细</p>
        </div>
<!--        <div style="position:fixed;width: 100%;height: 4.35rem;background: #f5f5f5">-->
<!--            <div class="je_dp">-->
<!--                <div>可用积分</div>-->
<!--                <div>{{userData.availableCredits|numFilter}}</div>-->
<!--                <div style="margin-top: .2rem">-->
<!--                    &lt;!&ndash;                <div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                    <div>冻结积分</div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                    <div>{{userData.lockCredits|numFilter}}</div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                <div>&ndash;&gt;-->
<!--                    <div>累计兑换积分</div>-->
<!--                    <div class="lj_jf">{{userData.allCredits|numFilter}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div style="height: .68rem">

        </div>
        <div id="tab_positi">
            <div class="tab-tit">
                <div href="javascript:;" @click="getCredits" :class="{'cur':msg===0}">积分</div>
                <div href="javascript:;" @click="OutputInfo" :class="{'cur':msg===1}">HALE</div>
                <div href="javascript:;" @click="Projectbi" :class="{'cur':msg===2}">CHMC</div>
                <!--            <div href="javascript:;" @click="msg=2" :class="{'cur':msg===2}">冻结</div>-->
            </div>
            <div class="allincome">
                <div class="vue-datepicker">
                    <input @click.stop="selectYear=!selectYear" :value="systemDate" type="text" readonly>
                    <img src="../static/images/asset_list_icon_up.png" @click.stop="selectYear=!selectYear" >
                </div>
               <div><span>{{allvintext}}：{{allvin}}</span><span>{{allvouttext}}：{{allvout}}</span></div>

            </div>
            <div style="height: .2rem;">

            </div>
            <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
                如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
            <div class="tab-con"   v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10">
                <div v-show="msg===0" class="Alreadyobtained">
                    <div class="integrals">
                        <div>
                            <div @click="integralswitch(16,16)" :class="{'curs':integralmsg===16}">视频积分</div>
                            <div @click="integralswitch(17,17)" :class="{'curs':integralmsg===17}">粉丝积分</div>
                            <div @click="integralswitch(18,18)" :class="{'curs':integralmsg===18}">团队积分</div>
                            <div @click="integralswitch(19,19)" :class="{'curs':integralmsg===19}">代理积分</div>
                        </div>
                        <div>
                            <span>
                                获得：+{{vin}} 积分
                            </span>
                            <span>
                                兑换：-{{vout}} 积分
                            </span>
                        </div>
                    </div>
                    <ul>

                        <li  v-for="list in userdata">
                            <div>
                                <div v-if="list.transferType==1">充值</div>
                                <div v-if="list.transferType==2">提币</div>
                                <div v-if="list.transferType==12">直推奖</div>
                                <div v-if="list.transferType==13">开通vip</div>
                                <div v-if="list.transferType==14">HALE兑换CHMC</div>
                                <div v-if="list.transferType==15">积分兑换CHMC</div>
                                <div v-if="list.transferType==16">活动视频积分<span v-if="list.type==1">奖励</span><span v-if="list.type==2">兑换</span></div>
                                <div v-if="list.transferType==17">直属粉丝积分<span v-if="list.type==1">奖励</span><span v-if="list.type==2">兑换</span><span v-if="list.nickName!==null">({{list.nickName}})</span></div>
                                <div v-if="list.transferType==18">星级团队积分<span v-if="list.type==1">奖励</span><span v-if="list.type==2">兑换</span><span v-if="list.nickName!==null">({{list.nickName}})</span></div>
                                <div v-if="list.transferType==19">代理积分<span v-if="list.type==1">奖励</span><span v-if="list.type==2">兑换</span></div>

                                <div>{{Number(list.time) | formatDate}}</div>
                            </div>
                            <div v-if="list.type==1" :class="{'red':list.type==2}" ><span v-if="list.type==1">+</span><span v-if="list.type==2">-</span>{{list.amount}} 积分</div>
                                <div v-if="list.type==2"  class="pr" :class="{'red':list.type==2}" ><span v-if="list.type==1">+</span><span v-if="list.type==2">-</span>{{list.amount}} 积分<img src="../static/images/video_icon/icon_right.png"  @click="toDetail(list.orderId,1)"></div>
                        </li>

                    </ul>
                    <div style="text-align: center;font-size: .28rem;line-height: 1rem">{{loadTxt}}</div>
                </div>
                <div v-show="msg===1" class="Alreadyobtained Alreadyused" >
                    <div class="hales">
                        <div>
                            <div @click="integralswitch(16,1)" :class="{'curs':integralmsg===16}">充币</div>
                            <div @click="integralswitch(17,2)" :class="{'curs':integralmsg===17}">消耗</div>
                        </div>
                        </div>
                    <ul>
                        <li v-for="list in userdata">
                            <div>
                                <div v-if="list.transferType==1">充值</div>
                                <div v-if="list.transferType==2">提币</div>
                                <div v-if="list.transferType==12">直推奖 <span v-if="list.nickName!==null">({{list.nickName}})</span></div>
                                <div v-if="list.transferType==13">开通vip</div>
                                <div v-if="list.transferType==14">HALE兑换CHMC</div>
                                <div v-if="list.transferType==15">积分兑换CHMC</div>
                                <div>{{Number(list.time) | formatDate}}</div>
                            </div>
                            <div :class="{'red':list.type==2}" ><span v-if="list.type==1">+</span><span v-if="list.type==2">-</span>{{list.amount}} HALE</div>
                        </li>

                    </ul>
                    <div style="text-align: center;font-size: .28rem;line-height: 1rem">{{loadTxt}}</div>
                </div>
                <div v-show="msg===2" class="Alreadyobtained Alreadyused" >
                    <div class="integrals">
                        <div>
                            <div @click="integralswitch(16,16)" :class="{'curs':integralmsg===16}">视频积分兑换</div>
                            <div @click="integralswitch(17,17)" :class="{'curs':integralmsg===17}">粉丝积分兑换</div>
                            <div @click="integralswitch(18,18)" :class="{'curs':integralmsg===18}">团队积分兑换</div>
                            <div @click="integralswitch(19,19)" :class="{'curs':integralmsg===19}">代理积分兑换</div>
                        </div>
                        <div>
                            <span>
                               {{allvintext}} ：+{{vin}} CHMC
                            </span>
                            <span>
                                {{allvouttext}}：-{{vout}} CHMC
                            </span>
                        </div>
                    </div>
                    <ul>
                        <li v-for="list in userdata">
                        <div>
                            <div v-if="list.transferType==1">充值</div>
                            <div v-if="list.transferType==2">提币</div>
                            <div v-if="list.transferType==12">直推奖</div>
                            <div v-if="list.transferType==13">开通vip</div>
                            <div v-if="list.transferType==14">HALE兑换CHMC</div>
                            <div v-if="list.transferType==15">积分兑换CHMC</div>
                            <div v-if="list.transferType==16">活动视频积分<span v-if="list.type==1">兑换</span><span v-if="list.type==2">提币</span></div>
                            <div v-if="list.transferType==17">直属粉丝积分<span v-if="list.type==1">兑换</span><span v-if="list.type==2">提币</span><span v-if="list.nickName!==null">{{list.nickName}}</span></div>
                            <div v-if="list.transferType==18">星级团队积分<span v-if="list.type==1">兑换</span><span v-if="list.type==2">提币</span><span v-if="list.nickName!==null">{{list.nickName}}</span></div>
                            <div v-if="list.transferType==19">代理积分<span v-if="list.type==1">兑换</span><span v-if="list.type==2">提币</span></div>
                            <div>{{Number(list.time) | formatDate}}</div>
                        </div>
                        <div :class="{'red':list.type==2}" ><span v-if="list.type==1">+</span><span v-if="list.type==2">-</span>{{list.amount}} CHMC<img src="../static/images/video_icon/icon_right.png"  @click="toDetail(list.orderId,list.type,list.confimStatus)"></div>

                    </li>
<!--                        <li>-->
<!--                            <div>-->
<!--                                &lt;!&ndash;                                <div v-if="data.transactionType==11">HALE兑换积分</div>&ndash;&gt;-->
<!--                                &lt;!&ndash;                                <div v-if="data.transactionType==12">USDT兑换积分</div>&ndash;&gt;-->
<!--                                &lt;!&ndash;                                <div v-if="data.transactionType==13">积分退款</div>&ndash;&gt;-->
<!--                                <div>提币</div>-->
<!--                                <div>2020-02-23 17:32:23</div>-->
<!--                            </div>-->
<!--                            <div class="red">-100.1234 积分</div>-->
<!--                        </li>-->
                    </ul>
                    <div style="text-align: center;font-size: .28rem;line-height: 1rem">{{loadTxt}}</div>
                </div>
                <!--            <div v-show="msg===2" class="Alreadyobtained Alreadyused">-->
                <!--            </div>-->
            </div>
        </div>
<!--        <vue-hash-calendar ref="picker"-->
<!--                           model="dialog"-->
<!--                           :scroll-change-date="true"-->
<!--                           :visible.sync="isShowCalendar"-->
<!--                           :default-datetime="defaultDatetime"-->
<!--                           :is-show-week-view="false"-->
<!--                           format="YY-MM"-->
<!--                           week-start="sunday"-->
<!--                           picker-type="datetime"-->
<!--                           :show-today-button="true"-->
<!--                           @confirm="dateConfirm"-->
<!--                           @click="dateClick"-->
<!--                           @change="dateChange"></vue-hash-calendar>-->
        <!--消息提示-->
        <nlayer
                :maskCancel="false"
                maskBackgroundColor="rgba(0,0,0,0)"
                :autoClose="1200"
                :visible="tipsVisible"
                @close="tipsClosed"
                class="NTOAST ANIMATITE_SCALE_TO_BIG"
                :zIndex="1000"
        >
            <div class='TOAST' v-text="tips"></div>
        </nlayer>
        <div v-if="selectYear" class="vue-datepicker-wrap">
            <div class="vue-datepicker-header" @click.stop="">
                <span @click.stop="switchMonth(-1)" class="vue-datepicker-header-btn vue-datepicker-header-btn-pre">&lt;</span>
                <span @click.stop="selectYear=!selectYear"
                      class="vue-datepicker-header-btn vue-datepicker-header-btn-day">
                    {{select.year}} 年 {{select.month}} 月
                </span>
                <span @click.stop="switchMonth(1)" class="vue-datepicker-header-btn vue-datepicker-header-btn-next">&gt;</span>
            </div>
            <div class="vue-datepicker-content">
                <table>
                    <thead>
                    <th>日</th>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                    </thead>
                    <tbody>
                    <tr v-for="week of list">
                        <!--<td v-for="weekday of week" @click="pick(weekday)"-->
                        <td v-for="weekday of week"
                            :class="{
                                    'flag': weekday.flag,
                                    'active': !weekday.flag && weekday.text == current.date
                                         && select.month == current.month && select.year == current.year}">
                            {{weekday.text}}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div v-if="selectYear" class="vue-date-picker-year-panel">
                    <ul ref="year">
                        <li v-for="y of years" @click.stop="pickYear(y)" :class="{'active': y == select.year}">{{y}}</li>
                    </ul>
                    <ul ref="month">
                        <li v-for="(m, $index) of months"
                            @click.stop="pickMonth($index + 1)"
                            :class="{'active': $index + 1 == select.month}">
                            {{m}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue'
    import {InfiniteScroll} from 'mint-ui'
    import Nlayer from '@/components/Nlayer'
    Vue.use(InfiniteScroll)
    import urlUtil from '../util/apiUtil.js'
    import jsonAjax from '../util/restUtil.js'
    import userPhoto from '@/static/images/shop/mrbj.png'
    import vueHashCalendar from 'vue-hash-calendar'
    // 引入组件CSS样式
    import 'vue-hash-calendar/lib/vue-hash-calendar.css'
    // 注册组件库
    Vue.use(vueHashCalendar)
    export default {
        props: {
            moment: {
                type: Number,
                default() {
                    return new Date().getTime()
                }
            }
        },
        components: {
            Nlayer

        },
        data () {
            return {
                show: false,    // 控制日历面板的显示与隐藏
                selectYear: false,  // 控制年份的面板的显示和隐藏
                current: '',    // 已选择的日期时间。yyyy-MM-dd
                select: {       // 已选择的日期对象
                    year: '',
                    month: '',
                    date: '',
                    day: ''
                },
                currentMonthFirstDay: null, // 当前月的1号属于星期几
                currentMonthEndDate: null,  // 当前月的最后一天是几号
                currentMonthEndDay: null,   // 当前月的最后一天属于星期几
                lastMonthEndDate: null,     // 上个月的最后一天是几号
                list: [],   // 日历的二维数组
                years: [],  // 1900-2100
                months: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                defaultDatetime: new Date(),
                integralmsg:16,
                integralstro:16,
                isShowCalendar:false,
                systemDate: '',
                msg: 0,
                userdata: [],
                creditsInput: '',
                creditsOutput:'',
                loadTag: true,
                loadTagtwo:true,
                curPage:0,//当前页码
                curPagetwo:1,//当前页码
                loadTxt:'',
                loadTxttwo:'',
                currency:"credits",
                userinfo:JSON.parse(localStorage.getItem('userinfo')),
                allvin:"",
                vin:"",
                vout:"",
                allvout:"",
                allvouttext:"兑换",
                allvintext:"获得",
                tipsVisible: false,
                tips:""
            }
        },
        watch: {
            select: {
                handler(newVal) {
                    let pre
                    if (newVal.month == 1) {
                        pre = new Date(newVal.year - 1, 12, 0)
                    } else {
                        pre = new Date(newVal.year, newVal.month - 1, 0)
                    }
                    this.lastMonthEndDate = pre.getDate()
                    // 获取日历排表
                    this.getDateList()
                },
                deep: true
            },
            show(newVal) {
                if (newVal) {
                    document.addEventListener('click', this.bindEvent)
                } else {
                    document.removeEventListener('click', this.bindEvent)
                }
            },
            // 打开年份选择器的时候使当前年份、月份出现在窗口顶部
            selectYear(newVal) {
                if (newVal) {
                    this.$nextTick(() => {
                        const year = this.$refs.year
                        const month = this.$refs.month
                        const y = year.getElementsByClassName('active')[0].innerHTML
                        const m = month.getElementsByClassName('active')[0].innerHTML
                        year.scrollTop = (y - 1900) * 30
                        month.scrollTop = (this.select.month - 1) * 30
                    })
                }
            }
        },
        /**初始化组件的时候进行数据处理**/
        created: function () {
            var that = this
            that.curPage=0;
            if (localStorage.getItem('incomsg')==null){

            }else {
                that.msg=Number(localStorage.getItem('incomsg'))
                if (that.msg==0) {
                    that.currency="credits"
                }else if(that.msg==1){
                    that.currency="hale"
                }else {
                    that.currency="CHMC"
                }
            }
            if (localStorage.getItem('incostro')==null){

            }else {
                that.integralstro=Number(localStorage.getItem('incostro'))
            }
            if (localStorage.getItem('integralmsg')==null){

            }else {
                that.integralmsg=Number(localStorage.getItem('integralmsg'))
            }
            this.transform(this.moment)
            this.complete()
            // 获得年份列表： 1900-2100
            for(let i = 1900; i <= 2100; i++) {
                this.years.push(i)
            }
            var date = new Date()
            var seperator1 = '-'
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var strDate = date.getDate()
            if (month >= 1 && month <= 9) {
                month = '0' + month
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = '0' + strDate
            }
            this.systemDate = year + seperator1 + month
        },
        filters: {
            numFilter (value) {
                let realVal = ''
                if (value) {
                    // 截取当前数据到小数点后2位
                    let tempVal = parseFloat(value).toFixed(3)
                    realVal = tempVal.substring(0, tempVal.length - 1)
                } else {
                    realVal = '0'
                }
                return realVal
            },   // 日期格式过滤器
            dateFormat(val) {
                if (!val) {
                    return ''
                }
                /*return `${val.year}-${val.month}-${val.date}`.replace(/\d+/g, (a) => {
                    return (a.length === 4) ? a : ((a.length === 2) ? a : ('0' + a))
                })*/

                return `${val.year}-${val.month}`.replace(/\d+/g, (a) => {
                    return (a.length === 4) ? a : ((a.length === 2) ? a : ('0' + a))
                })
            },
            formatDate: function (value) {
                let date = new Date(value)
                let y = date.getFullYear()
                let MM = date.getMonth() + 1
                MM = MM < 10 ? ('0' + MM) : MM
                let d = date.getDate()
                d = d < 10 ? ('0' + d) : d
                let h = date.getHours()
                h = h < 10 ? ('0' + h) : h
                let m = date.getMinutes()
                m = m < 10 ? ('0' + m) : m
                let s = date.getSeconds()
                s = s < 10 ? ('0' + s) : s
                return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
            }
        },
        methods: {
            /**
             * 将时间转化为具体的 年、月、日、星期
             **/
            transform(time) {
                const date = new Date(time)
                this.select.year = date.getFullYear()
                this.select.month = date.getMonth() + 1
                this.select.date = date.getDate()
                this.select.day = date.getDay()
                this.currentMonthFirstDay =
                    new Date(this.select.year, this.select.month - 1, 1, 0).getDay()
                this.currentMonthEndDate =
                    new Date(this.select.year, this.select.month, 0).getDate()
                this.currentMonthEndDay =
                    new Date(this.select.year, this.select.month, 0).getDay()
            },
            /*
            * 计算出日历列表，二维数组
            * 第一层为星期，第二层为每星期的第几天
            */
            getDateList() {
                this.list = []
                // 获取日历第一行的数据（需加上第一个星期中所包含上个月的几天）
                let temp = this.lastMonthEndDate - (this.currentMonthFirstDay - 1)
                let list =
                    this.numberList(temp, this.lastMonthEndDate, true)
                        .concat(this.numberList(1, 7 - this.currentMonthFirstDay))

                this.list.push(list)
                temp = (7 - this.currentMonthFirstDay) + 1

                /*
                * 剩下的行数
                */
                // 计算除了第一行剩下的天数
                const leftDays = this.currentMonthEndDate - (7 - this.currentMonthFirstDay)
                // 剩下的星期数
                const lineNumber = Math.ceil(leftDays / 7)
                // 包含下个月日历的天数
                const nextDays = 7 - (leftDays % 7)

                for (let i = 0; i < lineNumber; i++) {
                    if (i === lineNumber - 1 && nextDays > 0 && nextDays !== 7) {
                        this.list[lineNumber] =
                            this.numberList(temp, this.currentMonthEndDate)
                                .concat(this.numberList(1, nextDays, true))
                    } else {
                        this.list.push(this.numberList(temp, temp + 6))
                    }
                    temp = temp + 7
                }
            },
            /*
            * 获得日历数组
            * start: 开始日
            * end: 结束日
            * flag： boolean值，判断是否属于本月
            */
            numberList(start, end, flag) {
                let list = []
                for (let i = start; i <= end; i++) {
                    list.push({
                        text: i,
                        flag: !!flag
                    })
                }
                return list
            },
            /*
            * 切换月份， -1为当前月份-1，+1为当前月份+1
            */
            switchMonth(n) {
                let year = this.select.year
                if (n===-1) {
                    const pre = this.select.month === 1 ? 12 : this.select.month - 1
                    if (pre === 12) {
                        this.transform(new Date(year - 1, pre - 1, this.select.date))
                    } else {
                        this.transform(new Date(year, pre - 1, this.select.date))
                    }

                } else {
                    const next = this.select.month === 12 ? 1 : this.select.month + 1
                    if (next === 1) {
                        this.transform(new Date(year + 1, next - 1, this.select.date))
                    } else {
                        this.transform(new Date(year, next - 1, this.select.date))
                    }
                }
            },
            pick(day) {

                if (!!day.flag) {
                    // 当页日历上可能还会显示部分上个月或者下个月的部分天数，根据标识来做判断
                    // 并对月份作出相应的处理
                    if (parseInt(day.text) > 15) {
                        this.transform(new Date(this.select.year, this.select.month - 2, parseInt(day.text)))
                    } else {
                        this.transform(new Date(this.select.year, this.select.month, parseInt(day.text)))
                    }
                } else {
                    this.transform(new Date(this.select.year, this.select.month - 1, parseInt(day.text)))
                }
                this.complete()
            },
            // 绑定事件：点击关闭日历面板
            bindEvent() {
                this.show = false
                this.selectYear = false
            },
            // 选取年
            pickYear(n) {
                this.transform(new Date(n, this.select.month - 1, this.select.date))
                this.complete()
            },
            // 选取月
            pickMonth(n) {
                this.transform(new Date(this.select.year, n - 1, this.select.date))
                this.complete()

                this.selectYear = false

            },
            // 更改选中时间并向父组件派发事件
            complete() {
                var that=this;
                // 触发父组件的传过来的picked事件。三个参数: 年，月，日
                //this.$emit('picked', this.select.year, this.select.month, this.select.date)
                this.$emit('picked', this.select.year, this.select.month, 2)

                this.current = {
                    year: this.select.year,
                    month: this.select.month,
                    date: 2
                }
                if (this.current.month<10){
                    if(Number(new Date().getTime() / 1000)<Number(new Date(that.current.year+"-0"+that.current.month).getTime() / 1000)){
                        that.showTips("当前月份不可选")
                    }else {
                        that.systemDate=that.current.year+"-0"+that.current.month;
                        that.userdata=[]
                        that.curPage=0
                        that.doQuery()
                    }
                } else{
                    if(Number(new Date().getTime() / 1000)<Number(new Date(that.current.year+"-"+that.current.month).getTime() / 1000)){
                        that.showTips("当前月份不可选")
                    }else {
                        that.systemDate=that.current.year+"-"+that.current.month;
                        that.userdata=[]
                        that.curPage=0
                        that.doQuery()
                    }
                }

            },
            // 打开消息提示
            showTips(msg){
                console.log(msg)
                this.tips = msg
                this.tipsVisible = true
            },
            // 监听消息提示关闭
            tipsClosed(){
                this.tipsVisible = false
            },
            back(){
                this.$router.go(-1);
                localStorage.removeItem('incomsg');
                localStorage.removeItem('incostro');
                localStorage.removeItem('integralmsg');
            },
            integralswitch(index,stro){
                if (this.integralmsg==index) {
                }else {
                    this.integralstro=stro
                    this.integralmsg=index;
                    localStorage.setItem('incostro',this.integralstro);
                    localStorage.setItem('integralmsg',this.integralmsg);
                    this.userdata=[]
                    this.curPage=0
                    this.doQuery()
                }
            },
            showCalendarDialog () {// 显示日历
                this.isShowCalendar = true;
            },
            // dateChange (date){// 日期改变触发
            //     if(Number(new Date().getTime() / 1000)<Number(new Date(date).getTime() / 1000)){
            //         this.showTips("当前月份不可选")
            //     }else {
            //     }
            // },
            // dateConfirm (date) {// 点击确认按钮触发
            //     if(Number(new Date().getTime() / 1000)<Number(new Date(date).getTime() / 1000)){
            //         this.showTips("当前月份不可选")
            //     }else {
            //         this.systemDate=date;
            //         this.userdata=[]
            //         this.curPage=0
            //         this.doQuery()
            //     }
            //
            // },
            dateClick (date) {// 点击日期时按钮触发
                console.log(date)
            },
            routerBack: function () {
                //返回上一个路由
                this.$router.back(-1)
            },
            loadMore: function () {
                var that=this;
                if (that.msg==0) {
                    console.log("loadTag")
                    if (this.loadTag) {

                        this.doQuery();
                    }
                }else {
                    console.log("loadTagtwo")
                    if (this.loadTagtwo) {

                        this.doQuery();
                    }
                }

            },
            getCredits:function(){
                var that=this;
                that.msg=0;
                that.currency="credits"
                that.allvin=""
                that.allvout=""
                that.userdata=[]
                that.curPage=0
                localStorage.setItem('incomsg',that.msg);
                that.loadTag=true;
                that.integralmsg=16
                that.integralstro=16
                that.doQuery()
                that.allvouttext="兑换"
                that.allvintext="获得"
            },
            OutputInfo:function(){
                var that=this;
                that.msg=1;
                that.currency="hale"
                that.allvin=""
                that.allvout=""
                that.userdata=[]
                that.curPage=0
                localStorage.setItem('incomsg',that.msg);
                that.loadTag=true;
                that.integralmsg=16
                that.integralstro=1
                that.doQuery()
                that.allvouttext="消耗"
                that.allvintext="充币"
            },
            Projectbi:function(){
                var that=this;
                that.msg=2;
                that.currency="CHMC"
                that.allvin=""
                that.allvout=""
                that.userdata=[]
                that.curPage=0
                localStorage.setItem('incomsg',that.msg);
                that.loadTag=true;
                that.integralmsg=16
                that.integralstro=16
                that.doQuery()
                that.allvouttext="提币"
                that.allvintext="兑换"
            },
            doQuery: function () {
                var that = this;
                that.loadTag = true;
                that.loadTagtwo = true;
                    that.curPage++;
                that.loadTxt='加载中...'

                jsonAjax.get(urlUtil.getApiUrl('getVinVoutDetail'), {userId:that.userinfo.customerId,currency:that.currency,pageNo:that.curPage,pageSize:15,type:that.integralstro,time:that.systemDate}, function (result) {
                    if (result.returnCode != 1) {
                        that.showTips(result.message)
                        // 跳转到我的页面
                        setTimeout(() => {
                            that.$router.replace({
                                path: '/login'
                            })
                        }, 1000)

                        return
                    }
                    that.allvin = result.resultData.allVin
                    that.allvout = result.resultData.allVout
                    that.vin = result.resultData.vin
                    that.vout = result.resultData.vout
                    var allProducts = [];

                    allProducts = allProducts.concat(that.userdata, result.resultData.list);
                    that.userdata = allProducts
                    console.log(that.userdata)
                    if (result.resultData.list == []) {
                        that.loadTag = false;
                        that.loadTxt = '没有更多数据'
                    } else {
                        that.loadTxt = '加载完成'
                    }


                })
                    // jsonAjax.post(urlUtil.getApiUrl('getCreditsInputInfo'), {userId: that.$store.state.userinfo.userId,page:that.curPage}, function (result) {
                    //     if (result.success){
                    //         var allProducts = [];
                    //         allProducts = allProducts.concat(that.creditsInput, result.result);
                    //         that.creditsInput = allProducts
                    //     }else {
                    //         that.loadTag=result.success
                    //     }
                    //     if (that.result==null){
                    //         that.loadTxt='没有更多数据'
                    //     }else {
                    //         that.loadTxt='正在加载...'
                    //     }
                    //     console.log(that.creditsInput)
                    // })


                    // that.curPagetwo++;
                    // console.log(that.curPagetwo)
                    // jsonAjax.post(urlUtil.getApiUrl('getCreditsOutputInfo'), {userId: that.$store.state.userinfo.userId,page:that.curPagetwo}, function (result) {
                    //     if (result.result==""){
                    //         that.loadTagtwo=false;
                    //     }else if (result.success){
                    //         var allProducts = [];
                    //         allProducts = allProducts.concat(that.creditsOutput, result.result);
                    //         that.creditsOutput = allProducts
                    //     }
                    //     if (that.result==null){
                    //         that.loadTxttwo='没有更多数据'
                    //     }else {
                    //         that.loadTxttwo='正在加载...'
                    //     }
                    //     console.log(that.creditsOutput)
                    // })
                },
            toDetail(e,type,status){
                var that=this;
                if (type==1){
                    that.$router.push({
                        path: '/exchangeDealDetail',
                        query: {
                            id: e,
                            dealResState:1
                        }
                    })
                } else {
                    that.$router.push({
                        path: '/currencyDealDetail',
                        query: {
                            id: e,
                            currencyName: that.currency,
                            dealResState: status,
                            dealName: 2
                        }
                    })
                }


            },
            },



    }
</script>

<style scoped>
    .content_box {
        background: #F5F5F5;
        height: 100%;
        z-index: 2;
    }

    .je_dp {
        border-radius: .1rem;
        padding: 10px;
        width: 90%;
        margin-left: 5%;
        background: #203395;
        height: 3rem;
        color: white;
        text-align: center;
        margin-top: 1.1rem;
    }
    .je_dp > div:nth-of-type(1) {
        margin-top: .1rem;
    }
    .je_dp > div:nth-of-type(2) {
        height: .8rem;
        line-height: .8rem;
        font-size: .5rem;
        font-weight: bold;
    }
    .lj_jf{
        font-size:.4rem!important;
        font-weight: bold;
    }
    /*.je_dp > div:nth-of-type(3) {*/
    /*    margin-top: .2rem;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*}*/

    .je_dp > div:nth-of-type(3) > div {
        font-size: .2rem;
        text-align: center;
        /*width: 50%;*/

    }
    .je_dp > div:nth-of-type(3) > div:nth-of-type(2) {
        height: .8rem;
        line-height: .8rem;
    }
    .je_dp > div:nth-of-type(3) > div > div:nth-of-type(2) {
        font-weight: bold;
        font-size: .34rem;
        line-height: .6rem;
    }

    .je_dp > div:nth-of-type(3) > div > div:nth-of-type(1) {
        font-size: .22rem;
    }

    /*.je_dp > div:nth-of-type(3) > div:nth-of-type(1) {*/
    /*    border-right: 1px solid white;*/
    /*}*/

    .tab-tit {
        background: white;
        margin-top: .15rem;
        display: flex;
        justify-content: space-around;
    }

    .tab-tit div {

        background: white;
        display: inline-block;
        height: 1rem;
        line-height: .8rem;
        width: 18%;
        font-size: .3rem;
        text-align: center;
        color: #333;
        padding-top: 0.1rem;
    }

    .tab-tit .cur {
        font-weight: bold;
        color: #203395;
        border-bottom: 2px solid #203395;
    }
        .curs{
            background: #F1F3FF!important;
            color: #203395!important;
        }
    #tab_positi{
        /*position: fixed;*/
        /*  width: 100%;*/
        /*  height: 50%;*/
        /*  bottom: 1.4rem;*/
        /*  overflow: auto;*/

    }
    .tab-con{
    }
    .tab-con>div {
        background: white;
        overflow: auto;
        margin: 0 auto;
        padding-top: .1rem;
    }
    .Alreadyobtained li{
        width: 100%;
        padding:.1rem .3rem;
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EEEEEE;
        background: white;
    }
    .Alreadyobtained li>div>div:nth-of-type(1){
        margin-top: .075rem;
        color: #333;
        font-size: .26rem;
        margin-bottom: .025rem;
    }
    .Alreadyobtained li>div>div:nth-of-type(2){
        color: #666;
        font-size: .22rem;
    }
    .Alreadyobtained li>div:nth-of-type(2){
        position: relative;
        line-height: .925rem;
        color: #203395;
        font-weight: bold;
    }
    .Alreadyobtained li .pr{
        padding-right: .35rem;
    }
    .Alreadyobtained li>div:nth-of-type(2) img {
        width: .3rem;
        height: .33rem;
        position: absolute;
        right: -.05rem;
        top: .3rem;
    }
    .Alreadyused li>div:nth-of-type(2){
        position: relative;
        padding-right: .35rem;
        color: #203395;
        font-weight: bold;
    }
    .Alreadyused li>div:nth-of-type(2) img{
        width: .3rem;
        height: .33rem;
        position: absolute;
        right: -.05rem;
        top: .3rem;
    }
    .Exchangepoints{
        position: fixed;
        bottom: .4rem;
        left: 7.25%;
        width: 85%;
        color: white;
        background: #203395;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: .3rem;
        border-radius:5px;
    }
    .allincome{
        position: relative;
        padding:  0 .3rem;
        background: white;
        height: 1.2rem;
        /*line-height: 1.2rem;*/
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        font-size: .24rem;
    }
    .allincome img{
        width: .3rem;
        height: .3rem;
        margin-left: .1rem;
        margin-top: .05rem;
        position: absolute;
        left: 1.4rem;
        top: .175rem;
    }
    .allincome div:nth-of-type(1){
        margin-top: .15rem;
    }
    .allincome div:nth-of-type(2){
        height: .4rem;
        line-height:.4rem;
    }
    .allincome span:nth-of-type(2){
        margin-left: .3rem;
    }
    .red{
        color: #F12B2B!important;
    }
    .integrals{
        padding: 0 .3rem;
        height: 1.5rem;
    }
    .integrals>div:nth-of-type(1){
        display: flex;
        justify-content: space-between;
    }
    .integrals>div:nth-of-type(2) {
        color: #203395;
        font-size: .22rem;
        height: .7rem;
        line-height: .7rem;
        border-bottom: 1px solid #eee;
    }
    .integrals>div:nth-of-type(1) div{
        color: #333333;
        width: 1.65rem;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        font-size: .22rem;
        background: #F5F5F5;
    }
    .hales{
        padding: 0 .3rem;
        height: .75rem;
    }
    .hales>div:nth-of-type(1){
        display: flex;
        justify-content: space-between;
    }
    .hales>div:nth-of-type(1) div{
        color: #333333;
        width: 3.4rem;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        font-size: .22rem;
        background: #F5F5F5;
    }

    .vue-datepicker > input {
        padding: .1rem 0;
        /*text-align: center;*/
        width: 1.5rem;
        line-height: .3rem;
        border: none;
        border-radius: .06rem;
        font-size: .26rem;
        font-weight: bold;
        outline: none;
        cursor: pointer;
    }
    .vue-datepicker > input:focus {
        border: 1px solid #20a0ff;
    }
    .vue-datepicker-wrap {
        background: white;
        position:absolute ;
        left: 0;
        top: 3.2rem;
        width: 240px;
        box-shadow: 2px 2px 8px #bdb8b8;
        z-index: 999; }
    .vue-datepicker-wrap .vue-datepicker-header {
        padding: 0px 15px;
        font-size: 14px;
        text-align: center;
        line-height: 36px;
        border-bottom: 1px solid #ccc; }
    .vue-datepicker-wrap .vue-datepicker-header .vue-datepicker-header-btn {
        cursor: pointer; }
    .vue-datepicker-wrap .vue-datepicker-header .vue-datepicker-header-btn:hover {
        color: #008afe; }
    .vue-datepicker-wrap .vue-datepicker-header .vue-datepicker-header-btn-pre {
        float: left; }
    .vue-datepicker-wrap .vue-datepicker-header .vue-datepicker-header-btn-next {
        float: right; }
    .vue-datepicker-wrap .vue-datepicker-content {
        z-index: 988;
        position: relative; }
    .vue-datepicker-wrap .vue-datepicker-content table {
        width: 100%;
        border-collapse: collapse; }
    .vue-datepicker-wrap .vue-datepicker-content table thead {
        line-height: 30px;
        font-size: 12px;
        background: #eee; }
    .vue-datepicker-wrap .vue-datepicker-content table tbody tr {
        line-height: 28px; }
    .vue-datepicker-wrap .vue-datepicker-content table tbody tr td {
        font-size: 12px;
        text-align: center;
        cursor: pointer; }
    .vue-datepicker-wrap .vue-datepicker-content table tbody tr td.active, .vue-datepicker .vue-datepicker-wrap .vue-datepicker-content table tbody tr td.active:hover {
        color: #fff;
        background: #008afe; }
    .vue-datepicker-wrap .vue-datepicker-content table tbody tr td.flag {
        color: #999; }
    .vue-datepicker-wrap .vue-datepicker-content table tbody tr td:hover {
        background: #eee; }
    .vue-datepicker-wrap .vue-datepicker-content .vue-date-picker-year-panel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff; }
    .vue-datepicker-wrap .vue-datepicker-content .vue-date-picker-year-panel ul {
        width: 50%;
        height: 100%;
        margin: 0;
        padding-left: 0;
        box-sizing: border-box;
        overflow-y: auto;
        float: left;
        list-style: none; }
    .vue-datepicker-wrap .vue-datepicker-content .vue-date-picker-year-panel ul li {
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        cursor: pointer; }
    .vue-datepicker-wrap .vue-datepicker-content .vue-date-picker-year-panel ul li.active {
        color: #fff;
        background: #203395; }
    .vue-datepicker-wrap .vue-datepicker-content .vue-date-picker-year-panel ul:first-child {
        border-right: 1px solid #203395; }
</style>
