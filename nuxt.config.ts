// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["vuetify/lib/styles/main.sass"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  imports: {
    dirs: ["composables"],
  },
  build: {
    transpile: ["vuetify"],
  },
});
