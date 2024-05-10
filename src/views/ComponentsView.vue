<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
    watchEffect
  } from 'vue'

  import A from '@/components/AAA.vue'
  import B from '@/components/BBB.vue'
  import C from '@/components/CCC.vue'

  // 使用组件
  import ButtonTemponents from '@/components/ButtonTemponents.vue';

  const current = ref('A')
  const currentArr = {
    A,
    B,
    C
  }

  const name = ref(1);

  function onEnlarge() {
    name.value++
  }

  function isShowComponent (item) {
    current.value = item
  }

</script>

<template>

  <div>123</div>
  <!-- 使用组件 -->
  <ButtonTemponents title="bbbb" />
  <ButtonTemponents title="cccc" />

  <!-- 监听事件 -->
  <!-- $emit -->
  <div :style="{ fontSize: name + 'em' }">
    <ButtonTemponents 
      title="aaaa" 
      name="2" 
      @enlarge="onEnlarge" 
    />
  </div>

  <!-- 通过插槽来分配内容（子组件） -->

  <!-- 动态组件 -->
  <button
    v-for="(_, item) in currentArr"
    :key="item"
    @click="isShowComponent(item)"
  >{{ item }}</button>

  <component :is="currentArr[current]"></component>

  <!-- DOM 内模板解析注意事项 -->
  
</template>


<style scoped>

</style>
