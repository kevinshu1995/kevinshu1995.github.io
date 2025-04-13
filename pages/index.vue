<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-5 gap-4">
            <div class="col-start-1 col-end-6 lg:col-start-2 lg:col-end-5">
                <HomeLanding />
                <HomeWork class="mt-20 md:mt-0" />
                <HomeProject class="mt-20" />
                <HomeSkills class="mt-20" />
                <HomeEducation class="mt-20" />
                <HomeLanguage class="mt-20" />
                <HomeInterest class="mt-20" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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
