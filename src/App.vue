<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template class="content">
  <header>
    <div class="wrapper">
      <nav class="content_wrapper">
        <RouterLink to="/">01 - 模板语法</RouterLink>
        <RouterLink to="/about">02 - 响应式基础</RouterLink>
        <RouterLink to="/count">03 - 计算属性</RouterLink>
        <RouterLink to="/style">04 - Class 与 Style 绑定</RouterLink>
        <RouterLink to="/condition">05 - 条件渲染</RouterLink>
        <RouterLink to="/list">06 - 列表渲染</RouterLink>
        <RouterLink to="/event">07 - 事件处理</RouterLink>
        <RouterLink to="/enter">08 - 表单输入绑定</RouterLink>
        <RouterLink to="/cycle">09 - 生命周期</RouterLink>
        <RouterLink to="/watch">10 - 侦听器</RouterLink>
        <RouterLink to="/template">11 - 模板引用</RouterLink>
        <RouterLink to="/components">12 - 组件基础</RouterLink>
        <RouterLink to="/register">13 - 注册</RouterLink>
        <RouterLink to="/props">14 - Props</RouterLink>
        <RouterLink to="/event_new">15 - 事件</RouterLink>
        <RouterLink to="/modal_component">16 - 组件 v-modal</RouterLink>
        <RouterLink to="/attrib">17 - 组件 Attributes</RouterLink>
        <RouterLink to="/slot">18 - 插槽 Slots</RouterLink>
        <RouterLink to="/rely">19 - 依赖注入</RouterLink>
        <RouterLink to="/axios">20 - 异步组件</RouterLink>
        <RouterLink to="/combined">21 - 组合式函数</RouterLink>
        <RouterLink to="/customize">22 - 自定义指令</RouterLink>
        <RouterLink to="/plugin">23 - 插件</RouterLink>
        <RouterLink to="/transition">24 - Transition</RouterLink>
        <RouterLink to="/group">25 - TransitionGroup</RouterLink>
        <RouterLink to="/keep">26 - keepAlive</RouterLink>
        <RouterLink to="/teleport">27 - Teleport</RouterLink>
        <RouterLink to="/suspense">28 - Suspense</RouterLink>
        <RouterLink to="/single_file">29 - 单文件组件</RouterLink>
        <RouterLink to="/tool">30 - 工具链</RouterLink>
        <RouterLink to="/router">31 - 路由</RouterLink>
        <RouterLink to="/status">32 - 状态管理</RouterLink>
        <RouterLink to="/test">33 - 测试</RouterLink>
        <RouterLink to="/service">34 - 服务端渲染(SSR)</RouterLink>
        <RouterLink to="/deployment">35 - 生产部署</RouterLink>
        <RouterLink to="/performance">36 - 性能优化</RouterLink>
        <RouterLink to="/accessibility">37 - 无障碍访问</RouterLink>
        <RouterLink to="/safety">38 - 安全</RouterLink>
        <RouterLink to="/introduce">01 - 入门</RouterLink>
        <RouterLink to="/dynamic">02 - 动态路由匹配</RouterLink>
      </nav>
    </div>
  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped>

.content {
  display: flex;
}

.content_wrapper {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  height: 900px;
  overflow-y: auto;
}
</style>
