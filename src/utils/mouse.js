import {
  ref,
  onMounted,
  onUnmounted
} from 'vue'

// 函数也可以嵌套
export function useMouse () {
  // 被组合式函数封装和管理的状态
  const x = ref(0)
  const y = ref(0)

  // 组合式函数可以随时更改其状态
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 一个组合式函数可以挂靠再所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // 返回管理的状态
  return {
    x,
    y
  }
}