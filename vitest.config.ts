import { defineVitestConfig } from '@nuxt/test-utils/config'
import { fileURLToPath } from 'node:url'
import { resolve } from 'path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineVitestConfig({
  test: {
    alias: {
      '@': resolve(__dirname, './'),
      '~': resolve(__dirname, './'),
    },
  },
})