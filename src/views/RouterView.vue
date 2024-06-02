<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'
  import AAA from '../components/AAA.vue';
  import BBB from '../components/BBB.vue';
  import CCC from '../components/CCC.vue';

  // 客户端 vs. 服务端路由

  // 官方路由
  // Vue 很适合用来构建单页面应用。对于大多数此类应用，都推荐使用官方支持的路由库。
  // Vue Router 的文档

  // 从头开始实现一个简单的路由
  const routes = {
    '/aaa': AAA,
    '/bbb': BBB,
    '/ccc': CCC
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange',() => {
    currentPath.value = window.location.hash
  })

  const currentView = computed (() => {
    console.log('currentPath', currentPath);
    return routes[currentPath.value.slice(1) || '/']
  })

  

</script>


<template>
<a href="#/aaa">AAA</a> |
<a href="#/bbb">BBB</a> |
<a href="#/ccc">CCC</a> |

<component :is="currentView" />

</template>

<style scoped>

</style>
