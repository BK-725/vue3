<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  import { 
    useRoute,
    useRouter,
    createRouter, 
    createWebHashHistory
  } from 'vue-router'

  import AAA from '../../components/AAA.vue'
  import BBB from '../../components/BBB.vue'

  const num = ref(0)

  const router = useRouter()
  const route = useRoute()

  const routes = [
    { path: '/AAA', component: AAA },
    { path: '/BBB', component: BBB }
  ]

  const routerNew = createRouter({
    history: createWebHashHistory(),
    routes
  })

  // 注册路由器插件
  // const app = createApp(App)
  // app.use(router)
  // app.mount('#app')

  // 和大多数 Vue 插件一样，use() 需要在 mount() 之前调用
  // 1、全局注册 RouterView 和 RouterLink 组件
  // 2、添加全局 $router 和 $route 属性
  // 3、启用 useRouter() 和 useRoute() 组合式函数
  // 4、触发路由器解析初始路由

  // 访问路由器和当前路由


  function onLink () {
    return router.push('/components')
  }

  const search = computed({
    get () {
      return route.query.search ?? ''
    },
    set (search) {
      router.replace({ query: { search } })
    }
  })

  
</script>

<template>
  <div>路由 —— 入门</div>

  <!-- 入门 -->
  <!-- Vue Router 是利用了页面无刷新功能来通过页面驱动路由更新 -->
  <!-- RouterLink: 表示创建链接，可以在不刷新页面的情况下改变 URL。 -->
  <RouterLink to="/list">测试 RouterLink</RouterLink>

  <!-- RouterView: 路由出口，用于渲染匹配到的组件。 -->
  <RouterView />

  <!-- $route.fullPath：用于在组件模板中访问当前路由对象 -->
  <Strong>Current route path: {{ $route.fullPath }}</Strong>

  <div>创建路由实例</div>

  <div>注册路由器插件</div>

  <button @click="onLink()">测试访问</button>

  <button>search</button>
  
</template>

<style scoped>

</style>
