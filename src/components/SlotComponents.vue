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

  <!-- 具名作用域插槽 -->
  <slot 
    name="header"
    message="hello" 
  >
  </slot>
  
  <div>
    <slot :text="greetingMessage" :count="1"></slot>
  </div>
</template>

<style scoped>

</style>
