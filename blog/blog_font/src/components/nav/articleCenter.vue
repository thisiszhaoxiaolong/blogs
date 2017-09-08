<template>
   <div class="container">
        <h2>文章分类</h2>
        <ul>
            <li  @click="fn()" v-for="(item,index) in articleCenterData">
                <router-link :to="{path:'/pointListing/'+item.id+'&'+item.cnname}">
                    {{item.cnname}}
                </router-link>
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
        // name: 'login',
        data() {
            return {}
        },
        created() {

        },
        computed: {
            // ...mapState(["articleCenterData"]),
            ...mapState({
                articleCenterData: state => state.articleCenterData
            })
        },
        methods: {
            ...mapActions([
                "articleCenterDatafn"
            ]),

            fn() {
                // this.$router.go(0)
            }
        },
        mounted() {
            this.articleCenterDatafn(this)
        },
        components: {}
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