import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ListView from '@/views/ListView.vue'
import DetailsView from '@/views/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView,
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-detalhes',
      component: DetailsView,
    },
  ],
})

export default router
