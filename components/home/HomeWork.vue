<template>
    <div class="ml-8 pl-8 border-l border-neutral-200">
        <ul class="space-y-12">
            <li
                v-for="work in currentResume.work"
                :key="work.name"
                class="relative"
            >
                <span
                    class="size-8 absolute -left-4 top-6 translate-x-[-100%] bg-white border border-neutral-100 rounded-full flex items-center justify-center"
                >
                    <Icon name="mdi:baguette" class="size-4 text-neutral-500" />
                </span>
                <div class="space-y-3">
                    <div class="space-y-0">
                        <p class="italic">
                            {{ work.startDate }} -
                            {{ work.endDate }}
                        </p>
                        <div class="flex items-end space-x-2">
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
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { Resume } from "@/types/resume"
const resumeState = useState<{ en: Resume; tw: Resume }>("resume")
const i18n = useLocale()

const currentResume = computed(() => resumeState.value[i18n.value])
</script>
