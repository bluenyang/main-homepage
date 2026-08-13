<script setup lang="ts">
  import SidebarToggler from './sidebar-toggler.vue';
  import NavigationMenu from './navigation-menu.vue';
  import ThemeToggler from './theme-toggler.vue';
  import AboutSectionNav from './about/about-section-nav.vue';
  import { computed, onMounted, onUnmounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const isAboutPage = computed(() => route.name === 'About');
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
          : 'bg-surface/25 border-white/15 shadow-none'
      "
    >
      <div class="flex h-14 items-center justify-between gap-3 px-4 md:px-6">
        <div class="flex shrink-0 items-center gap-x-3">
          <SidebarToggler />
          <router-link
            to="/"
            class="font-display text-foreground hover:text-accent text-2xl transition-colors duration-200"
          >
            BlueNyang
          </router-link>
        </div>

        <AboutSectionNav v-if="isAboutPage" />
        <NavigationMenu v-else />
        <ThemeToggler />
      </div>
    </nav>
  </div>
</template>
