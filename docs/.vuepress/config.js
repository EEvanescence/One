import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
import { autoFrontmatterPlugin } from '@vuepress/plugin-auto-frontmatter'
import { replaceAssetsPlugin } from '@vuepress/plugin-replace-assets'
// import { iconPlugin } from '@vuepress/plugin-icon'

export default defineUserConfig({
  lang: 'fa-IR',
  title: 'One',
  description: 'Just A little bit of Bullsheet!!',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css',
      },
    ],

    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: 'anonymous',
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  theme: defaultTheme({
    logo: '/logo.png',

    navbar: [
      { text: 'خانه', link: '/' },
      { text: 'شروع سریع', link: '/get-started' },
      {
        text: 'GitHub',
        link: 'https://github.com/EEvanescence/One',
        target: '_blank',
      },
    ],

    sidebar: 'heading',

    themePlugins: {
    },

    editLink: true,
    docsRepo: 'https://github.com/EEvanescence/One',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':One/edit/:branch/:path',
    lastUpdated: true,
    contributors: true,
    locales: {
    '/': {
      selectLanguageName: 'فارسی',
      backToHome: 'بازگشت به خانه',
      openInNewWindow: 'در پنجره جدید باز شود',
      toggleColorMode: 'تغییر حالت رنگ',
      toggleSidebar: 'نمایش/مخفی کردن سایدبار',
      lastUpdated: 'آخرین به‌روزرسانی',
      contributors: 'مشارکت‌کنندگان',
      editLink: 'ویرایش این صفحه',
    }
  },
}),

  plugins: [
    photoSwipePlugin({
      // selector: '.content img'
    }),

    autoFrontmatterPlugin({
      filter: ['**/*.md'],
      handle: (data, context) => {
        if (!data.title) {
          const name = context.relativePath
            .replace(/\.md$/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\//g, ' → ')
          data.title = name.charAt(0).toUpperCase() + name.slice(1)
        }

        return data
      },
    }),

    replaceAssetsPlugin({
      image: 'https://cdn.example.com/images',
      media: 'https://cdn.example.com/media',
      // all: 'https://cdn.example.com'
    }),
  ],

  bundler: viteBundler(),
})
