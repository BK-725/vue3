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
  // 重定向
  // 重定向也是通过 配置 routes 来完成的
  // const routes = [{ path: '/name', redirect: '/' }]
  
  // 相对重定向

  // 别名

  
</script>

<template>
  <div>路由 —— 重定向和别名</div>
  <div>重定向 到了 编程式路由页面</div>

</template>

<style scoped>

</style>
