import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'


import Main from 'pages/Main'
import Asset from 'pages/Asset'
import Market from 'pages/Market'
import Product from 'pages/Product'
import News from 'pages/News'
import My from 'pages/My'
import provincialmap from 'pages/Provincialmap'
import municipalmap from 'pages/Municipalmap'
import cart from 'pages/cart'




import Otc from 'pages/News'
import map from 'pages/map'
import Buy from 'pages/Buy'
import BuyHale from 'pages/BuyHale'
import SellHale from 'pages/SellHale'
import OrderDetail from 'pages/OrderDetail'
import Sell from 'pages/Sell'
import Entrust from 'pages/Entrust'
import Order from 'pages/Order'
import Releasecommission from 'pages/Releasecommission'
// 新模块
import Transaction from 'pages/Transaction'
import Search from 'pages/Search'
import Searchmap from 'pages/searchmap'
import ExchangeDealDetail from 'pages/ExchangeDealDetail'
import NewFindPass from 'pages/NewFindPass'
import NewFind from 'pages/NewFind'
import ShopAuthorize from 'pages/ShopAuthorize'
import Shop from 'pages/Shop'
import ShopIndex from 'pages/ShopIndex'
import ShopCate from 'pages/ShopCate'
import ShopGroup from 'pages/ShopGroup'
import ShopCart from 'pages/ShopCart'
import ShopMy from 'pages/ShopMy'
import ShopMyCouponlist from 'pages/ShopMyCouponlist'


//首页8大块
import ShopPanic from 'pages/ShopPanic'
import ShopGroupSearch from 'pages/ShopGroupSearch'
import ShopSpecialActivity from 'pages/ShopSpecialActivity'
import ShopSignIn from 'pages/ShopSignIn'
import ShopCouponDraw from 'pages/ShopCouponDraw'
import ShopArticleList from 'pages/ShopArticleList'
import ShopIntegralProduct from 'pages/ShopIntegralProduct'

import ShopArticleDetail from 'pages/ShopArticleDetail'
import ShopSpecialActivityDetail from 'pages/ShopSpecialActivityDetail'

import ShopProduct from 'pages/ShopProduct'
import ShopProductDetail from 'pages/ShopProductDetail'
import ShopSearch from 'pages/ShopSearch'
import ShopProductList from 'pages/ShopProductList'
import ShopOrderConfirm from 'pages/ShopOrderConfirm'
import ShopAddressList from 'pages/ShopAddressList'
import ShopOrderPay from 'pages/ShopOrderPay'
import ShopOrderPaySuccess from 'pages/ShopOrderPaySuccess'
import ShopOrderPayFail from 'pages/ShopOrderPayFail'
import ShopProductEvaluate from 'pages/ShopProductEvaluate'
import ShopCouponListselect from 'pages/ShopCouponListselect'

// 家兴
import IdCardAuthen from 'pages/IdCardAuthen'
import BrushFaceAuthen from 'pages/BrushFaceAuthen'
import FinishAuthen from 'pages/FinishAuthen'
import Integraldetail from 'pages/Integraldetail'
import Myassets from 'pages/Myassets'
import Incomedetails from 'pages/Incomedetails'
import Setup from 'pages/Setup'
import Myteam from 'pages/Myteam'
import Retrievetransactionpassword from 'pages/Retrievetransactionpassword'
import Retrieveloginpassword from 'pages/Retrieveloginpassword'
import Changeloginpassword from 'pages/Changeloginpassword'
import Changetransactionpassword from 'pages/Changetransactionpassword'
import Accountandsecurity from 'pages/Accountandsecurity'
import ShopOrderList from 'pages/ShopOrderList'
import Shoplistvaluate from 'pages/Shoplistvaluate'
import ShoporderListrefund from 'pages/ShoporderListrefund'
import Shopwallet from 'pages/Shopwallet'
import ShopIntegralrecord from 'pages/ShopIntegralrecord'
import ShopExchangepoints from 'pages/ShopExchangepoints'
import ShopCurrencybalance from 'pages/ShopCurrencybalance'
import ShopConsumptiondetails from 'pages/ShopConsumptiondetails'
import ShopMonthlybill from 'pages/ShopMonthlybill'
import Shopmycollect from 'pages/Shopmycollect'
import ShopmyHistory from 'pages/ShopmyHistory'
import ShopinvoiceTab from 'pages/ShopinvoiceTab'
import Shopaddressedit from 'pages/Shopaddressedit'
import ShopProductsDetail from 'pages/ShopProductsDetail'
import ShoporderRefund from 'pages/ShoporderRefunda'
import ShoporderCheckrefund from 'pages/ShoporderCheckrefund'
import ShoporderDetail from 'pages/ShoporderDetail'
import ShoporderEvaluate from 'pages/ShoporderEvaluate'
import ShoporderCheckevaluate from 'pages/ShoporderCheckevaluate'
import ShoporderLogistics from 'pages/ShoporderLogistics'
import ShopBilldetails from 'pages/ShopBilldetails'
import ShopUserAgreement from 'pages/ShopUserAgreement'
import ShopPrivacyAgreement from 'pages/ShopPrivacyAgreement'




import CurrencyDetail from 'pages/CurrencyDetail'
import CurrencyCollect from 'pages/CurrencyCollect'
import CurrencyTransfer from 'pages/CurrencyTransfer'
import CurrencyExchange from 'pages/CurrencyExchange'
import CurrencyDealDetail from 'pages/CurrencyDealDetail'
import CurrencyDealDetailtwo from 'pages/CurrencyDealDetailtwo'
import Notice from 'pages/Notice'
import NoticeDetail from 'pages/NoticeDetail'
import Login from 'pages/Login'
import Register from 'pages/Register'
import NotFound from 'pages/NotFound'
import NewsDetail from 'pages/NewsDetail'
import NewsList from 'pages/NewsList'
import LockedPosition from 'pages/LockedPosition'
import Group from 'pages/Group'
import CalculatePower from 'pages/CalculatePower'
import PersonalCenter from 'pages/PersonalCenter'
import WalletList from 'pages/WalletList'
import WalletDetail from 'pages/WalletDetail'
import Share from 'pages/Share'
import Feedback from 'pages/Feedback'
import AboutUs from 'pages/AboutUs'
import UserAgreement from 'pages/UserAgreement'
import PrivacyAgreement from 'pages/PrivacyAgreement'
import ModifyPassword from 'pages/ModifyPassword'
import ExportMnemonicWord from 'pages/ExportMnemonicWord'
import FillMnemonicWord from 'pages/FillMnemonicWord'
import LockedPositionDetail from 'pages/LockedPositionDetail'
import IncomeRecord from 'pages/IncomeRecord'
import PowerTabInvestDetail from 'pages/PowerTabInvestDetail'
import SetPassword from 'pages/SetPassword'
import ForgetPassword from 'pages/ForgetPassword'
import FindPwdForMnemonicWord from 'pages/FindPwdForMnemonicWord'
import ModifyPassword2 from 'pages/ModifyPassword2'
import BackupMnemonicWord from 'pages/BackupMnemonicWord'
import UsingAgreement from 'pages/UsingAgreement'
import FindPass from 'pages/FindPass'
import Node from 'pages/Node'
import WalkThough from 'pages/WalkThough'
import Scan from 'pages/Scan'
import ChangeLanguage from 'pages/ChangeLanguage'
import FindPassTabTel from 'pages/FindPassTab/FindPassTabTel'
import FindPassTabEmail from 'pages/FindPassTab/FindPassTabEmail'
import FindPassTabWord from 'pages/FindPassTab/FindPassTabWord'
import RegisterTabTel from 'pages/registerTab/RegisterTabTel'
import RegisterTabEmail from 'pages/registerTab/RegisterTabEmail'
import NoticeTabTransfer from 'pages/noticeTab/NoticeTabTransfer'
import NoticeTabSystem from 'pages/noticeTab/NoticeTabSystem'
import PowerTabInvest from 'pages/PowerTab/PowerTabInvest'
import PowerTabExchange from 'pages/PowerTab/PowerTabExchange'
import PowerTabAward from 'pages/PowerTab/PowerTabAward'
import Bind from 'pages/Bind'
import ModifyBind from 'pages/ModifyBind'
import AddressBook from 'pages/AddressBook'
import AddBook from 'pages/AddBook'
import AddressBookDetail from 'pages/AddressBookDetail'
import EditAddressBook from 'pages/EditAddressBook'
import ImportWallet from 'pages/ImportWallet'

import nlayerExample from '../example/LayerExample'
import swtichLang from '../example/SwtichLang'
import scrollExample from '../example/ScrollExample'
import RealNameAuthen from 'pages/RealNameAuthen'
import BankCardAuthen from 'pages/BankCardAuthen'
import ChangeTel from 'pages/ChangeTel'
import RealChangeTel from 'pages/RealChangeTel'
Vue.use(Router)

const example = [
    {
        path: '/nlayerExample',
        name: 'nlayerExample',
        component: nlayerExample
    },
    {
        path: '/swtichLang',
        name: 'swtichLang',
        component: swtichLang
    },
    {
        path: '/scrollExample',
        name: 'scrollExample',
        component: scrollExample
    }
]


const router =  new Router({
    linkActiveClass: 'active',
    routes: [

        {
            path: '/',
            name: 'Main',
            component: Main,
            redirect: '/walkThough',
            children: [
                {
                    path: '/asset',
                    name: 'Asset',
                    component: Asset
                },
                {
                    path: '/otc',
                    name: 'Otc',
                    component: Otc,
                    redirect: '/otc/buy',
                    children: [
                        {
                            path: '/otc/buy',
                            name: 'Buy',
                            component: Buy
                        },
                        {
                            path: '/otc/sell',
                            name: 'Sell',
                            component: Sell
                        },
                        {
                            path: '/otc/entrust',
                            name: 'Entrust',
                            component: Entrust,
                            meta: {
                                mustLogin: true
                            }
                        },

                        {
                            path: '/otc/order',
                            name: 'Order',
                            component: Order,
                            meta: {
                                mustLogin: true
                            }
                        }
                    ]
                },
                {
                    path: '/market',
                    name: 'Market',
                    component: Market
                },
                {
                    path: '/product',
                    name: 'Product',
                    component: Product,
                    redirect: '/product/lockedPosition',
                    children: [
                        {
                            path: '/product/lockedPosition',
                            name: 'LockedPosition',
                            component: LockedPosition
                        },
                        {
                            path: '/product/group',
                            name: 'Group',
                            component: Group
                        },
                        {
                            path: '/product/calculatePower',
                            name: 'CalculatePower',
                            component: CalculatePower,
                            redirect: '/product/calculatePower/powerTabInvest',
                            children: [
                                {
                                    path: '/product/calculatePower/powerTabInvest',
                                    name: 'PowerTabInvest',
                                    component: PowerTabInvest
                                },
                                {
                                    path: '/product/calculatePower/powerTabExchange',
                                    name: 'PowerTabExchange',
                                    component: PowerTabExchange
                                },
                                {
                                    path: '/product/calculatePower/powerTabAward',
                                    name: 'PowerTabAward',
                                    component: PowerTabAward
                                }
                            ]
                        }
                    ]
                },
                {
                    path: '/news',
                    name: 'News',
                    component: News
                },
                {
                    path: '/my',
                    name: 'My',
                    component: My
                },


            ]
        },
        {
            path: '/provincialmap',
            name: 'provincialmap',
            component:provincialmap,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/municipalmap',
            name: 'municipalmap',
            component:municipalmap,
            meta: {
                mustLogin: true
            }
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        },

		{
			path:'/newFind',
			name:'NewFind',
			component:NewFind
		},
        {
            path: '/register',
            name: 'Register',
            component: Register,
            redirect: '/register/registerTabTel',
            children: [
                {
                    path: '/register/registerTabEmail',
                    name: 'RegisterTabEmail',
                    component: RegisterTabEmail
                },
                {
                    path: '/register/registerTabTel',
                    name: 'RegisterTabTel',
                    component: RegisterTabTel
                },
            ]
        },

        {
            path: '/importWallet',
            name: 'ImportWallet',
            component: ImportWallet
        },
        {
            path: '/Releasecommission',
            name: 'Releasecommission',
            component: Releasecommission,
            meta: {
                mustLogin: true
            }
        },

// 实名认证模块
        {
            path:'/changeTel',
            name:'ChangeTel',
            component:ChangeTel,
            meta: {
                mustLogin: true
            }
        },
        {
            path:'/realChangeTel',
            name:'RealChangeTel',
            component:RealChangeTel,
            meta: {
                mustLogin: true
            }
        },
        {
            path:'/realNameAuthen',
            name:'RealNameAuthen',
            component:RealNameAuthen,
            meta: {
                mustLogin: true
            }
        },
        {
            path:'/bankCardAuthen',
            name:'BankCardAuthen',
            component:BankCardAuthen,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/sellHale',
            name: 'SellHale',
            component: SellHale,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/buyHale',
            name: 'BuyHale',
            component: BuyHale,
            meta: {
                mustLogin: true
            }
        },   {
            path: '/search',
            name: 'Search',
            component: Search,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/searchmap',
            name: 'Searchmap',
            component: Searchmap,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/map',
            name: 'map',
            component: map,
            meta: {
                mustLogin: true
            }
        },

        {
            path: '/cart',
            name: 'cart',
            component: cart,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/orderDetail',
            name: 'OrderDetail',
            component: OrderDetail,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/currencyDetail',
            name: 'CurrencyDetail',
            component: CurrencyDetail,
            meta: {
                mustLogin: true
            }
        },
        {
            path:'/idCardAuthen',
            name:'IdCardAuthen',
            component:IdCardAuthen,
            meta: {
                mustLogin: true
            }
        },
        {
            path:'/brushFaceAuthen',
            name:'BrushFaceAuthen',
            component:BrushFaceAuthen,
            meta: {
                mustLogin: true
            }
        },
        {
            path:'/finishAuthen',
            name:'FinishAuthen',
            component:FinishAuthen,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/currencyCollect',
            name: 'CurrencyCollect',
            component: CurrencyCollect
        },
        {
            path: '/currencyTransfer',
            name: 'CurrencyTransfer',
            component: CurrencyTransfer
        },
        {
            path: '/currencyExchange',
            name: 'CurrencyExchange',
            component: CurrencyExchange
        },
        {
            path: '/currencyDealDetail',
            name: 'CurrencyDealDetail',
            component: CurrencyDealDetail
        },
        {
            path: '/currencyDealDetailtwo',
            name: 'CurrencyDealDetailtwo',
            component: CurrencyDealDetailtwo
        },
        {
            path: '/notice',
            name: 'Notice',
            component: Notice,
            redirect: '/notice/noticeTabTransfer',
            meta: {
                mustLogin: true
            },
            children: [
                {
                    path: '/notice/noticeTabTransfer',
                    name: 'NoticeTabTransfer',
                    component: NoticeTabTransfer,
                    meta: {
                        mustLogin: true
                    }
                },
                {
                    path: '/notice/noticeTabSystem',
                    name: 'NoticeTabSystem',
                    component: NoticeTabSystem,
                    meta: {
                        mustLogin: true
                    }
                }
            ]
        },
        {
            path: '/noticeDetail',
            name: 'NoticeDetail',
            component: NoticeDetail
        },
        {
            path: '/newsDetail',
            name: 'NewsDetail',
            component: NewsDetail
        },
        {
            path: '/newsList',
            name: 'NewsList',
            component: NewsList
        },
        {
            path: '/personalCenter',
            name: 'PersonalCenter',
            component: PersonalCenter,
            // meta: {
            //     mustLogin: true
            // }
        },
        {
            path: '/shopAuthorize',
            name: 'ShopAuthorize',
            component: ShopAuthorize,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/Incomedetails',
            name: 'Incomedetails',
            component: Incomedetails,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/Setup',
            name: 'Setup',
            component: Setup,
            meta: {
                mustLogin: true
            }
        },  {
            path: '/Accountandsecurity',
            name: 'Accountandsecurity',
            component: Accountandsecurity,
            meta: {
                mustLogin: true
            }
        }, {
            path: '/Changeloginpassword',
            name: 'Changeloginpassword',
            component: Changeloginpassword,
            meta: {
                mustLogin: true
            }
        }, {
            path: '/Changetransactionpassword',
            name: 'Changetransactionpassword',
            component: Changetransactionpassword,
            meta: {
                mustLogin: true
            }
        },{
            path: '/Retrievetransactionpassword',
            name: 'Retrievetransactionpassword',
            component: Retrievetransactionpassword,
            meta: {
                mustLogin: true
            }
        },{
            path: '/Retrieveloginpassword',
            name: 'Retrieveloginpassword',
            component: Retrieveloginpassword,
            meta: {
                mustLogin: true
            }
        },{
            path: '/Transaction',
            name: 'Transaction',
            component: Transaction,
            meta: {
                mustLogin: true
            }
        },
        {
            path:'/exchangeDealDetail',
            name:'ExchangeDealDetail',
            component: ExchangeDealDetail
        },{
            path: '/Integraldetail',
            name: 'Integraldetail',
            component: Integraldetail,
            meta: {
                mustLogin: true
            }
        },

        {
            path: '/Myassets',
            name: 'Myassets',
            component: Myassets,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/Myteam',
            name: 'Myteam',
            component: Myteam,
            meta: {
                mustLogin: true
            }
        },

        {
            path: '/shopMyCouponlist',
            name: 'ShopMyCouponlist',
            component: ShopMyCouponlist,
            meta: {
                mustLogin: true
            }
        },




        {
            path: '/shop',
            name: 'Shop',
            component: Shop,
            redirect: '/shopIndex',
            children: [

                {
                    path: '/shopIndex',
                    name: 'ShopIndex',
                    component: ShopIndex
                },
                {
                    path: '/shopCate',
                    name: 'ShopCate',
                    component: ShopCate
                },
                {
                    path: '/shopGroup',
                    name: 'ShopGroup',
                    component: ShopGroup
                },
                {
                    path: '/shopCart',
                    name: 'ShopCart',
                    component: ShopCart
                },
                {
                    path: '/shopMy',
                    name: 'ShopMy',
                    component: ShopMy
                }
            ]
        },

        // 商城模块开始
        {
            path: '/shopSearch',
            name: 'ShopSearch',
            component: ShopSearch
        },
        {
            path: '/shopPanic',
            name: 'ShopPanic',
            component: ShopPanic
        },
        {
            path: '/shopGroupSearch',
            name: 'ShopGroupSearch',
            component: ShopGroupSearch
        },
        {
            path: '/shopSpecialActivity',
            name: 'ShopSpecialActivity',
            component: ShopSpecialActivity
        },
        {
            path: '/shopSpecialActivityDetail/:id/:name',
            name: 'ShopSpecialActivityDetail',
            component: ShopSpecialActivityDetail
        },

        {
            path: '/shopSignIn',
            name: 'ShopSignIn',
            component: ShopSignIn,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/shopCouponDraw',
            name: 'ShopCouponDraw',
            component: ShopCouponDraw,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/shopArticleList',
            name: 'ShopArticleList',
            component: ShopArticleList
        },
        {
            path: '/shopArticleDetail',
            name: 'ShopArticleDetail',
            component: ShopArticleDetail
        },

        {
            path: '/shopIntegralProduct',
            name: 'ShopIntegralProduct',
            component: ShopIntegralProduct
        },
        {
            path: '/shopOrderList',
            name: 'ShopOrderList',
            component: ShopOrderList,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/shopProduct/:cId/:cName/:keyword',
            name: 'ShopProduct',
            component: ShopProduct
        },
        {
            path: '/shopProductDetail/:pId',
            name: 'ShopProductDetail',
            component: ShopProductDetail
        },
        {
            path: '/shopProductList',
            name: 'ShopProductList',
            component: ShopProductList
        },
        {
            path: '/shopOrderConfirm/:type',
            name: 'ShopOrderConfirm',
            component: ShopOrderConfirm
        },
        {
            path: '/shopAddressList',
            name: 'ShopAddressList',
            component: ShopAddressList
        },
        {
            path: '/shopOrderPaySuccess',
            name: 'ShopOrderPaySuccess',
            component: ShopOrderPaySuccess
        },
        {
            path: '/shopOrderPayFail',
            name: 'ShopOrderPayFail',
            component: ShopOrderPayFail
        },
        {
            path: '/shopProductEvaluate',
            name: 'ShopProductEvaluate',
            component: ShopProductEvaluate
        },

        {
            path: '/shopCouponListselect',
            name: 'ShopCouponListselect',
            component: ShopCouponListselect
        },




        //商城模块结束

        // 家兴
        {
            path: '/Shoplistvaluate',
            name: 'Shoplistvaluate',
            component: Shoplistvaluate
        },
        {
            path: '/ShoporderListrefund',
            name: 'ShoporderListrefund',
            component: ShoporderListrefund
        },
        {
            path: '/Shopwallet',
            name: 'Shopwallet',
            component: Shopwallet
        },
        {
            path: '/ShopIntegralrecord',
            name: 'ShopIntegralrecord',
            component: ShopIntegralrecord
        },
        {
            path: '/ShopIntegralrecord',
            name: 'ShopIntegralrecord',
            component: ShopIntegralrecord
        },
        {
            path: '/ShopExchangepoints',
            name: 'ShopExchangepoints',
            component: ShopExchangepoints
        },
        {
            path: '/ShopCurrencybalance',
            name: 'ShopCurrencybalance',
            component: ShopCurrencybalance
        },
        {
            path: '/ShopConsumptiondetails',
            name: 'ShopConsumptiondetails',
            component: ShopConsumptiondetails
        },
        {
            path: '/ShopMonthlybill',
            name: 'ShopMonthlybill',
            component: ShopMonthlybill
        },
        {
            path: '/Shopmycollect',
            name: 'Shopmycollect',
            component: Shopmycollect
        },
        {
            path: '/ShopmyHistory',
            name: 'ShopmyHistory',
            component: ShopmyHistory
        },

        {
            path: '/ShopinvoiceTab/:type',
            name: 'ShopinvoiceTab',
            component: ShopinvoiceTab
        },
        {
            path: '/Shopaddressedit',
            name: 'Shopaddressedit',
            component: Shopaddressedit
        },
        {
            path: '/shopOrderPay',
            name: 'ShopOrderPay',
            component: ShopOrderPay
        },

        {
            path: '/shopProductsDetail/:type/:pId',
            name: 'ShopProductsDetail',
            component: ShopProductsDetail
        },
        {
            path: '/ShoporderDetail/:orderId',
            name: 'ShoporderDetail',
            component: ShoporderDetail
        },
        {
            path: '/ShoporderCheckrefund/:refundId',
            name: 'ShoporderCheckrefund',
            component: ShoporderCheckrefund
        },
        {
            path: '/ShoporderRefund/:pId/:orderId/:canNum/:refundId/:type',
            name: 'ShoporderRefund',
            component: ShoporderRefund
        },
        {
            path: '/ShoporderLogistics/:orderId',//订单ID
            name: 'ShoporderLogistics',
            component: ShoporderLogistics
        },
        {
            path: '/ShoporderCheckevaluate/:orderId',
            name: 'ShoporderCheckevaluate',
            component: ShoporderCheckevaluate
        },
        {
            path: '/ShoporderEvaluate/:orderId/:type',
            name: 'ShoporderEvaluate',
            component: ShoporderEvaluate
        },
        {
            path: '/ShopBilldetails',
            name: 'ShopBilldetails',
            component: ShopBilldetails
        },
        // 商城功能结束




        {
            path: '/walletList',
            name: 'WalletList',
            component: WalletList,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/walletDetail',
            name: 'WalletDetail',
            component: WalletDetail
        },
        {
            path: '/addressBook',
            name: 'AddressBook',
            component: AddressBook,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/addBook',
            name: 'AddBook',
            component: AddBook,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/addressBookDetail',
            name: 'AddressBookDetail',
            component: AddressBookDetail,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/editAddressBook',
            name: 'EditAddressBook',
            component: EditAddressBook,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/share',
            name: 'Share',
            component: Share,
            // meta: {
            //     mustLogin: true
            // }
        },
        {
            path: '/feedback',
            name: 'Feedback',
            component: Feedback
        },
        {
            path: '/aboutUs',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/userAgreement',
            name: 'UserAgreement',
            component: UserAgreement
        },
        {
            path: '/privacyAgreement',
            name: 'PrivacyAgreement',
            component: PrivacyAgreement
        },
        {
            path: '/modifyPassword',
            name: 'ModifyPassword',
            component: ModifyPassword
        },
        {
            path: '/ExportMnemonicWord',
            name: 'exportMnemonicWord',
            component: ExportMnemonicWord
        },
        {
            path: '/fillMnemonicWord',
            name: 'FillMnemonicWord',
            component: FillMnemonicWord
        },
        {
            path: '/lockedPositionDetail',
            name: 'LockedPositionDetail',
            component: LockedPositionDetail
        },
        {
            path: '/incomeRecord',
            name: 'IncomeRecord',
            component: IncomeRecord
        },
        {
            path: '/powerTabInvestDetail',
            name: 'PowerTabInvestDetail',
            component: PowerTabInvestDetail
        },
        {
            path: '/setPassword',
            name: 'SetPassword',
            component: SetPassword
        },
        {
            path: '/forgetPassword',
            name: 'ForgetPassword',
            component: ForgetPassword
        },
        {
            path: '/findPwdForMnemonicWord',
            name: 'FindPwdForMnemonicWord',
            component: FindPwdForMnemonicWord
        },
        {
            path: '/modifyPassword2',
            name: 'ModifyPassword2',
            component: ModifyPassword2
        },
        {
            path: '/backupMnemonicWord',
            name: 'BackupMnemonicWord',
            component: BackupMnemonicWord
        },


        {
            path: '/usingAgreement',
            name: 'UsingAgreement',
            component: UsingAgreement
        },


        {
            path: '/shopPrivacyAgreement',
            name: 'ShopPrivacyAgreement',
            component: ShopPrivacyAgreement
        },
        {
            path: '/shopUserAgreement',
            name: 'ShopUserAgreement',
            component: ShopUserAgreement
        },

        {
            path: '/node',
            name: 'Node',
            component: Node,
            meta: {
                mustLogin: true
            }
        },
        {
            path: '/changeLanguage',
            name: 'ChangeLanguage',
            component: ChangeLanguage
        },
        {
            path: '/walkThough',
            name: 'WalkThough',
            component: WalkThough
        },
        {
            path: '/scan',
            name: 'Scan',
            component: Scan
        },
        {
            path: '/findPass',
            name: 'FindPass',
            component: FindPass,
            redirect: '/findPass/findPassTabTel',
            children: [
                {
                    path: '/findPass/findPassTabTel',
                    name: 'FindPassTabTel',
                    component: FindPassTabTel
                },
                {
                    path: '/findPass/findPassTabEmail',
                    name: 'FindPassTabEmail',
                    component: FindPassTabEmail
                },
                {
                    path: '/findPass/findPassTabWord',
                    name: 'FindPassTabWord',
                    component: FindPassTabWord
                }
            ]
        },
        {
        	path: '/newFindPass',
            name: 'NewFindPass',
            component: NewFindPass
        },
        {
            path: '/bind',
            name: 'Bind',
            component: Bind
        },
        {
            path: '/modifyBind',
            name: 'ModifyBind',
            component: ModifyBind
        },

        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ].concat(process.env.NODE_ENV === 'development' ? example : [])
})


// 拦截器
router.beforeEach((to, from, next) => {

    // 判断是否登录
    if( to.meta.mustLogin ){
        if( store.state.userinfo ){
            next()
        } else {
            Vue.prototype.$toast({
                content: '请登录后访问',
                autoClose: 1000,
                zIndex: 10000
            }).open()
                router.replace({
                path: '/login'
            })

        }
    } else {
        next()
    }
})


export default router


