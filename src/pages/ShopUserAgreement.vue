<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('aboutUs.aboutUs_userProtocolTitle')}}</p>
        </div>
        <div class="wrapper">
            <div class="agree_wrapper">
                <div class="content" v-if="curLang">
                    <p class="agree_txt1 agreement_padding fb">HALLE MALL用户协议</p>
                    <p class="agree_txt3 agree_margin">特别提示:</p>
                    <p class="agree_txt2 agree_margin1">1、下述条款为格式条款，任何用户 (注册、登录或 使用HALLE MALL 的个人为本协议所述用户，下同) 或拟注册用户均须逐字阅读和理解下述协议的条款，在您下载使用我们的HALLE MALL程序 (以下简称"APP") 服务前，请仔细阅读本用户协议。本协议是您与HALLE MALL签署的《用户协议》。<span class="agree_txt3 agree_margin">您下载本APP并成功注册后，即被视为已阅读、理解、接受本协议条款。</span></p>
                    <p class="agree_txt2 agree_margin1">2、如果您未满十八 (18) 周岁，您应确保与您的父母或监护人共同阅读本协议，以便您及您的父母或监护人 理解并同意本协议的内容。</p>
                    <p class="agree_txt2 agree_margin1">3、本条款可由HALLE MALL随时更新,并将修改内容于实施前7日进行公示，用户有任何意见均可通过HALLE MALL工作人员邮箱进行反馈，经公示后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知。在修改协议条款后，如果用户不接受修改后的条款，请立即停止使用HALLE MALL提供的APP，用户继续使用HALLE MALL提供的APP将被视为接受修改后的协议。</p>
                    <p class="agree_txt2 agree_margin1">4、HALLE MALL及HALLE MALL APP仅作为商家提供产品及产品信息的展示平台，对于HALLE MALL APP上展示的产品和信息，HALLE MALL仅具有和包括HALLE MALL用户在内的普通消费者相同程度的信息获取能力，不具备保证淘宝天猫商家相关产品信息的真实性、准确性、合法性和有效性，以及交易双方履行其在买卖协议项下的各项义务的能力。</p>
                    <p class="agree_txt2 agree_margin1">用户通过本APP就某商品达成交易后，商品交易合同关系在商 家与用户之间建立,标的商品直接由商家与用户进行交易。HALLE  MALL不对该交易承担履行义务，不负责运送、储存或递交，商品本身也从不为HALLE MALL所持有或处于HALLE MALL的控制范围内。</p>
                    <p class="agree_txt3 agree_margin">请认真阅读本《HALLE MALL用户协议》(以下简称“协议")，确保您充分理解本协议条款。</p>

                    <p class="agree_txt3 agree_margin">一、概述</p>
                    <p class="agree_txt2 agree_margin1">1.本协议是确定HALLE MALL与用户之间关于HALLE MALL  (简称"本APP")软件服务的权利义务的依据。</p>
                    <p class="agree_txt2 agree_margin1">本协议所述"HALLE MALL”运营由HALLE INTERNATIONAL FOUNDATION LTD.（以下简称“本公司”或“基金会”），“用户”指注册、登录或使用HALLE MALL的个人。HALLE MALL账号指用户为使用HALLE MALL APP而向HALLE MALL申请注册的账号。</p>
                    <p class="agree_txt2 agree_margin1">2.本协议内容包括协议正文及HALLE MALL就本APP及相关事项所制定和修订的相关管理规范 ; 管理规范一经公布即对本协议发生补充和修订的效力，如果用户对管理规范内容存在异议，则按前述《特别提示》第3点处理。</p>


                    <p class="agree_txt3 agree_margin">二、账号的注册和存续</p>

                    <p class="agree_txt2 agree_margin1">1、用户在使用本APP前需注册/授权HALLE MALL账号。用户同意HALLE MALL将其手机号码及手机设备识别码或微信账号等账户信息作为用户身份识别信息。 </p>
                    <p class="agree_txt2 agree_margin1">2、注册为HALLE MALL用户的自然人应具有完全民事行为能力，非具有完全民事行为能力的自然人应在监护人的代理或许可使用本APP。</p>
                    <p class="agree_txt2 agree_margin1">3、HALLE MALL账号仅限用户个人使用，不得出借、出租或作其它形式的转让。</p>
                    <p class="agree_txt2 agree_margin1">4、HALLE MALL有权要求全部用户进行实名认证，且用户应提供真实资料进行认证。</p>
                    <p class="agree_txt2 agree_margin1">5、用户注册账号所提供和使用的信息应当真实、有效、合法，如果原提供的信息发生变更，则应及时向HALLE MALL申请更改，否则，因此造成HALLE MALL无法有效联系到用户，或无法及时处理和用户相关的争议等事项的，相关不利后果由用户自行承担。</p>
                    <p class="agree_txt2 agree_margin1">6、HALLE MALL有权根据法律法规或政策规定，或根据自行制定的规范或规则，对违规、不当使用等账号予以限制权利或予以注销，且不因此对用户承担法律责任。HALLE MALL根据自行判断，认定用户账号存在可能侵害或影响用户权益的，有权对用户账户进行限制或注销。</p>


                    <p class="agree_txt3 agree_margin">三、用户信息保护和使用</p>

                    <p class="agree_txt2 agree_margin1">1、HALLE MALL系基于电子商务交易平台的APP产品，用户注册时应当授权HALLE MALL对于注册时提供的个人信息作合理使用。前述用户个人信息包括但不限于 : 头像、姓名、身份证号、联系地址、交易订单信息、付款账号信息等。</p>
                    <p class="agree_txt2 agree_margin1">2、HALLE MALL承诺保护用户个人信息和隐私，非因本协议约定、法定要求或其它有权机关要求，不使用或向第三方披露用户个人信息 ; 如因HALLE MALL过错，导致用户个人信息被泄露或个人隐私被侵权，HALLE MALL依法承担责任。</p>
                    <p class="agree_txt2 agree_margin1">3、HALLE MALL对用户个人信息的使用限下述事项 : </p>
                    <p class="agree_txt2 agree_margin1">对注册用户的管理，包括但不限于信息记录、通知、身份甄别等；</p>
                    <p class="agree_txt2 agree_margin1">对交易纠纷的处理。如果用户主动或被动涉入交易纠纷，HALLE MALL经通知用户，即有权将用户个人信息向交易纠纷的对方、商家或司法仲裁机关提供 ; 且HALLE MALL有权在自行处理交易纠纷过程中使用用户个人信息 ; 其它HALLE MALL管理或经营需要的事项。</p>

                    <p class="agree_txt3 agree_margin">四、HALLE MALL使用说明</p>

                    <p class="agree_txt2 agree_margin1">1、本APP仅为包括但不限于淘宝 (即由浙江淘宝网络有限公司经营的域名为taobao.com的网络零售网站平台)、天猫(即由浙江天猫网络有限公司经营的域名为tmall.com的网络零售网站平台)、京东(即北京京东世纪贸易有限公司经营的域名为JD.com的网络零售网站平台)、拼多多(即上海寻梦信息技术有限公司经营的域名为pinduoduo.com的网络零售网站平台)商家提供产品及产品信息的展示平台，HALLE MALL非商品交易的当事人。</p>
                    <p class="agree_txt2 agree_margin1">2、对于HALLE MALL上展示的产品和信息，HALLE MALL不具备保证商家相关产品信息的真实性、准确性、合法性、时效性和有效性，以及交易双方履行其在买卖协议项下的各项义务的能力。</p>
                    <p class="agree_txt2 agree_margin1">3、用户通过本APP就某商品达成交易后，商品交易合同关系在商家与用户之间建立，标的商品直接由商家与用户进行交易。HALLE MALL不对该交易承担履行义务，不负责运送、储存或递交，商品本身也从不为HALLE MALL所持有或处于HALLE MALL的控制范围内。</p>
                    <p class="agree_txt2 agree_margin1">4、HALLE MALL不允许用户进行线下交易。</p>
                    <p class="agree_txt2 agree_margin1">5、因商家与HALLE MALL用户之间的交易行为引起的任何法律纠纷，均由参与交易的双方解决，HALLE MALL无义务参与或解决HALLE MALL用户与商家的争议，但为维护HALLE MALL用户的权益和本APP交易秩序，HALLE MALL有权对任何一方行使其合法权利予以协助。</p>
                    <p class="agree_txt3 agree_margin">6、积分消费为HALLE MALL内用指定的TOKEN进行兑换所得，用户可以用积分进行抽奖、产品兑换等行为活动， 积分不是TOKEN，不能兑换成各类TOKEN，用户自行承担所兑换积分使用，HALLE MALL只作为一个商品流通平台。</p>


                    <p class="agree_txt3 agree_margin">五、HALLE MALL使用规范</p>

                    <p class="agree_txt2 agree_margin1">1、用户注册和使用本APP过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、用户说明等注册信息及认证资料,或文字、语音、图片、视频、图文等用户所发送、回复或自动回复消息和相关链接页面，以及其他使用用户账号或本APP所产生的内容均不得违反现行法律、法规、规章、政策规定;如果用户在境外使用本APP，应同时遵守所在地或相关国家(地区)的法律法规。</p>
                    <p class="agree_txt2 agree_margin1">2、用户不得利用“HALLE MALL”账号或本APP制作、上载、复制、发布、传播如下法律、法规和政策禁止的内容:</p>
                    <p class="agree_txt2 agree_margin1">(1)反对宪法所确定的基本原则的 ;</p>
                    <p class="agree_txt2 agree_margin1">(2)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的 ;</p>
                    <p class="agree_txt2 agree_margin1">(3)损害国家荣誉和利益的 ;</p>
                    <p class="agree_txt2 agree_margin1">(4)煽动民族仇恨、民族歧视，破坏民族团结的 ; </p>
                    <p class="agree_txt2 agree_margin1">(5)破坏国家宗教政策，宣扬邪教和封建迷信的 ; </p>
                    <p class="agree_txt2 agree_margin1">(6)散布谣言，扰乱社会秩序，破坏社会稳定的 ;</p>
                    <p class="agree_txt2 agree_margin1">(7)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的 ;</p>
                    <p class="agree_txt2 agree_margin1">(8)侮辱或者诽谤他人，侵害他人合法权益的 ;</p>
                    <p class="agree_txt2 agree_margin1">(9)含有法律、行政法规禁止的其他内容的信息。</p>
                    <p class="agree_txt2 agree_margin1">3、用户不得利用“HALLE MALL”账号或本APP制作、上载、复制、发布、传播如下干扰“HALLE MALL"正常运营，以及侵犯其他用户或第三方合法权益的内容:</p>
                    <p class="agree_txt2 agree_margin1">(1)含有任何性或性暗示的 ;</p>
                    <p class="agree_txt2 agree_margin1">(2)含有辱骂、恐吓、威胁内容的 ;</p>
                    <p class="agree_txt2 agree_margin1">(3)含有骚扰、垃圾广告、恶意信息、诱骗信息的 ;</p>
                    <p class="agree_txt2 agree_margin1">(4)涉及他人隐私、个人信息或资料的 ;</p>
                    <p class="agree_txt2 agree_margin1">(5)侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的 ;</p>
                    <p class="agree_txt2 agree_margin1">(6)含有其他干扰本APP正常运营和侵犯其他用户或第三方合法权益内容的信息。</p>
                    <p class="agree_txt2 agree_margin1">4、用户不得利用“HALLE MALL”账号或本APP进行如下行为:</p>
                    <p class="agree_txt2 agree_margin1">(1)提交、发布虚假信息，或盗用他人头像或资料,冒充、利用他人名义的 ;</p>
                    <p class="agree_txt2 agree_margin1">(2)虚构事实、隐瞒真相以误导、欺骗他人的;</p>
                    <p class="agree_txt2 agree_margin1">(3)利用技术手段批量建立虚假账号的 ;</p>
                    <p class="agree_txt2 agree_margin1">(4)利用“HALLE MALL”账号或本APP从事任何违法犯罪活动的 ;</p>
                    <p class="agree_txt2 agree_margin1">(5)制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的 ;</p>
                    <p class="agree_txt2 agree_margin1">(6)其他违反法律法规规定、侵犯其他用户合法权益、干扰"HALLE MALL”正常运营或HALLE MALL未明示授权的行为。</p>
                    <p class="agree_txt2 agree_margin1">5、HALLE MALL提供的本APP中可能包括广告，用户同意在使用过程中显示HALLE MALL和第三方供应商、合作伙伴提供的广告。</p>
                    <p class="agree_txt2 agree_margin1">6、用户在本APP中或通过本APP所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表HALLE MALL的观点、立场 ; 用户不得以HALLE MALL的名义传送或发布信息 ; 也不得以易被公众或第三方混淆为HALLE MALL官方意见的方式传送或发布信息。</p>
                    <p class="agree_txt2 agree_margin1">7、用户须对利用"HALLE MALL”账号或本APP传送信息的真实性、合法性、无害性、准确性、有效性等全面负责。如因此给HALLE MALL或第三方造成损害的，用户应当依法予以赔偿。</p>


                    <p class="agree_txt3 agree_margin">六、违规用户的处理</p>

                    <p class="agree_txt2 agree_margin1">1、如果HALLE MALL发现用户违反本协议条款，或他人投诉用户违规并经HALLE MALL初步审核属实，HALLE MALL有权不经通知对相关内容 (包括但不限于用户资料、发贴记录等) 进行删除，并视情节轻重对违规用户处以包括但不限于警告、账号封禁、设备封禁、功能封禁的处罚。</p>
                    <p class="agree_txt2 agree_margin1">注 : HALLE MALL对投诉内容的审查仅为初步表面审查,不对审查结论承担责任;如果用户投诉内容存在异议，则应于投诉方接洽处理或采取法律途径解决争议。</p>
                    <p class="agree_txt2 agree_margin1">2、用户理解并同意，HALLE MALL有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门]报告等，用户应承担由此而产生的一切法律责任。</p>
                    <p class="agree_txt2 agree_margin1">3、被处理用户可提交申诉，HALLE MALL将对申诉进行审查，并自行合理判断决定是否变更处罚措施。对于因投诉所导致的处理，HALLE MALL仍有权根据投诉方与用户共同确定的意见或司法机关生效法律文书增加、变更或撤销对用户的处理。</p>
                    <p class="agree_txt2 agree_margin1">4、用户理解并同意，因用户违反本协议约定或发生其它过错，导致或产生的任何第三方向HALLE MALL或其合作方、关联方主张任何索赔、要求，如果造成HALLE MALL或其合作方、关联方发生的任何损失，包括合理的律师费，用户应当向HALLE MALL与合作方、关联方承担赔偿责任。</p>
                    <p class="agree_txt2 agree_margin1">用户同意，HALLE MALL可以将合作方、关联方的损失作为其自身损失向用户进行索赔，或者协助合作方、关联方向用户主张权利。</p>

                    <p class="agree_txt3 agree_margin">七、本协议的终止</p>

                    <p class="agree_txt2 agree_margin1">1、如果用户违反本协议约定，发生其它违法或不当行为，HALLE MALL有权终止本协议，且不因终止协议承担任何责任;但本协议的终止不影响用户对已经发生的交易或损失承担法律责任。</p>
                    <p class="agree_txt2 agree_margin1">2、HALLE MALL注销用户账号，则本协议即在用户和HALLE MALL之间终止 ; 注销用户账号后，HALLE MALL可以对用户进行书面或口头通知，但该通知非HALLE MALL的强制义务。</p>
                    <p class="agree_txt2 agree_margin1">3、用户不同意HALLE MALL就本APP所自行制定的使用规范，或不同意HALLE MALL对本协议所作出的修订，则本协议在HALLE MALL在该用户之间终止。</p>
                    <p class="agree_txt2 agree_margin1">4、HALLE MALL与某一个用户或部分用户终止本协议,不影响本协议在HALLE MALL与其它用户之间的存续。</p>

                    <p class="agree_txt3 agree_margin">八、知识产权</p>

                    <p class="agree_txt2 agree_margin1">1、本APP上的图标、网页页面、按钮图标、字体服务品名等标识在网站上的信息都是本APP运营方及其关联方的财产，受中国和国际知识产权法的保护。</p>
                    <p class="agree_txt2 agree_margin1">2、未经本APP运营方的允许，任何人不得使用、复制或用于其他途径。</p>
                    <p class="agree_txt2 agree_margin1">3、在本APP上出现的其他商标是其商标权利人各自的财产，未经本APP运营方或相关商标所有人的书面许可，任何第三方都不得使用。</p>

                    <p class="agree_txt3 agree_margin">九、软件形式</p>

                    <p class="agree_txt2 agree_margin1">1.本APP可能为不同的终端设备开发不同的软件版本，您应当根据实际需要选择下载合适的版本进行安装。</p>
                    <p class="agree_txt2 agree_margin1">2.如果您从未经合法授权的第三方获取本软件或与本软件名称相同的安装程序，HALLE MALL无法保证该软件能否正常使用，并对因此给您造成的任何损失不予负责。</p>
                    <p class="agree_txt2 agree_margin1">3.为了增进用户的体验、完善服务内容，本APP将不时提供软件更新服务(该更新可能会采取软件替换，修改、功能强化、版本升级等形式)。为了改善用户体验,保证服务的安全性和功能的一致性，本APP有权对软件进行更新或者对软件的部分功能效果进行变更或限制。</p>
                    <p class="agree_txt2 agree_margin1">4.软件新版本发布后，旧版本软件可能无法使用。本APP不保证旧版本继续可用，及相应的客户服务，请您随时对新版本进行更新。</p>

                    <p class="agree_txt3 agree_margin">十、其他条款</p>

                    <p class="agree_txt2 agree_margin1">1、HALLE MALL郑重提醒用户注意本协议中免除HALLE MALL责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险。未成年人应在法定监护人的陪同下阅读本协议。</p>
                    <p class="agree_txt2 agree_margin1">2、本协议的效力、解释及纠纷的解决，适用于中华人民共和国法律。若用户和HALLE MALL之间发生任何纠纷或争议，首先应友好协商解决 ,协商不成的，用户同意将纠纷或争议提交HALLE MALL住所地有管辖权的人民法院管辖。</p>
                    <p class="agree_txt2 agree_margin1">3、本协议的任何条款无论因何种原因无效或不具可执行性，其余条款仍有效，对双方具有约束力。</p>
                    <p class="agree_txt2 agree_margin1">4、HALLE MALL APP内所有的角色权益，均以官方网站推出的规则为准。</p>











                    <p class="agree_txt3 agree_margin" style="text-align: right;"> 2019年12月12日</p>




                </div>


                <div class="content" v-if="!curLang"
                    :class="[curLang ? '' : 'active']"
                >
                    <p style="font-weight: bold;">Halle Token Service Agreement</p>
                    <p style="font-weight: bold;">Updated recently: 15 August 2019</p>
                    <p style="font-weight: bold;">Respected Users:</p>
                    <p style="font-weight: bold;">Thank you for choosing Halle Token service.Halle Token Service Agreement (hereinafter referred to as "this Agreement") is signed by Halle INTERNATIONAL FOUNDATION (hereinafter referred to as "Halle" or "we") and users (hereinafter referred to as "you" or "user"). This Agreement has the legal effect of the contract between you and Halle.</p>
                    <p style="font-weight: bold;">Halle would like to remind you that before using Halle Token (hereinafter referred to as "Halle Token" or "this software"), please read the "Halle Token Service Agreement" and the relevant agreements mentioned later, especially the "exemption and limitation of liability" provisions of this agreement will be reflected in a bolder form to ensure that you fully understand the provisions of this Agreement and consider risks independently.</p>
                    <p style="font-weight: bold;">One. Confirmation and acceptance of this Agreement</p>
                    <p>1. You understand that this Agreement and related agreements are applicable to decentralized applications independently developed and owned by Halle Token and Halle (referred to as "DApp") (excluding DApp developed by third parties).</p>
                    <p>2. If you download the Halle Token software and create or import your wallet, you will be deemed to have fully read and accepted all the terms of this Agreement. This Agreement shall enter into force immediately and be binding on both parties.</p>
                    <p>3. This Agreement may be updated by Halle at any time. Once the amended Agreement is published on Halle Token, it will take effect automatically without further notice.If you do not accept the amended terms after Halle announces the amended terms, please stop using Halle Token immediately. If you continue using Halle Token, you will be deemed to accept the amended terms.</p>
                    <p>4. If you are under 18 years of age, or have no or limited capacity for civil conduct, please use Halle Token under the guidance of your parents or guardians.</p>
                    <p style="font-weight: bold;">Two. Definition</p>
                    <p>1.<span style="font-weight: bold;">Halle Token:</span>  refers to the block Chain Wallet developed by Halle based on the ETF single chain system (and other block chain systems that will be supported in the future), including other auxiliary tools developed to facilitate the users use of the block chain system.</p>
                    <p style="font-weight: bold;">2. User:</p>
                    <p>(1) The user must be a natural person with full civil capacity;</p>
                    <p>(2) If you use Halle Token for minors under 18 years of age, you need to use Halle Token under the guidance of your parents or guardians.Halle Token has the right to hold you and your parents or guardians accountable for all consequences caused by the use of Halle Token by a person without capacity for civil conduct or by a person with limited capacity for civil conduct who engages in transactions beyond the scope of his civil rights or capacity.</p>
                    <p>3. <span style="font-weight: bold;">Competence Questionnaire:</span> Before you use Halle Token (and in the future), you need to pass the Competence Questionnaire to prove that you know the technology and knowledge of the block chain, and have the basic ability to use and manage the decentralized wallet rationally.</p>
                    <p>4. <span style="font-weight: bold;">Creating or Importing a Wallet:</span> The process by which you use Halle Token to confirm compliance with this Agreement and create or import a wallet.</p>
                    <p>5. <span style="font-weight: bold;">Wallet password: </span>refers to the password that the software interface prompts you to fill in when you create the Halle Token wallet, which is used to encrypt and protect the private key.As a de-centralized application, the wallet password is not stored on your mobile device or Halle server. Once lost, you need to reset the new password with the help of a plaintext private key or mnemonic.</p>
                    <p>6. <span style="font-weight: bold;">Information prompt: </span>Halle Token software operation interface involves information prompt content, the user is advised to follow the relevant steps to operate.</p>
                    <p>7. <span style="font-weight: bold;">Specific Users: </span>Users who must cooperate with Halle in fulfilling their personal information disclosure obligations in accordance with Chinese laws, regulations and policies.</p>
                    <p>8. <span style="font-weight: bold;">Private key: </span>consisting of 256 random characters, is the core of digital tokens owned and used by users.</p>
                    <p>9. <span style="font-weight: bold;">Public key: </span>The private key is generated by one-way derivation based on cryptographic principles, and used to generate the block chain digital wallet address, which is the public receipt address.</p>
                    <p>10. <span style="font-weight: bold;">Auxiliaries: </span>It meets the industry standard of block chain BIP39 and consists of 12 (or 15/18/21/24) ordered words generated by random algorithm.It is an easy-to-record form of private key, which is convenient for users to back up and keep.</p>
                    <p>11. <span style="font-weight: bold;">Digital tokens: </span>refers to the types of digital tokens currently supported by Halle Token, including, but not limited to, HALE USDT, etc.</p>
                    <p>12. <span style="font-weight: bold;">Data: </span>Refers to articles and other materials on Halle Token such as "Information", which are all owned by Halle and cannot be reproduced without authorization.</p>
                    <p>13. <span style="font-weight: bold;">Personal Information:</span> Information that can be recorded electronically or in combination with other information to identify a users personal identity, including, but not limited to, the name, date of birth, identity card number, personal biometric information, address, telephone number, bank card number, mail address, wallet address, mobile device information, operation record, transaction of a natural person.Records, etc., but excluding the users wallet password, private key, mnemonic.</p>
                    <p style="font-weight: bold;">Three. Service Contents</p>
                    <p>1. <span style="font-weight: bold;">Create or import wallets.</span>For digital tokens supported by Halle Token, you can use Halle Token to generate new wallets or compatible wallets generated by other wallet tools imported into the relevant block chain system.</p>
                    <p>2. <span style="font-weight: bold;">Transfer and collection.</span>You can use Halle Tokens transfer and receipt functions to manage digital tokens, that is, to use the private key for electronic signature, and to modify the accounts of the relevant block chain.Transfer refers to the transfer operation by the payer using the address of the payees block chain. The actual transfer and collection actions occur in the relevant block chain system (rather than Halle Token).</p>
                    <p>3. <span style="font-weight: bold;">Check the market.</span>You can use Halle Token to see the exchange rate prices of the digital tokens provided.Halle Token grabs the corresponding digital token exchange rate information and displays it in the "market" section of Halle Token.</p>
                    <p>4. <span style="font-weight: bold;">Manage digital assets.</span>You can use Halle Token to keep the digital tokens supported by Halle Token (except ETH).</p>
                    <p>5. <span style="font-weight: bold;">Browse DApp.</span>Through links on Halle Token, users can jump to DApp and use the services provided by the DApp (including Halles own DApp and third party DApp).</p>
                    <p>6. <span style="font-weight: bold;">Transaction records.</span>We will copy all or part of your transaction records through the block chain system.However, the transaction records shall be based on the records of the block chain system.</p>
                    <p>7. <span style="font-weight: bold;">Temporarily Out of Service.</span>You know that based on the "irrevocable" property of block chain system transactions, we can not suspend or revoke transfer transactions for you, but under certain circumstances, we can suspend or restrict the operation of Halle Token software by a user.</p>
                    <p>8. <span style="font-weight: bold;">Other Halle</span> considers it necessary to provide services.</p>
                    <p>Users should be aware of the following common problems when accepting the services provided by Halle:</p>
                    <p style="font-weight: bold;">1. Adhering to the de-centralization of block chains and in order to protect usersdigital token security, Halles services are quite different from those of banking financial institutions.Users understand that Halle does not provide the following services:</p>
                    <p style="font-weight: bold;">(1) Store the users wallet password (that is, the password set when the user creates/imports the wallet), private key and mnemonic;</p>
                    <p style="font-weight: bold;">(2) Retrieve the users wallet password, private key and mnemonic;</p>
                    <p style="font-weight: bold;">(3) Loss of wallet;</p>
                    <p style="font-weight: bold;">(4) Restoring wallets;</p>
                    <p style="font-weight: bold;">(5) Transaction rollback.</p>
                    <p style="font-weight: bold;">2. Since Halle does not provide the above services, users should keep their own mobile devices containing Halle Token, backup Halle Token, backup wallet password, mnemonic, private key.If the user loses the mobile device, deletes and does not backup Halle Token, deletes and does not backup the wallet, wallet stolen or forgets the wallet password, private key, mnemonic, Halle can not restore the wallet or retrieve the wallet password, private key, mnemonic; if the user misoperates in the transaction (such as the wrong transfer address), Halle can not cancel the transaction.</p>
                    <p style="font-weight: bold;">3. The digital token management services provided by Halle and Halle Token do not include all existing digital tokens. Do not operate any digital tokens that Halle Token does not support.</p>
                    <p style="font-weight: bold;">4. Halle Token is only a users digital token management tool, not an exchange or trading platform.Although this Agreement will refer to "transactions" many times, its behavior generally refers to the transfer and collection operations performed by users using Halle Token, which is essentially different from "transactions" conducted on exchanges or trading platforms.</p>
                    <p style="font-weight: bold;">5. The integrated DApp on Halle Token includes DApp owned by Halle and DApp provided by third-party platform.For DApp provided by third-party platform, Halle Token only provides block chain browser for users entering DApp.Users should judge and evaluate the risks of services or transactions provided by the third party DApp before they accept services or make transactions on the third party DApp.</p>
                    <p style="font-weight: bold;">Four. Your Rights and Obligations</p>
                    <p style="font-weight: bold;">(1) Create or import wallets</p>
                    <p>1. Create or import wallets: You have the right to create and/or import wallets on your mobile device through Halle Token, to set wallet passwords and other information, and to use your wallet to transfer and collect transactions on the block chain through Halle Token applications.</p>
                    <p>2. Authentication: According to relevant laws, regulations and policy requirements, when using Halle Tokens related services, specific users should complete the relevant authentication promptly according to Halle Tokens instructions, requiring you to submit personal information including but not limited to your name, ID card number, mobile phone number, bank card number information, etc.Otherwise, the specific user will not be able to use the relevant services, and the loss caused by the delay of the specific user will be borne by you.</p>
                    <p>3. Halle may develop different software versions for different terminal devices. <span style="font-weight: bold;">You should choose to download the appropriate version for installation according to actual needs.If you have never acquired the software from a legally authorized third party or the installation program with the same name as the software, Halle will not be able to guarantee the normal use of the software, nor its security, so the loss will be borne by you.</span></p>
                    <p style="font-weight: bold;">4. After the new version of the software is released, the old version of the software may not be available.Halle does not guarantee the security, continued availability and customer service of the old software.Please check and download the latest version at any time.</p>
                    <p style="font-weight: bold;">(2) Use</p>
                    <p style="font-weight: bold;">1. Users should take care of mobile devices, wallet passwords, private keys, mnemonics and other information on their own.Halle is not responsible for keeping the above information for users.All risks, liabilities, losses and expenses arising from the loss of mobile devices, active or passive leaks, forgetting wallet passwords, private keys, mnemonics or being attacked or fraudulent by others shall be borne by you.</p>
                    <p>2. <span style="font-weight: bold;">Follow the information prompt.</span>You understand and agree to follow Halle Tokens information prompt and operate according to the content of the information prompt. Otherwise, all risks, liabilities, losses and expenses arising therefrom should be borne by you.</p>
                    <p style="font-weight: bold;">3. You know and understand that Halle Token is not obliged to perform due diligence on third party DApp services or transactions linked to it. You should make rational investment decisions and take corresponding investment risks on your own.</p>
                    <p>4. <span style="font-weight: bold;">Actively complete authentication.</span>When Halle Token reasonably believes that your transaction behavior or transaction situation is abnormal, or that your identity information is doubtful, or Halle Token believes that your identity documents or other necessary documents should be checked, please actively cooperate with Halle Token to verify your valid identity documents or other necessary documents, and complete the relevant authentication in time.</p>
                    <p style="font-weight: bold;">5. Transfer accounts.</p>
                    <p style="font-weight: bold;">(1) You are aware that the daily transfer quota and amount you can use in Halle Token service may vary depending on the country/region, regulatory requirements, transfer purposes, Halle Token risk control, authentication, etc. when you use the transfer service.</p>
                    <p style="font-weight: bold;">(2) You understand the "irrevocable" attribute of block chain operation. When you use Halle Token transfer function, you should bear the consequences of your misoperation (including, but not limited to, your misplaced transfer address and your choice of transfer node server).</p>
                    <p style="font-weight: bold;">(3) You are aware that when using Halle Token service, the following situations may lead to a transfer "transaction failure" or "packing overtime":</p>
                    <p style="font-weight: bold;">(A) insufficient wallet balance;</p>
                    <p style="font-weight: bold;">(B) inadequate trading fees for miners;</p>
                    <p style="font-weight: bold;">(C) Block chain failed to execute contract code;</p>
                    <p style="font-weight: bold;">(D) Payments exceeding those stipulated by regulatory authorities, Halle Token or laws and regulations;</p>
                    <p style="font-weight: bold;">(E) Technical faults such as network and equipment;</p>
                    <p style="font-weight: bold;">(F) Block chain network congestion, failure and other reasons cause transactions to be abandoned;</p>
                    <p style="font-weight: bold;">(G) Your address or counterparty address is identified as a special address, such as high-risk address, exchange address, ICO address, Token address, etc.</p>
                    <p style="font-weight: bold;">(4) You know that Halle Token only provides you with transfer tools. After you use Halle Token to complete the transfer, Halle has fulfilled all the obligations of the current service. Halle has no obligations for other disputes.</p>
                    <p>6. <span style="font-weight: bold;">Legitimate compliance.</span>You know that when you operate in Halle Token or trade with DApp on Halle Token, you should follow the requirements of relevant laws, regulations and national policies.</p>
                    <p>7. <span style="font-weight: bold;">Announcement notice.</span>Halle Token will notify you by way of website announcement, e-mail, short message, telephone, message center information, pop-up window prompt or client notification, such as informing you of the progress of the transaction, or prompting you to carry out relevant operations. Please pay attention to it in time.</p>
                    <p style="font-weight: bold;">8. Service costs and tax obligations:</p>
                    <p style="font-weight: bold;">(1) Halle Token will not charge you any service fee or handling fee for the time being, but will stipulate or announce rules separately when charging for certain services in the future.</p>
                    <p style="font-weight: bold;">(2) You know that under certain circumstances, due to the instability of your environment and network status, when your transfer operation is not completed, the relevant block chain system will also collect the miners fee;</p>
                    <p style="font-weight: bold;">(3) All taxes payable and other expenses incurred as a result of your transaction in Halle Token will be paid by you.</p>
                    <p style="font-weight: bold;">Five. Risk Tips</p>
                    <p style="font-weight: bold;">1. You are aware that, because the laws, regulations and policies in the field of digital tokens are not yet sound, digital tokens in this field may cause major risks such as unrealized, unstable technology and so on.Moreover, the price fluctuation of digital tokens is much higher than that of other financial assets.We cautiously remind you that you should rationally choose to hold or dispose of any digital token according to your financial situation and risk preferences.Halle Tokens market view function is only a search result that captures the digital token exchange rate information of some exchanges, and it is not expressed as the latest market or the best quotation.</p>
                    <p style="font-weight: bold;">2. When using Halle Token service, if you or your counterpart fail to comply with this agreement or the instructions, transactions, payment pages of the operation prompts, rules, Halle Token does not guarantee the smooth completion of the fair, and Halle Token is not liable for damages.If the aforementioned situation occurs, and the payment has been recorded in your or your traders Halle Token wallet or third-party wallet, you understand the "irreversible" nature of block chain operation and the "irreversible" characteristics of related transactions, and you and your counterpart bear the corresponding risk consequences on their own.</p>
                    <p style="font-weight: bold;">3. When you use Halle Tokens integrated third-party DApp services or conduct transactions, for your benefit, Halle recommends that you carefully read this Agreement and Halle Token tips, understand the transaction object and product information, and carefully assess the risks before taking action.All your transactions with third party DApp are your personal actions. A binding contractual relationship is established between you and your counterpart, irrespective of Halle Token.Halle Token is not liable for all risks, liabilities, losses and expenses arising from your trading activities.</p>
                    <p style="font-weight: bold;">4. In the course of trading, you should decide whether the other party is a person with full civil capacity and decide whether to trade with the other party or transfer the money to the other party, and you should bear all the risks associated with it.</p>
                    <p style="font-weight: bold;">5. In order to avoid duplicate transfer, you should confirm it through the official way of relevant block chain system or other block chain inquiry tools when similar abnormal information such as "transaction failure" and "packing overtime" occurs in the transfer process. Otherwise, all losses and expenses caused by this should be borne by you.</p>
                    <p style="font-weight: bold;">6. You understand that when you create or import your wallet on Halle Token, your private key, mnemonic and other information is stored only in the current mobile device, not on Halle Token or Halles server.You can replace mobile devices by synchronizing wallets, etc. in accordance with the instructions provided by Halle Token.However, if you do not save or back up the wallet password, private key, mnemonic and other information and lose your mobile device, your digital token will be lost, Halle can not find it for you, you have to bear the corresponding losses.If you leak out, save or back up the wallet password, private key, mnemonic and other information, or if the device or server that saves or backs up the above information is attacked or controlled by hackers, your digital token will be lost, and Halle can not retrieve it for you, you will have to bear the corresponding losses on your own.</p>
                    <p style="font-weight: bold;">7. We recommend that you make a secure backup of your wallet password, private key, mnemonic and other information when creating or importing your wallet.We would like to draw your attention, please do not use the following backup methods: screenshots, e-mail, notepad, SMS, Wechat, QQ and other electronic backup methods.We recommend that you copy information such as mnemonics in a paper notebook. You can also keep electronic data in the password manager.</p>
                    <p style="font-weight: bold;">8. We recommend that you use Halle Token in a secure network environment to ensure that your mobile device is free of jailbreak or Root to avoid potential security risks.</p>
                    <p style="font-weight: bold;">9. Please be alert to non-Halle Token fraud in the use of our services.Once such behaviour is found, we encourage you to inform us as soon as possible.</p>
                    <p style="font-weight: bold;">Six. Change, interruption and termination of services
                    </p>
                    <p style="font-weight: bold;">1. You agree that Halle can temporarily provide some service functions or suspend some service functions or open new service functions in the future in order to guarantee its own business operation rights.When any function decreases or increases or changes, as long as you continue to use Halles services, you still agree to this agreement or the amended terms of this agreement.
                    </p>
                    <p style="font-weight: bold;">2. You understand that Halle will suspend service when the following situation exists:
                    </p>
                    <p style="font-weight: bold;">(1) Interruption of business due to technical reasons such as maintenance, upgrading, malfunction and communication interruption of equipment and block chain system;
                    </p>
                    <p style="font-weight: bold;">(2) Due to force majeure factors such as typhoons, earthquakes, tsunamis, floods, blackouts, wars or terrorist attacks, viruses, Trojans, hacker attacks, system instability or government actions, Halle system can not provide services or Halle reasonably believes that there will be greater risks in continuing to provide services;
                    </p>
                    <p style="font-weight: bold;">(3) Other situations that Halle could not control or reasonably foresee.
                    </p>
                    <p style="font-weight: bold;">3. Halle may unilaterally suspend or terminate some or all of your functions using Halle Token when:
                    </p>
                    <p style="font-weight: bold;">(1) User death;
                    </p>
                    <p style="font-weight: bold;">(2) embezzlement of other peoples wallet information or mobile devices;
                    </p>
                    <p style="font-weight: bold;">(3) Fill in personal information to provide false information, and do not operate by oneself when answering the competence test questionnaire;
                    </p>
                    <p style="font-weight: bold;">(4) Refuse the mandatory update operation initiated by Halle to enhance Halle Token function;
                    </p>
                    <p style="font-weight: bold;">(5) Use Halle Token for illegal or criminal activities;
                    </p>
                    <p style="font-weight: bold;">(6) Obstructing the normal use of other users;
                    </p>
                    <p style="font-weight: bold;">(7) Personnel or managers who pretend to be Halle;
                    </p>
                    <p style="font-weight: bold;">(8) Attacking, intruding, altering or threatening the normal operation of Halle computer system in any other way;
                    </p>
                    <p style="font-weight: bold;">(9) Using Halle Token to advertise spam;
                    </p>
                    <p style="font-weight: bold;">(10) Disseminating rumors and damaging the goodwill of Halle and Halle Token;
                    </p>
                    <p style="font-weight: bold;">(11) Illegal acts, other violations of this Agreement, and circumstances in which Halle reasonably believes that the function should be suspended.
                    </p>
                    <p style="font-weight: bold;">4. When your service relationship with Halle changes, interrupts, and terminates, you still have the right to export your wallet and other information within a reasonable time.
                    </p>

                    <p style="font-weight: bold;">Seven. Your commitment to legally use Halle services
                    </p>
                    <p style="font-weight: bold;">1. You shall abide by the relevant laws and regulations of the Peoples Republic of China and the laws and regulations of the country or region in which you live. Halle Token shall not be used for any illegal purposes or for any illegal use of Halle services.
                    </p>
                    <p style="font-weight: bold;">2. You may not use Halle Token to commit illegal or criminal acts, including but not limited to:
                    </p>
                    <p style="font-weight: bold;">(1) Oppose the basic principles established by the Constitution, endanger national security, disclose state secrets, subvert state power and undermine national unity;
                    </p>
                    <p style="font-weight: bold;">(2) To engage in any illegal or criminal acts, including but not limited to money laundering, illegal fund-raising, etc.
                    </p>
                    <p style="font-weight: bold;">(3) By using any automated program, software, engine, web crawler, web page analysis tool, data mining tool or similar tools, access Halle services, collect or process the content provided by Halle, interfere with or attempt to interfere with any user or any other access to Halle services;
                    </p>
                    <p style="font-weight: bold;">(4) Providing gambling information or in any way enticing others to participate in gambling;
                    </p>
                    <p style="font-weight: bold;">(5) Invading other peoples Halle Token purse to steal digital tokens;
                    </p>
                    <p style="font-weight: bold;">(6) To conduct transactions that are inconsistent with the content of the transaction claimed by the counterparty, or that are untrue;
                    </p>
                    <p style="font-weight: bold;">(7) To engage in any violation or possible violation of Halle Tokens service system or data;
                    </p>
                    <p style="font-weight: bold;">(8) Other illegal acts and acts that Halle justifiably considers inappropriate.
                    </p>
                    <p style="font-weight: bold;">3. You understand and agree that Halle shall be compensated, including reasonable attorneys fees, for any losses, claims from any third party or penalties imposed by any administrative department, if you violate relevant laws, including but not limited to customs and tax regulations, or the provisions of this Agreement.
                    </p>
                    <p style="font-weight: bold;">4. You promise to pay Halles service fee on time (if any), otherwise Halle has the right to suspend or suspend the service provided to you.
                    </p>

                    <p style="font-weight: bold;">Eight. Privacy Provisions
                    </p>
                    <p>1. Halle attaches great importance to the protection of usersprivacy. Refer to 《Halle Token Privacy Policy published by Halle and updated from time to time》
                    </p>

                    <p style="font-weight: bold;">Nine. Exemption and Limitation of Liability
                    </p>
                    <p style="font-weight: bold;">1. Halle shall be liable only for the obligations specified in this Agreement.
                    </p>
                    <p style="font-weight: bold;">2. You understand and agree that, to the extent permitted by law, Halle can only provide services according to the existing technical level and conditions.Halle Token is not responsible for the failure to provide services due to the following reasons:
                    </p>
                    <p style="font-weight: bold;">(1) Halle Token system downtime maintenance or upgrade;
                    </p>
                    <p style="font-weight: bold;">(2) Force majeure due to typhoons, earthquakes, floods, lightning or terrorist attacks;
                    </p>
                    <p style="font-weight: bold;">(3) The hardware and software of your mobile device and the communication lines and power supply lines are out of order;
                    </p>
                    <p style="font-weight: bold;">(4) You use Halle services improperly or without Halle authorization or authorization;
                    </p>
                    <p style="font-weight: bold;">(5) Because of virus, Trojan horse, malicious program attack, network congestion, system instability, system or equipment failure, communication failure, power failure, bank and other reasons or government behavior;
                    </p>
                    <p style="font-weight: bold;">(6) Any other reason not caused by Halles cause.
                    </p>
                    <p style="font-weight: bold;">3. Halle is not liable for the following circumstances:
                    </p>
                    <p style="font-weight: bold;">(1) The loss of digital tokens due to the loss of mobile devices, deletion and non-backup of Halle Token, deletion and non-backup of wallets, wallet theft or forgetting of wallet passwords, private keys and mnemonics;
                    </p>
                    <p style="font-weight: bold;">(2) Loss of digital tokens due to usersself-disclosure of wallet passwords, private keys, mnemonics, borrowing, transferring or authorizing others to use their mobile devices or Halle Token wallets, or not downloading Halle Token applications through official Halle channels or using Halle Token applications in other unsafe ways;
                    </p>
                    <p style="font-weight: bold;">(3) Loss of digital tokens due to user misoperation (including, but not limited to, your wrong transfer address and your own choice of transfer node server);
                    </p>
                    <p style="font-weight: bold;">(4) Loss of digital tokens due to misoperation by users who do not understand the nature of block chain technology;
                    </p>
                    <p style="font-weight: bold;">(5) Because of time lag and unstable block chain system, Halle copy userstransaction records on block chain are deviated.
                    </p>
                    <p style="font-weight: bold;">(6) The risks and consequences of users operation on third party DApp.
                    </p>
                    <p style="font-weight: bold;">4. You understand that Halle Token is only a tool for managing your digital tokens.Halle has no control over the quality, safety or legality of products and services provided by third party DApp, the authenticity or accuracy of information, and the ability of the other party to fulfil its obligations under the agreements with you.All your transactions with third party DApp are your personal actions. A binding contractual relationship is established between you and your counterpart, irrespective of Halle Token.Halle reminds you that you should use your own discretion to determine the authenticity, legitimacy and validity of login DApp and related information.The risks arising from your exchange with any third party shall also be borne by you.
                    </p>
                    <p style="font-weight: bold;">5. Halle may serve you and your counterparty at the same time. You agree to explicitly exempt Halle from any actual or potential conflicts of interest that may exist in such acts. This does not allow you to claim that Halle has legal defects in providing services, nor does it aggravate Halles liability or duty of care.
                    </p>
                    <p style="font-weight: bold;">6. Halle does not provide the following forms of assurance:
                    </p>
                    <p style="font-weight: bold;">(1) Halle services will meet all your needs;
                    </p>
                    <p style="font-weight: bold;">(2) Any technology, products, services and information you acquire through Halle services will meet your expectations;
                    </p>
                    <p style="font-weight: bold;">(3) Halle guarantees the timeliness, accuracy, completeness and reliability of the digital token market information captured from third-party exchanges;
                    </p>
                    <p style="font-weight: bold;">(4) The parties to your trading on Halle Token will fulfil their obligations under the trading agreement with you in a timely manner.
                    </p>
                    <p style="font-weight: bold;">7. In any case, Halles total liability for breach of contract under this Agreement shall not exceed 1) 0.1 ETR; or 2) 500 RMB, whichever is higher.
                    </p>
                    <p style="font-weight: bold;">8. You understand that Halle Token is only a tool for users to manage digital tokens and display transaction information. Halle does not provide legal, tax or investment advice services.You should seek advice from legal, tax and investment professionals on your own, and Halle is not responsible for the investment losses and data losses you suffered in using our services.
                    </p>
                    <p style="font-weight: bold;">9. You understand that according to the requirements of relevant Chinese policies and regulations, we may change our user access standards from time to time, limit the scope and manner of providing services to a particular group, etc.
                    </p>

                    <p style="font-weight: bold;">Ten. Complete Agreement
                    </p>
                    <p style="font-weight: bold;">1. This Agreement consists of the Halle Token Service Agreement, the Halle Token Privacy Policy and the rules promulgated by Halle from time to time.
                    </p>
                    <p style="font-weight: bold;">2. Part of this Agreement is deemed to be violated or invalid by the court having jurisdiction, and thus does not affect the validity of other contents.
                    </p>
                    <p style="font-weight: bold;">3. Any translation version of this Agreement is provided for the convenience of users only, and there is no intention to modify the terms of this Agreement.If there is a conflict between the Chinese version and the non-Chinese version of this Agreement, the Chinese version shall prevail.
                    </p>

                    <p style="font-weight: bold;">Eleven. Protection of Intellectual Property Rights
                    </p>
                    <p>1. Halle Token is an application developed and owned by Halle.The intellectual property rights of any content displayed in Halle Token (including this Agreement, bulletins, articles, videos, audio, pictures, archives, information, materials, trademarks or logos) shall be owned by Halle or third-party owners.Users can only use Halle Token applications and their contents for the purpose of holding and managing digital tokens.No one may use, modify, reverse compile, copy, publicly disseminate, change, distribute, distribute or publish the above-mentioned applications and contents without the prior written consent of Halle or third party obligee.
                    </p>

                    <p style="font-weight: bold;">Twelve. Law Application and Dispute Resolution
                    </p>
                    <p>1. The laws of the Peoples Republic of China shall apply to the validity, interpretation, alteration, execution and dispute settlement of this Agreement and its revised edition. In the absence of relevant legal provisions, international commercial practices and/or industrial practices shall apply.
                    </p>
                    <p>2. If any dispute or dispute arises between you and Halle, it should be settled through friendly negotiation. If the negotiation fails, either party may submit it it to the peoples court with jurisdiction in the place where Halle is located.
                    </p>

                    <p style="font-weight: bold;">Thirteen. OTHER
                    </p>
                    <p>1. If you are a user outside the Peoples Republic of China, you need to fully understand and abide by all relevant laws, regulations and rules concerning the use of Halle services in your jurisdiction.
                    </p>
                    <p>2. If you encounter any problems in using Halle services, you can contact us by submitting feedback from Halle Token, etc.
                    </p>
                    <p>3. You can view this agreement in Halle Token.Halle encourages you to consult Halles service protocol every time you visit Halle Token.
                    </p>
                    <p style="font-weight: bold;">4. This Agreement shall apply from 15 August 2019.
                    </p>
                    <p style="font-weight: bold;">Nothing in this agreement is complete. You are required to abide by Halles updated announcements and relevant rules.
                    </p>
                    <p style="text-align: right;font-weight: bold;"> Halle International Foundation LTD.
                    </p>




                </div>




            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "UserAgreement",
        computed: {
            curLang(){
                return this.getLang() == 'zh-CN' ? true : false
            },

        },
        methods: {
            ...mapGetters(['getLang']),
        }

    }
</script>

<style scoped>
    .agree_txt1{ font-size: 0.3rem;color: #333;line-height: 0.48rem;}
    .agree_wrapper{
        background: #fafafa;padding-top: 0.24rem;
        height: 100%;
        overflow-y: auto;
    }
    .agree_txt3{
        font-size: 0.28rem;color: #333;line-height: 0.48rem;font-weight: bold;
    }
    .agree_margin1{
        margin-top: 0.1rem;
    }
    .agree_margin{ margin-top: 0.48rem;}
    .agree_txt2{ font-size: 0.26rem;color: #333;line-height: 0.48rem;text-align:justify;
        /*text-indent:0.5rem;*/
    }
    .content{ background: #fff;padding: 0.2rem 0.4rem 0.56rem;}
    .fb{
        font-weight: bold;
    }
    .content.active * {
        width: 100%;
        word-wrap: break-word;
        font-size: 0.3rem;
        color: #333;
        line-height: 0.6rem;
        text-align: justify;
    }
</style>
