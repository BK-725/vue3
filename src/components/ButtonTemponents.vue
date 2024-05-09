<script setup>
  import { ref } from 'vue'
  defineProps(['title', 'name'])
  defineEmits(['enlarge'])

  const count = ref(0);

</script>

<!-- 定义一个组件 -->
<template>
  <!-- <div :style="{ fontSize: name + 'em' }">123</div> -->12312
  <button @click="count++">
    you clicked me {{ count }} times.{{ title }} {{ name }}
  </button>

  <button @click="$emit('enlarge')">emit</button>
  
</template>

<style scoped>

</style>
