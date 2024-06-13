<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
    <el-menu-item index="1-1">
        <el-icon>
          <location />
        </el-icon>
        <router-link :to="{ name: 'Charts', }">首页</router-link>
      </el-menu-item>
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>权限测试页</span>
      </template>
      <el-menu-item index="3-1">
        <router-link :to="{ name: 'Charts', }">页面权限</router-link>
      </el-menu-item>
      <el-menu-item index="3-2">
        <router-link :to="{ name: 'B', }">指令权限</router-link>
      </el-menu-item>
      <el-menu-item index="3-3">
        <router-link :to="{ name: 'C' }">角色权限</router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>引导页</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>图标</template>
    </el-menu-item>
    <el-sub-menu index="7">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>组件</span>
      </template>
      <el-menu-item index="7-1">
        <router-link :to="{ name: 'Charts', }">富文本编辑器</router-link>
      </el-menu-item>
      <el-menu-item index="7-2">
        <router-link :to="{ name: 'B', }">Markdown</router-link>
      </el-menu-item>
      <el-menu-item index="7-3">
        <router-link :to="{ name: 'C' }">Json编辑器</router-link>
      </el-menu-item>
      <el-menu-item index="7-4">
        <router-link :to="{ name: 'C' }">Splitpane</router-link>
      </el-menu-item>
      <el-menu-item index="7-5">
        <router-link :to="{ name: 'C' }">头像上传</router-link>
      </el-menu-item>
      <el-menu-item index="7-6">
        <router-link :to="{ name: 'C' }">Dropzone</router-link>
      </el-menu-item>
      <el-menu-item index="7-7">
        <router-link :to="{ name: 'C' }">Sticky</router-link>
      </el-menu-item>
      <el-menu-item index="7-8">
        <router-link :to="{ name: 'C' }">Count To</router-link>
      </el-menu-item>
      <el-menu-item index="7-9">
        <router-link :to="{ name: 'C' }">小组件</router-link>
      </el-menu-item>
      <el-menu-item index="7-10">
        <router-link :to="{ name: 'C' }">返回顶部</router-link>
      </el-menu-item>
      <el-menu-item index="7-11">
        <router-link :to="{ name: 'C' }">拖拽 Dialog</router-link>
      </el-menu-item>
      <el-menu-item index="7-12">
        <router-link :to="{ name: 'C' }">拖拽Select</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'C' }">列表拖转</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'C' }">可拓展看板</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'C' }">图表</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'C' }">键盘图表</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'C' }">折线图</router-link>
      </el-menu-item>
      <el-menu-item index="7-13">
        <router-link :to="{ name: 'C' }">混合图表</router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="8">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>图表</template>
    </el-menu-item>
    <el-menu-item index="9">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>路由嵌套</template>
    </el-menu-item>
    <el-sub-menu index="10">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Table</span>
      </template>
      <el-menu-item index="10-1">
        <router-link :to="{ name: 'Charts', }">动态Table</router-link>
      </el-menu-item>
      <el-menu-item index="10-2">
        <router-link :to="{ name: 'B', }">拖拽Table</router-link>
      </el-menu-item>
      <el-menu-item index="10-3">
        <router-link :to="{ name: 'C' }">Table内编辑</router-link>
      </el-menu-item>
      <el-menu-item index="10-3">
        <router-link :to="{ name: 'C' }">综合 Table</router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="11">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>错误页面</template>
    </el-menu-item>
    <el-menu-item index="12">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>错误日志</template>
    </el-menu-item>
    <el-sub-menu index="13">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Table</span>
      </template>
      <el-menu-item index="13-1">
        <router-link :to="{ name: 'Charts', }">导出Excel</router-link>
      </el-menu-item>
      <el-menu-item index="13-2">
        <router-link :to="{ name: 'B', }">导出已选择项</router-link>
      </el-menu-item>
      <el-menu-item index="13-3">
        <router-link :to="{ name: 'C' }">导出 多级表头</router-link>
      </el-menu-item>
      <el-menu-item index="13-4">
        <router-link :to="{ name: 'C' }">上传Excel</router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="14">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>Zip</template>
    </el-menu-item>
    <el-menu-item index="15">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>PDF</template>
    </el-menu-item>
    <el-menu-item index="16">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>换肤</template>
    </el-menu-item>
    <el-menu-item index="17">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>Clipboard</template>
    </el-menu-item>
    <el-menu-item index="18">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>国际化</template>
    </el-menu-item>
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
