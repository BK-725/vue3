<script setup>
  import { ref } from 'vue'
  defineProps(['title', 'name'])
  defineEmits(['enlarge'])

  const count = ref(0);

</script>

<!-- 定义一个组件 -->
<template>
  <!-- <div :style="{ fontSize: name + 'em' }">123</div> -->
  <!-- 通过 slot 插槽来决定父组件传值的位置 -->
  <slot>
    name: {{ name }}
  </slot>

  <button @click="count++">
    you clicked me {{ count }} times.{{ title }} 
  </button>

  <button @click="$emit('enlarge')">emit</button>

</template>

<style scoped>

</style>
