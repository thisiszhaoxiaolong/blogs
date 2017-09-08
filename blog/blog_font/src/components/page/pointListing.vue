<template>
<div class="container">   
    <h2>
        <span>{{cnname_one}}</span>
        <!--<span>{{classTwoData.cnname}}</span>-->
    </h2>
    <ul>  
        <li v-for="item in everypage">  
            <a><img src="../../assets/img/project-1.jpg" />  </a>
            <div class="content">
                <div>
                    <router-link :to="{path:'/single/'+item.id}">
                        <h3>{{item.article_name}}</h3>  
                        <p>{{item.daodu}}</p>
                    </router-link> 
                </div>
                <p>{{item.time}}</p>
            </div>
        </li>  
   </ul> 
    <div class="page">
        <el-pagination 
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" 
        :current-page="currentPage4" 
        :page-sizes="[5, 10, 15, 20]" 
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper" 
        :total="alldata.length">
        </el-pagination>
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
                input: "",
                everypagelist: 5,
                everypage: null,
                alldata: [],
                cnname_one: "",
                id: null,
                currentPage4: 0
            }
        },
        methods: {
            handleSizeChange(val) {
                this.everypagelist = val
            },
            handleCurrentChange(val) {
                this.everypage = this.alldata.slice(this.everypagelist * (val - 1), this.everypagelist * val)
                    // console.log(this.everypage)
            },
            ...mapActions([
                "ajaxDataListfn",
                "ajaxDataClassTwofn"
            ])
        },
        computed: {
            ...mapState(["ArticleAllData", "classTwoData"]),
        },
        created() {
            this.ajaxDataListfn(this);
            this.ajaxDataClassTwofn(this)
        },
        mounted() {
            this.id = this.$route.params.id.split("&")[0];
            this.cnname_one = this.$route.params.id.split("&")[1]
            this.ArticleAllData.forEach(function(i, index) {
                if (this.id == i.oneId) {
                    this.alldata.push(i)
                        // console.log(this.alldata)
                }
            }, this);
            // console.log(this.classTwoData)
        }
    }
</script>

<style scoped>
    .contianer {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    
    * {
        margin: 0;
        padding: 0;
    }
    
    div {
        margin: 30px 0;
    }
    
    ul {
        list-style-type: none;
        width: 100%;
        margin-top: 50px;
    }
    
    h3 {
        font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
    }
    
    li {
        width: 70%;
        margin-left: 15%;
    }
    
    li a {
        display: block;
        float: left;
        width: 10%;
        padding: 15px;
    }
    
    li img {
        width: 100%;
        margin: 0 15px 0 0;
    }
    
    li p {
        font: 200 12px/1.5 Georgia, Times New Roman, serif;
    }
    
    li {
        padding: 10px;
        overflow: auto;
        box-sizing: border-box;
        position: relative;
        background: #eee;
        border-bottom: 1px solid #000;
    }
    
    li:hover {
        cursor: pointer;
        background: #999
    }
    
    h2 {
        width: 100%;
        padding-left: 1%;
        box-sizing: border-box;
        line-height: 50px;
    }
    
    h2 span {
        padding: 20px 30px;
        box-sizing: border-box;
        background: #f2f2f2;
    }
    
    .page {
        width: 100%;
        text-align: center;
    }
    
    .content>p {
        position: absolute;
        right: 20px;
        bottom: 30px;
    }
</style>