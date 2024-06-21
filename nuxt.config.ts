// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // pages: true,
  modules: [
    // "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    // "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "nuxt-icon",
    "nuxt-lodash"
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app: {
    head: {
      script: [
        {src: "https://js.stripe.com/v3/", defer: true}
      ],
    }
  }
})
