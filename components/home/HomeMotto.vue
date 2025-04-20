<template>
    <div class="container mx-auto px-4">
        <div class="h-200dvh" ref="stickyContainer">
            <div
                class="h-dvh sticky top-0 w-full flex justify-center items-center"
            >
                <p
                    :class="[
                        'font-bold text-9 md:text-11 lg:text-14 whitespace-pre-line text-center py-4 max-w-xs sm:max-w-full',
                        locale === 'zh_tw' && 'tracking-widest',
                    ]"
                >
                    <span
                        v-for="text in '“' + $t('motto') + '”'"
                        ref="mottoTexts"
                        class="inline-block"
                        >{{ text }}</span
                    >
                </p>
                <div
                    class="size-15 blur-lg absolute left-[50%] top-[50%] bg-neutral-400 z-50"
                    v-for="dots in Array(5)"
                    ref="randomDots"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onScroll, createTimeline, utils, stagger } from "animejs"
const { locale } = useI18n()

const stickyContainer = useTemplateRef("stickyContainer")
const mottoTexts = useTemplateRef("mottoTexts")
const randomDots = useTemplateRef("randomDots")

onMounted(() => {
    if (
        stickyContainer.value === null ||
        mottoTexts.value === null ||
        randomDots.value === null
    )
        return

    createTimeline({
        defaults: {
            composition: "blend",
        },
        autoplay: onScroll({
            target: stickyContainer.value,

            leave: "bottom bottom-=30%",
            // debug: true,
            sync: 0.5,
        }),
    })
        .add(
            randomDots.value,
            {
                x: () => [
                    `${utils.random(-50, 50)}vw`,
                    `${utils.random(-50, 50)}vw`,
                ],
                y: () => [
                    `${utils.random(-50, 50)}vh`,
                    `${utils.random(-50, 50)}vh`,
                ],

                scale: () => [`${utils.random(2, 4)}`, 1],
                opacity: [1, 0],
            },
            0,
        )
        .add(
            mottoTexts.value,
            {
                filter: () => [`blur(${utils.random(1, 10)}px)`, `blur(0px)`],
                x: () => [`${utils.random(-200, 200)}px`, 0],
                y: () => [`${utils.random(-200, 200)}px`, 0],
                scale: () => [`${utils.random(3, 0.1)}`, 1],
                opacity: [0, 1],
            },
            0,
        )
        .init()
})
</script>
