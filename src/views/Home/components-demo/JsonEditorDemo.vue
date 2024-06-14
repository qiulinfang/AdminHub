<template>
  <div>
    <JsonEditor :value="jsonData" @input="handleInput" :options="editorOptions" />
  </div>
</template>

<script setup>
import JsonEditor from 'json-editor-vue3';
import { ref,reactive } from 'vue'

// 初始 JSON 数据
const jsonData = ref({
  name: 'John Doe',
  age: 30,
  isMarried: false,
});

// 编辑器配置选项
const editorOptions = reactive({
  mode: 'code', // 默认显示模式，可选值：code, form, tree, view, text
  modes: ['code', 'form', 'tree', 'view', 'text'], // 可切换的模式列表
});

// 处理输入事件
function handleInput(value) {
  jsonData.value = value;
}
</script>