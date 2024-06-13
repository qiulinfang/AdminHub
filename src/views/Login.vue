<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" placeholder="Enter your username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password">
      </div>
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter(); // 创建一个路由实例
const route = useRoute(); // 获取当前的路由对象

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
  if (username.value === '' || password.value === '') {
    errorMessage.value = 'Please fill in all fields';
    return;
  }

  const isLoginSuccessful = username.value === 'admin' && password.value === 'admin';
  if (isLoginSuccessful) {
    errorMessage.value = '';
    localStorage.setItem('user-token', 'your-token-here');
    // 跳转到后台管理页面
    router.push('/');
  } else {
    errorMessage.value = 'Invalid username or password';
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

.error-message {
  color: red;
}
</style>