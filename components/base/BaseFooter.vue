<template>
    <div class="mt-30 bg-neutral-100">
        <div class="container mx-auto px-4 h-full pt-10 space-y-20">
            <div class="flex justify-center items-center">
                <p
                    class="font-bold text-9 tracking-widest whitespace-pre text-center p-4"
                >
                    <span class="text-12">“</span>
                    {{ motto }}
                    <span class="text-12">”</span>
                </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div></div>
                <div class="space-y-8">
                    <div class="flex gap-4 border-b border-b-neutral-200 pb-2">
                        <div class="flex flex-col">
                            <div class="flex justify-end items-end gap-2">
                                <a
                                    class="font-bold flex items-center gap-6 hover:underline text-7"
                                    :href="email.url"
                                >
                                    <span>{{ email.username }}</span>
                                </a>
                                <button
                                    class="size-7 rounded-full cursor-pointer hover:bg-neutral-800 hover:text-white transition"
                                    @click="copyEmail"
                                >
                                    <Icon
                                        name="mdi:content-copy"
                                        class="size-4 mt-1"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <ul class="flex flex-col justify-end flex-wrap gap-4">
                            <li
                                v-for="social in socials"
                                class="border-b border-b-neutral-200 pb-1"
                            >
                                <a
                                    :href="social.url"
                                    class="flex gap-1 items-center h-full w-full hover:underline group"
                                    target="_blank"
                                >
                                    <span class="flex gap-3 items-center">
                                        <Icon
                                            :name="`simple-icons:${social.network}`"
                                            class="size-5"
                                        />

                                        <span class="capitalize text-3">
                                            {{ social.network }}
                                        </span>
                                    </span>
                                    <Icon
                                        name="mdi:arrow-top-right"
                                        class="size-3"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <p
                class="flex items-center gap-1 text-3 py-4 border-t border-t-neutral-200"
            >
                <span>©</span>
                <span class="">{{ new Date().getFullYear() }}</span>
                <span>{{ nameEn }}</span>
                <span class="">{{ nameTw }}</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core"
import type { Resume } from "@/types/resume"
const resumeState = useState<{ en: Resume; tw: Resume }>("resume")
const i18n = useLocale()

const currentResume = computed(() => resumeState.value[i18n.value])

const nameEn = computed(() => `${resumeState.value.en.basics.name}`)
const nameTw = computed(() => `${resumeState.value.tw.basics.name}`)

const socials = computed(() => currentResume.value.basics.profiles)
const email = computed(() => ({
    network: "gmail",
    username: currentResume.value.basics.email,
    url: `mailto:${currentResume.value.basics.email}`,
}))

const motto = computed(() => {
    return i18n.value === "en"
        ? "Programming fills me with anticipation every day,\n making life exciting and fun with every idea."
        : "寫程式讓我每天都充滿期待，\n生活因每個點子而精彩有趣。"
})

const { copy } = useClipboard({ source: email.value.username })

function copyEmail() {
    copy()
}
</script>
