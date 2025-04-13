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

    i18n: {
        defaultLocale: "zh_tw",
        locales: [
            { code: "en", name: "English", file: "en.json" },
            { code: "zh_tw", name: "中文", file: "zh_tw.json" },
        ],
    },

    modules: [
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/scripts",
        "@unocss/nuxt",
        "@nuxtjs/i18n",
    ],
})