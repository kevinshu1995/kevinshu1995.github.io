<template>
    <div>
        <BaseSplide
            :slides="currentProjects"
            :options="slideOption"
            class="custom-splide"
        >
            <template #slide="{ slide }: { slide: Project }">
                <div class="p-4 border border-neutral-200 h-full">
                    <div class="flex flex-col gap-4 h-full">
                        <h3 class="font-bold text-5">{{ slide.name }}</h3>
                        <p class="line-height-6">{{ slide.description }}</p>
                        <div
                            class="flex flex-col justify-between mt-auto gap-2"
                        >
                            <ul class="flex flex-col text-3.5 italic">
                                <li
                                    v-for="highlight in slide.highlights"
                                    :key="highlight"
                                >
                                    <span>#{{ highlight }}</span>
                                </li>
                            </ul>
                            <a
                                v-if="slide.url"
                                :href="slide.url"
                                target="_blank"
                                class="text-blue-500 hover:underline text-3.5 ml-auto"
                                :data-mouse-event="$t('mouseEvent.openLink')"
                            >
                                {{ $t("view project") }}
                                <Icon
                                    name="mdi:arrow-top-right"
                                    class="size-3 translate-y-px"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </template>
        </BaseSplide>
    </div>
</template>

<script setup lang="ts">
import type { ResumeState } from "@/types/state"
import type { Project } from "@/types/resume"
const resumeState = useState<ResumeState>("resume")
const { locale } = useI18n()

const currentProjects = computed(
    () => resumeState.value?.[locale.value]?.projects ?? [],
)

const trimSpace: "move" = "move"

const slideOption = {
    padding: {
        left: 0,
        right: 80,
    },
    trimSpace,
    perPage: 2,
    gap: "8px",
    arrows: currentProjects.value.length > 2,
    breakpoints: {
        500: {
            perPage: 1,
            arrows: currentProjects.value.length > 1,
        },
        640: {
            perPage: 2,
            padding: {
                left: 0,
                right: 30,
            },
            arrows: currentProjects.value.length > 2,
        },
    },
}
</script>

<style scoped>
.custom-splide {
    padding-top: 40px;
}
::v-deep(.custom-splide) .splide__arrow--prev {
    left: unset;
    right: 44px;
    top: -24px;
}
::v-deep(.custom-splide) .splide__arrow--next {
    right: 0;
    top: -24px;
}
::v-deep(.custom-splide) .splide__arrow {
    background: #eee;
}

::v-deep(.custom-splide) .splide__pagination {
    bottom: -2em;
}
::v-deep(.custom-splide) .splide__pagination__page.is-active {
    background-color: #666;
}
</style>
