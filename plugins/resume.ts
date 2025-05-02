import type { ResumeState } from "@/types/state"
import type { Icon } from "@/types/resume"

type Gist = {
    files: {
        "resume_en.json": {
            content: string
        }
        "resume_zh_TW.json": {
            content: string
        }
        "icon.json": {
            content: string
        }
    }
}

export default defineNuxtPlugin(async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig()
    const { gistId } = runtimeConfig.public.resume

    const iconState = useState<Icon>("icon", () => ({}))

    const resumeState = useState<ResumeState>("resume", () => ({
        en: null,
        zh_tw: null,
    }))

    const { data, error } = await useAsyncData<Gist>(
        "resume",
        async () => {
            return await $fetch(`/api/github/gists/${gistId}`)
        },
        {
            getCachedData: (key) => {
                const data = nuxtApp.isHydrating
                    ? nuxtApp.payload.data[key]
                    : nuxtApp.static.data[key]

                if (!data) {
                    return
                }

                return data
            },
        },
    )

    if (data.value) {
        resumeState.value.en = JSON.parse(
            data.value.files["resume_en.json"].content,
        )
        resumeState.value.zh_tw = JSON.parse(
            data.value.files["resume_zh_TW.json"].content,
        )
        iconState.value = JSON.parse(data.value.files["icon.json"].content)
    } else {
        console.error("Failed to fetch resume data.", error)
    }
})
