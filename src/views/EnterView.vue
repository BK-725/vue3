<script setup>
  import { ref } from 'vue'

  const message = ref('');

  // 复选框
  const checked = ref(false);

  // 多行文本
  const textMessage = ref('');

  // 复选框
  const checkedNew = ref(true);
  // 复选框 —— 多个值
  const arrayMessage = ref([])

  // 单选按钮
  const picked = ref(false);

  // 选择器
  const selected = ref('');
</script>

<template>
  <div>
    <!-- 表单中，需要将表单输入框内容同步给 js 中相应的变量。手动连接值绑定和更改事件监听器很麻烦 -->
    <input 
      :value="text" 
      @input="event => text = event.target.value"
    />

    <!-- v-model 的用法 -->
    <p>Message is: {{ message }}</p>
    <input 
      v-model="message"
      placeholder="edit me"
    />

    <!-- 复选框 -->
    <input 
      type="checkbox"
      id="checkbox"
      v-model="checked"
    />
    <label for="checkbox">{{ checked }}</label>

    <!-- 多行文本 -->
    <div>message is :</div>
    <p>{{ textMessage }}</p>
    <textarea 
      cols="30" 
      rows="10"
      v-model="textMessage"
    ></textarea>

    <!-- 复选框 -->
    <div>
      <input 
        id="checkboxNew"
        type="checkbox"
        v-model="checkedNew"
      />
      <label for="checkboxNew">{{ checkedNew }}</label>
    </div>

    <!-- 复选框 —— 多个复选框 -->
    <div>Checked names: {{ arrayMessage }}</div>
    <input 
      type="checkbox" 
      id="jack"
      value="Jack"
      v-model="arrayMessage"
    />
    <label for="jack">Jack</label>

    <input 
      type="checkbox" 
      id="john"
      value="John"
      v-model="arrayMessage"
    />
    <label for="john">John</label>

    <input 
      type="checkbox" 
      id="mike"
      value="Mike"
      v-model="arrayMessage"
    />
    <label for="mike">Mike</label>

    <!-- 单选按钮 -->
    <div>picked is name: {{ picked }}</div>
    <input 
      type="radio"
      id="one"
      value="One"
      v-model="picked"
    />
    <label for="one">One</label>

    <input 
      type="radio"
      id="two"
      value="Two"
      v-model="picked"
    />
    <label for="two">Two</label>

    <!-- 选择器 -->
    <div>Select {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <!-- 多选，绑定到一个数组中 -->
    <div>Select {{ selected }}</div>
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

  </div>
</template>

<style scoped>


</style>
