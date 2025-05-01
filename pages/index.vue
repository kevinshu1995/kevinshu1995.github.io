<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-5 gap-4">
            <ClientOnly>
                <div class="hidden lg:block opacity-0" ref="indicator">
                    <HomeIndicator
                        :content-container="elContainer"
                        :sections="sectionsForIndicator"
                    />
                </div>
            </ClientOnly>
            <div
                class="col-start-1 col-end-6 lg:col-start-2 lg:col-end-5"
                ref="container"
            >
                <div ref="sectionLanding">
                    <HomeLanding @on-animate-end="onLandingAnimateEnd" />
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
import type { ResumeState } from "@/types/state"
import { animate } from "animejs"

useHead({
    title: "首頁",
})

defineOgImageComponent("NuxtSeo", {
    siteName: "許文修 | Hsu Wen-Hsiu | 個人網站",
    title: "哈囉，我是許文修",
    // siteLogo: "/favicon-32x32.png",
    description:
        "我是一名專注於前端技術的工程師，擅長使用 Vue.js 和 Tailwind CSS 開發高效能的響應式網站。具備設計背景，對美感與用戶體驗有深入理解，能在開發與設計間有效協作。曾參與企業平台、電商網站與後台管理系統的開發，具備 API 串接、程式碼重構及效能優化的實作經驗。熱愛學習新技術並積極參與開源社群，期望持續挑戰自我並創造更具價值的產品。",
    theme: "#222",
    colorMode: "dark",
})

const resumeState = useState<ResumeState>("resume")
const { locale } = useI18n()
const currentBasics = computed(
    () => (resumeState.value?.[locale.value]?.basics ?? "") as string,
)
useHead({
    meta: [{ name: "description", content: currentBasics }],
})

const elContainer = useTemplateRef("container")

const elSectionLanding = useTemplateRef("sectionLanding")
const elSectionWork = useTemplateRef("sectionWork")
const elSectionProject = useTemplateRef("sectionProject")
const elSectionSkills = useTemplateRef("sectionSkills")
const elSectionEducation = useTemplateRef("sectionEducation")
const elSectionLanguage = useTemplateRef("sectionLanguage")
const elSectionInterest = useTemplateRef("sectionInterest")

const { t } = useI18n()

const sectionsForIndicator = computed(() => {
    return [
        {
            ref: elSectionLanding,
            text: t("about-me"),
        },
        {
            ref: elSectionWork,
            text: t("work-experience"),
        },
        {
            ref: elSectionProject,
            text: t("projects"),
        },
        {
            ref: elSectionSkills,
            text: t("tech-stack"),
        },
        {
            ref: elSectionEducation,
            text: t("education"),
        },
        {
            ref: elSectionLanguage,
            text: t("languages"),
        },
        {
            ref: elSectionInterest,
            text: t("interests"),
        },
    ]
})

const indicator = useTemplateRef("indicator")
function onLandingAnimateEnd() {
    if (!indicator.value) return
    animate(indicator.value, {
        opacity: 1,
        duration: 300,
        ease: "out(3)",
    })
}
</script>
