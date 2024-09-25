import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AcquereurForm from '../views/AcquereurForm.vue'
import CedantForm from '../views/CedantForm.vue'
import CedantDashboard from "@/views/cedantDashboard.vue";
import AcquereurDashboard from "@/views/acquereurDashboard.vue";

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
  },
  {
    path: '/cedant-dashboard',
    name: 'Dashboard cedant',
    component: CedantDashboard
  },
  {
    path: '/acquereur-dashboard',
    name: 'Dashboard acquereur',
    component: AcquereurDashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router