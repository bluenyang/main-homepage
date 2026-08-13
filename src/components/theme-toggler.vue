<script setup lang="ts">
  import { useDarkMode, type DarkMode } from '@/stores/user-dark-mode';
  import { Icon } from '@iconify/vue';

  const { toggleDarkMode }: DarkMode = useDarkMode();
</script>

<template>
  <button
    @click="toggleDarkMode"
    id="theme-toggle-btn"
    class="relative mr-10 flex h-9 w-9 items-center justify-center rounded-full p-2 transition-all duration-500 hover:scale-110 hover:bg-gray-200 focus:outline-none dark:hover:bg-gray-500"
    aria-label="Toggle dark mode"
  >
    <!-- Light-mode Icon -->
    <Icon
      icon="akar-icons:sun-fill"
      class="absolute size-8 text-black transition-all duration-500 ease-in-out dark:scale-0 dark:-rotate-120 dark:opacity-0"
    />
    <!-- DarkMode Icon -->
    <Icon
      icon="akar-icons:moon-fill"
      class="absolute size-8 scale-0 rotate-90 text-white opacity-0 transition-all duration-500 ease-in-out dark:scale-100 dark:rotate-0 dark:opacity-100"
    />
    <span class="sr-only">Toggle dark mode</span>
  </button>
</template>
