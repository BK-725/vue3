<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted
  } from 'vue'
  
  // onMounted 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码
  // 最常用的实例生命周期钩子：onMounted、onUpdated 和 onUnmounted
  onMounted(() => {
    console.log('123123');
  })

</script>

<template>
  <main>
    123
  </main>
</template>


<style scoped>

</style>
