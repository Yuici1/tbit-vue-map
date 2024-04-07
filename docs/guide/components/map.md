# tbit-map 地图

## 基础用法

```vue
<template>
  <div style="width: 90vw; height: 100vh">
    <tbit-map :map-type="mapType"></tbit-map>
  </div>
</template>

<script setup>
import { tbitMap } from 'tbit-vue-map'
import { ref } from 'vue'

const TbitMapRef = ref()
const mapType = ref('AMap')
</script>
```

## API

| 名称     | 说明                                              | 类型                                 | 默认值 |
| -------- | ------------------------------------------------- | ------------------------------------ | ------ |
| mapType  | 地图类型 <br /> AMap:高德地图<br /> TMap:腾讯地图 | String                               | 'AMap' |
| position | DOM 的地理位置                                    | `{ [key: string]: TMap.LatLngData }` |        |
| offset   | DOM 的偏移量                                      | Number[]                             |        |
