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
  <div>路由 —— 动态路由匹配</div>

  <!-- 动态路由 -->

  <router-link to="/user/eduardo/posts/1">
    /user/eduardo/posts/1
  </router-link>

  <router-link to="/user/eduardo/posts/20">
    /user/eduardo/posts/20
  </router-link>

  <router-view></router-view>


</template>

<style scoped>

</style>
