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

<<<<<<< HEAD
  <!-- 具名作用域插槽 -->
  <slot 
    name="header"
    message="hello" 
  >
  </slot>
  
=======
  <div>
    <slot :text="greetingMessage" :count="1"></slot>
  </div>
>>>>>>> 6feccdd8acac9336c455228e1f9e908fd90e7b0d
</template>

<style scoped>

</style>
