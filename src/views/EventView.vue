<script setup>
  import { ref } from 'vue'

  // 内联事件处理器
  const count = ref(0);

  function add () {
    count.value++
  }

  // 方法事件处理器
  const name = ref('vue');

  function get (e) {
    alert(`hello ${name.value}`)

    if (e) {
      alert(e.target.tagName)
    }
  }

  // 在内联处理器中调用方法
  function say (test) {
    alert(test)
  }

  // 在内联事件处理器中访问事件参数
  function sayNew (message, e) {
    alert(message)
    alert(e.target.tagName)
  }

  // 事件修饰符
  // .stop：单击事件停止传递
  // .prevent：提交不再重新加载页面
  // .self：event.target 是元素本身时才会触发事件处理器
  // .capture：添加事件监听器时，使用 `capture` 捕获模式
  // .once：点击事件最多被触发一次
  // .passive：滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成

  // 按键修饰符
  function submit() {
    alert("提交")
  }

  // 常用按键别名
  // .enter
  // .tab
  // .delete (捕获“Delete”和“Backspace”两个按键)
  // .esc
  // .space
  // .up
  // .down
  // .left
  // .right

</script>

<template>
  <!--  监听事件 -->
  <!-- 可以使用 v-on（@） 指令来监听 DOM 事件，并在事件触发时执行对应的 js 方法 -->
  <div>123</div>

  <!-- 内联事件处理器 -->
  <button @click="add">{{ count }}</button>

  <!-- 方法事件处理器 -->
  <button @click="get">get</button>

  <!-- 在内联处理器中调用方法 -->
  <button @click="say('aaa')">在内联处理器中调用方法</button>
  <button @click="say('bbb')">在内联处理器中调用方法2</button>

  <!-- 在内联事件处理器中访问事件参数 -->
  <button @click="sayNew('test', $event)">在内联事件处理器中访问事件参数</button>

  <!-- 事件修饰符 -->
  <div @click.stop="say"></div>
  <!-- 还可以链式操作 -->
  <div @click.stop.prevent="newSay"></div>

  <!-- 按键修饰符 -->
  <input @keyup.enter="submit" />
</template>

<style scoped>


</style>
