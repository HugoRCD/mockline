export default defineNuxtConfig({
  routeRules: {
    "/": { isr: true, prerender: true }
  },

  css: ["~/assets/style/main.scss"],

  devtools: { enabled: true },

  modules: [
    "nuxt-particles",
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-svgo"
  ],

  colorMode: {
    preference: "system",
    fallback: "dark",
    storageKey: "mockline-color-mode"
  },

  svgo: {
    autoImportPath: "./assets/logo/"
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }]
})
