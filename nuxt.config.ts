// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },modules: [
    "nuxt-particles",
    "@nuxt/ui",
    "nuxt-svgo",
  ],
  css: ["~/assets/main.scss"],
  svgo: {
    autoImportPath: "./assets/logo/"
  },
})
