<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  // 什么是 SSR?
  // SSR: 服务端将页面直接渲染成 html 字符串

  // 为什么要用 服务端渲染
  // 1,更快的首屏加载
  // 2, 统一的心智模型
  // 3, 更好的 SEO

  // 服务端渲染限制条件
  // 1, 开发中的限制
  // 2, 更多的与构建配置和部署相关要求
  // 3, 更高的服务端负载

  // SSR vs SSG
  // SSG： 静态站点生成。也被称为：预渲染，是另一种流行的构建快速网站技术。如果用服务端渲染一个页面所需的数据对每个用户来说都是相同的，那么我们就可以只渲染一次

  // 基础教程
  // 渲染一个应用
  // 让我们来看看 Vue SSR 最基础的实战示例
  // 1、创建一个新文件夹，cd 进入
  // 2、执行 npm init -y 初始化项目
  // TODO: 在 外层 example.js 文件夹下

  // 客户端激活
  // 为了在激活模式下挂载应用，我们应该使用 createSSRApp() 而不是 createApp()：

  // 代码结构

  // 更通用的解决方案
  // 下面是推荐几个 Vue 生态中的 SSR 解决方案
  // 1、Nuxt
  // 2、Quasar
  // 3、Vite SSR

  
  // 书写 SSR 友好的代码

  // 服务端的响应性
  // 组件生命周期钩子
  // 访问平台持有 API
  // 激活不匹配
  // 自定义指令
  // Teleports
  


</script>

<template>

  <div>123</div>

</template>

<style scoped>

</style>
