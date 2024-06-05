<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  const num = ref(0)

  // 报告漏洞


  // 首要规则：不要使用无法信赖的模板
  // 永远不要这么做：
  // Vue.createApp({
  //   template: `<div>` + userProvidedString + `</div>` // 永远不要这样做！
  // }).mount('#app')

  // Vue 自身的安全机制
  // HTML 内容
  

  // Attribute 绑定

  // 潜在的危险
  
  // 注入 HTML

  // URL 注入

  // 样式注入

  // js 注入
  // 不要将 Vue 挂载到可能包含服务端渲染或用户提供内容的 DOM 节点上。

  // 最佳实践

  // 后端协调

  // 服务端渲染（SSR）

  
</script>

<template>
  <div>安全</div>
</template>

<style scoped>

</style>
