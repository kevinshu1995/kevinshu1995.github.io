declare module "nuxt/schema" {
    interface RuntimeConfig {}
    interface PublicRuntimeConfig {
        resume: {
            en: string
            zh_TW: string
        }
    }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
