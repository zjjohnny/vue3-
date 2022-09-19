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
        path: "/acess",
        name: '权限',
        component: () => import('../views/pages/acess.vue')
      },
      {
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
      }
    ],
    redirect: '/home'
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
