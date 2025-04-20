<template>
    <div class="container">
        <div class="h-dvh flex justify-center items-center">
            <p
                :class="[
                    'font-bold text-3 sm:text-5 md:text-6 lg:text-9 whitespace-pre text-center py-4',
                    locale === 'zh_tw' && 'tracking-widest',
                ]"
            >
                <span class="text-7 sm:text-8 md:text-9 lg:text-12">“</span>
                {{ $t("motto") }}
                <span class="text-7 sm:text-8 md:text-9 lg:text-12">”</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
