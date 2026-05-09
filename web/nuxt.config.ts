export default defineNuxtConfig({
  compatibilityDate: '2026-05-09',
  ssr: true,
  // GH Pages 子路徑：build 時若部署到 username.github.io/sldies，要設 baseURL '/sldies/'。
  // 用 custom domain 時保持 '/'。先用環境變數控制。
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  typescript: {
    strict: true,
  },
})
