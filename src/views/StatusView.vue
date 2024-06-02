<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  import { store } from '../utils/store'

  import StoreA from './StatusViewA.vue'
  import StoreB from './StatusViewB.vue'

  // 状态管理

  // 什么是状态管理
  // 理论上来说，每一个 Vue 组件实例都已经在 “ 管理 ”它自己的响应式状态了
  // 以一个简单的计数器组件为例

  // 状态：驱动整个应用的数据源
  const count = ref(0)

  // 动作：
  function increment () {
    count.value++
  };

  // 交互：状态根据用户在视图中的输入而作出相应变更的可能方式

  // 用响应式 API 做简单状态管理
  // 如果你有一部分状态需要在多个组件实例间共享，你可以使用 reactive() 来创建一个响应式对象，并将他们导入多个组件中

  // function editStore () {
  //   store.count++
  // }

  // SSR

  // Pinia： 作为官方的 状态管理工具
  
</script>

<template>

  <div>
  <!-- 视图：对状态的一种声明式映射 -->
    <div @click="increment">{{ count }}</div>
  </div>

  <button @click="store.increment()">更改 store + 1</button>
  <button @click="store.reduce()">更改 store - 1</button>

  <StoreA />
  <StoreB />


<div>123</div>

</template>

<style scoped>

</style>
