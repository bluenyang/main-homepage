<script setup lang="ts">
  import { useDarkMode } from '@/stores/use-dark-mode';
  import { Icon } from '@iconify/vue';

  const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
  <button
    id="theme-toggle-btn"
    type="button"
    class="text-foreground hover:bg-border/60 hover:text-accent focus-visible:outline-accent relative flex size-9 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
    :aria-pressed="isDarkMode"
    aria-label="Toggle dark mode"
    @click="toggleDarkMode"
  >
    <Icon
      icon="akar-icons:sun-fill"
      class="text-foreground absolute size-5 transition-all duration-300 ease-in-out dark:scale-0 dark:-rotate-90 dark:opacity-0"
    />
    <Icon
      icon="akar-icons:moon-fill"
      class="text-foreground absolute size-5 scale-0 rotate-90 opacity-0 transition-all duration-300 ease-in-out dark:scale-100 dark:rotate-0 dark:opacity-100"
    />
    <span class="sr-only">Toggle dark mode</span>
  </button>
</template>
