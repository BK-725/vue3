<script setup>
  import { ref } from 'vue'

  const message = ref('');

  // 复选框
  const checked = ref(false);
</script>

<template>
  <div>
    <!-- 表单中，需要将表单输入框内容同步给 js 中相应的变量。手动连接值绑定和更改事件监听器很麻烦 -->
    <input 
      :value="text" 
      @input="event => text = event.target.value"
    />

    <!-- v-model 的用法 -->
    <p>Message is: {{ message }}</p>
    <input 
      v-model="message"
      placeholder="edit me"
    />

    <!-- 复选框 -->
    <input 
      type="checkbox"
      id="checkbox"
      v-model="checked"
    />
    <label for="checkbox">{{ checked }}</label>
  </div>
</template>

<style scoped>


</style>
