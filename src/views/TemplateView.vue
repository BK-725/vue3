<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
    watchEffect
  } from 'vue'
  
  // 声明一个 ref 来存放该元素的引用
  // 必须和模板里的 ref 同名
  const input = ref(null)

  onMounted(() => {
    input.value.focus()
  })

  // 如果你需要侦听一个模板引用 ref 的变化，确保考虑到其值为 null 的情况
  watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})

</script>

<template>
  <div>
    <input ref="input" />
  </div>
</template>


<style scoped>

</style>
