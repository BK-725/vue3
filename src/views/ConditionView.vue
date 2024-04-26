<script setup>
  import { 
    reactive, 
    ref, 
    computed 
  } from 'vue'
  
  // v-if && v-else
  const awesome = ref(true)
  
  function reverse () {
    awesome.value = !awesome.value
  }

  // v-show
  const show = ref(true)

</script>

<template>
  <main>
    <!-- v-if && v-else && v-else-if -->
    <div v-if="awesome">123</div>
    <div v-else>321</div>
    <button @click="reverse">反转</button>

    <!-- 在 template 上使用 v-if -->
    <template v-if="awesome">
      <div>123</div>
    </template>

    <!-- v-show -->
    <!-- v-show 不支持 template 元素上使用，也不能和 v-else 搭配使用 -->
    <div v-show="show">123</div>

    <!-- v-if 和 v-show：需要频繁切换就使用 v-show ，如果运行时绑定条件很少改变，则使用 v-if 更合适 -->

    <!-- 当 v-if 和 v-for 同时存在一个元素上的时候，v-if 首先被执行 -->
  </main>
</template>


<style scoped>

</style>
