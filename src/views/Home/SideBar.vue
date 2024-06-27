<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
    <el-menu-item index="1-1">
      <el-icon>
        <location />
      </el-icon>
      <router-link :to="{ name: 'Product List', }">商品列表</router-link>
    </el-menu-item>
    
    <el-sub-menu index="7">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="7-1">
        <router-link :to="{ name: 'Product List', }">商品列表</router-link>
      </el-menu-item>
      <el-menu-item index="7-2">
        <router-link :to="{ name: 'Add Product', }">添加商品</router-link>
      </el-menu-item>
      <el-menu-item index="7-3">
        <router-link :to="{ name: 'Product Category' }">商品分类</router-link>
      </el-menu-item>
      <el-menu-item index="7-4">
        <router-link :to="{ name: 'Product Type' }">商品类型</router-link>
      </el-menu-item>
      <el-menu-item index="7-5">
        <router-link :to="{ name: 'Brand Management' }">品牌管理 </router-link>
      </el-menu-item>

    </el-sub-menu>
    <el-sub-menu>
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'Order List' }">订单列表</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'Order Settings' }">订单设置 </router-link>
      </el-menu-item>
      <el-menu-item index="7-6">
        <router-link :to="{ name: 'Return Request Handling' }">退货申请处理</router-link>
      </el-menu-item>
      <el-menu-item index="7-7">
        <router-link :to="{ name: 'Return Reason Settings' }">退货原因设置</router-link>
      </el-menu-item>

    </el-sub-menu>

    <el-sub-menu index="10">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>营销</span>
      </template>
      <el-menu-item index="7-8">
        <router-link :to="{ name: 'Flash Sale List' }">秒杀活动列表</router-link>
      </el-menu-item>
      <el-menu-item index="7-9">
        <router-link :to="{ name: 'Coupon List' }">优惠券列表</router-link>
      </el-menu-item>
      <el-menu-item index="7-10">
        <router-link :to="{ name: 'Brands Recommendation' }">品牌推荐</router-link>
      </el-menu-item>
      <el-menu-item index="7-11">
        <router-link :to="{ name: 'New Arrival Recommendations' }">新品推荐</router-link>
      </el-menu-item>
      <el-menu-item index="7-12">
        <router-link :to="{ name: 'Popularity Recommendations' }">人气推荐</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'Special Topic Recommendations' }">专题推荐</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'Advertisement List' }">广告列表</router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu>
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'User List' }">用户列表</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'Role List' }">角色列表 </router-link>
      </el-menu-item>
      <el-menu-item index="7-6">
        <router-link :to="{ name: 'Menu List' }">菜单列表</router-link>
      </el-menu-item>
      <el-menu-item index="7-7">
        <router-link :to="{ name: 'Resource List' }">资源列表</router-link>
      </el-menu-item>

    </el-sub-menu>

  </el-menu>
</template>

<script setup>
import { ref, computed } from 'vue'
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
