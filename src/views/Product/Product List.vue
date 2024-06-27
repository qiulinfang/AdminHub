<!-- src/components/MyComponent.vue -->
<template>
  <div>
    <div>
      <span>输入搜索：</span>
      <el-input v-model="inputSearch" style="width: 240px" placeholder="Please input" />
    </div>
    <div>
      <span>商品货号：</span>
      <el-input v-model="productCode" style="width: 240px" placeholder="Please input" />

    </div>
    <div>
      <span>商品分类：</span>
      <el-select v-model="productCategory" placeholder="Select" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div>
      <span>商品品牌：</span>
      <el-select v-model="productBrand" placeholder="Select" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div>
      <span>上架状态：</span>
      <el-select v-model="shelfStatus" placeholder="Select" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div>
      <span>审核状态：</span>
      <el-select v-model="reviewStatus" placeholder="Select" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <el-button type="primary">重置</el-button>
    <el-button type="primary">查询结果</el-button>
  </div>
  <div>
    <el-button type="primary">添加</el-button>

  </div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="date" label="编号" width="180" />
    <el-table-column prop="date" label="商品名称" width="180" />
    <el-table-column prop="date" label="价格/货号" width="180" />
    <el-table-column prop="date" label="标签" width="180" />
    <el-table-column prop="date" label="排序" width="180" />
    <el-table-column prop="date" label="SKU库存" width="180" />
    <el-table-column prop="date" label="销量" width="180" />
    <el-table-column prop="date" label="审核状态" width="180" />
    <el-table-column prop="date" label="操作" width="180" />
  </el-table>

  <div>
    <el-select v-model="value" placeholder="Select" style="width: 240px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-button type="primary">Primary</el-button>
  </div>
  <div>
    <span>共20条</span>
    <div>
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-pagination background layout="prev, pager, next" :total="1000" />
      <span>前往<el-input v-model="input" style="width: 240px" placeholder="Please input" />页</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('This is Product List.');
const inputSearch = ref('')
const productCode = ref('')
const productCategory = ref('')
const productBrand = ref('')
const shelfStatus = ref('')
const reviewStatus = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style scoped>
.my-component {
  background-color: lightblue;
  padding: 20px;
  border-radius: 5px;
}
</style>