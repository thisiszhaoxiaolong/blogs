<template>
   <div class="container">
        <h2>文章排行</h2>
        <ul>
            <li v-for="(item,index) in ArticleAllData">
                <router-link :to="{path:'/single/'+item.id}">{{item.article_name}}</router-link>
            </li>
        </ul>
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
                // this.ArticleAllData.forEach(function(i, index) {
                //     if (this.id == i.oneId) {
                //         this.alldata.push(i)
                //             //console.log(this.alldata)
                // 
                // }, this);
                // console.log(this.classTwoData)
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: auto;
        overflow: hidden;
        border: 1px solid #ccc;
    }
    
    .container h2 {
        text-align: center;
        background: seagreen;
        font-weight: 300;
    }
    
    .container li {
        text-align: center;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
    }
    
    .container li:last-child {
        border: none;
    }
    
    .container li:hover {
        background: #fafafa;
    }
    
    h2 {
        color: #fff;
    }
</style>