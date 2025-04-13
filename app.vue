<template>
    <div class="text-neutral-600">
        <BaseHeader />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <BaseFooter />
    </div>
</template>

<script setup lang="ts">
import "@unocss/reset/sanitize/sanitize.css"
import "@unocss/reset/sanitize/assets.css"
import "assets/index.css"
</script>
