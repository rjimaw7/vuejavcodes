<script setup>
import { Code } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
</script>

<template>
    <header
        class="container sticky top-0 z-50 flex flex-col items-start justify-between gap-8 py-6 backdrop-blur md:flex-row md:items-center md:gap-0 md:px-12 md:py-3">
        <div>
            <Code class="primary-yellow cursor-pointer" :size="32" />
        </div>
        <div className="flex w-full items-center gap-4 md:w-auto">
            <Input type="search" placeholder="Search Codes" class="primary-yellow" />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger as-child>
                        <div>
                            <Switch id="admin-mode" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>OFF</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    </header>
</template>
