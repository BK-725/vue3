import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/count',
      name: 'count',
      component: () => import('../views/CountView.vue')
    },
    {
      path: '/style',
      name: 'style',
      component: () => import('../views/StyleView.vue')
    },
    {
      path: '/condition',
      name: 'condition',
      component: () => import('../views/ConditionView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/listView.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/enter',
      name: 'enter',
      component: () => import('../views/EnterView.vue')
    },
    {
      path: '/cycle',
      name: 'cycle',
      component: () => import('../views/CycleView.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TemplateView.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentsView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/PropsView.vue')
    },
    {
      path: '/event_new',
      name: 'event_new',
      component: () => import('../views/OnEventView.vue')
    },
    {
      path: '/modal_component',
      name: 'modal_component',
      component: () => import('../views/ModalView.vue')
    },
    {
      path: '/attrib',
      name: 'attrib',
      component: () => import('../views/AttribView.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('../views/SlotView.vue')
    }
  ]
})

export default router
