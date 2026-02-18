// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-16',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxt/eslint', 'nuxt-icons'],
  nuxtIcons: {path: '~/app/assets/icons'}
})