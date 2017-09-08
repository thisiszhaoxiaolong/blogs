<template>
<div class="container">   
          <div class="tuijian">
            <h2>主人推荐</h2>
            <ul class="list">
                <li class="Img" v-for="item in alldata">
                    <router-link :to="{path:'/single/'+item.id}">
                    <a><img src="../../assets/img/portfolio/port02.jpg" alt="" /></a>
                    <p>{{item.article_name}}</p></router-link>
                </li>
                <!--<li class="Img">
                    <a><img src="../../assets/img/portfolio/port02.jpg" alt="" /></a>
                    <p>2</p>
                </li>
                <li class="Img">
                    <a><img src="../../assets/img/portfolio/port03.jpg" alt="" /></a>
                    <p>3</p>
                </li>
                <li class="Img">
                    <a><img src="../../assets/img/portfolio/port04.jpg" alt="" /></a>
                    <p>4</p>
                </li>
                <li class="Img">
                    <a><img src="../../assets/img/portfolio/port05.jpg" alt="" /></a>
                    <p>5</p>
                </li>
                <li class="Img">
                    <a><img src="../../assets/img/portfolio/port06.jpg" alt="" /></a>
                    <p>6</p>
                </li>-->
            </ul>
        </div>
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
            this.ArticleAllData.forEach(function(i, index) {
                if (i.recommend && this.alldata.length < 6) {
                    this.alldata.push(i)
                    console.log(this.alldata)
                }
            }, this);
        }
    }
</script>

<style scoped>
    .contianer {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    
    .tuijian {
        width: 100%;
    }
    
    .list {
        width: 100%;
    }
    
    .list li {
        float: left;
        width: 30%;
        text-align: center;
        padding: 10px;
    }
    
    .list li img {
        width: 100%;
    }
    
    .list li p {
        line-height: 35px;
    }
    
    .is-active {
        background: #1abc9c;
    }
    
    .muen_right {
        width: 25%;
        height: 100px;
        float: right;
        background: red;
    }
    
    .sreach .input {
        width: 70%;
    }
</style>