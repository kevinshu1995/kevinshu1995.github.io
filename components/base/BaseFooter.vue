<template>
    <div class="mt-30 bg-neutral-900 text-neutral-200">
        <div
            class="container mx-auto px-4 h-full py-36 space-y-20 md:space-y-30"
        >
            <div class="grid md:grid-cols-2 gap-12 md:gap-4">
                <div class="space-y-4 md:space-y-8 order-2 md:order-1">
                    <div class="grayscale-100">
                        <img
                            src="https://i.giphy.com/JIX9t2j0ZTN9S.webp"
                            alt=""
                            class="size-20 object-contain rounded-full"
                        />
                    </div>
                    <p class="text-3 whitespace-pre-line">
                        {{ t("contact.description") }}
                    </p>
                    <div class="flex gap-4 pb-2">
                        <div class="flex flex-col">
                            <div class="flex justify-end items-end gap-2">
                                <a
                                    class="font-bold flex items-center gap-6 hover:underline text-3.5 sm:text-4 md:text-5 lg:text-7"
                                    :href="email.url"
                                    :data-mouse-event="
                                        $t('mouseEvent.sendEmail')
                                    "
                                    data-mouse-event-class="bg-black/10 text-white"
                                >
                                    <span>{{ email.username }}</span>
                                </a>
                                <button
                                    class="size-7 rounded-full cursor-pointer hover:bg-neutral-800 hover:text-white transition"
                                    @click="copyEmail"
                                    :data-mouse-event="copyEmailMouseEventText"
                                    data-mouse-event-class="bg-black/10 text-white"
                                >
                                    <Icon
                                        name="mdi:content-copy"
                                        class="size-4 mt-1"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start order-1 md:order-2">
                    <button
                        class="flex gap-2 items-center font-bold text-4 group cursor-pointer"
                        @click="scrollToTop"
                        :data-mouse-event="$t('mouseEvent.scrollToTop')"
                        data-mouse-event-class="bg-black/10 text-white"
                    >
                        <Icon
                            name="mdi:arrow-up-thin"
                            class="size-6 group-hover:animate-bounce"
                        />
                        <span>Back to top</span>
                    </button>
                </div>
            </div>
            <div class="grid md:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-18">
                <div class="space-y-4 md:col-start-3">
                    <h6 class="text-3 text-neutral-500">出沒地帶</h6>
                    <div class="space-y-4">
                        <ul class="flex flex-col justify-end flex-wrap gap-4">
                            <li v-for="social in socials">
                                <a
                                    :href="social.url"
                                    class="flex gap-1 items-center h-full w-full hover:underline group"
                                    target="_blank"
                                    :data-mouse-event="
                                        $t('mouseEvent.openLink')
                                    "
                                    data-mouse-event-class="bg-black/10 text-white"
                                >
                                    <span class="flex gap-3 items-center">
                                        <Icon
                                            :name="`simple-icons:${social.network}`"
                                            class="size-4"
                                        />

                                        <span class="capitalize text-3">
                                            {{ social.network }}
                                        </span>
                                    </span>
                                    <Icon
                                        name="mdi:arrow-top-right"
                                        class="size-3"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="space-y-4 md:col-start-3">
                    <h6 class="text-3 text-neutral-500">地點</h6>
                    <div class="flex gap-1">
                        <p>台灣</p>
                        <span>/</span>
                        <p>TAIWAN</p>
                    </div>
                </div>
                <div class="space-y-4">
                    <p class="text-3 text-neutral-500">.</p>
                    <p class="flex items-center gap-1 text-3">
                        <span>©</span>
                        <span class="">{{ new Date().getFullYear() }}</span>
                        <span>{{ nameEn }}</span>
                        <span class="">{{ nameTw }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useClipboard, useTimeoutFn, useWindowScroll } from "@vueuse/core"
import type { ResumeState } from "@/types/state"

const { y: windowY } = useWindowScroll({ behavior: "smooth" })

const { locale, t } = useI18n()

const resumeState = useState<ResumeState>("resume")

const currentResume = computed(() => resumeState.value[locale.value])

const nameEn = computed(() => `${resumeState.value?.en?.basics?.name ?? ""}`)
const nameTw = computed(() => `${resumeState.value?.zh_tw?.basics?.name ?? ""}`)

const socials = computed(() => currentResume.value?.basics?.profiles ?? [])
const email = computed(() => ({
    network: "gmail",
    username: currentResume.value?.basics?.email,
    url: `mailto:${currentResume.value?.basics?.email}`,
}))

const { copy } = useClipboard({ source: email.value.username })

const copyEmailMouseEventText = ref(t("mouseEvent.copy"))

const { start, stop } = useTimeoutFn(() => {
    copyEmailMouseEventText.value = t("mouseEvent.copy")
}, 3000)

function copyEmail() {
    copy()
    copyEmailMouseEventText.value = t("mouseEvent.copied")
    start()
}

function scrollToTop() {
    windowY.value = 0
}
</script>
