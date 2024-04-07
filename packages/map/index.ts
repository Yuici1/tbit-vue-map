import tbitMap from './src/index'

tbitMap.install = function (Vue: any) {
  // 注册组件
  Vue.component('tbit-map', tbitMap)
}

export default tbitMap
