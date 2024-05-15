<script setup>
  import { ref } from 'vue'

</script>

<!-- 定义一个组件 -->
<template>
  <!-- 触发与监听事件 -->
  <button @click="$emit('onEventSon')">Click Me</button>

  <!-- 事件参数 -->
  <button @click="$emit('onCountSon', 1)">count</button>
</template>

<style scoped>

</style>
