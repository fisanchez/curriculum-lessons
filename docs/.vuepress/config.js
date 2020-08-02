const { description } = require('../../package')

module.exports = {
  markdown:{
    lineNumbers: false,
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'), {enabled: true})
    }
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'JSAC Curriculum Lessons',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    logo: 'https://static.wixstatic.com/media/b27321_7bd0b0b0993143d1aace7c1509dde80c~mv2.png/v1/fill/w_638,h_290,al_c,q_85,usm_0.66_1.00_0.01/jsac-color.webp',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Student Notes', link: '/student-notes/'},
    ],
    sidebar: {
      '/student-notes/':[
        {
          title: 'Student Notes',
          collapsable: true,
          children: [
            '',
            'wk-02-vars-functions',
            'wk-03-dom-01',
            'wk-04-arrays-objects-01'
          ]
        }
      ],
      '/instructor-notes/': [
        {
          title: 'Instructor Notes',
          collapsable: true,
          children:[
            '',
            'wk-01-setup',
            'wk-02-vars-and-functions',
            'wk-03-the-dom-01',
            'wk-04-arrays-objects-01'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
};
