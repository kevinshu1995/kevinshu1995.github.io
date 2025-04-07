<template>
    <div class="container mx-auto px-4">
        <div class="-mx-4 grid grid-cols-4 gap-4">
            <div class="col-start-2 grid-col-span-2">
                <HomeLanding />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Resume } from "@/types/resume"
const runtimeConfig = useRuntimeConfig()
const { en, zh_TW } = runtimeConfig.public.resume

const resumeState = useState<{ [key: string]: Resume | null }>(
    "resume",
    () => ({
        en: null,
        tw: null,
    }),
)

await callOnce(async () => {
    const { data } = await useFetch<string>(en)
    if (data.value) resumeState.value.en = JSON.parse(data.value) as Resume
})

await callOnce(async () => {
    const { data } = await useFetch<string>(zh_TW)
    if (data.value) resumeState.value.tw = JSON.parse(data.value) as Resume
})
</script>
