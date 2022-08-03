import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/Layout/index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: '/child-vue2*',
        name: 'child-vue2',
        component: () => import('../views/child-vue2.vue'),
      },
      {
        path: '/child-vue3*',
        name: 'child-vue3',
        component: () => import('../views/child-vue3.vue'),
      },
      {
        path: '/child-react*',
        name: 'child-react',
        component: () => import('../views/child-react.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this, location).catch(err => err)
}

export default router
