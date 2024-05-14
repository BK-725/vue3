<script setup>
  import { 
    reactive, 
    ref, 
    computed,
    onMounted,
    watchEffect
  } from 'vue'

  import testProps from '@/components/testProps.vue'

  // 如果声明了 script setup 的话：props 使用 defineProps() 宏来声明
  
  // 是使用数组的方式
  // const props = defineProps(['foo']);

  // 也可以使用对象的方式
  // const propsNum = defineProps({
  //   name: String,
  //   age: Number
  // });
  // console.log(props.foo);
  // console.log(propsNum.name);
  // console.log(propsNum.age);

  // 如果没有使用 setup 的话
  // export default {
  //   props: ['foo'],
  //   setup(props) {
  //     console.log(props.foo)
  //   }
  // }

  const string = ref('aaa');
  
  const number = ref(123);
  
  const arr = ref(['aaa', 'bbb']);

  const obj = ref({
    ccc: 'ccc',
    ddd: 'ddd'
  });
  
  function countNumber () {
    string.value = 'bbb'
  };

  // 传递 prop 的细节 ----- Prop名字格式

  // 所有的 props 都是单向数据流,不能被更改
  // 1, 如果想要更改的话, props 被用于传入初始值,而子组件想在之后
  // 将其作为一个局部的数据属性
  // 例如 如下:
  // const counter = ref(props.aaaa);

  // 2, 需要对传入的 prop 值做进一步转换
  const counterTrim = computed(() => props.bbb.trim().toLowerCase());


  // 更改对象 / 数组类型的 props 
  // 大多数情况下,父组件应该抛出一个事件来通知父组件做出改变

  // Props 校验
  defineProps({
    // 基础类型检查
    propA: Number,
    // required 必传
    propC: {
      type: String,
      required: true
    },
    // 必传,但是为空的字符串
    type: [String, null],


    // 运行时类型检查
    // String
    // Number
    // Boolean
    // Array
    // Object
    // Date
    // Function
    // Symbol
    // Error


  });


</script>


<template>
  <div>123</div>
  <!-- 关于 props 传值 -->
  
  <button @click="countNumber">更改aaa</button>

  <testProps
    :string="string"
    :number="number"
    :arr="arr"
    :obj="obj"
  />

</template>


<style scoped>

</style>
