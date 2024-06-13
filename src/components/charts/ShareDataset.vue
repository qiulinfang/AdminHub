<template>
  <div ref="chartRef" class="chart-component" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';

// 定义图表容器的引用
const chartRef = ref(null);
let chartInstance = null;

// 在组件挂载后初始化图表
onMounted(() => {
  if (chartInstance === null) {
    chartInstance = echarts.init(chartRef.value);
    initChart();
  }
});

// 监听窗口大小变化，调整图表大小
let resizeHandler = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};
window.addEventListener('resize', resizeHandler);

// 清理函数，用于组件卸载时释放资源
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
  window.removeEventListener('resize', resizeHandler);
});

// 初始化图表的方法
function initChart() {
  setTimeout(() => {
    const option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
          }
        }
      ]
    };
    setChartOption(option);
  }, 0);
}

// 更新图表配置
function setChartOption(option) {
  if (chartInstance) {
    chartInstance.setOption(option);
  }
}

// 监听图表的'updateAxisPointer'事件
chartInstance?.on('updateAxisPointer', function (event) {
  const xAxisInfo = event.axesInfo[0];
  if (xAxisInfo) {
    const dimension = xAxisInfo.value + 1;
    chartInstance.setOption({
      series: {
        id: 'pie',
        label: {
          formatter: '{b}: {@[' + dimension + ']} ({d}%)'
        },
        encode: {
          value: dimension,
          tooltip: dimension
        }
      }
    });
  }
});
</script>

<style scoped>
.chart-component {
  width: 100%;
  height: 400px;
}
</style>