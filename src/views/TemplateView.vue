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
  const input = ref(null);

  const list = ref([
    {
      id: 1,
      name: 'aaa'
    },
    {
      id: 2,
      name: 'bbb'
    },
    {
      id: 3,
      name: 'ccc'
    },
    {
      id: 4,
      name: 'ddd'
    },
    {
      id: 5,
      name: 'eee'
    }
  ]);

  onMounted(() => {
    input.value.focus()
  })

  // 如果你需要侦听一个模板引用 ref 的变化，确保考虑到其值为 null 的情况
  watchEffect(() => {
  if (input.value) {
    input.value.focus();
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }

  // v-for 中模板的引用
  // 当在 v-for 中使用模板引用时，对应的 ref 中包含的值是一个数组
  // 它将元素被挂载后包含对应整个列表的所有元素
  
})

</script>

<template>
  <div>
    <input ref="input" />

    <div v-for="(item, index) in list" :key="index" ref="list">
      {{ item.name }}
    </div>
  </div>
</template>


<style scoped>

</style>
