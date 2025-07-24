import { createRouter, createWebHashHistory } from 'vue-router'
import PerfilView from './../views/PerfilView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'perfil',
      component: PerfilView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contacto.vue'),
    },
  ],
})

export default router
