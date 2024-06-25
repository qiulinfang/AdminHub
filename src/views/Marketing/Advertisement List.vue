<!-- src/components/MyComponent.vue -->
<template>
  <div class="my-component">
    <h3>Hello from MyComponent!</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('This is Advertisement List');
</script>

<style scoped>
.my-component {
  background-color: lightblue;
  padding: 20px;
  border-radius: 5px;
}
</style>