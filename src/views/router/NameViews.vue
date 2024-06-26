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

  
  // Vue Router 有很多其他部分可以传入网址，例如 router.push() 和 router.replace() 方法。我将在编程式导航中介绍，就像 to 属性一样，这些方法也支持通过 name 传入网址
  

  
</script>

<template>
  <div>路由 —— 命名路由</div>

  <div>Name</div>

  <!-- 获取路由的 id 参数 -->
  <div>name {{ $route.params.id }}</div>

  <router-link :to="{ name: 'dynamic' }">动态路由</router-link>


</template>

<style scoped>

</style>
