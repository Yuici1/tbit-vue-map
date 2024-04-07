# 使用

## 定义全局地图 key

```js
// src/main.js
// 高德地图
window.__AMAPKEY__ = '你的key'
// 腾讯地图
window.__TMAPKEY__ = '你的key'
```

## 创建地图

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
