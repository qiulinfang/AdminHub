<template>
  <!-- 头部区域 -->
  <el-tabs v-model="activeTab" type="card" closable  @tab-click="handleClick" @contextmenu.prevent.native="openContextMenu($event)"  @tab-remove="tabRemove">
    <el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.title" :name="item.name"></el-tab-pane>
  </el-tabs>
  <el-dropdown ref="dropdown" @command="handleCommand" trigger="contextmenu" style="position: absolute">
    <span></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a" :icon="CircleClose">closeCurrent</el-dropdown-item>
        <el-dropdown-item command="b" :icon="CircleCloseFilled">closeOther</el-dropdown-item>
        <el-dropdown-item command="c" :icon="Back">closeLeft</el-dropdown-item>
        <el-dropdown-item command="d" :icon="Right">closeRight</el-dropdown-item>
        <el-dropdown-item command="e" :icon="DeleteFilled">closeAll</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeTab = ref('');
const tabList = ref([]);
const currentTabName = ref('');
const currentContextTab = ref('')

const addTab = (title, name, route) => {
  let tabExists = tabList.value.find((tab) => tab.name === name);
  if (!tabExists) {
    tabList.value.push({ title, name, route });
    activeTab.value = name;
  }
};

function tabRemove(targetTab) {
  let targetIndex = 0 //要关闭的tab的index    

  //先找到要删除的
  tabList.value.forEach((tab, index) => {
    if (tab.name == targetTab) {
      targetIndex = index
    }
  })
  //要关闭的是当前活跃的tab
  if (activeTab.value == targetTab) {
    const nextTab = tabList.value[targetIndex - 1] || tabList.value[targetIndex + 1]
    console.log(nextTab)
    activeTab.value = nextTab.name
    router.push(activeTab.value)
  }
  tabList.value.splice(targetIndex, 1)

}

//点击tab跳转路由
const handleClick = (tab) => {
  router.push(tab.paneName.toString())
}

//关闭指定tab
const removeTab = () => {
  //首页不能关闭
  if (currentContextTab.value === tabList.value[0].name) {
    return ElMessage.warning('工作台不能关闭 ！！！')
  }
  //获取当前选中的tab下标
  const current = tabList.value.findIndex(item => item.name === currentContextTab.value)
  //删除当前选中tab
  tabList.value.splice(current, 1);
  //判断当前下标和路由下标是否相同，是->跳转前一位路由
  if (index === current){
    router.push(tabList.value[index - 1].name)
  }
}

//关闭当前tab
const closeItem = () => {
  console.log(currentContextTab.value)
  if (currentContextTab.value === tabList.value[0].name) {
    return ElMessage.warning('工作台不能关闭 ！！！')
  }
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === currentContextTab.value)
  //获取当前选中的tab下标
  tabList.value.splice(index, 1);
  //跳转前一位路由
  router.push(tabList.value[index - 1].name)
}
//关闭其他tab
const closeOther = () => {
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === currentContextTab.value)
  //下表是否为0，是->删除0之后的所有数据
  if (index === 0) {
    tabList.value.splice(1);
  }
  //下表是否为1且集合长度大于2
  if (index === 1 && tabList.value.length > 2) {
    tabList.value.splice(2);
  }
  //下表大于1
  if (index > 1) {
    tabList.value.splice(1, index - 1);
    tabList.value.splice(2);
  }
}
//关闭左侧tab
const closeLeft = () => {
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === currentContextTab.value)
  //判断下表是否大于1
  if (index > 1) {
    tabList.value.splice(1, index - 1);
  }
}
//关闭右侧tab
const closeRight = () => {
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === currentContextTab.value)
  //判断下表是否小于总长度
  if (index < tabList.value.length - 1) {
    tabList.value.splice(index + 1, tabList.value.length - index);
  }
}
//关闭所有tab
const closeAll = () => {
  //判断总长度是否大于1
  if (tabList.value.length > 1) {
    tabList.value.splice(1);
  }
  //跳转首页
  router.push(tabList.value[0].name)
}

//下拉菜单dom
const dropdown = ref()
//打开下拉菜单并重新定位
const openContextMenu = (e) => {
  currentContextTab.value = e.srcElement.id.split('-')[1]
  dropdown.value.handleClose()
  setTimeout(() => {
    dropdown.value.$el.style.left = e.x + 'px'
    dropdown.value.$el.style.top = e.y + 'px'
    dropdown.value.handleOpen()
  }, 50)
}

//点击下拉菜单中的菜单
const handleCommand = (command) => {
  switch (command) {
    case 'a':
      closeItem()
      break
    case 'b':
      closeOther()
      break
    case 'c':
      closeLeft()
      break
    case 'd':
      closeRight()
      break
    case 'e':
      closeAll()
      break
  }
}

onMounted(() => {
  router.afterEach((to) => {
    addTab(to.meta.title || 'New Tab', to.name, to.path);
    currentTabName.value = to.name;
  });
});
</script>

<style>
.demo-tabList>.el-tabList__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>


