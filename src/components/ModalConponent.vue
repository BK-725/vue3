<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    defineModel
  } from 'vue'

  // 从 Vue 3.4 开始推荐使用的方式是 defineModal()

  // 它的 .value 和父组件的 v-model 的值同步；
  // 当它被子组件变更了，会触发父组件绑定的值一起更新。
  const model = defineModel()

  const modelTitle = defineModel('title')

  function update () {
    model.value++
  }

  // v-model 用法的同时轻松包装原生 input 元素
  // const modelNew = defineModel()

  // 底层机制

  // 多个 v-modal
  const firstName = defineModel('firstName');
  const lastName = defineModel('lastName');

  // 处理 v-model 修饰符

</script>

<template>
  <div>456</div>
  <button @click="update">Count</button>
  <div>Parent bound v-model is: {{ model }}</div>

  <input type="text" v-model="modelNew" />

  <input type="text" v-model="modelTitle" />

  <div>modelTitle: {{ modelTitle  }}</div>

  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
</template>


<style scoped>

</style>
