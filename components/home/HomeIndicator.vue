<template>
    <div ref="container">
        <div
            :class="[
                'fixed top-12 h-dvh transition-opacity left-0',
                left === 0 && 'opacity-0',
            ]"
            :style="{
                left: `${left}px`,
            }"
        >
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
        </div>
    </div>
</template>

<script setup lang="ts">
import { createAnimatable, type AnimatableObject } from "animejs"
import { useElementBounding, useWindowSize } from "@vueuse/core"
const elContainer = useTemplateRef("container")

const { left } = useElementBounding(elContainer)

type Element = (typeof useElementBounding)["arguments"][0]

const props = defineProps<{
    contentContainer: Element
    sections: { ref: Element; text: string }[]
}>()

const sectionsWithViewport = props.sections.map((section) => ({
    text: section.text,
    viewport: useElementInViewPort(section.ref, props.contentContainer),
}))

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

    return sectionsWithViewport.map((section) => {
        return {
            textClass: getTextClass(section.viewport.isInViewport.value),
            containerClass: getContainerClass(
                section.viewport.isInViewport.value,
            ),
            containerStyle: {
                ...getHeight(section.viewport.height.value),
                top: section.viewport.topPercentage.value,
            },
            text: section.text,
        }
    })
})

const { y, height: containerHeight } = useElementBounding(
    props.contentContainer,
)

const elIndicator = useTemplateRef("indicator")
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

const { height: windowHeight } = useWindowSize()
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
