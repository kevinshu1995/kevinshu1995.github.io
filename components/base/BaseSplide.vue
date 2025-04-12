<template>
    <div>
        <section
            class="splide"
            aria-label="Splide Basic HTML Example"
            ref="splide"
        >
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" v-for="slide in slides">
                        <slot name="slide" :slide="slide"></slot>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Splide, { type Options } from "@splidejs/splide"
import "@splidejs/splide/css"

const props = defineProps<{
    slides: any[]
    options: Options
}>()

const splide = ref(null)

onMounted(() => {
    if (!splide.value) {
        console.error("Splide element not found")
        return
    }
    new Splide(splide.value, props.options).mount()
})
</script>
