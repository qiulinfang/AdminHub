<template>
  <div class="centered-title">
    {{ title }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Component Name B');

</script>

<style scoped>
.centered-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
}
</style>