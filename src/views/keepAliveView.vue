<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
    watchEffect,
    onActivated,
    onDeactivated
  } from 'vue'

    // 缓存实例的生命周期
    // 当一个组件实例从 DOM 上移除但因为被 <KeepAlive> 缓存而仍作为组件树的一部分时，
    // 它将变为不活跃状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新被激活。
    onActivated(() => {
      // 调用时机为首次挂载
      // 以及每次从缓存中被重新插入时
    })

    onDeactivated(() => {
      // 在从 DOM 上移除、进入缓存
      // 以及组件卸载时调用
    })

</script>



<template>
  <div>
    <!-- <KeepAlive> 是一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例。 -->

    <!-- 基本使用 -->
    <!-- 在组件之间切换，会清除组件已经输入的值 -->
    <!-- 利用 keepAlive 会缓存切换之后组件留存的值 -->
    <KeepAlive>
      <div>123</div>
    </KeepAlive>

    <!-- 包含 / 排除 -->
    <!-- 
      KeepAlive 默认会缓存内部所有组件实例，
      但是我们可以通过 include 和 exclude Prop 来制定该行为
      这两个值都可以用 prop 以一个英文逗号分隔字符串或者正则 
    -->

    <!-- 以英文逗号分隔的字符串 -->
    <!-- <KeepAlive include="a,b">
      <component :is="view" />
    </KeepAlive> -->


    <!-- 正则表达式 (需使用 `v-bind`) -->
    <!-- <KeepAlive :include="/a|b/">
      <component :is="view" />
    </KeepAlive> -->


    <!-- 数组 (需使用 `v-bind`) -->
    <!-- <KeepAlive :include="['a', 'b']">
      <component :is="view" />
    </KeepAlive> -->


    <!-- KeepAlive 通过 max prop 来限制可被缓存的最大组件数实例 -->
    <!-- <KeepAlive :max="10">
      <component :is="activeComponent" />
    </KeepAlive> -->

      
    
  </div>
  
</template>


<style scoped>

</style>
