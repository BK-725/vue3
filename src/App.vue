<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
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
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
