const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh'
  },
  images: {
    domains: ['cdn.jsdelivr.net', 'github.com'],
  },
  // defaultShowCopyCode: true,
  // baseUrl: '/',
})
