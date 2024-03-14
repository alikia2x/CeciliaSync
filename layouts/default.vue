<template>
    <div class="relative h-screen w-screen bg-slate-950 text-white font-sans">
        <div class="fixed h-16 w-full border-b-2 border-zinc-700 z-10">
            <div class="absolute text-xl font-bold h-16 w-32 flex items-center 
            right-2 md:left-[10%]">
                <NuxtLink to="/">CeciliaSync</NuxtLink>
            </div>
            <div class="absolute h-16 pt-3 navbarLinks left-4 md:left-0">
                <Menubar class="h-10" :model="items">
                    <template #end>
                        <div class="flex align-items-center gap-2 justify-center">
                            <span :style="{
                                
                            }" class="indicator"></span>
                            <span>
                                Status:
                            </span>
                            <span>
                                {{ syncStatus }}
                            </span>
                        </div>
                    </template>
                </Menubar>
            </div>
        </div>
        <slot />
    </div>
</template>

<style>
.indicator{
    position: relative;
    content: '';
    width: 1.5rem;
    height: 1.5rem;
}
.indicator::before{
    content: '';
    position: absolute;
    right: 0;
    width: 0.7rem;
    height: 0.7rem;
    top: 0.4rem;
    border-radius: 50%;
    animation: pulse 3s infinite;
    background-color: v-bind('syncStatusColor');
}
@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.7;
    }
    50% {
        transform: scale(1.05);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0.7;
    }
}

@media screen and (min-width: 768px) {
    .navbarLinks {
        display: block;
        left: calc(10% + 10rem);
        width: calc(90% - 15rem);
    }
}

.p-menubar {
    background-color: rgb(2 6 23) !important;
}

.p-menuitem {
    margin: 0rem;
}

.p-menuitem-text {
    color: white;
}

.p-menuitem-content:hover {
    background-color: rgb(33 37 46);
}

.p-menubar .p-menuitem.p-highlight>.p-menuitem-content {
    background-color: rgb(33 37 46);
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content {
    background-color: rgb(33 37 46);
}

/* .p-menubar .p-menuitem > .p-menuitem-content:hover{
    background-color: rgb(45 47 54);
} */

.p-menuitem:hover>.p-menuitem-content {
    background-color: rgb(45 47 54) !important;
}

.p-submenu-list {
    margin-top: 0.5rem;
    background-color: rgb(33 37 46);
    border: 1px solid rgb(63, 68, 80);
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
const syncStatus = ref("Idle");
const syncStatusColor = ref("#00ff15");
const items = ref([
    {
        label: 'Guide',
        command: () => {
            navigateTo('/guide/')
        }
    },
    {
        label: 'Dashboard',
        command: () => {
            navigateTo('/dashboard/')
        }
    },
    {
        label: 'Sync',
        items: [
            {
                label: 'Sources',
                command: () => {
                    navigateTo('/sync/sources')
                }
            },
            {
                label: 'Destinations',
                command: () => {
                    navigateTo('/sync/destinations')
                }
            },
        ]
    },
]);
</script>