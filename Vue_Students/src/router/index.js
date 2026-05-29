import { createRouter, createWebHistory } from 'vue-router'

import StudentTable from '../components/StudentTable.vue'
import StudentDetails from '../components/StudentDetails.vue'
import StudentForm from '../components/StudentForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StudentTable
  },
  {
    path: '/student/:id',
    name: 'student-details',
    component: StudentDetails,
    props: true
  },
  {
    path: '/student/:id/edit',
    name: 'student-edit',
    component: StudentForm,
    props: true
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})