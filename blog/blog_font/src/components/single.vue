<template>
<div class="container">   
    <div class="fh5co-aside" >
        <div class="page-title">
            <div><img src="../assets/img/user.png"></div>
            <p>{{alldata[0].time}}</p>
            <h2>{{alldata[0].article_name}}</h2>
        </div>
    </div>
    <div class="fh5co-main-content">
        <div class="fh5co-post"> 
            <div>
                {{alldata[0].content}}
            </div>
        </div>
    </div>
    <footer>
        三岁书生！
    </footer>
</div>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions,
        mapGetters
    } from "vuex"
    export default {
        data() {
            return {
                alldata: [],
            }
        },
        methods: {
            handleSizeChange(val) {
                this.everypagelist = val
            },
            ...mapActions([
                "ajaxDataListfn"
            ])
        },
        computed: {
            ...mapState(["ArticleAllData"]),
        },
        created() {
            this.ajaxDataListfn(this);
        },
        mounted() {
            console.log(this.ArticleAllData)
            this.ArticleAllData.forEach(function(i, index) {
                if (this.$route.params.id == i.id) {
                    this.alldata.push(i)
                        // console.log(this.alldata)
                }
            }, this);
            // console.log(this.classTwoData)
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        overflow: hidden;
    }
    
    .fh5co-aside {
        width: 100%;
        background: url(../assets/img/image_2.jpg) rgba(0, 0, 0, 0.4);
        background-size: 100% 100%;
        height: 700px;
        position: relative;
    }
    
    .page-title {
        width: 80%;
        height: 400px;
        margin-left: -40%;
        text-align: center;
        z-index: 12;
        position: absolute;
        left: 50%;
        top: 50%;
        color: #fff;
    }
    
    .page-title h2 {
        font-size: 72px;
        line-height: 100px;
    }
    
    .fh5co-main-content {
        width: 100%;
    }
    
    .fh5co-post {
        width: 70%;
        margin-left: 15%;
        margin-top: 30px;
    }
    
    .fh5co-post p {
        color: #828282;
        line-height: 30px;
    }
    
    .fh5co-post h2 {
        line-height: 40px;
    }
    
    footer {
        width: 100%;
        line-height: 40px;
        background: #828282;
        margin-top: 40px;
        text-align: center;
    }
    
    .fh5co-post {
        line-height: 30px;
    }
</style>