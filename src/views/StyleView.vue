<script setup>
  import { ref } from 'vue'
  
  const isActive = ref(true)

  function onActive () {
    isActive.value = !isActive.value
  }

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
  </main>
</template>


<style scoped>
.active {
  color:red;
}


</style>
