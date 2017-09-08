import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import single from '@/components/single'
import recommend from '@/components/page/recommend'
import pointListing from '@/components/page/pointListing'


Vue.use(Router)


export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index,
            children: [{
                path: '/',
                name: 'recommend',
                component: recommend
            }, {
                path: 'pointListing/:id',
                name: 'pointListing',
                component: pointListing
            }]
        },
        {
            path: '/single/:id',
            name: 'single',
            component: single
        }
    ]
})