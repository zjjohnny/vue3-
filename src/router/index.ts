import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../views/main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Main,
    children:[
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
    ]
  },
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
