<template>
    <div
        class="min-h-svh flex items-center justify-center"
        v-if="currentBasics && resumeState.en && resumeState.zh_tw"
    >
        <div class="grid grid-cols-3 gap-16">
            <div
                class="col-span-3 md:col-span-1 flex justify-center"
                ref="refAvatarContainer"
            >
                <div
                    ref="refAvatar"
                    class="inline-flex flex-col items-center justify-center gap-4 lg:items-center opacity-0"
                >
                    <img
                        src="/avatar.jpg"
                        :alt="`${resumeState.zh_tw.basics.name} avatar`"
                        class="max-w-40 w-full aspect-square object-cover rounded"
                        ref="refAvatarImg"
                    />
                    <div
                        class="flex flex-col items-center justify-center gap-2"
                        ref="refAvatarTextContainer"
                    >
                        <h1
                            class="text-center font-bold mb-0 flex flex-col opacity-0"
                        >
                            <span class="text-5 tracking-wider">{{
                                resumeState.zh_tw.basics.name
                            }}</span>
                            <span class="text-4 -mt-1.5">
                                {{ resumeState.en.basics.name }}
                            </span>
                        </h1>
                        <p
                            :class="[
                                ' opacity-0',
                                locale === 'zh_tw' && 'tracking-wider',
                            ]"
                        >
                            {{ currentBasics.label }}
                        </p>
                        <p
                            class="text-3 flex items-center gap-1 mb-4 -ml-1 opacity-0"
                        >
                            <Icon name="mdi:location" />
                            <span>{{ currentBasics.location.city }},</span>
                            <span>{{
                                currentBasics.location.countryCode
                            }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-span-3 md:col-span-2 opacity-0" ref="refContent">
                <div class="grid gap-4 md:-mt-2">
                    <p
                        :class="[
                            locale === 'zh_tw' && 'leading-8',
                            'hyphens-auto text-pretty',
                        ]"
                    >
                        {{ currentBasics.summary }}
                    </p>
                    <ul class="space-y-1">
                        <li v-for="profile in currentBasics.profiles">
                            <a
                                :href="profile.url"
                                class="flex items-center gap-2"
                                target="_blank"
                                :data-mouse-event="$t('mouseEvent.openLink')"
                            >
                                <Icon
                                    :name="`simple-icons:${profile.network}`"
                                />
                                <span>{{ profile.username }}</span>
                                <Icon
                                    name="mdi:arrow-top-right"
                                    class="size-3 translate-y-px"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useElementBounding, useWindowSize } from "@vueuse/core"
import { utils, createTimeline, stagger } from "animejs"
import type { ResumeState } from "@/types/state"
const resumeState = useState<ResumeState>("resume")

const emits = defineEmits(["onAnimateEnd"])

const { locale } = useI18n()

const currentBasics = computed(
    () => resumeState.value?.[locale.value]?.basics ?? null,
)

const refAvatar = useTemplateRef("refAvatar")
const refAvatarTextContainer = useTemplateRef("refAvatarTextContainer")
const refAvatarImg = useTemplateRef("refAvatarImg")
const refAvatarContainer = useTemplateRef("refAvatarContainer")
const refContent = useTemplateRef("refContent")
const { width: windowWidth } = useWindowSize()

const { x: avatarX } = useElementBounding(refAvatarContainer)

const tl = createTimeline({
    defaults: { duration: 2000 },
    onComplete: () => {
        emits("onAnimateEnd")
    },
})

onMounted(() => {
    if (
        refAvatar.value === null ||
        refContent.value === null ||
        refAvatarTextContainer.value === null ||
        refAvatarImg.value === null
    )
        return

    utils.set(refAvatar.value, {
        opacity: 1,
        x: windowWidth.value / 2 - avatarX.value,
    })

    utils.set(refAvatar.value, {
        opacity: 1,
        x: windowWidth.value / 2 - avatarX.value,
    })

    tl.add(refAvatarImg.value, {
        scale: {
            from: 0.9,
        },
        opacity: {
            from: 0,
        },
        duration: 500,
        easing: "out(3)",
    })
        .add(
            refAvatarTextContainer.value.children,
            {
                y: {
                    from: -10,
                },
                opacity: 1,
                duration: 1000,
                easing: "out(3)",
            },
            stagger(100, {
                start: 300,
            }),
        )
        .add(
            refAvatar.value,
            {
                x: 0,
                duration: 1000,
                easing: "out(3)",
            },
            500,
        )
        .add(
            refContent.value,
            {
                opacity: 1,
                duration: 1000,
                filter: "blur(0px)",
                easing: "out(3)",
            },
            1000,
        )
})
</script>
