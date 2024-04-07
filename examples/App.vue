<template>
  <div style="width: 90vw; height: 100vh; display: flex">
    <tbit-map ref="tbitMapRef" :map-type="mapType"></tbit-map>
    <button @click="handleChangeMaptype">切换地图</button>
  </div>
</template>

<script setup>
import tbitMap from '../packages/map/index'
import { onMounted, ref, nextTick } from 'vue'

const tbitMapRef = ref()
const mapType = ref('AMap')
const handleChangeMaptype = () => {
  if (mapType.value === 'AMap') {
    mapType.value = 'TMap'
  } else {
    mapType.value = 'AMap'
  }
  console.log(tbitMapRef.value.mapIns)
}
onMounted(() => {
  nextTick(() => {})
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
