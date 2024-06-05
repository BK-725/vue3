import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import AAA from '../components/AAA.vue'
import BBB from '../components/BBB.vue'

const routes = [
  { path: '/aaa', component: AAA },
  { path: '/bbb', component: BBB }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router