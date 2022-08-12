import VueRouter from 'vue-router'
import first from '../../components/first'
import index from '../../components/index'
import find from '../../components/find'
import fl from '../../components/fl'
import my from '../../components/my'
import my1 from '../../components/my1'
import xq from '../../components/xq'

import kf from '../../components/kf'
import list from '../../components/list'
import gw from '../../components/gw'

// import sign from '../../components/sign'


var router=new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/my',
                    component:my,

                },
                {
                    path:'/my1',
                    component:my1,

                },
                {
                    path:'/xq',
                    component:xq,

                },
                {
                    path:'/list',
                    component:list
                },
                {
                    path:'/fl',
                    component:fl
                },
                {
                    path:'/find',
                    component:find
                },
                {
                    path:'/kf',
                    component:kf
                },
            ],
            redirect:'/index'
        },
        {
            path:'/gw',
            component:gw
        },
        {
            path:"/*",
            redirect:'/index'
        },


        
    ]
})
export default router;