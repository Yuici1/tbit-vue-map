import AMapLoader from '@amap/amap-jsapi-loader'
import { Ref } from 'vue'
const loadMap = (type: mapType, el: Ref<HTMLDivElement | null>) => {
  return new Promise((resolve) => {
    if (type === 'AMap') {
      if (window.__AMAPKEY__) {
        AMapLoader.load({
          key: window.__AMAPKEY__, //设置您的key
          version: '2.0'
        }).then((Amap: typeof AMap) => {
          const map: AMap.Map = new Amap.Map(el.value as HTMLDivElement, {
            center: [116.397428, 39.90923],
            zoom: 13
          })
          resolve([Amap, map])
        })
      } else {
        console.warn('请设置window.__AMAPKEY__')
      }
    } else if (type === 'TMap') {
      if (window.__TMAPKEY__) {
        new Promise((res) => {
          if (window.TMap) {
            res(window.TMap)
            return
          }
          window.tmapCallback = function tmapCallback() {
            res(window.TMap)
          }

          const script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = `https://map.qq.com/api/gljs?libraries=tools,visualization&v=2.exp&key=${window.__TMAPKEY__}&callback=tmapCallback`
          document.body.appendChild(script)
        }).then(() => {
          const map = new TMap.Map(el.value as HTMLElement, {
            center: new TMap.LatLng(39.90923, 116.397428), //设置地图中心点坐标
            zoom: 13, //设置地图缩放级别
            viewMode: '2D'
          })
          resolve([TMap, map])
        })
      } else {
        console.warn('请设置window.__TMAPKEY__')
      }
    }
  })
}

export default loadMap
