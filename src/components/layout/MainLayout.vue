<script setup>
import HeaderNav from './HeaderNav.vue';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>

<template>
    <main class="min-h-screen">
        <HeaderNav />
        <slot></slot>
    </main>
    <VueQueryDevtools />
</template>
