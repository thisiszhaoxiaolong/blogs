<template>
<div class="container">   
    <header>
     <div>个人博客</div>
     <div class="a">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="info">搜索</el-button>
     </div>
    </header>
    <main>
        <div id="ww">
            <div class="row">
                <div>
                    <img src="../assets/img/user.png">
                    <h1>Hi,三岁先生</h1>
                    <p>　文凭不过是一张火车票，清华的是软卧，本科的是硬卧，专科的是硬座，民办的是站票，成教的在厕所挤着。火车到站，都下车找工作，才发现老板并不太关心你是怎么来的，只关心你会干什么。</p>
                </div>
            </div>
        </div>
        <div class="muen">
            <div class="muen_left">
                <router-view></router-view>
            </div>
            <div class="muen_right">
                <article-center></article-center>
                <article-latest></article-latest>
                <article-ranking></article-ranking>
            </div>
        </div>
    </main>
</div>
</template>

<script>
    import articleRanking from "./nav/articleRanking"
    import articleCenter from "./nav/articleCenter"
    import articleLatest from "./nav/articleLatest"
    import {
        mapState,
        mapMutations,
        mapActions,
        mapGetters
    } from "vuex"
    export default {
        data() {
            return {
                input: ""
            }
        },
        components: {
            articleRanking,
            articleCenter,
            articleLatest
        },
        methods: {
            ...mapActions([
                "ajaxDataListfn"
            ])
        },
        mounted() {
            this.ajaxDataListfn(this)
        }
    }
</script>

<style scoped>
    .contianer {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    
    header {
        background-color: #1abc9c;
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        box-sizing: border-box;
        color: #fff;
    }
    
    header>div:nth-child(1) {
        float: left;
    }
    
    header>div:nth-child(2) {
        float: right;
    }
    
    #ww {
        width: 100%;
        background: #f2f2f2;
    }
    
    #ww .row {
        width: 80%;
        text-align: center;
        padding: 60px 0;
        margin-left: 10%;
    }
    
    #ww .row p {
        line-height: 35px;
    }
    
    .muen {
        width: 100%;
        margin-top: 30px;
        padding: 0 1%;
        box-sizing: border-box;
    }
    
    .muen_left {
        width: 80%;
        float: left;
        overflow: hidden;
    }
    
    .muen_right {
        width: 20%;
        float: right;
    }
    
    .el-input {
        width: 80%;
    }
    
    .a {
        width: 30%;
    }
</style>