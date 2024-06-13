<template>
  <div ref="chartRef" class="chart-container" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

// 创建一个引用，指向图表的DOM元素
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

// 设置图表的配置选项
const setChartOptions = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
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