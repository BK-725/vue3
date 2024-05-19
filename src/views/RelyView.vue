<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    defineModel,
    useAttrs,
    provide,
    inject
  } from 'vue'

  import RelyComponents from '@/components/RelyComponents.vue';

  // Provide（提供）
  // 要为组件后代提供数据，需要使用到 provide() 函数： 
  // 第二个提供地值可以是任意类型：比如一个 ref
  const count = ref(1)
  provide('number', count);

  // provide(/* 注入名字： */ 'message', /* 值：*/ 'hello!');

  // 应用程：Provide
  // 除了在组件中提供依赖，我们还可以在整个应用层面提供依赖
  // app.provide('message', 'hello');

  // inject（注入）
  // 要注入上层组件提供的数据，需要使用 inject() 函数
  // const message = inject('message');

  // 先提供  后注入
  

  // 注入默认值
  // 如果没有祖先组件提供 “message”，“value” 会是“这是默认值”
  // const value = inject('message', '这是默认值');

  // 在一些场景中，默认值可能需要通过调用一个函数或者初始化一个类取得
  // const newValue = inject('key', () => new ExpensiveCall(), true);

  // 和响应式数据配合使用
  // 在供给方中
  const location = ref('North Pole');
  
  function updateLocation () {
    location.value = 'South Pole'
  }

  provide('location',{
    location,
    updateLocation
  });

  

</script>

<template>
  <!-- <div>123123</div> -->

  <!-- Prop 逐级透传问题 -->
  <!-- 如果需要父组件向子组件传递 props 会逐级进行传递，这样链式比较多。除此之外就会用到 inject -->

  <!-- provide 和 inject 可以帮助解决这个问题 -->

  <RelyComponents></RelyComponents>
</template>


<style scoped>



</style>
