<script setup>
  import { 
    ref, 
    watch,
    reactive, 
    computed,
    onMounted
  } from 'vue'

  // 在组合式 API 中，我们可以使用 watch 函数在每次响应式状态发生变化时触发回调函数
  const question = ref('')
  const answer   = ref('Questions usually contain a question mark. ;-)')
  const loading  = ref(false)
  const source = ref('')
  const state = ref({
    someObject: ''
  })

  // 可以直接侦听一个 ref
  watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes('?')) {
      loading.value = true
      answer.value = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        answer.value = (await res.json()).answer
      } catch (error) {
        answer.value = 'Error! Could not reach the API. ' + error
      } finally {
        loading.value = false
      }
    }
  })

  const x = ref(0)
  const y = ref(0)

  // 单个 ref
  watch(x, (newX) => {
    console.log(`x is ${newX}`)
  })

  // getter 函数
  watch(
    () => x.value + y.value,
    (sum) => {
      console.log(`sum of x + y is: ${sum}`)
    }
  )

  // 多个来源组成的数组
  watch([x, () => y.value], ([newX, newY]) => {
    console.log(`x is ${newX} and y is ${newY}`)
  })

  // 深层侦听器
  const obj = reactive({
    count: 0
  })
  watch(obj, (newValue, oldValue) => {
    // 在嵌套的属性变更时触发
    // 注意：newValue 此处和 oldValue 是相等的
    // 因为它们是同一个对象
  })
  obj.count++

  // 你也可以在上面的例子显示地加上 deep 选项，强制转成深层侦听器
  watch(() => {
    state.someObject,
    (newValue, oldValue) => {
      // 注意：newValue 此处和 oldValue 是相等的
      // 除非 state.someObject 被整个替换
    },
    { deep: true }
  })

  // 即时回调的侦听器
  // watch 默认是懒执行的，仅当数据源发生变化时才会执行回调。
  // 但是我们可以通过传入： immediate: true 选项强制侦听器立即执行一次
  watch(
    source,
    (newValue, oldValue) => {
      // 立即执行，且当 “ source ” 改变时再次执行
    },
    { immediate: true }
  )

  // 一次性的侦听器
  watch(
    source,
    (newValue, oldValue) => {

    },
    { once: true }
  )
  

</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
</template>


<style scoped>

</style>
