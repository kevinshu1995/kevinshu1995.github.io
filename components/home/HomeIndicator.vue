<template>
    <div ref="container">
        <div
            :class="[
                'fixed top-12 h-dvh transition-opacity translate-x-10',
                left === 0 && 'opacity-0',
            ]"
            :style="{
                left: `${left}px`,
            }"
        >
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useElementBounding } from "@vueuse/core"
const elContainer = useTemplateRef("container")

const { left } = useElementBounding(elContainer)
</script>
