import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false



import Vuex from "vuex"
Vue.use(Vuex)
import modules from "./store/module.js"
// console.log(moudel)
var store = new Vuex.Store(modules)
    // console.log(store)
import axios from "axios"
import vueAxios from "vue-axios"
Vue.use(vueAxios, axios)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})