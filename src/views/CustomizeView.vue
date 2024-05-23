<script setup>
  import { 
    reactive, 
    ref,
    createApp
  } from 'vue'

  // 介绍
  
  
  // Vue 还可以内置一些指令
  // 下面时一个自定义指令，当一个 input 元素被 Vue 插入到 DOM 中：
  
  // 在模板中启用 v-focus
  const vFocus = {
    mounted: (el) => el.vFocus
  };

  // 将一个自定义指令全局注册到应用层也是一种常见做法：
  const app = createApp();

  app.directive('focus', {
  });

  // 指令钩子
  // 一个指令的定义对象可以提供几种钩子函数
  
  // 在绑定元素的 attribute 前，或事件监听应用前调用
  created(el, binding, vnode, prevVnode) 

  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode)
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode)
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode)
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode)
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode)
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode);

  // 钩子函数

  // el：指令绑定到的元素，可以直接用来操作 DOM


  // 简化形式
  // app.directive('color', (el, binding) => {
  //   // 这会在 `mounted` 和 `updated` 时都调用
  //   el.style.color = binding.value
  // });

  
  // 对象字面量
  // 如果你的指令需要多个值，你可以向它传递一个 js 对象字面量，别忘了 指令也可以接受任何 js 表达式
  // app.directive('demo', (el, binding) => {
  //   console.log(binding.value.color) // => "white"
  //   console.log(binding.value.text) // => "hello!"
  // })
  

  // 在组件上使用
  // <MyComponent v-demo="test" />

  // <div> <!-- v-demo 指令会被应用在此处 -->
  //   <span>My component content</span>
  // </div>

</script>

<template>
  <div>111</div>
  <input type="text" v-focus />

  <div v-demo="{ color: 'white', text: 'hello!' }"></div>
</template>


<style scoped>



</style>
