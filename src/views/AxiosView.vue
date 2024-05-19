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

  import AAA from '@/components/AAA.vue'
  import BBB from '@/components/BBB.vue'
  
  const AsyncComp = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      // .... 从服务器获取组件
      resolve(/* 获取到组件 */)
    })
  });
  // ... 像使用其他组件一样 使用 AsyncComp

  // 也可以导入单文件
  // const AsyncCompNew = defineAsyncComponent(() => {
  //   import ('@/components/AsyncComp.vue')
  // });

  // 加载与错误状态
  const AsyncCompNew = defineAsyncComponent({
    // 加载函数
    loader: () => import('@/components/BBB.vue'),

    // 加载异步组件时使用的组件
    loadingComponent: AAA,
    // 展示加载组件前的延迟时间，默认为 200ms
    delay: 200,

    // 加载失败后展示的组件
    errorComponent: BBB,
    // 如果提供了一个 timeout 时间限制，并超时了
    // 也会显示这里配置的报错组件，默认值是：Infinity
    timeout: 3000
  });

</script>

<template>
  <div>
    <!-- 基本用法 -->
    <!-- 在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件 -->
    <!-- Vue 提供了 defineAsyncComponent 方法来实现此功能 -->
    <!-- <AsyncComp></AsyncComp> -->
    <!-- <AsyncCompNew></AsyncCompNew> -->

  </div>

  
</template>


<style scoped>



</style>
