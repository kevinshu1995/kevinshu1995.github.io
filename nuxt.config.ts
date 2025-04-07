// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    runtimeConfig: {
        public: {
            resume: {
                en: "https://gist.githubusercontent.com/kevinshu1995/b5a572372312fe91f0f36721e9d15007/raw/5185278857f2f506623abace9db63b3441eea20c/resume_en.json",
                zh_TW: "https://gist.githubusercontent.com/kevinshu1995/b5a572372312fe91f0f36721e9d15007/raw/5185278857f2f506623abace9db63b3441eea20c/resume_zh_TW.json",
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
