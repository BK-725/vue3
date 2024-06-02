<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  import { store } from '../utils/store';

  // 状态管理测试 B 页面

</script>

<template>

<div>from B: {{ store.count }}</div>

</template>

<style scoped>

</style>
