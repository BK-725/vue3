<script setup>
  import { 
    reactive, 
    ref, 
    computed 
  } from 'vue'
  
  // v-for
  const items = reactive(
    [
      {
        message: 'Foo'
      },
      {
        message: 'Fee'
      }
    ]
  );

</script>

<template>
  <!-- 列表渲染 -->
  <div v-for="(item, index) in items" :key="index">
    {{ item.message }}
  </div>
</template>


<style scoped>

</style>
