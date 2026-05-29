import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/StudentList.vue')
  },
  {
    path: '/student/new/edit',
    component: () => import('../components/StudentForm.vue')
  },
  {
    path: '/student/:id',
    component: () => import('../components/StudentDetails.vue')
  },
  {
    path: '/student/:id/edit',
    component: () => import('../components/StudentForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router