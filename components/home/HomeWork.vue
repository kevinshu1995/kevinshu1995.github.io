<template>
    <div class="md:ml-8 md:pl-8 md:border-l md:border-neutral-200">
        <ul class="space-y-12">
            <li
                v-for="work in currentResumeWork"
                :key="work.name"
                class="relative"
            >
                <BaseAnimateScrollInView>
                    <span
                        class="size-8 absolute -left-4 top-6 translate-x-[-100%] bg-white border border-neutral-100 rounded-full hidden md:flex items-center justify-center"
                    >
                        <Icon
                            name="mdi:baguette"
                            class="size-4 text-neutral-500"
                        />
                    </span>
                </BaseAnimateScrollInView>
                <BaseAnimateScrollInView class="space-y-3">
                    <div class="space-y-0">
                        <p class="italic">
                            {{ work.startDate }} -
                            {{ work.endDate }}
                        </p>
                        <div
                            class="flex flex-col md:flex-row md:items-end space-x-2"
                        >
                            <h4 class="font-bold text-5 tracking-wider">
                                {{ work.name }}
                            </h4>
                            <p>
                                {{ work.position }}
                            </p>
                        </div>
                    </div>
                    <p>
                        {{ work.summary }}
                    </p>
                    <ul class="space-y-1 opacity-70 italic">
                        <li
                            v-for="highlight in work.highlights"
                            :key="highlight"
                        >
                            {{ highlight }}
                        </li>
                    </ul>
                </BaseAnimateScrollInView>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { ResumeState } from "@/types/state"
const resumeState = useState<ResumeState>("resume")

const { locale } = useI18n()

const currentResumeWork = computed(
    () => resumeState.value?.[locale.value]?.work ?? [],
)
</script>
