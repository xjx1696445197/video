export default {
    tabbar: {
        asset: 'ASSET',
        market: 'MARKET',
        product: 'PRODUCT',
        news: 'NEWS',
        my: 'MY'
    },
    my:{
        title: 'MY',
        my_login:"Sign in",
        my_register:'register',
        my_node:"node",
        my_shoppingMall:"Shopping Mall",
        my_walletManagement:"Wallet management",
        my_addressBook:"address book",
        my_inviteGoodFriends:"invite friends",
        my_displayLanguage:"Display Language",
        my_showLanguage:'CHOICE LANGUAGE',
        my_feedback:"Feedback",
        my_aboutUs:"About us"
    },
    // OTC
    otc_entrust:{
        purchase:"Purchase",
        sell:"Sell",
        commission:"Commission",
        entrustment:"Entrustment",
        purchaseprice:"Purchaseprice",
        purchasequantity:"Purchasequantity",
        Sellingprice:"Selling price",
        buyingtime:"Buyingtime",
        revocationofpurchase:"Revoke",
        sellingprice:"Sellingprice",
        quantitysold:"Quantitysold",
        sellingtime:"Sellingtime",
        cancellationofsale:"Revoke",
        confirm:"Confirm",
        cancel:"Cancel",
        revocationconfirmation:"Revocationconfirmation",
        revoke:"Are you sure you want to cancel the purchase order ?",
        cancellationsale:"Are you sure you want to cancel the sales order? The handling fee will not be returned after cancellation！"
    },
    otc_order:{
        rescinded:"rescinded",
        completed:"Completed",
        spend:"spend",
        Get:"Get",
        viewdetails:"View details",
        purchase:"Purchase",
        sell:"Sell",
        Sellingprice:"Selling price",
        commission:"Commission",
        entrustment:"Entrustment",
        purchaseprice:"Purchaseprice",
        purchasequantity:"Purchasequantity",
        buyingtime:"Buyingtime",
        revocationofpurchase:"Revoke",
        sellingprice:"Sellingprice",
        quantitysold:"Quantitysold",
        sellingtime:"Sellingtime",
        cancellationofsale:"Revoke",
        confirm:"Confirm",
        cancel:"Cancel",
        revocationconfirmation:"Revocationconfirmation"
    },
    // OTC
    otc:{
        title:'LEGAL CURRENCY',
        otc_buy:'purchase',
        otc_sell:'sell',
        otc_entrust:'order form',
        otc_order:'order'
    },
    // 购买
    otc_buy:{
        available:'available：',
        transactionSheet:'transactionSheet：',
        turnoverRate:'turnoverRate：',
        unitPrice:'unitPrice',
        num:'num',
        quota:'quota',
        purchase:"purchase"
    },
    // 出售
    otc_sell:{
        available:'available：',
        transactionSheet:'transactionSheet：',
        turnoverRate:'turnoverRate：',
        unitPrice:'unitPrice',
        num:'num',
        quota:'quota',
        sell:"sell",
    },
    // 购买HALE
    otc_buy_hale:{
        title:'purchase HALE',
        price:'price',
        buyNum:'Purchase quantity',
        availableBuy:'Maximum quantity available',
        pay:'Payment amount',
        all:'whole'
    },
    // 出售HALE
    otc_sell_hale:{
        title:'sell HALE',
        price:'price',
        sellNum:'Quantity sold',
        availableSell:'Maximum quantity available for sale',
        earned:'Amount earned',
        fee:'fee',
        all:'whole'
    },
    // 交易提醒
    otc_reminder:{
        title:'Transaction reminder',
        btn:'To recharge',
        fail1:'Order failed: you do not have enough usdts.',
        fail2:'Order failed: your order amount is not within the current transaction limit of 100-10000usdt.',
        fail3:'Order failed: your Hale quantity is insufficient.'
    },
    // 订单详情
    otc_orderDetail:{
        title:'Order details',
        status1:'Transaction completed',
        status2:'Waiting for money transfer...',
        tips:'This transaction has been locked and managed by the system. You can wait for the completion of the transfer.',
        transferNum:'Transaction number',
        purchase:"purchase",
        sell:"Sell",
        price:'price',
        num:'num',
        buyFee:'Purchase cost',
        earned:'Amount earned',
        fee:'fee',
        transferTime:'Transaction time',
        transactionSheet:'Transaction sheet：',
        turnoverRate:'Turnover rate：',
        quota:'Quota',
        remarks:'Remarks：',
        buyPeople:'Buyer',
        sellPeople:'seller'
    },
    // 发布委托
    otc_Releasecommission:{
        quantitysold:"Quantitysold",
        purchase:"purchase",
        Sell:"Sell",
        Price:"Price",
        Currentdiscprice:"Currentdiscprice",
        Transactionprice:"Transactionprice",
        Transactionvolume:"Transactionvolume",
        available:"available",
        Purchasequantity:"Purchasequantity",
        Transactionrestrictions:"Transactionrestrictions",
        minimum:"minimum",
        Sellingprice:"Quantity sold",
        maximum:"maximum",
        Remarks:"Remarks",
        ReleaseCommission:"Release Commission",
        Issueorder:"Issueorder",
        Pleaseentersold:"Please enter the quantity sold",
        Pleaseprice:"Please enter transaction price",
        Pleasequantity:"Please enter purchase quantity",
        Minimumlimit:"Minimum buying limit",
        Maximumlimit:"Maximum purchase limit",
        Minsellinglimit:"Min selling limit",
        Maxsellinglimit:"Max selling limit",
        transaction:"Optional notes for the other party when filling in the transaction",
        whole:"whole",
        ServiceCharge:"Service Charge",
        Cancellationrelease:"Cancellation of release will not return service charge, please operate carefully"

    },
    // 验证格式
    validate:{
        validate_passwordText:'Password',
        validate_account:'Please enter your account number',
        validate_password:'Please enter your password',
        validate_oldPassword:'Please enter your old password',
        validate_newPassword:'Please enter your new password',
        validate_newPasswordAgain:'Please enter the new password again',
        validate_passwordFormat:'Password is 8-18 digits + letter combination',
        validate_code:'Please enter the verification code',
        validate_diff:'The input password is inconsistent with the confirmation password',
        validate_differ:'Two passwords are inconsistent',
        validate_oldPasswordText:'Old pass',
        validate_newPasswordText:'New pass',
        validate_passwordFormatText:'Confirm',
        validate_content:'Please enter feedback suggestions',
        validate_contentMax:'Content no more than 200 words',
        validate_name:'Please enter your name',
        validate_realName:'Please enter your real name',
        validate_phone:'Please enter your mobile number',
        validate_phoneFormat:'Mobile number format error',
        validate_email:'Please enter your email',
        validate_emailFormat:'Mailbox format error',
        validate_contentError:'The content you entered is illegal',
        validate_word:'Mnemonic modification',
        validate_accountText:'Please agree to the terms and conditions, and the account number can only be 8-12 letters or numbers or alphanumeric combination',
        validate_newPhone:'Enter new phone number',
        validate_newEmail:'Enter a new email account',
        validate_updatePhone:'CHANGING MOBILE',
        validate_updateEmail:'CHANGING MAILBOX',
        validate_updateP:'After changing your mobile phone, other information of your account will remain unchanged.',
        validate_updateE:'After changing the email address, other information of your account will remain unchanged.',
        validate_curPhone:'The current mobile is:',
        validate_curEmail:'The current mailbox is:',
        validate_phoneText:'phone',
        validate_emailText:'mailbox',
        validate_success:'Password modified successfully',
        validate_setSuccess:'Password set successfully',
        validate_names:'Please enter a name',
        validate_user:'Please enter last name',
        validate_address:'Please enter wallet address'


    },
    // 弹窗
    layerdate:{
        layerdate_loading:'Loading',
        layerdate_changeing:'Switch Wallet...',
        layerdate_importing:'Import into Wallet...',
        layerdate_enterTransactionPwd:"Please enter the transaction password",
        layerdate_btnOk:"confirm",
        layerdate_btnCancel:"cancel",
        layerdate_tips:'tips',
        layerdate_setPwd:'Your transaction password is not set. Please set your transaction password first',
        layerdate_set:'To set up',
        layerdate_nickname:'Modify nickname',
        layerdate_open:'Postponed opening',
        layerdate_opening:'OPEN',
        layerdate_delAddress:'Confirm to delete wallet address',
        layerdate_user:'After deleting the wallet, the current account will be deleted from the wallet management list. Do you want to delete the wallet?',
        layerdate_realAuthen:'You have not been certified by real name, please go to the certification. Some functions of non real name authentication cannot be used!',
        layerdate_authen:'De certification',
        layerdate_authenError:'Authentication failed',
        layerdate_authenAgain:'Re certification',
        layerdate_authenError_tip1:'ID card photo is not recognized, please upload again.',
        layerdate_authenError_tip2:'The ID card photo is not consistent with the face brushing authentication photo.'

    },
    // 状态
    statustest:{
        status_finish:'Completed',
        status_haveHand:'Have in hand...',
        status_All_loaded:'All loaded',
        status_refresh:'Drop-down refresh',
        status_refreshed:'Release refresh',
        status_refreshing:'Refreshing...',
        status_loading:'More loading...',
        status_load:'Loading',
        status_transfer:'Turn out',
        status_transter_finished:'Success'
    },
    // 分享
    share:{
        share_tips1:'Replication success',
        share_tips2:'WeChat friends',
        share_tips3:'Wechat Moments',
        share_tips4:'The picture is not found yet. Please respond to your question through feedback',
        share_tips5:'Save successfully',
        share_tips6:'Please go to settings - find the halletoken app and modify the photo access permission to "allow"',
        share_tips7:'Failed to get the list of shared services:',
        share_tips8:'Wechat sharing is not supported in the current environment!',
        share_tips9:'Invalid sharing service:',
        share_tips10:'Sharing failed',
        share_tips11:'Handover success',
        share_Scan:"Scan code to register now",
        share_MyInvitationCode:"My invitation code",
        share_share:"SHARE",
        share_saveAlbum:"SAVE",
        share_inviteGoodFriends:"INVITE FRIENDS",
        share_scan:'QR CODE',
        share_album:'ALBUM',
        share_img:'This picture is not recognized'

    },
    //注册
    register: {
        register_mobile: 'Mobile register',
        register_mailbox:'Mailbox register',
        register_account: 'Create an account (8-12 digits or letters)',
        register_enterPhone:'Enter the phone number',
        register_phoneCode:'Input Short Message Verification Code',
        register_enterMailbox:'Input mailbox',
        register_mailboxCode:'Enter Mailbox Verification Code',
        register_getCode:'Get code',
        register_seconds:'S ',
        register_again:'Regain',
        register_password:'Enter the password (8-18 digits + letters)',
        register_rePassword:'Confirm the login password',
        register_invitationCode:'Recommender invitation code / account number (required)',
        register_nodeCode:'Node Invitation Code/Inviter Account (optional)',
        register_readAgree:'Readed',
        register_agreement:'the Terms',
        register_login:'Have an account',
        register_btn:'Register',
        register_clause_termsUse:'Terms of Use',
        register_tip1:'Please agree to the terms before proceeding'
    },
    //登录
    login:{
        login_title:'Sign in',
        login_enterAccount:'Input account',
        login_enterPassword:'Input password',
        login_enterPode:'Input Verification Code',
        login_forgetPassword:'Forget password',
        login_failure:'Verification code error',
        login_enterError:'Account/password input error, please re-enter.',
        login_btn:'Sign in',
        login_tips:'Please log in and visit.',
        login_code:'Code'
    },
    //找回密码
    findPassword:{
        findPassword_phoneRetrieve:'phone',
        findPassword_mailboxRetrieve:'Mail',
        findPassword_auxiliariesRetrieve:'Word',
        findPassword_account:'Input account',
        findPassword_enterPhone:'Enter the phone number',
        findPassword_phoneCode:'Input Short Message Verification Code',
        findPassword_mailbox:'Input mailbox',
        findPassword_mailboxCode:'Enter Mailbox Verification Code',
        findPassword_enterAuxiliaries:'Input mnemonics',
        findPassword_getCode:'Get the authentication code',
        findPassword_newPassword:'New login password (8-18 digits+letters)',
        findPassword_rePassword:'Confirm login password',
        findPassword_remind:'Please fill in the mnemonics in order and use them ","',
        findPassword_notice:'Tip: Your account number, login password and transaction password will be sent by SMS or E-mail to you, please pay attention to check!',
        findPassword_Tips:'Wrong mnemonics, please enter it again',
        findPassword_retrieveOk:'Get back to success',
        findPassword_retrieveOkNotice:'Account/login password/transaction password will be SMS/mailed The box is sent by the way, please pay attention to checking.',
        findPassword_confirm:'Confirm',
        findPassword_confirmUpdate:'Confirm revision'
    },
    //备份助记词  导出助记词
    backupsAuxiliaries:{
        backupsAuxiliaries_backups:"Mnemonic backup",
        backupsAuxiliaries_export:"Derived mnemonics",
        backupsAuxiliaries_remind:"Please copy the following 12 auxiliary words carefully in order",
        backupsAuxiliaries_remindtxt:"We will verify it in the next step",
        backupsAuxiliaries_next:"Next step",
        backupsAuxiliaries_getAuxiliaries:"Getting mnemonics is equivalent to owning a wallet asset",
        backupsAuxiliaries_tips:"BACKUP MNEMONICS",
        backupsAuxiliaries_tipsOne:"Use paper and pen to copy and memorize words correctly",
        backupsAuxiliaries_tipstwo:"If your phone is lost, damaged or stolen, mnemonics can restore your assets.",
        backupsAuxiliaries_backupImmediately:"Backup immediately",
        backupsAuxiliaries_laterBackup:"Backup later",
        backupsAuxiliaries_fillin_title:"FILL IN MNEMONICS",
        backupsAuxiliaries_fillin_copy:"Please fill in all the mnemonics in the order of transcribing words.",
        backupsAuxiliaries_fillin_okBtn:"Confirm",
        backupsAuxiliaries_tip1:'Please fill in the mnemonic order, separated by commas',
        backupsAuxiliaries_tip2:'Please input mnemonic',
        backupsAuxiliaries_tip3:'Please fill in the complete mnemonic',
        backupsAuxiliaries_tip4:'Please click on mnemonic',
        backupsAuxiliaries_tip5:'Please click all mnemonics',

    },
    // 侧边栏
    sidebar:{
        sidebar_title:'Wallet management',
        sidebar_select:'Choice Wallet',
        sidebar_other:'Other features',
        sidebar_create:'Create wallet',
        sidebar_import:'Import Wallet'
    },
    // 通知中心
    notice:{
        notice_notification:"NOTICES",
        notice_transferNotice:"Transfer",
        notice_systemNotice:"System",
        notice_allRead:'Full standard reading',
        notice_detail:'SYSTEM DETAILS'

    },
    // 币详情
    currencyDetail:{
        currencyDetail_all:"whole",
        currencyDetail_receivables:"Receivables",
        currencyDetail_receivablesTitle:" RECEIVABLES",
        currencyDetail_transferAccounts:"Transfer",
        currencyDetail_transferAccountsTitle:" TRANSFER",
        currencyDetail_exchange:"exchange",
        currencyDetail_exchangeTitle:" EXCHANGE",
        // currencyDetail_exchangeTitle:" EXCHANGE",
        currencyDetail_exchanged:'Convertibility',
        currencyDetail_complete:'complete',
        currencyDetail_haveInHand:'Have in hand',
        currencyDetail_Chain_type:'Chain type',
        currencyDetail_share:'Share address',
        currencyDetail_address:'Transfer address',
        currencyDetail_num:'Transfer volume',
        currencyDetail_receiveed:'Receipt address',
        currencyDetail_fillNum:'Input quantity',
        currencyDetail_use:'available',
        currencyDetail_allUse:'Turn all out',
        currencyDetail_allExchange:'All convertibility',
        currencyDetail_Calculation:'Calculation and maintenance cost',
        currencyDetail_fee:'Service Charge',
        currencyDetail_received:'Quantity of arrival',
        currencyDetail_confirm:'confirm',
        currencyDetail_please:'Please input ',
        currencyDetail_addresstxt:' address',
        currencyDetail_sureExchange:'Confirmation of exchange',
        currencyDetail_tips:'Tips',
        currencyDetail_tipOne:'The exchange price is determined according to the current price of the exchange',
        currencyDetail_sendAddress:'Sending address',
        currencyDetail_receiveAddress:'Receiving address',
        currencyDetail_block:'block',
        currencyDetail_Transaction_time:'Transaction time',
        currencyDetail_Transaction_ID:'Transaction ID',
        currencyDetail_minTransfer:'Tip: minimum transfer ',
        currencyDetail_maxTransfer:', daily maximum transfer out',
        currencyDetail_tip1:'Note: transfer is not available at present.',
        currencyDetail_tip2:'.',
        currencyDetail_rightAddress:'Please enter the correct address',
        currencyDetail_correspondingAddress:'Please enter the address corresponding to the transfer currency',
        currencyDetail_transferNum:'Please enter the transfer quantity',
        currencyDetail_tip3:'The transfer quantity shall not be less than the handling fee',
        currencyDetail_tip4:'Less than the minimum amount of single transfer',
        currencyDetail_exchangeTip1:'The minimum amount of exchange is ',
        currencyDetail_exchangeTip2:'USDT;',
        currencyDetail_exchangeTip3:'1. The minimum exchange rate is ',
        currencyDetail_exchangeTip4:';',
        currencyDetail_exchangeTip5:'Please enter the exchange quantity',
        currencyDetail_exchangeTip6:'Lower than the minimum starting value'


    },
    //市场
    market:{
        title: 'MARKET',
        market_quotation:"Quotation",
        market_name:"Name",
        market_newPrice:"Price",
        market_downUpToday:"24h change"
    },
    //启财宝
    product: {
        hale_Licking:"LICK",
        hale_Community:"COMMUNITY",
        hale_calculationPower:"POWER",


    },
    // 利金
    haleLock:{
        haleLock_openWarehouse:"Open Lock Warehouse",
        haleLock_haleWarehouse:"HALE Lock Position",
        haleLock_oneGear:"First gear: ",
        haleLock_twoGear:"Two gear: ",
        haleLock_threeGear:"Three gear: ",
        haleLock_enterWarehouseNum:"Input Lock Hale Number",
        haleLock_tips:"Tips:",
        haleLock_tipsOne:"1.Lock the warehouse grade will affect your investment UBOT grade;",
        haleLock_tipsTwo:"2.Two positions are performed in an integer multiple of ",
        haleLock_tipsThree:".",
        haleLock_btn:"Lock Position",
        haleLock_enterTransactionPwd:"Please enter the transaction password",
        haleLock_btnOk:"confirm",
        haleLock_btnCancel:"cancel",
        haleLock_openWarehouseOk:"HALE Lock Success!",
        haleLock_Determine:"Determine",
        haleLock_noNumber:"HALE is insufficient and locks fail",
        haleLock_noTen:"Input of less than 10 integer letters, lock failure",
        haleLock_haleAllNum:"Total number of locks HALE",
        haleLock_balance:"HALE Balance: ",
        haleLock_today:"Today's HALE Revenue(frozen)",
        haleLock_cumulative:"Accumulated total revenue from HALE(frozen)",
        haleLock_record:"Lock Warehouse Record",
        haleLock_time:"Locking time",
        haleLock_completed:"Completed",
        haleLock_week:"Locking period",
        haleLock_haveHand:"Have in hand...",
        haleLock_day:'days',
        haleLock_selectGear:'Please select gear',
        haleLock_position:'Please enter the value of Hale to lock the warehouse',
        haleLock_position1:'Below the lowest level, please fill in again',
        haleLock_position2:'Higher than the highest level, please fill in again',
        haleLock_position3:'The number of inputs is not an integral multiple of ',
        haleLock_position4:'.',
        haleLock_lockingDetails:"Locking details",
        haleLock_lockingDetailsTitle:"LOCKING DETAILS",
        haleLock_lockingOk:"Lock warehouse completed",
        haleLock_lockingIn:"Lock in the warehouse....",
        haleLock_lockingNum:"HALE Quantity of Lock Warehouse：",
        haleLock_release:"HALE can be obtained by release：",
        haleLock_frozen:'Remaining frozen HALE：',
        haleLock_lockingWeek:"Locking period：",
        haleLock_lockingTime:"Locking time：",
        haleLock_releaseTime:"Release time：",
        haleLock_UnfreeReleaseTime:"Unfreezing release time：",
        haleLock_dayRecords:"Daily HALE Records (Freeze)：",
        haleLock_recording:'Lock in revenue record',
        haleLock_title1:'LOCK IN PROCEEDS(RELEASED)',
        haleLock_title2:'LOCK IN GAINS(FROZEN)',
        haleLock_title3:'PERSONAL INVESTMENT',
        haleLock_title4:'COMMINITY TEAM',
        haleLock_title5:'MARKET TEAM',
        haleLock_profit:'Profit',
        haleLock_obtained:'Already obtained',
        haleLock_power:'Calculation power',

    },
    // 社区
    halePublic:{
        halePublic_openLocking:"Opening up the Community",
        halePublic_activationLoking:"Activating the Community",
        halePublic_activation:"activation",
        halePublic_enterTransactionPwd:"Please enter the transaction password",
        halePublic_btnOk:"confirm",
        halePublic_btnCancel:"cancel",
        halePublic_noNumber:"The number of USDT is insufficient and community activation fails",
        halePublic_tips:"Tips",
        halePublic_activationOk:"Activate community success!",
        halePublic_determine:"Determine",

        halePublic_accumulatedIncome:"Accumulated gains",
        halePublic_oneCommunity:"First Community",
        halePublic_twoCommunity:"Second Community",
        halePublic_incomePublic:"Income record",
        halePublic_alreadyOk:"Completed",
        halePublic_getTime:"Acquire time:",
        halePublic_noDate:"No relevant data available:",
        halePublic_all:'whole',
        halePublic_open:'opened',
        halePublic_name:'userName',
        halePublic_tip1:'Tip: consumption ',
        halePublic_tip2:' to start a community trip.'

    },
    // 算力
    halePower:{
        halePower_openPower:"Open up the arithmetic",
        halePower_tips:"Tips",
        halePower_lockPositionNoOpen:"Lock warehouse not opened",
        halePower_lockPositionOpen:"Lock warehouse has been opened",
        halePower_publicPlatoonNoOpen:"Public platoon not opened",
        halePower_lockPublic:'Profits are not open, community is not open',
        halePower_determine:"Determine",
        halePower_powerInvestment:"Intelligent investment",
        halePower_enterInvestmentNumber:"Input Investment USDT Quantity",
        halePower_tipsOne:"1. Investment grade equals lock grade;",
        halePower_tipsTwo:"2. An integral multiple of ",
        halePower_tipsThree:' investments;',
        halePower_tipsFour:'3.The upper limit of investment calculation power is ',
        halePower_investment:"Investment",
        halePower_oneGear:"First gear",
        halePower_twoGear:"Second gear",
        halePower_threeGear:"Third gear",
        halePower_enterTransactionPwd:"Please enter the transaction password",
        halePower_btnOk:"confirm",
        halePower_btnCancel:"cancel",
        halePower_powerBalance:"Balance of calculation",
        halePower_cumulativeInvestment:"USDT:",
        halePower_cumulativeExchange:"calculation:",
        halePower_todayIncome:"Today's calculating:",
        halePower_todayAllIncome:"Total Earnings Today:",
        halePower_powerExchange:"Exchange",
        halePower_todayInvestment:"Investment",
        halePower_investmentPublic:"Investment record",
        halePower_exchangePublic:"Exchange record",
        halePower_powerPublic:"Arithmetic record",
        halePower_award:'Award record',
        halePower_powerInvestmentOk:"Success in calculating investment",
        halePower_noNumInvestmentFail:"Inadequate investment failed",
        halePower_noNumUnableInvestment:"An integral multiple of less than 100 cannot be invested.",
        halePower_goBeyondUnableInvestment:"No investment beyond the investment cap",
        halePower_investmentTime:"Investment time",
        halePower_investmentweek:"Investment cycle",
        halePower_acquired:"Acquired",
        halePower_convertible:"Convertible",
        halePower_exchange:"Exchange time",
        halePower_getTime:"Acquire time",
        halePower_investmentDetails:"Investment details",
        halePower_investmentDetailsTitle:"INVESTMENT DETAILS",
        halePower_addPower:"Calculation power",
        halePower_powerInvestmented:"Computational investment has been completed",
        halePower_powerInvestmentIn:"In calculating investment..",
        halePower_investmentUsdtNum:"Investment USDT Quantity",
        halePower_investmentAvailable:"Investment gains power",
        halePower_investmentAcquired:"Investments have been counted",
        halePower_expireTime:"Maturity time",
        halePower_oneself:'Personal investment income',
        halePower_team:'Community team benefits',
        halePower_market:'Market team revenue',
        halePower_incomePublic:"Income record",
        halePower_remaining:"Remaining time"

    },
    // 新闻
    news: {
        news_title: 'INFORMATION',
        news_recommend:"Recommend",
        news_journalism:"Journalism",
        news_more:"More",
        news_newsList:"NEWS LIST",
        news_newsDetail:"NEWS DETAILS"
    },

    //节点
    node:{
        node_title:'NODE',
        node_linkNode:"Link Node",
        node_nodeTotalNum:"Total nodes",
        node_nodeTotalPerformance:"Total Performance",
        node_nodeNum:"nodes Num",
        node_nodePerformance:"Node Performance",
        node_registerTime:"Registration time",
        node_noData:"No relevant data available"
    },
    //管理钱包
    wallet:{
        wallet_title:"MANAGING WALLETS",
        wallet_id:"ID name",
        wallet_walletName:"Wallet Name",
        wallet_newWallet:"HD-New Wallet",
        wallet_updateLoginPwd:"Modify login password",
        wallet_updateLoginPwdTitle:"MODIFY LOGIN PASS",
        wallet_updateTransactionPwd:"Modify the transaction password",
        wallet_updateTransactionPwdTitle:"MODIFY TRANSACTION PASS",
        wallet_derivedMnemonics:"Derived mnemonics",
        wallet_derivedMnemonicsTitle:"DERIVED MNEMONICS",
        wallet_enterTransactionPwd:"Please enter the transaction password",
        wallet_btnOk:"confirm",
        wallet_btnCancel:"cancel",
        wallet_setPassword:'Set transaction password',
        wallet_create:'CREATE',
        wallet_import:'IMPORT',
        wallet_importTitle:'IMPORT WALLET',
        wallet_importBtn:'Start importing',
        wallet_auxiliaries:'mnemonics'
    },

    //意见反馈
    feedback:{
        feedback_title:"FEEDBACK",
        feedback_name:"Your name",
        feedback_contactInformation:"Your contact Information (mailbox must be filled in)",
        feedback_phone:"Mobile phone",
        feedback_email:"Mailbox",
        feedback_feedback:"Question/feedback",
        feedback_enter:"Please enter",
        feedback_btnFeedback:"Submit feedback"
    },

    // 关于我们
    aboutUs:{
        aboutUs_title:"ABOUT US",
        aboutUs_versionNumber:"Version",
        aboutUs_userProtocol:"User agreement",
        aboutUs_userProtocolTitle:"USER AGREEMENT",
        aboutUs_policy:"Privacy policy",
        aboutUs_policyTitle:"PRIVACY POLICY",
        aboutUs_versionUpdate:"Version update",
        aboutUs_officialWebsite:"Official website",
        aboutUs_edition:' version',
        aboutUs_update:'UPDATE',
        aboutUs_authorize:'AUTHORIZE'

    },
    //个人资料
    myMessageSetup:{
        myMessageSetup_myIdentity:"MY IDENTITY",
        myMessageSetup_personalAvatar:"Personal Avatar",
        myMessageSetup_nick:"Nickname",
        myMessageSetup_identityName:"Identity Name",
        myMessageSetup_identityId:"Identity ID",
        myMessageSetup_identity:'Account',
        myMessageSetup_phone:"phone",
        myMessageSetup_email:"mailbox",
        myMessageSetup_loginOut:"Log out",
        myMessageSetup_updateIdentityName:"Modify the identity name",
        myMessageSetup_enter:"Please enter",
        myMessageSetup_btnOk:"confirm",
        myMessageSetup_btnCancel:"cancel",
        myMessageSetup_noBind:'Unbound',
        myMessageSetup_update:'Modified success',
        myMessageSetup_logout:'Log out successfully',
        myMessageSetup_bindPhone:'BIND MOBILE',
        myMessageSetup_bindEmail:'BIND MAILBOX',

    },
    // 地址簿
    addressBook:{
        addressBook_title:'ADDRESS BOOK',
        addressBook_add:'NEW CONTACT',
        addressBook_tip1:'No relevant records',
        addressBook_addBtn:'Add to',
        addressBook_finish:'SAVE',
        addressBook_name:'Name',
        addressBook_user:'Surname',
        addressBook_address:'Address',
        addressBook_tel:'Mobile',
        addressBook_email:'Mailbox',
        addressBook_remarks:'Remarks',
        addressBook_detail:'DETAILED INFORMATION',
        addressBook_username:'Name',
        addressBook_edit:'EDIT',
        addressBook_copy:'copy',
        addressBook_update:'MODIFY CONTACT',
        addressBook_cancel:'CANCEL',
        addressBook_del:'Delete Contact',
        addressBook_delBtn:'DEL',
        addressBook_correspondingAddress:'Address cannot be empty',
    }
}
