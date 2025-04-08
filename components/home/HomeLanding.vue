<template>
    <div
        class="h-svh flex items-center justify-center"
        v-if="resumeState.en && resumeState.tw"
    >
        <div class="grid grid-cols-3 gap-16">
            <div
                class="col-span-3 md:col-span-1 inline-flex flex-col items-center justify-center gap-4 lg:items-center"
            >
                <img
                    src="/avatar.jpg"
                    :alt="`${resumeState.tw.basics.name} avatar`"
                    class="max-w-40 w-full aspect-square object-cover rounded"
                />
                <div class="flex flex-col items-center justify-center gap-2">
                    <h1 class="text-center font-bold mb-0 flex flex-col">
                        <span class="text-5 tracking-wider">{{
                            resumeState.tw.basics.name
                        }}</span>
                        <span class="text-4 -mt-1.5">
                            {{ resumeState.en.basics.name }}
                        </span>
                    </h1>
                    <p class="tracking-wider">
                        {{ resumeState[i18n].basics.label }}
                    </p>
                    <p class="text-3 flex items-center gap-1 mb-4 -ml-1">
                        <Icon name="mdi:location" />
                        <span
                            >{{ resumeState[i18n].basics.location.city }},</span
                        >
                        <span>{{
                            resumeState[i18n].basics.location.countryCode
                        }}</span>
                    </p>
                </div>
            </div>
            <div class="col-span-3 md:col-span-2">
                <div class="grid gap-4 md:-mt-2">
                    <p class="leading-8">
                        {{ resumeState[i18n].basics.summary }}
                    </p>
                    <ul class="space-y-1">
                        <li
                            v-for="profile in resumeState[i18n].basics.profiles"
                        >
                            <a
                                :href="profile.url"
                                class="flex items-center gap-2"
                                target="_blank"
                            >
                                <Icon
                                    :name="`simple-icons:${profile.network}`"
                                />
                                <span>{{ profile.username }}</span>
                                <Icon
                                    name="mdi:arrow-top-right"
                                    class="size-3 translate-y-px"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Resume } from "@/types/resume"
const resumeState = useState<{ en: Resume; tw: Resume }>("resume")

const i18n = useLocale()
</script>
