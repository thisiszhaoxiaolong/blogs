// import { ADD_INDEX, ADD_TAB } from "./type_mutation"

export default {
    state: {
        articleCenterData: null,
        ArticleAllData: null,
        classTwoData: null
    },
    mutations: {
        ajaxDataMutaion(state, data) {
            state.articleCenterData = data
        },
        ajaxDataList(state, data) {
            state.ArticleAllData = data
        },
        ajaxDataClassTwo(state, data) {
            state.classTwoData = data
        },

    },
    getters: {

    },
    actions: {
        articleCenterDatafn({ commit }, _this) {
            return new Promise(function(resolve) {
                _this.axios.get(" http://localhost:9999/api/front_article/getNav").then(function(data) {
                    commit("ajaxDataMutaion", data.data.data)
                    resolve("ok")
                })
            })
        },
        ajaxDataListfn({ commit }, _this) {
            return new Promise(function(resolve) {
                _this.axios.get(" http://localhost:9999/api/front_article/getArticleAll").then(function(data) {
                    commit("ajaxDataList", data.data.data)
                    resolve("ok")
                })
            })
        },
        ajaxDataClassTwofn({ commit }, _this) {
            // console.log(_this.$data.alldata)
            return new Promise(function(resolve) {
                // _this.axios.post(" http://localhost:9999/api/front_article/getClassTwo", {
                //     id: _this.id
                // }).then(function(data) {
                //     // console.log(data.data.data)
                //     commit("ajaxDataClassTwo", data.data.data)
                //     resolve("ok")
                // })
            })
        }
    }
}