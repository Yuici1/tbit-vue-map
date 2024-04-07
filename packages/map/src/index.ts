import { defineComponent, h, PropType, shallowRef, ref, nextTick, watch } from 'vue'
import loadMap from '../../utils/loadMap'

export default defineComponent({
  name: 'tbit-map',
  props: {
    mapType: {
      type: String as PropType<mapType>,
      default: 'AMap'
    }
  },
  setup(props) {
    const map = shallowRef<AMap.Map | TMap.Map | null>(null)
    const mapIns = shallowRef<any>(null)
    const mapRef = ref<HTMLDivElement | null>(null)

    watch(
      () => props.mapType,
      () => {
        nextTick(() => {
          map.value && map.value.destroy()
          loadMap(props.mapType, mapRef).then((res: any) => {
            mapIns.value = res[0]
            map.value = res[1]
          })
        })
      },
      {
        immediate: true
      }
    )

    return {
      map,
      mapRef,
      mapIns
    }
  },
  render() {
    const createHtmlInfo = (key: mapType) => {
      return {
        ref: 'mapRef',
        key,
        style: {
          width: '100%',
          height: '100%'
        }
      }
    }
    return h(
      'div',
      createHtmlInfo(this.mapType),
      this.$slots.default && this.map ? this.$slots.default() : []
    )
  }
})
