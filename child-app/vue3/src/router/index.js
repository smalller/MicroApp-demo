import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes
})

export default router
