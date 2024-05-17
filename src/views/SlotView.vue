<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    defineModel,
    useAttrs
  } from 'vue'

  import SlotComponents from '@/components/SlotComponents.vue';

  // 理解插槽的另一种方式和下面 js 函数类似：
  // 父元素传入插槽内容
  FancyButton('Click me!')

  // FancyButton 在自己的模板中渲染插槽内容
  function FancyButton(slotContent) {
    return `<button class="fancy-btn">
        ${slotContent}
      </button>`
  }

</script>

<template>
  <div>111</div>

  <!-- 插槽内容与出口 -->
  <SlotComponents>
    Click Me
  </SlotComponents>

  <!-- // 渲染作用域 -->
  <!-- // 插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的 -->
  <span>{{ message }}</span>
  <FancyButton>{{ message }}</FancyButton>

  <!-- 具名插槽 -->
  <!-- 默认内容：在外部没有提供任何内容的情况下，可以为插槽指定默认内容 -->
  <!-- 这类带有 name 的插槽被称之为 具名插槽。 没有提供 name 的 <slot> 出口会被隐式地命名为 “default” -->
    <!--  -->

  <!-- <template v-slot:header></template> -->
  <!-- 可以简写为 -->
  <!-- <template #header></template> -->

  <div class="container">
    <header>
      <!-- 标题内容放这里 -->
    </header>
    <main>
      <!-- 主要内容放这里 -->
    </main>
    <footer>
      <!-- 底部内容放这里 -->
    </footer>
  </div>

  <!-- 插槽的内容 -->
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>

  <!-- 条件插槽 -->
  <!-- 条件插槽使用：$slot 来命名 -->
  <template v-if="$slots.header"></template>

  <!-- 动态插槽名 -->
  <!-- <template v-slot:[slotName]></template> -->
  <!-- <template #[slotName]></template> -->

  <!-- 作用域插槽 -->
  <SlotComponents v-slot="slotProps">
    {{ slotProps.text }} {{ slotProps.count }}
  </SlotComponents>

</template>


<style scoped>



</style>
