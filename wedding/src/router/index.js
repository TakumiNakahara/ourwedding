import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Ceremony from '../views/CeremonyPage.vue'
import Party from '../views/PartyPage.vue'
import Photoshoot from '../views/PhotoshootPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ceremony',
    name: 'Ceremony',
    component: Ceremony
  },
  {
    path: '/party',
    name: 'party',
    component: Party
  },
  {
    path: '/photoshoot',
    name: 'photoshoot',
    component: Photoshoot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: '/AfterWedding/',
  routes
})

export default router
