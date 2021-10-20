import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  build: {
    // transpile: ['@apollo/client']
  },
  plugins: ['~/plugins/vue-apollo.js']
})
