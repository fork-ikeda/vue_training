import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BookSearch from '../views/BookSearch.vue'
import BookDetail from '../views/BookDetail.vue'
import CheckOut from '@/views/CheckOut.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BookSearch
  },
  {
    path: '/detail',
    component: BookDetail
  },
  {
    path: '/checkout',
    component: CheckOut
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
