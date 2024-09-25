import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AcquereurForm from '../views/AcquereurForm.vue'
import CedantForm from '../views/CedantForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
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