<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('aboutUs.aboutUs_policyTitle')}}</p>
        </div>
        <div class="wrapper">
            <div class="agree_wrapper">
                <div class="content" v-if="curLang">
                    <p class="agree_txt1 agreement_padding fb">
                        《CHMV隐私政策》
                    </p>
                    <p class="agree_txt1 agreement_padding fb" style="font-size: .26rem">
                        最近更新于：2020年02月28日

                    </p>
                    <p class="agree_txt1 agreement_padding fb" style="font-size: .26rem">
                        尊敬的用户：
                    </p>
                    <p class="agree_txt3" style="font-weight: normal;">

                        CHMV（以下简称“CHMV”或“我们”）尊重并保护用户（以下简称“您”或“用户”）的隐私，您使用CHMV时，CHMV将按照本隐私政策（以下简称“本政策”）收集、使用您的个人信息。
                        CHMV建议您在使用本产品（以下简称“CHMV”）之前仔细阅读并理解本政策全部内容, 针对免责声明等条款在内的重要信息将以加粗的形式体现。本政策有关关键词定义与《CHMV服务协议》保持一致。
                        本政策可由CHMV在线随时更新，更新后的政策一旦公布即代替原来的政策，如果您不接受修改后的条款，请立即停止使用CHMV，您继续使用CHMV将被视为接受修改后的政策。经修改的政策一经在CHMV上公布，立即自动生效。
                        您知悉本政策及其他有关规定适用于CHMV及CHMV上CHMV所自主拥有的DApp。
                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        一、 我们收集您的哪些信息

                    </p>

                    <p class="agree_txt3" style="font-weight: normal;">
                        <p>请您知悉，我们收集您的以下信息是出于满足您在CHMV服务需要的目的，且我们十分重视对您隐私的保护。在我们收集您的信息时，将严格遵守“合法、正当、必要”的原则。且您知悉，若您不提供我们服务所需的相关信息，您在CHMV的服务体验可能因此而受到影响。</p>
                    <p>1. 我们将收集您的移动设备信息、操作记录、交易记录、钱包地址等个人信息。</p>
                    <p>2. 为满足您的特定服务需求，我们将可能收集您的姓名、银行卡号、手机号码、邮件地址等信息。</p>
                    <p>3. 除上述内容之外，您知悉在您使用CHMV特定功能时，我们将在收集您的个人信息前向您作出特别提示，要求向您收集更多的个人信息。如您选择不同意，则视为您放弃使用CHMV该特定功能。</p>
                    <p>4. 当您跳转到第三方DApp后，第三方DApp会向您收集个人信息。CHMV不持有第三方DApp向您收集的个人信息。</p>
                    <p>5. 在法律法规允许的范围内，CHMV可能会在以下情形中收集并使用您的个人信息无需征得您的授权同意：</p>
                    <p>（1） 与国家安全、国防安全有关的；</p>
                    <p>（2） 与公共安全、公共卫生、重大公共利益有关的；</p>
                    <p>（3） 与犯罪侦查、起诉、审判和判决执行等有关的；</p>
                    <p>（4） 所收集的个人信息是您自行向社会公众公开的；</p>
                    <p>（5） 从合法公开披露的信息中收集您的个人信息，如合法的新闻报道，政府信息公开等渠道；</p>
                    <p>（6） 用于维护服务的安全和合规所必需的，例如发现、处理产品和服务的故障；</p>
                    <p>（7） 法律法规规定的其他情形。</p>
                    <p>6. 我们收集信息的方式如下：</p>
                    <p>（1） 您向我们提供信息。例如，您在“个人中心”页面中填写姓名、手机号码或银行卡号，或在反馈问题时提供邮件地址，或在使用我们的特定服务时，您额外向我们提供。</p>
                    <p>（2） 我们在您使用CHMV的过程中获取信息，包括您移动设备信息以及您对CHMV的操作记录等信息；</p>
                    <p>（3） 我们通过区块链系统，拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。</p>

                </p>
                    <p class="agree_txt1 agreement_padding fb">

                        二、 我们如何使用您的信息

                    </p>
                    <p class="agree_txt3 " style="font-weight: normal; ">
                        <p>1. 我们通过您移动设备的唯一序列号，确认您与您的钱包的对应关系。</p>
                    <p>2. 我们将向您及时发送重要通知，如软件更新、服务协议及本政策条款的变更。</p>
                    <p>4. 我们通过收集您公开的钱包地址和提供的移动设备信息来处理您向我们提交的反馈。</p>
                    <p>5. 我们收集您的个人信息进行CHMV内部审计、数据分析和研究等，以期不断提升我们的服务水平。</p>
                    <p>6. 依照《CHMV服务协议》及CHMV其他有关规定，CHMV将利用用户信息对用户的使用行为进行管理及处理。</p>
                    <p>7. 法律法规规定及与监管机构配合的要求。</p>
                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        三、 您如何控制自己的信息

                    </p>
                    <p class="agree_txt3 " style="font-weight: normal; ">
                    <p>您在CHMV中拥有以下对您个人信息自主控制权：</p>
                    <p>1. 您可以通过同步钱包的方式，将您的其他钱包导入CHMV中CHMV将向您显示导入钱包的信息。</p>
                    <p>2. 您知悉您可以通过“资产”版块内容进行转账及收款等活动。</p>
                    <p>3. 您知悉在CHMV“我”的版块您可以自由选择进行如下操作：</p>
                    <p>（1） 在“个人中心”中，您并不需要提供自己的姓名、手机号码、银行卡等信息，但当您使用特定服务时，您需要提供以上信息；</p>
                    <p>（2） 在“意见反馈”中，您可以随时向我们提出您对CHMV问题及改进建议，我们将非常乐意与您沟通并积极改进我们的服务</p>。
                    <p>4. 您知悉当我们出于特定目的向您收集信息时，我们会提前给予您通知，您有权选择拒绝。但同时您知悉，当您选择拒绝提供有关信息时，即表示您放弃使用CHMV的有关服务。</p>
                    <p>5. 您知悉，您及我们对于您交易记录是否公开并没有控制权，因为基于区块链交易系统的开源属性，您的交易记录在整个区块链系统中公开透明。</p>
                    <p>6. 您知悉当您使用CHMV的功能跳转至第三方DApp之后，我们的《CHMV服务协议》、《CHMV隐私政策》将不再适用，针对您在第三方DApp上对您个人信息的控制权问题，我们建议您在使用第三方DApp之前详细阅读并了解其隐私规则和有关用户服务协议等内容。</p>
                    <p>7. 您知悉我们可以根据本政策第一条第6款的要求收集您的信息而无需获得您的授权同意。</p>
                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        四、 我们可能分享或传输您的信息

                    </p>
                    <p class="agree_txt3 " style="font-weight: normal; ">
                    <p>1. CHMV在中华人民共和国境内收集和产生的用户个人信息将存储在中华人民共和国境内的服务器上。若CHMV确需向境外传输您的个人信息，将在事前获得您的授权，且按照有关法律法规政策的要求进行跨境数据传输，并对您的个人信息履行保密义务。</p>
                    <p>2. 未经您事先同意，CHMV不会将您的个人信息向任何第三方共享或转让，但以下情况除外：</p>
                    <p>（1） 事先获得您明确的同意或授权；</p>
                    <p>（2） 所收集的个人信息是您自行向社会公众公开的；</p>
                    <p>（3） 所收集的个人信息系从合法公开披露的信息中收集，如合法的新闻报道，政府信息公开等渠道；</p>
                    <p>（4） 与CHMV的关联方共享，我们只会共享必要的用户信息，且受本隐私条款中所声明的目的的约束；</p>
                    <p>（5） 根据适用的法律法规、法律程序的要求、行政机关或司法机关的要求进行提供；</p>
                    <p>（6） 在涉及合并、收购时，如涉及到个人信息转让，CHMV将要求个人信息接收方继续接受本政策的约束。</p>
                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        五、 我们如何保护您的信息

                    </p>
                    <p class="agree_txt3 " style="font-weight: normal; ">
                    <p>1. 如CHMV停止运营，CHMV将及时停止继续收集您个人信息的活动，将停止运营的通知公告在CHMV上，并对所持有的您的个人信息在合理期限内进行删除或匿名化处理。</p>
                    <p>2. 为了保护您的个人信息，CHMV将采取数据安全技术措施，提升内部合规水平，增加内部员工信息安全培训，并对相关数据设置安全访问权限等方式安全保护您的隐私信息。</p>
                    <p>3. 我们将关于“我们”版块更新钱包使用及信息保护的资料，供您参考。</p>
                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        六、 对未成年人的保护

                    </p>
                    <p class="agree_txt3 " style="font-weight: normal; ">
                        <P>我们对保护未满18周岁的未成年人做出如下特别约定：</P>
                    <P>1. 未成年人应当在父母或监护人指导下使用CHMV相关服务。</P>
                    <P>2. 我们建议未成年人的父母和监护人应当在阅读本政策、《CHMV服务协议》及我们的其他有关规则的前提下，指导未成年人使用CHMV。</P>
                    <P>3. CHMV将根据国家相关法律法规的规定保护未成年人的个人信息的保密性及安全性。</P>
                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        七、 免责声明

                    </p>
                    <p class="agree_txt3 " style="font-weight: normal; ">
                    <p>1. 请您注意，您通过CHMV接入第三方DApp后，将适用该第三方DApp发布的隐私政策。该第三方DApp对您个人信息的收集和使用不为CHMV所控制，也不受本政策的约束。CHMV无法保证第三方DApp一定会按照CHMV的要求采取个人信息保护措施。</p>
                    <p>2. 您应审慎选择和使用第三方DApp，并妥善保护好您的个人信息，CHMV对其他第三方DApp的隐私保护不负任何责任。</p>
                    <p>3. CHMV将在现有技术水平条件下尽可能采取合理的安全措施来保护您的个人信息，以避免信息的泄露、篡改或者毁损。CHMV系利用无线方式传输数据，因此，CHMV无法确保通过无线网络传输数据的隐私性和安全性。</p>

                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        八、 其他

                    </p>
                    <p class="agree_txt3 " style="font-weight: normal; ">
                    <p>1. 如您是中华人民共和国以外的用户，您需全面了解并遵守您所在司法辖区与使用CHMV服务所有相关法律、法规及规则。</p>
                    <p>2. 您在使用CHMV服务过程中，如遇到任何有关个人信息使用的问题，您可以通过在CHMV提交反馈等方式联系我们。</p>
                    <p>3. 您可以在CHMV中查看本政策及CHMV其他服务规则。我们鼓励您在每次访问CHMV时都查阅CHMV的服务协议及隐私政策。</p>
                    <p>4. 本政策的任何译文版本仅为方便用户而提供，无意对本政策的条款进行修改。如果本政策的中文版本与非中文版本之间存在冲突，应以中文版本为准。</p>
                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        5. 本政策自2020年02月28日起适用。

                    </p>
                    <p class="agree_txt1 agreement_padding fb">

                        本政策未尽事宜，您需遵守CHMV不时更新的公告及相关规则。

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
