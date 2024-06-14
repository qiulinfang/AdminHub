<template>
  <div class="flex-container">
    <div class="column column-left">
      <div class="scrollable-content">
        <SideBar msg="Vite + Vue" />
      </div>
    </div>
    <div class="column column-right">
      <div class="scrollable-content">
        <Header></Header>
        <Tab></Tab>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from './SideBar.vue';
import Header from './Header.vue';
import Tab from './Tab.vue';


</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.flex-container {
  display: flex;
  height: 100vh;
}
.column {
  overflow-y: auto; /* 启用垂直滚动 */
  box-sizing: border-box;
}

/* 隐藏滚动条本身，但仍然允许滚动 */
::-webkit-scrollbar { 
    width: 0;  /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
}

.column-left {
  background-color: #f0f0f0;
}

.column-right {
  flex: 1;
  background-color: #e0e0e0;
}
</style>
