<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-5 gap-4">
            <HomeIndicator class="hidden lg:block">
                <div
                    :class="[
                        'mt-12 flex justify-center transition-opacity duration-300 delay-100',
                        containerScrollPercentage === 100 && 'opacity-0',
                    ]"
                    ref="indicatorContainer"
                >
                    <div class="h-40vh flex">
                        <div class="border-l border-l-neutral-200 relative">
                            <div
                                class="size-2 bg-neutral-600 absolute left-[-10px] translate-x-[5.5px] top-0 translate-y-[-50%] rotate-45 z-10"
                                ref="indicator"
                            ></div>
                        </div>
                        <div class="relative">
                            <p
                                v-for="title in indicatorTitles"
                                :key="title.text"
                                :class="title.containerClass"
                                :style="title.containerStyle"
                            >
                                <span
                                    class="absolute size-[3px] left-0 -top-0.5 translate-x-[-2px] bg-neutral-500 z-30"
                                ></span>
                                <span :class="title.textClass">
                                    {{ title.text }}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </HomeIndicator>
            <div
                class="col-start-1 col-end-6 lg:col-start-2 lg:col-end-5"
                ref="container"
            >
                <div ref="sectionLanding">
                    <HomeLanding />
                </div>
                <div class="pt-20 md:pt-0" ref="sectionWork">
                    <HomeWork class="py-10" />
                </div>
                <div class="pt-20" ref="sectionProject">
                    <HomeProject class="py-10" />
                </div>
                <div class="pt-20" ref="sectionSkills">
                    <HomeSkills class="py-10" />
                </div>
                <div class="pt-20" ref="sectionEducation">
                    <HomeEducation class="py-10" />
                </div>
                <div class="pt-20" ref="sectionLanguage">
                    <HomeLanguage class="py-10" />
                </div>
                <div class="pt-20" ref="sectionInterest">
                    <HomeInterest class="py-10" />
                </div>
            </div>
        </div>
    </div>
    <HomeMotto />
</template>

<script setup lang="ts">
import { createAnimatable, type AnimatableObject } from "animejs"

import { useElementBounding, useWindowSize } from "@vueuse/core"

const { height: windowHeight } = useWindowSize()

const elContainer = useTemplateRef("container")
const elIndicatorContainer = useTemplateRef("indicatorContainer")
const elIndicator = useTemplateRef("indicator")

const elSectionLanding = useTemplateRef("sectionLanding")
const {
    isInViewport: isInViewportSectionLanding,
    height: heightLanding,
    top: topLanding,
    topPercentage: topPercentageLanding,
} = useElementInViewPort(elSectionLanding, elContainer)

const elSectionWork = useTemplateRef("sectionWork")
const {
    isInViewport: isInViewportSectionWork,
    height: heightWork,
    topPercentage: topPercentageWork,
} = useElementInViewPort(elSectionWork, elContainer)

const elSectionProject = useTemplateRef("sectionProject")
const {
    isInViewport: isInViewportSectionProject,
    height: heightProject,
    topPercentage: topPercentageProject,
} = useElementInViewPort(elSectionProject, elContainer)

const elSectionSkills = useTemplateRef("sectionSkills")
const {
    isInViewport: isInViewportSectionSkills,
    height: heightSkills,
    topPercentage: topPercentageSkills,
} = useElementInViewPort(elSectionSkills, elContainer)

const elSectionEducation = useTemplateRef("sectionEducation")
const {
    isInViewport: isInViewportSectionEducation,
    height: heightEducation,
    topPercentage: topPercentageEducation,
} = useElementInViewPort(elSectionEducation, elContainer)

const elSectionLanguage = useTemplateRef("sectionLanguage")
const {
    isInViewport: isInViewportSectionLanguage,
    height: heightLanguage,
    topPercentage: topPercentageLanguage,
} = useElementInViewPort(elSectionLanguage, elContainer)

const elSectionInterest = useTemplateRef("sectionInterest")
const {
    isInViewport: isInViewportSectionInterest,
    height: heightInterest,
    topPercentage: topPercentageInterest,
} = useElementInViewPort(elSectionInterest, elContainer)

const indicatorTitles = computed(() => {
    const getContainerClass = (isInViewPort: boolean) => [
        "absolute -left-px transition-all border-l",
        isInViewPort ? "border-l-neutral-500" : "border-l-transparent",
    ]
    const getTextClass = (isInViewPort: boolean) => [
        "transition-all block font-bold w-25 pl-2 h-full relative",
        isInViewPort ? "opacity-100 scale-100" : "opacity-0 scale-0",
    ]
    const getHeight = (height: number) => ({
        height: `${(height / containerHeight.value) * 100}%`,
    })
    return [
        {
            textClass: getTextClass(isInViewportSectionLanding.value),
            containerClass: getContainerClass(isInViewportSectionLanding.value),
            containerStyle: {
                ...getHeight(heightLanding.value),
                top: 0,
            },
            text: "Landing",
        },
        {
            textClass: getTextClass(isInViewportSectionWork.value),
            containerClass: getContainerClass(isInViewportSectionWork.value),
            containerStyle: {
                ...getHeight(heightWork.value),
                top: topPercentageWork.value,
            },
            text: "經歷",
        },
        {
            textClass: getTextClass(isInViewportSectionProject.value),
            containerClass: getContainerClass(isInViewportSectionProject.value),
            containerStyle: {
                ...getHeight(heightProject.value),
                top: topPercentageProject.value,
            },
            text: "專案",
        },

        {
            textClass: getTextClass(isInViewportSectionSkills.value),
            containerClass: getContainerClass(isInViewportSectionSkills.value),
            containerStyle: {
                ...getHeight(heightSkills.value),
                top: topPercentageSkills.value,
            },
            text: "技能",
        },
        {
            textClass: getTextClass(isInViewportSectionEducation.value),
            containerClass: getContainerClass(
                isInViewportSectionEducation.value,
            ),
            containerStyle: {
                ...getHeight(heightEducation.value),
                top: topPercentageEducation.value,
            },
            text: "學歷",
        },
        {
            textClass: getTextClass(isInViewportSectionLanguage.value),
            containerClass: getContainerClass(
                isInViewportSectionLanguage.value,
            ),
            containerStyle: {
                ...getHeight(heightLanguage.value),
                top: topPercentageLanguage.value,
            },
            text: "語言",
        },
        {
            textClass: getTextClass(isInViewportSectionInterest.value),
            containerClass: getContainerClass(
                isInViewportSectionInterest.value,
            ),
            containerStyle: {
                ...getHeight(heightInterest.value),
                top: topPercentageInterest.value,
            },
            text: "興趣",
        },
    ]
})

const { y, height: containerHeight } = useElementBounding(elContainer)

let animatableIndicator: null | AnimatableObject = null
onMounted(() => {
    if (elIndicator.value === null) return

    animatableIndicator = createAnimatable(elIndicator.value, {
        top: {
            unit: "%",
            duration: 500,
            ease: "out(3)",
        },
    })
})

const containerScrollPercentage = computed(() => {
    const offsetTop = 100
    const offsetBottom = windowHeight.value / 2
    const fullProgress = containerHeight.value - offsetBottom
    const progress = Math.max(
        Math.min(y.value * -1 - offsetTop, fullProgress),
        0,
    )
    const scrollPercentage = (progress / fullProgress) * 100
    return scrollPercentage
})

watch(containerScrollPercentage, () => {
    if (animatableIndicator === null) return
    animatableIndicator.top(containerScrollPercentage.value)
})
</script>

<style>
html {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(#f1f1f1 1px, transparent 1px);
    background-size: 16px 16px;
    background-repeat: repeat;
}
</style>
