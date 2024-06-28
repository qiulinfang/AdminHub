<!-- src/components/MyComponent.vue -->
<template>
  <el-table :data="filteredData" style="width: 100%">
    <el-table-column prop="id" label="姓名"></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column prop="action" label="操作"></el-table-column>
    <el-table-column prop="custom_input" label="自定义输入"></el-table-column>
    <el-table-column prop="brand_manufacturer" label="品牌制造商"></el-table-column>
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.row.id)">
          Remove
        </el-button>
        <el-button link type="primary" size="small" @click.prevent="dialogVisible = true">
          Edit
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-form :model="newItem">
      <el-form-item label="id" >
        <el-input v-model="newItem.id" style="width: 240px" placeholder="Please input id" />
      </el-form-item>
      <el-form-item label="age" >
        <el-input v-model="newItem.age" style="width: 240px" placeholder="Please input age" />
      </el-form-item>
      <el-form-item label="action" >
        <el-input v-model="newItem.action" style="width: 240px" placeholder="Please input action custom_input" />
      </el-form-item>
      <el-form-item label="custom_input" >
        <el-input v-model="newItem.custom_input" style="width: 240px" placeholder="Please input" />
      </el-form-item>
      <el-form-item label="brand_manufacturer" >
        <el-input v-model="newItem.brand_manufacturer" style="width: 240px"
          placeholder="Please input brand_manufacturer" />
      </el-form-item>
    </el-form>
  <el-button type="primary" @click="addRow">Primary</el-button>
  <el-input v-model="searchKeyword" style="width: 240px" placeholder="查找内容" />
  <el-button type="primary" @click="searchItems">Primary</el-button>

  <!-- 模态框 -->
  <el-dialog v-model="dialogVisible" title="Edit Data">
    <el-form :model="newItem">
      <el-form-item label="id" >
        <el-input v-model="newItem.id" style="width: 240px" placeholder="Please input id" />
      </el-form-item>
      <el-form-item label="age" >
        <el-input v-model="newItem.age" style="width: 240px" placeholder="Please input age" />
      </el-form-item>
      <el-form-item label="action" >
        <el-input v-model="newItem.action" style="width: 240px" placeholder="Please input action custom_input" />
      </el-form-item>
      <el-form-item label="custom_input" >
        <el-input v-model="newItem.custom_input" style="width: 240px" placeholder="Please input" />
      </el-form-item>
      <el-form-item label="brand_manufacturer" >
        <el-input v-model="newItem.brand_manufacturer" style="width: 240px"
          placeholder="Please input brand_manufacturer" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateData">Confirm</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script setup>
import { ElTable } from 'element-plus'
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios';

const dataList = ref([]);
const filteredData = ref([]);
const searchKeyword = ref('');
const dialogVisible = ref(false);
const newItem = reactive({
  id: '',
  age: '',
  action: '',
  custom_input: '',
  brand_manufacturer: '',
})

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:3004/productCategory');
    dataList.value = response.data; // 将获取到的数据赋值给dataList
    filteredData.value = dataList.value;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

async function addRow() {
  try {
    const response = await axios.post('http://localhost:3004/productCategory', newItem);
    console.log('Data added successfully:', response.data);
    // 可能需要在此处更新UI或状态管理中的数据
    fetchData();
  } catch (error) {
    console.error('Error adding data:', error);
  }
};


async function deleteRow(itemId) {
  try {
    // 替换`your-endpoint`和`${itemId}`为实际的API端点和你要删除的项的ID
    const response = await axios.delete(`http://localhost:3004/productCategory/${itemId}`);
    console.log('Data deleted successfully:', response.data);

    // 如果你想在成功删除后刷新表格数据，可以在这里调用获取数据的方法
    await fetchData(); // 假设你有一个名为`fetchData`的方法来获取数据列表
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

async function updateData() {
  const { id, ...restData } = newItem;
  await axios.put(`http://localhost:3004/productCategory/${id}`, newItem);
  dialogVisible.value = false;
  fetchData(); // 刷新数据
}


function searchItems() {
  if (searchKeyword.value !== '') {
    filteredData.value = dataList.value.filter(item => {
      // 假设我们要根据'name'属性进行查找
      return item.id.includes(searchKeyword.value);
    });
  } else {
    // 如果搜索框为空，则显示所有数据
    filteredData.value = allData.value;
  }
};


onMounted(() => {
  fetchData();
});

</script>

<style scoped>
.my-component {
  background-color: lightblue;
  padding: 20px;
  border-radius: 5px;
}
</style>