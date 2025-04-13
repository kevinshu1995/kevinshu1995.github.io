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

    const hasFetched = useState("hasFetched", () => false)

    const iconState = useState<Icon>("icon", () => ({}))

    const resumeState = useState<ResumeState>("resume", () => ({
        en: null,
        zh_tw: null,
    }))

    try {
        if (hasFetched.value === false) {
            const { data } = await useFetch<Gist>(
                `https://api.github.com/gists/${gistId}`,
            )
            if (data.value) {
                if (data.value) {
                    resumeState.value.en = JSON.parse(
                        data.value.files["resume_en.json"].content,
                    )
                    resumeState.value.zh_tw = JSON.parse(
                        data.value.files["resume_zh_TW.json"].content,
                    )
                    iconState.value = JSON.parse(
                        data.value.files["icon.json"].content,
                    )
                }
                hasFetched.value = true
            } else {
                console.error("Failed to fetch resume data.")
            }
        } else {
            console.log("Resume data already fetched.")
        }
    } catch (error) {
        console.error("Error fetching resume data:", error)
    }
})
