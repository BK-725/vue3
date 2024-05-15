<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
    watchEffect
  } from 'vue'

  import onEventSon from '@/components/onEventSon.vue'

    // 声明触发的事件
    // defineEmits() 宏不能在子函数中使用
  // defineEmits(
  //   ['inFocus', 'submit']
  // )

  const emit = defineEmits({
    // 没有校验
    click: null,

    // 校验 submit 事件
    submit: ({ emit, password }) => {
      if (emit && password) {
        return true
      } else {
        console.log('error');
        return false
      }
    }

  })

  // 事件校验
  function submitForm(email, password) {
    emit('submit', { email, password })
  }

  const once = ref(1)

  function callback () {
    once.value += 1
  }

  function onCountAdd (n) {
    console.log('n', n);

    once.value += n
  }



</script>

<template>
  <div>123</div>
  
  <!-- 事件参数 -->
  <onEventSon
    @onEventSon="callback"
    @onCountSon="onCountAdd"
  />

  <div>{{ once }}</div>
</template>


<style scoped>

</style>
