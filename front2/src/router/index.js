import { createRouter, createWebHistory } from 'vue-router'
import All from '../views/All.vue'

const routes = [
  {
    path: '/',
    name: 'All',
    component: All
  },
  {
    path: '/mytrn',
    name: 'Trn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyTrns.vue')
  },
  {
    path: '/passingtrn/:id',
    name: 'PassingTrn',
    component: () => import(/* webpackChunkName: "about" */ '../views/PassingTrn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
