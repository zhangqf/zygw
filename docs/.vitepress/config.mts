import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "公司官网",
  description: "公司简介",
  head: [['meta', { name: '中昱公司简介', content: '中昱' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/index' },
      { text: 'featureA', link: '/featureA' },
      { text: 'featureB', link: '/featureB' },
      { text: 'featureC', link: '/featureC' },
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    logo: 'static/logo.jpg',
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    lastUpdatedText: '最近更新时间',
    footer: {
      // message: 'Release under the MIT License',
      copyright: 'Copyright © 2020-2024 zhongyu.com'
    }
  },
  srcDir: './src',
  assetsDir: 'static',
  lastUpdated: true,
  markdown: {},
  vue: {}
})
