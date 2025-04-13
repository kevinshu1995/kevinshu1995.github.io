<template>
    <div class="fixed top-0 left-0 w-full">
        <div class="container mx-auto px-4">
            <div class="flex items-center py-2 gap-4">
                <h1>Hi</h1>

                <div class="ml-auto">
                    <NuxtLink
                        v-if="locale !== 'en'"
                        :to="$switchLocalePath('en')"
                    >
                        English
                    </NuxtLink>
                    <NuxtLink
                        v-if="locale !== 'zh_tw'"
                        :to="$switchLocalePath('zh_tw')"
                    >
                        中文
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
