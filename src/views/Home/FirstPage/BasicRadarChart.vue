<template>
  <div ref="chartRef" class="chart-container" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

// 创建图表容器的引用
const chartRef = ref(null);
let chartInstance = null;

// 在组件挂载后初始化图表
onMounted(() => {
  chartInstance = echarts.init(chartRef.value);
  setChartOptions();
});

// 组件卸载时清理图表实例
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
  }
});

// 设置图表配置
const setChartOptions = () => {
  const option = {
    title: {
      text: 'Basic Radar Chart'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };
  chartInstance.setOption(option);
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px;
}
</style>