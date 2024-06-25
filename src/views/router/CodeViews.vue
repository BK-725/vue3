<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
  } from 'vue'

  import { 
    useRoute,
    useRouter,
    createRouter,
    createWebHashHistory
  } from 'vue-router'

  const router = useRouter()
  
  function onRouter1 () {
    // // 字符串路径
    // router.push('/introduce')

    // // 带有路径的对象
    // router.push({ path: '/introduce' })

    // 命名的路由，并加上参数，让路由建立 url
    // router.push({ name: 'dynamic', params: { username: 'eduardo' } })

    // 带查询参数，结果是 /dynamic?plan=private
    // router.push({ path: '/dynamic', query: { plan: 'private' } })

    // 带 hash，结果是 /dynamic#team
    // router.push({ path: '/dynamic', hash: '#team' })


    // 替换当前位置
    // 相当于无历史状态了
    // router.push({ path: '/dynamic', replace: true })

    // 横跨历史
    // // 向前移动一条记录，与 router.forward() 类似
    // router.go(1)

    // 返回一条记录，与 router.back() 类似
    // router.go(-1)

    // 前进 3 条记录
    // router.go(3)

    // 篡改历史
    
  }


  
</script>

<template>
  <div>路由 —— 编程式路由</div>

  <div @click="onRouter1">
    <!-- 字符串路径 -->
    带有路径的对象
  </div>

</template>

<style scoped>

</style>
