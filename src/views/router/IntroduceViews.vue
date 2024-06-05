<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  import AAA from '../../components/AAA.vue'
  import BBB from '../../components/BBB.vue'

  const num = ref(0)

  const routes = [
    { path: '/AAA', component: AAA },
    { path: '/BBB', component: BBB }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes
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
  
</template>

<style scoped>

</style>
