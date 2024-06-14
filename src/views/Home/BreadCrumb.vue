<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index">
      <router-link v-if="item.redirect" :to="item.redirect">
        {{ item.meta.title }}
      </router-link>
      <span v-else>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const breadcrumbItems = computed(() => {
  const route = router.currentRoute.value;
  let matched = route.matched.filter(item => item.meta && item.meta.breadcrumb);
  matched = matched.map((item, index) => {
    // if (index === matched.length - 1 && item.children && item.children.length > 0) {
    //   return item.children[0];
    // }
    return item;
  });
  return matched;
});
</script>
``