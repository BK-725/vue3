<script setup>
  import { ref } from 'vue'

  const count = ref(2)

  const objectOfAttrs = {
    id: 'container',
    class: 'wrapper'
  }

  const number = ref(0)
  
</script>

<template>
  <main>
    <!-- 插值表达式 -->
    <div class="content">{{ count }}</div>

    <!-- Attribute 绑定 -->
    <div :id="dynamicId"></div>

    <!-- 布尔型 Attribute -->
    <div :id="isShow"></div>

    <!-- 动态绑定多个值 -->
    <div :="objectOfAttrs">123</div>

    <!-- 使用 js 表达式 -->
    <div> {{ number + 1 }} </div>
    <div @click="onAdd">{{ number }}</div>

    <!-- 修饰符 -->
    <form @submit.prevent="onSubmit">...</form>
  </main>
</template>


<style scoped>
  .wrapper {
    color: red;
  }


</style>
