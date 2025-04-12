<template>
    <div></div>
</template>

<script setup lang="ts">
import type { Resume } from "@/types/resume"
const resumeState = useState<{ en: Resume; tw: Resume }>("resume")
const i18n = useLocale()

const currentSkills = computed(() => resumeState.value[i18n.value].skills)

type Icon = {
    [key: Resume["skills"][number]["keywords"][number]]: string
}
</script>
