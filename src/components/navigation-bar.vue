<script setup lang="ts">
  import SidebarToggler from './sidebar-toggler.vue';
  import NavigationMenu from './navigation-menu.vue';
  import ThemeToggler from './theme-toggler.vue';
  import { onMounted, onUnmounted, ref } from 'vue';

  const isScrolled = ref(false);

  function handleScroll(): void {
    isScrolled.value = window.scrollY > 8;
  }

  onMounted(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6">
    <nav
      id="navbar"
      class="w-full max-w-6xl rounded-2xl border backdrop-blur-xl backdrop-saturate-150 transition-all duration-300"
      :class="
        isScrolled
          ? 'border-border/70 bg-surface/70 shadow-lg shadow-black/10'
          : 'border-white/15 bg-surface/25 shadow-none'
      "
    >
      <div class="flex h-14 items-center justify-between px-4 md:px-6">
        <div class="flex items-center gap-x-3">
          <SidebarToggler />
          <router-link
            to="/"
            class="font-display text-2xl text-foreground transition-colors duration-200 hover:text-accent"
          >
            BlueNyang
          </router-link>
        </div>

        <NavigationMenu />
        <ThemeToggler />
      </div>
    </nav>
  </div>
</template>
