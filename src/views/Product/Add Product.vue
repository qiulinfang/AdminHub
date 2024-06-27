<template>
  <el-steps :active="activeStep" style="max-width: 600px" finish-status="success">
    <el-step title="基本信息" description="商品名称、描述" />
    <el-step title="商品详情" description="图片、规格" />
    <el-step title="价格设置" description="售价、库存" />
    <el-step title="完成" description="预览并提交" />
  </el-steps>

  <div v-if="activeStep === 0">
    <!-- 基本信息表单 -->
    <el-form label-position="top">
      <el-form-item label="商品分类:">
        <div class="m-4">
          <el-cascader v-model="goodsCategory" :options="options" @change="handleChange" />
        </div>
      </el-form-item>
      <el-form-item label="商品名称: ">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="副标题:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="商品品牌: ">
        <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
          <el-option v-for="item in optionsArtNo" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="商品介绍:">
        <el-input v-model="textarea" style="width: 240px" :rows="2" type="textarea" placeholder="Please input" />
      </el-form-item>
      <el-form-item label="商品货号:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="商品售价:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="市场价:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="商品库存:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="计量单位:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="商品重量:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="排序:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
    </el-form>
  </div>

  <div v-else-if="activeStep === 1">
    <el-form label-position="top">
      <el-form-item label="赠送积分:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="赠送成长值:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="积分购买限制:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="预告商品:">
        <el-input v-model="previewGgoods" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="商品上架:">
        <el-switch v-model="newStock" />
      </el-form-item>
      <el-form-item label="商品推荐:">
        新品：<el-switch v-model="newProduct" />
        推荐：<el-switch v-model="recommend" />
      </el-form-item>
      <el-form-item label="服务保证:">
        <div>
          <el-checkbox v-model="worryFreeReturn" label="无忧退货" size="large" />
          <el-checkbox v-model="quickReturn" label="快速退款" size="large" />
          <el-checkbox v-model="freeShipping" label="免费包邮" size="large" />
        </div>
      </el-form-item>
      <el-form-item label="详细页标题: ">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="详细页描述:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="商品关键字:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="商品备注:">
        <el-input v-model="productName" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="选择优惠方式:">
        <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="无优惠" name="first">
          </el-tab-pane>
          <el-tab-pane label="特惠促销" name="second">
            <div class="demo-datetime-picker">
              <div class="block">
                <span class="demonstration">开始时间:</span>
                <el-date-picker v-model="startTime" type="datetime" placeholder="Select date and time" />
              </div>
              <div class="block">
                <span class="demonstration">结束时间:</span>
                <el-date-picker v-model="endTime" type="datetime" placeholder="Select date and time" />
              </div>
              <div class="block">
                <span class="demonstration">促销价格:</span>
                <el-input v-model="promotionPrice" style="width: 240px" placeholder="Please input" />
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="会员价格" name="third">
            <div>
              <span>黄金会员:</span>
              <el-input v-model="goldMemberPrice" style="width: 240px" placeholder="Please input" />
            </div>
            <div>
              <span>白金会员:</span>
              <el-input v-model="platinumMembershipPrice" style="width: 240px" placeholder="Please input" />
            </div>
            <div>
              <span>钻石会员:</span>
              <el-input v-model="diamondMembershipPrice" style="width: 240px" placeholder="Please input" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="阶梯价格" name="fourth">
            <el-table :data="rows" style="width: 100%">
              <el-table-column label="数量" width="180">
                <template #default="{ row }">
                  <el-input v-model="row.quantity" placeholder="请输入数量" />
                </template>
              </el-table-column>
              <el-table-column label="折扣" width="180">
                <template #default="{ row }">
                  <el-input v-model="row.discount" placeholder="请输入折扣" />
                </template>
              </el-table-column>
              <el-table-column label="操作" width="120">
                <template #default="{ $index }">
                  <el-button link type="primary" size="small" @click="deleteRow($index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button type="primary" @click="addRow">添加</el-button>
          </el-tab-pane>
          <el-tab-pane label="满减价格" name="fourth">
          </el-tab-pane>
        </el-tabs>
      </el-form-item>
    </el-form>
  </div>

  <div v-else-if="activeStep === 2">
    属性类型:
    <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    商品规格:
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary">Primary</el-button>
    商品参数:
    商品相册:
    <el-upload v-model:file-list="fileList" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <el-icon>
        <Plus />
      </el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    商品详情:
  </div>

  <div v-else>
    <!-- 完成页面，可以是预览页面或提交按钮 -->
    <p>商品创建完成，请预览并提交。</p>
    <el-button type="primary" @click="submitForm">提交</el-button>
  </div>
  <el-button style="margin-top: 12px" @click="next">Next step</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeStep = ref(0); // 初始化当前激活的步骤


const goodsCategory = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]


const optionsArtNo = [
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
const textarea = ref('')

const previewGgoods = ref(false)
const newStock = ref(false)
const newProduct = ref(false)
const recommend = ref(false)
const worryFreeReturn = ref(false)
const quickReturn = ref(false)
const freeShipping = ref(false)

const activeName = ref('first')

const startTime = ref('')
const endTime = ref('')
const promotionPrice = ref('')

const goldMemberPrice = ref(0)
const platinumMembershipPrice = ref(0)
const diamondMembershipPrice = ref(0)



const next = () => {
  if (activeStep.value++ > 2) activeStep.value = 0
}


// 数据模型
const rows = ref([
  { quantity: '', discount: '' },
]);

// 添加一行
const addRow = () => {
  rows.value.push({ quantity: '', discount: '' });
};

// 删除一行
const deleteRow = (index) => {
  if (rows.value.length > 1) {
    rows.value.splice(index, 1);
  }
};

import { Plus } from '@element-plus/icons-vue'

import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'plant-1.png',
    url: '/images/plant-1.png',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'plant-2.png',
    url: '/images/plant-2.png',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'figure-1.png',
    url: '/images/figure-1.png',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'figure-2.png',
    url: '/images/figure-2.png',
  },
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}


const content = ref('') // 初始化编辑器内容
const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['clean'],
    ['image'], // 图片上传按钮，默认情况下需要自行实现上传逻辑
  ],
  imageResize: {}, // 如果你安装了quill-image-resize-module，这里可以配置
}

const onEditorChange = (newValue) => {
  // 编辑器内容发生变化时的处理
  console.log('editor content:', newValue)
}
</script>


<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}


.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-datetime-picker .block:last-child {
  border-right: none;
}

.demo-datetime-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>