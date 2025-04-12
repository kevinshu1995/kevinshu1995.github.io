<template>
    <div>
        <ul class="space-y-8">
            <li
                v-for="skill in currentSkills"
                :key="skill.name"
                class="space-y-4"
            >
                <h3 class="font-bold text-5">{{ skill.name }}</h3>
                <ul class="flex gap-8">
                    <li
                        v-for="keyword in skill.keywords"
                        class="flex gap-2 items-center"
                    >
                        <div
                            v-if="icon[keyword]"
                            class="bg-white rounded-full size-8 border border-neutral-200 flex items-center justify-center"
                        >
                            <Icon :name="icon[keyword]" class="size-5" />
                        </div>
                        <span class="line-height-4">{{ keyword }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { Resume } from "@/types/resume"
const resumeState = useState<{ en: Resume; tw: Resume }>("resume")
const i18n = useLocale()

const currentSkills = computed(() => resumeState.value[i18n.value].skills)

type Icon = {
    [key: Resume["skills"][number]["keywords"][number]]: string
}

const icon: Icon = {
    Vue: "logos:vue",
    Nuxt: "logos:nuxt-icon",
    React: "logos:react",
    "Tailwind CSS": "logos:tailwindcss-icon",
    Bootstrap: "logos:bootstrap",
    Bulma: "logos:bulma",
    Vite: "logos:vitejs",
    Webpack: "logos:webpack",
    Gulp: "logos:gulp",
    Git: "logos:git-icon",
    "Git flow": "",
    "Github flow": "",
    JavaScript: "logos:javascript",
    TypeScript: "logos:typescript-icon",
    Python: "logos:python",
    Figma: "logos:figma",
    "Adobe XD": "logos:adobe-xd",
    "Adobe Photoshop": "logos:adobe-photoshop",
    "Adobe Illustrator": "logos:adobe-illustrator",
}
</script>
