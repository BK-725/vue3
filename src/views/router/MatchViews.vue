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

  // 可以在 path 中添加正则来u匹配

  const routes = [
    // /:orderId -> 仅匹配数字
    { path: '/:orderId(\\d+)' },

    { path: '/:productName' }
  ]

  // 可重复的参数
  const routes1 = [
    // /:orderId -> 仅匹配数字
    { path: '/:chapters+' },

    { path: '/:chapters*' }
  ]
  
</script>

<template>
  <div>路由的匹配语法</div>

  <!-- 在参数中自定义正则 -->
   
</template>

<style scoped>

</style>
