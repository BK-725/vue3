<!-- 
  <script setup> 中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用
  你可以理解为模板是在同一作用域内声明的一个 JavaScript 函数——它自然可以访问与
  它一起声明的所有内容。
 -->

<script setup>

// 声明响应式状态 
// ref()
import { 
  nextTick, 
  reactive, 
  ref 
} from 'vue'

const count = ref(0)

// DOM 更新时机：当你修改响应式状态时，DOM 会被自动更新，但是需要注意的是，DOM 
// 更新不是同步的。Vue 会在“next tick” 更新周期中缓冲所有状态的修改，以确保不
// 管你尽兴多少次状态修改，每个组件都只会更新一次。

async function onAdd() {
  count.value++

  await nextTick()
  // 现在 DOM 已经更新了
}

// 深层响应性
const obj = ref({
  nested: { count: 0 },
  arr: [ 'foo', 'fee' ]
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('faa')
}

// 另一个种声明响应式状态：reactive() —— 使对象本身具有响应性
const state = reactive({ countNew: 0 })

function onReactiveAdd () {
  state.countNew++
}


</script>

<template>
  <div @click="onAdd()">{{ count }}</div>
  
  <div @click="mutateDeeply()">{{ obj }}</div>

  <div @click="onReactiveAdd()">{{ state }}</div>
</template>


<style scoped>

</style>
