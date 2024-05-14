<script setup>
  import { ref } from 'vue'
  defineProps({

    string: {
      type: String,
      required: true
    },

    number: {
      type: Number,
      required: true
    },

    arr: {
      type: Array,
      required: true
    },

    obj: {
      type: Object,
      required: true
    }

  });
</script>

<!-- 定义一个组件 -->
<template>

  <!-- 字符串 -->
  <div>string: {{ string }}</div>
  
  <!-- 数字 -->
  <div>number: {{ number }}</div>
  
  <!-- 数组 -->
  <div>arr: {{ arr }}</div>

  <!-- 对象 -->
  <div>obj: {{ obj }}</div>

</template>

<style scoped>

</style>
