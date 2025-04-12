<template>
    <div>
        <ul class="grid grid-cols-2 gap-2">
            <li
                v-for="interest in currentInterests"
                :key="interest.name"
                class="space-y-1"
            >
                <h3 class="font-bold text-5">{{ interest.name }}</h3>
                <ul class="flex gap-2">
                    <li v-for="keyword in interest.keywords" :key="keyword">
                        <p class="italic text-neutral-500">
                            {{ keyword }}
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { Resume, Icon } from "@/types/resume"
import { e } from "unocss"
const resumeState = useState<{ en: Resume; tw: Resume }>("resume")
const i18n = useLocale()

const currentInterests = computed(() => resumeState.value[i18n.value].interests)
</script>
