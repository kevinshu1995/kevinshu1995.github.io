// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    app: {
        head: {
            title: "許文修 | Wen-Hsiu Hsu",
            titleTemplate: "%s | 許文修 | Wen-Hsiu Hsu",
            link: [
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
    },

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

    routeRules: {
        "/api/github/**": { proxy: "https://api.github.com/**", swr: 60 * 10 },
    },

    gtag: {
        id: "G-X0H1DGJMM1",
    },

    modules: [
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/scripts",
        "@unocss/nuxt",
        "@nuxtjs/i18n",
        "radix-vue/nuxt",
        "nuxt-gtag",
    ],
})
