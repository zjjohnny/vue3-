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
