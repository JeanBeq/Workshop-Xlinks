import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AcquereurForm from '../views/AcquereurForm.vue'
import CedantForm from '../views/CedantForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/acquereur',
    name: 'Acquereur',
    component: AcquereurForm
  },
  {
    path: '/cedant',
    name: 'Cedant',
    component: CedantForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router