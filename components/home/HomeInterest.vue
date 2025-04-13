<template>
    <div>
        <ul class="grid md:grid-cols-2 gap-8 md:gap-2">
            <li
                v-for="interest in currentInterests"
                :key="interest.name"
                class="space-y-1"
            >
                <h3 class="font-bold text-5">{{ interest.name }}</h3>
                <ul class="flex gap-2 flex-wrap">
                    <li
                        v-for="(keyword, index) in interest.keywords"
                        :key="keyword"
                    >
                        <p class="italic text-neutral-500">
                            {{ keyword
                            }}<span
                                v-if="index !== interest.keywords.length - 1"
                                >,</span
                            >
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { ResumeState } from "@/types/state"
const resumeState = useState<ResumeState>("resume")
const { locale } = useI18n()

const currentInterests = computed(
    () => resumeState.value?.[locale.value]?.interests ?? [],
)
</script>
