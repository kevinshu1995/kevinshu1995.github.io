<template>
    <div>
        <ul class="space-y-1">
            <li
                v-for="language in currentLanguages"
                :key="language.language"
                class="flex gap-2 items-end"
            >
                <h3 class="font-bold text-4">{{ language.language }}</h3>
                <p class="italic text-neutral-500">{{ language.fluency }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { Resume, Icon } from "@/types/resume"
import { e } from "unocss"
const resumeState = useState<{ en: Resume; tw: Resume }>("resume")
const i18n = useLocale()

const currentLanguages = computed(() => resumeState.value[i18n.value].languages)
</script>
