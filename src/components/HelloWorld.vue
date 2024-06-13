<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">
          <router-link :to="{ name: 'A',}">Go to A</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link :to="{ name: 'B',}">Go to B</router-link>
        </el-menu-item>
        <el-menu-item index="1-3">
          <router-link :to="{ name: 'C'}">Go to C</router-link>
        </el-menu-item>
        <el-menu-item index="1-4">
          <router-link :to="{ name: 'Login'}">Go to Login</router-link>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon>
        <document />
      </el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref,computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore();
const isCollapse = computed(() => store.getters.getisCollapse);
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
