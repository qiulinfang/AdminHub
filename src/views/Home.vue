<template>
  <div class="flex-container">
    <div class="column-left">
      <HelloWorld msg="Vite + Vue"/>
    </div>
    <div class="column-right">
      <HeaderCom></HeaderCom>
      <BreadCrumb></BreadCrumb>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
  /* 启用 Flexbox 布局 */
  justify-content: space-between;
  /* 控制主轴上的元素间距 */
  flex-wrap: wrap;
  /* 如果需要，允许元素换行 */
}


.column-left {
  flex: none;
  /* 不允许列拉伸或压缩 */
  width: fit-content;
  /* 列宽度适应内容 */
  padding: 10px;
  background-color: #f1f1f1;
}

.column-right {
  flex: 1;
  /* 填充剩余空间 */
  padding: 10px;
  background-color: #f1f1f1;
  min-width: 0;
  /* 确保列可以缩小到 0 宽度 */
}
</style>
