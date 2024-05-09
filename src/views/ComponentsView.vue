<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
    watchEffect
  } from 'vue'

  // 使用组件
  import ButtonTemponents from '@/components/ButtonTemponents.vue';

  const name = ref(1);

</script>

<template>
  <div>123</div>

  <!-- 使用组件 -->
  <div :style="{ fontSize: name + 'em' }">
    <ButtonTemponents title="aaaa" name="2" @enlarge="name += 1" />
  </div>

  <ButtonTemponents title="bbbb" />
  <ButtonTemponents title="cccc" />

  <!-- 监听事件 -->
</template>


<style scoped>

</style>
