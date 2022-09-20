import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/main',
    name: 'main',
    // redirect: '/home',
    component: () => import('../views/main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue')
      }, {
        path: '/data',
        name: 'data',
        component: () => import(/* webpackChunkName: "data" */ '../views/pages/data.vue')
      }, {
        path: "/client",
        name: 'client',
        component: () => import('../views/CRain/Client.vue')
      },{
        path: "/highseas",
        name: 'highseas',
        component: () => import('../views/CRain/HighSeas.vue')
      },{
        path: "/adduser",
        name: 'adduser',
        component: () => import('../views/CRain/AddUser.vue')
      },{
        path: "/updateuser",
        name: 'updateuser',
        component: () => import('../views/CRain/updateUser.vue')
      },{
        path: "/acess",
        name: '权限',
        component: () => import('../views/pages/acess.vue')
      },{
        path:'/GoodsView',
        name: 'GoodsView',
        component: () => import('../views/goods/GoodsView.vue'),
        children:[
          
        ]
      },{
        path:'/ChangeGoods',
        name: 'ChangeGoods',
        component: () => import('../views/goods/ChangeGoods.vue')
      },{
        path:'/AddGoods',
        name: 'AddGoods',
        component: () => import('../views/goods/AddGoods.vue')
      },{
        path: '/orderSetting',
        name: 'orderSetting',
        component: ()=>import('../views/system/orderSetting.vue')
      },{
        path: '/countryManage',
        name: 'countryManage',
        component: ()=>import('../views/system/countryManage.vue')
      },{
        path: '/change',
        name: 'change',
        component: ()=>import('../views/system/change.vue')
      },{
        path: '/increase',
        name: 'increase',
        component: ()=>import('../views/system/increase.vue')
      },
      {
        path:'/GoodsHouse',
        name: '商品仓库',
        component: () => import('../views/goods/GoodsHouse.vue')
      },{
        path:'/dindan',
        name: '订单',
        component: () => import('../views/sxw/DinDan.vue')
      },
      {
        path:'/ManJian',
        name: 'ManJian',
        component: () => import('../views/sand/ManJian.vue')
      },
      {
        path:'/YouHuiJuan',
        name: 'YouHuiJuan',
        component: () => import('../views/sand/YouHuiJuan.vue')
      }
    ],
    redirect: '/home'
  },{
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/orderSetting',
    name: 'orderSetting',
    component: ()=>import('../views/system/orderSetting.vue')
  },{
    path: '/countryManage',
    name: 'countryManage',
    component: ()=>import('../views/system/countryManage.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
