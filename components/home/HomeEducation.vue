<template>
    <div>
        <ul class="space-y-8">
            <li
                v-for="education in currentEducation"
                :key="education.institution"
            >
                <div>
                    <span>{{ education.startDate }}</span>
                    <span>-</span>
                    <span>{{ education.endDate }}</span>
                </div>
                <h3 class="font-bold text-5">{{ education.institution }}</h3>
                <div class="flex gap-2 italic text-neutral-500">
                    <p>{{ education.area }}</p>
                    <p>{{ education.studyType }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { ResumeState } from "@/types/state"
const resumeState = useState<ResumeState>("resume")
const { locale } = useI18n()

const currentEducation = computed(
    () => resumeState.value?.[locale.value]?.education ?? [],
)
</script>
