<script setup lang="ts">
  import { useSidebar } from '@/stores/use-sidebar';
  import { Icon } from '@iconify/vue';

  const { isOpen, toggleSidebar } = useSidebar();
</script>

<template>
  <button
    id="sidebar-toggler"
    type="button"
    class="text-foreground hover:bg-border/60 hover:text-accent focus-visible:outline-accent inline-flex size-9 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
    :aria-expanded="isOpen"
    aria-controls="sidebar-panel"
    aria-label="Toggle sidebar"
    @click="toggleSidebar"
  >
    <span class="sr-only">Toggle Sidebar</span>
    <Icon icon="lucide:menu" class="size-6" aria-hidden="true" />
  </button>
</template>
