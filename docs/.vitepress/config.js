import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `tbit-vue-map文档`,
  description: 'tbit-vue-map文档',
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://adminv3test.uqbike.cn/img/login/default_avatar.png?v=9f0d12a3c0&hs=7tzfn'
      }
    ]
  ],

  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false

  markdown: {
    lineNumbers: false // 是否显示行数，默认false
  },

  themeConfig: {
    logo: 'http://adminv3test.uqbike.cn/img/login/default_avatar.png?v=9f0d12a3c0&hs=7tzfn',

    // socialLinks: [
    //   // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //   // { icon: 'twitter', link: '...' },
    // ],

    search: {
      provider: 'local'
    },

    nav: [{ text: '指引', link: '/guide' }],

    sidebar: [
      {
        text: '指引',
        items: [
          { text: '快速开始', link: '/guide/index' },
          { text: '安装', link: '/guide/install' },
          { text: '使用', link: '/guide/usage' },
          {
            text: '组件',
            items: [{ text: 'tbit-map', link: '/guide/components/map' }],
            collapsed: false
          }
        ]
      }
    ]
  }
})
