// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/tailwindcss",
  ],
  fonts: {
    families: [
      { name: "Pacifico", provider: "google", global: true },
      { name: "Nunito", provider: "google", global: true },
      { name: "Cormorant", provider: "google", global: true },
      { name: "Caveat", provider: "google", global: true },
    ],
  },
});
