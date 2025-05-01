<template>
    <div class="w-[1024px] mx-auto py-10">
        <div class="mb-16">
            <div
                class="flex items-center gap-8 w-full border-b border-neutral-200 pb-2 relative"
            >
                <NuxtLink
                    class="flex items-center gap-2"
                    :to="$localePath('/')"
                >
                    <Icon name="mdi:arrow-left" />
                    <span>{{ $t("homePage") }}</span>
                </NuxtLink>
                <h1
                    class="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] font-bold m-0"
                >
                    {{ $t("resume.title") }}
                </h1>
                <ul class="flex gap-2 ml-auto">
                    <li
                        v-for="localeItem in locales.filter(
                            ({ code }) => code !== locale,
                        )"
                        :key="localeItem.code"
                    >
                        <NuxtLink
                            :class="['py-1 px-1 inline-block w-full']"
                            :to="$switchLocalePath(localeItem.code)"
                        >
                            {{ localeItem.name }}
                            <Icon name="mdi:arrow-top-right" class="size-3" />
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="flex mt-6">
                <button class="ml-auto flex gap-1 items-center">
                    <span>{{ $t("resume.downloadPdf") }}</span>
                    <Icon name="mdi:arrow-top-right" class="size-3" />
                </button>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-16" v-if="resume">
            <div class="col-span-1">
                <div class="space-y-4">
                    <img
                        src="/avatar.jpg"
                        :alt="`${nameTw} ${nameEn}`"
                        class="max-w-30 rounded"
                    />
                    <div class="space-y-0">
                        <h2 class="font-bold text-5">
                            {{ resume.basics.name }}
                        </h2>
                        <p class="tracking-wider italic">
                            {{ resume.basics.label }}
                        </p>
                    </div>
                    <p class="text-3 flex items-center gap-1">
                        <Icon name="mdi:location" class="text-3" />
                        {{ resume.basics.location.city }},
                        {{ resume.basics.location.countryCode }}
                    </p>
                    <ul class="text-3 space-y-1">
                        <li class="flex gap-2 items-center">
                            <a
                                href="mailto:resume.basics.email"
                                class="flex items-center gap-2 hover:underline"
                            >
                                <span class="flex items-center">
                                    <Icon name="mdi:email" class="text-3" />
                                </span>
                                <span class="text-blue-800">{{
                                    resume.basics.email
                                }}</span>
                            </a>
                        </li>
                        <li
                            v-for="profile in resume.basics.profiles"
                            :key="profile.network"
                        >
                            <a
                                :href="profile.url"
                                class="flex items-center gap-2 hover:underline"
                                target="_blank"
                            >
                                <Icon
                                    :name="`simple-icons:${profile.network}`"
                                />
                                <span class="text-blue-800">{{
                                    profile.username
                                }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-4">
                <div class="space-y-6">
                    <div
                        class="space-y-4 tracking-wider"
                        v-for="section in sections"
                        :key="section.key"
                    >
                        <h2
                            class="text-5 font-bold tracking-wider border-b border-neutral-200 pb-0"
                        >
                            {{ section.title }}
                        </h2>
                        <template v-if="section.key === 'about'">
                            <p>
                                {{ resume.basics.summary }}
                            </p>
                        </template>

                        <template v-if="section.key === 'work'">
                            <ul class="space-y-4">
                                <li
                                    v-for="work in resume.work.slice(0, 3)"
                                    class="space-y-1"
                                >
                                    <div>
                                        <p
                                            class="text-3 italic text-neutral-500"
                                        >
                                            {{ work.startDate }} ~
                                            {{ work.endDate }}
                                        </p>
                                        <div class="flex gap-4">
                                            <h3 class="font-bold">
                                                {{ work.name }}
                                            </h3>
                                            <p>{{ work.position }}</p>
                                        </div>
                                    </div>
                                    <p>{{ work.summary }}</p>
                                    <ul
                                        class="list-disc ml-3 pl-4 text-neutral-500"
                                    >
                                        <li v-for="item in work.highlights">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </template>

                        <template v-if="section.key === 'projects'">
                            <ul class="space-y-4">
                                <li
                                    v-for="project in resume.projects"
                                    class="space-y-1"
                                >
                                    <h3 class="font-bold">
                                        {{ project.name }}
                                    </h3>
                                    <p>{{ project.description }}</p>
                                    <ul
                                        class="flex gap-2 text-3 text-neutral-500"
                                    >
                                        <li
                                            v-for="item in project.highlights"
                                            :key="item"
                                        >
                                            #{{ item }}
                                        </li>
                                    </ul>
                                    <a
                                        :href="project.url"
                                        target="_blank"
                                        class="text-blue-700 text-3 block hover:underline"
                                        >{{ project.url }}</a
                                    >
                                </li>
                            </ul>
                        </template>

                        <template v-if="section.key === 'stack'">
                            <ul class="space-y-4">
                                <li
                                    v-for="item in resume.skills"
                                    :key="item.name"
                                    class="text-neutral-500 space-y-2"
                                >
                                    <p>{{ item.name }}</p>
                                    <ul class="flex gap-4">
                                        <li
                                            v-for="(
                                                keyword, keywordIndex
                                            ) in item.keywords"
                                            class="flex gap-2 items-center"
                                        >
                                            <span
                                                v-if="keywordIndex !== 0"
                                                class="text-3"
                                                >/</span
                                            >
                                            <div
                                                v-if="
                                                    iconState &&
                                                    iconState[keyword]
                                                "
                                                class="size-6 flex items-center justify-center"
                                            >
                                                <Icon
                                                    :name="iconState[keyword]"
                                                    class="size-4"
                                                />
                                            </div>
                                            <span>{{ keyword }}</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </template>

                        <template v-if="section.key === 'education'">
                            <ul>
                                <li v-for="item in resume.education">
                                    <p class="text-3 italic text-neutral-500">
                                        {{ item.startDate }} ~
                                        {{ item.endDate }}
                                    </p>
                                    <h3 class="font-bold">
                                        {{ item.institution }}
                                    </h3>
                                    <div class="flex gap-2">
                                        <p>{{ item.area }}</p>
                                        <p>{{ item.studyType }}</p>
                                    </div>
                                </li>
                            </ul>
                        </template>

                        <template v-if="section.key === 'languages'">
                            <ul>
                                <li
                                    v-for="item in resume.languages"
                                    class="flex gap-2"
                                >
                                    <h3 class="font-bold">
                                        {{ item.language }}
                                    </h3>
                                    <p>{{ item.fluency }}</p>
                                </li>
                            </ul>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ResumeState } from "@/types/state"
import type { Icon } from "@/types/resume"
definePageMeta({
    layout: "print",
})

const { locale, t, locales } = useI18n()

useHead({
    title: t("resume.title"),
    meta: [
        {
            name: "description",
            content: t("resume.description"),
        },
    ],
})

defineOgImageComponent("NuxtSeo", {
    siteName: "許文修 | Hsu Wen-Hsiu | 個人網站",
    title: t("resume.title"),
    description: t("resume.description"),
    theme: "#222",
    colorMode: "dark",
})

const resumeState = useState<ResumeState>("resume")

const nameTw = computed(() => resumeState.value?.zh_tw?.basics?.name)
const nameEn = computed(() => resumeState.value?.en?.basics?.name)

const resume = computed(() => resumeState.value?.[locale.value] ?? null)

const iconState = useState<Icon>("icon", () => ({}))

const sections = computed(() => {
    return [
        {
            key: "about",
            title: t("about-me"),
        },
        {
            key: "work",
            title: t("work-experience"),
        },
        {
            key: "projects",
            title: t("projects"),
        },
        {
            key: "stack",
            title: t("tech-stack"),
        },
        {
            key: "education",
            title: t("education"),
        },
        {
            key: "languages",
            title: t("languages"),
        },
    ]
})
</script>
