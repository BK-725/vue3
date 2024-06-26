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

  defineProps({
    id: String,
    query: String,
    newsletterPopup: Boolean
  })
  
</script>

<template>
  <div>路由 —— 路由组件传参</div>

  <!-- 直接获取到路由传递的参数 -->
  <div>pass: {{ id }}</div>

  <!-- 对象模式 -->
  <div>pass: {{ newsletterPopup ? 'true' : 'false' }}</div>

  <!-- 函数模式 -->
  <div>pass: {{ query }}</div>

</template>

<style scoped>

</style>
