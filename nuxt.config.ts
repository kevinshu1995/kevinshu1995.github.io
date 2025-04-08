// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    runtimeConfig: {
        public: {
            resume: {
                gistId: "b5a572372312fe91f0f36721e9d15007",
            },
        },
    },

    modules: [
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/scripts",
        "@unocss/nuxt",
    ],
})
