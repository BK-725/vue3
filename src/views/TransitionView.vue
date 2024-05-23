<script setup>
  import { 
    reactive, 
    ref, 
    computed 
  } from 'vue'

  const show = ref(true);

  // JavaScript 钩子
  // <Transition
  //   @before-enter="onBeforeEnter"
  //   @enter="onEnter"
  //   @after-enter="onAfterEnter"
  //   @enter-cancelled="onEnterCancelled"
  //   @before-leave="onBeforeLeave"
  //   @leave="onLeave"
  //   @after-leave="onAfterLeave"
  //   @leave-cancelled="onLeaveCancelled"
  // >
  // </Transition>

  // 在元素被插入到 DOM 之前被调用
  // 用这个来设置元素的 "enter-from" 状态
  function onBeforeEnter(el) {}

  // 在元素被插入到 DOM 之后的下一帧被调用
  // 用这个来开始进入动画
  function onEnter(el, done) {
    // 调用回调函数 done 表示过渡结束
    // 如果与 CSS 结合使用，则这个回调是可选参数
    done()
  }

  // 当进入过渡完成时调用。
  function onAfterEnter(el) {}

  // 当进入过渡在完成之前被取消时调用
  function onEnterCancelled(el) {}

  // 在 leave 钩子之前调用
  // 大多数时候，你应该只会用到 leave 钩子
  function onBeforeLeave(el) {}

  // 在离开过渡开始时调用
  // 用这个来开始离开动画
  function onLeave(el, done) {
    // 调用回调函数 done 表示过渡结束
    // 如果与 CSS 结合使用，则这个回调是可选参数
    done()
  }

  // 在离开过渡完成、
  // 且元素已从 DOM 中移除时调用
  function onAfterLeave(el) {}

  // 仅在 v-show 过渡中可用
  function onLeaveCancelled(el) {}

  // 可复用过渡效果
  // <template>
  //   <!-- 包装内置的 Transition 组件 -->
  //   <Transition
  //     name="my-transition"
  //     @enter="onEnter"
  //     @leave="onLeave">
  //     <slot></slot> <!-- 向内传递插槽内容 -->
  //   </Transition>
  // </template>

  // 出现时过渡
  // 如果你想在某个节点初次渲染时应用一个过渡效果，你可以添加 appear prop：
  // <Transition appear>
  //   ...
  // </Transition>

</script>

<template>
  <!-- Transition -->
  <div>
    123
  </div>

  <button @click="show = !show">Toggle</button>

  <Transition>
    <div v-if="show">hello</div>
  </Transition>

  <!-- 基于 CSS 的过渡效果 -->
  <!-- CSS 过渡 class -->

  
  <!-- v-enter-from：进入动画的起始状态。 -->
  <!-- v-enter-active：进入动画的生效状态。 -->
  <!-- v-enter-to：进入动画的结束状态。 -->

  <!-- v-leave-from：离开动画的起始状态。 -->
  <!-- v-leave-active：离开动画的生效状态。 -->
  <!-- v-leave-to：离开动画的结束状态。 -->


  <!-- 为过渡效果命名 -->
  <!-- 添加一个 name 表示名字 -->
  <Transition name="fade">
    <div>123</div>
  </Transition>

  <!-- CSS 的 transition -->
  <Transition name="slide-fade">
    <p v-if="show">hello</p>
  </Transition>

  <!-- CSS 的 animation -->
  <Transition name="bounce">
    <p v-if="show" style="text-align: center;">
      Hello here is some bouncy text!
    </p>
  </Transition>

  <!-- 自定义过渡 class -->
  <!-- 假设你已经在页面中引入了 Animate.css -->
  <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <p v-if="show">hello</p>
  </Transition>

  <!-- 同时使用 transition 和 animation -->

  <!-- 深层级过渡与显式过渡时长 -->
  <Transition name="nested">
    <div v-if="show" class="outer">
      <div class="inner">
        Hello
      </div>
    </div>
  </Transition>

  <Transition>
    <button v-if="docState === 'saved'">Edit</button>
    <button v-else-if="docState === 'edited'">Save</button>
    <button v-else-if="docState === 'editing'">Cancel</button>
  </Transition>


  <!-- <Transition> 也可以作用于动态组件之间的切换： -->
  <Transition name="fade" mode="out-in">
    <component :is="activeComponent"></component>
  </Transition>

  <!-- 动态过渡 -->

  <!-- 使用 Key Attribute 过渡 -->

</template>

<style scoped>
  /* 下面我们会解释这些 class 是做什么的 */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  /* 添加 name 名字 ：fade */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


    /*
    进入和离开动画可以使用不同
    持续时间和速度曲线。
  */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  /* CSS 的 animation */
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }

  /*  */
  /* 应用于嵌套元素的规则 */
  .nested-enter-active .inner,
  .nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
  }

  .nested-enter-from .inner,
  .nested-leave-to .inner {
    transform: translateX(30px);
    opacity: 0;
  }

  /* 延迟嵌套元素的进入以获得交错效果 */
  .nested-enter-active .inner {
    transition-delay: 0.25s;
  }

</style>
