<script setup>
  import { 
    reactive, 
    ref, 
    computed 
  } from 'vue'

  import StyleView from '../components/styleTest.vue'
  
  const isActive = ref(true)

  function onActive () {
    isActive.value = !isActive.value
  }

  // :class 可以绑定对象
  const classObj = reactive({
    activity: true,
    'aaaa': false
  })

  // :class 可以绑定计算属性
  const onComputed = computed(() => ({
    'activeComp': true,
    text: false
  }))

  // :class 绑定数组
  const classArr1 = ref('activity1')
  const classArr2 = ref('activity2')

  // 绑定内联样式
  const activeColor = ref('red')
  const fontSize = ref(30)

  // 如果直接绑定一个对象，这样的写法更加简洁
  const arrStyle = reactive({
    color: 'blue', 
    fontSize: '30px'
  })

</script>

<template>
  <main>

    <!-- 绑定 HTML class -->
    <!-- :class 也可以和 class 共存 -->
    <div 
      class="test"
      :class="{ active: isActive }"
      @click="onActive"
    >1</div>

    <!-- :class 可以绑定对象 -->
    <div :class="classObj">123</div>

    <!-- :class 可以绑定计算属性 -->
    <div :class="onComputed">333</div>

    <!-- :class 绑定数组 -->
    <div :class="[classArr1, classArr2]">123</div>

    <!-- 组件上绑定样式 -->
    <StyleView class="aaa" :class="{ activity: isActive }" />

    <!-- 绑定内联样式（fontSize 也支持 font-size 这种写法） -->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">123</div>

    <!-- 直接绑定一个样式通常来说更加的简洁 -->
    <div :style="arrStyle">345</div>

    <!-- 如果样式值多的话只取最后一个值 -->
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">456</div>
  </main>
</template>


<style scoped>
.active {
  color:red;
}

.activity {
  color: blue;
}

.activeComp {
  color: green;
}

.activity1 {
  color: antiquewhite;
}

.activity2 {
  color: aqua;
}


</style>
