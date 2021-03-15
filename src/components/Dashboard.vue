<template>
  <div id="chart">
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './charts/BarChart.vue'
import LineChart from './API/CallAPI.vue'
export default {
  components: {
    BarChart,
    LineChart
  }
}
</script>

<style>
#chart {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
