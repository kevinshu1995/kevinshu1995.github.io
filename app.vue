<template>
    <div class="text-neutral-600">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <BaseFooter />
    </div>
</template>

<script setup lang="ts">
import type { Resume, Icon } from "@/types/resume"
import "@unocss/reset/sanitize/sanitize.css"
import "@unocss/reset/sanitize/assets.css"
import "assets/index.css"

// init state
useLocale()

const runtimeConfig = useRuntimeConfig()
const { gistId } = runtimeConfig.public.resume

const resumeState = useState<{ [key: string]: Resume | null }>(
    "resume",
    () => ({
        en: null,
        tw: null,
    }),
)
const iconState = useState<Icon>("icon", () => ({}))

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

await callOnce(async () => {
    const { data } = await useFetch<Gist>(
        `https://api.github.com/gists/${gistId}`,
    )
    try {
        if (data.value) {
            resumeState.value.en = JSON.parse(
                data.value.files["resume_en.json"].content,
            )
            resumeState.value.tw = JSON.parse(
                data.value.files["resume_zh_TW.json"].content,
            )
            iconState.value = JSON.parse(data.value.files["icon.json"].content)
        }
    } catch (error) {
        console.error("Failed to parse resume data:", error)
    }
})
</script>
