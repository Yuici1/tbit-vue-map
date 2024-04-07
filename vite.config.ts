// vite.config.ts
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' // pnpm add -D @vitejs/plugin-vue-jsx
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const resolve = (dir: string) => path.join(__dirname, dir)
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    dts({
      copyDtsFiles: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve('examples'),
      packages: resolve('packages')
    }
  },
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'packages/index.ts',
      name: 'tbit-vue-map',
      fileName: (format) => `tbit-vue-map.${format}.js`
    }
  }
})
