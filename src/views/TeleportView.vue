<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  // const isMobile = ref(false)

</script>

<template>
  <div>
    123    
  </div>

  <!-- <Teleport> 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。 -->

    <!-- 基本用法 -->
    <!-- 在组件中使用 Teleport 表示，将这个组件传送到 父组件的 body 下 -->
    <Teleport to="body">
    </Teleport>

    
    <!-- 搭配组件使用 -->
    <!-- <Teleport> 只改变了渲染的 DOM 结构，它不会影响组件间的逻辑关系。 -->

    
      <!-- 禁用 Teleport -->
    <!-- 在某些场景下可能需要视情况禁用 <Teleport> -->
    <!-- <Teleport :disabled="isMobile">
      ...
    </Teleport> -->


    <!-- 多个 Teleport 共享目标 -->
    <!-- 而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上。 -->
    <!-- <Teleport to="#modals">
      <div>A</div>
    </Teleport>
    <Teleport to="#modals">
      <div>B</div>
    </Teleport> -->
    
    <!-- 上述结果为： -->
    <!-- <div id="modals">
      <div>A</div>
      <div>B</div>
    </div> -->

</template>


<style scoped>

</style>
