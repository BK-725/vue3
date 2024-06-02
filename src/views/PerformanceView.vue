<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  // 性能优化
  // 概述
  // 1、页面加载性能：首次加载的时候：最大内容绘制 和 首次输入延迟
  // 2、更新性能：

  // 分析选项
  // 用于生产部署的负载性能分析：

  // PageSpeed Insights
  // WebPageTest

  // 页面加载优化
  // 选用正确的架构
  // 如果对于首屏加载比较的敏感，可以使用 SSR 和 SSG
  
  // 包体积与 Tree-shaking 优化
  // 1、尽可能采用构建步骤
  // 2、在引入新的依赖项时要小心体积膨胀，在现实应用中，包体积膨胀通常因为无意识引入了过重的依赖导致的

  // 3、如果你只在渐进式增强的场景下使用 Vue，并想要避免使用构建步骤，请考虑使用 petite-vue (只有 6kb) 来代替。


  // 代码分割
  // 1、
  // lazy.js 及其依赖会被拆分到一个单独的文件中
  // 并只在 `loadLazy()` 调用时才加载
  // function loadLazy() {
  //   return import('./lazy.js')
  // }

  // 2、
  // 使用懒加载的方式
  // import { defineAsyncComponent } from 'vue'

// 会为 Foo.vue 及其依赖创建单独的一个块
// 它只会按需加载
//（即该异步组件在页面中被渲染时）
  // const Foo = defineAsyncComponent(() => import('./Foo.vue'))

  // 更新优化
  // 在 Vue 之中，一个子组件只会在其至少一个 props 改变时才会更新
  
  // v-once：可以用来渲染依赖运行时数据但无需再更新内容

  // v-memo：可以用来有条件地跳过某些大型子树或者 v-for 列表的更新

  // 计算属性稳定性
  
</script>

<template>

  <div>性能优化</div>

</template>

<style scoped>

</style>
