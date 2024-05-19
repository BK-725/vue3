<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    defineModel,
    useAttrs,
    provide,
    inject,
    defineAsyncComponent
  } from 'vue'

  import { useMouse } from '@/utils/mouse';

  const { x, y } = useMouse();

</script>

<template>
  <div>
    <!-- 组合式函数 -->
    123456

    <!-- 鼠标跟踪器示例 -->
    <!-- 我们将这个逻辑复用到组合函数当中，提取到外部文件 -->
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
  </div>

  <!-- 异步状态示例 -->

  <!-- 接受响应式状态 -->

  <!-- 约定和最佳实践 -->
  <!-- 命名：组合式函数约定用驼峰命名法命名，并且以 "use" 作为开头 -->
  <!-- 输入参数：toValue()  规范化传入的值 -->

  <!-- 通过抽取组合式函数改善代码结构 -->

  <!-- 在选项式 API 中使用组合式函数 -->
  
</template>


<style scoped>



</style>
