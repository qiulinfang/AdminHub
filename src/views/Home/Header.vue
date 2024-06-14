<template>
  <div class="container">
    <div class="left-container">
      <el-radio-group v-model="isCollapseHeaderCom" style="margin-bottom: 20px">
        <el-radio-button :value="false" @click='updateData'>expand</el-radio-button>
        <el-radio-button :value="true" @click='updateData'>collapse</el-radio-button>
      </el-radio-group>
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="flex flex-wrap items-center">
      <el-dropdown>
        <el-button type="primary">
          Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown split-button type="primary">
        Dropdown List
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-button type="primary" @click="toggleDark" :icon="Edit" />
      <el-switch v-model="value1" :active-action-icon="View" :inactive-action-icon="Hide" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
import BreadCrumb from './BreadCrumb.vue';
import { useDark, useToggle } from '@vueuse/core';

import { Hide, View } from '@element-plus/icons-vue'

const value1 = ref(true)
const store = useStore();

let isCollapseHeaderCom = ref(false)
const updateData = () => {
  console.log('click', isCollapseHeaderCom.value)
  store.commit('setisCollapse', isCollapseHeaderCom.value);
};

// 创建一个 ref 来存储暗黑模式的状态
const isDark = useDark();

// 创建一个函数来切换暗黑模式
const toggleDark = useToggle(isDark);

</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.left-container {
  display: flex;
}

.example-showcase .el-dropdown+.el-dropdown {
  margin-left: 15px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
