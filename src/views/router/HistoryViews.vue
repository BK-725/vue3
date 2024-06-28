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

  // createWebHashHistory
  // hash 模式是用 createWebHashHistory 创建的，它在内部传递的实际 URL 之前使用了一个 哈希字符（#）。不过这对 SEO 确实不好
  // 

  // Memory 模式

  // HTML5 模式
  // createWebHistory，一般使用的是 这种模式，不过要对 404 进行兼容处理一下
  
</script>

<template>
  <div>路由 —— 不同的历史模式</div>



</template>

<style scoped>

</style>
