<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
    <div class="flex flex-col gap-4 justify-center items-center h-screen">
        <h1>This is Home Page</h1>
        <div class="flex flex-col gap-2 items-center">
            <p>The current count is : {{ count }}</p>
            <button class="border border-black p-3 rounded-md" @click="count++">Click Me</button>
        </div>
    </div>
</template>
