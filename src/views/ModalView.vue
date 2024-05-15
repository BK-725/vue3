<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    defineModel
  } from 'vue'

  import ModalComponent from '@/components/ModalConponent.vue'

  const countModel = ref(1);

  const bookTitle = ref(123);

  const firstName = ref(111);
  const lastName = ref(222);

</script>

<template>
  <div>123</div>

  <!-- // 多个 v-modal 绑定 -->
  <ModalComponent
    v-model="countModel"
    v-model:title="bookTitle"
    v-model:firstName="firstName"
    v-model:lastName="lastName"
  />

  <!-- 处理 v-model 的修饰符 -->
  <!-- 参数：capitalize -->
  <ModalComponent
    v-model.capitalize="myText"
  />


</template>


<style scoped>

</style>
