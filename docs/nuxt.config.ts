// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },modules: [
    "nuxt-particles",
    "@nuxt/ui",
    "nuxt-svgo",
  ],
  /*routeRules: {
    "/": { isr: true, prerender: true },
  },*/
  css: ["~/assets/main.scss"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    storageKey: "mockline-color-mode"
  },
  svgo: {
    autoImportPath: "./assets/logo/"
  },
})
