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

  

  
</script>

<template>
  <div>路由 —— 嵌套路由</div>

  <div>User 1111</div>
  <router-view></router-view>
</template>

<style scoped>

</style>
