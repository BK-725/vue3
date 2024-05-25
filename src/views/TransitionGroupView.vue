<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
    watchEffect
  } from 'vue'

  const itemArr = ref([1, 2, 3, 4, 5]);

  function onAddNumber () {
    let itemArrLength = itemArr.value.length + 1
    itemArr.value.splice(Math.floor(Math.random() * itemArr.value.length), 0, itemArrLength)
  }
  function onMoveNumber () {
    let randomNumber = Math.floor(Math.random() * itemArr.value.length)
    itemArr.value.splice(itemArr.value[randomNumber], 1)
  }

  

</script>

<template>
  <div>
    <!-- 和 Transition 的区别 -->
      <!-- 默认情况下，它不会渲染一个容器元素。但你可以通过传入 tag prop 来指定一个元素作为容器元素来渲染。

      过渡模式在这里不可用，因为我们不再是在互斥的元素之间进行切换。

      列表中的每个元素都必须有一个独一无二的 key attribute。

      CSS 过渡 class 会被应用在列表内的元素上，而不是容器元素上。 -->

      <!-- 进入 / 离开动画 -->
      <div>
        <button @click="onAddNumber">在任意位置添加一项</button>
        <button @click="onMoveNumber">在任意位置删除一项</button>
      </div>
      <TransitionGroup name="list" tag="ul">
        <li v-for="item in itemArr" :key="item">
          {{ item }}
        </li>
      </TransitionGroup>

      <!-- 移动动画 -->

      <!-- 渐进延迟列表动画 -->

  </div>
  
</template>


<style scoped>

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
  /* .list-leave-active {
    position: absolute;
  } */
</style>
