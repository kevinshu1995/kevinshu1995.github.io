<template>
    <div class="mt-30 bg-neutral-100">
        <div class="container mx-auto px-4 h-full pt-10 space-y-16">
            <div class="flex gap-4 items-center">
                <!-- <Icon name="bytesize:mail" class="size-10" /> -->
                <div class="flex flex-col">
                    <div class="flex items-center gap-2 font-bold">
                        <p class="text-5 uppercase">
                            {{ i18n === "en" ? "Contact me" : "聯絡我" }}
                        </p>
                    </div>
                    <div class="flex justify-end items-end gap-2">
                        <a
                            class="font-bold flex items-center gap-6 underline text-5"
                            :href="email.url"
                        >
                            <span>{{ email.username }}</span>
                        </a>
                        <button
                            class="size-7 rounded-full cursor-pointer hover:bg-neutral-800 hover:text-white transition"
                        >
                            <Icon name="mdi:content-copy" class="size-4 mt-1" />
                        </button>
                    </div>
                </div>
            </div>
            <ul
                class="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 justify-end flex-wrap"
            >
                <li v-for="social in socials" class="h-30">
                    <a
                        :href="social.url"
                        class="flex flex-col gap-2 bg-white p-3 h-full w-full"
                        target="_blank"
                    >
                        <Icon
                            :name="`simple-icons:${social.network}`"
                            class="size-5"
                        />
                        <span
                            class="flex justify-between w-full items-center mt-auto"
                        >
                            <span class="capitalize text-3">{{
                                social.network
                            }}</span>
                            <Icon
                                name="mdi:arrow-top-right"
                                class="size-3 translate-y-px opacity-0"
                            />
                        </span>
                    </a>
                </li>
            </ul>

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
</script>
