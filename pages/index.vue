<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-5 gap-4 border-x border-neutral-100">
            <div
                class="col-start-1 col-end-6 lg:col-start-2 lg:col-end-5 lg:border-x lg:border-neutral-100"
            >
                <HomeLanding />
                <HomeWork />
                <HomeProject class="mt-20" />
                <HomeSkills class="mt-20" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Resume, Icon } from "@/types/resume"
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

<style>
html {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(#f1f1f1 1px, transparent 1px);
    background-size: 16px 16px;
    background-repeat: repeat;
}
</style>
