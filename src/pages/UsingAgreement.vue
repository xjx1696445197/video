<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('register.register_clause_termsUse')}}</p>
        </div>

        <div class="wrapper">
            <div class="agree_wrapper">
                <div class="content" v-if="curLang">
                    <p class="agree_txt1 agreement_padding fb">《Halle Token服务协议》</p>
                    <p class="agree_txt3 agree_margin">最近更新于：2020年02月28日</p>
                    <p class="agree_txt3 agree_margin">尊敬的用户：</p>
                    <p class="agree_txt3 font-weight agree_margin">感谢您选择Halle Token服务。《Halle Token服务协议》（以下简称“本协议”）Halle INTERNATIONAL FOUNDATION.（以下简称“Halle”或“我们”）和用户（以下简称“您”或“用户”）签订，本协议在您与Halle之间具有合同上的法律效力。</p>

                    <p class="agree_txt3 font-weight agree_margin">Halle在此特别提醒您在使用Halle Token（以下简称“Halle Token” 或“本软件”）之前，请认真阅读《Halle Token服务协议》及后文提到的相关协议，尤其是本协议规定的“免责及责任限制”等条款将以加粗的形式体现，确保您充分理解本协议中各条款，并自主考虑风险。</p>

                    <p class="agree_txt3 agree_margin">一、关于本协议的确认与接纳</p>
                    <p class="agree_txt2 agree_margin1">1. 您理解本协议及有关协议适用于Halle Token及Halle所自主开发和拥有的去中心化应用（简称“DApp”）（排除第三方开发的DApp）。</p>
                    <p class="agree_txt2 agree_margin1">2. 您下载Halle Token软件并创建或导入钱包，即视为您已经充分阅读并接受本协议全部条款，本协议立即生效，对双方具有约束力。</p>
                    <p class="agree_txt2 agree_margin1">3. 本协议可由Halle随时更新，经修改的协议一经在Halle Token上公布，立即自动生效，恕不再另行通知。在Halle公布修改协议条款后，如果您不接受修改后的条款，请立即停止使用Halle Token，您继续使用Halle Token将被视为接受修改后的协议。</p>
                    <p class="agree_txt2 agree_margin1">4. 如果您未满18周岁，或者是无民事行为能力人或限制民事行为能力人，请在父母或监护人指导下使用Halle Token。</p>



                    <p class="agree_txt3 agree_margin">二、 定义</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">1. Halle Token：</span>指由Halle基于以太坊单链系统（及将来陆续支持的其他区块链系统）开发的区块链钱包，包括其他为方便用户使用区块链系统而开发的辅助工具。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">2. 用户：</span></p>
                    <p class="agree_txt2 agree_margin1">（1）用户必须是具备完全民事行为能力的自然人；</p>
                    <p class="agree_txt2 agree_margin1">（2）若您为18周岁以下的未成年人使用Halle Token服务，需要在您父母或监护人的指导下使用Halle Token。无民事行为能力人使用Halle Token或限制民事行为能力人超过其民事权利或行为能力范围从事交易的，造成的一切后果，Halle Token有权要求您及您的父母或监护人负责。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">3. 能力测评问卷：</span>指在您使用Halle Token之前（及在将来的使用过程中），需通过能力测评问卷以证明您了解区块链科技和知识，具备合理使用和管理去中心化钱包的基本能力。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">4. 创建或导入钱包：</span>指您使用Halle Token，确认履行本协议并创建或导入钱包的过程。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">5. 钱包密码：</span>指您在创建Halle Token钱包过程中，软件操作界面提示您填写的密码，该密码用于加密保护私钥。作为去中心化的应用，钱包密码不存储在您的这台移动设备或Halle的服务器，一旦丢失你需要借助明文私钥或助记词重置新密码。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">6. 信息提示：</span>Halle Token软件操作界面涉及的信息提示内容，建议用户按照相关步骤进行操作。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">7. 特定用户：</span>指按照中国法律法规及政策规定必须要配合Halle履行个人信息披露义务的用户。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">8. 私钥：</span>由256位随机字符构成，是用户拥有并使用数字代币的核心。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">9. 公钥：</span>由私钥借助密码学原理单向推导生成，并用以生成区块链数字钱包地址，数字钱包地址即为公开收款地址。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">10. 助记词：</span>符合区块链BIP39 行业标准，由随机算法生成的12（或15/18/21/24）个有序单词组成。是私钥的易记录表现形式，方便用户备份保管。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">11. 数字代币：</span>指Halle Token目前支持的数字代币种类，包括但不限于HALE、USDT等。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">12. 资料：</span>指Halle Token上”资讯”等版块的文章等资料，这些资料均为Halle所有，未经授权不得转载。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">13. 个人信息：</span>指以电子或者其他方式记录的能够单独或者与其他信息结合识别用户个人身份的各种信息，包括但不限于自然人的姓名、出生日期、身份证件号码、个人生物识别信息、住址、电话号码、银行卡号、邮件地址、钱包地址、移动设备信息、操作记录、交易记录等，但不包括用户的钱包密码、私钥、助记词。</p>





                    <p class="agree_txt3 agree_margin">三、 服务内容</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">1. 创建或导入钱包。</span>对Halle Token支持的数字代币，您可以使用Halle Token生成新钱包或导入相关区块链系统的其它钱包工具生成的兼容钱包。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">2. 转账、收款。</span>您可以使用Halle Token的转账、收款功能进行数字代币的管理，即运用私钥进行电子签名，对相关区块链的账本进行修改。转账是指付款方利用收款方的区块链地址进行转账操作，实际的转账、收款行为均在相关区块链系统（而非Halle Token）发生。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">3. 行情查看。</span>您可以使用Halle Token查看所提供的数字代币汇率价格。Halle Token通过抓取相应的数字代币汇率信息并展示在Halle Token中的“市场”版块。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">4. 管理数字资产。</span>您可以使用Halle Token保管Halle Token所支持的数字代币（ETH除外）。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">5. 浏览DApp。</span>用户通过在Halle Token上的链接，可以跳转至DApp并使用该DApp（包括Halle自己的DApp和第三方DApp）提供的服务。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">6. 交易记录。</span>我们将通过区块链系统拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">7. 暂停服务。</span>您知悉基于区块链系统交易“不可撤销”的属性，我们不能为您暂停或撤销转账交易等操作，但在一定情况下，我们可以暂停或者限制某位用户对Halle Token软件的操作。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">8. 其他Halle</span>认为有必要提供的服务。</p>
                    <p class="agree_txt2 agree_margin1">用户接受Halle提供的上述服务时应了解以下常见问题：</p>
                    <p class="agree_txt2 agree_margin1 fb">1. 秉承着区块链的去中心化特点，并为了保护用户的数字代币安全，Halle提供的服务，大大区别于银行业金融机构。用户了解，Halle不提供以下服务：</p>
                    <p class="agree_txt2 agree_margin1 fb">（1）存储用户的钱包密码（即用户创建/导入钱包时设置的密码）、私钥、助记词；</p>
                    <p class="agree_txt2 agree_margin1 fb">（2）找回用户的钱包密码、私钥、助记词；</p>
                    <p class="agree_txt2 agree_margin1 fb">（3）挂失钱包；</p>
                    <p class="agree_txt2 agree_margin1 fb">（4）恢复钱包；</p>
                    <p class="agree_txt2 agree_margin1 fb">（5）交易回滚。</p>
                    <p class="agree_txt2 agree_margin1 fb">2. 由于Halle不提供上述服务，因此用户应当自行保管含有Halle Token的移动设备、备份Halle Token、备份钱包密码、助记词、私钥。如用户遗失移动设备、删除且未备份Halle Token、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词，Halle均无法还原钱包或找回钱包密码、私钥、助记词；如用户进行交易时误操作（例如输错转账地址），Halle亦无法取消交易。</p>
                    <p class="agree_txt2 agree_margin1 fb">3. Halle和Halle Token所能够提供的数字代币管理服务并未包括所有已存在的数字代币，请勿通过Halle Token操作任何Halle Token不支持的数字代币。</p>
                    <p class="agree_txt2 agree_margin1 fb">4. Halle Token仅是用户的数字代币管理工具，并非交易所或交易平台。虽然本协议将多次提及“交易”，其行为泛指用户使用Halle Token进行的转账和收款操作，这与交易所或交易平台上进行的“交易”有本质区别。</p>
                    <p class="agree_txt2 agree_margin1 fb">5. Halle Token上集成的DApp包括Halle自主拥有的DApp和第三方平台提供的DApp。对于第三方平台提供的DApp，Halle Token仅为用户进入DApp提供区块链浏览器。用户在第三方DApp上接受服务或进行交易前应自行判断和评估该第三方DApp提供的服务或交易是否存在风险。</p>



                    <p class="agree_txt3 agree_margin">四、 您的权利义务</p>
                    <p class="agree_txt2 agree_margin1 fb">（一）创建或导入钱包</p>
                    <p class="agree_txt2 agree_margin1">1. 创建或导入钱包：您有权在您的移动设备上通过Halle Token创建和/或导入钱包，有权设定钱包的钱包密码等信息，并有权通过Halle Token应用程序，使用自己的钱包在区块链上进行转账和收款等交易。</p>
                    <p class="agree_txt2 agree_margin1">2. 身份验证：按照有关法律法规和政策要求，特定用户在使用Halle Token提供的有关服务时，应当按照Halle Token的提示及时完成相关身份验证，要求您提交包括但不限于您的姓名、身份证号码、手机号码、银行卡号信息等个人信息。否则该特定用户将无法使用有关服务，因特定用户拖延造成的损失由您自行承担。</p>
                    <p class="agree_txt2 agree_margin1">3. Halle可能为不同的终端设备开发不同的软件版本，您应当根据实际需要选择下载合适的版本进行安装。<span class="fb">如果您从未经合法授权的第三方获取本软件或与本软件名称相同的安装程序，Halle将无法保证该软件能否正常使用，也无法保证其安全性，因此造成的损失由您自行承担。</span></p>
                    <p class="agree_txt2 agree_margin1 fb">4. 本软件新版本发布后，旧版软件可能无法使用。Halle不保证旧版软件的安全性、继续可用性及提供相应的客户服务。请您随时核对并下载最新版本。</p>
                    <p class="agree_txt2 agree_margin1 fb">（二）使用</p>
                    <p class="agree_txt2 agree_margin1 fb">1. 用户应自行妥善保管移动设备、钱包密码、私钥、助记词等信息。Halle不负责为用户保管以上信息。因您遗失移动设备、主动或被动泄露、遗忘钱包密码、私钥、助记词或遭受他人攻击、诈骗等所引起的一切风险、责任、损失、费用应由您自行承担。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">2. 遵循信息提示。</span>您了解并同意遵循Halle Token对您做出的信息提示，按照信息提示的内容进行操作，否则，由此引起的一切风险、责任、损失、费用等应由您自行承担。</p>
                    <p class="agree_txt2 agree_margin1 fb">3. 您知悉并理解Halle Token没有义务对链接的第三方DApp服务或交易履行尽职调查义务，您应当理性做出投资决策并自主承担相应的投资风险。</p>
                    <p class="agree_txt2 agree_margin1 fb"><span class="fb">4. 积极完成身份验证。</span>当Halle Token合理认为您的交易行为或交易情况出现异常的，或认为您的身份信息存在疑点的，或Halle Token认为应核对您身份证件或其他必要文件的情形时，请您积极配合Halle Token核对您的有效身份证件或其他必要文件，及时完成相关的身份验证。</p>
                    <p class="agree_txt2 agree_margin1 fb">5. 转账。</p>
                    <p class="agree_txt2 agree_margin1 fb">（1）您知悉对于Halle Token服务中您可使用的日计转账限额和笔数，可能因为您使用该转账服务时所处的国家/地区、监管要求、转账目的、Halle Token风险控制、身份验证等事由而不同。</p>
                    <p class="agree_txt2 agree_margin1 fb">（2）您理解基于区块链操作的“不可撤销”属性，当您使用Halle Token转账功能时，您应当自行承担因您操作失误而导致的后果（包括但不限于因您输错转账地址、您自身选择转账节点服务器的问题）。</p>
                    <p class="agree_txt2 agree_margin1 fb">（3）您知悉在使用Halle Token服务时，以下情况的出现可能导致转账“交易失败”或“打包超时”：</p>
                    <p class="agree_txt2 agree_margin1 fb">a) 钱包余额不足；</p>
                    <p class="agree_txt2 agree_margin1 fb">b) 交易矿工费不足；</p>
                    <p class="agree_txt2 agree_margin1 fb">c) 区块链执行合约代码失败；</p>
                    <p class="agree_txt2 agree_margin1 fb">d) 超出监管部门、Halle Token或法律法规规定的付款额度；</p>
                    <p class="agree_txt2 agree_margin1 fb">e) 网络、设备等技术故障；</p>
                    <p class="agree_txt2 agree_margin1 fb">f) 区块链网络拥堵、故障等原因引起交易被抛弃；</p>
                    <p class="agree_txt2 agree_margin1 fb">g) 您的地址或交易对方地址被识别为特殊地址, 如高风险地址、交易所地址、ICO 地址、Token地址等。</p>
                    <p class="agree_txt2 agree_margin1 fb">（4）您知悉Halle Token仅向您提供转账工具，在您使用Halle Token完成转账后，Halle即完成了当次服务的所有义务，Halle对其他纠纷争议，不负担任何义务。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">6. 合法合规。</span>您知悉在Halle Token进行操作时或利用Halle Token上的DApp进行交易时，您应当遵循有关法律法规、国家政策的要求。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">7. 公告通知。</span>Halle Token会以网站公告、电子邮件、发送短信、电话、消息中心信息、弹窗提示或客户端通知等方式向您发送通知，例如通知您交易进展情况，或者提示您进行相关操作，请您及时予以关注。</p>
                    <p class="agree_txt2 agree_margin1"><span class="fb">8. 服务费用与纳税义务：</span></p>
                    <p class="agree_txt2 agree_margin1 fb">（1）Halle Token暂时不向您收取任何形式的服务费或手续费，将来需对某些服务进行收费时将另行约定或公布规则；</p>
                    <p class="agree_txt2 agree_margin1 fb">（2）您知悉在特定情况下，因为您所处的环境及网络状态不稳定，导致您的转账操作未完成时，亦会被相关区块链系统收取矿工费；</p>
                    <p class="agree_txt2 agree_margin1 fb">（3）您因在Halle Token进行交易而发生的所有应纳税负及其它方面的费用均由您负责支付。</p>




                    <p class="agree_txt3 agree_margin">五、 风险提示</p>
                    <p class="agree_txt2 agree_margin1 fb">1. 您了解并知悉，由于数字代币领域的法律法规政策尚未健全，该领域的数字代币可能会产生无法兑现、技术不稳定等重大风险。且数字代币的价格波动幅度远高于其他金融资产。我们谨慎提醒您应当根据自身财务状况和风险偏好，理性选择持有或处置任何一种数字代币。Halle Token提供的行情查看功能仅系抓取部分交易所的数字代币汇率信息的搜索结果，并不表示为最新行情或最佳报价。</p>
                    <p class="agree_txt2 agree_margin1 fb">2. 在使用Halle Token服务时，若您或您的相对方未遵从本协议或相关网站说明、交易、支付页面中之操作提示、规则，Halle Token并不保证交易会顺利完成，且Halle Token不承担损害赔偿责任。若发生前述情形，而款项已先行入账您的或您的交易方的Halle Token钱包或第三方钱包，您理解区块链操作具有的“不可逆”属性，以及相关交易具有“不可撤销”的特征，由您及您的相对方自行承担相应的风险后果。</p>
                    <p class="agree_txt2 agree_margin1 fb">3. 在您使用Halle Token集成的第三方DApp服务或进行交易时，为了您的利益，Halle建议您仔细阅读本协议及Halle Token提示，了解交易对象及产品信息，谨慎评估风险后再采取行动。所有您在第三方DApp进行的交易行为系您的个人行为，有约束力的合同关系在您和您的相对方之间建立，与Halle Token无关。Halle Token对因您的交易行为所引起的一切风险、责任、损失、费用不承担任何责任。</p>
                    <p class="agree_txt2 agree_margin1 fb">4. 您在交易过程中应当自行判断对方是否为完全民事行为能力人并自行决定是否与对方进行交易或转账给对方等，且您自行承担与此相关的所有风险。</p>
                    <p class="agree_txt2 agree_margin1 fb">5. 在转账过程中，如果出现“交易失败”、“打包超时”等类似的异常信息提示时，您应通过相关区块链系统的官方途径或其他的区块链查询工具进行再次确认，以避免重复转账；否则，由此所引起的一切损失和费用应由您自行承担。</p>
                    <p class="agree_txt2 agree_margin1 fb">6. 您理解当您在Halle Token上创建或导入钱包之后，您的私钥、助记词等信息仅存储在当前的这台移动设备中，不存储在Halle Token或Halle的服务器上。您可以按照Halle Token提供的操作指南采取同步钱包等方式更换移动设备。但若您未保存或备份钱包密码、私钥、助记词等信息且在您移动设备丢失的情况下，您的数字代币将因此丢失，Halle无法为您找回，您需自行承担相应损失。若您在导出、保存或备份钱包密码、私钥、助记词等信息的时候泄密，或保存或备份上述信息的设备或服务器被黑客攻击或控制等情况下，您的数字代币将因此丢失，Halle无法为您找回，您需自行承担相应损失。</p>
                    <p class="agree_txt2 agree_margin1 fb">7. 我们建议您在创建或导入钱包时对您钱包的钱包密码、私钥、助记词等信息做好安全备份。我们提请您注意，请不要采用以下备份方式：截图、邮件、记事本、短信、微信、QQ等电子备份方式。我们建议您在纸质记事本上抄写助记词等信息，同时您亦可将电子数据保管至密码管理器。</p>
                    <p class="agree_txt2 agree_margin1 fb">8. 我们建议您在安全的网络环境中使用Halle Token，确保您的移动设备没有越狱或Root， 以避免可能存在的安全隐患。</p>
                    <p class="agree_txt2 agree_margin1 fb">9. 请您在使用我们的服务过程中，警惕非Halle Token官方的诈骗行为。一旦发现此类行为，我们鼓励您第一时间告知我们。</p>










                    <p class="agree_txt3 agree_margin">六、 服务的变更、中断、终止</p>
                    <p class="agree_txt2 fb agree_margin1">1. 您同意Halle为保证自主业务经营权可以暂时提供部分服务功能，或于将来暂停部分服务功能或开通新的服务功能。当任何功能减少或者增加或者变化时，只要您仍然使用Halle提供的服务，表示您仍然同意本协议或者本协议修正后的条款。</p>
                    <p class="agree_txt2 fb agree_margin1">2. 您理解存在如下情形时，Halle将暂停提供服务：</p>
                    <p class="agree_txt2 fb agree_margin1">（1）因设备、区块链系统维修、升级、故障和通信中断等技术原因而中断业务；</p>
                    <p class="agree_txt2 fb agree_margin1">（2）因台风、地震、海啸、洪水、停电、战争或恐怖袭击等不可抗力因素，病毒、木马、黑客攻击、系统不稳定或政府行为等原因，造成Halle系统不能提供服务或Halle合理认为继续提供服务会有较大风险的；</p>
                    <p class="agree_txt2 fb agree_margin1">（3）发生Halle无法控制或合理预见的其他情形。</p>
                    <p class="agree_txt2 fb agree_margin1">3. 当您出现如下情况时，Halle可单方面中止或终止您使用Halle Token的部分或全部功能:</p>
                    <p class="agree_txt2 fb agree_margin1">（1）用户死亡；</p>
                    <p class="agree_txt2 fb agree_margin1">（2）盗用他人的钱包信息或移动设备；</p>
                    <p class="agree_txt2 fb agree_margin1">（3）填写个人信息时提供虚假信息、在回答能力测评问卷时非本人操作；</p>
                    <p class="agree_txt2 fb agree_margin1">（4）拒绝Halle为提升Halle Token功能而发起的强制更新操作；</p>
                    <p class="agree_txt2 fb agree_margin1">（5）将Halle Token用于违法或犯罪活动；</p>
                    <p class="agree_txt2 fb agree_margin1">（6）妨碍其他用户正常使用；</p>
                    <p class="agree_txt2 fb agree_margin1">（7）伪称Halle的工作人员或管理人员；</p>
                    <p class="agree_txt2 fb agree_margin1">（8）攻击、侵入、更改或以任何其他方式威胁Halle计算机系统的正常运作；</p>
                    <p class="agree_txt2 fb agree_margin1">（9）利用Halle Token宣传垃圾广告；</p>
                    <p class="agree_txt2 fb agree_margin1">（10）散布谣言，损害Halle和Halle Token商誉；</p>
                    <p class="agree_txt2 fb agree_margin1">（11）违法行为，其他违反本协议的行为，及Halle合理认为应当暂停功能的情形。</p>
                    <p class="agree_txt2 fb agree_margin1">4. 当您与Halle之间的服务关系变更、中断、终止时，您仍有权在合理时间内导出您钱包等信息。</p>






                    <p class="agree_txt3 agree_margin">七、您合法使用Halle服务的承诺</p>
                    <p class="agree_txt2 fb agree_margin1">1. 您应遵守中华人民共和国相关法律法规及您所居住的国家或地区的法律法规，不得将Halle Token用于任何非法目的，也不得以任何非法方式使用Halle服务。</p>
                    <p class="agree_txt2 fb agree_margin1">2. 您不得利用Halle Token从事违法或犯罪的行为，包括但不限于：</p>
                    <p class="agree_txt2 fb agree_margin1">（1）反对宪法所确定的基本原则，危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一的；</p>
                    <p class="agree_txt2 fb agree_margin1">（2）从事任何违法犯罪行为，包括但不限于洗钱、非法集资等；</p>
                    <p class="agree_txt2 fb agree_margin1">（3）通过使用任何自动化程序、软件、引擎、网络爬虫、网页分析工具、数据挖掘工具或类似工具，接入Halle服务、收集或处理Halle所提供的内容，干预或试图干预任何用户或任何其他方式接入Halle服务的行为；</p>
                    <p class="agree_txt2 fb agree_margin1">（4）提供赌博资讯或以任何方式引诱他人参与赌博；</p>
                    <p class="agree_txt2 fb agree_margin1">（5）侵入他人Halle Token钱包盗取数字代币；</p>
                    <p class="agree_txt2 fb agree_margin1">（6）进行与交易对方宣称的交易内容不符的交易，或不真实的交易；</p>
                    <p class="agree_txt2 fb agree_margin1">（7）从事任何侵害或可能侵害Halle Token服务系统、数据之行为；</p>
                    <p class="agree_txt2 fb agree_margin1">（8）其他违法以及Halle有正当理由认为不适当的行为。</p>
                    <p class="agree_txt2 fb agree_margin1">3. 您理解并同意，如因您违反有关法律（包括但不限于海关及税务方面的监管规定）或者本协议之规定，使Halle遭受任何损失、受到任何第三方的索赔或任何行政管理部门的处罚。</p>
                    <p class="agree_txt2 fb agree_margin1">4. 您承诺按时缴纳Halle的服务费用（如有），否则Halle有权暂停或中止对您提供的服务。</p>





                    <p class="agree_txt3 agree_margin">八、 隐私条款</p>
                    <p class="agree_txt2 agree_margin1">1. Halle十分重视对用户隐私的保护，相关隐私保护政策请参考Halle公布并不时更新的<span class="fb">《Halle Token隐私政策》。</span></p>



                    <p class="agree_txt3 agree_margin">九、 免责及责任限制</p>
                    <p class="agree_txt2 agree_margin1 fb">1. Halle仅对本协议中所列明的义务承担责任。</p>
                    <p class="agree_txt2 agree_margin1 fb">2. 您理解和同意，在法律所允许的范围内，Halle只能按照现有的技术水平和条件提供服务。因下列原因导致Halle Token无法正常提供服务，Halle不承担责任：。</p>
                    <p class="agree_txt2 agree_margin1 fb">（1）Halle Token系统停机维护或升级；</p>
                    <p class="agree_txt2 agree_margin1 fb">（2）因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；</p>
                    <p class="agree_txt2 agree_margin1 fb">（3）您的移动设备软硬件和通信线路、供电线路出现故障的；</p>
                    <p class="agree_txt2 agree_margin1 fb">（4）您操作不当或未通过Halle授权或认可的方式使用Halle服务的；</p>
                    <p class="agree_txt2 agree_margin1 fb">（5）因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行等原因或政府行为等原因；</p>
                    <p class="agree_txt2 agree_margin1 fb">（6）非因Halle的原因而引起的任何其它原因。</p>
                    <p class="agree_txt2 agree_margin1 fb">3. Halle对以下情形不承担责任：</p>
                    <p class="agree_txt2 agree_margin1 fb">（1）因用户遗失移动设备、删除且未备份Halle Token、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词而导致的数字代币丢失；</p>
                    <p class="agree_txt2 agree_margin1 fb">（2）因用户自行泄露钱包密码、私钥、助记词，或借用、转让或授权他人使用自己的移动设备或Halle Token钱包，或未通过Halle官方渠道下载Halle Token应用程序或其他不安全的方式使用Halle Token应用程序导致的数字代币丢失；</p>
                    <p class="agree_txt2 agree_margin1 fb">（3）因用户误操作（包括但不限于您输错转账地址、您自身选择转账节点服务器的问题）导致的数字代币丢失；</p>
                    <p class="agree_txt2 agree_margin1 fb">（4）因用户不理解区块链技术的性质而进行误操作导致的数字代币丢失；。</p>
                    <p class="agree_txt2 agree_margin1 fb">（5）因时间滞后、区块链系统不稳定等原因导致Halle拷贝用户在区块链上的交易记录发生偏差；。</p>
                    <p class="agree_txt2 agree_margin1 fb">（6）用户在第三方DApp上操作产生的风险和后果。。</p>
                    <p class="agree_txt2 agree_margin1 fb">4. 您理解Halle Token仅作为您数字代币管理的工具。Halle不能控制第三方DApp提供的产品及服务的质量、安全或合法性，信息的真实性或准确性，以及相对方履行其在与您签订的协议项下的各项义务的能力。所有您在第三方DApp进行的交易行为系您的个人行为，有约束力的合同关系在您和您的相对方之间建立，与Halle Token无关。Halle提醒您应该通过自己的谨慎判断确定登录DApp及相关信息的真实性、合法性和有效性。您与任何第三方交易所产生的风险亦应由您自行承担。</p>
                    <p class="agree_txt2 agree_margin1 fb">5. Halle可能同时为您及您的交易对手方提供服务，您同意对Halle可能存在的该等行为予以明确豁免任何实际或潜在的利益冲突，并不得以此来主张Halle在提供服务时存在法律上的瑕疵，也不因此而加重Halle的责任或注意义务。</p>
                    <p class="agree_txt2 agree_margin1 fb">6. Halle不提供以下形式的保证：</p>
                    <p class="agree_txt2 agree_margin1 fb">（1）Halle服务将符合您的全部需求；</p>
                    <p class="agree_txt2 agree_margin1 fb">（2）您经由Halle服务取得的任何技术、产品、服务、资讯将符合您的期望；</p>
                    <p class="agree_txt2 agree_margin1 fb">（3）Halle从第三方交易所抓取的数字代币市场交易行情等信息的及时性、准确性、完整性、可靠性做出保证；</p>
                    <p class="agree_txt2 agree_margin1 fb">（4）您在Halle Token上的交易各方会及时履行其在与您达成的交易协议中各项义务。</p>
                    <p class="agree_txt2 agree_margin1 fb">7. 在任何情况下，Halle对本协议所承担的违约赔偿责任总额不超过1）0.1个以太币；或2）人民币500元，以较高的为准。</p>
                    <p class="agree_txt2 agree_margin1 fb">8. 您理解Halle Token仅作为用户管理数字代币、显示交易信息的工具，Halle不提供法律、税务或投资建议等服务。您应当自行向法律、税务、投资方面的专业人士寻求建议，且您在使用我们服务过程中所遭受的投资损失、数据损失等，Halle概不负责。</p>
                    <p class="agree_txt2 agree_margin1 fb">9. 您理解根据有关中国政策法规的要求，我们可能不时更改我们的用户准入标准，限定向某一特定群体提供服务的范围和方式等。</p>




                    <p class="agree_txt3 agree_margin">十、完整协议</p>
                    <p class="agree_txt2 agree_margin1 fb">1. 本协议由《Halle Token服务协议》、《Halle Token隐私政策》及Halle不时公布的各项规则组成。</p>
                    <p class="agree_txt2 agree_margin1 fb">2. 本协议部分内容被有管辖权的法院认定为违反或无效的，不因此影响其他内容的效力。</p>
                    <p class="agree_txt2 agree_margin1 fb">3. 本协议的任何译文版本仅为方便用户而提供，无意对本协议的条款进行修改。如果本协议的中文版本与非中文版本之间存在冲突，应以中文版本为准。</p>



                    <p class="agree_txt3 agree_margin">十一、知识产权保护</p>
                    <p class="agree_txt2 agree_margin1">1. Halle Token系Halle开发并拥有知识产权的应用程序。 Halle Token中显示的任何内容（包括本协议、公告、文章、视频、音频、图片、档案、资讯、资料、商标或标识）的知识产权归Halle或第三方权利人所有。用户仅可为持有和管理数字代币之目的使用Halle Token应用程序及其中的内容。未经Halle或第三方权利人的事先书面同意，任何人不得擅自使用、修改、反向编译、复制、公开传播、改变、散布、发行或公开发表上述应用程序及内容。</p>




                    <p class="agree_txt3 agree_margin">十二、法律适用与争议解决</p>
                    <p class="agree_txt2 agree_margin1">1. 本协议及其修订版之效力、解释、变更、执行与争议解决均适用中华人民共和国法律，如无相关法律规定，则应当适用国际商业惯例和（或）行业惯例。</p>
                    <p class="agree_txt2 agree_margin1">2. 若您和Halle之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，任何一方可提交Halle所在地有管辖权的人民法院管辖。</p>




                    <p class="agree_txt3 agree_margin">十三、 其他</p>
                    <p class="agree_txt2 agree_margin1">1. 如您是中华人民共和国以外用户，您需全面了解并遵守您所在司法辖区与使用Halle服务所有相关法律、法规及规则。</p>
                    <p class="agree_txt2 agree_margin1">2. 您在使用Halle服务过程中，如遇到任何问题，您可以通过在Halle Token提交反馈等方式联系我们。</p>
                    <p class="agree_txt2 agree_margin1">3. 您可以在Halle Token中查看本协议。 Halle鼓励您在每次访问Halle Token时都查阅Halle的服务协议。</p>
                    <p class="agree_txt2 agree_margin1">4. 本协议自2019年08月17日起适用。</p>
                    <p class="agree_txt2 agree_margin1">本协议未尽事宜，您需遵守Halle不时更新的公告及相关规则。</p>

                    <p class="agree_txt3 agree_margin" style="text-align: right;">Halle International Foundation LTD.</p>





                    <!--隐私协议-->
                    <p class="agree_txt1 agreement_padding fb" style="margin-top: 0.8rem">《Halle Token隐私政策》</p>
                    <p class="agree_txt2 agree_margin1 fb">最近更新于：2019年08月17日</p>
                    <p class="agree_txt2 agree_margin1 fb">尊敬的用户：</p>
                    <p class="agree_txt2 agree_margin1 fb">Halle INTERNATIONAL FOUNDATION.（以下简称“Halle”或“我们”）尊重并保护用户（以下简称“您”或“用户”）的隐私，您使用Halle Token时，Halle将按照本隐私政策（以下简称“本政策”）收集、使用您的个人信息。</p>
                    <p class="agree_txt2 agree_margin1 fb">Halle建议您在使用本产品（以下简称“Halle”）之前仔细阅读并理解本政策全部内容, 针对免责声明等条款在内的重要信息将以加粗的形式体现。本政策有关关键词定义与《Halle Token服务协议》保持一致。</p>
                    <p class="agree_txt2 agree_margin1 fb">本政策可由Halle在线随时更新，更新后的政策一旦公布即代替原来的政策，如果您不接受修改后的条款，请立即停止使用Halle Token，您继续使用Halle Token将被视为接受修改后的政策。经修改的政策一经在Halle Token上公布，立即自动生效。</p>
                    <p class="agree_txt2 agree_margin1 fb">您知悉本政策及其他有关规定适用于Halle Token及Halle Token上Halle所自主拥有的DApp。</p>


                    <p class="agree_txt3 agree_margin">一、 我们收集您的哪些信息</p>
                    <p class="agree_txt2 agree_margin1 fb">请您知悉，我们收集您的以下信息是出于满足您在Halle Token服务需要的目的，且我们十分重视对您隐私的保护。在我们收集您的信息时，将严格遵守“合法、正当、必要”的原则。且您知悉，若您不提供我们服务所需的相关信息，您在Halle Token的服务体验可能因此而受到影响。</p>
                    <p class="agree_txt2 agree_margin1">1. 我们将收集您的移动设备信息、操作记录、交易记录、钱包地址等个人信息。</p>
                    <p class="agree_txt2 agree_margin1">2. 为满足您的特定服务需求，我们将可能收集您的姓名、银行卡号、手机号码、邮件地址等信息。</p>
                    <p class="agree_txt2 agree_margin1 fb">3. 您知悉：您在Halle Token 上的钱包密码、私钥、助记词有些并不存储或同步至服务器。Halle不提供找回您的钱包密码、私钥、助记词的服务。</p>
                    <p class="agree_txt2 agree_margin1">4. 除上述内容之外，您知悉在您使用Halle Token特定功能时，我们将在收集您的个人信息前向您作出特别提示，要求向您收集更多的个人信息。如您选择不同意，则视为您放弃使用Halle Token该特定功能。</p>
                    <p class="agree_txt2 agree_margin1 fb">5. 当您跳转到第三方DApp后，第三方DApp会向您收集个人信息。Halle Token不持有第三方DApp向您收集的个人信息。</p>
                    <p class="agree_txt2 agree_margin1 fb">6. 在法律法规允许的范围内，Halle可能会在以下情形中收集并使用您的个人信息无需征得您的授权同意：</p>
                    <p class="agree_txt2 agree_margin1 fb">（1） 与国家安全、国防安全有关的；</p>
                    <p class="agree_txt2 agree_margin1 fb">（2） 与公共安全、公共卫生、重大公共利益有关的；</p>
                    <p class="agree_txt2 agree_margin1 fb">（3） 与犯罪侦查、起诉、审判和判决执行等有关的；</p>
                    <p class="agree_txt2 agree_margin1 fb">（4） 所收集的个人信息是您自行向社会公众公开的；</p>
                    <p class="agree_txt2 agree_margin1 fb">（5） 从合法公开披露的信息中收集您的个人信息，如合法的新闻报道，政府信息公开等渠道；</p>
                    <p class="agree_txt2 agree_margin1 fb">（6） 用于维护服务的安全和合规所必需的，例如发现、处理产品和服务的故障；</p>
                    <p class="agree_txt2 agree_margin1 fb">（7） 法律法规规定的其他情形。</p>
                    <p class="agree_txt2 agree_margin1">7. 我们收集信息的方式如下：</p>
                    <p class="agree_txt2 agree_margin1">（1） 您向我们提供信息。例如，您在“个人中心”页面中填写姓名、手机号码或银行卡号，或在反馈问题时提供邮件地址，或在使用我们的特定服务时，您额外向我们提供。</p>
                    <p class="agree_txt2 agree_margin1">（2） 我们在您使用Halle Token的过程中获取信息，包括您移动设备信息以及您对Halle Token的操作记录等信息；</p>
                    <p class="agree_txt2 agree_margin1">（3） 我们通过区块链系统，拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。</p>



                    <p class="agree_txt3 agree_margin">二、 我们如何使用您的信息</p>
                    <p class="agree_txt2 agree_margin1">1. 我们通过您移动设备的唯一序列号，确认您与您的钱包的对应关系。</p>
                    <p class="agree_txt2 agree_margin1">2. 我们将向您及时发送重要通知，如软件更新、服务协议及本政策条款的变更。</p>
                    <p class="agree_txt2 agree_margin1">3. 我们通过收集您公开的钱包地址和提供的移动设备信息来处理您向我们提交的反馈。</p>
                    <p class="agree_txt2 agree_margin1">4. 我们收集您的个人信息进行Halle内部审计、数据分析和研究等，以期不断提升我们的服务水平。</p>
                    <p class="agree_txt2 agree_margin1">5. 依照《Halle Token服务协议》及Halle其他有关规定，Halle将利用用户信息对用户的使用行为进行管理及处理。</p>
                    <p class="agree_txt2 agree_margin1">6. 法律法规规定及与监管机构配合的要求。</p>



                    <p class="agree_txt3 agree_margin">三、 您如何控制自己的信息</p>
                    <p class="agree_txt2 agree_margin1">您在Halle Token中拥有以下对您个人信息自主控制权：</p>
                    <p class="agree_txt2 agree_margin1">1. 您可以通过同步钱包的方式，将您的其他钱包导入Halle Token中Halle Token将向您显示导入钱包的信息。</p>
                    <p class="agree_txt2 agree_margin1">2. 您知悉您可以通过“资产”版块内容进行转账及收款等活动。</p>
                    <p class="agree_txt2 agree_margin1">3. 您知悉在Halle Token“我”的版块您可以自由选择进行如下操作：</p>
                    <p class="agree_txt2 agree_margin1">（1） 在“联系人”中，您可以随时查看并修改您的“联系人”；</p>
                    <p class="agree_txt2 agree_margin1">（2） 在“个人中心”中，您并不需要提供自己的姓名、手机号码、银行卡等信息，但当您使用特定服务时，您需要提供以上信息；</p>
                    <p class="agree_txt2 agree_margin1">（3） 在“意见反馈”中，您可以随时向我们提出您对Halle Token问题及改进建议，我们将非常乐意与您沟通并积极改进我们的服务。</p>
                    <p class="agree_txt2 agree_margin1">4. 您知悉当我们出于特定目的向您收集信息时，我们会提前给予您通知，您有权选择拒绝。但同时您知悉，当您选择拒绝提供有关信息时，即表示您放弃使用Halle Token的有关服务。</p>
                    <p class="agree_txt2 agree_margin1">5. 您知悉，您及我们对于您交易记录是否公开并没有控制权，因为基于区块链交易系统的开源属性，您的交易记录在整个区块链系统中公开透明。</p>
                    <p class="agree_txt2 agree_margin1">6. 您知悉当您使用Halle Token的功能跳转至第三方DApp之后，我们的<span class="fb">《Halle Token服务协议》、《Halle Token隐私政策》</span>将不再适用，针对您在第三方DApp上对您个人信息的控制权问题，我们建议您在使用第三方DApp之前详细阅读并了解其隐私规则和有关用户服务协议等内容。</p>
                    <p class="agree_txt2 agree_margin1">7. 您知悉我们可以根据本政策第一条第6款的要求收集您的信息而无需获得您的授权同意。</p>



                    <p class="agree_txt3 agree_margin">四、 我们可能分享或传输您的信息</p>
                    <p class="agree_txt2 agree_margin1">1. Halle在中华人民共和国境内收集和产生的用户个人信息将存储在中华人民共和国境内的服务器上。若Halle确需向境外传输您的个人信息，将在事前获得您的授权，且按照有关法律法规政策的要求进行跨境数据传输，并对您的个人信息履行保密义务。</p>
                    <p class="agree_txt2 agree_margin1 fb">2. 未经您事先同意，Halle不会将您的个人信息向任何第三方共享或转让，但以下情况除外：</p>
                    <p class="agree_txt2 agree_margin1 fb">（1） 事先获得您明确的同意或授权；</p>
                    <p class="agree_txt2 agree_margin1 fb">（2） 所收集的个人信息是您自行向社会公众公开的；</p>
                    <p class="agree_txt2 agree_margin1 fb">（3） 所收集的个人信息系从合法公开披露的信息中收集，如合法的新闻报道，政府信息公开等渠道；</p>
                    <p class="agree_txt2 agree_margin1 fb">（4） 与Halle的关联方共享，我们只会共享必要的用户信息，且受本隐私条款中所声明的目的的约束；</p>
                    <p class="agree_txt2 agree_margin1 fb">（5） 根据适用的法律法规、法律程序的要求、行政机关或司法机关的要求进行提供；</p>
                    <p class="agree_txt2 agree_margin1 fb">（6） 在涉及合并、收购时，如涉及到个人信息转让，Halle将要求个人信息接收方继续接受本政策的约束。</p>



                    <p class="agree_txt3 agree_margin">五、 我们如何保护您的信息</p>
                    <p class="agree_txt2 agree_margin1">1. 如Halle停止运营，Halle将及时停止继续收集您个人信息的活动，将停止运营的通知公告在Halle Token上，并对所持有的您的个人信息在合理期限内进行删除或匿名化处理。</p>
                    <p class="agree_txt2 agree_margin1">2. 为了保护您的个人信息，Halle将采取数据安全技术措施，提升内部合规水平，增加内部员工信息安全培训，并对相关数据设置安全访问权限等方式安全保护您的隐私信息。</p>
                    <p class="agree_txt2 agree_margin1">3. 我们将“关于我们”版块更新钱包使用及信息保护的资料，供您参考。</p>


                    <p class="agree_txt3 agree_margin">六、 对未成年人的保护</p>
                    <p class="agree_txt2 agree_margin1">我们对保护未满18周岁的未成年人做出如下特别约定：</p>
                    <p class="agree_txt2 agree_margin1">1. 未成年人应当在父母或监护人指导下使用Halle相关服务。</p>
                    <p class="agree_txt2 agree_margin1">2. 我们建议未成年人的父母和监护人应当在阅读本政策、《Halle Token服务协议》及我们的其他有关规则的前提下，指导未成年人使用Halle Token。</p>
                    <p class="agree_txt2 agree_margin1">3. Halle Token将根据国家相关法律法规的规定保护未成年人的个人信息的保密性及安全性。</p>


                    <p class="agree_txt3 agree_margin">七、 免责声明</p>
                    <p class="agree_txt2 agree_margin1">1. 请您注意，您通过Halle Token接入第三方DApp后，将适用该第三方DApp发布的隐私政策。该第三方DApp对您个人信息的收集和使用不为Halle所控制，也不受本政策的约束。Halle无法保证第三方DApp一定会按照Halle的要求采取个人信息保护措施。</p>
                    <p class="agree_txt2 agree_margin1">2. 您应审慎选择和使用第三方DApp，并妥善保护好您的个人信息，Halle对其他第三方DApp的隐私保护不负任何责任。</p>
                    <p class="agree_txt2 agree_margin1">3. Halle将在现有技术水平条件下尽可能采取合理的安全措施来保护您的个人信息，以避免信息的泄露、篡改或者毁损。Halle系利用无线方式传输数据，因此，Halle无法确保通过无线网络传输数据的隐私性和安全性。</p>


                    <p class="agree_txt3 agree_margin">八、 其他</p>
                    <p class="agree_txt2 agree_margin1">1. 如您是中华人民共和国以外的用户，您需全面了解并遵守您所在司法辖区与使用Halle服务所有相关法律、法规及规则。</p>
                    <p class="agree_txt2 agree_margin1">2. 您在使用Halle服务过程中，如遇到任何有关个人信息使用的问题，您可以通过在Halle Token提交反馈等方式联系我们。</p>
                    <p class="agree_txt2 agree_margin1">3. 您可以在Halle Token中查看本政策及Halle其他服务规则。我们鼓励您在每次访问Halle Token时都查阅Halle的服务协议及隐私政策。</p>
                    <p class="agree_txt2 agree_margin1">4. 本政策的任何译文版本仅为方便用户而提供，无意对本政策的条款进行修改。如果本政策的中文版本与非中文版本之间存在冲突，应以中文版本为准。</p>
                    <p class="agree_txt2 agree_margin1 fb">5. 本政策自2019年08月17日起适用。</p>
                    <p class="agree_txt3 agree_margin">本政策未尽事宜，您需遵守Halle不时更新的公告及相关规则。</p>


                    <p class="agree_txt3 agree_margin" style="text-align: right;">Halle International Foundation LTD.</p>



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

                    <!--隐私条款-->

                    <p style="font-weight: bold;margin-top: 0.5rem">《Halle Token Privacy Policy》
                    </p>
                    <p style="font-weight: bold;">Updated recently: 15 August 2019
                    </p>
                    <p style="font-weight: bold;">Respected Users:
                    </p>
                    <p style="font-weight: bold;">Halle INTERNATIONAL FOUNDATION. (hereinafter referred to as "Halle" or "We") respects and protects the privacy of users (hereinafter referred to as "you" or "users"). When you use Halle Token, Halle will collect and use your personal information in accordance with this privacy policy (hereinafter referred to as "this policy").
                    </p>
                    <p style="font-weight: bold;">Halle recommends that you carefully read and understand the whole content of this policy before using this product (hereinafter referred to as "Halle"). Important information, such as disclaimer clauses, will be reflected in a bolder form.The definition of key words in this policy is consistent with the Halle Token Service Agreement.
                    </p>
                    <p style="font-weight: bold;">This policy can be updated by Halle Online at any time. Once the updated policy is published, it will replace the original policy. If you do not accept the revised clause, please stop using Halle Token immediately. If you continue using Halle Token, you will be deemed to accept the revised policy.Once the revised policy is published in Halle Token, it will take effect automatically.
                    </p>
                    <p style="font-weight: bold;">You are aware that this policy and other relevant provisions apply to DApp owned by Halle Token and Halle Token.
                    </p>

                    <p style="font-weight: bold;">One. What information do we collect from you
                    </p>
                    <p style="font-weight: bold;">Please be informed that we collect the following information for your service needs in Halle Token, and we attach great importance to the protection of your privacy.When we collect your information, we will strictly abide by the principle of "legitimacy, legitimacy and necessity".And you know that your service experience in Halle Token may be affected if you do not provide the relevant information required for our service.
                    </p>
                    <p>1. We will collect personal information about your mobile devices, operation records, transaction records, wallet addresses and so on.
                    </p>
                    <p>2. To meet your specific service needs, we will probably collect your name, bank card number, mobile phone number, e-mail address and other information.
                    </p>
                    <p style="font-weight: bold;">3. You know: Some of your wallet passwords, private keys and mnemonics on Halle Token are not stored or synchronized to the server.Halle does not provide services to retrieve your wallet password, private key, mnemonic.
                    </p>
                    <p>4. In addition to the above, you know that when you use Halle Tokens specific functions, we will give you special tips before collecting your personal information, asking you to collect more personal information.If you choose not to agree, you will be considered as giving up Halle Token.
                    </p>
                    <p style="font-weight: bold;">5. When you jump to a third-party DApp, the third-party DApp will collect personal information from you.Halle Token does not hold personal information collected by third party DApp.
                    </p>
                    <p style="font-weight: bold;">6. To the extent permitted by law and regulations, Halle may collect and use your personal information in the following situations without your authorized consent:
                    </p>
                    <p style="font-weight: bold;">(1) Relating to national security and national defense security;
                    </p>
                    <p style="font-weight: bold;">(2) Relating to public safety, public health and major public interests;
                    </p>
                    <p style="font-weight: bold;">(3) Relevant to criminal investigation, prosecution, trial and execution of judgments;
                    </p>
                    <p style="font-weight: bold;">(4) The personal information collected is open to the public on your own;
                    </p>
                    <p style="font-weight: bold;">(5) Collect your personal information from legitimately disclosed information, such as legitimate news reports, government information disclosure and other channels;
                    </p>
                    <p style="font-weight: bold;">(6) It is necessary to maintain the safety and compliance of services, such as detecting and handling malfunctions of products and services;
                    </p>
                    <p style="font-weight: bold;">(7) Other circumstances prescribed by laws and regulations.
                    </p>

                    <p>7. We collect information in the following ways:
                    </p>
                    <p>(1) You provide us with information.For example, you fill in your name, cell phone number or bank card number on the "Personal Center" page, or provide an email address when you respond to questions, or you give us extra information when you use our specific services.
                    </p>
                    <p>(2) We get information in the process of using Halle Token, including your mobile device information and your operation record of Halle Token.
                    </p>
                    <p>(3) We copy all or part of your transaction records through the block chain system.However, the transaction records shall be based on the records of the block chain system.
                    </p>

                    <p style="font-weight: bold;">Two. How do we use your information
                    </p>
                    <p>1. We confirm your correspondence with your wallet through the unique serial number of your mobile device.
                    </p>
                    <p>2. We will send you important notifications in time, such as software updates, service agreements and changes in the terms of this policy.
                    </p>
                    <p>3. We process your feedback to us by collecting your public wallet address and mobile device information.
                    </p>
                    <p>4. We collect your personal information for Halle internal audit, data analysis and research, in order to continuously improve our service level.
                    </p>
                    <p>5. According to the Halle Token Service Agreement and other relevant Halle regulations, Halle will use user information to manage and process usersusage behavior.
                    </p>
                    <p>6. Laws and regulations and requirements for cooperation with regulatory bodies.
                    </p>

                    <p style="font-weight: bold;">Three. How do you control your information
                    </p>
                    <p>You have the following autonomous control over your personal information in Halle Token:
                    </p>
                    <p>1. You can import your other wallets into Halle Token by synchronizing your wallet. Halle Token will show you the information about the imported wallet.
                    </p>
                    <p>2. You know that you can transfer and collect money through the "Assets" section.
                    </p>
                    <p>3. You know that in the Halle Token "I" section, you are free to choose the following operations:
                    </p>
                    <p>(1) In Contacts, you can view and modify your Contacts at any time.
                    </p>
                    <p>(2) In the Personal Center, you do not need to provide your name, mobile phone number, bank card and other information, but when you use a specific service, you need to provide the above information;
                    </p>
                    <p>(3) In the "Feedback on Opinions", you can always give us your suggestions on Halle Token and its improvement. We will be very happy to communicate with you and actively improve our service.
                    </p>
                    <p>4. You know that when we collect information from you for specific purposes, we will give you advance notice and you have the right to refuse.But at the same time, you know that when you choose to refuse to provide relevant information, it means that you give up using Halle Tokens related services.
                    </p>
                    <p>5. You know that you and we have no control over whether your trading records are public or not, because based on the open source nature of the block chain trading system, your trading records are open and transparent throughout the block chain system.
                    </p>
                    <p>6. You know that our <span style="font-weight: bold;">《Halle Token Service Agreement 》</span>、 <span style="font-weight: bold;">《Halle Token Privacy Policy》</span> will no longer apply when you use Halle Tokens function to jump to the third party DApp. In view of your control over your personal information in the third party DApp, we recommend that you read and understand its privacy rules and relevant user service agreements in detail before using the third party DApp.
                    </p>
                    <p>7. You are aware that we can collect your information in accordance with the requirements of Article 1, paragraph 6 of this Policy without your authorized consent.
                    </p>

                    <p style="font-weight: bold;">Four. We may share or transmit your information.
                    </p>
                    <p>1. Personal information collected and generated by Halle in the Peoples Republic of China will be stored on servers in the Peoples Republic of China.If Halle really needs to transmit your personal information overseas, it will obtain your authorization beforehand, and carry out cross-border data transmission in accordance with the requirements of relevant laws, regulations and policies, and fulfill the obligation of confidentiality of your personal information.
                    </p>
                    <p style="font-weight: bold;">2. Halle will not share or transfer your personal information to any third party without your prior consent, except in the following cases:
                    </p>
                    <p style="font-weight: bold;">(1) Obtain your explicit consent or authorization in advance;
                    </p>
                    <p style="font-weight: bold;">(2) The personal information collected is open to the public on your own;
                    </p>
                    <p style="font-weight: bold;">(3) Personal information collected is collected from lawfully disclosed information, such as lawful news reports, government information disclosure and other channels;
                    </p>
                    <p style="font-weight: bold;">(4) To share with Halles affiliates, we will only share the necessary user information, subject to the purposes stated in this privacy clause;
                    </p>
                    <p style="font-weight: bold;">(5) Provision shall be made in accordance with applicable laws and regulations, requirements of legal procedures and requirements of administrative or judicial organs;
                    </p>
                    <p style="font-weight: bold;">(6) In the case of mergers and acquisitions, if personal information transfer is involved, Halle will require the recipient of personal information to continue to accept the constraints of this policy.
                    </p>

                    <p style="font-weight: bold;">Five. How do we protect your information
                    </p>
                    <p>1. If Halle ceases to operate, Halle will stop collecting your personal information in time, announce the suspension on Halle Token, and delete or anonymize your personal information within a reasonable period of time.
                    </p>
                    <p>2. In order to protect your personal information, Halle will adopt data security technology measures to enhance internal compliance level, increase internal staff information security training, and set security access rights to relevant data to protect your privacy information.
                    </p>
                    <p>3. We will update our wallet usage and information protection for your reference.
                    </p>

                    <p style="font-weight: bold;">Six. Protection of minors
                    </p>
                    <p>We have made the following special agreements on the protection of minors under the age of 18:
                    </p>
                    <p>1. Minors should use Halle-related services under the guidance of their parents or guardians.
                    </p>
                    <p>2. We recommend that parents and guardians of minors should guide minors to use Halle Token on the premise of reading this policy, the Halle Token Service Agreement and other relevant rules.
                    </p>
                    <p>3. Halle Token will protect the confidentiality and security of minorspersonal information in accordance with relevant national laws and regulations.
                    </p>

                    <p style="font-weight: bold;">Seven. Disclaimer
                    </p>
                    <p>1. Please note that after you access third party DApp through Halle Token, the privacy policy issued by the third party DApp will apply.The collection and use of your personal information by the third party DApp is not controlled by Halle, nor is it subject to this policy.Halle cant guarantee that third party DApp will take personal information protection measures according to Halles requirements.
                    </p>
                    <p>2. You should carefully choose and use third party DApp, and properly protect your personal information. Halle is not responsible for the privacy protection of other third party DApp.
                    </p>
                    <p>3. Halle will take reasonable security measures to protect your personal information as far as possible under the current technological level, so as to avoid information leakage, tampering or damage.Halle system transmits data by wireless mode, so Halle can not ensure the privacy and security of data transmission through wireless network.
                    </p>

                    <p style="font-weight: bold;">Eight. OTHER</p>
                    <p>1. If you are a user outside the Peoples Republic of China, you need to fully understand and abide by all relevant laws, regulations and rules concerning the use of Halle services in your jurisdiction.
                    </p>
                    <p>2. In the process of using Halle service, if you encounter any problems related to the use of personal information, you can contact us by submitting feedback from Halle Token, etc.
                    </p>
                    <p>3. You can view this policy and other Halle service rules in Halle Token.We encourage you to consult Halles service protocols and privacy policies every time you visit Halle Token.
                    </p>
                    <p>4. Any translated version of this policy is provided only for the convenience of users, and there is no intention to modify the terms of this policy.If there is a conflict between the Chinese version and the non-Chinese version of this policy, the Chinese version shall prevail.
                    </p>
                    <p style="font-weight: bold;">5. This policy has been applied since 15 August 2019.
                    </p>
                    <p style="font-weight: bold;">This policy is not exhaustive. You should abide by Halles announcements and relevant rules which are updated from time to time.
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
        name: "UsingAgreement",
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