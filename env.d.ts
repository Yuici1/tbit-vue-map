declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare interface Window {
  Vue: any
  __AMAPKEY__: string
  __TMAPKEY__: string
}
