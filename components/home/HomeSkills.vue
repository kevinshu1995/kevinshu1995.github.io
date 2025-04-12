<template>
    <div>
        <ul class="space-y-8">
            <li
                v-for="skill in currentSkills"
                :key="skill.name"
                class="space-y-4"
            >
                <h3 class="font-bold text-5">{{ skill.name }}</h3>
                <ul class="flex gap-x-8 gap-y-4 flex-wrap">
                    <li
                        v-for="keyword in skill.keywords"
                        class="flex gap-2 items-center"
                    >
                        <div
                            v-if="iconState && iconState[keyword]"
                            class="bg-white rounded-full size-8 border border-neutral-200 flex items-center justify-center"
                        >
                            <Icon :name="iconState[keyword]" class="size-5" />
                        </div>
                        <span class="line-height-4">{{ keyword }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { Resume, Icon } from "@/types/resume"
const resumeState = useState<{ en: Resume; tw: Resume }>("resume")
const i18n = useLocale()

const currentSkills = computed(() => resumeState.value[i18n.value].skills)

const iconState = useState<Icon>("icon", () => ({}))
</script>
