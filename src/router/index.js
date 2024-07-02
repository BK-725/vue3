import { 
  createRouter, 
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
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
    },
    {
      path: '/rely',
      name: 'rely',
      component: () => import('../views/RelyView.vue')
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('../views/AxiosView.vue')
    },
    {
      path: '/combined',
      name: 'combined',
      component: () => import('../views/CombinedView.vue')
    },
    {
      path: '/customize',
      name: 'customize',
      component: () => import('../views/CustomizeView.vue')
    },
    {
      path: '/plugin',
      name: 'plugin',
      component: () => import('../views/PluginView.vue')
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('../views/TransitionView.vue')
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('../views/TransitionGroupView.vue')
    },
    {
      path: '/keep',
      name: 'keep',
      component: () => import('../views/keepAliveView.vue')
    },
    {
      path: '/teleport',
      name: 'teleport',
      component: () => import('../views/TeleportView.vue')
    },
    {
      path: '/suspense',
      name: 'suspense',
      component: () => import('../views/SuspenseView.vue')
    },
    {
      path: '/single_file',
      name: 'single_file',
      component: () => import('../views/SingleFileView.vue')
    },
    {
      path: '/tool',
      name: 'tool',
      component: () => import('../views/ToolView.vue')
    },
    {
      path: '/router',
      name: 'router',
      component: () => import('../views/RouterView.vue')
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: () => import('../components/AAA.vue')
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: () => import('../components/BBB.vue')
    },
    {
      path: '/ccc',
      name: 'ccc',
      component: () => import('../components/CCC.vue')
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('../views/StatusView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/deployment',
      name: 'deployment',
      component: () => import('../views/DeploymentView.vue')
    },
    {
      path: '/performance',
      name: 'performance',
      component: () => import('../views/PerformanceView.vue')
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: () => import('../views/AccessibilityView.vue')
    },
    {
      path: '/safety',
      name: 'safety',
      component: () => import('../views/SafetyView.vue')
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('../views/router/IntroduceViews.vue')
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('../views/router/DynamicViews.vue')
    },
    // 动态路由
    {
      path: '/user/:username/posts/:pstId',
      name: 'user',
      component: () => import('../views/router/DynamicNewViews.vue')
    },
    {
      path: '/match',
      name: 'match',
      component: () => import('../views/router/MatchViews.vue')
    },
    {
      path: '/nest',
      name: 'nest',
      component: () => import('../views/router/NestViews.vue'),
      children: [
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: '/nest1',
          component: () => import('../views/router/NestViews1.vue'),
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 将被渲染到 User 的 <router-view> 内部
          path: '/nest2',
          component: () => import('../views/router/NestViews2.vue')
        },
      ]
    },
    {
      path: '/name/:id',
      name: 'name',
      component: () => import('../views/router/NameViews.vue')
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../views/router/CodeViews.vue')
    },
    {
      path: '/redirect',
      name: 'redirect',
      redirect: '/code', // 重定向
      component: () => import('../views/router/RedirectViews.vue')
    },
    {
      path: '/pass/:id',
      name: 'pass',
      props: true, // 路由传参
      component: () => import('../views/router/PassViews.vue')
    },
    // 对象模式
    // {
    //   path: '/pass/:id',
    //   name: 'pass',
    //   props: { newsletterPopup: false }, // 路由传参
    //   component: () => import('../views/router/PassViews.vue')
    // },
    // 函数模式
    // {
    //   path: '/pass/:id',
    //   name: 'pass',
    //   props: route => ({ query: route.query.q }), // 路由传参
    //   component: () => import('../views/router/PassViews.vue')
    // },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/router/HistoryViews.vue')
    },
    {
      path: '/guard',
      name: 'guard',
      component: () => import('../views/router/advanced/GuardViews.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

// 路由导航守卫
// 如果什么都没有，undefined 或者 返回 true ，则导航是有效的，并调用下一个导航守卫
router.beforeEach( async (to, form, next) => {

  // 检查用户是否是登录了
  let isLogin = false
  // 检查用户是否登录了
  if (!isLogin && to.name !== 'login') {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }

  // 可选的第三个参数 next

})

// 也可以使用 async await 语法
// router.beforeEach(async (to, from) => {
//   // canUserAccess() 返回 `true` 或 `false`
//   const canAccess = await canUserAccess(to)
//   if (!canAccess) return '/login'
// })

// 全局解析守卫

// router.beforeResolve(async to => {
//   if (to.meta.requiresCamera) {
//     try {
//       await askForCameraPermission()
//     } catch (error) {
//       if (error instanceof NotAllowedError) {
//         // ... 处理错误，然后取消导航
//         return false
//       } else {
//         // 意料之外的错误，取消导航并把错误传给全局处理器
//         throw error
//       }
//     }
//   }
// })

// 全局后置钩子


// 可选的第三个参数 next


export default router
