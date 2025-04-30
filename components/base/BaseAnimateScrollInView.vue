<template>
    <div ref="_element">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { animate, onScroll } from "animejs"

const element = useTemplateRef("_element")

onMounted(() => {
    if (element.value === null) return
    animate(element.value, {
        y: {
            from: 50,
        },
        x: {
            from: "10vw",
        },
        opacity: {
            from: 0,
        },
        autoplay: onScroll({
            container: document.body,
            enter: "top+=60vh top-=30vh",
            leave: "bottom-=60vh top",
            debug: import.meta.env.DEV,
            sync: true,
        }),
    })
})
</script>
