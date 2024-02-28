<script setup>
import HeaderNav from './HeaderNav.vue';
</script>

<template>
    <main class="min-h-screen">
        <HeaderNav />
        <slot></slot>
    </main>
</template>
