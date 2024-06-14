<template>
  <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="3" v-for="iconName in iconNames" :key="iconName">
          <el-card shadow="never">
            <el-icon :size="32">
              <component :is="iconName"></component>
            </el-icon>
            <div style="font-size: 10px;">{{ iconName }}</div>
          </el-card>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const iconNames = ref([]);

Object.keys(ElementPlusIconsVue).forEach((key) => {
  iconNames.value.push(key);
});
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-card {
  margin-bottom: 20px;
}
</style>
