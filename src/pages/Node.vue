<template>
    <div class="page">
        <div class="HEADER">
            <div class="HEADER_BACK" @click="this.$back"></div>
            <p class="HEADER_TITLE">{{$t('node.node_title')}}</p>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="node_top">
                    <div class="node_infos">
                        <div class="node_left mauto">
                            <div class="avatar radius-round mauto">
                                <img src="../static/images/default/default_headImg.png">
                            </div>
                            <p class="nickname tcenter">{{userinfo.nickName}}</p>
                        </div>
                        <div class="node_right">
                            <div class="node_right_imgs">
                                <div class="node_right_img">
                                    <img src="../static/images/icon/node_star001.png">
                                </div>
                                <div class="node_right_img">
                                    <img src="../static/images/icon/node_star002.png">
                                </div>
                                <div class="node_right_img">
                                    <img src="../static/images/icon/node_star003.png">
                                </div>
                                <div class="node_right_img">
                                    <img src="../static/images/icon/node_star004.png">
                                </div>
                                <div class="node_right_img">
                                    <img src="../static/images/icon/node_star005.png">
                                </div>
                            </div>
                            <div class="node_right_scores">
                                <div class="node_right_score">
                                    <p class="node_right_item_txt1">{{detail.oneStarNum}}</p>
                                </div>
                                <div class="node_right_score">
                                    <p class="node_right_item_txt1">{{detail.twoStarNum}}</p>
                                </div>
                                <div class="node_right_score">
                                    <p class="node_right_item_txt1">{{detail.threeStarNum}}</p>
                                </div>
                                <div class="node_right_score">
                                    <p class="node_right_item_txt1">{{detail.fullStar}}</p>
                                </div>
                                <div class="node_right_score">
                                    <p class="node_right_item_txt1">{{detail.allStarNum}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="node_metas">
                        <div class="node_meta">
                            <p class="node_meta_txt1">{{$t('node.node_linkNode')}}</p>
                            <p class="node_meta_txt2">{{detail.nodeNum || '--'}}</p>
                        </div>
                        <div class="node_meta">
                            <p class="node_meta_txt1">{{$t('node.node_nodeTotalNum')}}</p>
                            <p class="node_meta_txt2">{{detail.recommenderNodeNum || '--'}}</p>
                        </div>
                        <div class="node_meta">
                            <p class="node_meta_txt1">{{$t('node.node_nodeTotalPerformance')}}</p>
                            <p class="node_meta_txt2">{{detail.nodeAchievement || '--'}}</p>
                        </div>
                    </div>
                </div>
                <div class="blank"></div>
                <div class="node_sub">
                    <div class="node_list">
                        <div class="node_item"
                            v-for="(item, index) in list"
                             :key="item"
                        >
                            <div class="node_item_top">
                                <p class="node_item_txt1">{{$t('halePublic.halePublic_name')}}：{{item.userName}}</p>
                                <div class="group_level_pic"
                                     v-if="item.starLevel != 0"
                                     :class="{
                                        'group_level_pic001': item.starLevel == 1,
                                        'group_level_pic002': item.starLevel == 2,
                                        'group_level_pic003': item.starLevel == 3,
                                        'group_level_pic004': item.starLevel == 4,
                                        'group_level_pic005': item.starLevel == 5
                                    }"
                                >
                                </div>
                            </div>
                            <div class="node_item_sub">
                                <div class="node_item_content">
                                    <div class="node_item_amount">
                                        <p class="node_item_txt2">{{$t('node.node_nodeNum')}}</p>
                                        <p class="node_item_txt3">{{item.recommenderNodeNum}}</p>
                                    </div>
                                    <div class="node_item_ms">
                                        <p class="node_item_txt2">{{$t('node.node_nodePerformance')}}</p>
                                        <p class="node_item_txt3">{{item.childInvestUsdtLock}}</p>
                                    </div>
                                </div>
                                <div class="node_item_date">
                                    <p class="node_item_txt2">{{$t('node.node_registerTime')}}</p>
                                    <p class="node_item_txt2">{{new Date(item.regTime).toLocaleDateString()}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="none" v-if="list.length <= 0">
                            <img src="../static/images/noMsg_bg.png" class="mauto">
                            <p class="none_txt1 tcenter">{{$t('node.node_noData')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "Node",
        data(){
            return {
                detail: {},
                list: []
            }
        },
        computed: {
            userinfo(){
                return this.getUserinfo()
            },
            userId(){
                return this.userinfo.userId
            }
        },
        mounted(){
            this.getDetail()
            this.getList()
        },
        methods: {
            ...mapGetters(['getUserinfo']),
            // 获得节点数量
            getDetail(){
                this.$http.get('js/users/findNodeNews', {
                    userId: this.userId
                }).then((res) => {
                    console.log(res)
                    if( res.success ){
                        this.detail = res.result
                    }
                })
            },
            // 获得列表
            getList(){
                this.$http.get('js/users/findTeamLog', {
                    userId: this.userId
                }).then((res) => {
                    if( res.success ){
                        this.list = res.result
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .content{
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
    }
    .node_top{
        padding: .24rem .3rem 0;
    }
    .node_infos{
        display: flex;
        justify-content: space-between;
    }
    .avatar{
        width: 1.2rem;
        height: 1.2rem;
        overflow: hidden;
    }
    .avatar img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .nickname{
        font-size: .34rem;
        color: #333;
        line-height: .55rem;
        margin-top: 0.15rem;
    }
    .node_right{
        display: flex;
    }
    .node_right_img{
        height: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;

    }
    .node_right_img img{
        height: 0.24rem;
        display: block;
        width: auto;
        position: relative;
        top: -0.02rem;
    }
    .node_right_score{
        height: 0.5rem;
        display: flex;
        align-items: center;
    }


    .node_right_item_txt1{
        font-size: .2rem;
        color: #333;
        padding: 0 0.3rem;
    }

    .node_metas{
        display: flex;
        border-top: 1px solid #ccc;
        padding: 0.24rem 0;
        margin-top: 0.25rem;
    }
    .node_meta{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .node_meta+.node_meta{
        border-left: 1px solid #ccc;
    }
    .node_meta_txt1{
        font-size: .2rem;
        color: #333;
        line-height: .3rem;
    }
    .node_meta_txt2{
        font-size: .2rem;
        color: #333;
        line-height: .5rem;
        font-weight: bold;
    }
    .blank{
        height: 0.24rem;
        background: #fafafa;
    }
    .none{
        margin-top: 1.4rem;
    }
    .none img{
        display: block;
        width: 2.7rem;
        height: auto;
    }
    .none_txt1{
        font-size: .2rem;
        color: #333;
        line-height: .3rem;
        margin-top: 0.3rem;
    }

    .node_list{
        padding: 0 0.3rem;
    }
    .node_item{
        padding: 0.25rem 0;
        border-bottom: 1px solid #ccc;
    }
    .node_item_top{
        display: flex;
        height: 0.4rem;
        align-items: center;
    }
    .node_item_txt1{
        font-size: .26rem;
        color: #333;
        line-height: .35rem;
        font-weight: bold;
        min-height: 0.15rem;
    }
    .node_item_txt2{
        font-size: .2rem;
        color: #333;
        line-height: .35rem;
    }
    .node_item_txt3{
        font-size: .26rem;
        color: #333;
        line-height: .35rem;
        font-weight: 700;
    }
    .node_item_top img{
        height: .24rem;
        display: block;
        width: auto;
    }
    .group_level_pic{
        height: 0.18rem; margin-left: 0.1rem;
    }
    .group_level_pic001{
        width: 0.18rem;
        background: url("../static/images/icon/node_star001.png") no-repeat center center / cover;
    }
    .group_level_pic002{
        width: 0.42rem;
        background: url("../static/images/icon/node_star002.png") no-repeat center center / cover;
    }
    .group_level_pic003{
        width: 0.66rem;
        background: url("../static/images/icon/node_star003.png") no-repeat center center / cover;
    }
    .group_level_pic004{
        width: 0.9rem;
        background: url("../static/images/icon/node_star004.png") no-repeat center center / cover;
    }
    .group_level_pic005{
        width: 0.18rem;
        background: url("../static/images/icon/node_star005.png") no-repeat center center / cover;
    }
    .node_item_sub{
        margin-top: 0.14rem;
        display: flex;
    }
    .node_item_content{
        flex: 1;
        display: flex;
    }
    .node_item_amount{
        width: 1.5rem;
    }
    .node_item_ms{
        flex: 1;
    }
    .node_item_date{
        width: 2rem;
        text-align: right;
    }
</style>
