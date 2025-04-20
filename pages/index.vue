<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-5 gap-4">
            <ClientOnly>
                <HomeIndicator
                    class="hidden lg:block"
                    :content-container="elContainer"
                    :sections="sectionsForIndicator"
                />
            </ClientOnly>
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
