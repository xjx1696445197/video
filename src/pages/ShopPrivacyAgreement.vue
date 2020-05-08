<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('aboutUs.aboutUs_policyTitle')}}</p>
        </div>
        <div class="wrapper">
            <div class="agree_wrapper">
                <div class="content" v-if="curLang">

                    <!--隐私协议-->
                    <p class="agree_txt1 agreement_padding fb">HALLE MALL隐私权政策</p>
                    <p class="agree_txt3 agree_margin">引言</p>



                    <p class="agree_txt2 agree_margin1">HALLE MALL运营由HALLE INTERNATIONAL FOUNDATION LTD.（以下简称“本公司”或“基金会”）非常重视用户个人信息及隐私权的保护，因此我们制订了涵盖如何收集、存储、使用、共享和保护用户信息的隐私政策。我们希望通过本隐私保护政策（以下亦称“本隐私政策”）向您清晰地介绍我们对您个人信息的处理方式，本隐私政策与您使用本公司的产品和/或服务息息相关，请您在使用本公司所有产品和/或服务前，完整阅读并透彻理解本隐私政策，并相应做出您认为适当的选择。 
                        <span class="agree_txt3">如果您不同意本隐私政策的任何内容，您应立即停止使用基金会的产品和/或服务。当您使用基金会任一产品和/或服务时，则表示您同意且完全理解本隐私政策的全部内容。</span></p>
                    <p class="agree_txt2 agree_margin1">考虑到互联网信息服务性质和内容的不断发展和演进，您同意基金会有权对本协议条款进行修改，并将修改后的协议以在线公布、通过您注册时提供的通讯工具发送或者其他任何合理方式通知您。您同意承担及时查阅最新协议的义务。在该等修改发生后，若您不同意该最新协议，您应放弃注册、停止使用或主动取消基金会提供的服务。您继续使用基金会提供的服务的行为将被视为对该最新协议的全部内容予以接受和同意。</p>



                    <p class="agree_txt3 agree_margin">一、 个人资料的收集</p>

                    <p class="agree_txt2 agree_margin1">您一经使用本公司之购物平台，或者透过网上、电话、亲身于本公司进行以下行为时:</p>
                    <p class="agree_txt2 agree_margin1">1、申请成为本公司任何形式之会员 ;</p>
                    <p class="agree_txt2 agree_margin1">2、登记参与本公司举办之任何活动、比赛或抽奖 ; </p>
                    <p class="agree_txt2 agree_margin1">3、使用本公司任何网上互动平台 ;</p>
                    <p class="agree_txt2 agree_margin1">即表示您已同意本政策项下所有条款，并同意本公司按照本政策相关规定收集、使用、披露及保留您的个人资料。而您在进行上述行为时可能会被要求提供个人资料 ( 包括但不限于姓名、性别、年龄、出生月日、住址、电话号码、传真号码及电邮地址等 ;  [ 烦请经办部门审阅实际注册会员时，所填写的资料是否只有这几项，若有遗漏，请添加填写 ] 统称“个人资料" )，
                    <span class="agree_txt3">本公司谨此强调，您并无义务向本公司提供任何个人资料，有关个人资料乃是您自愿提供 ; 若未能提供有关个人资料，本公司或无法为您提供有关服务或处理有关申请。</span></p>




                    <p class="agree_txt3 agree_margin">二、 本公司如何使用Cookie和同类技术</p>
                    <p class="agree_txt2 agree_margin1">为确保网站正常运转，我们会在您的计算机或移动设备上存储名为Cookie的小数据文件。Cookie 通常包含标识符、站点名称以及一些号码和字符。借助于Cookie ,网站能够存储您的偏好商品等数据。我们不会将Cookie用于本政策所述目的之外的任何用途。您可根据自己的偏好管理或删除Cookie。您可以清除计算机上保存的所有Cookie ,大部分网络浏览器都设有阻止Cookie的功能。但如果您这么做，则需要在每一次访问我们的网站时亲自更改用户设置。</p>
                    <p class="agree_txt2 agree_margin1">除Cookie外，我们还会在网站上使用网站信标和像素标签等其他同类技术。例如，我们向您发送的电子邮件可能含有链接至我们网站内容的点击URL。如果您点击该链接，我们则会跟踪此次点击，帮助我们了解您的产品或服务偏好并改善客户服务。网站信标通常是一种嵌入到网站或电子邮件中的透明图像。借助于电子邮件中的像素标签，我们能够获知电子邮件是否被打开。如果您不希望自己的活动以这种方式被追踪，则可以随时从我们的寄信名单中退订。</p>




                    <p class="agree_txt3 agree_margin">三、 个人资料的使用</p>

                    <p class="agree_txt2 agree_margin1">您所提供的个人资料可能将会供本公司作以下用途 :</p>
                    <p class="agree_txt2 agree_margin1">1、确认及核实您的身份 ;</p>
                    <p class="agree_txt2 agree_margin1">2、管理您的会员账户 ;</p>
                    <p class="agree_txt2 agree_margin1">3、处理您的查询、投诉、申请及产品或服务订单 ;</p>
                    <p class="agree_txt2 agree_margin1">4、公布由本公司举办的任何活动、比赛或抽奖的得奖者名单 ;</p>
                    <p class="agree_txt2 agree_margin1">5、作调查、统计及研究，制定营运政策、市场推广及宣传策略 ;</p>
                    <p class="agree_txt2 agree_margin1">6、向您提供相关售后服务；</p>
                    <p class="agree_txt2 agree_margin1">7、向您提供宣传推广、折扣优惠及产品服务的信息 ;</p>
                    <p class="agree_txt2 agree_margin1">8、向您发送电子心意贺卡及相关素材。</p>
                    <p class="agree_txt2 agree_margin1">如您欲拒绝接收有关宣传推广、折扣优惠及产品服务的信息，请电邮至本公司联络。</p>





                    <p class="agree_txt3 agree_margin">四、 个人资料的披露</p>
                    <p class="agree_txt2 agree_margin1">我们不会将您的个人信息转移或披露给任何非关联的第三方，除非:</p>
                    <p class="agree_txt2 agree_margin1">1、相关法律法规、法律程序、政府机关的强制性要求 ;</p>
                    <p class="agree_txt2 agree_margin1">2、为完成合并、分立、收购或资产转让而转移 ;</p>
                    <p class="agree_txt2 agree_margin1">3、事先获得您的授权 ;</p>
                    <p class="agree_txt2 agree_margin1">4、您使用共享功能 ;</p>
                    <p class="agree_txt2 agree_margin1">5、以学术研究或公共利益为目的 ;</p>
                    <p class="agree_txt2 agree_margin1">6、在法律法规和政策允许的范围内，为提升用户体验和提供个性化的推广服务 ;</p>
                    <p class="agree_txt2 agree_margin1">7、我们认为必要且不违反法律强制性规定的其他情形。</p>
                    <p class="agree_txt2 agree_margin1">除非经过您的同意，否则我们不会向任何人提供您的敏感个人信息。</p>


                    <p class="agree_txt3 agree_margin">五、 个人资料的保留及安全</p>
                    <p class="agree_txt2 agree_margin1">当本公司收集您的个人资料后，将妥善地存入电子系统中，而本公司在监控设备、电子系统及人员管理方面已实行适当措施，以保障您的个人资料安全。</p>
                    <p class="agree_txt2 agree_margin1">本公司亦不会保留您的个人资料超过必需的时间，并会遵守法律法规及一切有关保存个人资料的法例及监管规定。</p>



                    <p class="agree_txt3 agree_margin">六、 个人资料的查阅或更正</p>
                    <p class="agree_txt2 agree_margin1">您如欲查阅或更正已向本公司提供的个人资料，请电邮至本公司联络。</p>
                    <p class="agree_txt2 agree_margin1">本公司将不会承担您因未能及时联络本公司更正有关个人资料而引起或与之有关的任何申索、责任、损失、损害赔偿、支出或费用等。</p>




                    <p class="agree_txt3 agree_margin">七、 第三方网站或平台连结</p>
                    <p class="agree_txt2 agree_margin1">本平台所提及的或本平台同意透过连结方式经本平台进入的任何第三方网站或平台，均有不同的个人资料私隐政策。当您进入任何第三方网站或平台时，应事先阅读该网站或平台的个人资料私隐政策。本公司将不会对您向任何第三方网站或平台披露的个人资料进行监控。</p>



                    <p class="agree_txt3 agree_margin">八、 本政策不会限制您在有关法律法规规定下所享有的权利</p>
                    <p class="agree_txt2 agree_margin1">本公司可能适时会对本隐私权政策进行调整或变更，本隐私权政策的任何更新将以标注更新时间的方式公布在我们网站上，除法律法规或监管规定另有强制性规定外，经调整或变更的内容一经通知或公布后的7日后生效。如您在隐私权政策调整或变更后继续使用本公司提供的任一服务或访问本公司相关平台或网站的，本公司相信这代表您已充分阅读、理解并接受修改后的隐私权政策并受其约束。</p>



                    <p class="agree_txt3 agree_margin" style="text-align: right;"> 2019年12月12日</p>



                </div>

                <div class="content" v-if="!curLang"
                     :class="[curLang ? '' : 'active']"
                >

                    <!--隐私协议-->
                    <p style="font-weight: bold;">《Halle Token Privacy Policy》
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
        name: "PrivacyAgreement",
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
