<script setup>
  import { ref, reactive, computed } from 'vue'

  const author = reactive({
    name: 'Johe',
    books:[
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  })

  // 一个计算属性
  // 计算属性的 ref 会在模板中自动解包，因此在模板表达式中引用时无需添加 .value
  const onComputed = computed(() => {
    return author.books.length > 0 ? 'yes' : 'no'
  })

  // 计算属性缓存 VS 方法
  // 计算属性：计算属性会基于其响应式依赖更新时才重新计算
  // 方法：方法每次都会执行，不会缓存

  // 可写计算属性
  // 一般来讲，计算属性默认是可读的，当你尝试修改一个计算属性时，你会收到一个运行时警告
  const firstName = ref('Hohn')
  const lastName = ref('Doe')

  const fullName = computed({
    // getter
    get () {
      return firstName + ' ' + lastName
    },
    set (newValue) {
      // 注意：这里使用的是解构赋值语法
      [firstName.value, lastName.value] = newValue
    }
  })

  
</script>

<template>
  <main>
    <!-- 基础示例 -->
    <div>{{ onComputed }}</div>
    <button @click="fullName">{{ firstName + ' ' + lastName}}</button>
    
  </main>
</template>


<style scoped>


</style>
