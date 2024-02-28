<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
    <section id="hero" class="container flex items-center justify-center">
        <div class="mb-10 mt-16 flex flex-col gap-8 text-center">
            <h1 class="text-center text-6xl font-bold tracking-tighter md:text-8xl">
                <span class="primary-yellow">Jav</span>Codes
            </h1>
            <div>
                <p class="primary-yellow text-base font-semibold italic md:text-xl">Explore Japanese Adult Films</p>
                <p class="text-lg font-semibold italic md:text-xl">Share Your Top Codes</p>
            </div>

            <div class="flex items-center justify-center gap-4">
                <Button>Share</Button>
            </div>
        </div>
    </section>
</template>
