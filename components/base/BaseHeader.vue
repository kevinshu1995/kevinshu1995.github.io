<template>
    <div
        class="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur text-neutral-500"
    >
        <div class="px-4">
            <div class="flex items-center py-4 sm:py-6 gap-4">
                <h1 class="hidden sm:block my-0">許文修 | Wen-Hsiu Hsu</h1>

                <div class="ml-auto flex gap-6 items-center">
                    <NuxtLink :to="$localePath('/resume')">
                        {{ $t("resume.title") }}
                    </NuxtLink>
                    <NuxtLink to="https://blog.hsiu.soy" target="_blank">
                        {{ $t("blog") }}
                        <Icon name="mdi:arrow-top-right" class="size-3" />
                    </NuxtLink>

                    <ul class="gap-4 hidden sm:flex" v-if="currentBasics">
                        <li v-for="profile in currentBasics.profiles">
                            <a
                                :href="profile.url"
                                class="flex items-center gap-2"
                                target="_blank"
                            >
                                <Icon
                                    :name="`simple-icons:${profile.network}`"
                                />
                            </a>
                        </li>
                    </ul>
                    <div class="border-l border-neutral-400 pl-4">
                        <PopoverRoot>
                            <PopoverTrigger class="flex items-center">
                                <Icon name="mdi:language" />
                                <Icon name="mdi:arrow-down-drop" />
                            </PopoverTrigger>
                            <!-- <PopoverAnchor /> -->
                            <PopoverPortal>
                                <PopoverContent
                                    side="bottom"
                                    align="end"
                                    :sideOffset="18"
                                    class="rounded-lg p-2 w-[120px] bg-white text-neutral-500 shadow border border-neutral-100 hover:scale-105 transition-all"
                                >
                                    <ul class="divide-neutral-200 divide-y-1">
                                        <li
                                            v-for="localeItem in locales.filter(
                                                ({ code }) => code !== locale,
                                            )"
                                            :key="localeItem.code"
                                        >
                                            <NuxtLink
                                                :class="[
                                                    'py-1 px-1 inline-block w-full',
                                                ]"
                                                :to="
                                                    $switchLocalePath(
                                                        localeItem.code,
                                                    )
                                                "
                                            >
                                                {{ localeItem.name }}

                                                <Icon
                                                    name="mdi:arrow-top-right"
                                                    class="size-3"
                                                />
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </PopoverContent>
                            </PopoverPortal>
                        </PopoverRoot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    PopoverArrow,
    PopoverContent,
    PopoverPortal,
    PopoverRoot,
    PopoverTrigger,
} from "radix-vue"
import type { ResumeState } from "@/types/state"
const resumeState = useState<ResumeState>("resume")

const { locale, locales } = useI18n()

const currentBasics = computed(
    () => resumeState.value?.[locale.value]?.basics ?? null,
)
</script>
