<!-- src/components/MyComponent.vue -->
<template>
  <el-table :data="tableData">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <!-- 自定义按钮列 -->
    <el-table-column label="操作">
      <template #default="scope">
        <el-button type="primary">Primary</el-button>
      </template>
    </el-table-column>
    <!-- 自定义输入框列 -->
    <el-table-column label="自定义输入">
      <template #default="scope">
        <el-input v-model="scope.row.customInput" placeholder="请输入"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="品牌制造商">
      <template #default="scope">
        <el-switch v-model="scope.row.Brandnamemanufacturer" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  { name: '张三', age: 28, customInput: '',Brandnamemanufacturer: '' },
  { name: '李四', age: 32, customInput: '',Brandnamemanufacturer: '' },
]);

const value1 = ref(true)


const handleClick = (row) => {
  console.log(`点击了${row.name}的按钮`);
};
</script>

<style scoped>
.my-component {
  background-color: lightblue;
  padding: 20px;
  border-radius: 5px;
}
</style>