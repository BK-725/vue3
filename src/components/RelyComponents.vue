<script setup>
  import { ref, inject } from 'vue'

  const { location, updateLocation } = inject('location');

</script>

<!-- 定义一个组件 -->
<!-- slot 插槽 -->
<template>
  
  <button @click="updateLocation">{{ location }}</button>
</template>

<style scoped>

</style>
