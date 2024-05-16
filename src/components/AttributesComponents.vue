<script setup>
  import { ref } from 'vue' 

  // 禁止透传
  defineOptions({
    inheritAttrs: false
  })

  const addCount = ref(1)

  function Count () {
    addCount.value++
  }

  // 在 js 中访问透传 Attributes
  // 如果需要，你可以在 <script setup> 中使用 useAttrs() API 来访问一个组件的所有透传
  const attrs = useAttrs();

</script>

<!-- 定义一个组件 -->z
<template>
  <div>
    <div>BBB</div>

    <button @click="Count">Click Me</button>
    <div>{{ addCount }}</div>

    <!-- 获取透传的所有内容 -->
    <div>{{ $attrs }}</div>

    <!-- 多根节点的 Attributes 继承 -->
    <!-- 和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为 -->
    <!-- 如果 $attrs 被显式绑定，则不会有警告 -->
    <header>...</header>
    <main :="$attrs">...</main>
    <footer>...</footer>

    
  </div>
</template>

<style scoped>

</style>
