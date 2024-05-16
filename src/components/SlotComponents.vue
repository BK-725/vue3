<script setup>
  import { ref } from 'vue'

</script>

<!-- 定义一个组件 -->
<!-- slot 插槽 -->
<template>
  <button>
    123
  </button>

  <button>
    <!-- 插槽出口 -->
    <slot></slot>
    456
  </button>
</template>

<style scoped>

</style>
