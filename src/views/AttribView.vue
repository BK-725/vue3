<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    defineModel,
    useAttrs
  } from 'vue'

  import AttributesComponents from '@/components/AttributesComponents.vue';


</script>

<template>
  <div>111</div>
  <!-- 透传，最常见的例子：class 、style 、id  -->
  <button>Click Me</button>

  <!-- 一个父组件使用了这个组件，传入了 class -->
  <AttributesComponents
    class="attribute_son"
    @click="Count"
  />

</template>


<style scoped>

.attribute_son {
  color: red;
}

</style>
