import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/users' },
    { path: '/users', component: UsersView },
    { path: '/favorites', component: FavoritesView },
  ],
})

export default router
