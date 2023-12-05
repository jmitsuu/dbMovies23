import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue';
import Description from "../views/pages/Description.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'filmes',
      component: HomeView
    },
    {
      path: '/pages/lancamentos',
      name: 'lancamentos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pages/Lancamentos.vue')
    },
    {
      path:'/pages/description/:id',
      name:'description',
      component:Description
    }
  ]
})

export default router
