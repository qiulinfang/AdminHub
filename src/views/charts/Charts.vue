<template>
  <ShareDataset></ShareDataset>
  <NightingaleChart></NightingaleChart>
  <BasicRadarChart></BasicRadarChart>
  <BasicBar></BasicBar>
</template>

<script setup>
import BasicBar from '@/components/charts/BasicBar.vue';
import BasicRadarChart from '@/components/charts/BasicRadarChart.vue';
import NightingaleChart from '@/components/charts/NightingaleChart.vue';
import ShareDataset from '@/components/charts/ShareDataset.vue';
</script>